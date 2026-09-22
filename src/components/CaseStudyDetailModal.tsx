import { useEffect } from "react";
import { X, TrendingUp, CheckCircle2, ArrowRight, MessageSquare } from "lucide-react";
import { CaseStudy } from "../data/caseStudies";
import { getWhatsAppUrl } from "../utils/whatsapp";

interface CaseStudyDetailModalProps {
  caseStudy: CaseStudy | null;
  isOpen: boolean;
  onClose: () => void;
  onApplyForStrategy: (clientName: string) => void;
}

export default function CaseStudyDetailModal({
  caseStudy,
  isOpen,
  onClose,
  onApplyForStrategy,
}: CaseStudyDetailModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

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

  if (!isOpen || !caseStudy) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      className="fixed inset-0 z-50 overflow-y-auto"
    >
      <div
        className="fixed inset-0 bg-zinc-950/70 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="flex min-h-full items-center justify-center p-3 sm:p-6 text-center">
        <div className="relative w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white text-left shadow-2xl transition-all border border-[#DDE3EC]">
          
          {/* Header */}
          <div className="flex items-start justify-between border-b border-[#DDE3EC] px-6 py-5 bg-[#F8FAFC]">
            <div>
              <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-bold bg-[#071126] text-white">
                  <span className="text-[#38BDF8]">{caseStudy.serviceNumber}</span>
                  <span>•</span>
                  <span>{caseStudy.serviceCategory}</span>
                </span>
                <span className="text-[11px] font-mono text-[#64748B] px-2 py-0.5 bg-white rounded border border-[#E2E8F0]">
                  {caseStudy.clientDomain}
                </span>
              </div>
              <h3 id="case-study-title" className="text-xl sm:text-2xl font-bold font-display text-zinc-900 leading-tight">
                {caseStudy.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-500 mt-0.5">{caseStudy.tagline}</p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="rounded-lg p-2 text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 transition-colors cursor-pointer shrink-0"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="px-6 py-6 space-y-5 max-h-[70vh] overflow-y-auto">
            {/* Project Image */}
            <div className="case__media w-full">
              <img
                src={caseStudy.imageUrl}
                alt={caseStudy.altText}
                width={caseStudy.imageWidth}
                height={caseStudy.imageHeight}
                loading="lazy"
                decoding="async"
              />
            </div>
            
            {/* Highlight Metric Banner */}
            <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider block">
                  Key Outcome Achieved [Illustrative]
                </span>
                <span className="text-lg sm:text-xl font-extrabold text-emerald-800 font-display">
                  {caseStudy.keyOutcome.replace(" [Illustrative]", "")}
                </span>
              </div>
            </div>

            {/* The Challenge */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1.5">
                The Challenge
              </h4>
              <p className="text-xs sm:text-sm text-zinc-700 bg-zinc-50 p-3 rounded-lg border border-zinc-100 leading-relaxed">
                {caseStudy.challenge}
              </p>
            </div>

            {/* Strategy Implemented */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#1D4ED8] mb-1.5 flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5 text-[#1D4ED8]" />
                <span>LocalBuild Growth Strategy</span>
              </h4>
              <div className="bg-blue-50/60 p-3.5 rounded-lg border border-blue-100/80 space-y-2">
                <p className="text-xs sm:text-sm text-zinc-800 leading-relaxed mb-2">
                  {caseStudy.strategy}
                </p>
                {caseStudy.strategyPoints && caseStudy.strategyPoints.length > 0 && (
                  <ul className="space-y-1 text-xs text-[#1E293B]">
                    {caseStudy.strategyPoints.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#3157D5] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* Business Result */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1.5">
                Business Result
              </h4>
              <p className="text-xs sm:text-sm text-zinc-800 bg-[#F0FDF4]/70 p-3 rounded-lg border border-emerald-200/80 leading-relaxed">
                {caseStudy.result}
              </p>
            </div>

            {/* Before vs After KPI Table */}
            {caseStudy.metrics && caseStudy.metrics.length > 0 && (
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2">
                  Before vs. After Metrics [Sample Result]
                </h4>
                <div className="bg-zinc-50 border border-[#DDE3EC] rounded-lg overflow-hidden text-xs">
                  <div className="grid grid-cols-3 p-2.5 bg-zinc-100/80 font-bold text-zinc-700 border-b border-[#DDE3EC]">
                    <div>Metric</div>
                    <div className="text-zinc-500">Before LocalBuild</div>
                    <div className="text-emerald-800 font-bold">With LocalBuild</div>
                  </div>
                  {caseStudy.metrics.map((m, idx) => (
                    <div key={idx} className="grid grid-cols-3 p-2.5 border-b border-zinc-100 last:border-0 items-center">
                      <div className="font-medium text-zinc-800">{m.metric}</div>
                      <div className="text-zinc-500 font-mono">{m.before}</div>
                      <div className="font-bold text-emerald-800 font-mono bg-[#F0FDF4] px-1.5 py-0.5 rounded w-fit">
                        {m.withLocalBuild}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Footer CTAs */}
          <div className="border-t border-[#DDE3EC] px-6 py-3.5 bg-zinc-50 flex flex-col sm:flex-row items-center justify-between gap-2.5">
            <a
              href={getWhatsAppUrl(`Hi LocalBuild, I saw your case study on "${caseStudy.title}" (${caseStudy.serviceCategory}). I'd like to achieve similar results for my business.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span>Discuss on WhatsApp</span>
            </a>

            <div className="w-full sm:w-auto flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="w-1/2 sm:w-auto px-3.5 py-2 text-xs font-semibold text-zinc-600 hover:text-zinc-900 bg-white border border-[#DDE3EC] rounded-lg transition-colors cursor-pointer"
              >
                Close
              </button>
              
              <button
                type="button"
                onClick={() => {
                  onApplyForStrategy(caseStudy.title);
                  onClose();
                }}
                className="w-1/2 sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-bold text-white bg-[#3157D5] hover:bg-[#2546B8] active:bg-[#1D3A9E] rounded-lg transition-colors shadow-xs cursor-pointer"
              >
                <span>Replicate These Results</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
