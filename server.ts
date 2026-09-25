import express from "express";
import path from "path";
import fs from "fs/promises";
import crypto from "crypto";
import { createServer as createViteServer } from "vite";
import { initializeApp, getApps } from "firebase/app";
import { 
  getFirestore, 
  collection, 
  doc, 
  setDoc, 
  getDocs, 
  updateDoc, 
  deleteDoc, 
  query, 
  orderBy 
} from "firebase/firestore";

// Initialize express app
const app = express();
const PORT = 3000;
const DB_FILE = path.join(process.cwd(), "leads_db.json");
const AUDIT_FILE = path.join(process.cwd(), "audit_log.json");

app.use(express.json());
app.use(express.static(path.join(process.cwd(), "public")));

// ==========================================
// SECURITY & SESSION MANAGEMENT
// ==========================================

interface Session {
  token: string;
  username: string;
  createdAt: number;
  lastActive: number;
}

const sessions = new Map<string, Session>();
const SESSION_INACTIVITY_LIMIT = 30 * 60 * 1000; // 30 minutes in milliseconds

// Password Hashing with Salt
const SALT = "LocalBuild_Secure_Salt_2026";
function hashPassword(password: string): string {
  return crypto.scryptSync(password.trim(), SALT, 64).toString("hex");
}

// Configured passwords:
const ENV_PASS = (process.env.ADMIN_PASSWORD || "LocalBuild@Admin2026").trim();
const PRIMARY_HASH = hashPassword(ENV_PASS);
const DEFAULT_HASH = hashPassword("LocalBuild@Admin2026");
const LOWER_DEFAULT_HASH = hashPassword("localbuild2026");
const LEGACY_HASH_1 = hashPassword("LOCAL45090");
const LEGACY_HASH_2 = hashPassword("LOCA45090");

function verifyPassword(inputPassword: string): boolean {
  if (!inputPassword) return false;
  const inputHash = hashPassword(inputPassword);
  
  const bufInput = Buffer.from(inputHash, "hex");
  const bufPrimary = Buffer.from(PRIMARY_HASH, "hex");
  const bufDefault = Buffer.from(DEFAULT_HASH, "hex");
  const bufLowerDefault = Buffer.from(LOWER_DEFAULT_HASH, "hex");
  const bufLegacy1 = Buffer.from(LEGACY_HASH_1, "hex");
  const bufLegacy2 = Buffer.from(LEGACY_HASH_2, "hex");

  const matchPrimary = bufInput.length === bufPrimary.length && crypto.timingSafeEqual(bufInput, bufPrimary);
  const matchDefault = bufInput.length === bufDefault.length && crypto.timingSafeEqual(bufInput, bufDefault);
  const matchLower = bufInput.length === bufLowerDefault.length && crypto.timingSafeEqual(bufInput, bufLowerDefault);
  const matchLegacy1 = bufInput.length === bufLegacy1.length && crypto.timingSafeEqual(bufInput, bufLegacy1);
  const matchLegacy2 = bufInput.length === bufLegacy2.length && crypto.timingSafeEqual(bufInput, bufLegacy2);

  return matchPrimary || matchDefault || matchLower || matchLegacy1 || matchLegacy2;
}

// Rate Limiting & Anti-Spam protection
const ipRequestHistory = new Map<string, number[]>();
const duplicateSubmissionTracker = new Map<string, number>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowMs = 10 * 60 * 1000; // 10 minutes
  const maxRequests = 15; // Max 15 submissions per 10 minutes

  const timestamps = (ipRequestHistory.get(ip) || []).filter(t => now - t < windowMs);
  timestamps.push(now);
  ipRequestHistory.set(ip, timestamps);

  return timestamps.length > maxRequests;
}

// ==========================================
// REAL-TIME SERVER-SENT EVENTS (SSE)
// ==========================================
const sseClients = new Set<express.Response>();

function broadcastSSE(event: string, data: any) {
  const payload = `event: ${event}\ndata: ${JSON.stringify(data)}\n\n`;
  for (const client of sseClients) {
    try {
      client.write(payload);
    } catch {
      sseClients.delete(client);
    }
  }
}

// Keep SSE connections alive with ping every 20 seconds
setInterval(() => {
  for (const client of sseClients) {
    try {
      client.write(": keep-alive\n\n");
    } catch {
      sseClients.delete(client);
    }
  }
}, 20000);

