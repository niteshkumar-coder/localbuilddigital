import { ArrowRight, CheckCircle2, XCircle } from "lucide-react";

interface AccountabilityModelProps {
  onQuoteClick: () => void;
}

export default function AccountabilityModel({ onQuoteClick }: AccountabilityModelProps) {
  const comparisonPoints = [
    {
      dimension: "Media & Ad Spend",
      agency: "Marked up with 15% to 30% undisclosed agency commissions.",
      localbuild: "Billed 100% directly by Google & Meta on your company card. ₹0 agency markup.",
    },
    {
      dimension: "Asset Ownership",
      agency: "Held in proprietary agency accounts. You lose campaign history if you leave.",
      localbuild: "100% legal ownership of domains, ad accounts, pixels, and creative assets permanently.",
    },
    {
      dimension: "Reporting Metric",
      agency: "Vanity impressions, raw clicks, and automated PDF summary sheets.",
      localbuild: "Verified phone calls, qualified consultation inquiries, and cost-per-acquisition.",
    },
    {
      dimension: "Contract Alignment",
      agency: "Multi-month lock-ins with minimum spend retainers and termination penalties.",
      localbuild: "Clean 3-year support model with zero recurring monthly retainer markups.",
    }
  ];

  return (
    <section id="accountability" className="py-16 sm:py-24 bg-[#071126] text-white border-b border-[#1C2A4A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 12-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-8">
          
          {/* Left Column (4 Columns): Thesis & Direct Stance */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-4">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#7C8CFF] block">
              The Accountability Model
            </span>
            <h2 className="font-display font-semibold text-2xl sm:text-4xl text-white tracking-tight leading-tight">
              A transparent commercial partnership with zero agency markups.
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed">
              Traditional agency agreements are structured to make leaving difficult, obscure real platform costs, and bill for activity rather than commercial results. We designed our business model to do the exact opposite.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={onQuoteClick}
                className="btn btn--primary cursor-pointer px-6 h-12 text-sm font-semibold rounded-lg shadow-sm"
              >
                <span>Discuss Your Growth Plan</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>

          {/* Right Column (8 Columns): Authoritative Comparison Ledger */}
          <div className="lg:col-span-8 bg-[#0B1633] border border-white/10 rounded-2xl overflow-hidden shadow-xl">
            {/* Table Header */}
            <div className="grid grid-cols-1 sm:grid-cols-2 border-b border-white/10 bg-[#071126]/60 text-xs font-mono font-semibold uppercase tracking-wider">
              <div className="p-4 sm:p-5 text-red-400/90 flex items-center gap-2 border-b sm:border-b-0 sm:border-r border-white/10">
                <XCircle className="w-4 h-4" />
                <span>Traditional Agency Model</span>
              </div>
              <div className="p-4 sm:p-5 text-emerald-400 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>The LocalBuild Standard</span>
              </div>
            </div>

            {/* Comparison Rows */}
            <div className="divide-y divide-white/10">
              {comparisonPoints.map((pt, idx) => (
                <div key={idx} className="grid grid-cols-1 sm:grid-cols-2 hover:bg-white/[0.02] transition-colors">
                  {/* Left: Traditional Agency */}
                  <div className="p-5 sm:p-6 border-b sm:border-b-0 sm:border-r border-white/10 space-y-1.5">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500 block">
                      {pt.dimension}
                    </span>
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      {pt.agency}
                    </p>
                  </div>

                  {/* Right: LocalBuild Standard */}
                  <div className="p-5 sm:p-6 space-y-1.5 bg-[#3157D5]/[0.06]">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#7C8CFF] block">
                      LocalBuild Commitment
                    </span>
                    <p className="text-xs sm:text-sm text-white font-medium leading-relaxed">
                      {pt.localbuild}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer disclosure */}
            <div className="p-4 bg-[#071126]/80 border-t border-white/10 text-[11px] text-zinc-400 flex items-center justify-between">
              <span>Verified Commercial Standard</span>
              <span className="font-mono">Zero Hidden Fees</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
