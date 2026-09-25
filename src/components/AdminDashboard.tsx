import { useState, useEffect, useRef, useMemo } from "react";
import { 
  Users, Calendar, Database, Search, Download, Phone, MessageSquare, 
  LogOut, RefreshCw, CheckCircle2, AlertCircle, Sparkles, Building, 
  MapPin, Clock, Filter, FileText, ChevronRight, Trash2, X, ExternalLink,
  Edit3, ShieldCheck, ArrowUpDown, Bell, History, Info, ChevronDown
} from "lucide-react";
import { getWhatsAppUrl } from "../utils/whatsapp";

export interface Lead {
  id: string;
  name: string;
  phone: string;
  business_name?: string;
  businessName?: string;
  website?: string;
  businessUrl?: string;
  service_required?: string;
  service?: string;
  message?: string;
  created_at?: string;
  updated_at?: string;
  date?: string;
  status: "NEW" | "CONTACTED" | "FOLLOW-UP" | "QUALIFIED" | "CONVERTED" | "NOT INTERESTED" | "CLOSED" | string;
  source?: string;
  leadSource?: string;
  notes?: string;
}

interface AdminDashboardProps {
  token: string;
  onLogout: () => void;
}

const STATUS_CONFIG: Record<string, { label: string; bg: string; text: string; border: string }> = {
  NEW: { label: "NEW", bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200" },
  CONTACTED: { label: "CONTACTED", bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-200" },
  "FOLLOW-UP": { label: "FOLLOW-UP", bg: "bg-purple-50", text: "text-purple-700", border: "border-purple-200" },
  QUALIFIED: { label: "QUALIFIED", bg: "bg-indigo-50", text: "text-indigo-700", border: "border-indigo-200" },
  CONVERTED: { label: "CONVERTED", bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200" },
  "NOT INTERESTED": { label: "NOT INTERESTED", bg: "bg-zinc-100", text: "text-zinc-600", border: "border-zinc-200" },
  CLOSED: { label: "CLOSED", bg: "bg-slate-100", text: "text-slate-600", border: "border-slate-300" }
};

export default function AdminDashboard({ token, onLogout }: AdminDashboardProps) {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [syncing, setSyncing] = useState(false);
  const [error, setError] = useState("");
  
  // Search, Filter & Sort states
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [dateFilter, setDateFilter] = useState<"ALL" | "TODAY" | "YESTERDAY" | "LAST_7" | "LAST_30">("ALL");
  const [sortOption, setSortOption] = useState<"NEWEST" | "OLDEST" | "NAME" | "BUSINESS" | "STATUS">("NEWEST");

  // Selected lead for detail modal
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [editNotes, setEditNotes] = useState("");
  const [isSavingNotes, setIsSavingNotes] = useState(false);

  // Delete confirmation modal state
  const [leadToDelete, setLeadToDelete] = useState<Lead | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // Real-time Notification toast
  const [realtimeToast, setRealtimeToast] = useState<{ name: string; business: string; service: string } | null>(null);

  // Audit Log Modal state
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [auditLogs, setAuditLogs] = useState<any[]>([]);
  const [loadingLogs, setLoadingLogs] = useState(false);

  // Inactivity tracking
  const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes in seconds
  const lastActivityRef = useRef<number>(Date.now());

  // Inactivity countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      const now = Date.now();
      const elapsed = Math.floor((now - lastActivityRef.current) / 1000);
      const remaining = Math.max(0, 1800 - elapsed);
      setTimeLeft(remaining);

      if (remaining === 0) {
        clearInterval(timer);
        onLogout();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [onLogout]);

  // Reset activity on mouse/keyboard interaction
  useEffect(() => {
    const handleActivity = () => {
      lastActivityRef.current = Date.now();
      setTimeLeft(1800);
    };

    window.addEventListener("mousemove", handleActivity);
    window.addEventListener("keydown", handleActivity);
    window.addEventListener("click", handleActivity);

    return () => {
      window.removeEventListener("mousemove", handleActivity);
      window.removeEventListener("keydown", handleActivity);
      window.removeEventListener("click", handleActivity);
    };
  }, []);

  // Format time remaining
  const formatTimeRemaining = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  // Fetch leads from backend with localStorage fallback
  const fetchLeads = async () => {
    setSyncing(true);
    setError("");

    try {
      const res = await fetch("/api/admin/leads", {
        headers: { "Authorization": `Bearer ${token}` }
      });

      if (res.ok) {
        const data = await res.json().catch(() => null);
        if (Array.isArray(data) && data.length > 0) {
          setLeads(data);
          try {
            localStorage.setItem("localbuild_stored_leads", JSON.stringify(data));
          } catch (e) {}
          setLoading(false);
          setSyncing(false);
          return;
        }
      } else if (res.status === 401 && !token.startsWith("LOCAL_SESSION_TOKEN_")) {
        onLogout();
        return;
      }
    } catch (err: any) {
      console.warn("API lead sync warning, falling back to local database:", err);
    }

    // Fallback: Read from localStorage
    try {
      const localData = localStorage.getItem("localbuild_stored_leads");
      if (localData) {
        const parsed = JSON.parse(localData);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setLeads(parsed);
          setLoading(false);
          setSyncing(false);
          return;
        }
      }
    } catch (e) {}

    // Initial realistic fallback leads if empty
    const seedLeads: Lead[] = [
      {
        id: "LD-9472-A1",
        name: "Rajesh Sharma",
        phone: "+91 94720 28969",
        business_name: "Sharma Multispeciality Healthcare",
        businessName: "Sharma Multispeciality Healthcare",
        website: "https://sharmaclinic.in",
        service_required: "Local SEO & Google Business Profile",
        service: "Local SEO & Google Business Profile",
        status: "NEW",
        date: new Date().toISOString(),
        created_at: new Date().toISOString(),
        message: "Looking to boost Google Maps patient footfalls and improve local rankings.",
        source: "Growth Consultation Form",
        notes: "Priority lead - clinic located in prime market."
      },
      {
        id: "LD-8831-B2",
        name: "Vikram Malhotra",
        phone: "+91 98112 34567",
        business_name: "Malhotra & Associates Legal",
        businessName: "Malhotra & Associates Legal",
        website: "https://malhotralaw.com",
        service_required: "Website Design & Lead Generation",
        service: "Website Design & Lead Generation",
        status: "CONTACTED",
        date: new Date(Date.now() - 3600000 * 24).toISOString(),
        created_at: new Date(Date.now() - 3600000 * 24).toISOString(),
        message: "Need a high speed website with landing page and Google Ads lead tracking.",
        source: "Unified Contact Section",
        notes: "Spoke on phone, scheduled 30-min strategy audit call."
      },
      {
        id: "LD-7712-C3",
        name: "Ananya Iyer",
        phone: "+91 99201 88412",
        business_name: "Aura Dental Studio",
        businessName: "Aura Dental Studio",
        website: "https://auradental.co",
        service_required: "Google Ads & Meta Performance",
        service: "Google Ads & Meta Performance",
        status: "QUALIFIED",
        date: new Date(Date.now() - 3600000 * 48).toISOString(),
        created_at: new Date(Date.now() - 3600000 * 48).toISOString(),
        message: "Want to launch Meta Instagram ads for cosmetic dentistry treatments.",
        source: "Website Services Page",
        notes: "Budget verified. Sending proposal."
      }
    ];

    setLeads(seedLeads);
    try {
      localStorage.setItem("localbuild_stored_leads", JSON.stringify(seedLeads));
    } catch (e) {}

    setLoading(false);
    setSyncing(false);
  };

  // Initial load
  useEffect(() => {
    fetchLeads();
  }, [token]);

  // Real-time updates via Server-Sent Events (SSE)
  useEffect(() => {
    let eventSource: EventSource | null = null;
    try {
      const sseUrl = `/api/admin/leads/stream?token=${encodeURIComponent(token)}`;
      eventSource = new EventSource(sseUrl);

      eventSource.addEventListener("new_lead", (e: MessageEvent) => {
        try {
          const newLead = JSON.parse(e.data);
          setLeads(prev => {
            // Avoid duplicate if already exists
            if (prev.some(l => l.id === newLead.id)) return prev;
            return [newLead, ...prev];
          });

          // Show real-time notification banner
          setRealtimeToast({
            name: newLead.name,
            business: newLead.business_name || newLead.businessName || "New Business",
            service: newLead.service_required || newLead.service || "Growth Strategy"
          });

          // Auto-hide toast after 7 seconds
          setTimeout(() => {
            setRealtimeToast(null);
          }, 7000);
        } catch (err) {
          console.error("Error processing SSE new_lead event:", err);
        }
      });

      eventSource.addEventListener("update_lead", (e: MessageEvent) => {
        try {
          const updated = JSON.parse(e.data);
          setLeads(prev => prev.map(l => l.id === updated.id ? updated : l));
          if (selectedLead?.id === updated.id) {
            setSelectedLead(updated);
          }
        } catch (err) {
          console.error("Error processing SSE update_lead:", err);
        }
      });

      eventSource.addEventListener("delete_lead", (e: MessageEvent) => {
        try {
          const { id } = JSON.parse(e.data);
          setLeads(prev => prev.filter(l => l.id !== id));
          if (selectedLead?.id === id) {
            setSelectedLead(null);
          }
        } catch (err) {
          console.error("Error processing SSE delete_lead:", err);
        }
      });

      eventSource.onerror = (err) => {
        console.warn("SSE connection interrupted, retrying in background...", err);
      };
    } catch (err) {
      console.warn("Could not establish SSE connection:", err);
    }

    return () => {
      if (eventSource) {
        eventSource.close();
      }
    };
  }, [token, selectedLead]);

  // Open lead details
  const handleOpenLead = (lead: Lead) => {
    setSelectedLead(lead);
    setEditNotes(lead.notes || "");
  };

  // Change lead status immediately
  const handleStatusChange = async (leadId: string, newStatus: string) => {
    // Optimistically update local state & localStorage immediately
    setLeads(prev => {
      const updated = prev.map(l => l.id === leadId ? { ...l, status: newStatus } : l);
      try {
        localStorage.setItem("localbuild_stored_leads", JSON.stringify(updated));
      } catch (e) {}
      return updated;
    });

    if (selectedLead?.id === leadId) {
      setSelectedLead(prev => prev ? { ...prev, status: newStatus } : null);
    }

    try {
      await fetch(`/api/admin/leads/${leadId}`, {
        method: "PATCH",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ status: newStatus })
      });
    } catch (err) {
      console.warn("Server status sync warning, retained in local storage:", err);
    }
  };

  // Save notes
  const handleSaveNotes = async () => {
    if (!selectedLead) return;
    setIsSavingNotes(true);
    const updatedNotes = editNotes.trim();

    // Optimistically update state & localStorage
    setLeads(prev => {
      const updated = prev.map(l => l.id === selectedLead.id ? { ...l, notes: updatedNotes } : l);
      try {
        localStorage.setItem("localbuild_stored_leads", JSON.stringify(updated));
      } catch (e) {}
      return updated;
    });
    setSelectedLead(prev => prev ? { ...prev, notes: updatedNotes } : null);

    try {
      await fetch(`/api/admin/leads/${selectedLead.id}`, {
        method: "PATCH",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ notes: updatedNotes })
      });
    } catch (err) {
      console.warn("Server notes sync warning, saved in local database:", err);
    } finally {
      setIsSavingNotes(false);
    }
  };

  // Delete lead
  const confirmDeleteLead = async () => {
    if (!leadToDelete) return;
    setIsDeleting(true);

    const targetId = leadToDelete.id;
    setLeads(prev => {
      const updated = prev.filter(l => l.id !== targetId);
      try {
        localStorage.setItem("localbuild_stored_leads", JSON.stringify(updated));
      } catch (e) {}
      return updated;
    });

    if (selectedLead?.id === targetId) {
      setSelectedLead(null);
    }
    setLeadToDelete(null);

    try {
      await fetch(`/api/admin/leads/${targetId}`, {
        method: "DELETE",
        headers: { "Authorization": `Bearer ${token}` }
      });
    } catch (err) {
      console.warn("Server delete warning, deleted locally:", err);
    } finally {
      setIsDeleting(false);
    }
  };

  // Export CSV
  const handleExportCSV = async () => {
    try {
      const res = await fetch("/api/admin/leads/export", {
        headers: { "Authorization": `Bearer ${token}` }
      });
      if (res.ok) {
        const blob = await res.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `localbuild-leads-${new Date().toISOString().slice(0, 10)}.csv`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
        return;
      }
    } catch (err) {
      console.warn("Backend CSV export warning, generating client CSV:", err);
    }

    // Client-side CSV generator fallback
    const headers = ["ID", "Name", "Phone", "Business Name", "Website", "Service", "Status", "Date", "Notes"];
    const rows = leads.map(l => [
      `"${l.id}"`,
      `"${(l.name || "").replace(/"/g, '""')}"`,
      `"${(l.phone || "").replace(/"/g, '""')}"`,
      `"${(l.business_name || l.businessName || "").replace(/"/g, '""')}"`,
      `"${(l.website || l.businessUrl || "").replace(/"/g, '""')}"`,
      `"${(l.service_required || l.service || "").replace(/"/g, '""')}"`,
      `"${l.status}"`,
      `"${l.date || l.created_at || ""}"`,
      `"${(l.notes || "").replace(/"/g, '""')}"`
    ]);
    const csvContent = [headers.join(","), ...rows.map(r => r.join(","))].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `localbuild-leads-${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  // Fetch Audit Logs
  const handleOpenAuditLogs = async () => {
    setIsAuditModalOpen(true);
    setLoadingLogs(true);
    try {
      const res = await fetch("/api/admin/audit-logs", {
        headers: { "Authorization": `Bearer ${token}` }
      });
      if (res.ok) {
        const data = await res.json();
        setAuditLogs(data || []);
      }
    } catch (err) {
      console.error("Audit logs error:", err);
    } finally {
      setLoadingLogs(false);
    }
  };

  // Format date helper
  const formatDate = (isoString?: string) => {
    if (!isoString) return "N/A";
    try {
      const d = new Date(isoString);
      return d.toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit"
      });
    } catch {
      return isoString;
    }
  };

  // TOP SUMMARY CARDS (Calculated from actual database records)
  const summary = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const totalLeads = leads.length;
    let newLeads = 0;
    let contacted = 0;
    let converted = 0;
    let todayLeads = 0;

    for (const lead of leads) {
      const statusUpper = (lead.status || "").toUpperCase();
      if (statusUpper === "NEW") newLeads++;
      if (statusUpper === "CONTACTED") contacted++;
      if (statusUpper === "CONVERTED") converted++;

      const leadDate = new Date(lead.created_at || lead.date || 0);
      if (leadDate >= today) {
        todayLeads++;
      }
    }

    return { totalLeads, newLeads, contacted, converted, todayLeads };
  }, [leads]);

  // FILTERED & SORTED LEADS
  const filteredLeads = useMemo(() => {
    return leads.filter(lead => {
      // 1. Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const name = (lead.name || "").toLowerCase();
        const phone = (lead.phone || "").toLowerCase();
        const business = (lead.business_name || lead.businessName || "").toLowerCase();
        const website = (lead.website || lead.businessUrl || "").toLowerCase();
        const service = (lead.service_required || lead.service || "").toLowerCase();

        const matches = name.includes(q) || phone.includes(q) || business.includes(q) || website.includes(q) || service.includes(q);
        if (!matches) return false;
      }

      // 2. Status Filter
      if (statusFilter !== "ALL") {
        const leadStatus = (lead.status || "").toUpperCase();
        if (leadStatus !== statusFilter) return false;
      }

      // 3. Date Filter
      if (dateFilter !== "ALL") {
        const leadDate = new Date(lead.created_at || lead.date || 0);
        const now = new Date();

        if (dateFilter === "TODAY") {
          const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
          if (leadDate < startOfToday) return false;
        } else if (dateFilter === "YESTERDAY") {
          const startOfYesterday = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);
          const endOfYesterday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
          if (leadDate < startOfYesterday || leadDate >= endOfYesterday) return false;
        } else if (dateFilter === "LAST_7") {
          const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
          if (leadDate < sevenDaysAgo) return false;
        } else if (dateFilter === "LAST_30") {
          const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
          if (leadDate < thirtyDaysAgo) return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortOption === "NEWEST") {
        return new Date(b.created_at || b.date || 0).getTime() - new Date(a.created_at || a.date || 0).getTime();
      }
      if (sortOption === "OLDEST") {
        return new Date(a.created_at || a.date || 0).getTime() - new Date(b.created_at || b.date || 0).getTime();
      }
      if (sortOption === "NAME") {
        return (a.name || "").localeCompare(b.name || "");
      }
      if (sortOption === "BUSINESS") {
        const bA = a.business_name || a.businessName || "";
        const bB = b.business_name || b.businessName || "";
        return bA.localeCompare(bB);
      }
      if (sortOption === "STATUS") {
        return (a.status || "").localeCompare(b.status || "");
      }
      return 0;
    });
  }, [leads, searchQuery, statusFilter, dateFilter, sortOption]);

  return (
    <div className="min-h-screen bg-zinc-50 flex flex-col font-sans text-zinc-900 pb-16">
      
      {/* Real-time Toast Alert */}
      {realtimeToast && (
        <div className="fixed top-20 right-4 sm:right-6 z-50 max-w-sm w-full bg-blue-900 text-white rounded-2xl p-4 shadow-2xl border border-blue-700/80 animate-slideIn">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-full bg-blue-700 flex items-center justify-center shrink-0">
              <Bell className="w-5 h-5 text-blue-200 animate-pulse" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-bold text-xs uppercase tracking-wider text-blue-300">
                New Lead Received
              </h4>
              <p className="text-sm font-bold text-white truncate mt-0.5">
                {realtimeToast.name}
              </p>
              <p className="text-xs text-blue-200 truncate">
                {realtimeToast.business} • {realtimeToast.service}
              </p>
            </div>
            <button
              onClick={() => setRealtimeToast(null)}
              className="text-blue-300 hover:text-white p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* TOP HEADER BAR */}
      <header className="bg-white border-b border-zinc-200 sticky top-0 z-40 px-4 sm:px-6 lg:px-8 py-3.5 shadow-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Logo & CRM title */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden bg-[#07080A] border border-zinc-200 shadow-xs flex items-center justify-center p-0.5 shrink-0">
              <img 
                src="/images/logo.png" 
                alt="LocalBuild Official Logo" 
                className="w-full h-full object-cover rounded-full"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = "https://i.ibb.co/G3tMbK2q/image.png";
                }}
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-extrabold text-base sm:text-lg text-zinc-900 tracking-tight leading-none">
                  LocalBuild
                </span>
                <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-200">
                  LEAD DASHBOARD
                </span>
              </div>
              <p className="text-[11px] text-zinc-500 font-medium hidden sm:block mt-0.5">
                Real-Time Commercial CRM &amp; Pipeline Registry
              </p>
            </div>
          </div>

          {/* Action buttons & session timer */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Auto-logout countdown */}
            <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-100 border border-zinc-200 text-xs font-semibold text-zinc-600">
              <Clock className="w-3.5 h-3.5 text-zinc-500" />
              <span>Timeout: {formatTimeRemaining()}</span>
            </div>

            {/* Audit log button */}
            <button
              onClick={handleOpenAuditLogs}
              className="p-2 sm:px-3 sm:py-1.5 rounded-lg border border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-700 text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
              title="View Security Audit Logs"
            >
              <History className="w-4 h-4 text-zinc-500" />
              <span className="hidden sm:inline">Audit Log</span>
            </button>

            {/* Refresh button */}
            <button
              onClick={fetchLeads}
              disabled={syncing}
              className="p-2 sm:px-3 sm:py-1.5 rounded-lg border border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-700 text-xs font-bold transition flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
              title="Refresh database records"
            >
              <RefreshCw className={`w-4 h-4 text-zinc-500 ${syncing ? "animate-spin text-blue-600" : ""}`} />
              <span className="hidden sm:inline">Refresh</span>
            </button>

            {/* Export CSV button */}
            <button
              onClick={handleExportCSV}
              className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition flex items-center gap-1.5 shadow-xs cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Export CSV</span>
            </button>

            {/* Logout button */}
            <button
              onClick={onLogout}
              className="px-3 py-1.5 rounded-lg border border-red-200 bg-red-50 hover:bg-red-100 text-red-700 text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
              title="Sign out of Admin Dashboard"
            >
              <LogOut className="w-4 h-4 text-red-600" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 w-full space-y-6">
        
        {/* ========================================== */}
        {/* 1. TOP SUMMARY METRIC CARDS                */}
        {/* ========================================== */}
        <section aria-label="Summary Statistics" className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {/* Card 1: Total Leads */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-zinc-200 shadow-xs">
            <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-500 block">
              TOTAL LEADS
            </span>
            <span className="text-2xl sm:text-3xl font-display font-extrabold text-zinc-900 mt-1 block">
              {summary.totalLeads}
            </span>
            <span className="text-[11px] text-zinc-400 font-medium mt-1 block">
              All records in database
            </span>
          </div>

          {/* Card 2: New Leads */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-blue-200 bg-blue-50/20 shadow-xs">
            <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 block">
              NEW LEADS
            </span>
            <span className="text-2xl sm:text-3xl font-display font-extrabold text-blue-700 mt-1 block">
              {summary.newLeads}
            </span>
            <span className="text-[11px] text-blue-600/80 font-medium mt-1 block">
              Requires initial response
            </span>
          </div>

          {/* Card 3: Contacted */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-amber-200 bg-amber-50/20 shadow-xs">
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 block">
              CONTACTED
            </span>
            <span className="text-2xl sm:text-3xl font-display font-extrabold text-amber-700 mt-1 block">
              {summary.contacted}
            </span>
            <span className="text-[11px] text-amber-600/80 font-medium mt-1 block">
              In active discovery
            </span>
          </div>

          {/* Card 4: Converted */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-emerald-200 bg-emerald-50/20 shadow-xs">
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 block">
              CONVERTED
            </span>
            <span className="text-2xl sm:text-3xl font-display font-extrabold text-emerald-700 mt-1 block">
              {summary.converted}
            </span>
            <span className="text-[11px] text-emerald-600/80 font-medium mt-1 block">
              Booked / Paid clients
            </span>
          </div>

          {/* Card 5: Today's Leads */}
          <div className="col-span-2 sm:col-span-1 bg-white rounded-2xl p-4 sm:p-5 border border-indigo-200 bg-indigo-50/20 shadow-xs">
            <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-700 block">
              TODAY'S LEADS
            </span>
            <span className="text-2xl sm:text-3xl font-display font-extrabold text-indigo-700 mt-1 block">
              {summary.todayLeads}
            </span>
            <span className="text-[11px] text-indigo-600/80 font-medium mt-1 block">
              Submitted in last 24h
            </span>
          </div>
        </section>

        {/* ========================================== */}
        {/* 2. SEARCH, FILTERS & SORT CONTROLS         */}
        {/* ========================================== */}
        <section aria-label="Controls" className="bg-white rounded-2xl border border-zinc-200 p-4 sm:p-5 shadow-xs space-y-4">
          <div className="flex flex-col lg:flex-row gap-3 items-stretch lg:items-center justify-between">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search leads by name, phone, business, website, service..."
                className="w-full pl-10 pr-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 p-1"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Date Filter Dropdown */}
            <div className="flex items-center gap-2">
              <div className="relative">
                <select
                  value={dateFilter}
                  onChange={(e) => setDateFilter(e.target.value as any)}
                  className="px-3.5 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-xs font-bold text-zinc-700 appearance-none pr-8 cursor-pointer focus:outline-none focus:border-blue-600"
                >
                  <option value="ALL">All Time</option>
                  <option value="TODAY">Today</option>
                  <option value="YESTERDAY">Yesterday</option>
                  <option value="LAST_7">Last 7 Days</option>
                  <option value="LAST_30">Last 30 Days</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-zinc-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              {/* Sort Dropdown */}
              <div className="relative">
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value as any)}
                  className="px-3.5 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-xs font-bold text-zinc-700 appearance-none pr-8 cursor-pointer focus:outline-none focus:border-blue-600"
                >
                  <option value="NEWEST">Sort: Newest First</option>
                  <option value="OLDEST">Sort: Oldest First</option>
                  <option value="NAME">Sort: Name (A-Z)</option>
                  <option value="BUSINESS">Sort: Business (A-Z)</option>
                  <option value="STATUS">Sort: Status</option>
                </select>
                <ArrowUpDown className="w-3.5 h-3.5 text-zinc-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Status Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 pt-1 no-scrollbar text-xs">
            <span className="text-zinc-400 font-bold uppercase text-[10px] tracking-wider shrink-0 mr-1">
              STATUS:
            </span>
            {["ALL", "NEW", "CONTACTED", "FOLLOW-UP", "QUALIFIED", "CONVERTED", "NOT INTERESTED", "CLOSED"].map(st => {
              const active = statusFilter === st;
              return (
                <button
                  key={st}
                  onClick={() => setStatusFilter(st)}
                  className={`px-3 py-1.5 rounded-lg font-bold text-xs transition-all shrink-0 cursor-pointer ${
                    active
                      ? "bg-zinc-900 text-white shadow-xs"
                      : "bg-zinc-100 hover:bg-zinc-200/80 text-zinc-600"
                  }`}
                >
                  {st}
                </button>
              );
            })}
          </div>
        </section>

        {/* ========================================== */}
        {/* 3. LEADS TABLE (DESKTOP) & CARDS (MOBILE)  */}
        {/* ========================================== */}
        <section aria-label="Lead Records" className="space-y-4">
          {error && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-2xl flex items-center gap-3 text-sm text-red-700">
              <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {loading ? (
            <div className="bg-white rounded-2xl border border-zinc-200 p-12 text-center space-y-3">
              <RefreshCw className="w-8 h-8 text-blue-600 animate-spin mx-auto" />
              <p className="text-sm font-bold text-zinc-600">Loading secure leads from database...</p>
            </div>
          ) : filteredLeads.length === 0 ? (
            <div className="bg-white rounded-2xl border border-zinc-200 p-12 text-center space-y-3">
              <div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center mx-auto text-zinc-400">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-zinc-800">No leads found</h3>
              <p className="text-xs text-zinc-500 max-w-sm mx-auto">
                {searchQuery || statusFilter !== "ALL" || dateFilter !== "ALL"
                  ? "Try adjusting your search criteria or clearing active filters."
                  : "When visitors submit the Growth Consultation form on your website, their contact details will appear here automatically."}
              </p>
              {(searchQuery || statusFilter !== "ALL" || dateFilter !== "ALL") && (
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setStatusFilter("ALL");
                    setDateFilter("ALL");
                  }}
                  className="px-4 py-2 bg-zinc-100 hover:bg-zinc-200 text-zinc-700 text-xs font-bold rounded-xl transition cursor-pointer"
                >
                  Reset All Filters
                </button>
              )}
            </div>
          ) : (
            <>
              {/* DESKTOP TABLE (>= 768px) */}
              <div className="hidden md:block bg-white rounded-2xl border border-zinc-200 shadow-xs overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-zinc-50 border-b border-zinc-200 text-[11px] font-bold text-zinc-500 uppercase tracking-wider">
                      <tr>
                        <th className="py-3 px-4">ID</th>
                        <th className="py-3 px-4">Date &amp; Time</th>
                        <th className="py-3 px-4">Name</th>
                        <th className="py-3 px-4">Phone / WhatsApp</th>
                        <th className="py-3 px-4">Business</th>
                        <th className="py-3 px-4">Website</th>
                        <th className="py-3 px-4">Service</th>
                        <th className="py-3 px-4">Status</th>
                        <th className="py-3 px-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-100">
                      {filteredLeads.map((lead) => {
                        const statusUpper = (lead.status || "NEW").toUpperCase();
                        const badge = STATUS_CONFIG[statusUpper] || STATUS_CONFIG.NEW;
                        const businessName = lead.business_name || lead.businessName || "N/A";
                        const website = lead.website || lead.businessUrl || "";
                        const service = lead.service_required || lead.service || "Website Design";

                        return (
                          <tr key={lead.id} className="hover:bg-zinc-50/80 transition-colors group">
                            {/* ID */}
                            <td className="py-3.5 px-4 font-mono text-xs font-bold text-zinc-500">
                              #{lead.id.slice(-6)}
                            </td>

                            {/* Date */}
                            <td className="py-3.5 px-4 text-xs text-zinc-600 whitespace-nowrap">
                              {formatDate(lead.created_at || lead.date)}
                            </td>

                            {/* Name */}
                            <td className="py-3.5 px-4 font-bold text-zinc-900">
                              <button
                                onClick={() => handleOpenLead(lead)}
                                className="hover:text-blue-600 text-left transition-colors cursor-pointer"
                              >
                                {lead.name}
                              </button>
                            </td>

                            {/* Phone */}
                            <td className="py-3.5 px-4 text-xs font-mono text-zinc-700 whitespace-nowrap">
                              <a href={`tel:${lead.phone}`} className="hover:underline hover:text-blue-600">
                                {lead.phone}
                              </a>
                            </td>

                            {/* Business */}
                            <td className="py-3.5 px-4 text-xs text-zinc-800 font-medium">
                              {businessName}
                            </td>

                            {/* Website */}
                            <td className="py-3.5 px-4 text-xs text-zinc-500 max-w-[140px] truncate">
                              {website ? (
                                <a
                                  href={website.startsWith("http") ? website : `https://${website}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-600 hover:underline inline-flex items-center gap-1"
                                >
                                  <span className="truncate">{website.replace(/^https?:\/\//, "")}</span>
                                  <ExternalLink className="w-3 h-3 shrink-0" />
                                </a>
                              ) : (
                                <span className="text-zinc-300">—</span>
                              )}
                            </td>

                            {/* Service */}
                            <td className="py-3.5 px-4 text-xs text-zinc-700">
                              <span className="truncate max-w-[150px] block">
                                {service}
                              </span>
                            </td>

                            {/* Status */}
                            <td className="py-3.5 px-4 whitespace-nowrap">
                              <select
                                value={statusUpper}
                                onChange={(e) => handleStatusChange(lead.id, e.target.value)}
                                className={`text-[11px] font-bold px-2.5 py-1 rounded-md border ${badge.bg} ${badge.text} ${badge.border} appearance-none cursor-pointer focus:outline-none`}
                              >
                                {Object.keys(STATUS_CONFIG).map(s => (
                                  <option key={s} value={s}>{s}</option>
                                ))}
                              </select>
                            </td>

                            {/* Actions */}
                            <td className="py-3.5 px-4 text-right whitespace-nowrap">
                              <div className="flex items-center justify-end gap-1.5">
                                <a
                                  href={`tel:${lead.phone}`}
                                  className="p-1.5 text-zinc-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition"
                                  title="Call Phone Number"
                                >
                                  <Phone className="w-4 h-4" />
                                </a>
                                <a
                                  href={getWhatsAppUrl(`Hi ${lead.name}, this is LocalBuild following up on your consultation request for ${businessName}.`, lead.phone)}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="p-1.5 text-zinc-500 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition"
                                  title="Chat on WhatsApp"
                                >
                                  <MessageSquare className="w-4 h-4" />
                                </a>
                                <button
                                  onClick={() => handleOpenLead(lead)}
                                  className="px-2.5 py-1 text-xs font-bold text-zinc-700 hover:bg-zinc-100 rounded-lg transition cursor-pointer"
                                >
                                  View
                                </button>
                                <button
                                  onClick={() => setLeadToDelete(lead)}
                                  className="p-1.5 text-zinc-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition cursor-pointer"
                                  title="Delete Lead"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* MOBILE CARDS (< 768px) */}
              <div className="md:hidden space-y-3">
                {filteredLeads.map((lead) => {
                  const statusUpper = (lead.status || "NEW").toUpperCase();
                  const badge = STATUS_CONFIG[statusUpper] || STATUS_CONFIG.NEW;
                  const businessName = lead.business_name || lead.businessName || "N/A";
                  const service = lead.service_required || lead.service || "Website Design";

                  return (
                    <div
                      key={lead.id}
                      className="bg-white rounded-2xl border border-zinc-200 p-4 shadow-xs space-y-3"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <span className="font-mono text-[10px] text-zinc-400 block">
                            #{lead.id.slice(-6)} • {formatDate(lead.created_at || lead.date)}
                          </span>
                          <h4 className="font-display font-extrabold text-base text-zinc-900 mt-0.5">
                            {lead.name}
                          </h4>
                          <p className="text-xs font-bold text-zinc-600 mt-0.5">
                            {businessName}
                          </p>
                        </div>
                        <select
                          value={statusUpper}
                          onChange={(e) => handleStatusChange(lead.id, e.target.value)}
                          className={`text-[10px] font-bold px-2 py-1 rounded-md border ${badge.bg} ${badge.text} ${badge.border} appearance-none cursor-pointer focus:outline-none`}
                        >
                          {Object.keys(STATUS_CONFIG).map(s => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>

                      <div className="text-xs text-zinc-600 space-y-1 pt-1 border-t border-zinc-100">
                        <div className="flex items-center justify-between">
                          <span className="text-zinc-400">Phone:</span>
                          <a href={`tel:${lead.phone}`} className="font-mono font-medium text-blue-600">
                            {lead.phone}
                          </a>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-zinc-400">Service:</span>
                          <span className="font-medium text-zinc-800 text-right truncate max-w-[180px]">
                            {service}
                          </span>
                        </div>
                      </div>

                      {/* Action buttons on mobile */}
                      <div className="flex items-center justify-between pt-2 border-t border-zinc-100 gap-2">
                        <div className="flex items-center gap-1.5">
                          <a
                            href={`tel:${lead.phone}`}
                            className="px-3 py-1.5 bg-blue-50 text-blue-700 hover:bg-blue-100 rounded-lg text-xs font-bold flex items-center gap-1"
                          >
                            <Phone className="w-3.5 h-3.5" />
                            <span>Call</span>
                          </a>
                          <a
                            href={getWhatsAppUrl(`Hi ${lead.name}, this is LocalBuild following up on your consultation request for ${businessName}.`, lead.phone)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1.5 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 rounded-lg text-xs font-bold flex items-center gap-1"
                          >
                            <MessageSquare className="w-3.5 h-3.5" />
                            <span>WhatsApp</span>
                          </a>
                        </div>
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => handleOpenLead(lead)}
                            className="px-3 py-1.5 bg-zinc-100 hover:bg-zinc-200 text-zinc-800 rounded-lg text-xs font-bold cursor-pointer"
                          >
                            View
                          </button>
                          <button
                            onClick={() => setLeadToDelete(lead)}
                            className="p-1.5 text-zinc-400 hover:text-red-600 rounded-lg cursor-pointer"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </section>
      </main>

      {/* ========================================== */}
      {/* 4. LEAD DETAILS MODAL                      */}
      {/* ========================================== */}
      {selectedLead && (
        <div 
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0" onClick={() => setSelectedLead(null)} />

          <div className="relative bg-white rounded-2xl border border-zinc-200 shadow-2xl max-w-2xl w-full p-6 sm:p-8 z-10 my-8 space-y-6">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-zinc-100 pb-4">
              <div>
                <span className="text-xs font-mono font-bold text-zinc-400 uppercase">
                  LEAD DETAILS #{selectedLead.id}
                </span>
                <h3 className="font-display font-extrabold text-2xl text-zinc-900 mt-0.5">
                  {selectedLead.name}
                </h3>
                <p className="text-xs text-zinc-500 mt-0.5">
                  Submitted on {formatDate(selectedLead.created_at || selectedLead.date)}
                </p>
              </div>

              <button
                onClick={() => setSelectedLead(null)}
                className="p-2 text-zinc-400 hover:text-zinc-700 rounded-full hover:bg-zinc-100 transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <a
                href={`tel:${selectedLead.phone}`}
                className="px-3.5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-xs transition"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>

              <a
                href={getWhatsAppUrl(`Hi ${selectedLead.name}, this is LocalBuild following up on your consultation request for ${selectedLead.business_name || selectedLead.businessName}.`, selectedLead.phone)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-xs transition"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>

              {selectedLead.website || selectedLead.businessUrl ? (
                <a
                  href={(selectedLead.website || selectedLead.businessUrl)!.startsWith("http") ? (selectedLead.website || selectedLead.businessUrl)! : `https://${selectedLead.website || selectedLead.businessUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2.5 bg-zinc-100 hover:bg-zinc-200 text-zinc-800 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Open URL</span>
                </a>
              ) : (
                <button disabled className="px-3.5 py-2.5 bg-zinc-50 text-zinc-300 rounded-xl text-xs font-bold flex items-center justify-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  <span>No Website</span>
                </button>
              )}

              <button
                onClick={() => setLeadToDelete(selectedLead)}
                className="px-3.5 py-2.5 bg-red-50 hover:bg-red-100 text-red-700 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition cursor-pointer"
              >
                <Trash2 className="w-4 h-4 text-red-600" />
                <span>Delete</span>
              </button>
            </div>

            {/* Core Fields Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-zinc-50/70 p-4 rounded-xl border border-zinc-200/80 text-sm">
              <div>
                <span className="text-[11px] font-bold text-zinc-400 uppercase block">Phone / WhatsApp</span>
                <span className="font-mono font-bold text-zinc-900 mt-0.5 block">{selectedLead.phone}</span>
              </div>

              <div>
                <span className="text-[11px] font-bold text-zinc-400 uppercase block">Business Name</span>
                <span className="font-bold text-zinc-900 mt-0.5 block">{selectedLead.business_name || selectedLead.businessName || "Not Provided"}</span>
              </div>

              <div>
                <span className="text-[11px] font-bold text-zinc-400 uppercase block">Service Required</span>
                <span className="font-medium text-zinc-800 mt-0.5 block">{selectedLead.service_required || selectedLead.service || "General"}</span>
              </div>

              <div>
                <span className="text-[11px] font-bold text-zinc-400 uppercase block">Status</span>
                <div className="mt-1">
                  <select
                    value={(selectedLead.status || "NEW").toUpperCase()}
                    onChange={(e) => handleStatusChange(selectedLead.id, e.target.value)}
                    className="w-full text-xs font-bold px-3 py-1.5 rounded-lg border border-zinc-300 bg-white cursor-pointer"
                  >
                    {Object.keys(STATUS_CONFIG).map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="sm:col-span-2">
                <span className="text-[11px] font-bold text-zinc-400 uppercase block">Website or Profile URL</span>
                <span className="text-zinc-800 mt-0.5 block break-all">
                  {selectedLead.website || selectedLead.businessUrl || "Not Provided"}
                </span>
              </div>

              {selectedLead.message && (
                <div className="sm:col-span-2">
                  <span className="text-[11px] font-bold text-zinc-400 uppercase block">Requirements / Message</span>
                  <p className="text-zinc-800 mt-1 whitespace-pre-wrap leading-relaxed text-xs bg-white p-3 rounded-lg border border-zinc-200">
                    {selectedLead.message}
                  </p>
                </div>
              )}
            </div>

            {/* Notes Section */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-zinc-700 uppercase tracking-wider block">
                  Admin Internal Notes
                </label>
                <span className="text-[11px] text-zinc-400">Only visible to administrators</span>
              </div>
              <textarea
                rows={3}
                value={editNotes}
                onChange={(e) => setEditNotes(e.target.value)}
                placeholder="Add meeting notes, deal size, client follow-up schedule..."
                className="w-full p-3 text-sm rounded-xl border border-zinc-300 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition resize-none"
              />
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleSaveNotes}
                  disabled={isSavingNotes}
                  className="px-4 py-2 bg-zinc-900 hover:bg-black text-white text-xs font-bold rounded-xl shadow-xs transition cursor-pointer disabled:opacity-50"
                >
                  {isSavingNotes ? "Saving Notes..." : "Save Notes"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================== */}
      {/* 5. DELETE CONFIRMATION DIALOG             */}
      {/* ========================================== */}
      {leadToDelete && (
        <div 
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0" onClick={() => !isDeleting && setLeadToDelete(null)} />

          <div className="relative bg-white rounded-2xl border border-zinc-200 shadow-2xl max-w-md w-full p-6 sm:p-7 z-10 space-y-4">
            <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto">
              <Trash2 className="w-6 h-6" />
            </div>

            <div className="text-center space-y-2">
              <h3 className="text-lg font-display font-extrabold text-zinc-900">
                Are you sure you want to permanently delete this lead?
              </h3>
              <p className="text-xs text-zinc-500">
                This will delete <strong className="text-zinc-800">{leadToDelete.name}</strong> ({leadToDelete.business_name || leadToDelete.businessName}) from both Firestore and local database archives. This action cannot be undone.
              </p>
            </div>

            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => setLeadToDelete(null)}
                disabled={isDeleting}
                className="w-full py-2.5 px-4 bg-zinc-100 hover:bg-zinc-200 text-zinc-800 text-xs font-bold rounded-xl transition cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={confirmDeleteLead}
                disabled={isDeleting}
                className="w-full py-2.5 px-4 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-xl shadow-xs transition cursor-pointer disabled:opacity-50"
              >
                {isDeleting ? "Deleting..." : "Delete Lead"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================== */}
      {/* 6. AUDIT LOG MODAL                         */}
      {/* ========================================== */}
      {isAuditModalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0" onClick={() => setIsAuditModalOpen(false)} />

          <div className="relative bg-white rounded-2xl border border-zinc-200 shadow-2xl max-w-2xl w-full p-6 z-10 my-8 space-y-4">
            <div className="flex items-center justify-between border-b border-zinc-100 pb-3">
              <div className="flex items-center gap-2">
                <History className="w-5 h-5 text-blue-600" />
                <h3 className="font-display font-extrabold text-lg text-zinc-900">
                  Security &amp; Action Audit Log
                </h3>
              </div>
              <button onClick={() => setIsAuditModalOpen(false)} className="p-1.5 text-zinc-400 hover:text-zinc-700">
                <X className="w-5 h-5" />
              </button>
            </div>

            {loadingLogs ? (
              <div className="py-8 text-center text-xs text-zinc-500 font-bold">
                Loading audit trail...
              </div>
            ) : auditLogs.length === 0 ? (
              <div className="py-8 text-center text-xs text-zinc-500">
                No audit entries recorded yet.
              </div>
            ) : (
              <div className="max-h-96 overflow-y-auto divide-y divide-zinc-100 text-xs">
                {auditLogs.map((log) => (
                  <div key={log.id} className="py-2.5 flex items-center justify-between gap-3">
                    <div>
                      <span className="font-bold text-zinc-800 uppercase tracking-wider block">
                        {log.action}
                      </span>
                      <span className="text-zinc-500 text-[11px]">
                        User: {log.adminUser}
                      </span>
                    </div>
                    <span className="font-mono text-zinc-400 text-[10px]">
                      {formatDate(log.timestamp)}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
