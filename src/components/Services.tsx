import { useState } from "react";
import { ArrowRight, ArrowUpRight, CheckCircle2, Layers, TrendingUp, Radio, Cpu } from "lucide-react";
import { SERVICES_DATA } from "../data/services";
import { ServiceDetail } from "../types/services";
import ServiceDetailModal from "./ServiceDetailModal";

interface ServicesProps {
  onQuoteClick: (prefilledService?: string, prefilledNotes?: string) => void;
}

interface ServiceCategory {
  id: "build" | "grow" | "reach" | "automate";
  num: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  imageAlt: string;
  items: {
    title: string;
    slug: string;
    serviceId: string;
  }[];
  theme: {
    badge: string;
    border: string;
  };
}

const CATEGORIES: ServiceCategory[] = [
  {
    id: "build",
    num: "01",
    name: "BUILD",
    tagline: "High-Converting Digital Foundations",
    description: "Fast, mobile-first websites and web applications engineered around instant call actions, sub-2-second loading, and clear reasons for visitors to choose you.",
    image: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L25zNTM4Ny1pbWFnZS1rd3Z5YmVpdS5qcGc.jpg",
    imageAlt: "Clean, high-performance web development and design workspace",
    items: [
      { title: "Website Design", slug: "website-design", serviceId: "website-design" },
      { title: "Application Design", slug: "application-design", serviceId: "application-design" },
      { title: "Ecommerce", slug: "ecommerce", serviceId: "ecommerce" }
    ],
    theme: {
      badge: "bg-blue-50 text-blue-700 border-blue-200",
      border: "border-blue-100"
    }
  },
  {
    id: "grow",
    num: "02",
    name: "GROW",
    tagline: "Targeted Customer Acquisition",
    description: "High-intent search, map, and social advertising that captures buyers actively looking for your services in your immediate market radius without wasting budget.",
    image: "https://media.easy-peasy.ai/be09e913-145b-489e-b994-bb9e6fd13502/464ba10a-9a6a-4241-9168-d06872146146.png",
    imageAlt: "Digital growth analytics and local ad performance workspace",
    items: [
      { title: "Google Ads", slug: "google-ads-management", serviceId: "google-ads" },
      { title: "Meta Ads", slug: "meta-ads-management", serviceId: "meta-ads" },
      { title: "Google Business Profile", slug: "google-business-profile-optimization", serviceId: "gbp-opt" },
      { title: "Local SEO", slug: "local-seo", serviceId: "local-seo" }
    ],
    theme: {
      badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
      border: "border-emerald-100"
    }
  },
  {
    id: "reach",
    num: "03",
    name: "REACH",
    tagline: "Brand Authority & Visual Influence",
    description: "Authority-building video, commercial creatives, and local marketing strategies that establish trust and make your business the unquestioned first choice.",
    image: "https://media.easy-peasy.ai/de232714-093d-4b2a-b484-bfcf0ffaca55/4c6e2d82-45fc-4bd8-a35e-7f14929d5c69.png",
    imageAlt: "High-impact brand creative and local marketing audience",
    items: [
      { title: "YouTube Growth", slug: "youtube-growth", serviceId: "youtube-growth" },
      { title: "Content & Creative", slug: "content-creative", serviceId: "content-creative" },
      { title: "Local Marketing", slug: "local-marketing", serviceId: "local-marketing" }
    ],
    theme: {
      badge: "bg-purple-50 text-purple-700 border-purple-200",
      border: "border-purple-100"
    }
  },
  {
    id: "automate",
    num: "04",
    name: "AUTOMATE",
    tagline: "Seamless Operational Pipelines",
    description: "Intelligent lead capture, automated WhatsApp notifications, and customer workflows that eliminate lost inquiries and free your team from manual follow-ups.",
    image: "https://media.easy-peasy.ai/8ba441f7-2220-49e0-9958-43855166d601/9a64619f-fecc-4fa5-967e-55ca9b962663.png",
    imageAlt: "Automated business workflow and CRM integration systems",
    items: [
      { title: "AI Automation", slug: "ai-automation-solutions", serviceId: "ai-automation" },
      { title: "Business Automation", slug: "business-automation", serviceId: "business-automation" },
      { title: "Growth Systems", slug: "growth-systems", serviceId: "growth-systems" }
    ],
    theme: {
      badge: "bg-amber-50 text-amber-800 border-amber-200",
      border: "border-amber-100"
    }
  }
];

