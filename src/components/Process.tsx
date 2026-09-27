import { ArrowRight } from "lucide-react";

interface ProcessProps {
  onQuoteClick: () => void;
}

export default function Process({ onQuoteClick }: ProcessProps) {
  const steps = [
    {
      num: "01",
      title: "Understand",
      sentence: "We audit your existing digital presence, study local competitors, and clarify commercial growth targets."
    },
    {
      num: "02",
      title: "Build",
      sentence: "We engineer your fast, high-converting website, search ad campaigns, and automated lead routing systems."
    },
    {
      num: "03",
      title: "Launch",
      sentence: "Everything goes live with verified call tracking, Google conversion tags, and complete direct account ownership."
    },
    {
      num: "04",
      title: "Optimize",
      sentence: "We measure cost per lead, refine ad positioning, and continuously lower client acquisition costs."
    }
  ];

  return (
    <section id="process" className="py-16 sm:py-24 bg-[#F8FAFC] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14 sm:mb-16">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#3157D5] block mb-2">
              Execution Roadmap
            </span>
            <h2 className="font-display font-semibold text-2xl sm:text-4xl text-[#1E293B] tracking-tight leading-[1.12]">
              A disciplined, transparent four-step process.
            </h2>
          </div>
          <p className="text-sm text-[#64748B] max-w-sm">
            No convoluted agency bureaucracy or surprise delays. Clear milestones from day one.
          </p>
        </div>

        {/* DESKTOP HORIZONTAL TIMELINE (>=768px) */}
        <div className="hidden md:block relative mb-12">
          {/* Continuous timeline connector bar */}
          <div 
            className="absolute top-5 left-8 right-8 h-[2px] bg-[#E2E8F0]" 
            aria-hidden="true" 
          />

          <div className="grid grid-cols-4 gap-6 relative">
            {steps.map((step) => (
              <div key={step.num} className="pt-2 group">
                {/* Milestone Node */}
                <div className="w-10 h-10 rounded-full bg-white border-2 border-[#3157D5] text-[#3157D5] font-mono text-xs font-bold flex items-center justify-center mb-6 relative z-10 shadow-xs group-hover:bg-[#3157D5] group-hover:text-white transition-colors">
                  {step.num}
                </div>

                <h3 className="font-display font-semibold text-lg text-[#1E293B] mb-2 tracking-tight">
                  {step.title}
                </h3>

                <p className="text-sm text-[#64748B] leading-relaxed pr-4">
                  {step.sentence}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* MOBILE VERTICAL TIMELINE (<768px) */}
        <div className="block md:hidden relative pl-8 pb-4 space-y-8 mb-10">
          <div 
            className="absolute left-3.5 top-3 bottom-6 w-0.5 bg-[#E2E8F0]" 
            aria-hidden="true"
          />

          {steps.map((step) => (
            <div key={step.num} className="relative space-y-1.5">
              <div className="absolute -left-8 top-0.5 w-7 h-7 rounded-full bg-[#3157D5] text-white font-mono text-[11px] font-bold flex items-center justify-center ring-4 ring-white shadow-xs">
                {step.num}
              </div>

              <h3 className="font-display font-semibold text-base text-[#1E293B] tracking-tight">
                {step.title}
              </h3>

              <p className="text-sm text-[#64748B] leading-relaxed">
                {step.sentence}
              </p>
            </div>
          ))}
        </div>

        {/* Action Link */}
        <div className="pt-6 border-t border-[#E2E8F0] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-xs text-[#64748B]">
            Average turnaround: 2 to 3 weeks from kickoff to campaign activation.
          </p>
          <button
            type="button"
            onClick={onQuoteClick}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#3157D5] hover:text-[#2546B8] transition-colors cursor-pointer"
          >
            <span>Ready to start with Step 01? Schedule a 30-minute discovery call →</span>
          </button>
        </div>

      </div>
    </section>
  );
}
