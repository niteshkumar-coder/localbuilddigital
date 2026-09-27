import { ArrowRight, MessageSquare, ShieldCheck, Zap, TrendingUp } from "lucide-react";
import { getWhatsAppUrl, LOCALBUILD_PHONE, LOCALBUILD_PHONE_DISPLAY } from "../utils/whatsapp";

interface HeroProps {
  onQuoteClick: (prefilledNotes?: string) => void;
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onQuoteClick, onNavigate }: HeroProps) {
  return (
    <section id="hero" className="hero">
      {/* Background Media */}
      <div className="hero__media-wrapper">
        <div className="hero__media">
          <img
            src="/images/hero.png"
            alt="LocalBuild Growth Engineering — business owner reviewing verified customer acquisition pipeline"
            width={1440}
            height={800}
            fetchPriority="high"
            decoding="async"
            className="hero-image"
            onError={(e) => {
              const target = e.currentTarget as HTMLImageElement;
              if (target.src.indexOf("i.ibb.co") === -1) {
                target.src = "https://i.ibb.co/DHMWGPxn/image.png";
              }
            }}
          />
        </div>
      </div>

      {/* Copy Container */}
      <div className="hero__copy">
        <p className="hero__eyebrow">
          LOCAL GROWTH ENGINEERING · BENGALURU &amp; PAN-INDIA
        </p>

        <h1>
          Turn your digital presence into verified customer bookings.
        </h1>

        <p className="hero__support">
          LocalBuild builds the websites, search advertising campaigns, and lead automation systems that turn local search interest into paying clients. Complete direct account ownership, verified tracking, and zero agency markups.
        </p>

        <div className="hero__actions">
          <button
            type="button"
            onClick={() => onQuoteClick()}
            className="btn btn--primary"
          >
            <span>Start a Conversation</span>
          </button>

          <button
            type="button"
            onClick={() => onNavigate("case-studies")}
            className="btn btn--ghost"
          >
            <span>Explore Verified Work</span>
            <span aria-hidden="true">→</span>
          </button>
        </div>

        {/* Direct Communication Channels */}
        <div className="mt-8 pt-4 border-t border-white/10 space-y-3">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-zinc-300">
            <div className="flex items-center gap-2">
              <span className="text-zinc-400">Prefer direct chat?</span>
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
            <span className="text-zinc-600 hidden sm:inline" aria-hidden="true">·</span>
            <div className="flex items-center gap-2">
              <span className="text-zinc-400">Direct Line:</span>
              <a href={`tel:${LOCALBUILD_PHONE}`} className="font-mono text-zinc-100 hover:text-white font-semibold">
                {LOCALBUILD_PHONE_DISPLAY}
              </a>
            </div>
          </div>

          {/* Operating Standards Strip */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 pt-1 text-xs text-zinc-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#4C7DFF]" />
              <span>Direct Account Ownership</span>
            </span>
            <span className="text-zinc-600 hidden sm:inline" aria-hidden="true">·</span>
            <span className="flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-[#4C7DFF]" />
              <span>Direct Google &amp; Meta Billing</span>
            </span>
            <span className="text-zinc-600 hidden sm:inline" aria-hidden="true">·</span>
            <span className="flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5 text-[#4C7DFF]" />
              <span>Verified Inquiry Attribution</span>
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
