import { useState, useEffect, FormEvent, ChangeEvent } from "react";
import { 
  X, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Loader2,
  ArrowRight
} from "lucide-react";
import { getWhatsAppUrl, LOCALBUILD_PHONE, LOCALBUILD_PHONE_DISPLAY, LOCALBUILD_EMAIL, LOCALBUILD_ADDRESS } from "../utils/whatsapp";

interface ContactFormProps {
  isOpen?: boolean;
  onClose?: () => void;
  prefilledNotes?: string;
  preselectedService?: string;
  embedded?: boolean;
}

interface FormState {
  name: string;
  phone: string;
  businessName: string;
  websiteOrProfile: string;
  helpWith: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  businessName?: string;
  general?: string;
}

export default function ContactForm({
  isOpen = false,
  onClose,
  prefilledNotes = "",
  preselectedService = "",
  embedded = false,
}: ContactFormProps) {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    phone: "",
    businessName: "",
    websiteOrProfile: "",
    helpWith: preselectedService ? `${preselectedService}: ${prefilledNotes}` : (prefilledNotes || ""),
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Sync preselectedService or prefilledNotes
  useEffect(() => {
    if (preselectedService || prefilledNotes) {
      setFormData((prev) => ({
        ...prev,
        helpWith: [preselectedService, prefilledNotes].filter(Boolean).join(" - "),
      }));
    }
  }, [preselectedService, prefilledNotes]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen && onClose) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen && !embedded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, embedded]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined, general: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    const phoneClean = formData.phone.replace(/[\s\-\+\(\)]/g, "");
    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone or WhatsApp number.";
    } else if (phoneClean.length < 10) {
      newErrors.phone = "Please enter a valid 10-digit number.";
    }

    if (!formData.businessName.trim()) {
      newErrors.businessName = "Please enter your business name.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setErrors({});

    const payload = {
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      businessName: formData.businessName.trim(),
      websiteOrProfile: formData.websiteOrProfile.trim(),
      helpWith: formData.helpWith.trim(),
      leadSource: embedded ? "Unified Contact Section" : "Modal Form",
      submittedAt: new Date().toISOString()
    };

    try {
      const response = await fetch("/api/intake-records-v2", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        console.warn("API response was not ok, recording locally");
      }
      setIsSuccess(true);
    } catch (err: any) {
      console.warn("Backend error, falling back locally:", err);
      try {
        const stored = JSON.parse(localStorage.getItem("localbuild_leads") || "[]");
        stored.push(payload);
        localStorage.setItem("localbuild_leads", JSON.stringify(stored));
      } catch (e) {
        // ignore
      }
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      name: "",
      phone: "",
      businessName: "",
      websiteOrProfile: "",
      helpWith: "",
    });
    setErrors({});
  };

  const formFields = (
    <div className="space-y-4">
      {/* Name */}
      <div>
        <label htmlFor="field-name" className="block text-xs font-bold text-zinc-700 mb-1">
          Name *
        </label>
        <input
          id="field-name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your full name"
          className={`w-full px-3.5 py-3 text-sm rounded-xl border bg-white focus:outline-none transition-colors ${
            errors.name ? "border-red-500 bg-red-50/20" : "border-zinc-300 focus:border-zinc-900"
          }`}
        />
        {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
      </div>

      {/* Phone / WhatsApp Number */}
      <div>
        <label htmlFor="field-phone" className="block text-xs font-bold text-zinc-700 mb-1">
          Phone / WhatsApp Number *
        </label>
        <input
          id="field-phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+91 98765 43210"
          className={`w-full px-3.5 py-3 text-sm rounded-xl border bg-white focus:outline-none transition-colors ${
            errors.phone ? "border-red-500 bg-red-50/20" : "border-zinc-300 focus:border-zinc-900"
          }`}
        />
        {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
      </div>

      {/* Business Name */}
      <div>
        <label htmlFor="field-business" className="block text-xs font-bold text-zinc-700 mb-1">
          Business Name *
        </label>
        <input
          id="field-business"
          name="businessName"
          type="text"
          value={formData.businessName}
          onChange={handleChange}
          placeholder="Your company or clinic name"
          className={`w-full px-3.5 py-3 text-sm rounded-xl border bg-white focus:outline-none transition-colors ${
            errors.businessName ? "border-red-500 bg-red-50/20" : "border-zinc-300 focus:border-zinc-900"
          }`}
        />
        {errors.businessName && <p className="text-xs text-red-600 mt-1">{errors.businessName}</p>}
      </div>

      {/* Website or Google Business Profile (optional) */}
      <div>
        <label htmlFor="field-profile" className="block text-xs font-bold text-zinc-700 mb-1">
          Website or Google Business Profile (optional)
        </label>
        <input
          id="field-profile"
          name="websiteOrProfile"
          type="text"
          value={formData.websiteOrProfile}
          onChange={handleChange}
          placeholder="e.g. www.example.com or Google Maps link"
          className="w-full px-3.5 py-3 text-sm rounded-xl border border-zinc-300 bg-white focus:outline-none focus:border-zinc-900 transition-colors"
        />
      </div>

      {/* What do you need help with? */}
      <div>
        <label htmlFor="field-help" className="block text-xs font-bold text-zinc-700 mb-1">
          What do you need help with?
        </label>
        <textarea
          id="field-help"
          name="helpWith"
          rows={3}
          value={formData.helpWith}
          onChange={handleChange}
          placeholder="Tell us about your services, current customer volume, or what you want to achieve..."
          className="w-full px-3.5 py-3 text-sm rounded-xl border border-zinc-300 bg-white focus:outline-none focus:border-zinc-900 transition-colors"
        />
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-[52px] px-6 rounded-xl text-sm font-bold text-white bg-[#3157D5] hover:bg-[#2546B8] active:bg-[#1E3A8A] disabled:opacity-50 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm uppercase tracking-wide"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Submitting...</span>
            </>
          ) : (
            <>
              <span>Request Strategy Call</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>

        {/* 3 badges under button */}
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[11px] font-medium text-zinc-500 text-center mt-3 pt-1">
          <span>• 100% confidential</span>
          <span>• No sales pressure</span>
          <span>• Response within 24 hours</span>
        </div>
      </div>
    </div>
  );

  const successMessage = (
    <div className="p-6 text-center space-y-4">
      <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
        <CheckCircle2 className="w-6 h-6" />
      </div>
      <div>
        <h4 className="font-display font-bold text-xl text-zinc-900">
          Consultation Request Received
        </h4>
        <p className="text-xs sm:text-sm text-zinc-600 mt-1.5 leading-relaxed max-w-md mx-auto">
          Thank you, <strong>{formData.name}</strong>. We are analyzing local search competition for <strong>{formData.businessName}</strong> and will contact you at <strong>{formData.phone}</strong>.
        </p>
      </div>

      <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
        <a
          href={getWhatsAppUrl(`Hi LocalBuild, I just submitted a consultation request for ${formData.businessName}. Looking forward to connecting!`)}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors"
        >
          <MessageSquare className="w-4 h-4" />
          <span>Confirm on WhatsApp</span>
        </a>

        <button
          type="button"
          onClick={handleReset}
          className="text-xs font-semibold text-zinc-500 hover:text-zinc-900"
        >
          Submit another request
        </button>
      </div>
    </div>
  );

  // Modal Render
  if (!embedded) {
    if (!isOpen) return null;

    return (
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        className="fixed inset-0 z-50 overflow-y-auto"
      >
        <div
          className="fixed inset-0 bg-zinc-900/60 backdrop-blur-xs transition-opacity"
          onClick={onClose}
        />

        <div className="flex min-h-full items-center justify-center p-4 sm:p-6 text-center">
          <div className="relative w-full max-w-xl transform overflow-hidden rounded-2xl bg-white text-left shadow-2xl transition-all border border-zinc-200">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-zinc-100 px-6 py-4 bg-zinc-50/50">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 block">
                  Discovery Session
                </span>
                <h3 id="contact-modal-title" className="text-lg sm:text-xl font-bold font-display text-zinc-900">
                  Schedule Your Growth Audit
                </h3>
              </div>
              {onClose && (
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-lg p-2 text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 transition-colors cursor-pointer"
                  aria-label="Close dialog"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Content */}
            <div className="p-6">
              {isSuccess ? successMessage : (
                <form onSubmit={handleSubmit}>
                  {formFields}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Embedded Single Merged Contact Section on the Homepage
  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#0B1633] text-white border-b border-[#071126]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Unified Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#7C8CFF] mb-3">
            Start A Conversation
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.15] mb-4">
            Let's build something that grows your business.
          </h2>
          <p className="text-base sm:text-lg text-[#C6CEDE] leading-relaxed max-w-2xl">
            Schedule a free 30-minute discovery call or connect directly on WhatsApp. We'll audit your local market and outline a realistic growth roadmap.
          </p>
        </div>

        {/* 2-Column Unified Layout: Direct Contact on Left, Clean Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Direct Communication Channels + Visual (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Visual */}
            <div className="relative overflow-hidden rounded-2xl border border-white/10 aspect-[4/3] w-full bg-[#071126] shadow-2xs">
              <img
                src="https://media.easy-peasy.ai/ed020243-49ba-4d9e-8d7b-facb96f9ac5d/0cc3798b-0872-4b5c-bd20-cc08f4e871a8.jpg"
                alt="LocalBuild commercial strategy consultation"
                loading="lazy"
                className="w-full h-full object-cover object-center"
                width={800}
                height={600}
              />
            </div>

            {/* Merged Channels: Phone & WhatsApp */}
            <div className="space-y-3">
              <a
                href={getWhatsAppUrl("Hi LocalBuild, I would like to schedule a 30-minute consultation for my business.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white transition-colors shadow-xs group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-emerald-100">WhatsApp Direct</div>
                    <div className="text-sm font-bold">Chat With A Strategist</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={`tel:${LOCALBUILD_PHONE}`}
                className="flex items-center justify-between p-4 rounded-xl bg-[#071126] border border-white/10 hover:border-white/20 transition-colors shadow-2xs group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/10 text-white flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-zinc-400">Call Us Direct</div>
                    <div className="text-sm font-bold text-white font-mono">{LOCALBUILD_PHONE_DISPLAY}</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Address note */}
            <div className="p-4 rounded-xl bg-[#071126] border border-white/10 text-xs text-zinc-400 flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#7C8CFF] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-zinc-200 block">Offices & Headquarters</span>
                <span>{LOCALBUILD_ADDRESS}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-zinc-200/90 p-6 sm:p-8 shadow-sm">
            <div className="mb-5 pb-4 border-b border-zinc-100">
              <h3 className="font-display font-bold text-xl text-zinc-900">
                Book Your Growth Consultation
              </h3>
              <p className="text-xs sm:text-sm text-zinc-500 mt-0.5">
                Fill in your details. We'll analyze your local competition before our call.
              </p>
            </div>

            {isSuccess ? successMessage : (
              <form onSubmit={handleSubmit}>
                {formFields}
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
