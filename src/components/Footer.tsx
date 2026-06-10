import { Zap, MapPin, Mail, Phone, ArrowUp, Sparkles, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onQuoteClick: () => void;
  onAdminClick?: () => void;
}

export default function Footer({ onNavigate, onQuoteClick, onAdminClick }: FooterProps) {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const services = [
    "Website Design",
    "Google Ads",
    "Meta Ads",
    "GBP Optimize",
    "Local Service Ads",
    "YouTube Growth",
    "AI Automation",
    "App Design",
    "Ecommerce",
    "Dropshipping",
    "Affiliate",
    "SaaS Systems",
  ];

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 pt-16 pb-12 select-none font-sans text-zinc-400">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        
        {/* 4 Column Layout on Desktop -> Stacks to 1 Column on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 border-b border-zinc-900 pb-12 mb-10">
          
          {/* Column 1: Logo & Socials - w-full, mb-6 (24px) for mobile stacking */}
          <div className="lg:col-span-4 w-full mb-6 md:mb-0 space-y-5 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-3 cursor-pointer justify-center md:justify-start" onClick={scrollTop}>
              <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center border border-zinc-800 shrink-0 shadow-lg">
                <img 
                  src="https://i.ibb.co/G3tMbK2q/image.png" 
                  alt="LocalBuild Logo" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="font-display text-xl font-bold text-white tracking-tight block">
                  Local<span className="text-blue-500">Build</span>
                </span>
                <p className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest leading-none mt-1">
                  Digital Marketing Agency
                </p>
              </div>
            </div>

            <p className="text-[14px] text-zinc-400 leading-relaxed max-w-sm mx-auto md:mx-0">
              Precision-designed search & display advertising systems engineered specifically to secure market dominance for localized service and medical brands.
            </p>

            {/* Social Icons: center align, 32px each, 12px gap */}
            <div className="flex items-center justify-center md:justify-start gap-3 pt-2">
              {[
                { 
                  icon: Facebook, 
                  label: "Facebook", 
                  href: "https://www.facebook.com/localbuild1",
                  colorClass: "text-[#1877F2] bg-[#1877F2]/10 border-[#1877F2]/30 hover:bg-[#1877F2] hover:border-[#1877F2] hover:text-white"
                },
                { 
                  icon: Twitter, 
                  label: "Twitter", 
                  href: "https://x.com/NiteshK7765796",
                  colorClass: "text-[#1DA1F2] bg-[#1DA1F2]/10 border-[#1DA1F2]/30 hover:bg-[#1DA1F2] hover:border-[#1DA1F2] hover:text-white"
                },
                { 
                  icon: Linkedin, 
                  label: "LinkedIn", 
                  href: "https://www.linkedin.com/in/nitesh-kumar-27428a397",
                  colorClass: "text-[#0A66C2] bg-[#0A66C2]/10 border-[#0A66C2]/30 hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:text-white"
                },
                { 
                  icon: Instagram, 
                  label: "Instagram", 
                  href: "https://www.instagram.com/localbuild1?igsh=YzljYTk1ODg3Zg%3D%3D",
                  colorClass: "text-[#E4405F] bg-[#E4405F]/10 border-[#E4405F]/30 hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:border-[#ee2a7b] hover:text-white"
                },
              ].map((social, idx) => {
                const IconComp = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all shadow-xs ${social.colorClass}`}
                    style={{ width: "32px", height: "32px" }} // exact 32px
                  >
                    <IconComp className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Quick Links - w-full, mb-6 (24px) */}
          <div className="lg:col-span-2 w-full mb-6 md:mb-0 space-y-4 text-center md:text-left">
            <p className="text-xs font-bold uppercase text-zinc-200 tracking-wider">Quick Channels</p>
            <ul className="space-y-1 text-[14px] leading-[2]">
              <li>
                <button
                  onClick={() => onNavigate("services")}
                  className="text-zinc-400 hover:text-blue-400 font-medium cursor-pointer transition-colors"
                >
                  Conversion Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("planner")}
                  className="text-zinc-400 hover:text-blue-400 font-medium cursor-pointer transition-colors"
                >
                  Strategy Quiz
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("roi")}
                  className="text-zinc-400 hover:text-blue-400 font-medium cursor-pointer transition-colors"
                >
                  Campaign ROI
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("case-studies")}
                  className="text-zinc-400 hover:text-blue-400 font-medium cursor-pointer transition-colors"
                >
                  Transparency Portfolio
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Services grid - "Services list: 2 column grid in footer", w-full, mb-6 (24px) */}
          <div className="lg:col-span-3 w-full mb-6 md:mb-0 space-y-4 text-center md:text-left">
            <p className="text-xs font-bold uppercase text-zinc-200 tracking-wider">Our Solutions</p>
            <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-[14px] leading-[2] text-zinc-400 text-left max-w-sm mx-auto md:mx-0">
              {services.map((svc, idx) => (
                <button
                  key={idx}
                  onClick={() => onNavigate("services")}
                  className="hover:text-blue-400 text-left transition-colors truncate hover:underline"
                >
                  • {svc}
                </button>
              ))}
            </div>
          </div>

          {/* Column 4: Contact details - w-full, mb-6 (24px) */}
          <div className="lg:col-span-3 w-full mb-6 md:mb-0 space-y-4 text-center md:text-left text-[14px] leading-[2]">
            <p className="text-xs font-bold uppercase text-zinc-200 tracking-wider">Corporate Hub</p>
            <div className="space-y-2.5 text-zinc-400 max-w-xs mx-auto md:mx-0">
              <div className="flex items-start gap-2.5 justify-center md:justify-start">
                <MapPin className="w-4 h-4 text-blue-500 shrink-0 mt-1" />
                <span className="text-left text-zinc-400">Krishna Rajendra Rd, Parvathipuram, Vishweshwarapura, Basavanagudi, Bengaluru, Karnataka 560004</span>
              </div>
              <div className="flex items-center gap-2.5 justify-center md:justify-start">
                <Mail className="w-4 h-4 text-blue-500 shrink-0" />
                <a href="mailto:localbuildhelp@gmail.com" className="hover:text-blue-400 font-medium text-zinc-400 transition-colors">localbuildhelp@gmail.com</a>
              </div>
              <div className="flex items-center gap-2.5 justify-center md:justify-start">
                <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                <a href="tel:+919142645990" className="hover:text-emerald-400 font-mono font-bold hover:underline transition-colors text-zinc-400">
                  +91 9142645990
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Footer bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[12px] text-zinc-500 font-medium text-center sm:text-left">
          <p>© 2026 LocalBuild Digital Agency. All rights reserved. Precision Designed.</p>
          <div className="flex items-center gap-5 justify-center">
            <span className="hover:text-zinc-300 transition cursor-pointer">Privacy Framework</span>
            <span className="hover:text-zinc-300 transition cursor-pointer font-medium">•</span>
            <span className="hover:text-zinc-300 transition cursor-pointer">Terms of Engagement</span>
            <span className="hover:text-zinc-300 transition cursor-pointer font-medium">•</span>
            <button
              onClick={onAdminClick}
              className="transition leading-none focus:outline-hidden"
              style={{
                fontSize: "10px",
                color: "#9CA3AF",
                textDecoration: "none",
                cursor: "pointer",
                background: "none",
                border: "none",
                padding: 0
              }}
            >
              Admin Database
            </button>
            <button
              onClick={scrollTop}
              className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 p-2 rounded-lg transition shrink-0 cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
