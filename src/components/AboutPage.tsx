import { ArrowRight, MessageSquare, CheckCircle, ShieldCheck } from "lucide-react";
import { getWhatsAppUrl, LOCALBUILD_PHONE, LOCALBUILD_PHONE_DISPLAY } from "../utils/whatsapp";

interface AboutPageProps {
  onQuoteClick: (prefilledService?: string, prefilledNotes?: string) => void;
  onNavigate: (pathOrId: string) => void;
}

export default function AboutPage({ onQuoteClick, onNavigate }: AboutPageProps) {
  return (
    <div className="min-h-screen bg-white text-[#263044]">
      {/* 2.2 Hero Section */}
      <section className="relative bg-[#071126] text-white border-b border-[#1C2A4A] overflow-hidden">
        {/* Photographic background with light left-side overlay on desktop */}
        <div className="absolute inset-0 z-0 hidden min-[769px]:block">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1800"
            alt="LocalBuild agency strategy team collaborating on local growth systems"
            className="w-full h-full object-cover object-center"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071126] via-[#071126]/90 to-[#071126]/40" />
        </div>

        {/* Mobile Media Container (<= 768px) */}
        <div className="min-[769px]:hidden w-full bg-[#071126] p-4 pb-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=900"
            alt="LocalBuild agency strategy team collaborating on local growth systems"
            className="w-full h-auto object-contain rounded-lg block mx-auto max-w-[500px]"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24 lg:py-32">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#7C8CFF] mb-3">
              ABOUT LOCALBUILD
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.14] mb-5 text-balance">
              We build the systems that turn local interest into booked customers.
            </h1>
            <p className="text-base sm:text-lg text-[#C6CEDE] leading-relaxed mb-8 max-w-[70ch]">
              LocalBuild is a Patna-based digital marketing agency. We build websites, run Google and Meta advertising, optimise local search visibility, and automate the follow-up that loses businesses their easiest enquiries.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                type="button"
                onClick={() => onQuoteClick()}
                className="btn btn--primary"
              >
                START A CONVERSATION
              </button>
              <button
                type="button"
                onClick={() => onNavigate("case-studies")}
                className="btn btn--ghost"
              >
                EXPLORE OUR WORK <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2.3 Why We Exist (Warm Ivory) */}
      <section className="py-16 sm:py-24 bg-[#F7F5EF] border-b border-[#DDE3EC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#3157D5] mb-3">
            WHY WE EXIST
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#263044] tracking-tight leading-snug mb-8">
            Most local businesses do not have a traffic problem. They have a follow-through problem.
          </h2>

          <div className="space-y-5 text-base sm:text-lg text-[#263044] leading-relaxed">
            <p>
              A business can rank, run ads, get calls, and still end the month short. The interest is there; what is missing is a system that captures it, routes it, answers it, and proves what it cost.
            </p>
            <p>
              LocalBuild was built around that gap. We design every engagement around one commercial outcome — qualified local customers who book, call, and pay — and we remove the parts of agency work that make that outcome harder to see: hidden media markups, vague monthly decks, and reporting that celebrates impressions.
            </p>
            <p>
              You keep ownership of your accounts, creative assets and lead history. Your media spend is billed directly by Google or Meta to your corporate card, so you always know the difference between our fee and your budget.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-[#DDE3EC]">
            <blockquote className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0B1633] tracking-tight leading-snug">
              &ldquo;Marketing should create business, not just traffic.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      {/* 2.4 What We Commit To (Numbers Block — Soft Background) */}
      <section className="py-16 sm:py-24 bg-[#F2F5FA] border-b border-[#DDE3EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#3157D5] mb-2">
              WHAT WE COMMIT TO
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#263044] tracking-tight mb-3">
              The operating terms of every LocalBuild engagement.
            </h2>
            <p className="text-base text-[#667085]">
              No inflated claims. These are the operating terms of every LocalBuild engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 sm:p-8 rounded-lg border border-[#DDE3EC]">
              <div className="font-display font-extrabold text-3xl sm:text-4xl text-[#0B1633] tracking-tight mb-2">
                36 months
              </div>
              <div className="text-sm font-bold text-[#3157D5] mb-2">Ongoing strategic support</div>
              <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                Every plan includes three full years of maintenance, campaign setup and optimisation.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-lg border border-[#DDE3EC]">
              <div className="font-display font-extrabold text-3xl sm:text-4xl text-[#0B1633] tracking-tight mb-2">
                3 years
              </div>
              <div className="text-sm font-bold text-[#3157D5] mb-2">Fixed term, no recurring retainer</div>
              <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                One-time build, priced upfront. No agency retainer markup.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-lg border border-[#DDE3EC]">
              <div className="font-display font-extrabold text-3xl sm:text-4xl text-[#0B1633] tracking-tight mb-2">
                4 systems
              </div>
              <div className="text-sm font-bold text-[#3157D5] mb-2">BUILD · GROW · REACH · AUTOMATE</div>
              <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                The four disciplines behind every engagement.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-lg border border-[#DDE3EC]">
              <div className="font-display font-extrabold text-3xl sm:text-4xl text-[#0B1633] tracking-tight mb-2">
                4 steps
              </div>
              <div className="text-sm font-bold text-[#3157D5] mb-2">UNDERSTAND · BUILD · LAUNCH · IMPROVE</div>
              <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                You always know which stage your campaign is in.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-lg border border-[#DDE3EC]">
              <div className="font-display font-extrabold text-3xl sm:text-4xl text-[#0B1633] tracking-tight mb-2">
                6 industries
              </div>
              <div className="text-sm font-bold text-[#3157D5] mb-2">Where we work</div>
              <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                Home services, healthcare, real estate, professional services, coaching &amp; education, retail.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-lg border border-[#DDE3EC]">
              <div className="font-display font-extrabold text-3xl sm:text-4xl text-[#0B1633] tracking-tight mb-2">
                24 hours
              </div>
              <div className="text-sm font-bold text-[#3157D5] mb-2">Enquiry response window</div>
              <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                Every strategy request answered within one working day.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-lg border border-[#DDE3EC] sm:col-span-2 lg:col-span-3">
              <div className="font-display font-extrabold text-2xl sm:text-3xl text-[#0B1633] tracking-tight mb-2">
                Mon – Sat · 9:30 AM – 7:30 PM IST
              </div>
              <div className="text-sm font-bold text-[#3157D5] mb-1">Operating hours</div>
              <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                Boring Road, Sri Krishna Puri, Patna, Bihar 800001, India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2.5 The Accountability Model (Deep Navy) */}
      <section className="py-16 sm:py-24 bg-[#0B1633] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#7C8CFF] mb-2">
              ACCOUNTABILITY
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              The Accountability Model
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/15 border border-white/15 rounded-lg bg-[#071126]/60">
            {/* Traditional Agencies */}
            <div className="p-6 sm:p-10 space-y-5">
              <h3 className="font-display font-bold text-lg text-zinc-400 uppercase tracking-wider">
                Traditional Agencies
              </h3>
              <ul className="space-y-4 text-sm sm:text-base text-zinc-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold">✕</span>
                  <span>Focus on clicks &amp; impressions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold">✕</span>
                  <span>Markup media spend</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold">✕</span>
                  <span>Vague monthly reports</span>
                </li>
              </ul>
            </div>

            {/* LocalBuild */}
            <div className="p-6 sm:p-10 space-y-5 bg-[#3157D5]/10">
              <h3 className="font-display font-bold text-lg text-[#7C8CFF] uppercase tracking-wider">
                LocalBuild
              </h3>
              <ul className="space-y-4 text-sm sm:text-base text-white">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#168A62] shrink-0" />
                  <span>Focus on phone calls &amp; consultations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#168A62] shrink-0" />
                  <span>Direct billing from Google &amp; Meta</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#168A62] shrink-0" />
                  <span>Clear reporting &amp; verified leads</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center sm:text-left">
            <button
              type="button"
              onClick={() => onNavigate("/contact")}
              className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#7C8CFF] hover:text-white transition-colors cursor-pointer"
            >
              <span>Discuss Your Growth Plan</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 2.6 Who You Work With (White) */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#DDE3EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#3157D5] mb-2">
              WHO YOU WORK WITH
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#263044] tracking-tight mb-3">
              Five roles carry your engagement, and each has one job.
            </h2>
            <p className="text-base text-[#667085]">
              You will not be passed to a junior team after the pitch. Five roles carry your engagement, and each has one job.
            </p>
          </div>

          <div className="divide-y divide-[#DDE3EC] border-y border-[#DDE3EC]">
            {/* Role 1 */}
            <div className="py-6 sm:py-8 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              <div>
                <span className="font-mono text-xs font-bold text-[#3157D5] uppercase tracking-wider block mb-1">
                  01 · Commercial Direction
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[#263044]">
                  Strategy lead
                </h3>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#667085] mb-1">What they own</p>
                <p className="text-sm text-[#263044] leading-relaxed">
                  Owns the commercial plan. Runs your discovery call, sizes the opportunity in your market, and reviews performance with you.
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#667085] mb-1">You receive</p>
                <p className="text-sm text-[#263044] leading-relaxed">
                  The growth plan and the review calls.
                </p>
              </div>
            </div>

            {/* Role 2 */}
            <div className="py-6 sm:py-8 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              <div>
                <span className="font-mono text-xs font-bold text-[#3157D5] uppercase tracking-wider block mb-1">
                  02 · Acquisition
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[#263044]">
                  Paid media lead
                </h3>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#667085] mb-1">What they own</p>
                <p className="text-sm text-[#263044] leading-relaxed">
                  Owns Google Ads and Meta Ads build, budgets, search terms and campaign structure.
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#667085] mb-1">You receive</p>
                <p className="text-sm text-[#263044] leading-relaxed">
                  Campaign structure and the live account.
                </p>
              </div>
            </div>

            {/* Role 3 */}
            <div className="py-6 sm:py-8 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              <div>
                <span className="font-mono text-xs font-bold text-[#3157D5] uppercase tracking-wider block mb-1">
                  03 · Local Visibility
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[#263044]">
                  Local visibility lead
                </h3>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#667085] mb-1">What they own</p>
                <p className="text-sm text-[#263044] leading-relaxed">
                  Owns Google Business Profile, local search visibility, citations and keyword tracking.
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#667085] mb-1">You receive</p>
                <p className="text-sm text-[#263044] leading-relaxed">
                  Profile optimisation and keyword tracking reports.
                </p>
              </div>
            </div>

            {/* Role 4 */}
            <div className="py-6 sm:py-8 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              <div>
                <span className="font-mono text-xs font-bold text-[#3157D5] uppercase tracking-wider block mb-1">
                  04 · Technical Foundation
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[#263044]">
                  Build and engineering lead
                </h3>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#667085] mb-1">What they own</p>
                <p className="text-sm text-[#263044] leading-relaxed">
                  Owns your website, landing pages, page speed, tracking and automations.
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#667085] mb-1">You receive</p>
                <p className="text-sm text-[#263044] leading-relaxed">
                  The built site, the tracking layer and the automations.
                </p>
              </div>
            </div>

            {/* Role 5 */}
            <div className="py-6 sm:py-8 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              <div>
                <span className="font-mono text-xs font-bold text-[#3157D5] uppercase tracking-wider block mb-1">
                  05 · Accountability
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[#263044]">
                  Client reporting contact
                </h3>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#667085] mb-1">What they own</p>
                <p className="text-sm text-[#263044] leading-relaxed">
                  Owns your reporting and your questions.
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#667085] mb-1">You receive</p>
                <p className="text-sm text-[#263044] leading-relaxed">
                  Plain-English performance summaries and a single person to ask.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2.7 Values */}
      <section className="py-16 sm:py-24 bg-[#F2F5FA] border-b border-[#DDE3EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#3157D5] mb-2">
              WHAT WE STAND FOR
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#263044] tracking-tight">
              Four rules we do not bend.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-lg border border-[#DDE3EC]">
              <div className="font-mono text-xs font-bold text-[#3157D5] uppercase mb-2">Rule 01</div>
              <h3 className="text-lg font-bold text-[#263044] mb-2">Direct accountability</h3>
              <p className="text-sm text-[#667085] leading-relaxed">
                If we cannot show what a rupee of your budget produced, we have not finished the job.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-lg border border-[#DDE3EC]">
              <div className="font-mono text-xs font-bold text-[#3157D5] uppercase mb-2">Rule 02</div>
              <h3 className="text-lg font-bold text-[#263044] mb-2">Plain-English reporting</h3>
              <p className="text-sm text-[#667085] leading-relaxed">
                You should be able to read your report without a marketing glossary. Calls, forms, bookings, cost per lead.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-lg border border-[#DDE3EC]">
              <div className="font-mono text-xs font-bold text-[#3157D5] uppercase mb-2">Rule 03</div>
              <h3 className="text-lg font-bold text-[#263044] mb-2">No markup on your media</h3>
              <p className="text-sm text-[#667085] leading-relaxed">
                Your ad spend goes to Google or Meta, billed to your card. Our fee is our fee, stated upfront.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-lg border border-[#DDE3EC]">
              <div className="font-mono text-xs font-bold text-[#3157D5] uppercase mb-2">Rule 04</div>
              <h3 className="text-lg font-bold text-[#263044] mb-2">Build for the phone call</h3>
              <p className="text-sm text-[#667085] leading-relaxed">
                Every page, ad and follow-up is designed for the moment a customer decides to call, message or book.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2.8 How We Work */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#DDE3EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#3157D5] mb-2">
              HOW WE WORK
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#263044] tracking-tight">
              A clear, disciplined process.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 border border-[#DDE3EC] rounded-lg bg-[#F2F5FA]">
              <span className="font-mono text-xs font-bold text-[#3157D5] block mb-2">01</span>
              <h3 className="font-display font-bold text-base text-[#263044] mb-2">UNDERSTAND</h3>
              <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                We learn about your business, customers and goals.
              </p>
            </div>

            <div className="p-6 border border-[#DDE3EC] rounded-lg bg-[#F2F5FA]">
              <span className="font-mono text-xs font-bold text-[#3157D5] block mb-2">02</span>
              <h3 className="font-display font-bold text-base text-[#263044] mb-2">BUILD</h3>
              <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                We create the website, campaigns and systems.
              </p>
            </div>

            <div className="p-6 border border-[#DDE3EC] rounded-lg bg-[#F2F5FA]">
              <span className="font-mono text-xs font-bold text-[#3157D5] block mb-2">03</span>
              <h3 className="font-display font-bold text-base text-[#263044] mb-2">LAUNCH</h3>
              <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                Everything goes live with proper tracking.
              </p>
            </div>

            <div className="p-6 border border-[#DDE3EC] rounded-lg bg-[#F2F5FA]">
              <span className="font-mono text-xs font-bold text-[#3157D5] block mb-2">04</span>
              <h3 className="font-display font-bold text-base text-[#263044] mb-2">IMPROVE</h3>
              <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                We measure, learn and continuously optimize.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center sm:text-left">
            <button
              type="button"
              onClick={() => onNavigate("/contact")}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#3157D5] hover:text-[#2546B8] transition-colors cursor-pointer"
            >
              <span>Ready to start with Step 01? Schedule a 30-minute discovery call →</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2.9 Final CTA */}
      <section className="py-16 sm:py-24 bg-[#071126] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4">
            Let&apos;s build something that grows your business.
          </h2>
          <p className="text-base sm:text-lg text-[#C6CEDE] mb-8 leading-relaxed max-w-2xl">
            Schedule a free 30-minute discovery call or connect directly on WhatsApp. We&apos;ll audit your local market and outline a realistic growth roadmap.
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
              href={getWhatsAppUrl("Hi LocalBuild, I'd like to schedule a discovery call about growing my business.")}
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
