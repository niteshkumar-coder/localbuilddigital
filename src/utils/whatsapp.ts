export const LOCALBUILD_PHONE = "+919472028969";
export const LOCALBUILD_PHONE_DISPLAY = "+91 94720 28969";
export const LOCALBUILD_EMAIL = "localbuildhelp@gmail.com";
export const LOCALBUILD_ADDRESS = "Krishna Rajendra Rd, Parvathipuram, Vishweshwarapura, Basavanagudi, Bengaluru, Karnataka 560004";

/**
 * Builds a properly formatted, URI-encoded WhatsApp link with a context-specific message.
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const defaultMessage = "Hi LocalBuild, I'm interested in your digital marketing services. I'd like to discuss my business.";
  const text = customMessage && customMessage.trim() ? customMessage.trim() : defaultMessage;
  return `https://wa.me/919472028969?text=${encodeURIComponent(text)}`;
}
