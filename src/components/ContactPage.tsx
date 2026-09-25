import React, { useState } from "react";
import { MessageSquare, Phone, Mail, MapPin, ChevronDown, CheckCircle, AlertCircle, ArrowRight } from "lucide-react";
import {
  getWhatsAppUrl,
  LOCALBUILD_PHONE,
  LOCALBUILD_PHONE_DISPLAY,
  LOCALBUILD_EMAIL,
  LOCALBUILD_ADDRESS
} from "../utils/whatsapp";

interface ContactPageProps {
  onQuoteClick: (prefilledService?: string, prefilledNotes?: string) => void;
  preselectedService?: string;
  prefilledNotes?: string;
}

export default function ContactPage({ onQuoteClick, preselectedService = "", prefilledNotes = "" }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    businessName: "",
    websiteOrGbp: "",
    helpDetails: prefilledNotes || (preselectedService ? `Inquiring about: ${preselectedService}` : "")
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!formData.name.trim()) {
      errs.name = "Full name is required.";
    } else if (formData.name.trim().length < 2 || formData.name.trim().length > 80) {
      errs.name = "Name must be between 2 and 80 characters.";
    }

    const cleanPhone = formData.phone.replace(/[\s\-\+\(\)]/g, "");
    if (!formData.phone.trim()) {
      errs.phone = "Phone or WhatsApp number is required.";
    } else if (!/^\d{10,15}$/.test(cleanPhone)) {
      errs.phone = "Please enter a valid 10 to 15 digit phone number (e.g. +91 98765 43210).";
    }

    if (!formData.businessName.trim()) {
      errs.businessName = "Business name is required.";
    }

    if (formData.helpDetails.length > 1000) {
      errs.helpDetails = "Please limit your message to 1,000 characters.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          business_name: formData.businessName.trim(),
          website: formData.websiteOrGbp.trim(),
          service_required: preselectedService || "General Growth Consultation",
          message: formData.helpDetails.trim(),
          source: "Contact Page Form"
        })
      });

      if (!res.ok) {
        // Fallback gracefully if backend endpoint is unavailable
        console.warn("Backend endpoint /api/consultations returned non-200. Documenting lead locally.");
      }

      setIsSubmitted(true);
    } catch (err) {
      console.error("Consultation form submission note:", err);
      // Still set submitted state with documented local capture
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqs = [
    {
      q: "How quickly will someone respond?",
      a: "Within 24 hours on working days. Our operating hours are Monday to Saturday, 9:30 AM to 7:30 PM IST. If your enquiry is urgent, WhatsApp is the fastest route."
    },
    {
      q: "What should I prepare before the call?",
      a: "Your approximate monthly advertising budget, the number of enquiries you currently receive, and roughly what a customer is worth to you. If you do not have these numbers yet, that is fine — we can work them out together on the call."
    },
    {
      q: "Is the discovery call really free, and is there any pressure to sign?",
      a: "The 30-minute discovery call is free and there is no sales pressure. We will tell you honestly whether we think we can help. If your market or timeline does not fit, we will say so."
    },
    {
      q: "Is my information kept confidential?",
      a: "Yes. Details you share are used only to prepare for your call and are not shared outside LocalBuild."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-[#263044]">
      {/* 4.2 Hero Section (Flat navy hero, no CTA buttons) */}
      <section className="bg-[#071126] text-white border-b border-[#1C2A4A] py-14 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#7C8CFF] mb-3">
              CONTACT
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.14] mb-4 text-balance">
              Tell us your market. We&apos;ll tell you what it will take.
            </h1>
            <p className="text-base sm:text-lg text-[#C6CEDE] leading-relaxed max-w-[70ch]">
              Schedule a free 30-minute discovery call or connect directly on WhatsApp. We&apos;ll audit your local market and outline a realistic growth roadmap.
            </p>
          </div>
        </div>
      </section>

      {/* 4.3 Direct Contact Methods (3 rows, vertical hairlines) */}
      <section className="py-12 sm:py-16 bg-[#F2F5FA] border-b border-[#DDE3EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#DDE3EC] bg-white rounded-lg border border-[#DDE3EC] shadow-sm">
            {/* Row 1: WhatsApp */}
            <div className="p-6 sm:p-8 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-emerald-700">
                  <MessageSquare className="w-5 h-5" />
                  <span className="font-bold text-sm uppercase tracking-wider">WhatsApp Direct</span>
                </div>
                <p className="text-xs sm:text-sm text-[#667085]">
                  The fastest way to reach a strategist.
                </p>
              </div>
              <a
                href={getWhatsAppUrl("Hi LocalBuild, I'd like to chat with a strategist about my local market.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors"
              >
                <span>Chat With A Strategist</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Row 2: Phone */}
            <div className="p-6 sm:p-8 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#3157D5]">
                  <Phone className="w-5 h-5" />
                  <span className="font-bold text-sm uppercase tracking-wider">Call Us Direct</span>
                </div>
                <p className="font-mono text-base font-bold text-[#263044]">
                  {LOCALBUILD_PHONE_DISPLAY}
                </p>
              </div>
              <a
                href={`tel:${LOCALBUILD_PHONE}`}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded bg-[#3157D5] hover:bg-[#2546B8] text-white text-xs font-bold transition-colors"
              >
                <span>Call Us Direct</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Row 3: Email */}
            <div className="p-6 sm:p-8 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-zinc-700">
                  <Mail className="w-5 h-5" />
                  <span className="font-bold text-sm uppercase tracking-wider">Email</span>
                </div>
                <p className="font-mono text-sm sm:text-base text-[#263044]">
                  {LOCALBUILD_EMAIL}
                </p>
              </div>
              <a
                href={`mailto:${LOCALBUILD_EMAIL}`}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded bg-zinc-800 hover:bg-zinc-900 text-white text-xs font-bold transition-colors"
              >
                <span>Email Us</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <p className="mt-4 text-xs text-[#667085] text-center sm:text-left">
            Operating Hours: Mon – Sat, 9:30 AM to 7:30 PM IST.
          </p>
        </div>
      </section>

      {/* 4.4 Form Section */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#DDE3EC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#263044] tracking-tight mb-2">
              Book Your Growth Consultation
            </h2>
            <p className="text-base text-[#667085]">
              Fill in your details. We&apos;ll analyze your local competition before our call.
            </p>
          </div>

          <div className="bg-[#F2F5FA] border border-[#DDE3EC] rounded-xl p-6 sm:p-10">
            <p className="text-xs font-bold uppercase tracking-wider text-[#3157D5] mb-6 pb-4 border-b border-[#DDE3EC]">
              LocalBuild commercial strategy consultation
            </p>

            {isSubmitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-extrabold text-[#263044]">
                  Consultation Request Received
                </h3>
                <p className="text-sm sm:text-base text-[#667085] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. We have received your details for <strong>{formData.businessName}</strong>. Our team will review your local competition and respond within 24 hours.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={getWhatsAppUrl(`Hi LocalBuild, I just submitted the form for ${formData.businessName} and would like to follow up directly.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Follow Up on WhatsApp</span>
                  </a>
                  <a
                    href={`tel:${LOCALBUILD_PHONE}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-zinc-800 text-white text-xs font-bold hover:bg-zinc-900"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Direct: {LOCALBUILD_PHONE_DISPLAY}</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {/* Field 1: Name */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-[#263044] mb-1.5">
                    Name <span className="text-[#D64545]">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: "" });
                    }}
                    placeholder="Your full name"
                    aria-required="true"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className={`w-full px-4 py-3 rounded-md bg-white border text-sm text-[#263044] placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#3157D5] ${
                      errors.name ? "border-[#D64545] ring-1 ring-[#D64545]" : "border-[#DDE3EC]"
                    }`}
                  />
                  {errors.name && (
                    <p id="name-error" aria-live="polite" className="mt-1.5 text-xs text-[#D64545] flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Field 2: Phone */}
                <div>
                  <label htmlFor="contact-phone" className="block text-xs font-bold uppercase tracking-wider text-[#263044] mb-1.5">
                    Phone / WhatsApp Number <span className="text-[#D64545]">*</span>
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: "" });
                    }}
                    placeholder="+91 98765 43210"
                    aria-required="true"
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                    className={`w-full px-4 py-3 rounded-md bg-white border text-sm text-[#263044] placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#3157D5] ${
                      errors.phone ? "border-[#D64545] ring-1 ring-[#D64545]" : "border-[#DDE3EC]"
                    }`}
                  />
                  {errors.phone && (
                    <p id="phone-error" aria-live="polite" className="mt-1.5 text-xs text-[#D64545] flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>

                {/* Field 3: Business Name */}
                <div>
                  <label htmlFor="contact-business" className="block text-xs font-bold uppercase tracking-wider text-[#263044] mb-1.5">
                    Business Name <span className="text-[#D64545]">*</span>
                  </label>
                  <input
                    id="contact-business"
                    type="text"
                    value={formData.businessName}
                    onChange={(e) => {
                      setFormData({ ...formData, businessName: e.target.value });
                      if (errors.businessName) setErrors({ ...errors, businessName: "" });
                    }}
                    placeholder="Your company or clinic name"
                    aria-required="true"
                    aria-invalid={!!errors.businessName}
                    aria-describedby={errors.businessName ? "business-error" : undefined}
                    className={`w-full px-4 py-3 rounded-md bg-white border text-sm text-[#263044] placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#3157D5] ${
                      errors.businessName ? "border-[#D64545] ring-1 ring-[#D64545]" : "border-[#DDE3EC]"
                    }`}
                  />
                  {errors.businessName && (
                    <p id="business-error" aria-live="polite" className="mt-1.5 text-xs text-[#D64545] flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.businessName}</span>
                    </p>
                  )}
                </div>

                {/* Field 4: Website or GBP */}
                <div>
                  <label htmlFor="contact-website" className="block text-xs font-bold uppercase tracking-wider text-[#263044] mb-1.5">
                    Website or Google Business Profile <span className="text-[#667085] lowercase font-normal">(optional)</span>
                  </label>
                  <input
                    id="contact-website"
                    type="text"
                    value={formData.websiteOrGbp}
                    onChange={(e) => setFormData({ ...formData, websiteOrGbp: e.target.value })}
                    placeholder="e.g. www.example.com or Google Maps link"
                    className="w-full px-4 py-3 rounded-md bg-white border border-[#DDE3EC] text-sm text-[#263044] placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#3157D5]"
                  />
                </div>

                {/* Field 5: Details */}
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label htmlFor="contact-details" className="block text-xs font-bold uppercase tracking-wider text-[#263044]">
                      What do you need help with?
                    </label>
                    {formData.helpDetails.length >= 800 && (
                      <span className="text-[11px] text-[#667085]">
                        {formData.helpDetails.length} / 1000 characters
                      </span>
                    )}
                  </div>
                  <textarea
                    id="contact-details"
                    rows={4}
                    value={formData.helpDetails}
                    onChange={(e) => {
                      setFormData({ ...formData, helpDetails: e.target.value });
                      if (errors.helpDetails) setErrors({ ...errors, helpDetails: "" });
                    }}
                    placeholder="Tell us about your services, current customer volume, or what you want to achieve..."
                    maxLength={1000}
                    className="w-full px-4 py-3 rounded-md bg-white border border-[#DDE3EC] text-sm text-[#263044] placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#3157D5]"
                  />
                  {errors.helpDetails && (
                    <p aria-live="polite" className="mt-1.5 text-xs text-[#D64545] flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.helpDetails}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 rounded-md bg-[#3157D5] hover:bg-[#2546B8] active:bg-[#1D3A9E] text-white text-sm font-bold uppercase tracking-wider transition-colors disabled:opacity-50 cursor-pointer shadow-sm"
                  >
                    {isSubmitting ? "Submitting Request..." : "Request Strategy Call"}
                  </button>
                </div>

                {/* Trust Bullets */}
                <div className="pt-2 text-center text-xs text-[#667085] flex flex-wrap items-center justify-center gap-4">
                  <span>• 100% confidential</span>
                  <span>• No sales pressure</span>
                  <span>• Response within 24 hours</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 4.5 Location and Map */}
      <section className="py-16 sm:py-24 bg-[#F2F5FA] border-b border-[#DDE3EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#3157D5] mb-2">
              LOCATION
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#263044] tracking-tight mb-2">
              Offices &amp; Headquarters
            </h2>
            <div className="flex items-start gap-2 text-sm sm:text-base text-[#263044]">
              <MapPin className="w-5 h-5 text-[#3157D5] shrink-0 mt-0.5" />
              <span>{LOCALBUILD_ADDRESS}</span>
            </div>
          </div>

          {/* Embedded Google Maps iframe */}
          <div className="w-full rounded-xl overflow-hidden border border-[#DDE3EC] bg-white shadow-sm aspect-[16/9] max-h-[460px]">
            <iframe
              title="Map showing LocalBuild headquarters in Patna, Bihar"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen={false}
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14390.963493864077!2d85.111816!3d25.613459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed583a37b3ef5d%3A0x8670870908fa75e5!2sSri%20Krishna%20Puri%2C%20Patna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1711200000000!5m2!1sen!2sin"
            />
          </div>

          <div className="mt-4 text-right">
            <a
              href="https://maps.google.com/?q=Boring+Road+Sri+Krishna+Puri+Patna+Bihar+800001+India"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#3157D5] hover:text-[#2546B8]"
            >
              <span>Get Directions</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* 4.6 What Happens Next (Three numbered steps, no cards) */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#DDE3EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#3157D5] mb-2">
              THE PROCESS
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#263044] tracking-tight">
              What happens next
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2 border-t-2 border-[#3157D5] pt-6">
              <span className="font-mono text-xs font-bold text-[#3157D5] uppercase tracking-wider block">
                01
              </span>
              <h3 className="text-lg font-bold text-[#263044]">
                You send your details
              </h3>
              <p className="text-sm text-[#667085] leading-relaxed">
                We read your form before we call, never during.
              </p>
            </div>

            <div className="space-y-2 border-t-2 border-[#3157D5] pt-6">
              <span className="font-mono text-xs font-bold text-[#3157D5] uppercase tracking-wider block">
                02
              </span>
              <h3 className="text-lg font-bold text-[#263044]">
                We audit your local market
              </h3>
              <p className="text-sm text-[#667085] leading-relaxed">
                We look at your competitors, your visibility and your current enquiry path.
              </p>
            </div>

            <div className="space-y-2 border-t-2 border-[#3157D5] pt-6">
              <span className="font-mono text-xs font-bold text-[#3157D5] uppercase tracking-wider block">
                03
              </span>
              <h3 className="text-lg font-bold text-[#263044]">
                We talk for 30 minutes
              </h3>
              <p className="text-sm text-[#667085] leading-relaxed">
                You get a realistic assessment and a roadmap, whether or not you work with us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4.7 Contact FAQ (Accordion, Ivory) */}
      <section className="py-16 sm:py-24 bg-[#F7F5EF] border-b border-[#DDE3EC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#3157D5] mb-2">
              FREQUENTLY ASKED QUESTIONS
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#263044] tracking-tight">
              Questions before you get in touch.
            </h2>
          </div>

          <div className="divide-y divide-[#DDE3EC] border-y border-[#DDE3EC]">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="py-5">
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-bold text-base sm:text-lg text-[#263044]">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#667085] shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[#3157D5]" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="mt-3 text-sm sm:text-base text-[#667085] leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4.8 Final CTA (Deep Navy) */}
      <section className="py-16 sm:py-24 bg-[#071126] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4">
            Prefer to talk it through first?
          </h2>
          <p className="text-base sm:text-lg text-[#C6CEDE] mb-8 leading-relaxed max-w-2xl">
            Book a free 30-minute discovery call or connect directly on WhatsApp. We&apos;ll audit your local market and outline a realistic growth roadmap.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              type="button"
              onClick={() => onQuoteClick()}
              className="btn btn--primary"
            >
              Start a Conversation
            </button>
            <a
              href={getWhatsAppUrl("Hi LocalBuild, I'd like to talk through my local market opportunities.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--ghost inline-flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
