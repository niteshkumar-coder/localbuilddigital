import { useState } from "react";
import { ArrowRight, MessageSquare, Sparkles, CheckCircle2, TrendingUp, ChevronDown, ChevronUp, Layers } from "lucide-react";
import { CASE_STUDIES } from "../data/caseStudies";
import { getWhatsAppUrl } from "../utils/whatsapp";

interface CaseStudiesProps {
  onQuoteClick: (prefilledNotes?: string) => void;
}

export default function CaseStudies({ onQuoteClick }: CaseStudiesProps) {
  const [selectedService, setSelectedService] = useState<string>("All");
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleFilterClick = (serviceCategory: string, serviceNumber?: string) => {
    setSelectedService(serviceCategory);
    if (serviceCategory === "All") {
      const top = document.getElementById("case-studies");
      if (top) {
        top.scrollIntoView({ behavior: "smooth" });
      }
    } else if (serviceNumber) {
      const el = document.getElementById(`case-study-${serviceNumber}`);
      if (el) {
        const offset = 80;
        const elPos = el.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: elPos - offset, behavior: "smooth" });
      }
    }
  };

  const handleApplyStrategy = (serviceName: string, domain: string) => {
    onQuoteClick(`Inquiry regarding ${serviceName} (${domain})`);
  };

  return (
    <section id="case-studies" className="py-12 sm:py-20 bg-[#FFFFFF] border-b border-[#DDE3EC]">
      {/* Premium Professional Case Study Image Frame Styling */}
      <style>{`
        .case__media {
          aspect-ratio: 16 / 9;
          border: 1px solid rgba(76, 125, 255, 0.45);
          box-shadow: 0 0 0 1px rgba(76, 125, 255, 0.08), 0 12px 40px rgba(0, 0, 0, 0.30);
          background: rgba(8, 14, 30, 0.85);
          border-radius: 16px;
          padding: 12px;
          overflow: hidden;
          transition: all 280ms ease;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
        }
        .case__media:hover {
          border-color: rgba(76, 125, 255, 0.8);
          box-shadow: 0 0 0 1px rgba(76, 125, 255, 0.20), 0 16px 44px rgba(0, 0, 0, 0.40), 0 0 24px rgba(76, 125, 255, 0.22);
        }
        .case__media img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center;
          border-radius: 10px;
          display: block;
          transition: transform 280ms ease;
        }
        .case__media:hover img {
          transform: scale(1.01);
        }
        @media (min-width: 1024px) {
          .case__media {
            max-width: 520px;
          }
        }
        @media (max-width: 640px) {
          .case {
            display: flex;
            flex-direction: column;
          }
          .case__media {
            aspect-ratio: 4 / 3;
            padding: 10px;
            border-radius: 14px;
            max-width: 100%;
          }
          .metrics {
            display: grid;
            grid-template-columns: 1fr;
            gap: 6px;
          }
          .metrics__row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 6px;
            padding: 8px 0;
            border-top: 1px solid #DDE3EC;
          }
          .metrics__label {
            grid-column: 1 / -1;
            font-weight: 600;
            font-size: 0.7rem;
            letter-spacing: 0.05em;
            text-transform: uppercase;
            color: #667085;
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section 7 Header: Real Work. Measurable Impact. */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#3157D5]/10 border border-[#3157D5]/20 text-[#3157D5] text-[11px] font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#3157D5]" />
            <span>SELECTED WORK</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#071126] tracking-tight leading-tight mb-3">
            Real Work. Measurable Impact.
          </h2>
          <p className="text-sm sm:text-base text-[#667085] leading-relaxed max-w-2xl">
            Explore how LocalBuild combines strategy, technology, and digital marketing to create meaningful business growth.
          </p>
        </div>

        {/* Quick Service Jump Bar */}
        <div className="mb-10 border-b border-[#DDE3EC] pb-3 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-1.5 min-w-max text-xs">
            <span className="text-[#667085] font-semibold pr-1.5 text-xs">Services:</span>
            <button
              type="button"
              onClick={() => handleFilterClick("All")}
              className={`px-3 py-1 rounded-full transition-colors cursor-pointer text-xs ${
                selectedService === "All"
                  ? "bg-[#071126] text-white font-bold"
                  : "bg-[#F2F5FA] text-[#263044] hover:bg-[#DDE3EC]"
              }`}
            >
              All (12)
            </button>
            {CASE_STUDIES.map((cs) => (
              <button
                key={cs.id}
                type="button"
                onClick={() => handleFilterClick(cs.serviceCategory, cs.serviceNumber)}
                className={`px-2.5 py-1 rounded-full transition-colors cursor-pointer text-xs ${
                  selectedService === cs.serviceCategory
                    ? "bg-[#3157D5] text-white font-bold"
                    : "bg-[#F2F5FA] text-[#263044] hover:bg-[#DDE3EC]"
                }`}
              >
                {cs.serviceNumber} {cs.serviceCategory}
              </button>
            ))}
          </div>
        </div>

        {/* 12 Case Study Cards — In Service Order 01 → 12, Consistent Alignment */}
        <div className="space-y-12 sm:space-y-16">
          {CASE_STUDIES.map((cs) => {
            const isExpanded = !!expandedCards[cs.id];

            return (
              <article
                key={cs.id}
                id={`case-study-${cs.serviceNumber}`}
                className="case border-b border-[#DDE3EC] pb-12 sm:pb-16 last:border-b-0 last:pb-0"
              >
                {/* 2-Column Consistent Grid: Image consistently on Left, Clean Compact Text on Right */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
                  
                  {/* Image Column — Fixed left alignment across all cards */}
                  <div className="lg:col-span-5 w-full">
                    <div className="case__media w-full shadow-xs">
                      <img
                        src={cs.imageUrl}
                        alt={cs.altText}
                        width={cs.imageWidth}
                        height={cs.imageHeight}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </div>

                  {/* Content Column — Small, compact, concise */}
                  <div className="lg:col-span-7 space-y-4">
                    
                    {/* Header: Service Category & Scanned Title */}
                    <div>
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className="text-[11px] font-bold tracking-wider uppercase text-[#3157D5] font-mono">
                          SERVICE {cs.serviceNumber}
                        </span>
                        <span className="text-[#DDE3EC]">•</span>
                        <span className="text-[11px] font-medium text-[#667085] bg-[#F2F5FA] px-2 py-0.5 rounded border border-[#DDE3EC]">
                          {cs.clientDomain}
                        </span>
                      </div>

                      {/* Scanned Service Title */}
                      <h3 className="font-display font-extrabold text-xl sm:text-2xl text-[#071126] tracking-tight leading-snug">
                        {cs.title}
                      </h3>

                      {/* Scanned Tagline */}
                      <p className="text-xs sm:text-sm text-[#475467] font-medium mt-0.5">
                        {cs.tagline}
                      </p>
                    </div>

                    {/* Compact Key Outcome Banner */}
                    <div className="px-3.5 py-2.5 bg-[#F2F5FA] border border-[#DDE3EC] rounded-lg flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2 min-w-0">
                        <TrendingUp className="w-4 h-4 text-[#3157D5] shrink-0" />
                        <span className="text-xs sm:text-sm font-bold text-[#071126] truncate">
                          {cs.keyOutcome.replace(" [Illustrative]", "")}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded bg-white text-[#667085] border border-[#DDE3EC] shrink-0">
                        Illustrative
                      </span>
                    </div>

                    {/* Small Summary (1 concise line) */}
                    <p className="text-xs text-[#475467] leading-relaxed">
                      {cs.shortSummary}
                    </p>

                    {/* Compact Before vs After Comparison (Small 3-row table) */}
                    <div>
                      {/* Desktop / Tablet: Small clean table */}
                      <div className="hidden sm:block border border-[#DDE3EC] rounded-lg overflow-hidden bg-white text-xs">
                        <table className="w-full text-left border-collapse">
                          <thead>
                            <tr className="bg-[#F8FAFC] border-b border-[#DDE3EC] text-[#667085] text-[10px] font-bold uppercase tracking-wider">
                              <th className="py-1.5 px-3 font-semibold">Key Metric</th>
                              <th className="py-1.5 px-3 font-semibold text-[#667085]">Before</th>
                              <th className="py-1.5 px-3 font-bold text-[#168A62]">With LocalBuild</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-[#DDE3EC]">
                            {cs.metrics.map((m, mIdx) => (
                              <tr key={mIdx} className="hover:bg-[#F8FAFC] transition-colors">
                                <td className="py-1.5 px-3 font-medium text-[#263044]">{m.metric}</td>
                                <td className="py-1.5 px-3 text-[#667085] font-mono">{m.before}</td>
                                <td className="py-1.5 px-3 font-bold text-[#168A62] font-mono">
                                  {m.withLocalBuild}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      {/* Mobile: Compact stacked rows */}
                      <div className="sm:hidden metrics bg-white border border-[#DDE3EC] rounded-lg p-2.5">
                        {cs.metrics.map((m, mIdx) => (
                          <div key={mIdx} className="metrics__row first:border-t-0 first:pt-0">
                            <span className="metrics__label">{m.metric}</span>
                            <div className="text-[11px]">
                              <span className="text-[#667085] font-mono">{m.before}</span>
                            </div>
                            <div className="text-[11px]">
                              <span className="font-mono font-bold text-[#168A62]">{m.withLocalBuild}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Hidden Details Toggle: Hide heavy explanation by default per user request */}
                    <div className="pt-1">
                      <button
                        type="button"
                        onClick={() => toggleExpand(cs.id)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#3157D5] hover:text-[#2546B8] cursor-pointer"
                        aria-expanded={isExpanded}
                      >
                        <Layers className="w-3.5 h-3.5" />
                        <span>{isExpanded ? "Hide Detailed Strategy Breakdown" : "View Strategy & Implementation Details"}</span>
                        {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                      </button>

                      {/* Collapsible content (Challenge, Strategy points, Result) */}
                      {isExpanded && (
                        <div className="mt-3 p-3.5 bg-[#F8FAFC] border border-[#DDE3EC] rounded-lg space-y-3 text-xs animate-in fade-in duration-200">
                          <div>
                            <h4 className="font-bold uppercase tracking-wider text-[#667085] text-[10px] mb-1">
                              The Challenge
                            </h4>
                            <p className="text-[#263044] leading-relaxed">
                              {cs.challenge}
                            </p>
                          </div>

                          <div>
                            <h4 className="font-bold uppercase tracking-wider text-[#3157D5] text-[10px] mb-1">
                              LocalBuild Growth Strategy
                            </h4>
                            <p className="text-[#263044] leading-relaxed mb-1.5">
                              {cs.strategy}
                            </p>
                            <ul className="space-y-1">
                              {cs.strategyPoints.map((pt, pIdx) => (
                                <li key={pIdx} className="flex items-start gap-1.5 text-[#263044]">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-[#3157D5] shrink-0 mt-0.5" />
                                  <span>{pt}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-bold uppercase tracking-wider text-[#168A62] text-[10px] mb-1">
                              Business Result
                            </h4>
                            <p className="text-[#263044] leading-relaxed">
                              {cs.result}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Compact Direct Actions */}
                    <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                      <button
                        type="button"
                        onClick={() => handleApplyStrategy(cs.title, cs.clientDomain)}
                        className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-white bg-[#3157D5] hover:bg-[#2546B8] rounded-md transition-colors cursor-pointer shadow-xs"
                      >
                        <span>Apply Similar Strategy</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                      <a
                        href={getWhatsAppUrl(`Hi LocalBuild, I reviewed the case study for "${cs.title}" and would like to discuss this for my business.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-[#168A62] bg-[#F0FDF4] hover:bg-emerald-100 border border-emerald-200 rounded-md transition-colors"
                      >
                        <MessageSquare className="w-3 h-3 text-[#168A62]" />
                        <span>Discuss on WhatsApp</span>
                      </a>
                    </div>

                  </div>

                </div>

              </article>
            );
          })}
        </div>

        {/* Section 7 Closing: View all case studies & references + Final CTA pair */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-[#DDE3EC] text-center max-w-2xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#667085] mb-2">
            View all case studies & references
          </p>
          <h3 className="font-display font-extrabold text-xl sm:text-2xl text-[#071126] tracking-tight mb-2">
            Every business problem requires its own measured solution.
          </h3>
          <p className="text-xs sm:text-sm text-[#667085] leading-relaxed mb-6">
            Tell us about your conversion bottlenecks or operational workflows. We will evaluate your current metrics and outline a clear implementation plan.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5">
            <button
              type="button"
              onClick={() => onQuoteClick("Case Studies Portfolio Inquiry")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold text-white bg-[#3157D5] hover:bg-[#2546B8] active:bg-[#1D3A9E] shadow-xs transition-colors cursor-pointer"
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <a
              href={getWhatsAppUrl("Hi LocalBuild, I reviewed your case studies and would like to start a conversation about growing my business.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold text-[#168A62] bg-[#F0FDF4] hover:bg-emerald-100 border border-emerald-200 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#168A62]" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
