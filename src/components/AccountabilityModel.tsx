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
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#7C8CFF] mb-2">
            The Accountability Model
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.15]">
            Transparent commercial partnership with zero agency markup.
          </h2>
        </div>

        {/* 2-Column Comparison: Column A vs Column B */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-10">
          
          {/* Column A: Traditional Agencies */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#071126]/70 border border-white/10 space-y-6">
            <div className="flex items-center gap-2.5 pb-4 border-b border-white/10">
              <div className="w-8 h-8 rounded-lg bg-red-500/10 text-red-400 flex items-center justify-center shrink-0">
                <XCircle className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 block">
                  Industry Standard
                </span>
                <h3 className="font-display font-bold text-lg sm:text-xl text-zinc-200">
                  Traditional Agencies
                </h3>
              </div>
            </div>

            <ul className="space-y-4 text-sm text-zinc-300">
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold mt-0.5">•</span>
                <span>Focus on clicks &amp; impressions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold mt-0.5">•</span>
                <span>Markup media spend</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold mt-0.5">•</span>
                <span>Vague monthly reports</span>
              </li>
            </ul>
          </div>

          {/* Column B: LocalBuild */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#3157D5]/15 border-2 border-[#3157D5] space-y-6">
            <div className="flex items-center gap-2.5 pb-4 border-b border-[#3157D5]/30">
              <div className="w-8 h-8 rounded-lg bg-[#3157D5] text-white flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#7C8CFF] block">
                  Our Commitment
                </span>
                <h3 className="font-display font-bold text-lg sm:text-xl text-white">
                  LocalBuild
                </h3>
              </div>
            </div>

            <ul className="space-y-4 text-sm text-zinc-100 font-medium">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#4C7DFF] shrink-0 mt-0.5" />
                <span>Focus on phone calls &amp; consultations</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#4C7DFF] shrink-0 mt-0.5" />
                <span>Direct billing from Google &amp; Meta</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#4C7DFF] shrink-0 mt-0.5" />
                <span>Clear reporting &amp; verified leads</span>
              </li>
            </ul>
          </div>

        </div>

        {/* CTA */}
        <div>
          <button
            type="button"
            onClick={onQuoteClick}
            className="h-[52px] px-8 rounded-md text-xs sm:text-sm font-bold text-white bg-[#3157D5] hover:bg-[#2546B8] active:bg-[#1E3A8A] transition-colors inline-flex items-center gap-2 cursor-pointer shadow-xs uppercase tracking-wide"
          >
            <span>Discuss Your Growth Plan</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
