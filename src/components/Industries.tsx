export default function Industries() {
  const industries = [
    "Home Services",
    "Healthcare",
    "Real Estate",
    "Professional Services",
    "Coaching & Education",
    "Retail & Local Businesses"
  ];

  return (
    <section id="industries" className="py-10 sm:py-14 bg-[#F2F5FA] border-b border-[#DDE3EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 sm:pb-6 border-b border-[#DDE3EC]/80 mb-6">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#667085] block">
              Sectors & Specialization
            </span>
            <h2 className="font-display font-extrabold text-xl sm:text-2xl text-[#263044] tracking-tight mt-0.5">
              Industries Served
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#667085] max-w-md">
            Disciplined local acquisition architectures tailored to high-intent regional markets.
          </p>
        </div>

        {/* Clean typographic list of industries — exactly six in this order, no invented descriptions */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {industries.map((ind, idx) => (
            <div
              key={idx}
              className="bg-white px-4 py-3.5 rounded-xl border border-[#DDE3EC] shadow-2xs text-center flex flex-col justify-center items-center group hover:border-[#3157D5] transition-colors"
            >
              <span className="font-mono text-[11px] font-bold text-[#667085] mb-1">
                0{idx + 1}
              </span>
              <span className="font-display font-bold text-xs sm:text-sm text-[#263044] leading-snug">
                {ind}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
