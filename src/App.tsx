import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Commitments from "./components/Commitments";
import Industries from "./components/Industries";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import AccountabilityModel from "./components/AccountabilityModel";
import Process from "./components/Process";
import CaseStudies from "./components/CaseStudies";
import ROICalculator from "./components/ROICalculator";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import LegalModal from "./components/LegalModals";
import FloatingButtons from "./components/FloatingButtons";
import AdminLoginModal from "./components/AdminLoginModal";
import AdminDashboard from "./components/AdminDashboard";
import CostView from "./components/CostView";
import ServicePage from "./components/ServicePage";
import AboutPage from "./components/AboutPage";
import ServicesPage from "./components/ServicesPage";
import ContactPage from "./components/ContactPage";
import BlogPage, { BLOG_POSTS } from "./components/BlogPage";
import SEOStrategyHub from "./components/SEOStrategyHub";

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
  const [legalModalType, setLegalModalType] = useState<"privacy" | "terms" | null>(null);

  // Active section tracking for navbar
  const [activeSection, setActiveSection] = useState("hero");

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

  // Update Page Title and Meta Description on route change
  useEffect(() => {
    let title = "LocalBuild — Digital Marketing Agency in Patna | 3-Year Support";
    let desc = "High-converting websites, Google Ads, Meta Ads, local SEO, and AI automation for local businesses. 3-year support, direct ad billing, and transparent reporting.";

    if (currentPath === "/about") {
      title = "About LocalBuild | Digital Marketing Agency in Patna";
      desc = "LocalBuild builds the websites, campaigns and systems that turn local search interest into booked customers. 3-year support, direct platform billing, transparent reporting.";
    } else if (currentPath === "/services") {
      title = "Services | Websites, Google Ads, Local SEO & Automation | LocalBuild";
      desc = "Websites, Google Ads, Meta Ads, Google Business Profile, local SEO, content and AI automation for local businesses. Three-year support, direct platform billing, clear reporting.";
    } else if (currentPath === "/contact") {
      title = "Contact LocalBuild | Book a Free 30-Minute Discovery Call";
      desc = "Talk to LocalBuild about your local market. Book a free 30-minute discovery call, message us on WhatsApp, or call +91 91289 83788. Patna, Bihar. Response within 24 hours.";
    } else if (currentPath === "/blog" || currentPath.startsWith("/blog/")) {
      if (currentPath.startsWith("/blog/")) {
        const slug = currentPath.substring("/blog/".length);
        const post = BLOG_POSTS.find((p) => p.slug === slug);
        if (post) {
          title = `${post.title} | LocalBuild Blog`;
          desc = post.excerpt;
        } else {
          title = "Local Growth Insights | LocalBuild Blog";
          desc = "Practical notes on Google Business Profile, local SEO, Google and Meta ads, landing page speed and lead automation — written for local business owners, in plain English.";
        }
      } else {
        title = "Local Growth Insights | LocalBuild Blog";
        desc = "Practical notes on Google Business Profile, local SEO, Google and Meta ads, landing page speed and lead automation — written for local business owners, in plain English.";
      }
    }

    document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", desc);
    }
  }, [currentPath]);

  // IntersectionObserver to update active section in navbar on homepage
  useEffect(() => {
    if (currentPath !== "/") return;

    const sectionIds = [
      "hero",
      "commitments",
      "industries",
      "services",
      "why-us",
      "accountability",
      "process",
      "case-studies",
      "roi",
      "pricing",
      "faq",
      "contact"
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentPath]);

  // Securely verify admin session validity with backend
  useEffect(() => {
    const verifySession = async () => {
      if (!adminToken) {
        if (currentPath === "/admin-dashboard") {
          window.history.pushState({}, "", "/");
          setCurrentPath("/");
          setIsAdminLoginOpen(true);
        }
        return;
      }

      if (adminToken.startsWith("LOCAL_SESSION_TOKEN_")) {
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

  const handleOpenContact = (service?: string, notes?: string) => {
    setPreselectedService(service || "");
    setPrefilledNotes(notes || "");
    setIsContactOpen(true);
  };

  const handleNavigate = (pathOrId: string) => {
    // Check if target is a path
    if (pathOrId.startsWith("/")) {
      window.history.pushState({}, "", pathOrId);
      setCurrentPath(pathOrId);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // Target is an anchor on homepage
    if (currentPath !== "/") {
      window.history.pushState({}, "", `/#${pathOrId}`);
      setCurrentPath("/");
      setTimeout(() => {
        const element = document.getElementById(pathOrId);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
        }
      }, 150);
      return;
    }

    const element = document.getElementById(pathOrId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
    }
  };

  // ROUTE: ADMIN DASHBOARD
  if (currentPath === "/admin-dashboard" && adminToken) {
    return (
      <AdminDashboard 
        token={adminToken} 
        onLogout={handleAdminLogout} 
      />
    );
  }

  // ROUTE: ABOUT PAGE (/about)
  if (currentPath === "/about") {
    return (
      <div className="relative min-h-screen bg-white">
        <Navbar
          onQuoteClick={(srv) => handleOpenContact(srv)}
          onNavigate={handleNavigate}
          currentPath={currentPath}
        />
        <div className="pt-16">
          <AboutPage
            onQuoteClick={(service, notes) => handleOpenContact(service, notes)}
            onNavigate={handleNavigate}
          />
        </div>
        <Footer
          onQuoteClick={(srv) => handleOpenContact(srv)}
          onNavigate={handleNavigate}
        />
        <FloatingButtons />
        <ContactForm
          isOpen={isContactOpen}
          onClose={() => setIsContactOpen(false)}
          prefilledNotes={prefilledNotes}
          preselectedService={preselectedService}
        />
      </div>
    );
  }

  // ROUTE: SERVICES PAGE (/services)
  if (currentPath === "/services") {
    return (
      <div className="relative min-h-screen bg-white">
        <Navbar
          onQuoteClick={(srv) => handleOpenContact(srv)}
          onNavigate={handleNavigate}
          currentPath={currentPath}
        />
        <div className="pt-16">
          <ServicesPage
            onQuoteClick={(service, notes) => handleOpenContact(service, notes)}
            onNavigate={handleNavigate}
          />
        </div>
        <Footer
          onQuoteClick={(srv) => handleOpenContact(srv)}
          onNavigate={handleNavigate}
        />
        <FloatingButtons />
        <ContactForm
          isOpen={isContactOpen}
          onClose={() => setIsContactOpen(false)}
          prefilledNotes={prefilledNotes}
          preselectedService={preselectedService}
        />
      </div>
    );
  }

  // ROUTE: CONTACT PAGE (/contact)
  if (currentPath === "/contact") {
    return (
      <div className="relative min-h-screen bg-white">
        <Navbar
          onQuoteClick={(srv) => handleOpenContact(srv)}
          onNavigate={handleNavigate}
          currentPath={currentPath}
        />
        <div className="pt-16">
          <ContactPage
            onQuoteClick={(service, notes) => handleOpenContact(service, notes)}
            preselectedService={preselectedService}
            prefilledNotes={prefilledNotes}
          />
        </div>
        <Footer
          onQuoteClick={(srv) => handleOpenContact(srv)}
          onNavigate={handleNavigate}
        />
        <FloatingButtons />
        <ContactForm
          isOpen={isContactOpen}
          onClose={() => setIsContactOpen(false)}
          prefilledNotes={prefilledNotes}
          preselectedService={preselectedService}
        />
      </div>
    );
  }

  // ROUTE: BLOG ENGINE (/blog & /blog/:slug)
  if (currentPath === "/blog" || currentPath.startsWith("/blog/")) {
    const isDetail = currentPath.startsWith("/blog/");
    const slug = isDetail ? currentPath.substring("/blog/".length) : null;
    return (
      <div className="relative min-h-screen bg-white">
        <Navbar
          onQuoteClick={(srv) => handleOpenContact(srv)}
          onNavigate={handleNavigate}
          currentPath={currentPath}
        />
        <div className="pt-16">
          <BlogPage
            currentSlug={slug}
            onNavigate={handleNavigate}
            onQuoteClick={(service, notes) => handleOpenContact(service, notes)}
          />
        </div>
        <Footer
          onQuoteClick={(srv) => handleOpenContact(srv)}
          onNavigate={handleNavigate}
        />
        <FloatingButtons />
        <ContactForm
          isOpen={isContactOpen}
          onClose={() => setIsContactOpen(false)}
          prefilledNotes={prefilledNotes}
          preselectedService={preselectedService}
        />
      </div>
    );
  }

  // ROUTE: SERVICE DETAIL SLUG (/services/:slug)
  if (currentPath.startsWith("/services/")) {
    const slug = currentPath.substring("/services/".length);
    return (
      <div className="relative min-h-screen bg-white">
        <Navbar
          onQuoteClick={(srv) => handleOpenContact(srv)}
          onNavigate={handleNavigate}
          currentPath={currentPath}
        />
        <div className="pt-16">
          <ServicePage
            slug={slug}
            onBack={() => handleNavigate("/services")}
            onNavigateToOtherService={(otherSlug) => handleNavigate(`/services/${otherSlug}`)}
            onQuoteClick={(notes, service) => handleOpenContact(service, notes)}
          />
        </div>
        <Footer
          onQuoteClick={(srv) => handleOpenContact(srv)}
          onNavigate={handleNavigate}
        />
        <FloatingButtons />
        <ContactForm
          isOpen={isContactOpen}
          onClose={() => setIsContactOpen(false)}
          prefilledNotes={prefilledNotes}
          preselectedService={preselectedService}
        />
      </div>
    );
  }

  // ROUTE: SEO STRATEGY HUB (/seo)
  if (currentPath === "/seo") {
    return (
      <div className="relative min-h-screen bg-white">
        <Navbar
          onQuoteClick={(srv) => handleOpenContact(srv)}
          onNavigate={handleNavigate}
          currentPath={currentPath}
        />
        <SEOStrategyHub
          onBack={() => handleNavigate("/")}
          onQuoteClick={() => handleOpenContact()}
        />
        <Footer
          onQuoteClick={(srv) => handleOpenContact(srv)}
          onNavigate={handleNavigate}
        />
        <FloatingButtons />
        <ContactForm
          isOpen={isContactOpen}
          onClose={() => setIsContactOpen(false)}
          prefilledNotes={prefilledNotes}
          preselectedService={preselectedService}
        />
      </div>
    );
  }

  // ROUTE: COST ESTIMATOR (/cost)
  if (currentPath === "/cost") {
    return (
      <CostView 
        onBack={() => handleNavigate("/")}
        onQuoteClick={() => handleOpenContact()}
      />
    );
  }

  // PRIMARY HOME PAGE
  return (
    <div className="relative min-h-screen bg-white text-zinc-900 selection:bg-blue-100 selection:text-blue-900">
      
      {/* 1. Navbar */}
      <Navbar
        onQuoteClick={(srv) => handleOpenContact(srv)}
        onNavigate={handleNavigate}
        activeSection={activeSection}
        currentPath={currentPath}
      />

      <main className="relative pt-16">
        {/* 1. Hero Section */}
        <Hero
          onQuoteClick={(notes) => handleOpenContact(undefined, notes)}
          onNavigate={handleNavigate}
        />

        {/* 2. Core Operating Commitments */}
        <Commitments />

        {/* 3. Industries Served */}
        <Industries />

        {/* 4. Core Capabilities (Services) */}
        <Services
          onQuoteClick={(srv) => handleOpenContact(srv)}
        />

        {/* 5. Why LocalBuild */}
        <WhyChooseUs />

        {/* 6. The Accountability Model */}
        <AccountabilityModel
          onQuoteClick={() => handleOpenContact()}
        />

        {/* 7. How It Works */}
        <Process
          onQuoteClick={() => handleOpenContact()}
        />

        {/* 8. Selected Work (Case Studies) */}
        <CaseStudies
          onQuoteClick={(notes) => handleOpenContact(undefined, notes)}
        />

        {/* 9. Interactive ROI Calculator */}
        <ROICalculator
          onQuoteClick={(notes) => handleOpenContact(undefined, notes)}
        />

        {/* 10. Pricing & Packages */}
        <Pricing
          onQuoteClick={(srv) => handleOpenContact(srv)}
        />

        {/* 11. Frequently Asked Questions */}
        <FAQ
          onQuoteClick={() => handleOpenContact()}
        />

        {/* 12. Contact / Conversion Block */}
        <ContactForm embedded />
      </main>

      {/* 14. Real Footer */}
      <Footer
        onQuoteClick={(srv) => handleOpenContact(srv)}
        onNavigate={handleNavigate}
      />

      {/* Pop-up Consultation Modal (Triggered by CTAs across the page) */}
      <ContactForm
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        prefilledNotes={prefilledNotes}
        preselectedService={preselectedService}
      />

      {/* Privacy Policy & Terms of Service Modal */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

      {/* Floating Call & WhatsApp Buttons */}
      <FloatingButtons />

      {/* Admin CRM Login Modal */}
      <AdminLoginModal
        isOpen={isAdminLoginOpen}
        onClose={() => setIsAdminLoginOpen(false)}
        onLoginSuccess={handleAdminSuccess}
      />

    </div>
  );
}
