import express from "express";
import path from "path";
import fs from "fs/promises";
import { createServer as createViteServer } from "vite";
import { initializeApp, getApps, getApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

// Initialize express app
const app = express();
const PORT = 3000;
const DB_FILE = path.join(process.cwd(), "leads_db.json");

app.use(express.json());

// In-memory session store for password authentication
// Maps token -> { expiresAt: number, lastActive: number }
interface Session {
  lastActive: number;
}
const sessions = new Map<string, Session>();
const SESSION_INACTIVITY_LIMIT = 30 * 60 * 1000; // 30 minutes in milliseconds

// Firebase Admin SDK lazy-initializer
let firebaseDb: any = null;
async function getFirebaseDb() {
  if (firebaseDb) return firebaseDb;
  try {
    const configPath = path.join(process.cwd(), "firebase-applet-config.json");
    const configFile = await fs.readFile(configPath, "utf-8");
    const firebaseConfig = JSON.parse(configFile);

    let fApp;
    if (getApps().length > 0) {
      fApp = getApp();
    } else {
      fApp = initializeApp({
        projectId: firebaseConfig.projectId
      });
    }

    firebaseDb = getFirestore(fApp, firebaseConfig.firestoreDatabaseId);
    console.log("Firebase Admin SDK initialized successfully with DB ID:", firebaseConfig.firestoreDatabaseId);
    return firebaseDb;
  } catch (err) {
    console.error("Failed to initialize Firebase Admin SDK:", err);
    return null;
  }
}

// Ensure the local fallback database file exists
async function ensureDbExists() {
  try {
    await fs.access(DB_FILE);
  } catch {
    await fs.writeFile(DB_FILE, JSON.stringify([], null, 2), "utf-8");
  }
}

// Read leads from local file
async function readLeads() {
  await ensureDbExists();
  const data = await fs.readFile(DB_FILE, "utf-8");
  try {
    return JSON.parse(data);
  } catch {
    return [];
  }
}

// Write leads to local file
async function writeLeads(leads: any[]) {
  await ensureDbExists();
  await fs.writeFile(DB_FILE, JSON.stringify(leads, null, 2), "utf-8");
}

// Authentication middleware for /api/admin/*
function requireAuth(req: express.Request, res: express.Response, next: express.NextFunction) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Unauthorized access" });
  }

  const token = authHeader.split(" ")[1];
  const session = sessions.get(token);

  if (!session) {
    return res.status(401).json({ error: "Session not found or expired" });
  }

  const now = Date.now();
  if (now - session.lastActive > SESSION_INACTIVITY_LIMIT) {
    sessions.delete(token);
    return res.status(401).json({ error: "Session expired due to 30 minutes of inactivity" });
  }

  // Update session activity timestamp
  session.lastActive = now;
  sessions.set(token, session);
  next();
}

// ==========================================
// API ROUTES
// ==========================================

// Public Route: Submit new lead from any form (Contact, Quote, Consultation, Planner, etc.)
app.post("/api/intake-records-v2", async (req, res) => {
  try {
    const { name, phone, email, businessName, businessUrl, service, budget, message, leadSource } = req.body;

    if (!name || !email) {
      return res.status(400).json({ error: "Name and Email are required fields." });
    }

    const newLead = {
      id: "LD-" + Date.now().toString(36).toUpperCase() + Math.random().toString(36).slice(2, 5).toUpperCase(),
      name: name || "",
      phone: phone || "",
      email: email || "",
      businessName: businessName || "",
      businessUrl: businessUrl || "",
      service: service || "General Consultation",
      budget: budget || "Not Specified",
      message: message || "",
      date: new Date().toISOString(),
      leadSource: leadSource || "Contact Form",
      status: "New"
    };

    // 1. Save to local fallback persistence
    const leads = await readLeads();
    leads.unshift(newLead);
    await writeLeads(leads);

    // 2. Try to save to Firestore Database
    const dbInstance = await getFirebaseDb();
    if (dbInstance) {
      try {
        await dbInstance.collection("leads").doc(newLead.id).set(newLead);
        console.log(`Lead ${newLead.id} synchronized successfully with Firestore.`);
      } catch (err) {
        console.error("Firestore insert exception:", err);
      }
    }

    res.status(201).json({ success: true, lead: newLead });
  } catch (error: any) {
    console.error("Error creating lead:", error);
    res.status(500).json({ error: "Internal server error saving lead data." });
  }
});

