export default function WhyChooseUs() {
  const threeOutcomes = [
    {
      num: "01",
      title: "MORE QUALIFIED ENQUIRIES",
      desc: "We focus on phone calls, consultation requests and real leads — not vanity impressions."
    },
    {
      num: "02",
      title: "BETTER CONVERSION",
      desc: "Websites and ad campaigns built around turning local search interest into customers."
    },
    {
      num: "03",
      title: "CLEAR REPORTING & LONG-TERM GROWTH",
      desc: "You always know what is working, what needs improvement and what comes next."
    }
  ];

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-white border-b border-[#DDE3EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="mb-3">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#3157D5]">
            Why LocalBuild
          </span>
        </div>

        {/* H2 & Body */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl lg:text-5xl text-[#263044] tracking-tight leading-[1.15] mb-4">
            Marketing should create business, not just traffic.
          </h2>
          <p className="text-base sm:text-lg text-[#667085] leading-relaxed max-w-2xl">
            Most agencies report on clicks because they are easy to buy. We design every campaign around one commercial outcome: qualified local customers who book, call, and pay.
          </p>
        </div>

        {/* 3 Outcome Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {threeOutcomes.map((item) => (
            <div 
              key={item.num} 
              className="p-6 sm:p-8 rounded-2xl bg-[#F2F5FA] border border-[#DDE3EC] flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs font-extrabold text-[#3157D5] block mb-3">
                  POINT {item.num}
                </span>
                <h3 className="font-display font-bold text-base sm:text-lg text-[#263044] uppercase tracking-wide mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#667085] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
