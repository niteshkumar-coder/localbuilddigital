import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

interface ScrollProgressCompanionProps {
  activeSection?: string;
}

const SECTION_TITLES: Record<string, string> = {
  hero: "Overview",
  services: "01 · Capabilities",
  "why-us": "02 · Strategic Edge",
  accountability: "03 · Accountability",
  process: "04 · Execution Plan",
  "case-studies": "05 · Selected Work",
  roi: "06 · ROI Calculator",
  pricing: "07 · 3-Yr Pricing",
  faq: "08 · Direct FAQ",
  contact: "09 · Direct Consultation",
};

export default function ScrollProgressCompanion({ activeSection = "hero" }: ScrollProgressCompanionProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          const currentY = window.scrollY;

          if (totalHeight > 0) {
            const progress = (currentY / totalHeight) * 100;
            setScrollProgress(Math.min(100, Math.max(0, progress)));
          }

          setIsScrolledPastHero(currentY > 320);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const displayTitle = SECTION_TITLES[activeSection] || "LocalBuild";

  return (
    <>
      {/* 1. TOP VIEWPORT REAL-TIME READING PROGRESS BAR */}
      <div
        className="fixed top-0 left-0 right-0 h-[3px] z-50 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="h-full bg-gradient-to-r from-[#3157D5] via-[#6366F1] to-[#10B981] transition-all duration-75 ease-out relative"
          style={{ width: `${scrollProgress}%` }}
        >
          {/* Glowing Lead Tip */}
          {scrollProgress > 1 && scrollProgress < 99 && (
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full blur-[2px] shadow-[0_0_8px_#6366F1]" />
          )}
        </div>
      </div>

      {/* 2. HANDCRAFTED FLOATING SCROLL COMPANION PILL (Bottom Center) */}
      {isScrolledPastHero && (
        <aside
          aria-label="Reading progress and navigation"
          className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 hidden sm:flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#071126]/90 text-white text-xs font-mono backdrop-blur-md border border-white/15 shadow-xl transition-all duration-300 hover:bg-[#071126] hover:border-white/30"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
          <span className="text-[11px] text-zinc-300 font-medium tracking-wide uppercase">
            {displayTitle}
          </span>
          <span className="text-zinc-600 font-mono">·</span>
          <span className="text-indigo-400 font-bold font-mono text-[11px]">
            {Math.round(scrollProgress)}%
          </span>
          <span className="text-zinc-600 font-mono">·</span>
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 text-[11px] text-zinc-300 hover:text-white transition-colors cursor-pointer group"
            aria-label="Scroll back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3 h-3 text-zinc-400 group-hover:text-white group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </aside>
      )}
    </>
  );
}
