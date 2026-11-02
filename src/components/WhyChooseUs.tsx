export default function WhyChooseUs() {
  const threeOutcomes = [
    {
      num: "01",
      title: "More qualified enquiries",
      desc: "We focus on verified phone calls, consultation bookings, and genuine buyer intent — rather than inflating vanity impressions."
    },
    {
      num: "02",
      title: "Higher conversion rate",
      desc: "Websites and ad campaigns engineered around turning local search interest into paying clients through clean information architecture and clear value."
    },
    {
      num: "03",
      title: "Clear reporting & long-term growth",
      desc: "Direct platform billing, verified conversion tracking, and monthly strategic clarity so you always know what is working and what comes next."
    }
  ];

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Two-Column Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Thesis & Vision */}
          <div className="reveal-on-scroll lg:col-span-5 lg:sticky lg:top-24">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#3157D5] mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3157D5]" />
              <span>// 02 · STRATEGIC PRINCIPLE &amp; ADVANTAGE</span>
            </div>
            <h2 className="font-display font-semibold text-2xl sm:text-4xl text-[#1E293B] tracking-tight leading-tight mb-4">
              Marketing should create business, not just traffic.
            </h2>
            <p className="text-base text-[#64748B] leading-relaxed mb-6 max-w-lg">
              Most digital agencies report on clicks because they are easy to buy. We design every system around one commercial outcome: qualified local customers who call, book, and pay.
            </p>
            <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#64748B] leading-relaxed card-hover-lift">
              <strong className="text-[#1E293B] font-semibold block mb-0.5">Commercial Principle</strong>
              You retain 100% legal ownership of your accounts, creative assets, and lead database. No agency hostage contracts.
            </div>
          </div>

          {/* Right Column: 3 Structured Outcome Points with Editorial Dividers */}
          <div className="lg:col-span-7 divide-y divide-[#E2E8F0] border-y border-[#E2E8F0]">
            {threeOutcomes.map((item, idx) => {
              const delays = ["delay-75", "delay-150", "delay-225"];
              return (
                <div 
                  key={item.num} 
                  className={`reveal-on-scroll ${delays[idx]} py-8 sm:py-10 first:pt-4 sm:first:pt-6 last:pb-4 sm:last:pb-6 group`}
                >
                  <div className="flex items-baseline gap-4 mb-2">
                    <span className="font-mono text-sm font-semibold text-[#3157D5] shrink-0">
                      {item.num}.
                    </span>
                    <h3 className="font-display font-semibold text-lg sm:text-xl text-[#1E293B] tracking-tight group-hover:text-[#3157D5] transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-[#64748B] leading-relaxed pl-8 max-w-xl">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
