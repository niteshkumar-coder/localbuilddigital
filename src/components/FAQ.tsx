import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQProps {
  onQuoteClick: () => void;
}

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    question: "Why do you bundle 3 years of support instead of a monthly retainer?",
    answer: "Monthly retainer models create misaligned incentives — agencies are rewarded for doing just enough work to justify the next month's invoice. By eliminating monthly retainers and bundling 36 months of strategic setup, conversion updates, and technical maintenance into a single one-time investment, your cost is capped and our incentive is to build a high-converting digital engine from day one that keeps delivering without recurring agency fees."
  },
  {
    question: "How does the 3-year support model work?",
    answer: "We provide 3 full years of technical maintenance, strategic campaign setup, and ongoing optimizations without recurring agency retainer markups. Your advertising media spend is billed directly by Google or Meta on your own card."
  },
  {
    question: "Who owns our website and advertising accounts?",
    answer: "You retain 100% legal ownership of your website, Google Ads, Meta accounts, domain, and lead history permanently. Everything built remains your company's permanent asset with zero agency lock-in."
  },
  {
    question: "How quickly can a new campaign launch?",
    answer: "Campaigns follow our straightforward 4-step process: Understand, Build, Launch, and Improve. Everything goes live with verified tracking once the website, campaigns, and lead routing systems are built."
  },
  {
    question: "Do you guarantee business results?",
    answer: "No. As noted in our commercial disclosures, marketing should create business, not just traffic, but actual customer acquisition depends on local competition and sales conversion. We do guarantee complete account transparency, verified call tracking, and direct account ownership."
  }
];

export default function FAQ({ onQuoteClick }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white border-b border-[#DDE3EC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#3157D5] mb-2">
            Common Questions
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl lg:text-5xl text-[#263044] tracking-tight leading-[1.15] mb-3">
            Frequently asked questions.
          </h2>
          <p className="text-base sm:text-lg text-[#667085] leading-relaxed max-w-2xl">
            Practical answers about timelines, advertising budgets, and working with LocalBuild.
          </p>
        </div>

        {/* 5 FAQ Items Accordion */}
        <div className="space-y-3" role="region" aria-label="Frequently Asked Questions">
          {FAQ_DATA.map((item, index) => {
            const isOpen = openIndex === index;
            const buttonId = `faq-btn-${index}`;
            const panelId = `faq-panel-${index}`;

            return (
              <div
                key={index}
                className="rounded-xl border border-[#DDE3EC] overflow-hidden bg-white shadow-2xs transition-colors"
              >
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggle(index)}
                  className="w-full text-left px-6 py-4.5 flex items-center justify-between gap-4 hover:bg-[#F2F5FA] transition-colors cursor-pointer"
                >
                  <span className="font-display font-bold text-base sm:text-lg text-[#263044]">
                    {item.question}
                  </span>
                  <div className={`w-7 h-7 rounded-md flex items-center justify-center shrink-0 transition-transform duration-150 ${
                    isOpen ? "rotate-180 bg-[#071126] text-white" : "bg-[#F2F5FA] text-[#263044]"
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="px-6 pb-5 pt-1 text-sm sm:text-base text-[#667085] leading-relaxed border-t border-[#DDE3EC]"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer line */}
        <div className="mt-8 text-center sm:text-left">
          <p className="text-xs sm:text-sm text-[#667085]">
            Have a specific question about your market?{" "}
            <button
              type="button"
              onClick={onQuoteClick}
              className="text-[#3157D5] font-bold hover:underline cursor-pointer inline-flex items-center gap-1"
            >
              <span>Ask our team in a quick consultation →</span>
            </button>
          </p>
        </div>

      </div>
    </section>
  );
}