// Admin Route: Authenticate / Login (NO USERNAME, NO EMAIL, ONLY PASSWORD)
app.post("/api/portal-auth-v2", (req, res) => {
  const { password } = req.body;
  const configPassword = (process.env.ADMIN_PASSWORD || "LOCAL45090").trim();
  const inputPassword = (password || "").trim();

  console.log(`[AUTH] Admin login attempt. Input exact match: ${inputPassword === configPassword}. Active configured password is: "${configPassword}"`);

  if (!inputPassword || inputPassword !== configPassword) {
    return res.status(401).json({ error: "Invalid Password" });
  }

  // Create a secure token session
  const token = "TOK_" + Math.random().toString(36).substring(2) + Math.random().toString(36).substring(2);
  sessions.set(token, { lastActive: Date.now() });

  res.json({
    success: true,
    token,
    message: "Authorization successful."
  });
});

// Admin Route: Check Session status
app.post("/api/portal-session-v2", (req, res) => {
  const { token } = req.body;
  if (!token) return res.status(401).json({ valid: false });

  const session = sessions.get(token);
  if (!session) return res.status(401).json({ valid: false });

  const now = Date.now();
  if (now - session.lastActive > SESSION_INACTIVITY_LIMIT) {
    sessions.delete(token);
    return res.status(401).json({ valid: false });
  }

  // Update session active
  session.lastActive = now;
  sessions.set(token, session);

  res.json({ valid: true });
});

// Admin Route: Get all leads to display in CRM Dashboard
app.get("/api/portal-leads-v2", requireAuth, async (req, res) => {
  try {
    const dbInstance = await getFirebaseDb();
    if (dbInstance) {
      try {
        const snapshot = await dbInstance.collection("leads").orderBy("date", "desc").get();
        const firebaseLeads = snapshot.docs.map((doc: any) => doc.data());
        // Sync state back to local cache so fallback is always up to date
        await writeLeads(firebaseLeads);
        return res.json(firebaseLeads);
      } catch (err) {
        console.warn("Firestore fetch failed, fallback to local database logs:", err);
      }
    }

    const leads = await readLeads();
    res.json(leads);
  } catch (error) {
    console.error("Error reading leads:", error);
    res.status(500).json({ error: "Internal error reading Leads collection" });
  }
});

// Admin Route: Update lead status
app.post("/api/portal-leads-v2/:id/status", requireAuth, async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const allowedStatuses = ["New", "Contacted", "Interested", "Closed"];
    if (!allowedStatuses.includes(status)) {
      return res.status(400).json({ error: "Invalid status value" });
    }

    // 1. Update local cache
    const leads = await readLeads();
    const idx = leads.findIndex((l: any) => l.id === id);
    if (idx === -1) {
      return res.status(404).json({ error: "Lead not found" });
    }

    leads[idx].status = status;
    await writeLeads(leads);

    // 2. Update Firestore if available
    const dbInstance = await getFirebaseDb();
    if (dbInstance) {
      try {
        await dbInstance.collection("leads").doc(id).update({ status });
        console.log(`Lead ${id} status updated successfully with Firestore.`);
      } catch (err) {
        console.error("Firestore status update exception:", err);
      }
    }

    res.json({ success: true, lead: leads[idx] });
  } catch (err) {
    console.error("Error in status modification:", err);
    res.status(500).json({ error: "Internal server error updating Lead status" });
  }
});

// Admin Route: Delete lead permanently
app.delete("/api/portal-leads-v2/:id", requireAuth, async (req, res) => {
  try {
    const { id } = req.params;

    // 1. Delete from local cache
    const leads = await readLeads();
    const idx = leads.findIndex((l: any) => l.id === id);
    if (idx === -1) {
      return res.status(404).json({ error: "Lead not found" });
    }

    leads.splice(idx, 1);
    await writeLeads(leads);

    // 2. Delete from Firestore if available
    const dbInstance = await getFirebaseDb();
    if (dbInstance) {
      try {
        await dbInstance.collection("leads").doc(id).delete();
        console.log(`Lead ${id} permanently deleted from Firestore.`);
      } catch (err) {
        console.error("Firestore permanent deletion exception:", err);
      }
    }

    res.json({ success: true, message: "Lead deleted permanently." });
  } catch (err) {
    console.error("Error in lead deletion:", err);
    res.status(500).json({ error: "Internal server error deleting Lead" });
  }
});

// Admin Route: Handle manual sign out
app.post("/api/portal-verify-logout-v2", (req, res) => {
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer ")) {
    const token = authHeader.split(" ")[1];
    sessions.delete(token);
  }
  res.json({ success: true });
});

// ==========================================
// VITE OR STATIC FRONTEND SERVING
// ==========================================
async function start() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
    console.log("Vite development middleware integrated.");
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    // Serve index.html for all non-API paths (routing fallback)
    app.get("*all", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
    console.log("Static production assets mounted.");
  }

  // Bind to host 0.0.0.0 and port 3000
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
    console.log(`[BOOT] ADMIN PASSWORD IS CONFIGURED AS: "${(process.env.ADMIN_PASSWORD || "LOCAL45090").trim()}"`);
  });
}

start();
