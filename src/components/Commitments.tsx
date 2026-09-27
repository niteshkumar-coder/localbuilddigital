import { ShieldCheck, Eye, CheckCircle2, PhoneCall } from "lucide-react";

export default function Commitments() {
  const commitments = [
    {
      num: "01",
      title: "Direct account ownership",
      detail: "100% permanent client control",
      icon: ShieldCheck
    },
    {
      num: "02",
      title: "Transparent platform billing",
      detail: "Billed directly by Google & Meta",
      icon: Eye
    },
    {
      num: "03",
      title: "Conversion-focused execution",
      detail: "Enquiries over vanity clicks",
      icon: CheckCircle2
    },
    {
      num: "04",
      title: "Clear reporting",
      detail: "Verified monthly performance",
      icon: PhoneCall
    }
  ];

  return (
    <section id="commitments" className="py-12 sm:py-16 bg-[#F8FAFC] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8 sm:mb-10 pb-5 border-b border-[#E2E8F0]">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#3157D5] block mb-1">
              Commercial Integrity
            </span>
            <h2 className="font-display font-semibold text-xl sm:text-2xl text-[#1E293B] tracking-tight">
              Core Operating Commitments
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#64748B] max-w-sm">
            Strict structural standards governing every client engagement from day one.
          </p>
        </div>

        {/* 4 Commitments Open Layout with Subtle Vertical Dividers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#E2E8F0] border-y sm:border border-[#E2E8F0] rounded-xl bg-white overflow-hidden shadow-2xs">
          {commitments.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.num}
                className="p-6 sm:p-7 flex flex-col justify-between hover:bg-[#F8FAFC]/60 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-semibold text-[#64748B]">
                      {item.num}
                    </span>
                    <Icon className="w-4 h-4 text-[#3157D5]" />
                  </div>
                  <h3 className="font-display font-semibold text-base text-[#1E293B] leading-snug mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {item.detail}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#E2E8F0]/60 flex items-center gap-1.5 text-[11px] font-medium text-[#168A62]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#168A62]" />
                  <span>Verified Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing line */}
        <div className="text-center pt-6">
          <p className="text-xs sm:text-sm text-[#64748B]">
            Built for local businesses that want verified customer enquiries — not just empty impressions.
          </p>
        </div>

      </div>
    </section>
  );
}
