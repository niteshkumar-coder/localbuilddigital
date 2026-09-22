import { useState } from "react";
import { ArrowRight, ChevronDown, CheckCircle, MessageSquare } from "lucide-react";
import { getWhatsAppUrl } from "../utils/whatsapp";

interface ServicesPageProps {
  onQuoteClick: (prefilledService?: string, prefilledNotes?: string) => void;
  onNavigate: (pathOrId: string) => void;
}

export default function ServicesPage({ onQuoteClick, onNavigate }: ServicesPageProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const faqs = [
    {
      q: "Which services are included in a package?",
      a: "The three packages combine local visibility, advertising and landing pages. Local Authority covers Google Business Profile optimisation, keyword tracking, schema, citations and one landing page. Market Dominance adds a Google Ads and Meta Ads campaign build, competitor monitoring and an A/B landing page funnel. City Saturation adds multi-city maps pack strategy, unlimited keyword monitoring and unlimited funnel builds. Services outside your package — such as YouTube growth or business automation — can be quoted separately."
    },
    {
      q: "Can I buy a single service instead of a package?",
      a: "Yes. Individual services are available on request. If you only need one system, say so on the discovery call and we will scope it on its own rather than selling you a package you do not need."
    },
    {
      q: "How long does a website or campaign take?",
      a: "Every engagement runs through the same four stages — UNDERSTAND, BUILD, LAUNCH, IMPROVE. The discovery call comes first, then the build, then a tracked launch before any optimisation begins. Exact timelines depend on how quickly content, access and approvals come back from your side, and are confirmed in writing before work starts."
    },
    {
      q: "Do you handle the advertising budget as well?",
      a: "No. Your media spend is billed directly by Google or Meta to your corporate card. We build, manage and optimise the campaigns, but we never resell your media budget and never add a markup to it."
    },
    {
      q: "Who owns the accounts, website and creative?",
      a: "You do. You retain permanent ownership of your accounts, creative assets and lead history. Nothing is held hostage at the end of the engagement."
    },
    {
      q: "Do you guarantee a specific number of leads or revenue?",
      a: "No, and you should be cautious of anyone who does. A realistic estimate can be modelled in the ROI calculator on our homepage, but actual results vary with competition, market demand and how quickly your team responds to enquiries."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-[#263044]">
      {/* 3.2 Hero Section (Flat navy gradient hero) */}
      <section className="bg-[#071126] text-white border-b border-[#1C2A4A] py-14 sm:py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#7C8CFF] mb-3">
              OUR SERVICES
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.14] mb-4 text-balance">
              Four disciplined systems. Thirteen services. One commercial outcome.
            </h1>
            <p className="text-base sm:text-lg text-[#C6CEDE] leading-relaxed mb-6 max-w-[70ch]">
              Everything your business needs to turn local search interest into verified phone calls, booked appointments, and long-term revenue.
            </p>

            <div className="mb-8">
              <button
                type="button"
                onClick={() => scrollToSection("pricing")}
                className="text-xs sm:text-sm text-[#7C8CFF] hover:text-white underline underline-offset-4 cursor-pointer"
              >
                Not sure where to start? See Pricing →
              </button>
            </div>

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

      {/* 3.3 Capability Overview (Four editorial rows) */}
      <section className="py-12 sm:py-16 bg-[#F7F5EF] border-b border-[#DDE3EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#3157D5] mb-2">
            OVERVIEW
          </p>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#263044] mb-8">
            Four disciplined systems to acquire and retain local customers.
          </h2>

          <div className="divide-y divide-[#DDE3EC] border-y border-[#DDE3EC]">
            <div className="py-4 sm:py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs font-extrabold text-[#3157D5]">01</span>
                <span className="font-bold text-base text-[#263044]">BUILD</span>
                <span className="text-sm text-[#667085]">— Websites &amp; digital experiences that turn visitors into enquiries.</span>
              </div>
              <button
                type="button"
                onClick={() => scrollToSection("build")}
                className="text-xs font-bold text-[#3157D5] hover:text-[#2546B8] self-start sm:self-auto cursor-pointer"
              >
                Jump to BUILD ↓
              </button>
            </div>

            <div className="py-4 sm:py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs font-extrabold text-[#3157D5]">02</span>
                <span className="font-bold text-base text-[#263044]">GROW</span>
                <span className="text-sm text-[#667085]">— Search, ads and local visibility built around measurable growth.</span>
              </div>
              <button
                type="button"
                onClick={() => scrollToSection("grow")}
                className="text-xs font-bold text-[#3157D5] hover:text-[#2546B8] self-start sm:self-auto cursor-pointer"
              >
                Jump to GROW ↓
              </button>
            </div>

            <div className="py-4 sm:py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs font-extrabold text-[#3157D5]">03</span>
                <span className="font-bold text-base text-[#263044]">REACH</span>
                <span className="text-sm text-[#667085]">— Content, video and authority marketing that make you the first choice.</span>
              </div>
              <button
                type="button"
                onClick={() => scrollToSection("reach")}
                className="text-xs font-bold text-[#3157D5] hover:text-[#2546B8] self-start sm:self-auto cursor-pointer"
              >
                Jump to REACH ↓
              </button>
            </div>

            <div className="py-4 sm:py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs font-extrabold text-[#3157D5]">04</span>
                <span className="font-bold text-base text-[#263044]">AUTOMATE</span>
                <span className="text-sm text-[#667085]">— Lead pipelines and systems that eliminate lost inquiries.</span>
              </div>
              <button
                type="button"
                onClick={() => scrollToSection("automate")}
                className="text-xs font-bold text-[#3157D5] hover:text-[#2546B8] self-start sm:self-auto cursor-pointer"
              >
                Jump to AUTOMATE ↓
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3.4 BUILD — 3 Services */}
      <section id="build" className="py-16 sm:py-24 bg-white border-b border-[#DDE3EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#3157D5] mb-2">
              01 · BUILD
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#263044] tracking-tight mb-3">
              Websites and digital experiences that give customers a reason to choose you.
            </h2>
            <p className="text-base text-[#667085]">
              Built for speed, clarity and one job — turning an interested visitor into an enquiry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="p-6 sm:p-8 rounded-lg border border-[#DDE3EC] bg-[#F2F5FA] flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#3157D5] uppercase tracking-wider block mb-2">Service 01</span>
                <h3 className="text-xl font-bold text-[#263044] mb-3">Website Design</h3>
                <p className="text-xs sm:text-sm text-[#263044] leading-relaxed mb-4">
                  A fast, mobile-first website structured around the decision your customer is making. Clear service pages, obvious next steps, a one-tap call and WhatsApp path, and speed that holds up on a weak mobile connection.
                </p>
                <div className="mb-4">
                  <p className="text-xs font-bold uppercase text-[#667085] mb-2">Deliverables:</p>
                  <ul className="text-xs text-[#667085] space-y-1.5 list-disc pl-4">
                    <li>A complete high-converting mobile website</li>
                    <li>A dedicated speed-optimised landing page</li>
                    <li>1-tap call and WhatsApp lead routing</li>
                    <li>Contact and enquiry forms with validation</li>
                    <li>Tracking installed so every enquiry is attributable</li>
                  </ul>
                </div>
              </div>
              <div className="pt-4 border-t border-[#DDE3EC]">
                <p className="text-xs text-[#667085] mb-3">
                  <strong className="text-[#263044]">Ideal for:</strong> Businesses with no site, an outdated site, or a site that gets visits but no enquiries.
                </p>
                <button
                  type="button"
                  onClick={() => onQuoteClick("Website Design")}
                  className="w-full py-2.5 px-4 rounded bg-[#3157D5] hover:bg-[#2546B8] text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  Enquire About Website Design
                </button>
              </div>
            </div>

            {/* Service 2 */}
            <div className="p-6 sm:p-8 rounded-lg border border-[#DDE3EC] bg-[#F2F5FA] flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#3157D5] uppercase tracking-wider block mb-2">Service 02</span>
                <h3 className="text-xl font-bold text-[#263044] mb-3">Application Design</h3>
                <p className="text-xs sm:text-sm text-[#263044] leading-relaxed mb-4">
                  A focused mobile-first application or client portal when a website is not enough — booking flows, quotation requests, intake forms, and customer self-service that removes admin from your team.
                </p>
                <div className="mb-4">
                  <p className="text-xs font-bold uppercase text-[#667085] mb-2">Deliverables:</p>
                  <ul className="text-xs text-[#667085] space-y-1.5 list-disc pl-4">
                    <li>Mobile application screens designed for one primary task</li>
                    <li>A booking or intake flow with validation</li>
                    <li>A customer-facing status or confirmation path</li>
                    <li>Analytics wired to each step of the flow</li>
                  </ul>
                </div>
              </div>
              <div className="pt-4 border-t border-[#DDE3EC]">
                <p className="text-xs text-[#667085] mb-3">
                  <strong className="text-[#263044]">Ideal for:</strong> Clinics, service businesses and coaching operations that take bookings or structured intake.
                </p>
                <button
                  type="button"
                  onClick={() => onQuoteClick("Application Design")}
                  className="w-full py-2.5 px-4 rounded bg-[#3157D5] hover:bg-[#2546B8] text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  Enquire About Application Design
                </button>
              </div>
            </div>

            {/* Service 3 */}
            <div className="p-6 sm:p-8 rounded-lg border border-[#DDE3EC] bg-[#F2F5FA] flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#3157D5] uppercase tracking-wider block mb-2">Service 03</span>
                <h3 className="text-xl font-bold text-[#263044] mb-3">Ecommerce</h3>
                <p className="text-xs sm:text-sm text-[#263044] leading-relaxed mb-4">
                  A store built for local buyers — clean product pages, honest pricing and shipping clarity, and a checkout that does not lose the customer at the last step.
                </p>
                <div className="mb-4">
                  <p className="text-xs font-bold uppercase text-[#667085] mb-2">Deliverables:</p>
                  <ul className="text-xs text-[#667085] space-y-1.5 list-disc pl-4">
                    <li>Product and category page structure</li>
                    <li>Checkout and payment path configured</li>
                    <li>Local delivery and pickup messaging</li>
                    <li>Cart-abandonment follow-up flow</li>
                  </ul>
                </div>
              </div>
              <div className="pt-4 border-t border-[#DDE3EC]">
                <p className="text-xs text-[#667085] mb-3">
                  <strong className="text-[#263044]">Ideal for:</strong> Retail and local businesses selling physical products.
                </p>
                <button
                  type="button"
                  onClick={() => onQuoteClick("Ecommerce")}
                  className="w-full py-2.5 px-4 rounded bg-[#3157D5] hover:bg-[#2546B8] text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  Enquire About Ecommerce
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3.5 GROW — 4 Services */}
      <section id="grow" className="py-16 sm:py-24 bg-[#F2F5FA] border-b border-[#DDE3EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#3157D5] mb-2">
              02 · GROW
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#263044] tracking-tight mb-3">
              Search, ads and local visibility built around measurable growth.
            </h2>
            <p className="text-base text-[#667085]">
              Campaigns judged on calls and bookings, never on impressions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Service 4 */}
            <div className="p-6 sm:p-8 rounded-lg border border-[#DDE3EC] bg-white flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#3157D5] uppercase tracking-wider block mb-2">Service 04</span>
                <h3 className="text-xl font-bold text-[#263044] mb-3">Google Ads</h3>
                <p className="text-xs sm:text-sm text-[#263044] leading-relaxed mb-4">
                  Search campaigns built around the moment someone needs you now — urgent repair, immediate consultation, high-intent purchase — with negative keyword discipline so your budget stops paying for curiosity.
                </p>
                <div className="mb-4">
                  <p className="text-xs font-bold uppercase text-[#667085] mb-2">Deliverables:</p>
                  <ul className="text-xs text-[#667085] space-y-1.5 list-disc pl-4">
                    <li>Google Ads campaign build</li>
                    <li>Search-term and negative keyword management</li>
                    <li>Ad copy and landing page alignment</li>
                    <li>Conversion tracking on calls, forms and WhatsApp</li>
                    <li>Monthly performance report in plain English</li>
                  </ul>
                </div>
              </div>
              <div className="pt-4 border-t border-[#DDE3EC]">
                <p className="text-xs text-[#667085] mb-3">
                  <strong className="text-[#263044]">Ideal for:</strong> Businesses that want enquiries this month, not next quarter.
                </p>
                <button
                  type="button"
                  onClick={() => onQuoteClick("Google Ads")}
                  className="w-full py-2.5 px-4 rounded bg-[#3157D5] hover:bg-[#2546B8] text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  Enquire About Google Ads
                </button>
              </div>
            </div>

            {/* Service 5 */}
            <div className="p-6 sm:p-8 rounded-lg border border-[#DDE3EC] bg-white flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#3157D5] uppercase tracking-wider block mb-2">Service 05</span>
                <h3 className="text-xl font-bold text-[#263044] mb-3">Meta Ads</h3>
                <p className="text-xs sm:text-sm text-[#263044] leading-relaxed mb-4">
                  Facebook and Instagram campaigns that put your offer in front of people in your service area, with creative built to stop the scroll and a landing path that matches the promise in the ad.
                </p>
                <div className="mb-4">
                  <p className="text-xs font-bold uppercase text-[#667085] mb-2">Deliverables:</p>
                  <ul className="text-xs text-[#667085] space-y-1.5 list-disc pl-4">
                    <li>Meta campaign build and audience structure</li>
                    <li>Creative concepts and ad variants</li>
                    <li>Copy aligned to the landing page</li>
                    <li>Retargeting for visitors who did not convert</li>
                    <li>Conversion tracking</li>
                  </ul>
                </div>
              </div>
              <div className="pt-4 border-t border-[#DDE3EC]">
                <p className="text-xs text-[#667085] mb-3">
                  <strong className="text-[#263044]">Ideal for:</strong> Consumer-facing local businesses with visual offers.
                </p>
                <button
                  type="button"
                  onClick={() => onQuoteClick("Meta Ads")}
                  className="w-full py-2.5 px-4 rounded bg-[#3157D5] hover:bg-[#2546B8] text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  Enquire About Meta Ads
                </button>
              </div>
            </div>

            {/* Service 6 */}
            <div className="p-6 sm:p-8 rounded-lg border border-[#DDE3EC] bg-white flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#3157D5] uppercase tracking-wider block mb-2">Service 06</span>
                <h3 className="text-xl font-bold text-[#263044] mb-3">Google Business Profile</h3>
                <p className="text-xs sm:text-sm text-[#263044] leading-relaxed mb-4">
                  Your profile is often the first thing a local customer sees. We complete and optimise the fields most businesses leave empty, then keep it current so it keeps earning calls.
                </p>
                <div className="mb-4">
                  <p className="text-xs font-bold uppercase text-[#667085] mb-2">Deliverables:</p>
                  <ul className="text-xs text-[#667085] space-y-1.5 list-disc pl-4">
                    <li>Google Business Profile (GBP) deep optimization</li>
                    <li>Categories, services and attributes completed</li>
                    <li>Photos, posts and Q&amp;A maintained</li>
                    <li>Review response guidance</li>
                    <li>Weekly local search keyword tracking</li>
                  </ul>
                </div>
              </div>
              <div className="pt-4 border-t border-[#DDE3EC]">
                <p className="text-xs text-[#667085] mb-3">
                  <strong className="text-[#263044]">Ideal for:</strong> Any business relying on &quot;near me&quot; searches.
                </p>
                <button
                  type="button"
                  onClick={() => onQuoteClick("Google Business Profile")}
                  className="w-full py-2.5 px-4 rounded bg-[#3157D5] hover:bg-[#2546B8] text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  Enquire About GBP Optimization
                </button>
              </div>
            </div>

            {/* Service 7 */}
            <div className="p-6 sm:p-8 rounded-lg border border-[#DDE3EC] bg-white flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#3157D5] uppercase tracking-wider block mb-2">Service 07</span>
                <h3 className="text-xl font-bold text-[#263044] mb-3">Local SEO</h3>
                <p className="text-xs sm:text-sm text-[#263044] leading-relaxed mb-4">
                  Making your business the obvious answer for searches in your area — maps visibility, local schema, citations, and pages that match how locals actually search.
                </p>
                <div className="mb-4">
                  <p className="text-xs font-bold uppercase text-[#667085] mb-2">Deliverables:</p>
                  <ul className="text-xs text-[#667085] space-y-1.5 list-disc pl-4">
                    <li>Local schema data structure setup</li>
                    <li>Directory listings &amp; core citation synchronization</li>
                    <li>Location and service page structure</li>
                    <li>Competitor keyword monitoring</li>
                    <li>Maps pack ranking strategy &amp; weekly rank tracking</li>
                  </ul>
                </div>
              </div>
              <div className="pt-4 border-t border-[#DDE3EC]">
                <p className="text-xs text-[#667085] mb-3">
                  <strong className="text-[#263044]">Ideal for:</strong> Businesses competing with larger brands for the same local searches.
                </p>
                <button
                  type="button"
                  onClick={() => onQuoteClick("Local SEO")}
                  className="w-full py-2.5 px-4 rounded bg-[#3157D5] hover:bg-[#2546B8] text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  Enquire About Local SEO
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3.6 REACH — 3 Services */}
      <section id="reach" className="py-16 sm:py-24 bg-white border-b border-[#DDE3EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#3157D5] mb-2">
              03 · REACH
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#263044] tracking-tight mb-3">
              Content, video and authority marketing that make you the first choice.
            </h2>
            <p className="text-base text-[#667085]">
              So that when the search happens, your name is already familiar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 8 */}
            <div className="p-6 sm:p-8 rounded-lg border border-[#DDE3EC] bg-[#F2F5FA] flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#3157D5] uppercase tracking-wider block mb-2">Service 08</span>
                <h3 className="text-xl font-bold text-[#263044] mb-3">YouTube Growth</h3>
                <p className="text-xs sm:text-sm text-[#263044] leading-relaxed mb-4">
                  Video that answers the questions your customers are already asking — service explainers, before-and-after work, and short-form cutdowns that build trust before the first call.
                </p>
                <div className="mb-4">
                  <p className="text-xs font-bold uppercase text-[#667085] mb-2">Deliverables:</p>
                  <ul className="text-xs text-[#667085] space-y-1.5 list-disc pl-4">
                    <li>Channel and playlist structure</li>
                    <li>Titles, descriptions and thumbnail direction</li>
                    <li>A repeatable short-form cutdown format</li>
                    <li>Publishing schedule aligned to your seasonal demand</li>
                  </ul>
                </div>
              </div>
              <div className="pt-4 border-t border-[#DDE3EC]">
                <p className="text-xs text-[#667085] mb-3">
                  <strong className="text-[#263044]">Ideal for:</strong> Businesses whose customers need reassurance before buying.
                </p>
                <button
                  type="button"
                  onClick={() => onQuoteClick("YouTube Growth")}
                  className="w-full py-2.5 px-4 rounded bg-[#3157D5] hover:bg-[#2546B8] text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  Enquire About YouTube Growth
                </button>
              </div>
            </div>

            {/* Service 9 */}
            <div className="p-6 sm:p-8 rounded-lg border border-[#DDE3EC] bg-[#F2F5FA] flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#3157D5] uppercase tracking-wider block mb-2">Service 09</span>
                <h3 className="text-xl font-bold text-[#263044] mb-3">Content &amp; Creative</h3>
                <p className="text-xs sm:text-sm text-[#263044] leading-relaxed mb-4">
                  Written and visual content that makes your expertise visible — service pages, guides, and creative that carries one clear message instead of five.
                </p>
                <div className="mb-4">
                  <p className="text-xs font-bold uppercase text-[#667085] mb-2">Deliverables:</p>
                  <ul className="text-xs text-[#667085] space-y-1.5 list-disc pl-4">
                    <li>Content plan mapped to your services</li>
                    <li>Service and location page copy</li>
                    <li>Ad and social creative concepts</li>
                    <li>Consistent visual direction across all assets</li>
                  </ul>
                </div>
              </div>
              <div className="pt-4 border-t border-[#DDE3EC]">
                <p className="text-xs text-[#667085] mb-3">
                  <strong className="text-[#263044]">Ideal for:</strong> Businesses with strong expertise that is invisible online.
                </p>
                <button
                  type="button"
                  onClick={() => onQuoteClick("Content & Creative")}
                  className="w-full py-2.5 px-4 rounded bg-[#3157D5] hover:bg-[#2546B8] text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  Enquire About Content &amp; Creative
                </button>
              </div>
            </div>

            {/* Service 10 */}
            <div className="p-6 sm:p-8 rounded-lg border border-[#DDE3EC] bg-[#F2F5FA] flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#3157D5] uppercase tracking-wider block mb-2">Service 10</span>
                <h3 className="text-xl font-bold text-[#263044] mb-3">Local Marketing</h3>
                <p className="text-xs sm:text-sm text-[#263044] leading-relaxed mb-4">
                  The local signals that compound — community presence, offers tied to real demand, and coordination between your profile, your ads and your website so the message stays consistent.
                </p>
                <div className="mb-4">
                  <p className="text-xs font-bold uppercase text-[#667085] mb-2">Deliverables:</p>
                  <ul className="text-xs text-[#667085] space-y-1.5 list-disc pl-4">
                    <li>Local offer planning</li>
                    <li>Profile, ad and landing page message alignment</li>
                    <li>Local partnership and event visibility guidance</li>
                    <li>Monthly local visibility summary</li>
                  </ul>
                </div>
              </div>
              <div className="pt-4 border-t border-[#DDE3EC]">
                <p className="text-xs text-[#667085] mb-3">
                  <strong className="text-[#263044]">Ideal for:</strong> Businesses whose reputation is built neighbourhood by neighbourhood.
                </p>
                <button
                  type="button"
                  onClick={() => onQuoteClick("Local Marketing")}
                  className="w-full py-2.5 px-4 rounded bg-[#3157D5] hover:bg-[#2546B8] text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  Enquire About Local Marketing
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3.7 AUTOMATE — 3 Services */}
      <section id="automate" className="py-16 sm:py-24 bg-[#F2F5FA] border-b border-[#DDE3EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#3157D5] mb-2">
              04 · AUTOMATE
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#263044] tracking-tight mb-3">
              Lead pipelines and systems that eliminate lost inquiries.
            </h2>
            <p className="text-base text-[#667085]">
              The cheapest new customer is the enquiry you already paid for and then did not answer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 11 */}
            <div className="p-6 sm:p-8 rounded-lg border border-[#DDE3EC] bg-white flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#3157D5] uppercase tracking-wider block mb-2">Service 11</span>
                <h3 className="text-xl font-bold text-[#263044] mb-3">AI Automation</h3>
                <p className="text-xs sm:text-sm text-[#263044] leading-relaxed mb-4">
                  Automated first response for every enquiry, qualification questions that filter out unqualified leads, and follow-up that runs without your team remembering to do it.
                </p>
                <div className="mb-4">
                  <p className="text-xs font-bold uppercase text-[#667085] mb-2">Deliverables:</p>
                  <ul className="text-xs text-[#667085] space-y-1.5 list-disc pl-4">
                    <li>Automated enquiry acknowledgement</li>
                    <li>Qualification questions capturing budget, locality and timeline</li>
                    <li>Chat and WhatsApp trigger flows</li>
                    <li>Handover rules to a human when it matters</li>
                  </ul>
                </div>
              </div>
              <div className="pt-4 border-t border-[#DDE3EC]">
                <p className="text-xs text-[#667085] mb-3">
                  <strong className="text-[#263044]">Ideal for:</strong> Businesses losing enquiries to slow first response.
                </p>
                <button
                  type="button"
                  onClick={() => onQuoteClick("AI Automation")}
                  className="w-full py-2.5 px-4 rounded bg-[#3157D5] hover:bg-[#2546B8] text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  Enquire About AI Automation
                </button>
              </div>
            </div>

            {/* Service 12 */}
            <div className="p-6 sm:p-8 rounded-lg border border-[#DDE3EC] bg-white flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#3157D5] uppercase tracking-wider block mb-2">Service 12</span>
                <h3 className="text-xl font-bold text-[#263044] mb-3">Business Automation</h3>
                <p className="text-xs sm:text-sm text-[#263044] leading-relaxed mb-4">
                  Removing the manual steps between an enquiry and a booked job — routing, reminders, confirmations and the internal handoffs that quietly cost you hours every week.
                </p>
                <div className="mb-4">
                  <p className="text-xs font-bold uppercase text-[#667085] mb-2">Deliverables:</p>
                  <ul className="text-xs text-[#667085] space-y-1.5 list-disc pl-4">
                    <li>Lead routing to the right person</li>
                    <li>Appointment reminders and confirmation flow</li>
                    <li>Internal handoff and status tracking</li>
                    <li>Follow-up sequences for unconverted enquiries</li>
                  </ul>
                </div>
              </div>
              <div className="pt-4 border-t border-[#DDE3EC]">
                <p className="text-xs text-[#667085] mb-3">
                  <strong className="text-[#263044]">Ideal for:</strong> Teams where enquiries arrive on multiple numbers and channels.
                </p>
                <button
                  type="button"
                  onClick={() => onQuoteClick("Business Automation")}
                  className="w-full py-2.5 px-4 rounded bg-[#3157D5] hover:bg-[#2546B8] text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  Enquire About Business Automation
                </button>
              </div>
            </div>

            {/* Service 13 */}
            <div className="p-6 sm:p-8 rounded-lg border border-[#DDE3EC] bg-white flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#3157D5] uppercase tracking-wider block mb-2">Service 13</span>
                <h3 className="text-xl font-bold text-[#263044] mb-3">Growth Systems</h3>
                <p className="text-xs sm:text-sm text-[#263044] leading-relaxed mb-4">
                  The reporting layer that tells you which channel produced which customer, and what the next rupee of budget should do. One dashboard, one commercial story.
                </p>
                <div className="mb-4">
                  <p className="text-xs font-bold uppercase text-[#667085] mb-2">Deliverables:</p>
                  <ul className="text-xs text-[#667085] space-y-1.5 list-disc pl-4">
                    <li>Conversion tracking across calls, forms and WhatsApp</li>
                    <li>Cost-per-lead and cost-per-customer reporting</li>
                    <li>Channel comparison and budget reallocation guidance</li>
                    <li>Continuous CRO form tracking &amp; monthly review call</li>
                  </ul>
                </div>
              </div>
              <div className="pt-4 border-t border-[#DDE3EC]">
                <p className="text-xs text-[#667085] mb-3">
                  <strong className="text-[#263044]">Ideal for:</strong> Businesses spending on more than one channel and guessing which one works.
                </p>
                <button
                  type="button"
                  onClick={() => onQuoteClick("Growth Systems")}
                  className="w-full py-2.5 px-4 rounded bg-[#3157D5] hover:bg-[#2546B8] text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  Enquire About Growth Systems
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3.8 Pricing (Navy Band) */}
      <section id="pricing" className="py-16 sm:py-24 bg-[#0B1633] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#7C8CFF] mb-2">
              PRICING &amp; PACKAGES
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-3">
              Transparent packages with 3 years of support.
            </h2>
            <p className="text-base text-[#C6CEDE]">
              We provide 3 full years of technical maintenance, strategic campaign setup, and ongoing optimizations without recurring agency retainer markups.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Plan 1 */}
            <div className="p-6 sm:p-8 rounded-lg border border-white/15 bg-[#071126]/80 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 block mb-1">
                  PLAN 1
                </span>
                <h3 className="text-xl font-bold text-white mb-2">Local Authority</h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white font-display">₹19,999</span>
                  <span className="text-xs text-zinc-400">/ 3 years</span>
                </div>
                <p className="text-xs text-[#7C8CFF] font-medium mb-4">
                  One-time build &amp; 36 months ongoing strategic support
                </p>
                <p className="text-xs sm:text-sm text-zinc-300 mb-6">
                  For businesses building their digital foundation.
                </p>
                <div className="space-y-2 text-xs text-zinc-300 border-t border-white/10 pt-4 mb-6">
                  <p className="font-bold text-white uppercase text-[10px] tracking-wider mb-2">Core Inclusions:</p>
                  <p>• Google Business Profile (GBP) deep optimization</p>
                  <p>• Weekly local search keyword tracking (25 terms)</p>
                  <p>• Local schema data structure setup</p>
                  <p>• Directory listings &amp; core citation synchronization</p>
                  <p>• 1 dedicated speed-optimized landing page</p>
                </div>
              </div>
              <div className="space-y-2 pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => onQuoteClick("Local Authority Plan", "I would like to choose the Local Authority plan (₹19,999 / 3 years).")}
                  className="w-full py-3 px-4 rounded bg-[#3157D5] hover:bg-[#2546B8] text-white text-xs font-bold uppercase tracking-wide transition-colors cursor-pointer"
                >
                  Choose Plan
                </button>
              </div>
            </div>

            {/* Plan 2 */}
            <div className="p-6 sm:p-8 rounded-lg border-2 border-[#3157D5] bg-[#071126] flex flex-col justify-between relative shadow-xl">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#3157D5] text-white text-[10px] font-extrabold uppercase tracking-wider py-1 px-3 rounded-full">
                Recommended Plan
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#7C8CFF] block mb-1">
                  PLAN 2
                </span>
                <h3 className="text-xl font-bold text-white mb-2">Market Dominance</h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white font-display">₹34,999</span>
                  <span className="text-xs text-zinc-400">/ 3 years</span>
                </div>
                <p className="text-xs text-[#7C8CFF] font-medium mb-4">
                  One-time build &amp; 36 months ongoing strategic support
                </p>
                <p className="text-xs sm:text-sm text-zinc-300 mb-6">
                  For businesses ready to build consistent demand.
                </p>
                <div className="space-y-2 text-xs text-zinc-300 border-t border-white/10 pt-4 mb-6">
                  <p className="font-bold text-white uppercase text-[10px] tracking-wider mb-2">Core Inclusions:</p>
                  <p>• Complete GBP optimization &amp; ongoing local search plan</p>
                  <p>• Competitor keyword monitoring (100 terms)</p>
                  <p>• Google Ads &amp; Meta Paid ad campaign build</p>
                  <p>• Custom A/B landing page funnel matching CRO norms</p>
                  <p>• Up to ₹2,50,000 monthly ad spend execution</p>
                </div>
              </div>
              <div className="space-y-2 pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => onQuoteClick("Market Dominance Plan", "I would like to choose the Market Dominance plan (₹34,999 / 3 years).")}
                  className="w-full py-3 px-4 rounded bg-[#3157D5] hover:bg-[#2546B8] text-white text-xs font-bold uppercase tracking-wide transition-colors cursor-pointer"
                >
                  Choose Plan
                </button>
              </div>
            </div>

            {/* Plan 3 */}
            <div className="p-6 sm:p-8 rounded-lg border border-white/15 bg-[#071126]/80 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 block mb-1">
                  PLAN 3
                </span>
                <h3 className="text-xl font-bold text-white mb-2">City Saturation</h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white font-display">₹64,999</span>
                  <span className="text-xs text-zinc-400">/ 3 years</span>
                </div>
                <p className="text-xs text-[#7C8CFF] font-medium mb-4">
                  One-time build &amp; 36 months ongoing strategic support
                </p>
                <p className="text-xs sm:text-sm text-zinc-300 mb-6">
                  For businesses expanding local visibility.
                </p>
                <div className="space-y-2 text-xs text-zinc-300 border-t border-white/10 pt-4 mb-6">
                  <p className="font-bold text-white uppercase text-[10px] tracking-wider mb-2">Core Inclusions:</p>
                  <p>• Multi-city/office maps pack ranking strategy</p>
                  <p>• Unlimited keyword monitoring &amp; competitor analysis</p>
                  <p>• Aggressive ad spend execution (unlimited budgets)</p>
                  <p>• Unlimited premium speed-optimized funnel creations</p>
                  <p>• Continuous CRO form tracking &amp; chat-bot triggers</p>
                </div>
              </div>
              <div className="space-y-2 pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => onQuoteClick("City Saturation Plan", "I would like to choose the City Saturation plan (₹64,999 / 3 years).")}
                  className="w-full py-3 px-4 rounded bg-[#3157D5] hover:bg-[#2546B8] text-white text-xs font-bold uppercase tracking-wide transition-colors cursor-pointer"
                >
                  Choose Plan
                </button>
              </div>
            </div>
          </div>

          {/* Guarantee Block */}
          <div className="p-6 rounded-lg bg-[#071126] border border-white/15">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-5 h-5 text-[#168A62] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-display font-bold text-base text-white mb-1">
                  100% Direct Account Billing &amp; Transparency Guarantee
                </h4>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  Your media advertising spend is billed directly by Google or Meta to your corporate card. You retain permanent ownership of your accounts, creative assets, and lead history. No hidden markups.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3.9 Services FAQ (Soft Tint) */}
      <section className="py-16 sm:py-24 bg-[#F2F5FA] border-b border-[#DDE3EC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#3157D5] mb-2">
              FREQUENTLY ASKED QUESTIONS
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#263044] tracking-tight">
              Practical answers to how we scope and deliver services.
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

      {/* 3.10 Final CTA (Deep Navy) */}
      <section className="py-16 sm:py-24 bg-[#071126] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4">
            Not sure which system your business needs first?
          </h2>
          <p className="text-base sm:text-lg text-[#C6CEDE] mb-8 leading-relaxed max-w-2xl">
            Bring us your current customer volume and your market. We will tell you honestly which one to fix first — even if it is not the one you called about.
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
              href={getWhatsAppUrl("Hi LocalBuild, I'm not sure which service system my business needs first.")}
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
