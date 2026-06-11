import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import MarketingPlanner from "./components/MarketingPlanner";
import ROICalculator from "./components/ROICalculator";
import CaseStudies from "./components/CaseStudies";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import CtaBanner from "./components/CtaBanner";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";
import AdminLoginModal from "./components/AdminLoginModal";
import AdminDashboard from "./components/AdminDashboard";
import CostView from "./components/CostView";

const memoryStorage = new Map<string, string>();

const safeSessionStorage = {
  getItem: (key: string): string | null => {
    try {
      return sessionStorage.getItem(key);
    } catch (e) {
      console.warn("Storage access is blocked or restricted:", e);
      return memoryStorage.get(key) || null;
    }
  },
  setItem: (key: string, value: string): void => {
    try {
      sessionStorage.setItem(key, value);
    } catch (e) {
      console.warn("Storage access is blocked or restricted:", e);
      memoryStorage.set(key, value);
    }
  },
  removeItem: (key: string): void => {
    try {
      sessionStorage.removeItem(key);
    } catch (e) {
      console.warn("Storage access is blocked or restricted:", e);
      memoryStorage.delete(key);
    }
  }
};

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [prefilledNotes, setPrefilledNotes] = useState("");
  const [preselectedService, setPreselectedService] = useState("");

  // Custom client router states
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [adminToken, setAdminToken] = useState<string | null>(safeSessionStorage.getItem("localbuild_admin_token"));
  const [isAdminLoginOpen, setIsAdminLoginOpen] = useState(false);

  // Sync client router with popstate history actions (back/forward)
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Securely verify session validity with the backend on mount or path change
  useEffect(() => {
    const verifySession = async () => {
      if (!adminToken) {
        // If visiting /admin-dashboard unauthorized, force opening login popup on the landing page
        if (currentPath === "/admin-dashboard") {
          window.history.pushState({}, "", "/");
          setCurrentPath("/");
          setIsAdminLoginOpen(true);
        }
        return;
      }

      try {
        const res = await fetch("/api/portal-session-v2", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token: adminToken })
        });
        const data = await res.json();
        if (!res.ok || !data.valid) {
          safeSessionStorage.removeItem("localbuild_admin_token");
          setAdminToken(null);
          if (currentPath === "/admin-dashboard") {
            window.history.pushState({}, "", "/");
            setCurrentPath("/");
            setIsAdminLoginOpen(true);
          }
        }
      } catch (err) {
        console.error("Admin session validation failure:", err);
      }
    };

    verifySession();
  }, [adminToken, currentPath]);

  // Admin login callbacks
  const handleAdminSuccess = (token: string) => {
    safeSessionStorage.setItem("localbuild_admin_token", token);
    setAdminToken(token);
    // Secure redirect to CRM Dashboard
    window.history.pushState({}, "", "/admin-dashboard");
    setCurrentPath("/admin-dashboard");
  };

  const handleAdminLogout = async () => {
    if (adminToken) {
      try {
        await fetch("/api/portal-verify-logout-v2", {
          method: "POST",
          headers: { "Authorization": `Bearer ${adminToken}` }
        });
      } catch (err) {
        console.error("Database logout synchronizer warning:", err);
      }
    }
    safeSessionStorage.removeItem("localbuild_admin_token");
    setAdminToken(null);
    window.history.pushState({}, "", "/");
    setCurrentPath("/");
  };

  const handleOpenContact = (notes?: string, service?: string) => {
    setPrefilledNotes(notes || "");
    setPreselectedService(service || "");
    setIsContactOpen(true);
  };

  const handleNavigate = (sectionId: string) => {
    // If we are currently on the Admin Dashboard view, return home and scroll
    if (currentPath !== "/") {
      window.history.pushState({}, "", "/");
      setCurrentPath("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 85; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // ROUTE RENDERING INTERCEPTOR
  if (currentPath === "/admin-dashboard" && adminToken) {
    return (
      <AdminDashboard 
        token={adminToken} 
        onLogout={handleAdminLogout} 
      />
    );
  }

  if (currentPath === "/cost") {
    return (
      <CostView 
        onBack={() => {
          window.history.pushState({}, "", "/");
          setCurrentPath("/");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        onQuoteClick={() => handleOpenContact()}
      />
    );
  }

  return (
    <div className="relative min-h-screen bg-white">
      {/* Structural fixed header bar */}
      <Navbar
        onQuoteClick={() => handleOpenContact()}
        onNavigate={handleNavigate}
        onCostClick={() => {
          window.history.pushState({}, "", "/cost");
          setCurrentPath("/cost");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />

      {/* Main Single-view Content Stacks */}
      <main className="relative">
        <Hero
          onQuoteClick={() => handleOpenContact()}
          onNavigate={handleNavigate}
          onCostClick={() => {
            window.history.pushState({}, "", "/cost");
            setCurrentPath("/cost");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        />
        
        <Services
          onQuoteClick={() => handleOpenContact()}
          onNavigate={handleNavigate}
        />

        <WhyChooseUs />

        <MarketingPlanner
          onQuoteClick={(notes) => handleOpenContact(notes)}
        />

        <ROICalculator
          onQuoteClick={(notes) => handleOpenContact(notes)}
        />

        <CaseStudies
          onQuoteClick={(notes) => handleOpenContact(notes)}
        />

        <Pricing
          onQuoteClick={(notes) => handleOpenContact(notes)}
        />

        <Testimonials />

        <CtaBanner
          onQuoteClick={() => handleOpenContact()}
        />
      </main>

      {/* Footer handles */}
      <Footer
        onNavigate={handleNavigate}
        onQuoteClick={() => handleOpenContact()}
        onAdminClick={() => setIsAdminLoginOpen(true)}
      />

      {/* Global Interactive Intake Drawer Form popup */}
      <ContactForm
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        prefilledNotes={prefilledNotes}
        preselectedService={preselectedService}
      />

      {/* Floating Call and WhatsApp Hotkeys */}
      <FloatingButtons />

      {/* Admin database portal popup authentication */}
      <AdminLoginModal
        isOpen={isAdminLoginOpen}
        onClose={() => setIsAdminLoginOpen(false)}
        onLoginSuccess={handleAdminSuccess}
      />
    </div>
  );
}
