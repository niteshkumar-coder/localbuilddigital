import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const list = [
    {
      text: "LocalBuild has completely re-engineered our client acquisition pipeline. Before them, we threw ₹2.5 Lakh monthly on standard advertising with barely any phone calls. Now, delta's schedule is fully booked across every territory we service, and we cleared #1 Maps spot inside our main ZIP code.",
      name: "Marcus Vance",
      title: "Owner, Delta Air Plumbing",
      rating: 5,
      achievement: "+245% Lead Calls Boost",
      tag: "Home Services",
    },
    {
      text: "Our dental clinic was bleeding margins on third-party referral brokers. The team at LocalBuild restructured our local search presence and built landing pages that convert like clockwork. Our new cosmetic patient bookings are up by double, and we pay half our previous marketing acquisition budgets.",
      name: "Dr. Clara Alvarez",
      title: "Clinical Director, Apex Dental Care",
      rating: 5,
      achievement: "-52% Patient Acquisition CPL",
      tag: "Healthcare Partner",
    },
    {
      text: "We deal in high-value real estate. I was extremely skeptical about digital marketing agencies in general. LocalBuild proved their absolute worth within 45 days. Their interactive target funnel captures highly qualified local property buyers in our exact price tier.",
      name: "James Stonegate",
      title: "Founder, Stonegate Luxury Group",
      rating: 5,
      achievement: "₹65 Crore Transactions",
      tag: "Professional Real Estate",
    },
  ];

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % list.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + list.length) % list.length);
  };

  const active = list[index];

  return (
    <section id="testimonials" className="py-24 bg-white border-t border-gray-100 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 bg-accent/5 border border-accent/10 px-3 py-1 rounded-full text-xs font-semibold text-accent uppercase tracking-wide mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Success Reviews</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-heading tracking-tight mb-4">
            Loved by ambitious local business owners
          </h2>

          <p className="text-brand-body text-md">
            Read from the service founders, medical professionals, and real estate associates who scaled their businesses using LocalBuild's precision tools.
          </p>
        </div>

        {/* Carousel slide box */}
        <div className="relative bg-white border border-gray-100 rounded-2xl p-4 sm:p-10 shadow-xs">
          <div className="absolute top-6 right-6 text-gray-100">
            <Quote className="w-16 h-16 opacity-30" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-1">
                {[...Array(active.rating)].map((_, i) => (
                  <Star key={i} className="w-[18px] h-[18px] fill-cta text-cta" />
                ))}
              </div>

              <blockquote className="text-[14px] md:text-md lg:text-lg text-brand-heading font-medium leading-relaxed italic">
                "{active.text}"
              </blockquote>

              <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <p className="font-bold text-brand-heading text-[14px]">{active.name}</p>
                  <p className="text-xs text-brand-body mt-0.5">{active.title}</p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[10px] tracking-wider uppercase font-extrabold text-accent bg-accent/5 px-2.5 py-1 rounded">
                    {active.tag}
                  </span>
                  <span className="text-[10px] tracking-wider uppercase font-extrabold text-emerald-600 bg-emerald-500/5 px-2.5 py-1 rounded">
                    {active.achievement}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls block */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-white border border-gray-200 rounded-full p-1.5 shadow-sm">
            <button
              onClick={handlePrev}
              className="p-1 px-2.5 hover:bg-gray-50 text-brand-heading hover:text-accent rounded-full transition-all cursor-pointer"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-[10px] font-mono text-brand-body font-bold px-1 select-none">
              {index + 1} / {list.length}
            </span>
            <button
              onClick={handleNext}
              className="p-1 px-2.5 hover:bg-gray-50 text-brand-heading hover:text-accent rounded-full transition-all cursor-pointer"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
