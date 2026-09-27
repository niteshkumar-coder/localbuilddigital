import { ShieldCheck, Eye, CheckCircle2, PhoneCall, ArrowUpRight } from "lucide-react";

export default function Commitments() {
  const commitments = [
    {
      num: "01",
      title: "Direct Account Ownership",
      detail: "You hold primary administrative access to your Google Ads, Meta Business Manager, domains, and tracking pixels permanently. We manage everything on your behalf, but your business retains 100% legal ownership.",
      icon: ShieldCheck,
      highlight: "Permanent client asset"
    },
    {
      num: "02",
      title: "Transparent Platform Billing",
      detail: "Your advertising budget is charged directly by Google and Meta on your own company credit card. LocalBuild charges an agreed fee for strategy and execution — never an undisclosed percentage markup on ad spend.",
      icon: Eye,
      highlight: "0% markup on ad spend"
    },
    {
      num: "03",
      title: "Enquiry-Driven Execution",
      detail: "We engineer campaigns around verified phone calls, qualified form enquiries, and showroom visits. We never celebrate vanity impressions or cheap traffic that fails to convert into paying customers.",
      icon: CheckCircle2,
      highlight: "Commercial outcome focus"
    },
    {
      num: "04",
      title: "Verified Monthly Audits",
      detail: "Clean, transparent reporting based on raw platform data. You get direct visibility into cost per lead, keyword performance, and conversion rates without agency obfuscation.",
      icon: PhoneCall,
      highlight: "Raw platform metrics"
    }
  ];

  return (
    <section id="commitments" className="py-16 sm:py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 12-Column Editorial Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column (4 Cols): Thesis & Stance */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-4">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#3157D5] block">
              Commercial Integrity
            </span>
            <h2 className="font-display font-semibold text-2xl sm:text-3xl text-[#1E293B] tracking-tight leading-snug">
              Operating standards built on permanent client ownership.
            </h2>
            <p className="text-sm text-[#64748B] leading-relaxed">
              Most digital agencies build walled gardens — holding ad accounts, domains, and data hostage to enforce monthly retainers. LocalBuild operates on four structural principles that protect your business permanently.
            </p>

            <div className="pt-2">
              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-2xs">
                <span className="text-xs font-semibold text-[#1E293B] block mb-1">
                  Our Commercial Pledge
                </span>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  You own everything we build from day one. If you ever decide to bring marketing in-house, your entire infrastructure transitions cleanly with zero lock-in fees.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column (8 Cols): 2x2 Structured Principles */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {commitments.map((item) => {
              const Icon = item.icon;
              return (
                <div 
                  key={item.num}
                  className="p-6 sm:p-7 rounded-xl bg-white border border-[#E2E8F0] flex flex-col justify-between hover:border-[#3157D5]/40 transition-colors shadow-2xs group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs font-semibold text-[#3157D5]">
                        Standard {item.num}
                      </span>
                      <Icon className="w-4 h-4 text-[#3157D5]" />
                    </div>

                    <h3 className="font-display font-semibold text-base sm:text-lg text-[#1E293B] leading-snug mb-2">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                      {item.detail}
                    </p>
                  </div>

                  <div className="pt-4 mt-5 border-t border-[#E2E8F0] flex items-center justify-between text-xs">
                    <span className="font-mono text-[11px] font-medium text-[#168A62]">
                      {item.highlight}
                    </span>
                    <span className="text-[#3157D5] opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
