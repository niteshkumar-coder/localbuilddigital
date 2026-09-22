import { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowRight, MessageSquare, Phone } from "lucide-react";
import { getWhatsAppUrl, LOCALBUILD_PHONE } from "../utils/whatsapp";

interface NavbarProps {
  onQuoteClick: (prefilledService?: string) => void;
  onNavigate: (sectionOrPath: string) => void;
  activeSection?: string;
  currentPath?: string;
}

export default function Navbar({
  onQuoteClick,
  onNavigate,
  activeSection = "hero",
  currentPath = "/"
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle escape key to close mobile drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Links in exact order required by Section 1.4:
  // Home · About · Services · Work · Pricing · Blog · Contact
  const navItems = [
    { name: "Home", target: "/" },
    { name: "About", target: "/about" },
    { name: "Services", target: "/services" },
    { name: "Work", target: "case-studies" },
    { name: "Pricing", target: "pricing" },
    { name: "Blog", target: "/blog" },
    { name: "Contact", target: "/contact" },
  ];

  const isItemActive = (target: string) => {
    if (target === "/") {
      return currentPath === "/" && (activeSection === "hero" || !activeSection);
    }
    if (target.startsWith("/")) {
      if (target === "/blog") {
        return currentPath.startsWith("/blog");
      }
      return currentPath === target;
    }
    // Anchor on homepage
    return currentPath === "/" && activeSection === target;
  };

  const handleLinkClick = (target: string) => {
    setIsOpen(false);
    onNavigate(target);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 h-16 flex items-center transition-all duration-200 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-xs border-b border-zinc-200/80"
            : "bg-white/90 backdrop-blur-xs border-b border-zinc-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between">
          
          {/* Brand Logo with https://i.ibb.co/G3tMbK2q/image.png */}
          <button
            type="button"
            onClick={() => handleLinkClick("/")}
            className="flex items-center gap-2.5 text-left cursor-pointer group focus:outline-hidden"
            aria-label="LocalBuild - Go to Home"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden bg-[#07080A] border border-zinc-200/90 shadow-xs flex items-center justify-center group-hover:border-[#3157D5] group-hover:scale-105 transition-all p-0.5 shrink-0">
              <img
                src="/images/logo.png"
                alt="LocalBuild Logo"
                className="w-full h-full object-cover rounded-full"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = "https://i.ibb.co/G3tMbK2q/image.png";
                }}
              />
            </div>
            <div>
              <span className="font-display font-bold text-lg text-zinc-900 tracking-tight block leading-tight">
                LocalBuild
              </span>
              <span className="text-[10px] text-zinc-500 font-medium uppercase tracking-wider block -mt-0.5">
                Digital Marketing Agency
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links (>=1024px) */}
          <nav className="hidden lg:flex items-center space-x-6" aria-label="Main Navigation">
            {navItems.map((item) => {
              const active = isItemActive(item.target);
              return (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => handleLinkClick(item.target)}
                  aria-current={active ? "page" : undefined}
                  className={`text-sm font-medium transition-colors py-1 cursor-pointer relative ${
                    active
                      ? "text-zinc-900 font-semibold"
                      : "text-zinc-600 hover:text-zinc-900"
                  }`}
                >
                  {item.name}
                  {active && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#3157D5] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop Primary CTA (right): "Start a Conversation" -> /contact */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={getWhatsAppUrl("Hi LocalBuild, I'd like to ask a question about your digital marketing services.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-md transition-colors border border-emerald-200/80"
              aria-label="Chat on WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={() => handleLinkClick("/contact")}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-bold text-white bg-[#3157D5] hover:bg-[#2546B8] active:bg-[#1D3A9E] rounded-md transition-colors shadow-xs cursor-pointer uppercase tracking-wider"
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Header Menu Button (≤ 768px) */}
          <div className="flex lg:hidden items-center">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="w-11 h-11 flex items-center justify-center text-zinc-800 hover:text-zinc-950 active:bg-zinc-100 rounded-lg transition-colors cursor-pointer"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Full-Screen Menu Drawer (≤ 768px) */}
      {isOpen && (
        <div
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          className="fixed inset-0 z-50 lg:hidden flex flex-col bg-white"
        >
          {/* Top Bar inside Menu */}
          <div className="h-16 px-4 sm:px-6 flex items-center justify-between border-b border-zinc-200">
            <button
              type="button"
              onClick={() => handleLinkClick("/")}
              className="flex items-center gap-2.5 text-left"
            >
              <div className="w-10 h-10 rounded-full overflow-hidden bg-[#07080A] border border-zinc-200/90 shadow-xs flex items-center justify-center p-0.5 shrink-0">
                <img
                  src="/images/logo.png"
                  alt="LocalBuild Logo"
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = "https://i.ibb.co/G3tMbK2q/image.png";
                  }}
                />
              </div>
              <div>
                <span className="font-display font-bold text-lg text-zinc-900 block leading-tight">
                  LocalBuild
                </span>
                <span className="text-[10px] text-zinc-500 font-medium uppercase tracking-wider block">
                  Digital Marketing Agency
                </span>
              </div>
            </button>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="w-11 h-11 flex items-center justify-center text-zinc-800 hover:text-zinc-950 active:bg-zinc-100 rounded-lg cursor-pointer"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Menu Links with 48px+ touch height */}
          <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col justify-between">
            <nav className="space-y-1" aria-label="Mobile Navigation Links">
              {navItems.map((item) => {
                const active = isItemActive(item.target);
                return (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => handleLinkClick(item.target)}
                    aria-current={active ? "page" : undefined}
                    className={`w-full text-left py-3.5 text-xl font-display font-bold transition-colors border-b border-zinc-100 flex items-center justify-between cursor-pointer min-h-[48px] ${
                      active ? "text-[#3157D5] font-extrabold" : "text-zinc-900 active:text-[#3157D5]"
                    }`}
                  >
                    <span>{item.name}</span>
                    <ArrowRight className={`w-5 h-5 ${active ? "text-[#3157D5]" : "text-zinc-300"}`} />
                  </button>
                );
              })}
            </nav>

            {/* Mobile Actions in Drawer */}
            <div className="pt-6 space-y-3">
              <button
                type="button"
                onClick={() => handleLinkClick("/contact")}
                className="w-full h-[52px] flex items-center justify-center gap-2 text-sm font-bold text-white bg-[#3157D5] active:bg-[#2546B8] rounded-md transition-colors uppercase tracking-wider cursor-pointer shadow-sm"
              >
                <span>Start a Conversation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <a
                  href={getWhatsAppUrl("Hi LocalBuild, I'm interested in your digital marketing services.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-12 flex items-center justify-center gap-2 text-xs font-bold text-emerald-800 bg-emerald-50 active:bg-emerald-100 border border-emerald-200/80 rounded-md transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={`tel:${LOCALBUILD_PHONE}`}
                  className="h-12 flex items-center justify-center gap-2 text-xs font-bold text-zinc-700 bg-zinc-100 active:bg-zinc-200 rounded-md transition-colors"
                >
                  <Phone className="w-4 h-4 text-zinc-600" />
                  <span>Call Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
