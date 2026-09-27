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
          border: 1px solid rgba(226, 232, 240, 0.8);
          box-shadow: 0 1px 3px rgba(15, 23, 42, 0.05), 0 8px 24px -4px rgba(15, 23, 42, 0.06);
          background: #0B1222;
          border-radius: 12px;
          padding: 8px;
          overflow: hidden;
          transition: all 200ms ease;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
        }
        .case__media:hover {
          border-color: rgba(49, 87, 213, 0.4);
          box-shadow: 0 4px 16px -2px rgba(15, 23, 42, 0.1);
        }
        .case__media img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center;
          border-radius: 8px;
          display: block;
          transition: transform 200ms ease;
        }
        .case__media:hover img {
          transform: scale(1.005);
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
          <span className="text-xs font-semibold uppercase tracking-wider text-[#3157D5] block mb-2">
            Verified Case Studies
          </span>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl lg:text-5xl text-[#1E293B] tracking-tight leading-[1.12] mb-3">
            Real Work. Measurable Impact.
          </h2>
          <p className="text-sm sm:text-base text-[#64748B] leading-relaxed max-w-[620px]">
            Explore how LocalBuild combines strategy, technology, and digital marketing to create meaningful business growth.
          </p>
        </div>

        {/* Quick Service Jump Bar - Clean Segmented Buttons */}
        <div className="mb-10 border-b border-[#E2E8F0] pb-3 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-1.5 min-w-max text-xs">
            <span className="text-[#64748B] font-medium pr-1.5 text-xs">Filter:</span>
            <button
              type="button"
              onClick={() => handleFilterClick("All")}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer text-xs font-medium ${
                selectedService === "All"
                  ? "bg-[#1E293B] text-white shadow-2xs"
                  : "bg-[#F8FAFC] text-[#64748B] hover:text-[#1E293B] hover:bg-[#E2E8F0]"
              }`}
            >
              All (12)
            </button>
            {CASE_STUDIES.map((cs) => (
              <button
                key={cs.id}
                type="button"
                onClick={() => handleFilterClick(cs.serviceCategory, cs.serviceNumber)}
                className={`px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer text-xs font-medium ${
                  selectedService === cs.serviceCategory
                    ? "bg-[#3157D5] text-white shadow-2xs"
                    : "bg-[#F8FAFC] text-[#64748B] hover:text-[#1E293B] hover:bg-[#E2E8F0]"
                }`}
              >
                {cs.serviceNumber} {cs.serviceCategory}
              </button>
            ))}
          </div>
        </div>

        {/* 12 Case Study Cards — In Service Order 01 → 12, Alternating Editorial Layout */}
        <div className="space-y-12 sm:space-y-16">
          {CASE_STUDIES.map((cs, idx) => {
            const isExpanded = !!expandedCards[cs.id];
            const isReverse = idx % 2 === 1; // Alternating layout: image right on odd index

            return (
              <article
                key={cs.id}
                id={`case-study-${cs.serviceNumber}`}
                className="case border-b border-[#DDE3EC] pb-12 sm:pb-16 last:border-b-0 last:pb-0"
              >
                {/* 2-Column Alternating Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
                  
                  {/* Image Column — Alternates left / right on desktop (>=1024px) */}
                  <div className={`lg:col-span-5 w-full ${isReverse ? "lg:order-2" : "lg:order-1"}`}>
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

                  {/* Content Column */}
                  <div className={`lg:col-span-7 space-y-4 ${isReverse ? "lg:order-1" : "lg:order-2"}`}>
                    
                    {/* Header: Service Category & Scanned Title */}
                    <div>
                      <div className="flex items-center gap-2 mb-1 flex-wrap text-xs">
                        <span className="font-semibold text-[#3157D5] font-mono">
                          Service {cs.serviceNumber}
                        </span>
                        <span className="text-[#DDE3EC]">·</span>
                        <span className="text-zinc-500">
                          {cs.clientDomain}
                        </span>
                        {idx === 0 && (
                          <>
                            <span className="text-[#DDE3EC]">·</span>
                            <span className="text-[11px] font-medium text-[#168A62]">
                              Featured Benchmark
                            </span>
                          </>
                        )}
                      </div>

                      {/* Scanned Service Title */}
                      <h3 className="font-display font-semibold text-xl sm:text-2xl text-[#071126] tracking-tight leading-snug">
                        {cs.title}
                      </h3>

                      {/* Scanned Tagline */}
                      <p className="text-xs sm:text-sm text-[#475467] font-normal mt-0.5">
                        {cs.tagline}
                      </p>
                    </div>

                    {/* Compact Key Outcome Banner */}
                    <div className="px-3.5 py-2.5 bg-[#F2F5FA] border border-[#DDE3EC] rounded-lg flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2 min-w-0">
                        <TrendingUp className="w-4 h-4 text-[#3157D5] shrink-0" />
                        <span className="text-xs sm:text-sm font-semibold text-[#071126] truncate">
                          {cs.keyOutcome.replace(" [Illustrative]", "")}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono font-medium px-1.5 py-0.5 rounded bg-white text-[#667085] border border-[#DDE3EC] shrink-0">
                        Illustrative
                      </span>
                    </div>

                    {/* Small Summary (1 concise line) */}
                    <p className="text-xs text-[#475467] leading-relaxed max-w-xl">
                      {cs.shortSummary}
                    </p>

                    {/* Compact Before vs After Comparison (Small 3-row table) */}
                    <div>
                      {/* Desktop / Tablet: Small clean table */}
                      <div className="hidden sm:block border border-[#DDE3EC] rounded-lg overflow-hidden bg-white text-xs">
                        <table className="w-full text-left border-collapse">
                          <thead>
                            <tr className="bg-[#F8FAFC] border-b border-[#DDE3EC] text-[#667085] text-[10px] font-semibold uppercase tracking-wider">
                              <th className="py-1.5 px-3 font-semibold">Key Metric</th>
                              <th className="py-1.5 px-3 font-semibold text-[#667085]">Before</th>
                              <th className="py-1.5 px-3 font-semibold text-[#168A62]">With LocalBuild</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-[#DDE3EC]">
                            {cs.metrics.map((m, mIdx) => (
                              <tr key={mIdx} className="hover:bg-[#F8FAFC] transition-colors">
                                <td className="py-1.5 px-3 font-medium text-[#263044]">{m.metric}</td>
                                <td className="py-1.5 px-3 text-[#667085] font-mono tabular-nums">{m.before}</td>
                                <td className="py-1.5 px-3 font-semibold text-[#168A62] font-mono tabular-nums">
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
                              <span className="text-[#667085] font-mono tabular-nums">{m.before}</span>
                            </div>
                            <div className="text-[11px]">
                              <span className="font-mono font-semibold text-[#168A62] tabular-nums">{m.withLocalBuild}</span>
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
          <h3 className="font-display font-semibold text-xl sm:text-2xl text-[#071126] tracking-tight mb-2">
            Every business problem requires its own measured solution.
          </h3>
          <p className="text-xs sm:text-sm text-[#667085] leading-relaxed mb-6 max-w-xl mx-auto">
            Tell us about your conversion bottlenecks or operational workflows. We will evaluate your current metrics and outline a clear implementation plan.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5">
            <button
              type="button"
              onClick={() => onQuoteClick("Case Studies Portfolio Inquiry")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold text-white bg-[#3157D5] hover:bg-[#2546B8] active:bg-[#1D3A9E] shadow-xs transition-colors cursor-pointer"
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
