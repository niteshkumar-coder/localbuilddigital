import { Phone, MessageSquare } from "lucide-react";

export default function FloatingButtons() {
  return (
    <>
      {/* Floating Call Button (Bottom Left) */}
      <a
        href="tel:+919142645990"
        className="fixed bottom-[20px] left-[16px] w-[52px] h-[52px] bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary/90 transition-all active:scale-95 border border-white/15 cursor-pointer z-[9998] select-none"
        aria-label="Call LocalHotline"
      >
        <Phone className="w-[26px] h-[26px] text-white" />
      </a>

      {/* Floating WhatsApp Button (Bottom Right) */}
      <a
        href="https://wa.me/919472028969?text=Hi%20LocalBuild!%20I'm%20interested%20in%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-[20px] right-[16px] w-[52px] h-[52px] bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-emerald-500 transition-all active:scale-95 border border-white/15 cursor-pointer z-[9998] select-none"
        aria-label="Chat on WhatsApp"
      >
        {/* WhatsApp Chat bubble vector icon representer */}
        <MessageSquare className="w-[26px] h-[26px] text-white fill-white/10" />
      </a>
    </>
  );
}
