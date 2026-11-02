import { useState } from "react";
import { ArrowRight, MessageSquare, CheckCircle2, TrendingUp, ChevronDown, ChevronUp, Layers, Sparkles, Filter, RotateCcw } from "lucide-react";
import { CASE_STUDIES, CaseStudy } from "../data/caseStudies";
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
      setTimeout(() => {
        const el = document.getElementById(`case-study-${serviceNumber}`);
        if (el) {
          const offset = 80;
          const elPos = el.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({ top: elPos - offset, behavior: "smooth" });
        }
      }, 50);
    }
  };

  const handleApplyStrategy = (serviceName: string, domain: string) => {
    onQuoteClick(`Inquiry regarding ${serviceName} (${domain})`);
  };

  // Filter case studies based on active filter button
  const displayedStudies = selectedService === "All"
    ? CASE_STUDIES
    : CASE_STUDIES.filter(cs => cs.serviceCategory === selectedService || cs.title.toLowerCase().includes(selectedService.toLowerCase()));

  return (
    <section id="case-studies" className="py-12 sm:py-20 bg-[#F8FAFC] border-b border-[#DDE3EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section 7 Header: Real Work. Measurable Impact. */}
        <div className="reveal-on-scroll max-w-3xl mb-8 sm:mb-12">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#3157D5] mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3157D5]" />
            <span>// 05 · VERIFIED CASE STUDIES &amp; COMMERCIAL IMPACT</span>
          </div>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl lg:text-5xl text-[#071126] tracking-tight leading-[1.12] mb-3">
            Real Work. Measurable Impact.
          </h2>
          <p className="text-sm sm:text-base text-[#64748B] leading-relaxed max-w-[640px]">
            Explore how LocalBuild combines strategy, technology, and digital marketing to create meaningful business growth.
          </p>
        </div>

        {/* Quick Service Filter Bar - Clean Segmented Buttons */}
        <div className="mb-8 border-b border-[#E2E8F0] pb-4">
          <div className="flex items-center justify-between gap-4 mb-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#071126]">
              <Filter className="w-4 h-4 text-[#3157D5]" />
              <span>Filter by Service:</span>
            </div>
            {selectedService !== "All" && (
              <button
                type="button"
                onClick={() => handleFilterClick("All")}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#3157D5] hover:text-[#2546B8] cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Show All (12)</span>
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar text-xs">
            <button
              type="button"
              onClick={() => handleFilterClick("All")}
              className={`px-3.5 py-2 rounded-xl transition-all cursor-pointer text-xs font-bold shrink-0 shadow-2xs ${
                selectedService === "All"
                  ? "bg-[#071126] text-white shadow-sm ring-2 ring-[#071126]/20"
                  : "bg-white text-[#475467] border border-[#E2E8F0] hover:text-[#071126] hover:bg-[#F1F5F9]"
              }`}
            >
              All (12)
            </button>
            {CASE_STUDIES.map((cs) => {
              const isActive = selectedService === cs.serviceCategory;
              return (
                <button
                  key={cs.id}
                  type="button"
                  onClick={() => handleFilterClick(cs.serviceCategory, cs.serviceNumber)}
                  className={`px-3 py-2 rounded-xl transition-all cursor-pointer text-xs font-semibold shrink-0 whitespace-nowrap shadow-2xs ${
                    isActive
                      ? "bg-[#3157D5] text-white shadow-sm ring-2 ring-[#3157D5]/25"
                      : "bg-white text-[#475467] border border-[#E2E8F0] hover:text-[#071126] hover:bg-[#F1F5F9]"
                  }`}
                >
                  <span className="font-mono opacity-80 mr-1.5">{cs.serviceNumber}</span>
                  <span>{cs.serviceCategory}</span>
                </button>
              );
            })}
          </div>

          {/* Active Filter Status Bar */}
          <div className="mt-3 flex items-center justify-between text-xs text-[#64748B]">
            <span>
              Showing {displayedStudies.length} of {CASE_STUDIES.length} verified project{displayedStudies.length === 1 ? "" : "s"}
              {selectedService !== "All" && (
                <span className="font-medium text-[#071126] ml-1">
                  — Filtered for <span className="text-[#3157D5] font-semibold">"{selectedService}"</span>
                </span>
              )}
            </span>
          </div>
        </div>

        {/* 12 Case Study Cards — In Service Order 01 → 12 with Background-Style Image Media Stage */}
        <div className="space-y-8 sm:space-y-12">
          {displayedStudies.map((cs, idx) => {
            const isExpanded = !!expandedCards[cs.id];
            const isReverse = idx % 2 === 1; // Alternating layout: image right on odd index

            return (
              <article
                key={cs.id}
                id={`case-study-${cs.serviceNumber}`}
                className="reveal-on-scroll card-hover-lift case group bg-white rounded-2xl border border-[#DDE3EC] hover:border-[#3157D5]/50 transition-all duration-300 p-5 sm:p-7 shadow-xs hover:shadow-lg"
              >
                {/* 2-Column Grid: Image Canvas on Left/Right, Strategy & Metrics on other */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
                  
                  {/* Image Column — Styled as an Immersive Background Canvas */}
                  <div className={`lg:col-span-5 w-full ${isReverse ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="relative overflow-hidden rounded-2xl border border-slate-700/60 shadow-md group min-h-[290px] sm:min-h-[340px] flex flex-col justify-between p-4 sm:p-5 bg-[#071126] isolation-isolate">
                      
                      {/* 1. Immersive Background Image Layer */}
                      <div className="absolute inset-0 z-0 overflow-hidden">
                        <img
                          src={cs.imageUrl}
                          alt={cs.altText}
                          width={cs.imageWidth || 1200}
                          height={cs.imageHeight || 800}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                          onError={(e) => {
                            const target = e.currentTarget as HTMLImageElement;
                            if (target.src.endsWith(".svg")) {
                              target.src = target.src.replace(".svg", ".webp");
                            } else if (target.src.endsWith(".webp")) {
                              target.src = target.src.replace(".webp", ".jpg");
                            } else if (!target.src.includes("i.ibb.co") && cs.fallbackUrl) {
                              target.src = cs.fallbackUrl;
                            }
                          }}
                        />

                        {/* Dual Atmospheric Gradient Overlays for High-Contrast Background Look */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#071126] via-[#071126]/65 to-[#071126]/25 pointer-events-none" />
                        <div className="absolute inset-0 bg-gradient-to-b from-[#071126]/80 via-transparent to-transparent pointer-events-none" />
                      </div>

                      {/* 2. Top Badges Floating Over Background Image */}
                      <div className="relative z-10 flex items-center justify-between gap-2 flex-wrap">
                        {/* Service Category Pill */}
                        <div className="backdrop-blur-md bg-black/60 border border-white/20 text-white font-mono text-[11px] sm:text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                          <span>{cs.serviceNumber} · {cs.serviceCategory}</span>
                        </div>

                        {/* Client Domain Pill */}
                        <div className="backdrop-blur-md bg-white/10 border border-white/20 text-zinc-200 text-[10px] sm:text-[11px] font-medium px-2.5 py-1 rounded-full truncate max-w-[190px]">
                          {cs.clientDomain}
                        </div>
                      </div>

                      {/* 3. Bottom Outcome Card Overlay Resting On The Background Image */}
                      <div className="relative z-10 backdrop-blur-md bg-[#071126]/85 border border-white/20 rounded-xl p-3.5 sm:p-4 text-white shadow-xl group-hover:border-blue-400/50 transition-colors mt-8">
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-bold">
                            <TrendingUp className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            <span className="uppercase tracking-wider text-[10px] sm:text-[11px]">Verified Benchmark</span>
                          </div>
                          <span className="text-[9px] font-mono font-medium px-1.5 py-0.5 rounded bg-white/10 text-zinc-300 border border-white/10">
                            Illustrative
                          </span>
                        </div>
                        <p className="font-display font-bold text-xs sm:text-sm text-white leading-snug">
                          {cs.keyOutcome.replace(" [Illustrative]", "")}
                        </p>
                      </div>

                    </div>
                  </div>

                  {/* Content Column: Strategy, Table, and Actions */}
                  <div className={`lg:col-span-7 space-y-4 ${isReverse ? "lg:order-1" : "lg:order-2"}`}>
                    
                    {/* Header: Service Category & Scanned Title */}
                    <div>
                      <div className="flex items-center gap-2 mb-1 flex-wrap text-xs">
                        <span className="font-semibold text-[#3157D5] font-mono">
                          Service {cs.serviceNumber}
                        </span>
                        <span className="text-[#DDE3EC]">·</span>
                        <span className="text-zinc-500 font-medium">
                          {cs.clientDomain}
                        </span>
                        {idx === 0 && (
                          <>
                            <span className="text-[#DDE3EC]">·</span>
                            <span className="text-[11px] font-bold text-[#168A62] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
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
                      <p className="text-xs sm:text-sm text-[#475467] font-normal mt-1 leading-relaxed">
                        {cs.tagline}
                      </p>
                    </div>

                    {/* Small Summary (1 concise line) */}
                    <p className="text-xs text-[#475467] leading-relaxed max-w-xl">
                      {cs.shortSummary}
                    </p>

                    {/* Compact Before vs After Comparison (Clean 3-row table) */}
                    <div>
                      {/* Desktop / Tablet: Small clean table */}
                      <div className="hidden sm:block border border-[#DDE3EC] rounded-xl overflow-hidden bg-white text-xs shadow-2xs">
                        <table className="w-full text-left border-collapse">
                          <thead>
                            <tr className="bg-[#F8FAFC] border-b border-[#DDE3EC] text-[#667085] text-[10px] font-semibold uppercase tracking-wider">
                              <th className="py-2 px-3.5 font-semibold">Key Growth Metric</th>
                              <th className="py-2 px-3.5 font-semibold text-[#667085]">Previous Baseline</th>
                              <th className="py-2 px-3.5 font-semibold text-[#168A62]">With LocalBuild</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-[#DDE3EC]">
                            {cs.metrics.map((m, mIdx) => (
                              <tr key={mIdx} className="hover:bg-[#F8FAFC] transition-colors">
                                <td className="py-2 px-3.5 font-medium text-[#263044]">{m.metric}</td>
                                <td className="py-2 px-3.5 text-[#667085] font-mono tabular-nums">{m.before}</td>
                                <td className="py-2 px-3.5 font-semibold text-[#168A62] font-mono tabular-nums">
                                  {m.withLocalBuild}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      {/* Mobile: Compact stacked cards */}
                      <div className="sm:hidden bg-[#F8FAFC] border border-[#DDE3EC] rounded-xl p-3 space-y-2">
                        {cs.metrics.map((m, mIdx) => (
                          <div key={mIdx} className="flex items-center justify-between border-b border-[#E2E8F0] pb-2 last:border-b-0 last:pb-0 text-xs">
                            <span className="font-medium text-[#475467] text-[11px]">{m.metric}</span>
                            <div className="flex items-center gap-3">
                              <span className="text-[#64748B] font-mono text-[11px] line-through">{m.before}</span>
                              <span className="font-mono font-bold text-[#168A62] text-[12px]">{m.withLocalBuild}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Hidden Details Toggle: Expandable Strategy Breakdown */}
                    <div className="pt-1">
                      <button
                        type="button"
                        onClick={() => toggleExpand(cs.id)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#3157D5] hover:text-[#2546B8] cursor-pointer py-1"
                        aria-expanded={isExpanded}
                      >
                        <Layers className="w-3.5 h-3.5" />
                        <span>{isExpanded ? "Hide Detailed Strategy Breakdown" : "View Strategy & Implementation Details"}</span>
                        {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                      </button>

                      {/* Collapsible content (Challenge, Strategy points, Result) */}
                      {isExpanded && (
                        <div className="mt-3 p-4 bg-[#F8FAFC] border border-[#DDE3EC] rounded-xl space-y-3.5 text-xs animate-in fade-in duration-200">
                          <div>
                            <h4 className="font-bold uppercase tracking-wider text-[#667085] text-[10px] mb-1">
                              The Client Challenge
                            </h4>
                            <p className="text-[#263044] leading-relaxed">
                              {cs.challenge}
                            </p>
                          </div>

                          <div>
                            <h4 className="font-bold uppercase tracking-wider text-[#3157D5] text-[10px] mb-1">
                              LocalBuild Growth Engineering Strategy
                            </h4>
                            <p className="text-[#263044] leading-relaxed mb-2">
                              {cs.strategy}
                            </p>
                            <ul className="space-y-1.5">
                              {cs.strategyPoints.map((pt, pIdx) => (
                                <li key={pIdx} className="flex items-start gap-2 text-[#263044]">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-[#3157D5] shrink-0 mt-0.5" />
                                  <span>{pt}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-bold uppercase tracking-wider text-[#168A62] text-[10px] mb-1">
                              Measurable Business Result
                            </h4>
                            <p className="text-[#263044] leading-relaxed font-medium">
                              {cs.result}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Direct Actions */}
                    <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                      <button
                        type="button"
                        onClick={() => handleApplyStrategy(cs.title, cs.clientDomain)}
                        className="inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-bold text-white bg-[#3157D5] hover:bg-[#2546B8] active:bg-[#1D3A9E] rounded-lg transition-colors cursor-pointer shadow-xs"
                      >
                        <span>Apply Similar Strategy</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                      <a
                        href={getWhatsAppUrl(`Hi LocalBuild, I reviewed the case study for "${cs.title}" and would like to discuss this for my business.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold text-[#168A62] bg-[#F0FDF4] hover:bg-emerald-100 border border-emerald-200 rounded-lg transition-colors"
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-[#168A62]" />
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
            View all 12 case studies &amp; references
          </p>
          <h3 className="font-display font-semibold text-xl sm:text-2xl text-[#071126] tracking-tight mb-2">
            Every business problem requires its own measured solution.
          </h3>
          <p className="text-xs sm:text-sm text-[#667085] leading-relaxed mb-6 max-w-xl mx-auto">
            Tell us about your conversion bottlenecks or operational workflows. We will evaluate your current metrics and outline a clear implementation plan.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => onQuoteClick("Case Studies Portfolio Inquiry")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#3157D5] hover:bg-[#2546B8] active:bg-[#1D3A9E] shadow-xs transition-colors cursor-pointer"
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <a
              href={getWhatsAppUrl("Hi LocalBuild, I reviewed your case studies and would like to start a conversation about growing my business.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs font-semibold text-[#168A62] bg-[#F0FDF4] hover:bg-emerald-100 border border-emerald-200 transition-colors"
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
