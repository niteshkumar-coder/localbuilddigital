import { useState } from "react";
import { ArrowRight, ArrowUpRight, CheckCircle2, Globe, Search, MapPin, Share2, Cpu, Laptop, ExternalLink } from "lucide-react";
import { SERVICES_DATA } from "../data/services";
import { ServiceDetail } from "../types/services";
import ServiceDetailModal from "./ServiceDetailModal";

interface ServicesProps {
  onQuoteClick: (prefilledService?: string, prefilledNotes?: string) => void;
}

export default function Services({ onQuoteClick }: ServicesProps) {
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<ServiceDetail | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (serviceId: string) => {
    const found = SERVICES_DATA.find((s) => s.id === serviceId);
    if (found) {
      setSelectedServiceForModal(found);
      setIsModalOpen(true);
    } else {
      setSelectedServiceForModal(SERVICES_DATA[0]);
      setIsModalOpen(true);
    }
  };

  const secondaryServices = [
    {
      id: "google-ads",
      num: "02",
      name: "Google Ads Management",
      category: "Paid Acquisition",
      summary: "High-intent search campaigns targeting buyers actively searching for your service within your immediate geographic radius. Zero ad spend markups.",
      deliverables: ["Search & Call-Only Ads", "Negative Keyword Pruning", "Direct Google Billing"],
      icon: Search
    },
    {
      id: "gbp-opt",
      num: "03",
      name: "Google Business Profile & Map Pack",
      category: "Local Presence",
      summary: "Claim top-3 rankings on Google Maps where 70% of local phone calls originate. Geo-targeted citation building and automated review collection.",
      deliverables: ["Top 3 Map Pack Optimization", "Local Citation Building", "Review Acceleration Engine"],
      icon: MapPin
    },
    {
      id: "meta-ads",
      num: "04",
      name: "Meta Performance Advertising",
      category: "Social Demand",
      summary: "Hyper-localized Facebook & Instagram campaigns reaching local homeowners, clinic patients, and buyers with compelling visual authority.",
      deliverables: ["Hyper-Local Geo-Fencing", "High-Converting Creative", "Direct In-App Lead Forms"],
      icon: Share2
    },
    {
      id: "local-seo",
      num: "05",
      name: "Organic Local SEO & Authority",
      category: "Search Visibility",
      summary: "Build sustainable organic visibility with local keyword optimization, structured service schema, and fast-indexing landing pages.",
      deliverables: ["Keyword Gap Analysis", "Local Schema Architecture", "High-Intent Service Pages"],
      icon: Globe
    },
    {
      id: "ai-automation",
      num: "06",
      name: "AI & WhatsApp Lead Automation",
      category: "Operations",
      summary: "Eliminate lost inquiries. Automatically greet incoming leads on WhatsApp, route details to your CRM, and trigger instant staff notifications.",
      deliverables: ["WhatsApp Business API", "Instant Auto-Reply Workflows", "CRM Lead Routing"],
      icon: Cpu
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-24 bg-[#FAFAFA] border-b border-[#DDE3EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#3157D5] block mb-2">
            Core Capabilities
          </span>
          <h2 className="font-display font-semibold text-2xl sm:text-4xl lg:text-5xl text-[#1E293B] tracking-tight leading-[1.12] mb-3">
            Everything you need to build, reach and convert local customers.
          </h2>
          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed max-w-2xl">
            We unite fast web engineering, high-intent local search advertising, and lead automation into a single cohesive growth pipeline.
          </p>
        </div>

        {/* ========================================================
            FEATURED SERVICE SPOTLIGHT: WEBSITE DESIGN & ENGINEERING
            Dominant 12-Column Art-Directed Marquee (7 cols text / 5 cols visual)
            ======================================================== */}
        <div className="mb-16 rounded-2xl bg-white border border-[#DDE3EC] p-6 sm:p-10 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column (7 cols): Editorial Showcase */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#3157D5] uppercase tracking-wider mb-2">
                  <span>Featured Foundation</span>
                  <span aria-hidden="true">·</span>
                  <span>01</span>
                </div>
                <h3 className="font-display font-semibold text-2xl sm:text-4xl text-[#1E293B] tracking-tight leading-tight">
                  High-Converting Website Design &amp; Web Engineering
                </h3>
                <p className="text-sm sm:text-base text-[#475467] font-normal mt-1">
                  Engineered for sub-2-second loading, 1-tap mobile calls, and maximum local conversion.
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
                Your website is the foundation of every ad rupee you spend. If your pages take four seconds to load or confuse visitors on smartphones, you are burning your budget. We build custom, ultra-fast websites designed around immediate commercial action: verified phone calls, direct WhatsApp conversations, and frictionless inquiry forms.
              </p>

              {/* Technical Specifications Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 border-t border-[#E2E8F0]">
                <div className="flex items-start gap-2.5 text-xs text-[#1E293B]">
                  <CheckCircle2 className="w-4 h-4 text-[#168A62] shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-semibold block">Sub-2-Second Loading</strong>
                    <span className="text-[#64748B]">Google Lighthouse 95+ score</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-xs text-[#1E293B]">
                  <CheckCircle2 className="w-4 h-4 text-[#168A62] shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-semibold block">Click-to-Call &amp; WhatsApp</strong>
                    <span className="text-[#64748B]">Immediate 1-tap mobile triggers</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-xs text-[#1E293B]">
                  <CheckCircle2 className="w-4 h-4 text-[#168A62] shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-semibold block">Local Schema Architecture</strong>
                    <span className="text-[#64748B]">Structured data for Google search</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-xs text-[#1E293B]">
                  <CheckCircle2 className="w-4 h-4 text-[#168A62] shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-semibold block">100% Legal Asset Ownership</strong>
                    <span className="text-[#64748B]">Zero proprietary agency lock-in</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#E2E8F0]">
                <button
                  type="button"
                  onClick={() => onQuoteClick("Website Design", "I am interested in discussing a high-converting website build for my business.")}
                  className="btn btn--primary cursor-pointer px-6 h-11 text-sm font-semibold rounded-lg shadow-2xs"
                >
                  <span>Enquire About Website Design</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleOpenModal("website-design")}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#3157D5] hover:text-[#2546B8] transition-colors cursor-pointer py-2"
                >
                  <span>View Full Technical Specs</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Column (5 cols): Art-Directed Browser Preview */}
            <div className="lg:col-span-5">
              <div className="rounded-xl border border-zinc-200 bg-zinc-900 shadow-xl overflow-hidden group">
                {/* Browser bar */}
                <div className="flex items-center justify-between px-3 py-2 bg-zinc-950 border-b border-zinc-800 text-[11px] text-zinc-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                  </div>
                  <span className="font-mono text-[10px] text-zinc-400 truncate max-w-[200px]">
                    client-site.com/services
                  </span>
                  <span className="text-[10px] text-emerald-400 font-mono">HTTPS</span>
                </div>

                {/* Website Visual Frame */}
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-800">
                  <img
                    src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L25zNTM4Ny1pbWFnZS1rd3Z5YmVpdS5qcGc.jpg"
                    alt="Engineered high-converting website preview with responsive design"
                    loading="lazy"
                    className="w-full h-full object-cover object-top group-hover:scale-[1.01] transition-transform duration-500"
                    width={800}
                    height={500}
                  />

                  {/* Speed Overlay Badge */}
                  <div className="absolute bottom-3 left-3 bg-zinc-900/95 backdrop-blur-xs border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white shadow-lg flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="font-mono font-bold text-emerald-400">1.4s</span>
                    <span className="text-zinc-400 text-[11px]">Load Speed</span>
                  </div>

                  <div className="absolute top-3 right-3 bg-zinc-900/95 backdrop-blur-xs border border-white/10 rounded-lg px-2.5 py-1 text-[11px] text-white font-mono shadow-lg">
                    Mobile First
                  </div>
                </div>

                {/* Footer preview bar */}
                <div className="px-3.5 py-2.5 bg-zinc-950 flex items-center justify-between text-xs text-zinc-400">
                  <span>Custom React / Static Architecture</span>
                  <span className="text-[#7C8CFF] font-medium">99 / 100 Speed</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ========================================================
            SECONDARY SERVICES: COMPACT EDITORIAL SPLIT PRESENTATION
            ======================================================== */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-4 border-b border-[#E2E8F0]">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#64748B] block mb-1">
                Complementary Growth Systems
              </span>
              <h3 className="font-display font-semibold text-xl sm:text-2xl text-[#1E293B]">
                Specialized disciplines to generate and convert demand.
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#64748B] max-w-sm">
              Deployable as individual focus services or as part of a unified 3-year growth roadmap.
            </p>
          </div>

          {/* Clean 5-Row Editorial List with Hairline Dividers */}
          <div className="divide-y divide-[#E2E8F0] border-y border-[#E2E8F0] bg-white rounded-xl shadow-2xs overflow-hidden">
            {secondaryServices.map((srv) => {
              const Icon = srv.icon;
              return (
                <div 
                  key={srv.id}
                  className="p-6 sm:p-7 flex flex-col lg:flex-row lg:items-center justify-between gap-6 hover:bg-[#F8FAFC] transition-colors group"
                >
                  {/* Left: Number + Title + Category */}
                  <div className="lg:w-1/3 space-y-1">
                    <div className="flex items-center gap-2 text-xs">
                      <span className="font-mono font-semibold text-[#3157D5]">{srv.num}</span>
                      <span className="text-zinc-300">·</span>
                      <span className="text-xs font-mono text-[#64748B] uppercase">{srv.category}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Icon className="w-4 h-4 text-[#3157D5] shrink-0" />
                      <h4 className="font-display font-semibold text-lg text-[#1E293B] group-hover:text-[#3157D5] transition-colors">
                        {srv.name}
                      </h4>
                    </div>
                  </div>

                  {/* Center: Summary & Deliverables */}
                  <div className="lg:w-1/2 space-y-2">
                    <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                      {srv.summary}
                    </p>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-zinc-500 font-mono">
                      {srv.deliverables.map((del, dIdx) => (
                        <span key={dIdx} className="flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-zinc-300" />
                          <span>{del}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right: Actions */}
                  <div className="lg:w-auto flex items-center justify-end gap-3 pt-2 lg:pt-0">
                    <button
                      type="button"
                      onClick={() => handleOpenModal(srv.id)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#3157D5] hover:text-[#2546B8] transition-colors cursor-pointer py-1.5 px-3 rounded-lg bg-blue-50/60 hover:bg-blue-100/60"
                    >
                      <span>Specifications</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      type="button"
                      onClick={() => onQuoteClick(srv.name, `I am interested in exploring ${srv.name} for my local business.`)}
                      className="inline-flex items-center text-xs font-medium text-[#64748B] hover:text-[#1E293B] transition-colors cursor-pointer py-1.5 px-2"
                    >
                      <span>Enquire →</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedServiceForModal && (
        <ServiceDetailModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          service={selectedServiceForModal}
          onSelectService={(serviceTitle) => onQuoteClick(serviceTitle)}
        />
      )}
    </section>
  );
}