export default function Services({ onQuoteClick }: ServicesProps) {
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<ServiceDetail | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (serviceId: string) => {
    const found = SERVICES_DATA.find((s) => s.id === serviceId);
    if (found) {
      setSelectedServiceForModal(found);
      setIsModalOpen(true);
    } else {
      // Fallback open first
      setSelectedServiceForModal(SERVICES_DATA[0]);
      setIsModalOpen(true);
    }
  };

  const handleOpenFirstService = () => {
    setSelectedServiceForModal(SERVICES_DATA[0]);
    setIsModalOpen(true);
  };

  return (
    <section id="services" className="py-16 sm:py-24 bg-[#FAFAFA] border-b border-[#DDE3EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#3157D5] mb-2">
            Core Capabilities
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl lg:text-5xl text-[#263044] tracking-tight leading-[1.15] mb-3">
            Four disciplined systems to acquire and retain local customers.
          </h2>
          <p className="text-base sm:text-lg text-[#667085] leading-relaxed max-w-2xl">
            Everything your business needs to turn local search interest into verified phone calls, booked appointments, and long-term revenue.
          </p>
        </div>

        {/* MOBILE LAYOUT (<640px): 4 clean editorial rows with number, title, description, and Explore action */}
        <div className="block sm:hidden divide-y divide-zinc-200 border-y border-zinc-200">
          {CATEGORIES.map((cat) => (
            <div key={cat.id} className="py-6 space-y-2">
              <div className="flex items-baseline gap-2.5">
                <span className="font-mono text-xs font-extrabold text-blue-600">{cat.num}</span>
                <h3 className="font-display font-extrabold text-xl text-zinc-900 tracking-tight">
                  {cat.name}
                </h3>
              </div>

              <p className="text-sm text-zinc-600 leading-relaxed">
                {cat.id === "build" && "Websites & digital experiences that turn visitors into enquiries."}
                {cat.id === "grow" && "Search, ads and local visibility built around measurable growth."}
                {cat.id === "reach" && "Content, video and authority marketing that make you the first choice."}
                {cat.id === "automate" && "Lead pipelines and systems that eliminate lost inquiries."}
              </p>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => handleOpenModal(cat.items[0].serviceId)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 active:text-blue-800 py-1"
                >
                  <span>Explore {cat.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* DESKTOP LAYOUT (>=640px): 4 Major Service Categories - 2x2 High-Impact Editorial Grid */}
        <div className="hidden sm:grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="group flex flex-col justify-between rounded-2xl border border-zinc-200/90 bg-white hover:border-zinc-400 hover:shadow-lg transition-all duration-200 overflow-hidden"
            >
              {/* Card Image Block with clean 16:9 ratio */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-100 border-b border-zinc-100">
                <img
                  src={cat.image}
                  alt={cat.imageAlt}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  width={800}
                  height={450}
                />
                <div className="absolute top-4 left-4">
                  <span className="font-mono text-xs font-extrabold px-3 py-1 rounded-md bg-zinc-900/85 backdrop-blur-xs text-white border border-white/20">
                    PHASE {cat.num}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-zinc-900 tracking-tight">
                      {cat.name}
                    </h3>
                    <span className="text-xs font-semibold text-zinc-500 hidden sm:inline-block">
                      {cat.tagline}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-600 leading-relaxed mb-6">
                    {cat.description}
                  </p>

                  {/* Included Services Pills */}
                  <div className="pt-2 pb-6 border-t border-zinc-100">
                    <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 block mb-3">
                      Included Capabilities:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {cat.items.map((item) => (
                        <button
                          key={item.serviceId}
                          type="button"
                          onClick={() => handleOpenModal(item.serviceId)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold text-zinc-700 bg-zinc-50 hover:bg-zinc-900 hover:text-white border border-zinc-200/80 transition-colors cursor-pointer"
                        >
                          <span>{item.title}</span>
                          <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Card Action */}
                <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => handleOpenModal(cat.items[0].serviceId)}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors cursor-pointer"
                  >
                    <span>View {cat.name} specifications</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onQuoteClick(cat.name, `I am interested in exploring ${cat.name} services (${cat.items.map(i => i.title).join(", ")}) for my business.`)}
                    className="text-xs font-semibold text-zinc-600 hover:text-zinc-900 cursor-pointer"
                  >
                    Enquire →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Link under grid */}
        <div className="mt-12 text-center sm:text-left">
          <button
            type="button"
            onClick={() => onQuoteClick("Custom Capability Mix", "I would like to discuss a custom capability mix for my business requirements.")}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#3157D5] hover:text-[#2546B8] transition-colors cursor-pointer"
          >
            <span>Need a custom capability mix? Discuss your business requirements →</span>
          </button>
        </div>

      </div>

      {/* Reusable Comprehensive Service Detail Modal for deeper exploration */}
      <ServiceDetailModal
        service={selectedServiceForModal}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSelectService={(serviceTitle) => {
          setIsModalOpen(false);
          onQuoteClick(serviceTitle);
        }}
      />
    </section>
  );
}
