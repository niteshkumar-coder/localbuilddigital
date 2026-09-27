import { Building2, Stethoscope, Home, Briefcase, GraduationCap, Store, ArrowRight } from "lucide-react";

export default function Industries() {
  const industries = [
    {
      num: "01",
      name: "Home Services & Contractors",
      focus: "Plumbing, Electrical, HVAC, Waterproofing & Renovation",
      stack: "High-Intent Google Ads + Click-to-Call + Instant WhatsApp",
      outcome: "High-urgency local dispatch calls",
      icon: Home
    },
    {
      num: "02",
      name: "Healthcare & Clinics",
      focus: "Dental Clinics, Diagnostics, Physiotherapy & Specialists",
      stack: "Local SEO Map Pack + Doctor Profile Optimization + Appointment Routing",
      outcome: "Verified patient consultations",
      icon: Stethoscope
    },
    {
      num: "03",
      name: "Real Estate & Architecture",
      focus: "Commercial Properties, Residential Projects & Interior Design",
      stack: "Meta Performance Ads + Targeted Geo-Fencing + Site Visit Scheduling",
      outcome: "Qualified high-net-worth inquiries",
      icon: Building2
    },
    {
      num: "04",
      name: "Professional & Legal Services",
      focus: "Law Firms, Chartered Accountants & Business Advisory",
      stack: "Search Engine Authority + Case Evaluation Funnels + Trust Architecture",
      outcome: "Retainer client inquiries",
      icon: Briefcase
    },
    {
      num: "05",
      name: "Education & Coaching Academies",
      focus: "Entrance Coaching, Skill Training & Language Institutes",
      stack: "Meta Lead Gen + WhatsApp Automated Brochure Dispatch + Webinar Reg",
      outcome: "Direct student admissions",
      icon: GraduationCap
    },
    {
      num: "06",
      name: "Retail & Specialized Showrooms",
      focus: "Furniture Showrooms, Automobile Dealers & High-End Boutiques",
      stack: "Google Business Profile + Local Inventory Ads + Store Visit Tracking",
      outcome: "Verified footfall & showroom visits",
      icon: Store
    }
  ];

  return (
    <section id="industries" className="py-16 sm:py-20 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 12-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column (5 Columns): Thesis & Sector Context */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-4">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#3157D5] block">
              Sector Specialization
            </span>
            <h2 className="font-display font-semibold text-2xl sm:text-4xl text-[#1E293B] tracking-tight leading-snug">
              Engineered for businesses where customer lifetime value matters.
            </h2>
            <p className="text-sm text-[#64748B] leading-relaxed">
              We do not run generic mass-traffic campaigns for low-ticket ecommerce. We engineer acquisition engines specifically for service providers, clinics, and businesses where every converted client represents significant revenue.
            </p>

            <div className="pt-2">
              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#168A62]" />
                  <span className="text-xs font-semibold text-[#1E293B]">Local Market Adaptation</span>
                </div>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Every industry has unique search behaviors. We configure search terms, bid strategies, and landing pages to match how local buyers actually search in your geographic radius.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column (7 Columns): Editorial Sector Index */}
          <div className="lg:col-span-7 divide-y divide-[#E2E8F0] border-y border-[#E2E8F0]">
            {industries.map((ind) => {
              const Icon = ind.icon;
              return (
                <div
                  key={ind.num}
                  className="py-5 sm:py-6 first:pt-4 last:pb-4 group transition-colors"
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-xs font-semibold text-[#3157D5]">
                        {ind.num}
                      </span>
                      <h3 className="font-display font-semibold text-base sm:text-lg text-[#1E293B] group-hover:text-[#3157D5] transition-colors">
                        {ind.name}
                      </h3>
                    </div>
                    <Icon className="w-4 h-4 text-zinc-400 group-hover:text-[#3157D5] transition-colors shrink-0 mt-1" />
                  </div>

                  <p className="text-xs text-[#64748B] leading-relaxed mb-3">
                    {ind.focus}
                  </p>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs">
                    <div className="flex items-center gap-1.5 text-zinc-500 font-mono text-[11px]">
                      <span className="text-zinc-400">Stack:</span>
                      <span className="text-zinc-700">{ind.stack}</span>
                    </div>
                    <span className="text-zinc-300 hidden sm:inline" aria-hidden="true">·</span>
                    <div className="flex items-center gap-1.5 font-medium text-[#168A62] text-[11px]">
                      <span>Outcome: {ind.outcome}</span>
                    </div>
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