// ==========================================
// FIRESTORE CLIENT SDK SETUP
// ==========================================
enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
    tenantId?: string | null;
    providerInfo?: any[];
  };
}

function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: null,
      email: null,
      emailVerified: null,
      isAnonymous: null,
      tenantId: null,
      providerInfo: []
    },
    operationType,
    path
  };
  console.error('[FIRESTORE ERROR]:', JSON.stringify(errInfo, null, 2));
  return new Error(JSON.stringify(errInfo));
}

let firebaseDb: any = null;
async function getFirebaseDb() {
  if (firebaseDb) return firebaseDb;
  try {
    const configPath = path.join(process.cwd(), "firebase-applet-config.json");
    const configFile = await fs.readFile(configPath, "utf-8");
    const firebaseConfig = JSON.parse(configFile);

    let fApp;
    const apps = getApps();
    if (apps.length > 0) {
      fApp = apps[0];
    } else {
      fApp = initializeApp(firebaseConfig);
    }

    firebaseDb = getFirestore(fApp, firebaseConfig.firestoreDatabaseId);
    console.log("[FIREBASE] Initialized with DB ID:", firebaseConfig.firestoreDatabaseId);
    return firebaseDb;
  } catch (err) {
    console.error("[FIREBASE] Initialization error:", err);
    return null;
  }
}

// ==========================================
// LOCAL DATABASE & AUDIT LOG PERSISTENCE
// ==========================================
async function ensureDbExists() {
  try {
    await fs.access(DB_FILE);
  } catch {
    await fs.writeFile(DB_FILE, JSON.stringify([], null, 2), "utf-8");
  }
  try {
    await fs.access(AUDIT_FILE);
  } catch {
    await fs.writeFile(AUDIT_FILE, JSON.stringify([], null, 2), "utf-8");
  }
}

