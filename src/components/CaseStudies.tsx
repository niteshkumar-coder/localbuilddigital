import { useState } from "react";
import { Sparkles, ArrowRight, CheckCircle2, TrendingUp, Calendar, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface CaseStudiesProps {
  onQuoteClick: (prefilledNotes?: string) => void;
}

export default function CaseStudies({ onQuoteClick }: CaseStudiesProps) {
  const [filter, setFilter] = useState<"all" | "home" | "health" | "professional">("all");

  const cases = [
    {
      id: "case-1",
      category: "home",
      company: "Delta Air Plumbing",
      type: "Home Services & Contracting",
      metrics: "+245% Call Volume",
      challenge: "Inconsistent daily dispatch leads and heavy reliance on expensive lead brokers costing ₹6,500 per lead.",
      strategy: "Optimized the Google Map Pack rankings across 9 premium local service ZIP codes and built a high-speed mobile callback funnel.",
      result: "Generated 342 direct high-intent call bookings in 90 days, bringing lead acquisition expense down from ₹6,500 to ₹1,800 per lead.",
      timeline: "3 Months",
    },
    {
      id: "case-2",
      category: "health",
      company: "Apex Dental Care",
      type: "Dental & General Healthcare",
      metrics: "-52% Patient CPL",
      challenge: "Losing cosmetic and implant patient inquiries to massive multi-location corporate dental centers spending heavily on generic PPC.",
      strategy: "Constructed targeted local search campaigns focusing on exact high-value services (implant listings), paired with a seamless scheduling form.",
      result: "Secured 542 real cosmetic patient consult submissions in 6 months while slashing overall PPC cost-per-lead by 52%.",
      timeline: "6 Months",
    },
    {
      id: "case-3",
      category: "professional",
      company: "Stonegate Luxury Homes",
      type: "Real Estate & Brokerage Partner",
      metrics: "₹65 Cr Local Volume",
      challenge: "Capturing highly unqualified clicks on generic home-buyer ads that inflated monthly advertising budgets with zero closed sales.",
      strategy: "Engineered high-scoring target filter funnels and established targeted location-bound YouTube ads targeted at active local inventory seekers.",
      result: "Generated 37 pre-screened home buyers, leading directly to ₹65 Crores in verified closed transaction value within two quarters.",
      timeline: "6 Months",
    },
  ];

  const filteredCases = filter === "all" ? cases : cases.filter((c) => c.category === filter);

  return (
    <section id="case-studies" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 bg-accent/5 border border-accent/10 px-3 py-1 rounded-full text-xs font-semibold text-accent uppercase tracking-wide mb-4">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Success Blueprints</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-heading tracking-tight mb-4">
            Real performance studies with absolute transparency
          </h2>

          <p className="text-brand-body text-md">
            We don't count vanity metrics like impressions and social shares. We measure direct inbound phone inquiries, closed contracts, and real pipeline growth.
          </p>
        </div>

        {/* Filter row */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {([
            { id: "all", label: "All Cases" },
            { id: "home", label: "Home Services" },
            { id: "health", label: "Healthcare & Clinics" },
            { id: "professional", label: "Professional Services" },
          ] as const).map((btn) => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id)}
              className={`px-4.5 py-2 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer border ${
                filter === btn.id
                  ? "bg-primary border-primary text-white shadow-sm"
                  : "bg-white border-gray-200 text-brand-heading hover:border-gray-300 hover:bg-gray-50"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Case Studies grid with animations */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCases.map((cs) => (
              <motion.div
                layout
                key={cs.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col justify-between w-full"
              >
                {/* 180px height width 100% Image placeholder */}
                <div className="h-[180px] w-full bg-linear-to-br from-blue-50 to-indigo-100 flex items-center justify-center relative p-6 overflow-hidden border-b border-gray-100">
                  <div className="absolute inset-0 bg-radial-to-t from-white/30 to-transparent pointer-events-none" />
                  <div className="relative text-center">
                    <span className="text-3xl filter drop-shadow-sm">📊</span>
                    <p className="mt-2 text-slate-400 text-xs tracking-wider uppercase font-mono">Case-Study Blueprint #{cs.id.split("-").pop()}</p>
                    <p className="text-[#0F2167] text-md font-bold mt-1">{cs.company}</p>
                  </div>
                </div>

                <div className="p-4 sm:p-8 flex-1">
                  {/* Top bar category & time */}
                  <div className="flex justify-between items-center mb-5 pb-4 border-b border-gray-100">
                    <span className="text-[12px] uppercase tracking-wider font-extrabold text-accent bg-accent/5 px-2.5 py-1 rounded">
                      {cs.type}
                    </span>
                    <span className="text-[12px] text-brand-body font-semibold flex items-center gap-1 font-mono">
                      <Calendar className="w-3.5 h-3.5 text-cta" />
                      {cs.timeline}
                    </span>
                  </div>

                  {/* Brand and large metric */}
                  <h3 className="font-display font-bold text-lg sm:text-xl text-brand-heading mb-1">{cs.company}</h3>
                  <div className="text-2xl sm:text-3xl font-display font-extrabold text-primary mb-6 flex items-center gap-2">
                    {cs.metrics}
                  </div>

                  {/* Body challenge/strategy list */}
                  <div className="space-y-4">
                    {/* Challenge block */}
                    <div className="bg-gray-50/55 border border-dashed border-gray-200 rounded-xl p-4">
                      <p className="text-[10px] uppercase font-bold text-brand-heading mb-1 flex items-center gap-1.5 leading-none">
                        <AlertCircle className="w-3.5 h-3.5 text-cta" /> Business Obstacle
                      </p>
                      <p className="text-xs text-brand-body leading-normal">{cs.challenge}</p>
                    </div>

                    {/* Strategist action */}
                    <div>
                      <p className="text-[10px] uppercase font-bold text-accent mb-1 flex items-center gap-1.5 leading-none">
                        <CheckCircle2 className="w-3.5 h-3.5" /> High-impact Execution
                      </p>
                      <p className="text-xs text-brand-heading leading-normal font-medium">{cs.strategy}</p>
                    </div>

                    {/* Financial Outcome */}
                    <div className="pt-2">
                      <p className="text-[9px] uppercase font-extrabold tracking-widest text-emerald-600 mb-0.5">Verified Commercial Outcome</p>
                      <p className="text-xs text-brand-body leading-normal">{cs.result}</p>
                    </div>
                  </div>
                </div>

                {/* Card action button - Mobile full width */}
                <div className="p-4 sm:px-6 sm:py-4 border-t border-gray-100 bg-gray-50 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <span className="text-[11px] text-brand-body font-semibold hidden sm:inline">Scale similar results</span>
                  <button
                    onClick={() => onQuoteClick(`Hi LocalBuild! I saw your case study on [${cs.company}]. I would love a customized growth strategy review matching their model of [+245% call volume] for my local business.`)}
                    className="w-full sm:w-auto h-[44px] sm:h-auto bg-[#0F2167] hover:bg-[#0F2167]/90 text-white sm:text-primary sm:bg-transparent sm:hover:text-accent font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer border border-[#0F2167] sm:border-none"
                  >
                    Discuss Case Study
                    <ArrowRight className="w-4 h-4 sm:w-3.5 sm:h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
