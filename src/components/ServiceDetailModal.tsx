import { useEffect } from "react";
import { X, CheckCircle2, ArrowRight, MessageSquare, Clock, Users, Sparkles, Layers } from "lucide-react";
import { ServiceDetail } from "../types/services";
import { getWhatsAppUrl } from "../utils/whatsapp";

interface ServiceDetailModalProps {
  service: ServiceDetail | null;
  isOpen: boolean;
  onClose: () => void;
  onSelectService: (serviceTitle: string) => void;
}

export default function ServiceDetailModal({
  service,
  isOpen,
  onClose,
  onSelectService,
}: ServiceDetailModalProps) {
  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !service) return null;

  const defaultWorkflow = [
    { step: "01", title: "Discovery & Strategy", desc: "We review your existing setup, competitor landscape, and target local audience." },
    { step: "02", title: "Setup & Creative", desc: "Our team builds the pages, tracking pixels, ad creatives, and lead-routing flows." },
    { step: "03", title: "Launch & Testing", desc: "We activate the campaign or system and verify every tracking event in real time." },
    { step: "04", title: "Continuous Optimization", desc: "Ongoing weekly reviews, bid adjustments, and performance reporting." }
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto"
    >
      {/* Dark overlay backdrop */}
      <div
        className="fixed inset-0 bg-zinc-900/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="flex min-h-full items-center justify-center p-4 sm:p-6 text-center">
        <div className="relative w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white text-left shadow-2xl transition-all border border-zinc-200">
          
          {/* Header */}
          <div className="flex items-center justify-between border-b border-zinc-100 px-6 py-5 bg-zinc-50/50">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-blue-100 text-blue-700 text-xs font-bold font-mono">
                {service.num}
              </span>
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-600 block">
                  {service.badge || "LocalBuild Service"}
                </span>
                <h3 id="service-modal-title" className="text-xl sm:text-2xl font-bold font-display text-zinc-900">
                  {service.title}
                </h3>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="rounded-lg p-2 text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body Content */}
          <div className="px-6 py-6 space-y-6 max-h-[75vh] overflow-y-auto">
            
            {/* What we do */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2">
                What We Do
              </h4>
              <p className="text-sm sm:text-base text-zinc-800 leading-relaxed bg-blue-50/40 p-4 rounded-xl border border-blue-100">
                {service.whatWeDo}
              </p>
            </div>

            {/* Who it's for */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-blue-600" />
                <span>Who It's For</span>
              </h4>
              <p className="text-sm text-zinc-700 bg-zinc-50 p-3.5 rounded-xl border border-zinc-100">
                {service.whosItFor}
              </p>
            </div>

            {/* What is included */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-3 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>What Is Included</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {service.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-lg bg-zinc-50/70 border border-zinc-100 text-xs sm:text-sm text-zinc-800"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Expected Workflow */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-3 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-blue-600" />
                <span>Expected Implementation Workflow</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {defaultWorkflow.map((item, idx) => (
                  <div key={idx} className="p-3 bg-zinc-50 rounded-xl border border-zinc-200/60">
                    <span className="font-mono text-xs font-bold text-blue-600 block mb-1">
                      {item.step}
                    </span>
                    <div className="text-xs font-bold text-zinc-900 mb-1">{item.title}</div>
                    <div className="text-[11px] text-zinc-600 leading-snug">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Modal Footer CTAs */}
          <div className="border-t border-zinc-200 px-6 py-4 bg-zinc-50 flex flex-col sm:flex-row items-center justify-between gap-3">
            <a
              href={getWhatsAppUrl(`Hi LocalBuild, I'm interested in your ${service.title} service.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>Ask on WhatsApp</span>
            </a>

            <div className="w-full sm:w-auto flex items-center gap-2.5">
              <button
                type="button"
                onClick={onClose}
                className="w-1/2 sm:w-auto px-4 py-2.5 text-xs sm:text-sm font-semibold text-zinc-600 hover:text-zinc-900 bg-white border border-zinc-200 rounded-lg transition-colors cursor-pointer"
              >
                Close
              </button>
              
              <button
                type="button"
                onClick={() => {
                  onSelectService(service.title);
                  onClose();
                }}
                className="w-1/2 sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-lg transition-colors shadow-xs cursor-pointer"
              >
                <span>Discuss This Service</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
