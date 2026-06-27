import { CheckCircle2, ShieldCheck, HelpCircle } from "lucide-react";
import { motion } from "motion/react";

interface PricingProps {
  onQuoteClick: (prefilledNotes?: string) => void;
}

export default function Pricing({ onQuoteClick }: PricingProps) {
  const tiers = [
    {
      name: "Local Authority",
      price: "₹19,999",
      period: "3 years",
      desc: "Perfect for single-location owner-operators looking to claim top 3 ranks in their local zip code maps.",
      features: [
        "Google Business Profile (GBP) deep optimization",
        "Weekly local search keyword tracking (25 terms)",
        "Local schema data structure setup",
        "Directory listings & core citation synchronization",
        "1 dedicated speed-optimized landing page",
        "Monthly strategy audit & review call",
      ],
      cta: "Choose Local Authority",
      popular: false,
    },
    {
      name: "Market Dominance",
      price: "₹34,999",
      period: "3 years",
      desc: "Our signature package. Combines local maps dominance with aggressive Google & Meta paid lead generation.",
      features: [
        "Complete GBP optimization & ongoing local search plan",
        "Competitor keyword monitoring (100 terms)",
        "Google Ads & Meta Paid ad campaign build",
        "Custom A/B landing page funnel matching CRO norms",
        "Up to ₹2,50,000 monthly ad spend execution",
        "Dynamic phone call lead routing & dashboard sync",
        "Bi-weekly strategy sync & optimization adjustments",
      ],
      cta: "Choose Market Dominance",
      popular: true,
    },
    {
      name: "City Saturation",
      price: "₹64,999",
      period: "3 years",
      desc: "Designed for scaling service teams with multiple territories, offices, or franchise locations.",
      features: [
        "Multi-city/office maps pack ranking strategy",
        "Unlimited keyword monitoring & competitor analysis",
        "Aggressive ad spend execution (unlimited budgets)",
        "Unlimited premium speed-optimized funnel creations",
        "Continuous CRO form tracking & chat-bot triggers",
        "Advanced programmatic competitor geo-conquesting",
        "Direct API integration with customer CRMs",
        "Weekly status calls & bespoke visual dashboard",
      ],
      cta: "Choose Saturation",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 bg-accent/5 border border-accent/10 px-3 py-1 rounded-full text-xs font-semibold text-accent uppercase tracking-wide mb-4">
            <ShieldCheck className="w-4 h-4 text-accent" />
            <span>Investment Plans</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-heading tracking-tight mb-4">
            Consolidated packages, zero hidden fees
          </h2>

          <p className="text-brand-body text-md">
            No long-term commitments or messy agency setups. We build modern scaling blueprints matching precisely where you stand on your local growth journey.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative bg-white border rounded-2xl p-8 flex flex-col justify-between transition-all duration-350 hover:shadow-lg ${
                tier.popular
                  ? "border-primary/80 ring-2 ring-primary/10 shadow-md"
                  : "border-gray-200"
              }`}
            >
              {/* Top Popular Ribbon decoration */}
              {tier.popular && (
                <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-accent text-white text-[10px] uppercase font-extrabold tracking-widest px-4 py-1.5 rounded-full shadow-sm text-center">
                  Highly Popular Choice
                </div>
              )}

              <div>
                {/* Header */}
                <h3 className="font-display font-semibold text-lg text-brand-heading sm:text-xl mb-2">{tier.name}</h3>
                <p className="text-brand-body text-xs min-h-[48px] leading-relaxed mb-6">{tier.desc}</p>

                {/* Amount */}
                <div className="flex items-baseline mb-6 border-b border-gray-100 pb-5">
                  <span className="font-display font-extrabold text-4xl text-primary">{tier.price}</span>
                  <span className="text-sm font-medium text-brand-body ml-2">/ {tier.period}</span>
                </div>

                {/* Feature checklist */}
                <div className="space-y-3.5 mb-8">
                  {tier.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${tier.popular ? "text-accent" : "text-primary"}`} />
                      <span className="text-brand-heading font-medium text-xs leading-normal">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() =>
                  onQuoteClick(
                    `Hi LocalBuild! I am interested in locking in your [${tier.name}] package at [${tier.price}/3 years] for my business. I'd love to schedule our introductory strategy and review session.`
                  )
                }
                className={`w-full py-3 px-4 font-semibold text-sm rounded-lg transition-transform duration-200 hover:-translate-y-0.5 pointer-events-auto cursor-pointer ${
                  tier.popular
                    ? "bg-primary hover:bg-primary/95 text-white shadow-md shadow-primary/15"
                    : "bg-white hover:bg-gray-50 text-brand-heading border border-gray-200 shadow-xs"
                }`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>

        {/* General Disclaimer FAQ */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-200/60 max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-6 justify-between">
          <div className="flex gap-3.5 items-start">
            <HelpCircle className="w-6 h-6 text-cta shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-brand-heading text-sm">Need a custom localized blueprint?</p>
              <p className="text-xs text-brand-body leading-relaxed mt-1">
                If you have custom requirements, operate a enterprise service brand across multiple states, or require custom integrations, we'll design a customized scope. All prices are flat-rate.
              </p>
            </div>
          </div>
          <button
            onClick={() => onQuoteClick("Hi LocalBuild! We are looking for a bespoke, multi-state enterprise marketing campaign and require a custom plan. Please schedule a call.")}
            className="text-xs font-bold text-accent hover:text-accent/90 shrink-0 border-b-2 border-accent/25 hover:border-accent pb-0.5 transition-all cursor-pointer"
          >
            Request Custom Scope Plan
          </button>
        </div>
      </div>
    </section>
  );
}
