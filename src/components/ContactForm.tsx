import { useState, useEffect, FormEvent } from "react";
import { FolderKanban, Sparkles, Send, Download, Phone, Mail, MapPin, CheckCircle, RefreshCw, AlertCircle, FileText } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { db } from "../lib/firebase";
import { doc, setDoc } from "firebase/firestore";

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledNotes?: string;
  preselectedService?: string;
}

export default function ContactForm({ isOpen, onClose, prefilledNotes, preselectedService }: ContactFormProps) {
  // Form input states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [budget, setBudget] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [businessUrl, setBusinessUrl] = useState("");
  const [notes, setNotes] = useState("");
  const [selectedService, setSelectedService] = useState("");

  // Audit simulations state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStep, setSubmitStep] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);

  // Sync prefilled text from other sliders/planners
  useEffect(() => {
    if (prefilledNotes) {
      setNotes(prefilledNotes);
    }
  }, [prefilledNotes]);

  // Sync preselected service
  useEffect(() => {
    if (preselectedService) {
      setSelectedService(preselectedService);
    }
  }, [preselectedService]);

  const auditSteps = [
    "Scanning current localized search directory indexes...",
    "Reverse-engineering local competitor paid ad campaigns...",
    "Computing optimal conversion funnel roadmap metrics...",
    "Drafting your custom PDF marketing proposal document..."
  ];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !businessName) return;

    setIsSubmitting(true);
    setSubmitStep(0);

    // Synchronize Form input with the live Firestore database (client-side) & secondary proxy
    try {
      let source = "Contact Form";
      if (prefilledNotes) {
        if (prefilledNotes.includes("ROI")) source = "ROI Calculator Tool";
        else if (prefilledNotes.includes("Planner") || prefilledNotes.includes("Budget")) source = "Strategic Planner Tool";
        else source = "Service Card Lead";
      }

      const generatedId = "LD-" + Date.now().toString(36).toUpperCase() + Math.random().toString(36).slice(2, 5).toUpperCase();
      const clientLead = {
        id: generatedId,
        name: name || "",
        phone: phone || "",
        email: email || "",
        businessName: businessName || "",
        businessUrl: businessUrl || "",
        service: selectedService || "General consultation",
        budget: budget || "Not specified",
        message: notes || "",
        date: new Date().toISOString(),
        leadSource: source,
        status: "New"
      };

      // 1. Direct Store to Firestore for instant multinode syncing (Vercel, Netlify compatibility)
      try {
        await setDoc(doc(db, "leads", generatedId), clientLead);
        console.log("Lead successfully written directly to Firestore client-side:", generatedId);
      } catch (fError) {
        console.warn("Client-side direct Firestore write failed, falls back to server proxy:", fError);
      }

      // 2. Fallback backend file-sync
      fetch("/api/intake-records-v2", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...clientLead,
          leadSource: source
        })
      }).catch(err => {
        console.warn("Server file-sync API was not reachable or errored:", err);
      });
    } catch (err) {
      console.error("General intake flow err:", err);
    }

    // Dynamic countdown timer representing realistic server audit analysis
    const interval = setInterval(() => {
      setSubmitStep((prev) => {
        if (prev < auditSteps.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setIsSubmitting(false);
          setIsSuccess(true);
          return prev;
        }
      });
    }, 1100);
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setPhone("");
    setBudget("");
    setBusinessName("");
    setBusinessUrl("");
    setNotes("");
    setIsSuccess(false);
    setSubmitStep(0);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex justify-center items-start sm:items-center p-2 sm:p-4 md:py-6">
      {/* Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="bg-white rounded-[20px] border border-gray-200 shadow-xl overflow-hidden max-w-3xl w-full my-auto"
      >
        {/* Header toolbar */}
        <div className="bg-primary text-white py-3.5 px-5 sm:px-6 flex items-center justify-between border-b border-white/10">
          <div>
            <span className="text-[9px] bg-accent/20 text-accent font-extrabold uppercase tracking-widest px-2 py-0.5 rounded">Proposal Engine</span>
            <h3 className="font-display font-semibold text-base sm:text-lg mt-0.5">Get Your Free Local Dominance Proposal</h3>
          </div>
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-all cursor-pointer font-bold text-lg leading-none"
            aria-label="Close"
            id="close-proposal-modal-btn"
          >
            ✕
          </button>
        </div>

        {/* Dynamic Inner displays */}
        <div className="p-4 sm:p-5 max-h-[60vh] sm:max-h-[68vh] md:max-h-[72vh] overflow-y-auto">
          <AnimatePresence mode="wait">
            {/* Display State A: Standard Intake Form with split Contact Info Sidebar */}
            {!isSubmitting && !isSuccess && (
              <motion.div
                key="layout"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-5"
              >
                {/* Form Intake Column */}
                <form
                  onSubmit={handleSubmit}
                  className="md:col-span-7 space-y-3.5 w-full"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {/* Name */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-brand-heading uppercase tracking-wider">Your Name <span className="text-cta">*</span></label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Marcus Vance"
                        className="w-full text-sm h-[40px] px-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-hidden"
                        id="proposal-name-input"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-brand-heading uppercase tracking-wider">Business Email <span className="text-cta">*</span></label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="marcus@deltaplumbing.com"
                        className="w-full text-sm h-[40px] px-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-hidden"
                        id="proposal-email-input"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {/* Phone Number */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-brand-heading uppercase tracking-wider">Phone Number <span className="text-cta">*</span></label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full text-sm h-[40px] px-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-hidden"
                        id="proposal-phone-input"
                      />
                    </div>

                    {/* Estimated Budget */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-brand-heading uppercase tracking-wider">Annual Marketing Budget <span className="text-cta">*</span></label>
                      <select
                        required
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className="w-full text-sm h-[40px] px-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent bg-white outline-hidden text-brand-heading font-medium"
                        id="proposal-budget-select"
                      >
                        <option value="" disabled>-- Select Budget --</option>
                        <option value="Under ₹3,00,000 / year">Under ₹3,0,000 / year</option>
                        <option value="₹3,00,000 - ₹6,00,000 / year">₹3,0,000 - ₹6,0,000 / year</option>
                        <option value="₹6,00,000 - ₹12,00,000 / year">₹6,0,000 - ₹12,0,000 / year</option>
                        <option value="₹12,00,000 - ₹30,00,000 / year">₹12,0,000 - ₹30,0,000 / year</option>
                        <option value="₹30,00,000+ / year">₹30,0,000+ / year</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {/* Business Name */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-brand-heading uppercase tracking-wider">Business Name <span className="text-cta">*</span></label>
                      <input
                        type="text"
                        required
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                        placeholder="Delta Air Plumbing"
                        className="w-full text-sm h-[40px] px-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-hidden"
                        id="proposal-business-name-input"
                      />
                    </div>

                    {/* Business URL */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-brand-heading uppercase tracking-wider">Website URL (Optional)</label>
                      <input
                        type="text"
                        value={businessUrl}
                        onChange={(e) => setBusinessUrl(e.target.value)}
                        placeholder="deltaplumbing.com"
                        className="w-full text-sm h-[40px] px-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-hidden"
                        id="proposal-business-url-input"
                      />
                    </div>
                  </div>

                  {/* Service Needed Dropdown */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-brand-heading uppercase tracking-wider">Service Needed <span className="text-cta">*</span></label>
                    <select
                      required
                      value={selectedService || ""}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full text-sm h-[40px] px-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent bg-white outline-hidden text-brand-heading font-medium"
                      id="proposal-service-select"
                    >
                      <option value="" disabled>-- Select a Service --</option>
                      <option value="Website Design">Website Design</option>
                      <option value="Google Ads Management">Google Ads Management</option>
                      <option value="Meta Ads Management">Meta Ads Management</option>
                      <option value="Google Business Profile Optimization">Google Business Profile Optimization</option>
                      <option value="Local Service Ads">Local Service Ads</option>
                      <option value="YouTube Growth">YouTube Growth</option>
                      <option value="AI Automation Solutions">AI Automation Solutions</option>
                      <option value="Application Design">Application Design</option>
                      <option value="Ecommerce Management">Ecommerce Management</option>
                      <option value="Dropshipping Systems">Dropshipping Systems</option>
                      <option value="Affiliate Marketing">Affiliate Marketing</option>
                      <option value="Business Automation Systems">Business Automation Systems</option>
                    </select>
                  </div>

                  {/* Requirements / Prefilled description notes */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-brand-heading uppercase tracking-wider">Current Constraints & Target Milestone</label>
                    <textarea
                      rows={2}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Briefly tell us what you're trying to solve (or keep the strategy simulator notes from your quiz!)."
                      className="w-full text-sm min-h-[70px] p-2.5 rounded-lg border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-hidden font-sans"
                      id="proposal-notes-textarea"
                    />
                  </div>

                  {/* Advisory micro-note */}
                  <div className="bg-orange-50/50 border border-orange-100 p-2.5 rounded-xl flex gap-2 text-[11px] text-brand-heading">
                    <AlertCircle className="w-4 h-4 text-cta shrink-0 mt-0.5" />
                    <p className="leading-snug">
                      Submitting this form launches our <strong>dynamic competitor diagnostic scanner</strong>. You'll unlock a customized visual growth proposal immediately.
                    </p>
                  </div>

                  {/* Submit buttons */}
                  <div className="pt-2.5 border-t border-gray-150 flex flex-col sm:flex-row justify-end gap-2.5">
                    <button
                      type="button"
                      onClick={onClose}
                      className="text-xs font-semibold h-[40px] text-brand-body hover:text-brand-heading px-4 rounded-xl border border-gray-200 hover:bg-gray-50 transition cursor-pointer"
                      id="proposal-cancel-btn"
                    >
                      Close Window
                    </button>
                    <button
                      type="submit"
                      className="bg-cta hover:bg-cta/90 text-white font-bold h-[40px] w-full sm:w-auto px-5 rounded-xl flex items-center justify-center gap-1.5 transition shadow-md shadow-cta/15 cursor-pointer text-sm"
                      id="proposal-submit-btn"
                    >
                      Submit & Build Proposal
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </form>

                {/* Contact Sidebar Column - Padding: 16px (p-4), Phone link, WhatsApp button, Map iframe */}
                <div className="md:col-span-5 bg-gray-50/70 p-4 rounded-xl border border-gray-100 flex flex-col space-y-3">
                  <div>
                    <h4 className="font-display font-bold text-xs uppercase text-primary tracking-widest mb-0.5">Connect Instantly</h4>
                    <p className="text-[11px] text-brand-body">Speak with an acquisition architect directly or navigate to our headquarters.</p>
                  </div>

                  {/* Tap-To-Call Phone link */}
                  <a
                    href="tel:+919472028969"
                    className="flex items-center gap-2.5 bg-white p-2.5 rounded-xl border border-gray-200/80 hover:border-accent hover:shadow-xs transition duration-200 cursor-pointer"
                    id="proposal-hotline-link"
                  >
                    <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center text-accent shrink-0">
                      <Phone className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <span className="text-[9px] text-brand-body font-bold uppercase tracking-wider block">Local Hotline</span>
                      <p className="font-mono text-xs font-extrabold text-brand-heading leading-tight">+91 9472028969</p>
                    </div>
                  </a>

                  {/* WhatsApp button - full width, height 40px */}
                  <button
                    type="button"
                    onClick={() => window.open("https://wa.me/919472028969?text=Hi%20LocalBuild!", "_blank")}
                    className="w-full h-[40px] bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl flex items-center justify-center gap-1.5 shadow-xs transition cursor-pointer text-[13px]"
                    id="proposal-whatsapp-btn"
                  >
                    <span>💬</span>
                    Chat on WhatsApp
                  </button>

                  {/* Google Maps iframe - width 100%, height 150px */}
                  <div className="w-full h-[150px] rounded-xl overflow-hidden border border-gray-200 shadow-xs relative">
                    <iframe
                      src="https://maps.google.com/maps?q=Krishna%20Rajendra%20Rd,%20Parvathipuram,%20Basavanagudi,%20Bengaluru,%20Karnataka%20560004&t=&z=16&ie=UTF8&iwloc=&output=embed"
                      className="w-full h-full border-0"
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="LocalBuild Bengaluru Headquarters Map"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Display State B: Analyzing Audit progress circles */}
            {isSubmitting && (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="py-12 flex flex-col items-center justify-center text-center"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-full border-4 border-gray-100 border-t-cta animate-spin" />
                  <FolderKanban className="w-6 h-6 text-primary absolute inset-0 m-auto" />
                </div>
                <h4 className="font-display font-semibold text-md text-brand-heading mb-1.5">
                  LocalBuild Auditing Engine Processing...
                </h4>
                <p className="text-xs font-bold text-accent mb-4 animate-pulse">
                  {auditSteps[submitStep]}
                </p>

                {/* Mini progress steps checklist */}
                <div className="w-full max-w-xs space-y-2 text-left">
                  {auditSteps.map((stepDesc, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center shrink-0 ${
                        submitStep > idx ? "bg-emerald-500 border-emerald-500 text-white" : "border-gray-200"
                      }`}>
                        {submitStep > idx ? "✓" : ""}
                      </div>
                      <span className={`text-[10px] font-medium leading-none ${
                        submitStep === idx ? "text-brand-heading font-bold" : "text-brand-body"
                      }`}>
                        {idx === 0 ? "Map Listing Density Audit" : idx === 1 ? "PPC Spend Allocation Engine" : idx === 2 ? "CRO Funnel Model Charting" : "Proposal Sheet compilation"}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Display State C: Render Customized dynamic proposal outputs! */}
            {isSuccess && (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                {/* Proposal template top */}
                <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4 flex gap-3 text-brand-heading">
                  <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm">Proposal Custom-Build Complete!</h4>
                    <span className="text-[11px] text-brand-body leading-relaxed mt-0.5 block">
                      A copy of the strategy file has been logged to our primary consultant queue. We've assigned an account manager to reach out within 1 business hour.
                    </span>
                  </div>
                </div>

                {/* Visual Custom Proposal Document container */}
                <div className="border border-gray-200 rounded-xl p-5 bg-gray-50 space-y-4">
                  <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                    <div className="flex items-center gap-2">
                      <FileText className="w-5 h-5 text-primary" />
                      <div>
                        <span className="text-[9px] uppercase tracking-wider font-extrabold text-brand-body">Prospectus Code: LB-PRO-2026</span>
                        <p className="font-bold text-xs text-brand-heading -mt-0.5">Marketing Proposal: {businessName}</p>
                      </div>
                    </div>
                    <span className="text-[9px] bg-primary text-white font-extrabold uppercase px-2 py-0.5 rounded">
                      PDF Secured
                    </span>
                  </div>

                  {/* Core summary metrics computed */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-white border border-gray-150 rounded-lg p-3 text-center shadow-xs">
                      <p className="text-[9px] text-brand-body uppercase font-bold leading-none">Scout Domain</p>
                      <p className="text-xs font-mono text-brand-heading font-bold mt-1.5 truncate">{businessUrl || "No URL Provided"}</p>
                    </div>
                    <div className="bg-white border border-gray-150 rounded-lg p-3 text-center shadow-xs">
                      <p className="text-[9px] text-brand-body uppercase font-bold leading-none">Contact Target</p>
                      <p className="text-xs text-brand-heading font-bold mt-1.5 truncate">{name}</p>
                    </div>
                    <div className="bg-white border border-gray-150 rounded-lg p-3 text-center shadow-xs">
                      <p className="text-[9px] text-brand-body uppercase font-bold leading-none">Priority Goal</p>
                      <p className="text-[11px] text-accent font-bold mt-1.5 leading-none truncate">{selectedService || "Local Dominance"}</p>
                    </div>
                  </div>

                  {/* Customized roadmap actions generated */}
                  <div className="space-y-2">
                    <p className="text-[9px] uppercase font-extrabold tracking-widest text-brand-heading mb-1.5">Primary Suggested Action Checklist</p>
                    <div className="text-xs text-brand-body space-y-2">
                      <div className="flex gap-2.5 items-start">
                        <div className="w-2 h-2 rounded-full bg-accent mt-1.5 shrink-0" />
                        <p>Launch geographically fenced PPC search campaigns to bypass competitive click budgets in {businessName}'s region.</p>
                      </div>
                      <div className="flex gap-2.5 items-start">
                        <div className="w-2 h-2 rounded-full bg-cta mt-1.5 shrink-0" />
                        <p>Inject location Structured Schema scripts inside site HTML header to boost GBP Maps Pack sync indexes.</p>
                      </div>
                      <div className="flex gap-2.5 items-start">
                        <div className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
                        <p>Simplify current online request forms to include dynamic slider components (raising conversion rates up to 14.8%).</p>
                      </div>
                    </div>
                  </div>

                  {/* Mock download and print actions */}
                  <div className="pt-3 border-t border-gray-200 flex justify-between items-center bg-gray-50">
                    <span className="text-[10px] text-brand-body font-mono">LB-2026-v1.4b</span>
                    <button
                      type="button"
                      onClick={() => alert("Mock Proposal Download Triggered successfully! LocalBuild LB-PRO-2026 document saved locally.")}
                      className="bg-primary hover:bg-primary/95 text-white font-semibold text-xs py-2 px-3.5 rounded-md flex items-center gap-1.5 transition cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      Download Blueprint PDF
                    </button>
                  </div>
                </div>

                {/* Proposal bottom reset/close actions */}
                <div className="pt-4 border-t border-gray-150 flex justify-between gap-4">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="text-xs font-semibold text-brand-body hover:text-brand-heading px-3 py-2 rounded-md hover:bg-gray-50 transition border border-gray-200 cursor-pointer flex items-center gap-1"
                  >
                    <RefreshCw className="w-3 h-3" />
                    Submit Another Audit
                  </button>
                  <button
                    type="button"
                    onClick={onClose}
                    className="bg-accent hover:bg-accent/90 text-white font-semibold text-xs py-2.5 px-5 rounded-md transition cursor-pointer"
                  >
                    Got It, Thank You!
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
