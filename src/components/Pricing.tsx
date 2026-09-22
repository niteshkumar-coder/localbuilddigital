import { useState } from "react";
import { CheckCircle2, ArrowRight, ShieldCheck, ChevronDown, ChevronUp, FileText, UserCheck } from "lucide-react";
import { PRICING_PLANS } from "../data/pricing";

interface PricingProps {
  onQuoteClick: (prefilledService?: string) => void;
}

export default function Pricing({ onQuoteClick }: PricingProps) {
  const [expandedPlan, setExpandedPlan] = useState<string | null>(null);

  const toggleDetails = (planName: string) => {
    setExpandedPlan((prev) => (prev === planName ? null : planName));
  };

  const handleSelectPlan = (planName: string, price: string) => {
    onQuoteClick(`Hi LocalBuild, I'm interested in the ${planName} plan (${price} / 3 years). Please provide consultation details.`);
  };

  return (
    <section id="pricing" className="py-16 sm:py-24 bg-[#F7F5EF] border-b border-[#DDE3EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#3157D5] mb-2">
            Transparent Pricing
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl lg:text-5xl text-[#263044] tracking-tight leading-[1.15] mb-3">
            Simple, transparent 3-year pricing.
          </h2>
          <p className="text-base sm:text-lg text-[#667085] leading-relaxed max-w-2xl">
            A single one-time investment covers your complete technical build, campaign launch, and 36 months of ongoing strategic support. No recurring agency retainer markups.
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const isHighlighted = plan.popular;
            const isExpanded = expandedPlan === plan.name;
            const keyFeatures = plan.features.slice(0, 5);
            const extraFeatures = plan.features.slice(5);

            let idealFor = "For businesses building their digital foundation.";
            if (plan.name === "Market Dominance") {
              idealFor = "For businesses ready to build consistent demand.";
            } else if (plan.name === "City Saturation") {
              idealFor = "For businesses expanding local visibility.";
            }

            return (
              <div
                key={plan.name}
                className={`relative flex flex-col justify-between rounded-2xl bg-white p-6 sm:p-8 transition-all ${
                  isHighlighted
                    ? "border-2 border-[#3157D5] shadow-lg"
                    : "border border-[#DDE3EC] shadow-2xs"
                }`}
              >
                {/* Popular Badge */}
                {isHighlighted && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center px-3.5 py-1 rounded bg-[#3157D5] text-white text-xs font-bold uppercase tracking-wider shadow-xs font-mono">
                      Most Popular
                    </span>
                  </div>
                )}

                <div>
                  {/* Card Header */}
                  <div className="pb-5 border-b border-[#DDE3EC] mb-5">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#667085] block mb-1">
                      {plan.name === "Local Authority" && "PLAN 1"}
                      {plan.name === "Market Dominance" && "PLAN 2"}
                      {plan.name === "City Saturation" && "PLAN 3"}
                    </span>
                    <h3 className="font-display font-extrabold text-2xl text-[#263044]">
                      {plan.name}
                    </h3>
                    
                    <div className="flex items-baseline gap-1.5 mt-3">
                      <span className="text-3xl sm:text-4xl font-extrabold font-display text-[#263044]">
                        {plan.price}
                      </span>
                      <span className="text-xs font-bold text-[#667085]">
                        / 3 years
                      </span>
                    </div>

                    <p className="text-xs text-[#667085] mt-1.5 font-medium">
                      One-time build &amp; 36 months ongoing strategic support
                    </p>
                  </div>

                  {/* Ideal For */}
                  <div className="p-3.5 rounded-xl bg-[#F2F5FA] border border-[#DDE3EC] mb-6 text-xs leading-relaxed">
                    <p className="text-[#263044] font-medium">
                      <span className="font-bold">Ideal for: </span>
                      {idealFor}
                    </p>
                  </div>

                  {/* 5 Core Inclusions */}
                  <div className="space-y-3 mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#667085] block">
                      Core Inclusions:
                    </span>
                    {keyFeatures.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#263044]">
                        <CheckCircle2 className="w-4 h-4 text-[#168A62] shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Expandable "View full plan details" */}
                  <div className="pt-2 mb-6">
                    <button
                      type="button"
                      onClick={() => toggleDetails(plan.name)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#3157D5] hover:text-[#2546B8] transition-colors cursor-pointer"
                    >
                      <span>{isExpanded ? "Hide full plan details" : "View full plan details"}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>

                    {isExpanded && (
                      <div className="mt-3.5 p-4 rounded-xl bg-[#F2F5FA] border border-[#DDE3EC] space-y-2.5 text-xs text-[#667085]">
                        {extraFeatures.map((item, eIdx) => (
                          <div key={eIdx} className="flex items-start gap-2">
                            <span className="text-[#3157D5] font-bold">•</span>
                            <span className="leading-relaxed text-[#263044]">{item}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-4 border-t border-[#DDE3EC]">
                  <button
                    type="button"
                    onClick={() => handleSelectPlan(plan.name, plan.price)}
                    className={`w-full h-[52px] px-4 rounded-md text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs uppercase tracking-wide ${
                      isHighlighted
                        ? "bg-[#3157D5] hover:bg-[#2546B8] text-white"
                        : "bg-[#F2F5FA] hover:bg-[#DDE3EC] text-[#263044] border border-[#DDE3EC]"
                    }`}
                  >
                    <span>Choose Plan</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Guarantee Block */}
        <div className="mt-12 p-6 sm:p-7 rounded-2xl bg-white border border-[#DDE3EC] text-xs sm:text-sm text-[#667085] flex flex-col sm:flex-row items-start sm:items-center gap-4 shadow-2xs">
          <div className="w-10 h-10 rounded-xl bg-[#168A62]/10 text-[#168A62] flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <span className="font-bold text-[#263044] block mb-0.5 text-sm sm:text-base">
              100% Direct Account Billing &amp; Transparency Guarantee
            </span>
            <p className="leading-relaxed">
              Your media advertising spend is billed directly by Google or Meta to your corporate card. You retain permanent ownership of your accounts, creative assets, and lead history. No hidden markups.
            </p>
          </div>
        </div>

        {/* References Block */}
        <div className="mt-6 p-6 sm:p-7 rounded-2xl bg-white border border-[#DDE3EC] text-xs sm:text-sm text-[#667085] flex flex-col sm:flex-row items-start gap-4 shadow-2xs">
          <div className="w-10 h-10 rounded-xl bg-[#3157D5]/10 text-[#3157D5] flex items-center justify-center shrink-0 mt-0.5">
            <UserCheck className="w-5 h-5" />
          </div>
          <div className="space-y-2">
            <span className="font-bold text-[#263044] block text-sm sm:text-base">
              Verified Client References on Request
            </span>
            <p className="leading-relaxed">
              Selected work and documented results will be added as verified client projects become available. Verified references available on request for serious enquiries.
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-1 text-xs font-semibold text-[#263044]">
              <span className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3157D5]" />
                Real business owner contacts
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3157D5]" />
                Live ad account audit walk-through
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3157D5]" />
                Documented call volume increases
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
