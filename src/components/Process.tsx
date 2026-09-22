import { ArrowRight } from "lucide-react";

interface ProcessProps {
  onQuoteClick: () => void;
}

export default function Process({ onQuoteClick }: ProcessProps) {
  const steps = [
    {
      num: "01",
      title: "UNDERSTAND",
      sentence: "We learn about your business, customers and goals."
    },
    {
      num: "02",
      title: "BUILD",
      sentence: "We create the website, campaigns and systems."
    },
    {
      num: "03",
      title: "LAUNCH",
      sentence: "Everything goes live with proper tracking."
    },
    {
      num: "04",
      title: "IMPROVE",
      sentence: "We measure, learn and continuously optimize."
    }
  ];

  return (
    <section id="process" className="py-16 sm:py-24 bg-[#F2F5FA] border-b border-[#DDE3EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#3157D5] mb-2">
            How It Works
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl lg:text-5xl text-[#263044] tracking-tight leading-[1.15] mb-3">
            A straightforward, disciplined 4-step process.
          </h2>
          <p className="text-base sm:text-lg text-[#667085] leading-relaxed max-w-2xl">
            No convoluted agency bureaucracy or surprise delays. You always know exactly what stage your campaign is in.
          </p>
        </div>

        {/* MOBILE VERTICAL TIMELINE (<640px) */}
        <div className="block sm:hidden relative pl-8 pb-4 space-y-8">
          {/* Vertical connecting line */}
          <div 
            className="absolute left-3.5 top-3 bottom-6 w-0.5 bg-zinc-200" 
            aria-hidden="true"
          />

          {steps.map((step) => (
            <div key={step.num} className="relative space-y-1.5">
              {/* Step circle */}
              <div className="absolute -left-8 top-0.5 w-7 h-7 rounded-full bg-zinc-900 text-white font-mono text-[11px] font-bold flex items-center justify-center ring-4 ring-white">
                {step.num}
              </div>

              <h3 className="font-display font-extrabold text-base text-zinc-900 tracking-tight">
                {step.title}
              </h3>

              <p className="text-sm text-zinc-600 leading-relaxed">
                {step.sentence}
              </p>
            </div>
          ))}
        </div>

        {/* DESKTOP 4 STEPS GRID (>=640px) */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="p-7 rounded-2xl border border-zinc-200/90 bg-white hover:border-zinc-400 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-zinc-100 mb-5">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-400">
                    Phase
                  </span>
                  <span className="font-mono text-sm font-extrabold px-2.5 py-0.5 rounded-md bg-zinc-100 text-zinc-900">
                    {step.num}
                  </span>
                </div>

                <h3 className="font-display font-extrabold text-xl text-zinc-900 mb-2">
                  {step.title}
                </h3>

                <p className="text-sm text-zinc-600 leading-relaxed">
                  {step.sentence}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-zinc-50 flex items-center text-xs font-semibold text-zinc-400">
                <span>Step {parseInt(step.num, 10)} of 4</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Link */}
        <div className="mt-8 sm:mt-10 text-center sm:text-left">
          <button
            type="button"
            onClick={onQuoteClick}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-zinc-900 hover:text-blue-600 transition-colors cursor-pointer"
          >
            <span>Ready to start with Step 01? Schedule a 30-minute discovery call</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
