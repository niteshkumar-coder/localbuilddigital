export default function Industries() {
  const industries = [
    { num: "01", name: "Home Services", focus: "Plumbing, HVAC & Electrical" },
    { num: "02", name: "Healthcare", focus: "Clinics, Dental & Diagnostics" },
    { num: "03", name: "Real Estate", focus: "Commercial & Residential" },
    { num: "04", name: "Professional Services", focus: "Legal, Accounting & Advisory" },
    { num: "05", name: "Coaching & Education", focus: "Academies & Institutes" },
    { num: "06", name: "Retail & Local Businesses", focus: "Showrooms & High-Street Retail" }
  ];

  return (
    <section id="industries" className="py-12 sm:py-16 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#E2E8F0] mb-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#3157D5] block mb-1">
              Sector Experience
            </span>
            <h2 className="font-display font-semibold text-xl sm:text-2xl text-[#1E293B] tracking-tight">
              Industries Served
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#64748B] max-w-md">
            Disciplined local acquisition architectures tailored to high-intent regional markets.
          </p>
        </div>

        {/* Clean typographic sector strip */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-y sm:divide-y-0 sm:divide-x divide-[#E2E8F0] border-y sm:border border-[#E2E8F0] rounded-xl overflow-hidden bg-[#F8FAFC]">
          {industries.map((ind) => (
            <div
              key={ind.num}
              className="p-5 flex flex-col justify-between hover:bg-white transition-colors group"
            >
              <div>
                <span className="font-mono text-xs font-semibold text-[#64748B] block mb-2">
                  {ind.num}
                </span>
                <h3 className="font-display font-semibold text-sm sm:text-base text-[#1E293B] leading-snug group-hover:text-[#3157D5] transition-colors mb-1">
                  {ind.name}
                </h3>
              </div>
              <p className="text-[11px] text-[#64748B] mt-2 leading-relaxed">
                {ind.focus}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
