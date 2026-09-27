import { ArrowRight, XCircle, CheckCircle2 } from "lucide-react";

interface AccountabilityModelProps {
  onQuoteClick: () => void;
}

export default function AccountabilityModel({ onQuoteClick }: AccountabilityModelProps) {
  return (
    <section id="accountability" className="py-16 sm:py-24 bg-[#0B1633] text-white border-b border-[#071126]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#7C8CFF] mb-2">
            The Accountability Model
          </span>
          <h2 className="font-display font-semibold text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.12]">
            Transparent commercial partnership with zero agency markup.
          </h2>
        </div>

        {/* 2-Column Comparison: Column A vs Column B */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-10">
          
          {/* Column A: Traditional Agencies */}
          <div className="p-6 sm:p-8 rounded-xl bg-[#071126]/80 border border-white/10 space-y-6">
            <div className="flex items-center gap-2.5 pb-4 border-b border-white/10">
              <div className="w-8 h-8 rounded-lg bg-red-500/10 text-red-400 flex items-center justify-center shrink-0">
                <XCircle className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-mono font-medium uppercase tracking-wider text-zinc-400 block">
                  Industry Standard
                </span>
                <h3 className="font-display font-semibold text-lg text-zinc-200">
                  Traditional Agencies
                </h3>
              </div>
            </div>

            <ul className="space-y-4 text-sm text-zinc-300">
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold mt-0.5">•</span>
                <span>Focus on impressions, clicks and vanity traffic metrics</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold mt-0.5">•</span>
                <span>Hidden markups on monthly advertising platform spend</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold mt-0.5">•</span>
                <span>Opaque monthly PDF reports with no account ownership</span>
              </li>
            </ul>
          </div>

          {/* Column B: LocalBuild */}
          <div className="p-6 sm:p-8 rounded-xl bg-[#3157D5]/15 border border-[#3157D5]/60 space-y-6">
            <div className="flex items-center gap-2.5 pb-4 border-b border-[#3157D5]/30">
              <div className="w-8 h-8 rounded-lg bg-[#3157D5] text-white flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-mono font-medium uppercase tracking-wider text-[#7C8CFF] block">
                  Our Commitment
                </span>
                <h3 className="font-display font-semibold text-lg text-white">
                  LocalBuild Standard
                </h3>
              </div>
            </div>

            <ul className="space-y-4 text-sm text-zinc-100 font-medium">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#4C7DFF] shrink-0 mt-0.5" />
                <span>Focus exclusively on phone calls, consultations, and revenue</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#4C7DFF] shrink-0 mt-0.5" />
                <span>Direct billing from Google &amp; Meta on your company card</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#4C7DFF] shrink-0 mt-0.5" />
                <span>100% legal ownership of accounts, domains, and data</span>
              </li>
            </ul>
          </div>

        </div>

        {/* CTA */}
        <div>
          <button
            type="button"
            onClick={onQuoteClick}
            className="h-12 px-6 rounded-lg text-sm font-semibold text-white bg-[#3157D5] hover:bg-[#2546B8] active:bg-[#1E3A8A] transition-colors inline-flex items-center gap-2 cursor-pointer shadow-xs"
          >
            <span>Discuss Your Growth Plan</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