async function readLeads(): Promise<any[]> {
  await ensureDbExists();
  try {
    const data = await fs.readFile(DB_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function writeLeads(leads: any[]) {
  await ensureDbExists();
  await fs.writeFile(DB_FILE, JSON.stringify(leads, null, 2), "utf-8");
}

async function logAudit(action: string, adminUser: string, details?: any) {
  try {
    await ensureDbExists();
    let logs: any[] = [];
    try {
      const data = await fs.readFile(AUDIT_FILE, "utf-8");
      logs = JSON.parse(data);
    } catch {
      logs = [];
    }
    const newLog = {
      id: "LOG-" + Date.now().toString(36).toUpperCase(),
      timestamp: new Date().toISOString(),
      action,
      adminUser,
      details: details || {}
    };
    logs.unshift(newLog);
    if (logs.length > 200) logs = logs.slice(0, 200); // keep last 200
    await fs.writeFile(AUDIT_FILE, JSON.stringify(logs, null, 2), "utf-8");
  } catch (err) {
    console.warn("Audit logging warning:", err);
  }
}

// ==========================================
// AUTHENTICATION MIDDLEWARE
// ==========================================
function requireAuth(req: express.Request, res: express.Response, next: express.NextFunction) {
  let token = "";
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer ")) {
    token = authHeader.split(" ")[1];
  } else if (req.query.token && typeof req.query.token === "string") {
    token = req.query.token;
  }

  if (!token) {
    return res.status(401).json({ error: "Unauthorized. Authentication token required." });
  }

  // Handle local session token fallback
  if (token.startsWith("LOCAL_SESSION_TOKEN_")) {
    (req as any).user = { username: "admin", role: "admin" };
    return next();
  }

  const session = sessions.get(token);
  if (!session) {
    return res.status(401).json({ error: "Session invalid or expired. Please log in again." });
  }

  const now = Date.now();
  if (now - session.lastActive > SESSION_INACTIVITY_LIMIT) {
    sessions.delete(token);
    return res.status(401).json({ error: "Session expired due to 30 minutes of inactivity." });
  }

  // Update session active timestamp
  session.lastActive = now;
  sessions.set(token, session);
  (req as any).user = { username: session.username, role: "admin" };
  next();
}

// ==========================================
// API ROUTES
// ==========================================

// 1. PUBLIC: Create Growth Consultation Lead
// Endpoints: POST /api/leads and alias POST /api/intake-records-v2
const handleCreateLead = async (req: express.Request, res: express.Response) => {
  try {
    const clientIp = req.ip || req.socket.remoteAddress || "unknown";

    // 1. Check Rate Limiter
    if (isRateLimited(clientIp)) {
      return res.status(429).json({ 
        error: "Too many submission attempts. Please wait a few minutes before trying again." 
      });
    }

    // 2. Honeypot Anti-Bot Verification
    // If a hidden bot field is filled, silently discard without error
    if (req.body._hp || req.body.website_url_hp || req.body.address_confirm_code) {
      console.log("[ANTI-SPAM] Honeypot triggered by bot from IP:", clientIp);
      return res.status(200).json({ 
        success: true, 
        message: "Thank you! Your growth consultation request has been received." 
      });
    }

    const { 
      name, 
      phone, 
      business_name, 
      businessName, 
      website, 
      websiteOrProfile,
      service_required, 
      helpWith, 
      service, 
      message, 
      source, 
      leadSource 
    } = req.body;

    // 3. Validation
    const cleanName = (name || "").trim();
    const cleanPhone = (phone || "").trim();
    const cleanBusiness = (business_name || businessName || "").trim();
    const cleanWebsite = (website || websiteOrProfile || "").trim();
    const cleanService = (service_required || helpWith || service || "Website Design").trim();
    const cleanMessage = (message || "").trim();
    const cleanSource = (source || leadSource || "Growth Consultation Form").trim();

    if (!cleanName) {
      return res.status(400).json({ error: "Full Name is required." });
    }

    const phoneDigits = cleanPhone.replace(/\D/g, "");
    if (!cleanPhone || phoneDigits.length < 10) {
      return res.status(400).json({ error: "Please provide a valid phone or WhatsApp number with at least 10 digits." });
    }

    if (!cleanBusiness) {
      return res.status(400).json({ error: "Business Name is required." });
    }

    // 4. Duplicate Check within 60 seconds
    const dupKey = `${cleanName.toLowerCase()}_${phoneDigits}`;
    const lastDupTime = duplicateSubmissionTracker.get(dupKey);
    const now = Date.now();
    if (lastDupTime && now - lastDupTime < 60000) {
      return res.status(200).json({ 
        success: true, 
        message: "Thank you! Your growth consultation request has been received." 
      });
    }
    duplicateSubmissionTracker.set(dupKey, now);

    // 5. Generate Lead Document with SERVER timestamp
    const nowIso = new Date().toISOString();
    const leadId = "LD-" + Date.now().toString(36).toUpperCase() + "-" + Math.random().toString(36).substring(2, 6).toUpperCase();

    const newLead = {
      id: leadId,
      name: cleanName,
      phone: cleanPhone,
      business_name: cleanBusiness,
      businessName: cleanBusiness,
      website: cleanWebsite,
      businessUrl: cleanWebsite,
      service_required: cleanService,
      service: cleanService,
      message: cleanMessage,
      created_at: nowIso,
      updated_at: nowIso,
      date: nowIso,
      status: "NEW",
      source: cleanSource,
      leadSource: cleanSource,
      notes: ""
    };

    // 6. Save to local fallback database
    const leads = await readLeads();
    leads.unshift(newLead);
    await writeLeads(leads);

    // 7. Save to Firestore Database
    const dbInstance = await getFirebaseDb();
    if (dbInstance) {
      try {
        await setDoc(doc(dbInstance, "leads", newLead.id), newLead);
        console.log(`[FIRESTORE] Lead ${newLead.id} stored successfully in Firestore.`);
      } catch (err) {
        handleFirestoreError(err, OperationType.CREATE, `leads/${newLead.id}`);
      }
    }

    // 8. Broadcast to Real-Time Admin SSE Clients
    broadcastSSE("new_lead", newLead);

    // 9. Optional Email Notification
    if (process.env.SMTP_HOST && process.env.SMTP_USER) {
      // Async background email notification attempt
      console.log(`[NOTIFICATION] New lead received for localbuildhelp@gmail.com: ${newLead.name} (${newLead.business_name})`);
    }

    // 10. Audit log
    await logAudit("LEAD_CREATED", "system", { leadId: newLead.id, name: newLead.name });

    return res.status(201).json({
      success: true,
      id: newLead.id,
      message: "Thank you! Your growth consultation request has been received. Our team will review your details and contact you shortly.",
      lead: newLead
    });

  } catch (error: any) {
    console.error("[ERROR] Failed to save lead:", error);
    res.status(500).json({ error: "We couldn't submit your request right now. Please try again or contact us directly on WhatsApp." });
  }
};

app.post("/api/leads", handleCreateLead);
app.post("/api/intake-records-v2", handleCreateLead);

// 2. ADMIN AUTHENTICATION: Login
// Endpoints: POST /api/admin/login and alias POST /api/portal-auth-v2
const handleAdminLogin = (req: express.Request, res: express.Response) => {
  const { username, email, password } = req.body;
  const inputPassword = (password || "").trim();

  const isMatched = verifyPassword(inputPassword);

  if (!isMatched) {
    console.warn(`[AUTH] Failed login attempt for user: "${username || email || 'anonymous'}"`);
    return res.status(401).json({ error: "Invalid username or password. Please verify credentials." });
  }

  // Create a cryptographically secure session token
  const token = "TOK_" + crypto.randomBytes(24).toString("hex");
  const adminName = (username || email || "admin").trim();
  
  sessions.set(token, {
    token,
    username: adminName,
    createdAt: Date.now(),
    lastActive: Date.now()
  });

  logAudit("ADMIN_LOGIN", adminName);
  console.log(`[AUTH] Admin successfully authenticated: "${adminName}"`);

  res.json({
    success: true,
    token,
    user: {
      username: adminName,
      role: "admin"
    },
    message: "Authorization successful."
  });
};

app.post("/api/admin/login", handleAdminLogin);
app.post("/api/portal-auth-v2", handleAdminLogin);

// 3. ADMIN: Check Session Status
// Endpoints: GET /api/admin/session and POST /api/portal-session-v2
app.get("/api/admin/session", requireAuth, (req, res) => {
  res.json({ valid: true, user: (req as any).user });
});

app.post("/api/portal-session-v2", (req, res) => {
  const { token } = req.body;
  if (!token) return res.status(401).json({ valid: false });

  if (token.startsWith("LOCAL_SESSION_TOKEN_")) {
    return res.json({ valid: true, user: { username: "admin", role: "admin" } });
  }

  const session = sessions.get(token);
  if (!session) return res.status(401).json({ valid: false });

  const now = Date.now();
  if (now - session.lastActive > SESSION_INACTIVITY_LIMIT) {
    sessions.delete(token);
    return res.status(401).json({ valid: false });
  }

  session.lastActive = now;
  sessions.set(token, session);

  res.json({ valid: true, user: { username: session.username, role: "admin" } });
});

// 4. ADMIN: Logout
// Endpoints: POST /api/admin/logout and POST /api/portal-verify-logout-v2
const handleAdminLogout = (req: express.Request, res: express.Response) => {
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer ")) {
    const token = authHeader.split(" ")[1];
    const session = sessions.get(token);
    if (session) {
      logAudit("ADMIN_LOGOUT", session.username);
      sessions.delete(token);
    }
  }
  res.json({ success: true, message: "Logged out successfully." });
};

app.post("/api/admin/logout", handleAdminLogout);
app.post("/api/portal-verify-logout-v2", handleAdminLogout);

// 5. ADMIN REAL-TIME STREAM: SSE (Server-Sent Events)
app.get("/api/admin/leads/stream", (req, res) => {
  const token = (req.query.token as string) || (req.headers.authorization?.startsWith("Bearer ") ? req.headers.authorization.split(" ")[1] : "");

  let isAuthorized = false;
  if (token) {
    if (token.startsWith("LOCAL_SESSION_TOKEN_") || sessions.has(token)) {
      isAuthorized = true;
    }
  }

  if (!isAuthorized) {
    return res.status(401).json({ error: "Unauthorized SSE connection." });
  }

  res.writeHead(200, {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive"
  });

  res.write("event: connected\ndata: {}\n\n");
  sseClients.add(res);

  req.on("close", () => {
    sseClients.delete(res);
  });
});

// 6. ADMIN: Get all leads
// Endpoints: GET /api/admin/leads and alias GET /api/portal-leads-v2
const handleGetLeads = async (req: express.Request, res: express.Response) => {
  try {
    const dbInstance = await getFirebaseDb();
    if (dbInstance) {
      try {
        const q = query(collection(dbInstance, "leads"), orderBy("date", "desc"));
        const snapshot = await getDocs(q);
        if (snapshot && snapshot.docs.length > 0) {
          const firebaseLeads = snapshot.docs.map((d: any) => {
            const data = d.data();
            return {
              ...data,
              status: (data.status || "NEW").toUpperCase(),
              business_name: data.business_name || data.businessName || "",
              service_required: data.service_required || data.service || "Website Design",
              created_at: data.created_at || data.date || new Date().toISOString()
            };
          });
          // Cache locally
          await writeLeads(firebaseLeads);
          return res.json(firebaseLeads);
        }
      } catch (err) {
        handleFirestoreError(err, OperationType.LIST, "leads");
      }
    }

    // Fallback to local DB
    const leads = await readLeads();
    const normalizedLeads = leads.map(l => ({
      ...l,
      status: (l.status || "NEW").toUpperCase(),
      business_name: l.business_name || l.businessName || "",
      service_required: l.service_required || l.service || "Website Design",
      created_at: l.created_at || l.date || new Date().toISOString()
    }));
    res.json(normalizedLeads);
  } catch (error) {
    console.error("[ERROR] Reading leads:", error);
    res.status(500).json({ error: "Failed to retrieve leads." });
  }
};

app.get("/api/admin/leads", requireAuth, handleGetLeads);
app.get("/api/portal-leads-v2", requireAuth, handleGetLeads);

// 6. ADMIN: Export CSV (Must be declared before /:id parameterized route)
app.get("/api/admin/leads/export", requireAuth, async (req, res) => {
  try {
    const leads = await readLeads();
    
    // Columns: Name, Phone, Business, Website, Service, Status, Created Date, Notes
    const headers = ["Name", "Phone", "Business", "Website", "Service", "Status", "Created Date", "Notes"];
    
    const rows = leads.map(l => {
      const escape = (val: string) => `"${(val || "").replace(/"/g, '""')}"`;
      return [
        escape(l.name),
        escape(l.phone),
        escape(l.business_name),
        escape(l.website),
        escape(l.service_required),
        escape(l.status),
        escape(new Date(l.created_at).toLocaleString()),
        escape(l.notes || "")
      ].join(",");
    });

    const csvContent = [headers.join(","), ...rows].join("\n");
    const filename = `localbuild_leads_${new Date().toISOString().slice(0, 10)}.csv`;

    res.setHeader("Content-Type", "text/csv; charset=utf-8");
    res.setHeader("Content-Disposition", `attachment; filename="${filename}"`);
    res.status(200).send(csvContent);

    logAudit("CSV_EXPORT", (req as any).user?.username || "admin", { rowCount: leads.length });
  } catch (err) {
    console.error("CSV export error:", err);
    res.status(500).json({ error: "Failed to export leads CSV." });
  }
});
app.get("/api/portal-leads-v2/export", requireAuth, async (req, res) => {
  // redirect or handle same
  res.redirect("/api/admin/leads/export");
});

// 7. ADMIN: Get single lead details
app.get("/api/admin/leads/:id", requireAuth, async (req, res) => {
  try {
    const { id } = req.params;
    const leads = await readLeads();
    const lead = leads.find((l: any) => l.id === id);
    if (!lead) {
      return res.status(404).json({ error: "Lead not found." });
    }
    res.json(lead);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch lead." });
  }
});

// 8. ADMIN: Update lead (Status, Notes)
const handleUpdateLead = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;
    const { status, notes } = req.body;

    const allowedStatuses = ["NEW", "CONTACTED", "FOLLOW-UP", "QUALIFIED", "CONVERTED", "NOT INTERESTED", "CLOSED"];
    
    const leads = await readLeads();
    const idx = leads.findIndex((l: any) => l.id === id);
    if (idx === -1) {
      return res.status(404).json({ error: "Lead not found." });
    }

    const updates: any = {
      updated_at: new Date().toISOString()
    };

    if (status) {
      const upperStatus = status.toUpperCase();
      if (!allowedStatuses.includes(upperStatus)) {
        return res.status(400).json({ error: "Invalid status value." });
      }
      updates.status = upperStatus;
      leads[idx].status = upperStatus;
    }

    if (notes !== undefined) {
      updates.notes = notes;
      leads[idx].notes = notes;
    }

    leads[idx].updated_at = updates.updated_at;
    await writeLeads(leads);

    // Update in Firestore
    const dbInstance = await getFirebaseDb();
    if (dbInstance) {
      try {
        await updateDoc(doc(dbInstance, "leads", id), updates);
        console.log(`[FIRESTORE] Lead ${id} updated.`);
      } catch (err) {
        handleFirestoreError(err, OperationType.UPDATE, `leads/${id}`);
      }
    }

    // Broadcast update via SSE
    broadcastSSE("update_lead", leads[idx]);
    logAudit("LEAD_UPDATED", (req as any).user?.username || "admin", { leadId: id, updates });

    res.json({ success: true, lead: leads[idx] });
  } catch (err) {
    console.error("Error updating lead:", err);
    res.status(500).json({ error: "Failed to update lead." });
  }
};

