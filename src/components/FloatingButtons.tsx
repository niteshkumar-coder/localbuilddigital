import { Phone, MessageSquare } from "lucide-react";
import { getWhatsAppUrl, LOCALBUILD_PHONE } from "../utils/whatsapp";

export default function FloatingButtons() {
  return (
    <>
      {/* Floating Call Button (Bottom Left) */}
      <a
        href={`tel:${LOCALBUILD_PHONE}`}
        className="fixed bottom-5 left-4 sm:left-6 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-all active:scale-95 border border-white/20 cursor-pointer z-40"
        aria-label="Direct Telephone Call"
      >
        <Phone className="w-5 h-5 text-white" />
      </a>

      {/* Floating WhatsApp Button (Bottom Right) */}
      <a
        href={getWhatsAppUrl("Hi LocalBuild, I'm interested in growing my local business with your services.")}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-4 sm:right-6 w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-emerald-500 transition-all active:scale-95 border border-white/20 cursor-pointer z-40"
        aria-label="Chat directly on WhatsApp"
      >
        <MessageSquare className="w-5 h-5 text-white" />
      </a>
    </>
  );
}
