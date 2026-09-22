import { ArrowRight, MessageSquare, Phone, CheckCircle2 } from "lucide-react";
import { getWhatsAppUrl, LOCALBUILD_PHONE, LOCALBUILD_PHONE_DISPLAY } from "../utils/whatsapp";

interface CtaBannerProps {
  onQuoteClick: () => void;
}

export default function CtaBanner({ onQuoteClick }: CtaBannerProps) {
  return (
    <section className="py-24 sm:py-32 bg-[#071126] text-white relative overflow-hidden border-t border-zinc-800 isolate">
      {/* 21:9 Full-Width Background Visual */}
      <div className="absolute inset-0 -z-20 w-full h-full pointer-events-none">
        <img
          src="https://media.easy-peasy.ai/ffc6aef5-af4c-4d10-af21-6a043cf067ca/b23af953-49ee-479e-b3c3-6a2e9aefb798.png"
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="w-full h-full object-cover object-center aspect-[21/9]"
          width={1920}
          height={820}
        />
      </div>

      {/* Navy #071126 at 60% + Blue-Violet #6B5CFF Radial Glow from Top-Right */}
      <div 
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 85% 15%, rgba(107, 92, 255, 0.42) 0%, rgba(7, 17, 38, 0.72) 45%, rgba(7, 17, 38, 0.88) 100%)"
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          
          <span className="inline-block text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400">
            Next Steps
          </span>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-[1.15]">
            Let's build something that grows your business.
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-xl mx-auto">
            Tell us where your business is today and where you want it to go. We'll audit your local market and provide an honest, actionable plan.
          </p>

          {/* Action Buttons: Start a Conversation & WhatsApp Us */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4">
            <button
              type="button"
              onClick={onQuoteClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg text-sm sm:text-base font-bold text-zinc-900 bg-white hover:bg-zinc-100 active:bg-zinc-200 transition-colors shadow-xs cursor-pointer"
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={getWhatsAppUrl("Hi LocalBuild, I'd like to start a conversation about growing my local business.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm sm:text-base font-bold text-white bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Contact Direct & Trust Line */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-8 text-xs text-zinc-400 border-t border-zinc-800/80 mt-8">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-zinc-400" />
              <span>Direct Phone: <a href={`tel:${LOCALBUILD_PHONE}`} className="text-zinc-200 hover:underline font-mono">{LOCALBUILD_PHONE_DISPLAY}</a></span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Free 30-minute discovery call · No obligation</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