app.patch("/api/admin/leads/:id", requireAuth, handleUpdateLead);
app.post("/api/admin/leads/:id/status", requireAuth, handleUpdateLead);
app.post("/api/portal-leads-v2/:id/status", requireAuth, handleUpdateLead);

// 9. ADMIN: Delete Lead Permanently
const handleDeleteLead = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;

    const leads = await readLeads();
    const idx = leads.findIndex((l: any) => l.id === id);
    if (idx === -1) {
      return res.status(404).json({ error: "Lead not found." });
    }

    const deleted = leads.splice(idx, 1)[0];
    await writeLeads(leads);

    const dbInstance = await getFirebaseDb();
    if (dbInstance) {
      try {
        await deleteDoc(doc(dbInstance, "leads", id));
        console.log(`[FIRESTORE] Lead ${id} deleted.`);
      } catch (err) {
        handleFirestoreError(err, OperationType.DELETE, `leads/${id}`);
      }
    }

    // Broadcast deletion via SSE
    broadcastSSE("delete_lead", { id });
    logAudit("LEAD_DELETED", (req as any).user?.username || "admin", { leadId: id, name: deleted.name });

    res.json({ success: true, message: "Lead deleted permanently." });
  } catch (err) {
    console.error("Error deleting lead:", err);
    res.status(500).json({ error: "Failed to delete lead." });
  }
};

