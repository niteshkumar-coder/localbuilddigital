export const LOCALBUILD_PHONE = "+919472028969";
export const LOCALBUILD_PHONE_DISPLAY = "+91 94720 28969";
export const LOCALBUILD_EMAIL = "localbuildhelp@gmail.com";
export const LOCALBUILD_ADDRESS = "Krishna Rajendra Rd, Parvathipuram, Vishweshwarapura, Basavanagudi, Bengaluru, Karnataka 560004";

/**
 * Builds a properly formatted, URI-encoded WhatsApp link with a context-specific message
 * and optionally a custom target phone number (for contacting leads directly from the admin dashboard).
 */
export function getWhatsAppUrl(customMessage?: string, targetPhone?: string): string {
  const defaultMessage = "Hi LocalBuild, I'm interested in your digital marketing services. I'd like to discuss my business.";
  const text = customMessage && customMessage.trim() ? customMessage.trim() : defaultMessage;
  const rawPhone = (targetPhone || "919472028969").replace(/\D/g, "");
  const cleanPhone = rawPhone.length === 10 ? `91${rawPhone}` : (rawPhone || "919472028969");
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
}
