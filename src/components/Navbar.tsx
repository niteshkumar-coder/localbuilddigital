import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Zap } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  onQuoteClick: () => void;
  onNavigate: (sectionId: string) => void;
  onCostClick: () => void;
}

export default function Navbar({ onQuoteClick, onNavigate, onCostClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const desktopNavItems = [
    { name: "Services", id: "services" },
    { name: "S_Roadmap Planner", id: "planner", label: "Interactive Strategy Planner" },
    { name: "ROI Simulator", id: "roi" },
    { name: "Case Studies", id: "case-studies" },
    { name: "Pricing", id: "pricing" },
  ];

  // Specific 6 sections for food / service mobile order: Home | Services | About | Portfolio | Testimonials | Contact
  const mobileNavItems = [
    { name: "Home", id: "hero" },
    { name: "Services", id: "services" },
    { name: "About", id: "planner" },
    { name: "Portfolio", id: "case-studies" },
    { name: "Testimonials", id: "testimonials" },
  ];

  const handleLinkClick = (id: string) => {
    setIsOpen(false);
    onNavigate(id);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 h-[60px] md:h-auto py-2.5 md:py-3"
            : "bg-white/80 backdrop-blur-sm h-[60px] md:h-auto py-2.5 md:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          {/* Logo */}
          <div
            onClick={() => handleLinkClick("hero")}
            className="flex items-center space-x-2 cursor-pointer group"
          >
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden flex items-center justify-center border border-gray-100 shadow-sm shrink-0">
              <img 
                src="https://i.ibb.co/G3tMbK2q/image.png" 
                alt="LocalBuild Logo" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <span className="font-display text-[20px] md:text-xl font-bold text-brand-heading tracking-tight leading-none block">
                Local<span className="text-accent">Build</span>
              </span>
              <p className="text-[9px] text-brand-body font-medium tracking-widest uppercase font-mono -mt-0.5">
                Digital Agency
              </p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {desktopNavItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className="text-sm font-medium text-brand-heading hover:text-accent transition-colors duration-155 cursor-pointer relative py-1"
              >
                {item.name === "S_Roadmap Planner" ? "Plan Strategy" : item.name}
              </button>
            ))}
            <button
              onClick={onCostClick}
              className="text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors duration-155 cursor-pointer relative py-1 flex items-center gap-1.5"
            >
              <Zap className="w-4 h-4 text-amber-500 animate-pulse fill-amber-400" />
              Package Cost
            </button>
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={onQuoteClick}
              className="bg-cta hover:bg-cta/90 text-white font-medium text-sm py-2.5 px-5 rounded-lg transition-all duration-200 flex items-center gap-1.5 shadow-md shadow-cta/15 hover:shadow-lg hover:shadow-cta/25 hover:-translate-y-0.5 cursor-pointer"
            >
              Get Free Proposal
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Trigger Icon */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(true)}
              className="text-brand-heading w-[44px] h-[44px] flex items-center justify-center focus:outline-none cursor-pointer"
              aria-label="Open Menu"
            >
              <Menu className="w-7 h-7" />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", bounce: 0, duration: 0.35 }}
            className="fixed inset-0 bg-white z-[9999] flex flex-col md:hidden"
          >
            {/* Top Bar inside Fullscreen menu */}
            <div className="h-[60px] px-4 border-b border-gray-100 flex items-center justify-between">
              {/* Logo duplicator */}
              <div
                onClick={() => {
                  setIsOpen(false);
                  onNavigate("hero");
                }}
                className="flex items-center space-x-2 cursor-pointer"
              >
                <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center border border-gray-100 shrink-0">
                  <img 
                    src="https://i.ibb.co/G3tMbK2q/image.png" 
                    alt="LocalBuild Logo" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="font-display text-[20px] font-bold text-brand-heading tracking-tight">
                  Local<span className="text-accent">Build</span>
                </span>
              </div>

              {/* Close Button button */}
              <button
                onClick={() => setIsOpen(false)}
                className="w-[44px] h-[44px] flex items-center justify-center text-brand-heading focus:outline-none cursor-pointer"
                aria-label="Close Menu"
              >
                <X className="w-7 h-7" />
              </button>
            </div>

            {/* Links and Actions list */}
            <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col justify-between">
              <nav className="space-y-4">
                {mobileNavItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleLinkClick(item.id)}
                    className="w-full text-left h-[48px] flex items-center text-[20px] font-bold text-brand-heading hover:text-accent transition-all border-b border-gray-50 focus:outline-none"
                  >
                    {item.name}
                  </button>
                ))}
                
                {/* Contact triggers intake popup directly */}
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onCostClick();
                  }}
                  className="w-full text-left h-[48px] flex items-center text-[20px] font-bold text-blue-600 hover:text-blue-700 transition-all border-b border-gray-50 focus:outline-none gap-2"
                >
                  <Zap className="w-5 h-5 text-amber-500 fill-amber-400" />
                  Package Cost Table
                </button>

                <button
                  onClick={() => {
                    setIsOpen(false);
                    onQuoteClick();
                  }}
                  className="w-full text-left h-[48px] flex items-center text-[20px] font-bold text-brand-heading hover:text-accent transition-all border-b border-gray-50 focus:outline-none"
                >
                  Contact
                </button>
              </nav>

              {/* Bottom full-width validation-ready CTA button */}
              <div className="mt-8 pb-4">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    // Open the quote popup intake
                    onQuoteClick();
                  }}
                  className="w-full h-[50px] bg-cta hover:bg-cta/90 text-white text-center font-bold text-base rounded-xl transition-all duration-200 shadow-md shadow-cta/20 flex items-center justify-center gap-2 cursor-pointer"
                >
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