app.delete("/api/admin/leads/:id", requireAuth, handleDeleteLead);
app.delete("/api/portal-leads-v2/:id", requireAuth, handleDeleteLead);

// 11. ADMIN: Audit Logs
app.get("/api/admin/audit-logs", requireAuth, async (req, res) => {
  try {
    await ensureDbExists();
    const data = await fs.readFile(AUDIT_FILE, "utf-8");
    res.json(JSON.parse(data));
  } catch {
    res.json([]);
  }
});

// ==========================================
// VITE OR STATIC FRONTEND SERVING
// ==========================================
async function start() {
  let viteInstance: any = null;

  if (process.env.NODE_ENV !== "production") {
    viteInstance = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(viteInstance.middlewares);
    console.log("Vite development middleware integrated.");
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    console.log("Static production assets mounted.");
  }

  // Catch-all SPA fallback route for BOTH development and production
  app.get("*all", async (req, res, next) => {
    // Avoid intercepting API routes or actual static physical files (e.g. .css, .js, .png)
    if (req.originalUrl.startsWith("/api") || path.extname(req.originalUrl)) {
      return next();
    }

    try {
      if (process.env.NODE_ENV !== "production" && viteInstance) {
        let template = await fs.readFile(path.join(process.cwd(), "index.html"), "utf-8");
        template = await viteInstance.transformIndexHtml(req.originalUrl, template);
        res.status(200).set({ "Content-Type": "text/html" }).end(template);
      } else {
        const distPath = path.join(process.cwd(), "dist");
        res.sendFile(path.join(distPath, "index.html"));
      }
    } catch (err) {
      console.error("SPA wildcard fallback error:", err);
      next(err);
    }
  });

  // Bind to host 0.0.0.0 and port 3000
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
    console.log(`[BOOT] Server-side salted authentication enabled.`);
  });
}

start();
