import { ArrowUp, MapPin, Mail, Phone, ArrowUpRight, Shield } from "lucide-react";

interface FooterProps {
  onQuoteClick: (prefilledService?: string) => void;
  onNavigate?: (pathOrId: string) => void;
  onAdminClick?: () => void;
}

// Editable social media URLs
const SOCIAL_LINKS = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/localbuild",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    borderClass: "border-[#1877F2]/40 hover:border-[#1877F2]",
    textClass: "text-[#1877F2]",
    hoverBgClass: "hover:bg-[#1877F2]/10",
  },
  {
    name: "X / Twitter",
    url: "https://x.com/localbuild",
    icon: (
      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    borderClass: "border-[#38BDF8]/40 hover:border-[#38BDF8]",
    textClass: "text-[#38BDF8]",
    hoverBgClass: "hover:bg-[#38BDF8]/10",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/localbuild",
    icon: (
      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
    borderClass: "border-[#0A66C2]/40 hover:border-[#0A66C2]",
    textClass: "text-[#0A66C2]",
    hoverBgClass: "hover:bg-[#0A66C2]/10",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/localbuild",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
    borderClass: "border-[#E1306C]/40 hover:border-[#E1306C]",
    textClass: "text-[#E1306C]",
    hoverBgClass: "hover:bg-[#E1306C]/10",
  },
];

// Exact 12 official LocalBuild services split into 2 compact sub-columns
const SERVICES_COL_1 = [
  { num: "01", name: "Website Design", target: "/services" },
  { num: "02", name: "Google Ads Management", target: "/services" },
  { num: "03", name: "Meta Ads Management", target: "/services" },
  { num: "04", name: "Google Business Profile Optimization", target: "/services" },
  { num: "05", name: "Local Service Ads", target: "/services" },
  { num: "06", name: "YouTube Growth", target: "/services" },
];

const SERVICES_COL_2 = [
  { num: "07", name: "AI Automation Solutions", target: "/services" },
  { num: "08", name: "Application Design", target: "/services" },
  { num: "09", name: "Ecommerce Management", target: "/services" },
  { num: "10", name: "Dropshipping Systems", target: "/services" },
  { num: "11", name: "Affiliate Marketing", target: "/services" },
  { num: "12", name: "Business Automation Systems", target: "/services" },
];

export default function Footer({ onQuoteClick, onNavigate, onAdminClick }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNav = (target: string) => {
    if (onNavigate) {
      onNavigate(target);
    } else if (target.startsWith("/")) {
      window.location.pathname = target;
    } else {
      const el = document.getElementById(target);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#050609] text-white border-t border-white/[0.08] pt-14 pb-12 sm:pt-16 sm:pb-14 transition-colors">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        
        {/* ========================================================= */}
        {/* 1. TOP FOOTER GRID (4-COLUMN DESKTOP LAYOUT)              */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-12">
          
          {/* COLUMN 1 — LOCALBUILD (3 cols) */}
          <div className="lg:col-span-3 space-y-3.5">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full overflow-hidden bg-[#07080A] border border-white/20 p-0.5 flex items-center justify-center shrink-0 shadow-xs">
                <img
                  src="/images/logo.png"
                  alt="LocalBuild Logo"
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = "https://i.ibb.co/G3tMbK2q/image.png";
                  }}
                />
              </div>
              <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-white">
                LocalBuild
              </span>
            </div>

            <p className="text-[13px] sm:text-[13.5px] text-[#94A3B8] leading-relaxed pr-2">
              LocalBuild engineers high-performance websites, high-intent Google &amp; Meta advertising systems, local map dominance, and automated lead workflows.
            </p>

            <div className="pt-0.5">
              <span className="text-[11.5px] text-[#38BDF8] font-medium tracking-wide flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] inline-block shrink-0" />
                <span>Full-Stack Digital Growth Engineering</span>
              </span>
            </div>
          </div>

          {/* COLUMN 2 — CORE CAPABILITIES (5 cols desktop with 2 sub-columns) */}
          <div className="lg:col-span-5 space-y-3">
            <h4 className="text-[12px] font-bold uppercase tracking-wider text-white">
              CORE CAPABILITIES
            </h4>

            {/* Split 12 services into two compact sub-columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-[13px] sm:text-[13px] text-[#94A3B8]">
              {/* Sub-column 1 (01 - 06) */}
              <ul className="space-y-2">
                {SERVICES_COL_1.map((item) => (
                  <li key={item.num}>
                    <button
                      type="button"
                      onClick={() => handleNav(item.target)}
                      className="hover:text-[#38BDF8] hover:translate-x-[2px] transition-all duration-200 cursor-pointer text-left block leading-snug"
                    >
                      <span className="font-mono text-[#64748B] text-[11px] mr-1.5">{item.num} —</span>
                      <span>{item.name}</span>
                    </button>
                  </li>
                ))}
              </ul>

              {/* Sub-column 2 (07 - 12) */}
              <ul className="space-y-2">
                {SERVICES_COL_2.map((item) => (
                  <li key={item.num}>
                    <button
                      type="button"
                      onClick={() => handleNav(item.target)}
                      className="hover:text-[#38BDF8] hover:translate-x-[2px] transition-all duration-200 cursor-pointer text-left block leading-snug"
                    >
                      <span className="font-mono text-[#64748B] text-[11px] mr-1.5">{item.num} —</span>
                      <span>{item.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* COLUMN 3 — AGENCY (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[12px] font-bold uppercase tracking-wider text-white">
              AGENCY
            </h4>
            <ul className="space-y-2 text-[13px] sm:text-[13.5px] text-[#94A3B8]">
              <li>
                <button
                  type="button"
                  onClick={() => handleNav("/about")}
                  className="hover:text-[#38BDF8] hover:translate-x-[2px] transition-all duration-200 cursor-pointer text-left block"
                >
                  About LocalBuild
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav("case-studies")}
                  className="hover:text-[#38BDF8] hover:translate-x-[2px] transition-all duration-200 cursor-pointer text-left block"
                >
                  Case Studies &amp; Work
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav("why-us")}
                  className="hover:text-[#38BDF8] hover:translate-x-[2px] transition-all duration-200 cursor-pointer text-left block"
                >
                  Why LocalBuild
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav("pricing")}
                  className="hover:text-[#38BDF8] hover:translate-x-[2px] transition-all duration-200 cursor-pointer text-left block"
                >
                  Growth Packages
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav("/contact")}
                  className="hover:text-[#38BDF8] hover:translate-x-[2px] transition-all duration-200 cursor-pointer text-left block"
                >
                  Direct Inquiry
                </button>
              </li>
            </ul>
          </div>

          {/* COLUMN 4 — READY TO GROW? (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[12px] font-bold uppercase tracking-wider text-white">
              READY TO GROW?
            </h4>
            <p className="text-[13px] sm:text-[13px] text-[#94A3B8] leading-relaxed">
              Schedule a technical discovery audit to examine your funnel, traffic, and conversion pipeline.
            </p>
            <div className="pt-1.5">
              <button
                type="button"
                onClick={() => onQuoteClick("Discovery Audit Inquiry")}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md bg-[#3157D5] hover:bg-[#2546B8] text-white text-[12px] font-bold transition-all duration-200 shadow-sm hover:shadow-[0_0_16px_rgba(49,87,213,0.45)] cursor-pointer"
              >
                <span>REQUEST GROWTH AUDIT</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* ========================================================= */}
        {/* 2. DIVIDER                                                */}
        {/* ========================================================= */}
        <div className="border-t border-white/[0.08] my-8 sm:my-10" />

        {/* ========================================================= */}
        {/* 3. SOCIAL MEDIA ROW                                       */}
        {/* ========================================================= */}
        <div className="mb-8">
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit LocalBuild on ${social.name}`}
                className={`w-[36px] h-[36px] rounded-full border bg-transparent flex items-center justify-center transition-all duration-200 cursor-pointer transform hover:scale-105 shadow-xs ${social.borderClass} ${social.textClass} ${social.hoverBgClass}`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* 4. CORPORATE HUB                                          */}
        {/* ========================================================= */}
        <div className="space-y-3 max-w-3xl">
          <h3 className="text-[13px] font-bold tracking-[0.06em] text-white uppercase font-sans">
            CORPORATE HUB
          </h3>

          <div className="space-y-2.5 text-[13px] sm:text-[14px] text-[#94A3B8] leading-relaxed">
            {/* Location Pin with blue/cyan icon */}
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
              <span className="leading-relaxed">
                Krishna Rajendra Rd, Parvathipuram, Vishweshwarapura, Basavanagudi, Bengaluru, Karnataka 560004
              </span>
            </div>

            {/* Email with blue/cyan icon */}
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-[#38BDF8] shrink-0" />
              <a
                href="mailto:localbuildhelp@gmail.com"
                className="hover:text-white transition-colors cursor-pointer"
              >
                localbuildhelp@gmail.com
              </a>
            </div>

            {/* Phone with green icon */}
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-[#10B981] shrink-0" />
              <a
                href="tel:+919472028969"
                className="hover:text-emerald-400 transition-colors font-mono font-medium cursor-pointer"
              >
                +91 9472028969
              </a>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 5. DIVIDER                                                */}
        {/* ========================================================= */}
        <div className="border-t border-white/[0.08] my-8 sm:my-10" />

        {/* ========================================================= */}
        {/* 6. BOTTOM COPYRIGHT BAR                                   */}
        {/* ========================================================= */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#64748B]">
          <div>
            <span>© 2026 LocalBuild. All rights reserved. • Crafted with care by humans.</span>
          </div>

          <div className="flex items-center gap-5 sm:gap-6 flex-wrap">
            <button
              type="button"
              onClick={() => onQuoteClick("Privacy Policy Inquiry")}
              className="hover:text-[#94A3B8] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span className="text-white/20 hidden sm:inline">|</span>
            <button
              type="button"
              onClick={() => onQuoteClick("Terms of Service Inquiry")}
              className="hover:text-[#94A3B8] transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <span className="text-white/20 hidden sm:inline">|</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-white transition-colors cursor-pointer text-[#94A3B8]"
              aria-label="Back to Top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#38BDF8]" />
            </button>
            <span className="text-white/20 hidden sm:inline">|</span>
            <button
              type="button"
              onClick={() => {
                if (onAdminClick) {
                  onAdminClick();
                } else if (onNavigate) {
                  onNavigate("/admin");
                } else {
                  window.location.href = "/admin";
                }
              }}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#3157D5]/20 hover:bg-[#3157D5] text-[#38BDF8] hover:text-white border border-[#3157D5]/40 hover:border-[#3157D5] font-semibold text-[11px] tracking-wider uppercase transition-all duration-200 cursor-pointer shadow-xs hover:shadow-[0_0_12px_rgba(49,87,213,0.5)] group"
              aria-label="Open Secure Admin Leads Login"
              title="LocalBuild Secure Leads Dashboard"
            >
              <Shield className="w-3.5 h-3.5 text-[#38BDF8] group-hover:text-white transition-colors" />
              <span>LEADS</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
