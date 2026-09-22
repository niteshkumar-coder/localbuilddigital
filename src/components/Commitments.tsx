import { ShieldCheck, Eye, CheckCircle2, PhoneCall } from "lucide-react";

export default function Commitments() {
  const commitments = [
    {
      num: "01",
      title: "Direct account ownership",
      status: "Verified",
      icon: ShieldCheck
    },
    {
      num: "02",
      title: "Transparent platform billing",
      status: "Verified",
      icon: Eye
    },
    {
      num: "03",
      title: "Conversion-focused execution",
      status: "Verified",
      icon: CheckCircle2
    },
    {
      num: "04",
      title: "Clear reporting",
      status: "Verified",
      icon: PhoneCall
    }
  ];

  return (
    <section id="commitments" className="py-12 sm:py-16 bg-[#F7F5EF] border-b border-[#DDE3EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-6 sm:mb-8 text-center sm:text-left">
          <h2 className="font-display font-extrabold text-xl sm:text-2xl text-[#263044] tracking-tight">
            Core Operating Commitments
          </h2>
        </div>

        {/* 4 Commitments Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
          {commitments.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.num}
                className="bg-white p-5 rounded-xl border border-[#DDE3EC] shadow-2xs flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-[#F2F5FA] text-[#3157D5] flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-[#3157D5]" />
                  </div>
                  <div className="min-w-0">
                    <span className="font-mono text-xs font-bold text-[#667085] block mb-0.5">
                      {item.num}
                    </span>
                    <h3 className="font-display font-bold text-sm text-[#263044] truncate">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-[#168A62]/10 text-[#168A62] font-mono shrink-0">
                  {item.status}
                </span>
              </div>
            );
          })}
        </div>

        {/* Closing line */}
        <div className="text-center pt-2 border-t border-[#DDE3EC]/70">
          <p className="font-display font-bold text-sm sm:text-base text-[#263044]">
            Built for businesses that want more customers — not just clicks.
          </p>
        </div>

      </div>
    </section>
  );
}
