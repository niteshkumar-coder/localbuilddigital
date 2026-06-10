import { useState, useEffect, useRef } from "react";
import { 
  Sparkles, 
  X, 
  Check, 
  Users, 
  ArrowRight, 
  Globe, 
  Target, 
  Search, 
  TrendingUp, 
  Zap, 
  Compass, 
  PhoneCall, 
  Award, 
  Monitor, 
  Smartphone, 
  LineChart, 
  Share2, 
  Cpu, 
  ShoppingBag, 
  ShieldCheck, 
  Database,
  BarChart3,
  ListFilter,
  PlayCircle,
  Truck,
  ArrowUpRight,
  MessageSquare
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ServiceDetail {
  id: string;
  num: string;
  icon: any;
  title: string;
  shortDesc: string;
  whatWeDo: string;
  features: string[];
  whosItFor: string;
  ctaText: string;
  badge: string;
}

const servicesData: ServiceDetail[] = [
  {
    id: "website-design",
    num: "01",
    icon: Monitor,
    title: "Website Design",
    badge: "Web Dev & UI/UX",
    shortDesc: "Stunning, fast, mobile-first websites that convert visitors into customers.",
    whatWeDo: "We design and develop custom high-speed websites tailored specifically to your brand narrative and core business goals.",
    features: [
      "Ultra responsive layout (Mobile, Tablet, Desktop)",
      "High performance (95+ Google PageSpeed score)",
      "SEO-ready semantics & clean metadata structure",
      "Interactive forms, CRM & WhatsApp callback triggers",
      "Fully optimized high-converting ad landing pages",
      "Modern animations & premium custom graphics"
    ],
    whosItFor: "Small businesses, fast-growing startups, local shops, professional service providers",
    ctaText: "Get Free Design Mockup"
  },
  {
    id: "google-ads",
    num: "02",
    icon: Target,
    title: "Google Ads Management",
    badge: "Search & Lead Gen",
    shortDesc: "ROI-focused Search & Display campaigns that bring real, targeted leads.",
    whatWeDo: "We create, structure, and scale high-intent Google Search, Display, and LSA campaigns to maximize your inbound client pipeline.",
    features: [
      "Deep semantic keyword & competitor analysis",
      "Dynamic search, display & retargeting setup",
      "A/B split testing for headlines & landing pages",
      "Conversion pixel & Google Tag Manager integration",
      "Thorough negative keywords management to save costs",
      "Honest weekly pipeline performance reviews"
    ],
    whosItFor: "Local services (electricians, doctors, plumbers), ecommerce brands, specialized B2B",
    ctaText: "Launch Google Ads Campaiagn"
  },
  {
    id: "meta-ads",
    num: "03",
    icon: Share2,
    title: "Meta Ads Management",
    badge: "Social Scaling",
    shortDesc: "High-converting Facebook & Instagram ads for maximum brand reach.",
    whatWeDo: "We build and test high-ROAS social ads targeting qualified prospects based on intent, interest, and geographical location.",
    features: [
      "Advanced custom audience & lookalike modeling",
      "Stunning asset curation (ad copy + scroll-stopping graphics)",
      "Meta Pixel purchase & lead custom conversion event tracks",
      "Dynamic retargeting funnel setups for cold visitors",
      "A/B budget splits (CBO/ABO) for perfect scale ratios",
      "Continuous creative refresh to eliminate fatigue"
    ],
    whosItFor: "Direct-to-consumer (D2C) brands, local retailers, cosmetic clinics, lifestyle brands",
    ctaText: "Start Meta Ads Campaign"
  },
  {
    id: "gbp-optimization",
    num: "04",
    icon: Compass,
    title: "Google Business Profile Optimization",
    badge: "Local SEO Dominance",
    shortDesc: "Dominate local search and get more walk-ins & calls from Google Maps.",
    whatWeDo: "We fully audit, optimize, and rank your Google Business Profile to capture the high-value #1 visual spot in the local map pack.",
    features: [
      "Local Map Pack category & keyword search optimization",
      "High-contrast photo geotagging & meta injection",
      "Automated custom review generation link setup",
      "Weekly local maps updates, custom Q&As & product listings",
      "Competitor spam deletion & listing defense",
      "Direct call and location navigation boost reports"
    ],
    whosItFor: "Restaurants, local home service pros, clinics, legal law firms, physical store outlets",
    ctaText: "Optimize My Maps Ranking"
  },
  {
    id: "local-service-ads",
    num: "05",
    icon: ShieldCheck,
    title: "Local Service Ads",
    badge: "Google Guaranteed",
    shortDesc: "Get Google-verified leads directly from Local Service Ads.",
    whatWeDo: "We guide you through the prestigious Google Guaranteed verification process to rank you at the absolute top screen segment on local mobile searches.",
    features: [
      "Step-by-step Google Guaranteed background check setup",
      "Top placement above standard paid search results",
      "Phone callback tracking dashboard integration",
      "Pay-per-lead cost verification & dispute execution",
      "Custom weekly inbound call recording log access",
      "Dynamic bidding to capture highest-intent clicks"
    ],
    whosItFor: "Service professionals (plumbers, home cleaners, locksmiths, HVAC technicians)",
    ctaText: "Get Google Guaranteed"
  },
  {
    id: "youtube-growth",
    num: "06",
    icon: PlayCircle,
    title: "YouTube Growth",
    badge: "Video Authority",
    shortDesc: "Build a powerful YouTube presence with strategy, SEO & content planning.",
    whatWeDo: "We deploy rigorous algorithm optimization, custom graphic styling, and structured SEO scripts to build you organic audience authority.",
    features: [
      "High-converting visual channel makeover & brand asset build",
      "Semantic video keyword research for fast algorithm indexing",
      "Optimized tags, high-CTR display titles & custom descriptions",
      "Slick click-optimized high-contrast thumbnail styling",
      "Audience engagement scripts & video structure patterns",
      "In-depth traffic analytics & retention hook reviews"
    ],
    whosItFor: "Coaches, consultants, educators, SaaS founders, corporate agencies",
    ctaText: "Consult YouTube Strategy"
  },
  {
    id: "ai-automation",
    num: "07",
    icon: Cpu,
    title: "AI Automation Solutions",
    badge: "Next-Gen AI Systems",
    shortDesc: "Automate repetitive tasks and scale smarter with AI-powered tools.",
    whatWeDo: "We build tailored AI voice, chat, and data routing blueprints to streamline operations, save overhead, and respond to incoming leads instantly.",
    features: [
      "Slick instant-reply chatbots for WhatsApp, Web, and Meta",
      "Automated lead outreach, follow-up, and routing funnels",
      "Smart document parsing & AI proposal auto-builders",
      "Centralized Zapier / Make / n8n multi-step setups",
      "CRM pipeline synced auto-calendar schedulers",
      "Advanced database prompts & custom agent triggers"
    ],
    whosItFor: "Modern companies, SaaS applications, service agencies, D2C brands",
    ctaText: "Build My AI Workspace"
  },
  {
    id: "application-design",
    num: "08",
    icon: Smartphone,
    title: "Application Design",
    badge: "Product UI/UX",
    shortDesc: "Custom mobile & web app UI/UX design for seamless user experience.",
    whatWeDo: "We engineer visually stunning, intuitive digital layouts for mobile and web products that retain users and simplify interaction flows.",
    features: [
      "Rich interactive prototype wireframes (mock flows)",
      "High-fidelity iOS/Android Figma component designs",
      "Stately web application client dashboard design structures",
      "Establish coherent brand design systems & asset tokens",
      "Heuristic user flow friction analysis & optimization",
      "Smooth micro-interaction transitions & CSS guides"
    ],
    whosItFor: "SaaS startups, enterprise tech platforms, innovative local apps",
    ctaText: "Get Premium App UI Review"
  },
  {
    id: "ecommerce-management",
    num: "09",
    icon: ShoppingBag,
    title: "Ecommerce Management",
    badge: "Shopify & Sales Scale",
    shortDesc: "End-to-end ecommerce setup, management and conversion optimization.",
    whatWeDo: "We develop, audit, and optimize lightning-fast virtual storefronts that stimulate buyer confidence and maximize cart checkout targets.",
    features: [
      "Custom Shopify/WooCommerce layout styling",
      "Conversion Rate Optimization (CRO) checkouts",
      "Slick automated payment gateway routing integration",
      "Custom product page layout, graphics & copywriting",
      "Seamless customer retention email funnel builds",
      "Dynamic dropshipping / warehouse order tracking"
    ],
    whosItFor: "Merchant manufacturers, retail brand creators, digital shops",
    ctaText: "Scale My Online Store"
  },
  {
    id: "dropshipping-systems",
    num: "10",
    icon: Truck,
    title: "Dropshipping Systems",
    badge: "Global Supply Automate",
    shortDesc: "Complete dropshipping store setup with supplier integration & automation.",
    whatWeDo: "We design and scale high-margin automated dropshipping networks with premium private label suppliers, fast shipping routes, and automated sync.",
    features: [
      "Data-backed product validation & competitor margin analysis",
      "Premium, premium-styled storefront landing pages",
      "Instant auto-order routing with private global suppliers",
      "Express shipping channels (CJPacket, YunExpress, private agent)",
      "Automated inventory checks & tracking code email sync",
      "High-ROAS Meta & TikTok ads scaling guides"
    ],
    whosItFor: "Side-hustle starters, digital marketers, ecommerce creators",
    ctaText: "Initialize Dropship Blueprint"
  },
  {
    id: "affiliate-marketing",
    num: "11",
    icon: LineChart,
    title: "Affiliate Marketing",
    badge: "Passive Profit Channels",
    shortDesc: "Build and scale a profitable affiliate income system from scratch.",
    whatWeDo: "We build and optimize high-authority, contentloaded commission engines designed to capture search intent and monetize affiliate links reliably.",
    features: [
      "Niche evaluation & structural monetization strategies",
      "Authority commission blog & landing flow designs",
      "Optimized programmatic SEO structure deployment",
      "Affiliate network setup (Amazon, ClickBank, private brands)",
      "Slick lead magnet collection & email automation",
      "Deep pixel click & commission attribute logs"
    ],
    whosItFor: "Publishers, bloggers, content creators, media brand partners",
    ctaText: "Design Commission Funnel"
  },
  {
    id: "business-automation",
    num: "12",
    icon: Zap,
    title: "Business Automation Systems",
    badge: "Enterprise CRM Systems",
    shortDesc: "Streamline your entire operations with smart automation workflows.",
    whatWeDo: "We conceptualize, engineer, and host central CRM command maps that tie your marketing, customer services, and ledger systems together.",
    features: [
      "Strategic operations mapping (bottleneck audits)",
      "Deep GoHighLevel / HubSpot setup and templates",
      "Autonomous lead scoring & calendar bookings",
      "Automated billing, estimate reports & receipts",
      "Team activity tracker & notifications triggers",
      "KPI data dashboard streaming synchronization"
    ],
    whosItFor: "Service companies, agencies, consultants, fast growing corporate teams",
    ctaText: "Schedule Operations Audit"
  }
];

interface ServicesProps {
  onQuoteClick: (notes?: string, service?: string) => void;
  onNavigate: (sectionId: string) => void;
}

export default function Services({ onQuoteClick, onNavigate }: ServicesProps) {
  const [activeService, setActiveService] = useState<ServiceDetail>(servicesData[0]);
  const [selectedDetail, setSelectedDetail] = useState<ServiceDetail | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const navContainerRef = useRef<HTMLDivElement>(null);

  // Auto Rotate active service mockups for visual engagement in the background (runs unless hovered)
  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      setActiveService((current) => {
        const currentIndex = servicesData.findIndex((s) => s.id === current.id);
        const nextIndex = (currentIndex + 1) % servicesData.length;
        return servicesData[nextIndex];
      });
    }, 2000); // Shift every 2 seconds

    return () => clearInterval(timer);
  }, [activeService, isHovered]);

  // Smooth scroll center active tab chip
  useEffect(() => {
    if (navContainerRef.current) {
      const activeEl = navContainerRef.current.querySelector('[data-active="true"]') as HTMLElement;
      if (activeEl) {
        const container = navContainerRef.current;
        const scrollLeft = activeEl.offsetLeft - (container.clientWidth / 2) + (activeEl.clientWidth / 2);
        container.scrollTo({
          left: scrollLeft,
          behavior: "smooth"
        });
      }
    }
  }, [activeService]);

  const handleOpenDetail = (service: ServiceDetail) => {
    setSelectedDetail(service);
  };

  const handleCloseDetail = () => {
    setSelectedDetail(null);
  };

  const handleCtaClick = (service: ServiceDetail) => {
    const customNote = `Hi LOCALBUILD team! I'm interested in your expert "${service.title}" service to help scale our brand and drive more targeted customers. I would love a diagnostic review and an actionable proposal blueprint.`;
    onQuoteClick(customNote, service.title);
    setSelectedDetail(null);
  };

  return (
    <section id="services" className="pt-20 pb-20 sm:py-24 bg-white border-t border-zinc-100 relative overflow-hidden">
      
      {/* Background patterns */}
      <div className="absolute inset-0 bg-white -z-20" />
      <div className="absolute top-[30%] right-[-10%] w-72 h-72 bg-blue-50/40 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-80 h-80 bg-indigo-50/40 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full text-xs font-bold text-blue-600 uppercase tracking-widest mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-blue-500" />
            <span>Interactive 3D Showroom</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-sans font-black text-3xl sm:text-4xl text-zinc-900 tracking-tight mb-5"
          >
            12 World-Class Services Powered By High-End Systems
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[14px] sm:text-[16px] text-zinc-500 leading-relaxed max-w-2xl mx-auto"
          >
            Select any solution below to explore customizable 3D dashboards, key features, and growth metrics structured by LOCALBUILD to dominate your market.
          </motion.p>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* HORIZONTAL QUICK NAV BAR (Scrollable on Mobile) */}
        {/* ------------------------------------------------------------- */}
        <div 
          ref={navContainerRef}
          className="flex overflow-x-auto gap-2 pb-5 mb-10 scrollbar-none scroll-smooth"
        >
          {servicesData.map((service) => {
            const IconComponent = service.icon;
            const isActive = activeService.id === service.id;
            return (
              <button
                key={service.id}
                data-active={isActive}
                onClick={() => setActiveService(service)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-300 cursor-pointer ${
                  isActive 
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/20 scale-102" 
                    : "bg-zinc-50 hover:bg-zinc-100 text-zinc-600 border border-zinc-200/50"
                }`}
              >
                <IconComponent className={`w-4 h-4 ${isActive ? "text-white" : "text-blue-500"}`} />
                <span>{service.title}</span>
              </button>
            );
          })}
        </div>

        {/* ------------------------------------------------------------- */}
        {/* main interactive 3D platform split-screen */}
        {/* ------------------------------------------------------------- */}
        <div 
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center bg-zinc-50/70 border border-zinc-200/65 rounded-3xl p-4 sm:p-10 lg:p-12 shadow-sm relative overflow-hidden backdrop-blur-xs min-h-[500px]"
        >
          
          {/* Subtle blueprint mesh grid representing premium engineering style */}
          <div 
            className="absolute inset-0 -z-10 opacity-[0.12] pointer-events-none" 
            style={{
              backgroundImage: `linear-gradient(to right, rgba(37, 99, 235, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(37, 99, 235, 0.1) 1px, transparent 1px)`,
              backgroundSize: '20px 20px'
            }}
          />

          {/* LEFT CONTENT CARD (5 COLS on desktop, centered on mobile/tablet) */}
          <div className="lg:col-span-5 text-center lg:text-left flex flex-col items-center lg:items-start justify-center">
            
            {/* Number badge and tag */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-5">
              <span className="font-mono text-xs font-black text-blue-600 tracking-wider bg-blue-50 border border-blue-100 px-2.5 py-1 rounded">
                SERVICE ID: {activeService.num}
              </span>
              <span className="text-[12px] sm:text-[14px] font-bold text-zinc-400 uppercase tracking-widest">
                {activeService.badge}
              </span>
            </div>

            {/* Service Title */}
            <h3 className="font-sans font-black text-[28px] sm:text-[36px] text-zinc-950 mb-5 leading-[1.1] tracking-tight">
              {activeService.title}
            </h3>

            {/* Short description */}
            <p className="text-zinc-600 text-base sm:text-[18px] leading-relaxed mb-5 font-medium max-w-xl">
              {activeService.shortDesc}
            </p>

            {/* Headline section on what we do */}
            <div className="mb-5 max-w-xl text-center lg:text-left">
              <span className="text-[10px] font-sans font-black uppercase tracking-wider text-zinc-400 block mb-1">Our Diagnostic Mandate</span>
              <p className="text-[13px] sm:text-[14px] text-zinc-500 font-normal leading-relaxed">
                {activeService.whatWeDo}
              </p>
            </div>

            {/* Features preview bullet list */}
            <div className="grid grid-cols-1 gap-2.5 mb-5 w-full max-w-md mx-auto lg:mx-0">
              {activeService.features.slice(0, 3).map((feat, index) => (
                <div key={index} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-700 text-left">
                  <div className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-100">
                    <Check className="w-2.5 h-2.5 stroke-[4]" />
                  </div>
                  <span className="font-sans font-bold leading-tight">{feat}</span>
                </div>
              ))}
            </div>

            {/* CTA action buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md">
              <button
                onClick={() => handleCtaClick(activeService)}
                className="w-full sm:w-auto h-[50px] px-6 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition duration-300 shadow-lg shadow-blue-600/15 cursor-pointer flex items-center justify-center shrink-0"
              >
                Launch This Solution
              </button>

              <button
                onClick={() => handleOpenDetail(activeService)}
                className="w-full sm:w-auto h-[50px] px-5 bg-white border border-zinc-300 hover:bg-zinc-50 text-zinc-700 font-bold text-xs uppercase tracking-wider rounded-xl transition duration-200 flex items-center justify-center gap-1.5 cursor-pointer shrink-0"
              >
                Know More & Specs
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

          {/* RIGHT SIDEBAR: bespoke visual representation mimicking a 3D isometric mockup (7 COLS) */}
          <div className="lg:col-span-7 flex items-center justify-center min-h-[300px] sm:min-h-[350px] relative w-full overflow-hidden">
            
            {/* Absolute visual base backing glass reflection */}
            <div className="absolute inset-0 bg-radial from-blue-500/5 via-transparent to-transparent blur-3xl pointer-events-none" />

            {/* ISOMETRIC TRANSLATE WRAPPER FOR 3D PERSPECTIVE */}
            <div 
              className="relative w-full aspect-video max-w-[320px] sm:max-w-md lg:max-w-lg transition-transform duration-700 ease-out"
              style={{
                perspective: '1200px',
              }}
            >
              {/* Actual structured renders based on activeService.id */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  initial={{ opacity: 0, rotateX: 20, rotateY: -20, rotateZ: 5, y: 15, scale: 0.95 }}
                  animate={{ opacity: 1, rotateX: 24, rotateY: -32, rotateZ: 10, y: 0, scale: 1 }}
                  exit={{ opacity: 0, rotateX: 20, rotateY: -20, rotateZ: 5, y: -15, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="w-full h-full relative"
                >
                  
                  {/* UNDERCAST GLOWING LIGHT BAR */}
                  <div className="absolute left-[15%] bottom-[10%] w-[70%] h-3 bg-blue-500/15 rounded-full blur-xl animate-pulse" />
                  
                  {/* 16:9 ISOMETRIC CANVAS PLATE BACKGROUND */}
                  <div className="w-full h-full bg-linear-to-br from-white/95 to-slate-50/90 border border-white rounded-[24px] shadow-2xl p-5 relative overflow-hidden backdrop-blur-md flex flex-col justify-between">
                    
                    {/* SaaS styled grid mask backing */}
                    <div 
                      className="absolute inset-0 opacity-[0.08] pointer-events-none" 
                      style={{
                        backgroundImage: `radial-gradient(#2563eb 1.5px, transparent 1.5px)`,
                        backgroundSize: '16px 16px'
                      }}
                    />

                    {/* TOP PLATFORM BAR */}
                    <div className="flex items-center justify-between border-b border-zinc-200/75 pb-3">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-blue-600 shrink-0" />
                        <span className="font-mono text-[9px] font-black text-zinc-400 tracking-widest uppercase">
                          LOCALBUILD MOCK-UI PLATFORM // {activeService.num}
                        </span>
                      </div>
                      <span className="text-[9px] text-emerald-500 font-mono bg-emerald-50 px-1.5 py-0.5 rounded font-extrabold animate-pulse">
                        ONLINE ACCEL
                      </span>
                    </div>

                    {/* CONTENT DISPLAY SECTION */}
                    <div className="flex-1 my-4 relative flex items-center justify-center">
                      
                      {/* SPECIFIC VISUAL 1: WEBSITE DESIGN */}
                      {activeService.id === "website-design" && (
                        <div className="relative w-full h-full flex items-center justify-center">
                          {/* Desktop Monitor Frame representation */}
                          <div className="w-[75%] aspect-[1.6] bg-slate-900 rounded-xl p-1.5 shadow-2xl border border-zinc-800 flex flex-col">
                            <div className="flex gap-[3px] py-1 pl-1 border-b border-zinc-800">
                              <span className="w-1 h-1 bg-red-500 rounded-full" />
                              <span className="w-1 h-1 bg-yellow-500 rounded-full" />
                              <span className="w-1 h-1 bg-green-500 rounded-full" />
                            </div>
                            <div className="flex-1 bg-white rounded-md p-2 flex flex-col justify-between relative overflow-hidden">
                              <div className="w-full h-2.5 bg-blue-500/10 rounded-sm mb-1.5" />
                              <div className="grid grid-cols-3 gap-1.5">
                                <div className="h-10 bg-zinc-50 border border-zinc-100 rounded p-[3px] flex flex-col justify-between">
                                  <span className="w-4 h-1 bg-blue-600 rounded-[1px]" />
                                  <span className="w-full h-3 bg-zinc-100 rounded-[1px]" />
                                </div>
                                <div className="h-10 bg-zinc-50 border border-zinc-100 rounded p-[3px] flex flex-col justify-between">
                                  <span className="w-4 h-1 bg-blue-600 rounded-[1px]" />
                                  <span className="w-full h-3 bg-zinc-100 rounded-[1px]" />
                                </div>
                                <div className="h-10 bg-zinc-50 border border-zinc-100 rounded p-[3px] flex flex-col justify-between">
                                  <span className="w-4 h-1 bg-blue-600 rounded-[1px]" />
                                  <span className="w-full h-3 bg-zinc-100 rounded-[1px]" />
                                </div>
                              </div>
                              <span className="text-[7px] text-zinc-400 font-mono scale-[0.8] text-center mb-0.5 uppercase tracking-wide font-extrabold block">Framer Custom Prototype Ready</span>
                            </div>
                          </div>
                          {/* Floating iPhone mock frame on left */}
                          <div className="absolute left-[3%] bottom-[3%] w-[22%] aspect-[0.55] bg-zinc-950 rounded-lg p-[3px] border border-zinc-800 shadow-2xl skew-x-3 flex flex-col justify-between">
                            <div className="w-4 h-[2px] bg-zinc-800 rounded-full mx-auto" />
                            <div className="flex-1 bg-blue-500 rounded-sm p-1 mt-1 flex flex-col justify-between overflow-hidden">
                              <div className="w-3.5 h-1 bg-white/45 rounded-[1px]" />
                              <div className="h-12 w-full bg-white/20 rounded-xs" />
                              <span className="w-5 h-2 bg-yellow-400 rounded-full mx-auto" />
                            </div>
                          </div>
                          {/* Floating Tech Tools label */}
                          <div className="absolute right-[5%] top-[10%] bg-zinc-950 text-sky-400 border border-zinc-800 shadow-lg px-2 py-1 rounded text-[8px] font-mono font-bold tracking-widest uppercase">
                            ⚡ CORE-WEB-VITALS A+
                          </div>
                        </div>
                      )}

                      {/* SPECIFIC VISUAL 2: GOOGLE ADS MANAGEMENT */}
                      {activeService.id === "google-ads" && (
                        <div className="relative w-full h-full flex items-center justify-center">
                          {/* Google Ads Card representing campaign stats */}
                          <div className="w-[85%] bg-blue-950 text-white rounded-2xl p-4 border border-zinc-800 shadow-2xl flex flex-col justify-between relative overflow-hidden">
                            <div className="absolute inset-0 bg-radial from-blue-700/10 via-transparent to-transparent pointer-events-none" />
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <span className="text-[8px] font-mono text-zinc-400 uppercase tracking-wider">Campaign Target</span>
                                <p className="text-sm font-black text-white leading-tight">Google Search Ads ROI</p>
                              </div>
                              <div className="text-right">
                                <span className="text-[7px] text-[10px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded font-bold font-mono">+14.2% CR</span>
                              </div>
                            </div>
                            
                            {/* Graphic ROI representation */}
                            <div className="grid grid-cols-4 gap-2 my-2">
                              {/* Stat bars */}
                              <div className="bg-white/5 border border-white/5 rounded p-1">
                                <span className="text-[7.5px] text-zinc-400 block font-mono">CPC</span>
                                <span className="text-[11px] font-mono font-black text-sky-400">₹14.8</span>
                              </div>
                              <div className="bg-white/5 border border-white/5 rounded p-1">
                                <span className="text-[7.5px] text-zinc-400 block font-mono">Impressions</span>
                                <span className="text-[11px] font-mono font-black text-white">125k</span>
                              </div>
                              <div className="bg-white/5 border border-white/5 rounded p-1">
                                <span className="text-[7.5px] text-zinc-400 block font-mono">CTR %</span>
                                <span className="text-[11px] font-mono font-black text-emerald-400">8.2%</span>
                              </div>
                              <div className="bg-white/5 border border-white/5 rounded p-1">
                                <span className="text-[7.5px] text-zinc-400 block font-mono">Cost</span>
                                <span className="text-[11px] font-mono font-black text-yellow-400">₹34k</span>
                              </div>
                            </div>
                            {/* SVG Performance line graph representing ads conversions */}
                            <div className="h-10 w-full mt-2">
                              <svg className="w-full h-full" viewBox="0 0 200 40" preserveAspectRatio="none">
                                <path d="M0,35 L40,30 L80,38 L120,15 L160,20 L200,2" fill="none" stroke="#60a5fa" strokeWidth="2.5" />
                                <circle cx="200" cy="2" r="3.5" fill="#60a5fa" className="animate-ping" />
                              </svg>
                            </div>
                          </div>
                          {/* Keyword trigger floating balloon */}
                          <div className="absolute right-[5%] bottom-[12%] bg-yellow-400 text-zinc-950 font-sans font-black text-[9px] px-2.5 py-1 rounded-full shadow-lg border border-yellow-300">
                            🔍 "Best Plumber Near Me"
                          </div>
                        </div>
                      )}

                      {/* SPECIFIC VISUAL 3: META ADS MANAGEMENT */}
                      {activeService.id === "meta-ads" && (
                        <div className="relative w-full h-full flex items-center justify-center">
                          {/* Facebook Ads mockup dashboard template */}
                          <div className="w-[85%] bg-white border border-zinc-200 shadow-2xl rounded-2xl overflow-hidden flex flex-col">
                            {/* Mock Navbar */}
                            <div className="bg-zinc-50 border-b border-zinc-200/60 p-2.5 flex items-center justify-between text-left">
                              <div className="flex items-center gap-2">
                                <div className="w-5 h-5 rounded bg-blue-600 text-white font-extrabold flex items-center justify-center text-xs font-serif">f</div>
                                <span className="text-[10px] font-extrabold text-zinc-800 font-sans">Business Ads Manager</span>
                              </div>
                              <span className="text-[8px] bg-indigo-50 text-indigo-600 px-1.5 py-0.5 rounded font-mono font-extrabold">Active Pixel</span>
                            </div>
                            <div className="p-3 flex gap-3 text-left">
                              {/* Left ad graphic frame preview */}
                              <div className="w-[45%] aspect-square bg-[#EFF6FF] border border-[#BFDBFE] rounded-lg p-2 relative flex flex-col justify-between overflow-hidden">
                                <div className="absolute top-0 right-0 p-1 bg-rose-500 text-white text-[7px] font-sans font-bold uppercase tracking-wide">Sponsored</div>
                                <span className="w-10 h-1.5 bg-blue-600 rounded-[1px] block mt-0.5 mb-1" />
                                <div className="w-full h-10 bg-white border border-blue-100 rounded-sm flex items-center justify-center">
                                  <span className="text-[16px] filter drop-shadow">💎</span>
                                </div>
                                <div className="flex justify-between items-center mt-1">
                                  <span className="w-12 h-1 bg-zinc-300 rounded-[1px]" />
                                  <span className="w-8 h-2.5 bg-blue-600 rounded-xs" />
                                </div>
                              </div>
                              {/* Right analytics feed */}
                              <div className="flex-1 flex flex-col justify-between py-0.5">
                                <div className="space-y-1">
                                  <span className="text-[8px] text-zinc-400 font-mono uppercase block">Ad Campaign Name</span>
                                  <p className="text-[11px] font-black text-slate-800">D2C Scaling - Retargeting</p>
                                </div>
                                <div className="space-y-1.5 mt-2">
                                  <div>
                                    <div className="flex justify-between text-[7.5px] text-zinc-500 font-semibold mb-0.5">
                                      <span>Ad spend pacing</span>
                                      <span>98%</span>
                                    </div>
                                    <div className="w-full h-1 bg-zinc-100 rounded-full overflow-hidden">
                                      <div className="w-[98%] h-full bg-blue-600 rounded-full" />
                                    </div>
                                  </div>
                                  <div className="flex justify-between items-center text-[9px] font-mono font-bold">
                                    <span className="text-zinc-500">ROAS Target:</span>
                                    <span className="text-emerald-500">4.8x Active</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* SPECIFIC VISUAL 4: GBP OPTIMIZATION */}
                      {activeService.id === "gbp-optimization" && (
                        <div className="relative w-full h-full flex items-center justify-center">
                          {/* Map container illustration with a dynamic pinned card */}
                          <div className="w-[90%] aspect-[1.8] bg-linear-to-br from-blue-500/10 to-indigo-500/10 border border-zinc-200 shadow-xl rounded-2xl relative overflow-hidden backdrop-blur-xs flex items-center justify-center">
                            {/* Abstract roads lines illustration representing maps */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" xmlns="http://www.w3.org/2000/svg">
                              <line x1="0" y1="20" x2="400" y2="120" stroke="#93c5fd" strokeWidth="2.5" />
                              <line x1="120" y1="0" x2="160" y2="200" stroke="#93c5fd" strokeWidth="2" />
                              <line x1="80" y1="40" x2="300" y2="40" stroke="#93c5fd" strokeWidth="3" />
                              <line x1="0" y1="120" x2="400" y2="160" stroke="#c084fc" strokeWidth="1.5" strokeDasharray="3 3" />
                            </svg>

                            {/* Floating Map Pin representation centered */}
                            <motion.div
                              animate={{ y: [0, -6, 0] }}
                              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                              className="absolute top-[18%] left-[45%] text-rose-500 flex flex-col items-center shrink-0 z-20"
                            >
                              <div className="w-7 h-7 bg-rose-600 rounded-full border border-white flex items-center justify-center text-white text-xs font-mono font-black shadow-lg">
                                📍
                              </div>
                              <div className="w-2.5 h-2.5 bg-rose-500 rotate-45 -translate-y-1.5 border-r border-b border-white shadow-md" />
                            </motion.div>

                            {/* Verification Badge Google Map listing card */}
                            <div className="absolute bottom-[8%] left-[8%] right-[8%] bg-white/95 backdrop-blur-md border border-zinc-100 shadow-xl p-3 rounded-xl flex items-center gap-3 text-left">
                              <div className="w-10 h-10 bg-blue-50 border border-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-lg shadow-inner">
                                🏢
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center gap-1.5">
                                  <p className="text-xs font-black text-slate-800 leading-none">Your Business (Map Rank #1)</p>
                                  <span className="text-[7.5px] bg-blue-100 text-blue-700 font-bold px-1 rounded">Verified</span>
                                </div>
                                <div className="flex items-center gap-1 mt-1">
                                  <span className="text-yellow-400 text-xs">★★★★★</span>
                                  <span className="text-[9px] text-zinc-400 font-bold font-mono">5.0 (148+ Organic Reviews)</span>
                                </div>
                                <p className="text-[9px] text-zinc-500 font-mono mt-1">GBP optimizing active for Bangalore zip codes</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* SPECIFIC VISUAL 5: LOCAL SERVICE ADS */}
                      {activeService.id === "local-service-ads" && (
                        <div className="relative w-full h-full flex items-center justify-center">
                          {/* Google LSA mobile layout representation */}
                          <div className="w-[70%] aspect-[1.5] bg-zinc-50 p-3 rounded-2xl border border-zinc-300 shadow-2xl flex flex-col text-left">
                            <span className="text-[7px] text-zinc-400 font-bold uppercase tracking-wider mb-2">Google LSA interface snippet</span>
                            
                            {/* Premium Verified Business badge representation */}
                            <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-3 flex items-center justify-between shadow-xs">
                              <div className="flex items-center gap-2.5">
                                <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white shrink-0 shadow">
                                  <Check className="w-4 h-4 stroke-[3]" />
                                </div>
                                <div>
                                  <div className="flex items-center gap-1">
                                    <p className="text-[12px] font-black text-slate-800">Google Guaranteed</p>
                                    <span className="text-[7.5px] text-emerald-600 font-extrabold bg-emerald-100/50 px-1.5 py-0.5 rounded">Active Badge</span>
                                  </div>
                                  <p className="text-[9px] text-zinc-500 font-medium">Pay only for pre-screened direct local bookings</p>
                                </div>
                              </div>
                            </div>

                            {/* Call notifier flashing panel */}
                            <motion.div
                              animate={{ scale: [1, 1.02, 1] }}
                              transition={{ repeat: Infinity, duration: 2.4 }}
                              className="bg-blue-600 text-white rounded-lg p-2 flex items-center justify-between mt-3 shadow-md shadow-blue-500/10"
                            >
                              <div className="flex items-center gap-2">
                                <span className="animate-ping w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                                <span className="text-[10px] font-semibold font-mono">Incoming Google Call...</span>
                              </div>
                              <span className="text-[9px] bg-white/20 text-white px-2 py-0.5 rounded font-bold">₹1,800 Lead Cost</span>
                            </motion.div>
                          </div>
                        </div>
                      )}

                      {/* SPECIFIC VISUAL 6: YOUTUBE GROWTH */}
                      {activeService.id === "youtube-growth" && (
                        <div className="relative w-full h-full flex items-center justify-center">
                          {/* Youtube Creator Dashboard analytics mockup */}
                          <div className="w-[85%] bg-zinc-950 text-white rounded-2xl border border-zinc-800 shadow-2xl p-4 flex flex-col justify-between">
                            <div className="flex justify-between items-center border-b border-zinc-900 pb-2 mb-2">
                              <div className="flex items-center gap-1.5">
                                <span className="w-2.5 h-2.5 rounded-full bg-rose-600" />
                                <span className="text-[9px] font-mono text-zinc-400 block font-bold">YOUTUBE CREATOR ANALYTICS</span>
                              </div>
                              <span className="text-[8px] bg-rose-500/15 text-rose-400 font-bold px-1.5 py-0.5 rounded">Active SEO Monitor</span>
                            </div>

                            <div className="grid grid-cols-12 gap-3 items-center">
                              {/* Left Subscriber counter stat */}
                              <div className="col-span-4 border-r border-zinc-900 pr-1.5 text-left">
                                <span className="text-[8px] text-zinc-500 block uppercase font-bold">Channel Subscribers</span>
                                <p className="text-lg font-mono font-black text-rose-500 mt-1">48,250</p>
                                <span className="text-[7.5px] text-emerald-400 font-bold font-mono">+12.4% this week</span>
                              </div>
                              {/* Right Graph curve representing engagement metric */}
                              <div className="col-span-8">
                                <span className="text-[7.5px] text-zinc-500 block uppercase font-bold text-left mb-1">Retention Path Growth</span>
                                <div className="h-14 w-full bg-linear-to-t from-rose-950/20 to-transparent rounded p-1.5 border border-zinc-900 relative flex items-center">
                                  <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                                    <path d="M0,38 Q15,35 30,22 T60,25 T90,3 T100,2" fill="none" stroke="#f43f5e" strokeWidth="2.5" />
                                    <circle cx="90" cy="3" r="2.5" fill="#f43f5e" className="animate-ping" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* SPECIFIC VISUAL 7: AI AUTOMATION SOLUTIONS */}
                      {activeService.id === "ai-automation" && (
                        <div className="relative w-full h-full flex items-center justify-center">
                          {/* Neural networks workflow circles connecting graph nodes */}
                          <div className="w-[90%] aspect-[1.8] bg-slate-950 text-white rounded-2xl relative border border-slate-800 shadow-2xl overflow-hidden p-3 flex flex-col justify-between">
                            <div className="flex justify-between items-center pb-1 border-b border-slate-900">
                              <span className="text-[8px] uppercase tracking-widest text-[#60A5FA] font-mono font-black">AI WORKFLOWS COMMAND</span>
                              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce" />
                            </div>
                            
                            {/* Workflow Map Nodes */}
                            <div className="relative flex-grow flex items-center justify-between px-4 my-2">
                              {/* Glowing vector lines connecting nodes */}
                              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" viewBox="0 0 300 80" preserveAspectRatio="none">
                                <line x1="45" y1="40" x2="110" y2="40" stroke="#3b82f6" strokeWidth="2" strokeDasharray="3 3" />
                                <line x1="190" y1="40" x2="255" y2="40" stroke="#10b981" strokeWidth="2" />
                              </svg>

                              {/* Node 1: Incoming trigger */}
                              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex flex-col items-center justify-center p-1 font-mono shadow-inner z-10 text-[7.5px] text-zinc-400">
                                <span className="text-[12px]">📞</span>
                                <span>Inbound Lead</span>
                              </div>

                              {/* Node 2: AI Processor Agent */}
                              <motion.div
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ repeat: Infinity, duration: 3 }}
                                className="w-[75px] h-14 rounded-2xl bg-[#EFF6FF] text-blue-600 border border-blue-500/30 flex flex-col items-center justify-center p-1 shadow-lg shadow-blue-500/20 z-10 font-bold text-[8.5px] text-center"
                              >
                                <span className="text-[16px] animate-spin [animation-duration:10s]">🧠</span>
                                <span className="text-blue-900 font-extrabold uppercase">AI AGENT COMP</span>
                              </motion.div>

                              {/* Node 3: Structured sync (WhatsApp + CRM) */}
                              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex flex-col items-center justify-center p-1 font-mono shadow-inner z-10 text-[7.5px] text-zinc-400">
                                <span className="text-[12px]">📱</span>
                                <span>WhatsApp OK</span>
                              </div>
                            </div>

                            <span className="text-[8px] text-center text-zinc-500 font-mono tracking-wider">Automates over 90% of repeatable customer communication</span>
                          </div>
                        </div>
                      )}

                      {/* SPECIFIC VISUAL 8: APPLICATION DESIGN */}
                      {activeService.id === "application-design" && (
                        <div className="relative w-full h-full flex items-center justify-center">
                          {/* Beautiful overlapping UI app screens */}
                          <div className="relative w-[75%] h-full flex items-center justify-center">
                            
                            {/* App Screen 1 (Backing) */}
                            <div className="absolute left-[8%] w-[45%] aspect-[0.52] bg-zinc-900 p-2.5 rounded-2xl shadow-xl border border-zinc-800 scale-90 opacity-70 transform -rotate-12 flex flex-col justify-between">
                              <span className="w-10 h-1 bg-zinc-700 rounded-full mx-auto" />
                              <div className="flex-grow bg-slate-800 rounded-lg mt-2 p-1.5 flex flex-col gap-2">
                                <span className="w-full h-6 bg-slate-700 rounded-sm" />
                                <span className="w-full h-6 bg-slate-700 rounded-sm" />
                              </div>
                            </div>

                            {/* App Screen 2 (Primary Front) */}
                            <motion.div
                              animate={{ y: [0, -6, 0] }}
                              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                              className="absolute left-[30%] w-[48%] aspect-[0.52] bg-white p-2.5 rounded-2xl shadow-2xl border border-zinc-200/80 flex flex-col justify-between z-10"
                            >
                              {/* iPhone Dynamic Island */}
                              <div className="w-14 h-3.5 bg-zinc-950 rounded-full mx-auto flex items-center justify-center text-[5px] text-white font-mono shrink-0">
                                LOCALBUILD
                              </div>

                              <div className="flex-grow my-2.5 text-left flex flex-col justify-between">
                                <div>
                                  <span className="text-[8px] bg-blue-50 text-blue-600 font-extrabold px-1.5 py-0.5 rounded uppercase">FinTech Vibe</span>
                                  <p className="text-[12px] font-black text-slate-800 mt-1">E-Wallet UI</p>
                                </div>
                                
                                <div className="h-16 w-full rounded-lg bg-blue-600 p-2 text-white flex flex-col justify-between">
                                  <span className="text-[7px] text-white/70 block">Total Balance</span>
                                  <p className="text-[12.5px] font-mono font-black">₹1,85,600</p>
                                  <span className="w-full h-1 bg-white/30 rounded-full" />
                                </div>

                                <div className="grid grid-cols-3 gap-1.5">
                                  <div className="w-full h-5 bg-zinc-50 rounded border border-zinc-100 flex items-center justify-center">🏦</div>
                                  <div className="w-full h-5 bg-zinc-50 rounded border border-zinc-100 flex items-center justify-center">📈</div>
                                  <div className="w-full h-5 bg-zinc-50 rounded border border-zinc-100 flex items-center justify-center">🛡️</div>
                                </div>
                              </div>

                              <span className="w-6 h-1 bg-zinc-300 rounded-full mx-auto mt-auto shrink-0" />
                            </motion.div>
                          </div>
                        </div>
                      )}

                      {/* SPECIFIC VISUAL 9: ECOMMERCE MANAGEMENT */}
                      {activeService.id === "ecommerce-management" && (
                        <div className="relative w-full h-full flex items-center justify-center">
                          {/* Store dashboard template with metrics */}
                          <div className="w-[85%] bg-white border border-zinc-200 shadow-2xl rounded-2xl p-4 text-left flex flex-col justify-between">
                            <div className="flex justify-between items-center border-b border-zinc-100 pb-2 mb-2">
                              <span className="text-[10px] font-black text-slate-800">Shopify Enterprise Dashboard</span>
                              <span className="text-[8px] bg-emerald-50 text-emerald-600 font-bold px-1.5 py-0.5 rounded font-mono">Synced OK</span>
                            </div>

                            <div className="grid grid-cols-3 gap-2 mb-3">
                              <div className="bg-zinc-50/70 border border-zinc-200/50 rounded-lg p-2">
                                <span className="text-[7.5px] text-zinc-400 block font-bold uppercase">Store Orders</span>
                                <p className="text-[13px] font-mono font-extrabold text-[#0F2167]">+1,254</p>
                              </div>
                              <div className="bg-zinc-50/70 border border-zinc-200/50 rounded-lg p-2">
                                <span className="text-[7.5px] text-zinc-400 block font-bold uppercase">Revenue (Inr)</span>
                                <p className="text-[13px] font-mono font-extrabold text-blue-600">₹8.4 Lakh</p>
                              </div>
                              <div className="bg-zinc-50/70 border border-zinc-200/50 rounded-lg p-2">
                                <span className="text-[7.5px] text-zinc-400 block font-bold uppercase">Checkout CR</span>
                                <p className="text-[13px] font-mono font-extrabold text-emerald-500">4.12%</p>
                              </div>
                            </div>

                            <div className="bg-blue-50/50 border border-blue-100/60 p-2.5 rounded-lg flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <span className="text-base shrink-0">🛒</span>
                                <span className="text-[10px] font-semibold text-slate-700">Conversion optimization engine fully integrated</span>
                              </div>
                              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-ping shrink-0" />
                            </div>
                          </div>
                        </div>
                      )}

                      {/* SPECIFIC VISUAL 10: DROPSHIPPING SYSTEMS */}
                      {activeService.id === "dropshipping-systems" && (
                        <div className="relative w-full h-full flex items-center justify-center">
                          {/* Suppliers global map node nodes tracking routes */}
                          <div className="w-[90%] aspect-[1.8] bg-linear-to-tl from-slate-900 to-indigo-950 text-white rounded-2xl p-4 border border-zinc-800 shadow-2xl relative overflow-hidden flex flex-col justify-between">
                            <div className="absolute inset-0 bg-radial from-indigo-500/10 via-transparent to-transparent pointer-events-none" />
                            <div className="flex justify-between items-center border-b border-zinc-800 pb-1.5">
                              <span className="text-[8px] font-mono text-zinc-400 font-bold uppercase tracking-wider">Supplier network pipeline v2</span>
                              <span className="text-[8px] bg-sky-500/15 text-sky-400 font-extrabold px-1.5 rounded font-mono">AUTO SYNCED</span>
                            </div>

                            {/* Center routing logistics visuals */}
                            <div className="relative flex-grow flex items-center justify-between px-3 my-2 text-left">
                              
                              <div className="border border-zinc-850 bg-slate-950 p-2 rounded flex flex-col justify-between w-24 h-16 z-10 shadow">
                                <span className="text-[9px] text-[#60A5FA] font-bold">China Factory</span>
                                <span className="text-[7.5px] text-zinc-500 mt-1 block font-mono">Fulfillment Auto</span>
                              </div>

                              <div className="h-0.5 bg-blue-500/50 flex-1 relative mx-3">
                                <span className="absolute top-1/2 left-1/3 -translate-y-1/2 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping" />
                              </div>

                              <div className="border border-zinc-850 bg-slate-950 p-2 rounded flex flex-col justify-between w-24 h-16 z-10 shadow">
                                <span className="text-[9px] text-emerald-400 font-bold">Bangalore Hub</span>
                                <span className="text-[7.5px] text-zinc-500 mt-1 block font-mono">Logistics Center</span>
                              </div>

                            </div>
                            <p className="text-[8.5px] text-center text-zinc-500 font-sans">Automated CJ / AliExpress / private agent tracking updates</p>
                          </div>
                        </div>
                      )}

                      {/* SPECIFIC VISUAL 11: AFFILIATE MARKETING */}
                      {activeService.id === "affiliate-marketing" && (
                        <div className="relative w-full h-full flex items-center justify-center">
                          {/* Commission graphs and earnings card summaries */}
                          <div className="w-[85%] bg-white border border-zinc-200/90 shadow-2xl rounded-2xl p-4 flex flex-col justify-between text-left">
                            <div className="flex justify-between items-center border-b border-zinc-100 pb-2 mb-2">
                              <span className="text-[10px] font-black text-slate-800">Affiliate Income Engine System</span>
                              <span className="text-[8.5px] text-emerald-600 bg-emerald-100/50 px-1.5 rounded font-mono font-extrabold">+₹4,500 Hourly Rate</span>
                            </div>

                            <div className="flex gap-4 items-center">
                              {/* Total monthly revenue stat */}
                              <div className="w-[45%]">
                                <span className="text-[7.5px] text-zinc-400 block font-bold uppercase tracking-wider">Total Commission</span>
                                <p className="text-xl font-mono font-black text-[#0F2167] mt-0.5">₹12,48,200</p>
                                <span className="text-[8.5px] text-emerald-500 font-bold font-mono">+18.5% YoY</span>
                              </div>
                              {/* Mini graphical line mapping */}
                              <div className="flex-1 h-12 bg-[#EFF6FF] border border-[#BFDBFE] rounded-lg p-1.5 relative overflow-hidden">
                                <svg className="w-full h-full" viewBox="0 0 100 30" preserveAspectRatio="none">
                                  <path d="M0,28 L20,24 L40,15 L60,18 L80,5 L100,2" fill="none" stroke="#2563eb" strokeWidth="2" />
                                  <circle cx="100" cy="2" r="2.5" fill="#2563eb" className="animate-ping" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* SPECIFIC VISUAL 12: BUSINESS AUTOMATION */}
                      {activeService.id === "business-automation" && (
                        <div className="relative w-full h-full flex items-center justify-center">
                          {/* CRM flow charts representing automated pipelines */}
                          <div className="w-[90%] aspect-[1.8] bg-[#FAF5FF] border border-[#E9D5FF] rounded-2xl p-3 flex flex-col justify-between text-left shadow-xl relative overflow-hidden">
                            <div className="absolute inset-0 bg-radial from-purple-500/5 via-transparent to-transparent pointer-events-none" />
                            <div className="flex justify-between items-center border-b border-[#E9D5FF]/60 pb-1.5">
                              <span className="text-[8.5px] font-mono text-purple-600 font-extrabold uppercase">HubSpot / CRM Dynamic Pipeline</span>
                              <span className="text-[8px] bg-purple-100 text-purple-700 px-1.5 rounded font-mono font-extrabold">Active Mapping</span>
                            </div>

                            {/* Lead statuses workflows cards */}
                            <div className="grid grid-cols-3 gap-2.5 my-2">
                              <div className="bg-white border border-[#E9D5FF] rounded p-1.5 flex flex-col justify-between h-14">
                                <span className="text-[7.5px] text-purple-700 font-bold font-mono block">Status 1: Lead capture</span>
                                <span className="text-[10px] font-bold text-zinc-800 leading-none">WhatsApp Bot</span>
                              </div>
                              <div className="bg-white border border-[#E9D5FF] rounded p-1.5 flex flex-col justify-between h-14 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-1 h-full bg-blue-500" />
                                <span className="text-[7.5px] text-blue-600 font-bold font-mono block">Status 2: Assessment</span>
                                <span className="text-[10px] font-bold text-zinc-800 leading-none">Auto Estimate</span>
                              </div>
                              <div className="bg-white border border-[#E9D5FF] rounded p-1.5 flex flex-col justify-between h-14 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-1 h-full bg-emerald-500" />
                                <span className="text-[7.5px] text-emerald-600 font-bold font-mono block">Status 3: Win Close</span>
                                <span className="text-[10px] font-bold text-zinc-800 leading-none">Sign Contract</span>
                              </div>
                            </div>
                            <p className="text-[8px] text-center text-zinc-500 font-mono tracking-wider">Auto invoices/reminders save up to 45 hours weekly per account manager</p>
                          </div>
                        </div>
                      )}

                    </div>

                    {/* BOTTOM METRIC CARD BAR */}
                    <div className="border-t border-zinc-200/75 pt-3 flex items-center justify-between text-[9.5px] font-mono text-zinc-500">
                      <span>CLIENT: LOCALBUILD CORP</span>
                      <span>SYSTEM QUALITY RATE: 100%</span>
                    </div>

                  </div>

                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>

        {/* ------------------------------------------------------------- */}
        {/* PREMIUM GRID PERSISTING UNDERNEATH FOR MOBILE SCANNABILITY */}
        {/* ------------------------------------------------------------- */}
        <div className="mt-20">
          <p className="text-[11px] font-mono tracking-widest text-zinc-400 uppercase font-bold text-center mb-10">
            Or browse all catalog services individually
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {servicesData.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: Math.min(index * 0.04, 0.4) }}
                  onClick={() => {
                    setActiveService(service);
                    // scroll to showroom tab for instant visual reflection safely
                    const el = document.getElementById("services");
                    if (el) {
                      el.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className={`group bg-white border rounded-2xl p-4 md:p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between w-full ${
                    activeService.id === service.id 
                      ? "border-blue-600 ring-2 ring-blue-500/10 shadow-lg shadow-blue-500/5" 
                      : "border-zinc-200 hover:border-blue-500"
                  }`}
                >
                  <div>
                    {/* Icon with drop shadow standard vector design */}
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-115 shrink-0 ${
                      activeService.id === service.id ? "bg-blue-600 text-white" : "bg-blue-50 text-blue-600"
                    }`}>
                      <IconComponent className="w-5 h-5" />
                    </div>

                    {/* Service Title */}
                    <h3 className="font-sans font-bold text-sm sm:text-base text-zinc-900 mt-5 group-hover:text-blue-600 transition-colors duration-200">
                      {service.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-zinc-500 text-[12.5px] leading-relaxed mt-2.5">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* know more link */}
                  <div className="mt-5 pt-3 border-t border-zinc-100 flex items-center justify-between">
                    <span className="text-blue-600 font-bold text-xs inline-flex items-center gap-1 group/btn hover:underline">
                      Launch Showroom
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
                    </span>
                    <span className="text-[10px] font-mono text-zinc-400">ID: {service.num}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Dynamic Detail Modal Page */}
        <AnimatePresence>
          {selectedDetail && (
            <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
              <div 
                className="absolute inset-0 cursor-default" 
                onClick={handleCloseDetail}
              />

              {/* Modal Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="relative bg-white rounded-2xl border border-zinc-200 shadow-2xl max-w-xl w-full max-h-[85vh] overflow-y-auto z-10 p-6 sm:p-8"
              >
                <button
                  onClick={handleCloseDetail}
                  className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-650 p-2 rounded-lg hover:bg-zinc-50 transition cursor-pointer"
                  aria-label="Close details"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Header info */}
                <div className="flex items-center gap-4 border-b border-zinc-100 pb-5 mb-5 mt-1">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center text-xl shrink-0">
                    <selectedDetail.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <span className="text-[9px] bg-blue-100 text-blue-700 font-extrabold uppercase tracking-widest px-2 py-0.5 rounded">
                      Expert Solutions ID: {selectedDetail.num}
                    </span>
                    <h3 className="font-sans font-black text-xl text-zinc-900 mt-1 leading-tight">
                      {selectedDetail.title}
                    </h3>
                  </div>
                </div>

                {/* Scrollable specs summary */}
                <div className="space-y-6">
                  {/* What We Do section */}
                  <div className="space-y-1.5">
                    <h4 className="text-[10px] font-sans font-black text-zinc-400 uppercase tracking-wider">
                      Executive Roadmap
                    </h4>
                    <p className="text-sm text-zinc-600 leading-relaxed font-normal">
                      {selectedDetail.whatWeDo}
                    </p>
                  </div>

                  {/* Features checklist */}
                  <div className="space-y-3">
                    <h4 className="text-[10px] font-sans font-black text-zinc-400 uppercase tracking-wider">
                      Campaign Specifications Included
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {selectedDetail.features.map((feature, featureIdx) => (
                        <div key={featureIdx} className="flex items-start gap-2 text-xs text-zinc-600">
                          <div className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-100">
                            <Check className="w-2.5 h-2.5 stroke-[4]" />
                          </div>
                          <span className="font-sans font-bold leading-none mt-1">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Who It's For section */}
                  <div className="bg-zinc-50 border border-zinc-200/50 p-4 rounded-xl flex gap-3.5 text-xs text-zinc-600 text-left">
                    <Users className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-extrabold text-zinc-900 uppercase text-[10px] tracking-wider mb-0.5">
                        Qualified Audience Fit
                      </h5>
                      <p className="leading-relaxed font-medium text-[12px] text-zinc-500">
                        {selectedDetail.whosItFor}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Actions footer wrapper */}
                <div className="pt-6 mt-6 border-t border-zinc-100 flex flex-col sm:flex-row gap-3.5 justify-end">
                  <button
                    onClick={handleCloseDetail}
                    className="order-2 sm:order-1 text-xs font-bold uppercase tracking-wider text-zinc-500 hover:text-zinc-800 px-5 py-3 rounded-xl border border-zinc-200 hover:bg-zinc-50 transition cursor-pointer text-center"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => handleCtaClick(selectedDetail)}
                    className="order-1 sm:order-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider py-3 px-6 rounded-xl transition shadow-lg shadow-blue-600/10 cursor-pointer text-center flex items-center justify-center gap-1.5"
                  >
                    Launch Campaign Strategy
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
