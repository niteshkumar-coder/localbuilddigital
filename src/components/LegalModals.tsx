import { useEffect } from "react";
import { X, ShieldCheck, FileText } from "lucide-react";
import { LOCALBUILD_PHONE_DISPLAY, LOCALBUILD_EMAIL, LOCALBUILD_ADDRESS } from "../utils/whatsapp";

interface LegalModalProps {
  type: "privacy" | "terms" | null;
  onClose: () => void;
}

export default function LegalModal({ type, onClose }: LegalModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && type) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [type, onClose]);

  useEffect(() => {
    if (type) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [type]);

  if (!type) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto"
    >
      <div
        className="fixed inset-0 bg-zinc-900/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="flex min-h-full items-center justify-center p-4 sm:p-6 text-center">
        <div className="relative w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white text-left shadow-2xl transition-all border border-zinc-200">
          
          {/* Header */}
          <div className="flex items-center justify-between border-b border-zinc-100 px-6 py-5 bg-zinc-50/50">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                {type === "privacy" ? <ShieldCheck className="w-4 h-4" /> : <FileText className="w-4 h-4" />}
              </div>
              <h3 id="legal-modal-title" className="text-xl font-bold font-display text-zinc-900">
                {type === "privacy" ? "Privacy Policy" : "Terms of Service"}
              </h3>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="rounded-lg p-2 text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="px-6 py-6 space-y-4 text-xs sm:text-sm text-zinc-600 leading-relaxed max-h-[70vh] overflow-y-auto">
            {type === "privacy" ? (
              <>
                <p className="font-semibold text-zinc-800">
                  Last updated: January 2025. LocalBuild ("we", "our", or "us") is dedicated to safeguarding the privacy and confidentiality of our clients and website visitors.
                </p>

                <h4 className="font-bold text-zinc-900 text-sm pt-2">1. Information We Collect</h4>
                <p>
                  When you submit an inquiry through our consultation forms, we collect your name, business name, phone number, email address, city, and project requirements. We use this information solely to assess your advertising requirements and contact you regarding your requested growth strategy.
                </p>

                <h4 className="font-bold text-zinc-900 text-sm pt-2">2. How We Use Your Information</h4>
                <p>
                  We do not sell, rent, or trade your personal or business data to third-party brokers. We use your information only to:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Prepare customized local competitive audits and proposal scopes.</li>
                  <li>Coordinate strategic consultation calls via phone or WhatsApp.</li>
                  <li>Fulfill contracted services and campaign management duties.</li>
                </ul>

                <h4 className="font-bold text-zinc-900 text-sm pt-2">3. Data Security & Storage</h4>
                <p>
                  All lead records and inquiries are encrypted in transit via SSL/TLS and stored on secure cloud database servers. Access is strictly restricted to authorized LocalBuild marketing consultants.
                </p>

                <h4 className="font-bold text-zinc-900 text-sm pt-2">4. Contact & Inquiries</h4>
                <p>
                  If you have any questions or wish to request data deletion, contact us at: <a href={`mailto:${LOCALBUILD_EMAIL}`} className="text-blue-600 underline">{LOCALBUILD_EMAIL}</a> or by calling {LOCALBUILD_PHONE_DISPLAY}.
                </p>
              </>
            ) : (
              <>
                <p className="font-semibold text-zinc-800">
                  Last updated: January 2025. These Terms of Service govern your relationship with LocalBuild.
                </p>

                <h4 className="font-bold text-zinc-900 text-sm pt-2">1. Scope of Marketing Services</h4>
                <p>
                  LocalBuild provides strategic digital marketing, local SEO optimization, search engine advertising (Google Ads), social media ad campaigns (Meta), and web design. Specific deliverables and reporting schedules are defined in individual client agreements.
                </p>

                <h4 className="font-bold text-zinc-900 text-sm pt-2">2. Client Cooperation & Access</h4>
                <p>
                  Successful campaign execution requires timely provision of business assets, Google Business Profile manager access, and prompt review of ad copy drafts.
                </p>

                <h4 className="font-bold text-zinc-900 text-sm pt-2">3. Advertising Spend & Third-Party Platforms</h4>
                <p>
                  Direct advertising spend (paid to Google, Meta, or third-party ad networks) is paid directly by the client through their dedicated billing accounts unless expressly agreed otherwise in writing.
                </p>

                <h4 className="font-bold text-zinc-900 text-sm pt-2">4. Performance Estimates</h4>
                <p>
                  While LocalBuild applies rigorous data-backed strategies to maximize return on advertising spend, search algorithms and auction dynamics fluctuate. Projections provided in the ROI calculator represent strategic models based on historical averages, not guaranteed returns.
                </p>

                <h4 className="font-bold text-zinc-900 text-sm pt-2">5. Governing Law</h4>
                <p>
                  These terms are governed by the applicable laws of India, with jurisdiction in Patna / Bengaluru.
                </p>
              </>
            )}
          </div>

          {/* Footer */}
          <div className="border-t border-zinc-100 px-6 py-4 bg-zinc-50 flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 text-xs sm:text-sm font-semibold text-white bg-zinc-900 hover:bg-zinc-800 rounded-lg transition-colors cursor-pointer"
            >
              I Understand
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
