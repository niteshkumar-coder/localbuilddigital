import { useState, useEffect, useRef } from "react";
import { 
  Users, Calendar, Database, Search, Download, Phone, MessageSquare, 
  LogOut, RefreshCw, Layers, CheckCircle2, AlertCircle, Sparkles, Building, 
  MapPin, IndianRupee, Clock, Filter, Printer, FileText, ChevronRight
} from "lucide-react";
import { motion } from "motion/react";

interface Lead {
  id: string;
  name: string;
  phone: string;
  email: string;
  businessName: string;
  businessUrl: string;
  service: string;
  budget: string;
  message: string;
  date: string;
  leadSource: string;
  status: "New" | "Contacted" | "Interested" | "Closed";
}

interface AdminDashboardProps {
  token: string;
  onLogout: () => void;
}

export default function AdminDashboard({ token, onLogout }: AdminDashboardProps) {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [sourceFilter, setSourceFilter] = useState("All");
  const [syncing, setSyncing] = useState(false);
  
  // Inactivity tracking
  const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes in seconds
  const lastActivityRef = useRef<number>(Date.now());

  // Fetch leads on load
  const fetchLeads = async () => {
    setSyncing(true);
    setError("");
    try {
      const res = await fetch("/api/portal-leads-v2", {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      if (!res.ok) {
        if (res.status === 401) {
          onLogout();
          return;
        }
        throw new Error("Could not retrieve leads from secure records.");
      }

      const contentType = res.headers.get("content-type");
      if (contentType && contentType.includes("text/html")) {
        throw new Error("Cookie access is being blocked inside this iframe. Please open the application in a new tab using the toolbar button above to bypass this cookie security check.");
      }

      const data = await res.json();
      setLeads(data);
    } catch (err: any) {
      if (err?.message?.includes("Unexpected token")) {
        setError("Cookie access is blocked inside the iframe. Please click the 'Open in New Tab' button in the toolbar to bypass cookie restrictions.");
      } else {
        setError(err?.message || "Communication failure fetching metrics.");
      }
    } finally {
      setLoading(false);
      setSyncing(false);
    }
  };

  useEffect(() => {
    fetchLeads();
    // Refresh leads list every 40 seconds automatically to emulate instant entries
    const syncInterval = setInterval(fetchLeads, 40000);
    return () => clearInterval(syncInterval);
  }, [token]);

  // Handle user activity to reset security logout timer
  useEffect(() => {
    const handleActivity = () => {
      lastActivityRef.current = Date.now();
      setTimeLeft(1800); // Reset timer to 30 mins
    };

    // Listen to user interactions
    window.addEventListener("mousemove", handleActivity);
    window.addEventListener("keydown", handleActivity);
    window.addEventListener("click", handleActivity);
    window.addEventListener("touchstart", handleActivity);

    // Inactivity countdown loop
    const timer = setInterval(() => {
      const elapsedSeconds = Math.floor((Date.now() - lastActivityRef.current) / 1000);
      const remaining = Math.max(0, 1800 - elapsedSeconds);
      setTimeLeft(remaining);

      if (remaining <= 0) {
        clearInterval(timer);
        console.warn("User logged out automatically due to 30 minutes of inactivity.");
        alert("Session Expired: You've been logged out due to 30 minutes of inactivity.");
        onLogout();
      }
    }, 1000);

    return () => {
      window.removeEventListener("mousemove", handleActivity);
      window.removeEventListener("keydown", handleActivity);
      window.removeEventListener("click", handleActivity);
      window.removeEventListener("touchstart", handleActivity);
      clearInterval(timer);
    };
  }, [onLogout]);

  // Format time remaining
  const formatTimeRemaining = () => {
    const mins = Math.floor(timeLeft / 60);
    const secs = timeLeft % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  // Update lead status
  const handleUpdateStatus = async (leadId: string, newStatus: string) => {
    try {
      const res = await fetch(`/api/portal-leads-v2/${leadId}/status`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ status: newStatus })
      });

      if (res.ok) {
        // Optimistic update in client
        setLeads(prevLeads => 
          prevLeads.map(lead => 
            lead.id === leadId ? { ...lead, status: newStatus as any } : lead
          )
        );
      } else {
        const data = await res.json();
        alert(`Status update failed: ${data.error || "Server rejected modification."}`);
      }
    } catch (err) {
      alert("Error synchronizing status change with database.");
    }
  };

  // Clean phone number for WhatsApp direct URLs
  const getWhatsAppLink = (phoneString: string, clientName: string) => {
    // Keep only numbers
    const digitsOnly = phoneString.replace(/\D/g, "");
    // Standard WhatsApp welcome message
    const message = encodeURIComponent(`Hi ${clientName}, this is LocalBuild Digital Agency. We received your business marketing request!`);
    
    // Check if phone has area code, standard prefix format
    if (digitsOnly.length === 10) {
      return `https://wa.me/91${digitsOnly}?text=${message}`; // Default to Indian prefix
    }
    return `https://wa.me/${digitsOnly}?text=${message}`;
  };

  // Filter calculations
  const filteredLeads = leads.filter(lead => {
    const query = searchQuery.toLowerCase();
    const matchesSearch = 
      lead.name.toLowerCase().includes(query) ||
      lead.phone.toLowerCase().includes(query) ||
      lead.email.toLowerCase().includes(query) ||
      lead.service.toLowerCase().includes(query) ||
      lead.businessName.toLowerCase().includes(query);

    const matchesStatus = statusFilter === "All" || lead.status === statusFilter;
    const matchesSource = sourceFilter === "All" || lead.leadSource === sourceFilter;

    return matchesSearch && matchesStatus && matchesSource;
  });

  // Unique sources for filter dropdown
  const uniqueSources = Array.from(new Set(leads.map(l => l.leadSource))).filter(Boolean);

  // CRM Analytics compilation
  const computeMetrics = () => {
    const now = new Date();
    const todayStr = now.toISOString().split("T")[0]; // YYYY-MM-DD
    const curYearMonth = now.toISOString().substring(0, 7); // YYYY-MM

    let total = leads.length;
    let today = 0;
    let monthly = 0;
    let active = 0;

    leads.forEach(lead => {
      // Parse date safely
      if (!lead.date) return;
      const leadDateStr = lead.date.split("T")[0];
      const leadYearMonth = lead.date.substring(0, 7);

      if (leadDateStr === todayStr) {
        today++;
      }
      if (leadYearMonth === curYearMonth) {
        monthly++;
      }
      if (lead.status !== "Closed") {
        active++;
      }
    });

    return { total, today, monthly, active };
  };

  const metrics = computeMetrics();

  // CSV Exporter
  const exportToCSV = () => {
    if (filteredLeads.length === 0) return alert("No records available to export!");
    
    const headers = ["Lead ID", "Name", "Phone", "Email", "Business Name", "Website", "Service", "Budget", "Message", "Date", "Lead Source", "Status"];
    
    const rows = filteredLeads.map(lead => [
      lead.id,
      lead.name.replace(/"/g, '""'),
      lead.phone,
      lead.email,
      lead.businessName.replace(/"/g, '""'),
      lead.businessUrl || "",
      lead.service,
      lead.budget,
      lead.message.replace(/"/g, '""').replace(/\n/g, " "),
      lead.date ? new Date(lead.date).toLocaleString() : "",
      lead.leadSource,
      lead.status
    ]);

    const csvContent = "data:text/csv;charset=utf-8," 
      + [headers.join(","), ...rows.map(r => r.map(val => `"${val}"`).join(","))].join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `localbuild_leads_report_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Excel content exporter (Generates raw tab-separated file XLS compatible format)
  const exportToExcel = () => {
    if (filteredLeads.length === 0) return alert("No records available to export!");
    
    let content = "Lead ID\tName\tPhone\tEmail\tBusiness Name\tWebsite\tService\tBudget\tMessage\tDate\tLead Source\tStatus\n";
    
    filteredLeads.forEach(lead => {
      content += `${lead.id}\t${lead.name}\t${lead.phone}\t${lead.email}\t${lead.businessName}\t${lead.businessUrl || ""}\t${lead.service}\t${lead.budget}\t${lead.message.replace(/\n\t/g, " ")}\t${lead.date ? new Date(lead.date).toLocaleString() : ""}\t${lead.leadSource}\t${lead.status}\n`;
    });

    const blob = new Blob([content], { type: "application/vnd.ms-excel;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `localbuild_leads_crm_${new Date().toISOString().slice(0, 10)}.xls`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // PDF Printing Manager
  const exportToPDF = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-zinc-900 pb-12 print:bg-white print:pb-0">
      
      {/* HEADER BAR */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 px-4 sm:px-6 md:px-8 py-4 flex items-center justify-between shadow-xs print:hidden">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-full overflow-hidden flex items-center justify-center border border-gray-100 shadow-sm shrink-0">
            <img 
              src="https://i.ibb.co/G3tMbK2q/image.png" 
              alt="LocalBuild CRM Admin" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <h1 className="font-display font-black text-sm tracking-widest text-zinc-900 flex items-center gap-1.5 uppercase leading-none">
              LOCALBUILD CRM <span className="text-[10px] bg-blue-50 text-blue-600 font-extrabold px-1.5 py-0.5 rounded border border-blue-100">DATABASE</span>
            </h1>
            <p className="text-xs text-zinc-400 font-medium mt-0.5">Leads Diagnostic and Pipeline Registry</p>
          </div>
        </div>

        <div className="flex items-center gap-3.5 sm:gap-5">
          {/* Active timer badge */}
          <div className="flex items-center gap-1.5 bg-zinc-100 border border-zinc-200 rounded-lg px-2.5 py-1.5 text-xs text-zinc-600 font-semibold">
            <Clock className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
            <span>Secure Out: {formatTimeRemaining()}</span>
          </div>

          {/* Sync Button */}
          <button 
            onClick={fetchLeads}
            disabled={syncing}
            className="p-2 text-zinc-500 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg border border-gray-200 bg-white transition cursor-pointer"
            title="Refresh lead queue"
          >
            <RefreshCw className={`w-4 h-4 ${syncing ? "animate-spin text-blue-600" : ""}`} />
          </button>

          {/* Logout */}
          <button
            onClick={onLogout}
            className="bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-xs py-2 px-3.5 rounded-lg flex items-center gap-1.5 transition duration-150 cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </header>

      {/* DETAILED PRINT ONLY BANNER STRUCTURE */}
      <div className="hidden print:block p-8 border-b-2 border-zinc-900 mb-8 bg-zinc-50 rounded-xl">
        <h2 className="text-2xl font-black uppercase text-zinc-900 leading-none">LocalBuild Agency Pipeline report</h2>
        <p className="text-sm text-zinc-600 mt-1 font-mono">Date: {new Date().toLocaleString()} -- LocalBuild CRM Export Core</p>
        <div className="grid grid-cols-4 gap-4 mt-6">
          <div className="p-3 border border-zinc-200 rounded">
            <span className="text-[10px] text-zinc-400 font-bold uppercase block">Total Leads Logged</span>
            <span className="text-xl font-bold font-mono">{metrics.total}</span>
          </div>
          <div className="p-3 border border-zinc-200 rounded">
            <span className="text-[10px] text-zinc-400 font-bold uppercase block">Today's Audits</span>
            <span className="text-xl font-bold font-mono">{metrics.today}</span>
          </div>
          <div className="p-3 border border-zinc-200 rounded">
            <span className="text-[10px] text-zinc-400 font-bold uppercase block">Monthly Volume</span>
            <span className="text-xl font-bold font-mono">{metrics.monthly}</span>
          </div>
          <div className="p-3 border border-zinc-200 rounded">
            <span className="text-[10px] text-zinc-400 font-bold uppercase block">Active In-Pipeline</span>
            <span className="text-xl font-bold font-mono">{metrics.active}</span>
          </div>
        </div>
      </div>

      {/* VIEWPORT BODY CONTAINER */}
      <main className="max-w-7xl w-full mx-auto px-4 sm:px-6 md:px-8 pt-8 space-y-6">
        
        {/* CRM CARDS ROW */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 print:hidden">
          {/* Card 1: Total */}
          <div className="bg-white rounded-2xl p-5 border border-gray-200/80 shadow-xs relative overflow-hidden flex items-center gap-4 group">
            <div className="w-12 h-12 bg-blue-50/80 rounded-xl flex items-center justify-center text-blue-600 shrink-0 border border-blue-100 group-hover:scale-105 transition-transform">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest block">Total Leads</span>
              <p className="text-2xl sm:text-3xl font-black text-sans font-extrabold text-zinc-900 leading-tight mt-0.5">{metrics.total}</p>
            </div>
            <div className="absolute top-2 right-2 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </div>
          </div>

          {/* Card 2: Today */}
          <div className="bg-white rounded-2xl p-5 border border-gray-200/80 shadow-xs relative overflow-hidden flex items-center gap-4 group">
            <div className="w-12 h-12 bg-indigo-50/80 rounded-xl flex items-center justify-center text-indigo-600 shrink-0 border border-indigo-100 group-hover:scale-105 transition-transform">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest block">Today's Leads</span>
              <p className="text-2xl sm:text-3xl font-black text-zinc-900 leading-tight mt-0.5">{metrics.today}</p>
            </div>
          </div>

          {/* Card 3: Monthly */}
          <div className="bg-white rounded-2xl p-5 border border-gray-200/80 shadow-xs relative overflow-hidden flex items-center gap-4 group">
            <div className="w-12 h-12 bg-emerald-50/80 rounded-xl flex items-center justify-center text-emerald-600 shrink-0 border border-emerald-100 group-hover:scale-105 transition-transform">
              <Database className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest block">Monthly Leads</span>
              <p className="text-2xl sm:text-3xl font-black text-zinc-900 leading-tight mt-0.5">{metrics.monthly}</p>
            </div>
          </div>

          {/* Card 4: Active */}
          <div className="bg-white rounded-2xl p-5 border border-gray-200/80 shadow-xs relative overflow-hidden flex items-center gap-4 group">
            <div className="w-12 h-12 bg-sky-50/80 rounded-xl flex items-center justify-center text-sky-600 shrink-0 border border-sky-100 group-hover:scale-105 transition-transform">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest block">Active Leads</span>
              <p className="text-2xl sm:text-3xl font-black text-zinc-900 leading-tight mt-0.5">{metrics.active}</p>
            </div>
          </div>
        </section>

        {/* CONTROLS BAR: FILTERS, SEARCH, AND EXPORT BUTTONS */}
        <section className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs space-y-4 print:hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Search filter */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4.5 h-4.5 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by Name, Phone, Email, Service..."
                className="w-full text-sm h-[42px] pl-10 pr-4 rounded-xl border border-gray-200 bg-zinc-50/30 focus:border-blue-500 focus:bg-white outline-hidden outline-hidden focus:ring-1 focus:ring-blue-500 transition-all font-medium"
              />
            </div>

            {/* Quick Actions / Export Buttons */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider hidden sm:inline">Export Leads:</span>
              
              {/* CSV */}
              <button
                onClick={exportToCSV}
                className="bg-white hover:bg-gray-50 text-zinc-700 hover:text-zinc-900 border border-gray-200 text-xs font-bold px-3.5 py-2.5 rounded-xl transition flex items-center gap-1.5 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>CSV</span>
              </button>

              {/* Excel */}
              <button
                onClick={exportToExcel}
                className="bg-white hover:bg-gray-50 text-zinc-700 hover:text-zinc-900 border border-gray-200 text-xs font-bold px-3.5 py-2.5 rounded-xl transition flex items-center gap-1.5 cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Excel</span>
              </button>

              {/* PDF Print */}
              <button
                onClick={exportToPDF}
                className="bg-blue-50 hover:bg-blue-150 text-blue-600 hover:text-blue-700 border border-blue-100 text-xs font-extrabold px-3.5 py-2.5 rounded-xl transition flex items-center gap-1.5 cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print PDF</span>
              </button>
            </div>
          </div>

          {/* Secondary select drop-filters */}
          <div className="flex flex-wrap items-center gap-4 pt-3 border-t border-gray-100 text-xs font-semibold text-zinc-650">
            <div className="flex items-center gap-2">
              <Filter className="w-3.5 h-3.5 text-zinc-400" />
              <span>Status Filter:</span>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="bg-white border border-gray-200 rounded-lg px-2 py-1 text-zinc-700 outline-hidden font-bold"
              >
                <option value="All">All statuses ({leads.length})</option>
                <option value="New">New</option>
                <option value="Contacted">Contacted</option>
                <option value="Interested">Interested</option>
                <option value="Closed">Closed</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <span>Source:</span>
              <select
                value={sourceFilter}
                onChange={(e) => setSourceFilter(e.target.value)}
                className="bg-white border border-gray-200 rounded-lg px-2 py-1 text-zinc-700 outline-hidden font-bold max-w-[200px]"
              >
                <option value="All">All sources</option>
                {uniqueSources.map((source, idx) => (
                  <option key={idx} value={source}>{source}</option>
                ))}
              </select>
            </div>

            <div className="ml-auto text-zinc-400 font-medium text-[11px]">
              Showing <span className="font-bold text-zinc-600">{filteredLeads.length}</span> of {leads.length} entries
            </div>
          </div>
        </section>

        {/* CRM DATABASE LEADS LIST TABLE */}
        <section className="bg-white rounded-2xl border border-gray-200 shadow-xs overflow-hidden print:border-none print:shadow-none">
          {loading ? (
            <div className="py-24 text-center space-y-3">
              <div className="w-10 h-10 border-4 border-zinc-100 border-t-blue-600 rounded-full animate-spin mx-auto" />
              <p className="text-xs font-bold text-zinc-400 animate-pulse">Scanning Secure LocalBuild Led Database...</p>
            </div>
          ) : error ? (
            <div className="p-10 text-center space-y-3">
              <AlertCircle className="w-10 h-10 text-red-500 mx-auto" />
              <h4 className="font-display font-bold text-md text-zinc-800">Metrics Synchronization Denied</h4>
              <p className="text-xs text-zinc-500 max-w-sm mx-auto">{error}</p>
              <button 
                onClick={fetchLeads} 
                className="text-xs bg-zinc-900 text-white font-bold px-4 py-2 rounded-lg cursor-pointer hover:bg-zinc-800 transition"
              >
                Retry Stream Connect
              </button>
            </div>
          ) : filteredLeads.length === 0 ? (
            <div className="py-20 text-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-400 mx-auto">
                <Database className="w-5 h-5" />
              </div>
              <h4 className="font-semibold text-zinc-700 text-sm">No Active Leads Located</h4>
              <p className="text-xs text-zinc-400 max-w-xs mx-auto">Please try clearing your search queries or filter dropdowns to find logs.</p>
            </div>
          ) : (
            <div className="w-full overflow-x-auto min-h-[400px]">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-zinc-50/70 border-b border-gray-200 text-zinc-500 font-extrabold uppercase tracking-wider text-[10px]">
                    <th className="p-4 pl-6">Lead ID</th>
                    <th className="p-4">Contact Info</th>
                    <th className="p-4">Business / Website</th>
                    <th className="p-4">Strategic Request</th>
                    <th className="p-4">Message / Notes</th>
                    <th className="p-4">Date / Source</th>
                    <th className="p-4">Status Update</th>
                    <th className="p-4 pr-6 text-right print:hidden">Direct Hotlines</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-150 font-medium text-zinc-800 leading-normal">
                  {filteredLeads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-zinc-50/40 group transition-all duration-150">
                      
                      {/* Lead ID */}
                      <td className="p-4 pl-6 align-top">
                        <span className="font-mono bg-zinc-150/60 font-bold px-2 py-1 text-[10px] text-zinc-600 rounded">
                          {lead.id}
                        </span>
                      </td>

                      {/* Contact Info */}
                      <td className="p-4 align-top space-y-1">
                        <div className="font-bold text-zinc-900 text-sm leading-tight">{lead.name}</div>
                        <div className="text-zinc-400 flex items-center gap-1">
                          <span>📧</span>
                          <a href={`mailto:${lead.email}`} className="hover:text-blue-500 hover:underline">{lead.email}</a>
                        </div>
                        <div className="text-zinc-500 flex items-center gap-1 font-mono text-[11px]">
                          <span>📞</span>
                          <span>{lead.phone}</span>
                        </div>
                      </td>

                      {/* Business / Website */}
                      <td className="p-4 align-top space-y-1 max-w-[170px]">
                        <div className="font-bold text-zinc-900 flex items-center gap-1 truncate" title={lead.businessName}>
                          <Building className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                          <span>{lead.businessName}</span>
                        </div>
                        {lead.businessUrl ? (
                          <div className="text-blue-500 underline text-[11px] truncate" title={lead.businessUrl}>
                            <a href={`https://${lead.businessUrl.replace(/^https?:\/\//, "")}`} target="_blank" rel="noopener noreferrer">
                              {lead.businessUrl}
                            </a>
                          </div>
                        ) : (
                          <span className="text-[10px] text-zinc-300 italic">No URL Provided</span>
                        )}
                      </td>

                      {/* Strategic Request / Service & Budget */}
                      <td className="p-4 align-top space-y-1.5 max-w-[180px]">
                        <div className="font-semibold text-zinc-900 bg-blue-50/50 border border-blue-100 rounded px-2 py-0.5 inline-block text-[11px]">
                          {lead.service}
                        </div>
                        <div className="flex items-center gap-1 font-semibold text-emerald-600 text-[11px]">
                          <IndianRupee className="w-3.5 h-3.5 shrink-0" />
                          <span>Budget: {lead.budget}</span>
                        </div>
                      </td>

                      {/* Message / Notes */}
                      <td className="p-4 align-top max-w-[200px]">
                        {lead.message ? (
                          <p className="text-zinc-500 text-[11.5px] line-clamp-3 select-text font-serif italic pr-2 hover:line-clamp-none transition-all duration-300 cursor-pointer" title="Click to unfold text">
                            "{lead.message}"
                          </p>
                        ) : (
                          <span className="text-zinc-300 italic text-[10px]">No extra details</span>
                        )}
                      </td>

                      {/* Date / Source */}
                      <td className="p-4 align-top space-y-1 font-mono text-[11px]">
                        <div className="text-zinc-500 flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-zinc-400 shrink-0" />
                          <span>{lead.date ? new Date(lead.date).toLocaleDateString() : "Pending"}</span>
                        </div>
                        <div className="text-zinc-400 flex items-center gap-1 text-[10px]">
                          <span className="bg-zinc-100 border border-zinc-200 px-1.5 py-0.5 rounded text-zinc-500 font-sans font-bold uppercase tracking-wider text-[9px]">
                            {lead.leadSource}
                          </span>
                        </div>
                      </td>

                      {/* Status Update */}
                      <td className="p-4 align-top">
                        <select
                          value={lead.status}
                          onChange={(e) => handleUpdateStatus(lead.id, e.target.value)}
                          className={`font-semibold border text-[11px] rounded px-2.5 py-1.5 outline-hidden transition cursor-pointer font-bold ${
                            lead.status === "New" ? "bg-blue-50 border-blue-200 text-blue-700 font-bold" :
                            lead.status === "Contacted" ? "bg-amber-50 border-amber-200 text-amber-700" :
                            lead.status === "Interested" ? "bg-purple-50 border-purple-200 text-purple-700" :
                            "bg-emerald-50 border-emerald-200 text-emerald-700"
                          }`}
                        >
                          <option value="New">🔵 New</option>
                          <option value="Contacted">🟡 Contacted</option>
                          <option value="Interested">🟣 Interested</option>
                          <option value="Closed">🟢 Closed</option>
                        </select>
                      </td>

                      {/* Phone & Whatsapp Call Direct triggers */}
                      <td className="p-4 pr-6 align-top text-right print:hidden">
                        <div className="flex justify-end gap-1.5 mt-0.5">
                          {/* Dial Now */}
                          <a
                            href={`tel:${lead.phone}`}
                            className="w-8 h-8 rounded-lg bg-zinc-50 hover:bg-zinc-100 border border-gray-200 text-zinc-600 flex items-center justify-center transition-all cursor-pointer hover:shadow-xs active:scale-95"
                            title="Call customer VoIP now"
                          >
                            <Phone className="w-3.5 h-3.5" />
                          </a>

                          {/* WhatsApp Chat */}
                          <a
                            href={getWhatsAppLink(lead.phone, lead.name)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 rounded-lg bg-emerald-50 hover:bg-emerald-500 text-emerald-600 hover:text-white border border-emerald-100 hover:border-emerald-500 flex items-center justify-center transition-all cursor-pointer hover:shadow-xs active:scale-95"
                            title="Open direct WhatsApp conversation"
                          >
                            <MessageSquare className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </td>

                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

      </main>
    </div>
  );
}
