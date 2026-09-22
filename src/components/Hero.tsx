import { ArrowRight, MessageSquare, PhoneCall } from "lucide-react";
import { getWhatsAppUrl, LOCALBUILD_PHONE, LOCALBUILD_PHONE_DISPLAY } from "../utils/whatsapp";

interface HeroProps {
  onQuoteClick: (prefilledNotes?: string) => void;
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onQuoteClick, onNavigate }: HeroProps) {
  return (
    <section 
      id="hero" 
      className="hero text-white border-b border-white/10"
    >
      <div className="hero__media-wrapper">
        <picture className="hero__media">
          <source 
            media="(max-width:768px)"  
            srcSet="https://i.ibb.co/G421Mn7h/image.png 941w"  
            sizes="(max-width: 768px) 100vw, 941px" 
          />
          <source 
            media="(max-width:1024px)" 
            srcSet="https://i.ibb.co/qLL1nG4c/image.png 1448w" 
            sizes="100vw" 
          />
          <img 
            src="https://i.ibb.co/DHMWGPxn/image.png"
            alt="LocalBuild — business owner reviewing local marketing performance on laptop"
            width={1672} 
            height={941} 
            fetchPriority="high" 
            decoding="async" 
            className="hero-image"
          />
        </picture>
      </div>

      <div className="hero__copy">
        <p className="hero__eyebrow">LOCAL GROWTH • DIGITAL • AI</p>
        
        <h1>Turn Your Digital Presence Into Real Business Growth.</h1>
        
        <p className="hero__support">
          LocalBuild helps ambitious businesses attract more customers through high-converting websites, paid advertising, local search and intelligent automation.
        </p>

        <div className="hero__actions">
          <button
            type="button"
            onClick={() => onQuoteClick()}
            className="btn btn--primary cursor-pointer"
          >
            START A CONVERSATION
          </button>
          
          <button
            type="button"
            onClick={() => onNavigate("case-studies")}
            className="btn btn--ghost cursor-pointer"
          >
            EXPLORE OUR WORK <span aria-hidden="true">→</span>
          </button>
        </div>

        {/* Desktop / Tablet extras - hidden on mobile (<=640px) */}
        <div className="hidden min-[641px]:block pt-6 space-y-4">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-zinc-300">
            <div className="flex items-center gap-2">
              <span>Prefer direct chat?</span>
              <a
                href={getWhatsAppUrl("Hi LocalBuild, I'd like to start a conversation about growing my local business.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-semibold text-emerald-400 hover:text-emerald-300 underline underline-offset-4"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>
            <span className="text-zinc-600 hidden sm:inline">•</span>
            <div className="flex items-center gap-1.5">
              <span>Direct Line:</span>
              <a href={`tel:${LOCALBUILD_PHONE}`} className="font-mono text-zinc-100 hover:text-white font-semibold">
                {LOCALBUILD_PHONE_DISPLAY}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/15 text-xs text-zinc-200">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4C7DFF] shrink-0" />
              <span className="font-medium">Direct Account Ownership</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4C7DFF] shrink-0" />
              <span className="font-medium">Verified Enquiries</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4C7DFF] shrink-0" />
              <span className="font-medium">Transparent Audits</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
