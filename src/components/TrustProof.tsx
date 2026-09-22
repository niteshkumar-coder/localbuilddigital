import { ShieldCheck, CheckCircle2, Building2, Stethoscope, Home, Briefcase, GraduationCap, ShoppingBag, Eye, PhoneCall } from "lucide-react";

export default function TrustProof() {
  const industries = [
    { label: "Home Services", icon: Home },
    { label: "Healthcare", icon: Stethoscope },
    { label: "Real Estate", icon: Building2 },
    { label: "Professional Services", icon: Briefcase },
    { label: "Coaching & Education", icon: GraduationCap },
    { label: "Retail & Local Businesses", icon: ShoppingBag },
  ];

  const commitments = [
    {
      num: "01",
      title: "Direct account ownership",
      desc: "You retain 100% legal ownership of your Google Ads, Meta, and analytics accounts.",
      icon: ShieldCheck
    },
    {
      num: "02",
      title: "Transparent platform billing",
      desc: "Your media budget is billed directly by Google and Meta — no hidden agency markups.",
      icon: Eye
    },
    {
      num: "03",
      title: "Conversion-focused execution",
      desc: "Fast, mobile-first websites structured intentionally for local click-to-call conversions.",
      icon: CheckCircle2
    },
    {
      num: "04",
      title: "Clear reporting",
      desc: "Performance is measured through recorded phone calls and verified commercial enquiries.",
      icon: PhoneCall
    }
  ];

  return (
    <section className="relative py-10 sm:py-16 bg-[#F2F5FA] border-b border-zinc-200/80 overflow-hidden isolate">
      {/* Background Architectural Texture Image (Desktop only for performance) */}
      <div className="hidden sm:block absolute inset-0 -z-20 w-full h-full pointer-events-none overflow-hidden">
        <img
          src="https://babyinbrazil.com/images/easyblog_articles/44/b2ap3_large_pr-brazil-pf-corridor-crnm-en-2560.webp"
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="w-full h-full object-cover object-center aspect-[21/9] opacity-45 filter brightness-[0.97]"
          width={1920}
          height={820}
        />
      </div>

      <div 
        className="hidden sm:block absolute inset-0 -z-10 pointer-events-none bg-[#0B1633]/10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* MOBILE TRUST STRIP (<640px): Compact credibility list, NOT 4 giant cards */}
        <div className="block sm:hidden pb-8 border-b border-zinc-200/80">
          <p className="text-[11px] font-mono font-bold tracking-wider uppercase text-zinc-500 mb-3">
            Core Operating Commitments
          </p>
          <div className="divide-y divide-zinc-200/70 bg-white rounded-xl border border-zinc-200/90 shadow-2xs overflow-hidden">
            {commitments.map((item) => (
              <div key={item.num} className="px-4 py-3 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className="font-mono text-xs font-bold text-blue-600 shrink-0">{item.num}</span>
                  <span className="font-display font-bold text-xs text-zinc-900 truncate">{item.title}</span>
                </div>
                <span className="text-[11px] text-zinc-400 font-mono shrink-0">Verified</span>
              </div>
            ))}
          </div>
        </div>

        {/* DESKTOP COMMITMENTS (>=640px): 4 Clean Grid Cards */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-6 pb-10 border-b border-zinc-200/60">
          {commitments.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-white p-5 rounded-xl border border-zinc-200/80 shadow-2xs space-y-2">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-lg bg-zinc-100 text-zinc-900 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-zinc-900" />
                  </div>
                  <span className="font-mono text-xs font-bold text-zinc-400">{item.num}</span>
                </div>
                <h3 className="font-display font-bold text-sm text-zinc-900">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* WHO WE HELP: Heading + Compact clean chips */}
        <div className="pt-6 sm:pt-8">
          <div className="max-w-xl mx-auto text-center mb-4 sm:mb-6">
            <h2 className="font-display font-bold text-lg sm:text-2xl text-zinc-900 tracking-tight">
              Built for businesses that want more customers — not just clicks.
            </h2>
            <p className="text-xs text-zinc-500 mt-1 hidden sm:block">
              Campaign architectures engineered for high-intent local sectors
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-4xl mx-auto">
            {industries.map((ind, i) => {
              const IconComp = ind.icon;
              return (
                <div
                  key={i}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-zinc-200/90 text-zinc-800 text-xs font-semibold shadow-2xs"
                >
                  <IconComp className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>{ind.label}</span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
