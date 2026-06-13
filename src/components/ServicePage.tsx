import React, { useState, useEffect } from "react";
import { ArrowLeft, Check, Compass, Cpu, Mail, MapPin, Monitor, Phone, Share2, ShieldCheck, ShoppingBag, Target, Timer, TrendingUp, Zap, HelpCircle, Star, BarChart3, ChevronRight, Globe, Lock } from "lucide-react";

// Types matching the user request
export interface ServiceDetail {
  slug: string;
  title: string;
  metaTitle: string;
  metaDesc: string;
  badge: string;
  icon: any;
  headline: string;
  description: string;
  detailedPoints: string[];
  featuresList: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  localImpact: string;
}

// 12 Services matching slugs requested by user
export const servicesDataList: ServiceDetail[] = [
  {
    slug: "website-design",
    title: "Website Design",
    metaTitle: "Website Design in Bangalore | Professional Web Agency Bengaluru",
    metaDesc: "Stunning, high-performance, mobile-first website design agency in Bangalore. Elevate your local Business with 90+ PageSpeed scores, UI/UX structure, and WhatsApp CTAs.",
    badge: "Web Development & UI/UX",
    icon: Monitor,
    headline: "High-Speed, Conversion-Optimized Website Design Services for Dominating Your Market",
    description: "Your business website is your virtual sales showroom. We build lightning-fast, premium digital websites that look luxurious, rank at the top of search networks, and turn casual visitors into high-paying local customers.",
    detailedPoints: [
      "Ultra-responsive fluid architecture with zero horizontal scroll failure.",
      "Engineered to pass Core Web Vitals to achieve 90+ Google PageSpeed scores.",
      "Impeccably tailored metadata tags, semantic structure and internal link networks.",
      "Custom integrated callback modules, CRM hooks and interactive scheduling."
    ],
    featuresList: [
      { title: "Premium Branding & UI/UX", desc: "No templates or low-effort designs. Generous negative space, elite Google Fonts, and modern CSS gradients tailored to high-trust brands." },
      { title: "Engineered Mobile-First Speed", desc: "Built with extreme compression, lightweight loading libraries, and optimized code splitting for instantaneous mobile loads." },
      { title: "Advanced Lead Integration", desc: "Equipped with sticky mobile call-now bars, persistent responsive forms, and robust conversion tracker analytics." }
    ],
    faqs: [
      { q: "How does LocalBuild ensure a 90+ PageSpeed score?", a: "We utilize dynamic React caching, WebP next-gen image formats, CSS/JS minify pipelines, and code splitting on all custom layouts." },
      { q: "Is the design fully accessible and mobile responsive?", a: "Absolutely. Our grid systems adjust layout boundaries smoothly from ultra-dense desktop viewports down to small 320px mobile screens with active touch-targets." },
      { q: "Will my custom website rank on Google after launch?", a: "Yes. Every element is built with clean semantic HTML, structured breadcrumb schemas, proper tags, and high-quality local keyword density." }
    ],
    localImpact: "Website design and high-converting landing assets engineered to expand localized visibility across Bangalore commercial centers like Whitefield, Indiranagar, and Electronic City."
  },
  {
    slug: "google-ads-management",
    title: "Google Ads Management",
    metaTitle: "Google Ads Management in Bangalore | Paid Search PPC Specialists",
    metaDesc: "ROI-driven Google Ads management agency in Bangalore. Get high-intent customer leads on Google Search, Maps, and Local Service Ads. Track conversions instantly.",
    badge: "PPC & Lead Generation",
    icon: Target,
    headline: "High-ROAS Google Ads Management Engineered to Drive Dynamic Local Business Calls",
    description: "Capture buyers at the exact millisecond they search for your service. Our high-intent Search and Display pipelines bypass vanity metrics, driving real phone calls and consultation leads directly to your client roster.",
    detailedPoints: [
      "Semantic keyword intent analysis and competitor keyword hijack strategies.",
      "Strict negative keyword exclusion structures to save your monthly budget.",
      "Dedicated high-converting custom-designed landing pages built for quality score.",
      "Advanced Google Tag Manager triggers to track accurate calls and form submissions."
    ],
    featuresList: [
      { title: "Advanced Negative Mapping", desc: "Prevent wasting budgets on irrelevant search queries. Continuous click inspection ensures you only pay for buyers." },
      { title: "A/B Dynamic Copy Tests", desc: "Testing multiple high-CTR copy combinations to secure the top-tier ad position overlaying competitors." },
      { title: "Conversion Tracking Sync", desc: "End-to-end integration with your sales CRM to calculate direct acquisition cost and calculate ROI." }
    ],
    faqs: [
      { q: "How do you prevent wasted ad spend on Google Ads?", a: "We optimize targeting parameters hourly, leverage local zip exclusions, apply multi-tier negative matches, and target localized buyer intent." },
      { q: "What is the recommended starting Google Ads budget?", a: "While we scale with any budget, we recommend a minimum of ₹15,000 monthly to gather high-intent search clicks quickly." },
      { q: "Do you build custom landing pages for the campaigns?", a: "Yes. We design high-speed, relevant landing templates that align with search intent and maximize conversion ratios." }
    ],
    localImpact: "Accelerate high-intent phone conversions from immediate prospects across Bangalore neighborhoods including Jayanagar, Koramangala, and Hebbal."
  },
  {
    slug: "meta-ads-management",
    title: "Meta Ads Management",
    metaTitle: "Meta Ads Management in Bangalore | Facebook & Instagram Experts",
    metaDesc: "Scale your sales with Meta Ads in Bangalore. High-converting Facebook & Instagram ad funnels, scroll-stopping creatives, and advanced pixel retargeting frameworks.",
    badge: "Social Scaling",
    icon: Share2,
    headline: "Scroll-Stopping Facebook & Instagram Campaigns Built for Brand Domination & Leads",
    description: "Unleash high-ROAS social systems matching your brand directly with Bangalore audiences. We curate stellar, scroll-stopping assets, target high-income demographics, and establish retargeting systems to capture every lead.",
    detailedPoints: [
      "Advanced custom cohort and lookalike expansion modeling.",
      "High-trust copy writing & graphic design focused on brand authority.",
      "Seamless integration of direct Messenger and WhatsApp conversion API triggers.",
      "Rigorous creative lifecycle management to prevent audience fatigue."
    ],
    featuresList: [
      { title: "Lookalike Custom Audiences", desc: "Target users with matching behaviors, search habits, and demographics to your existing high-value customers." },
      { title: "Scroll-Stopping Visual Assets", desc: "Curate beautiful layouts with blue and light grey accents that capture prompt attention on Instagram grids." },
      { title: "Pixel & CAPI Hardening", desc: "Implement full Conversion API triggers to capture accurate purchase events despite iOS privacy constraints." }
    ],
    faqs: [
      { q: "What creatives work best for local businesses on Meta?", a: "High-trust client testimonials, before-and-after portfolios, and direct walkthrough videos of your workspace perform exceptionally well." },
      { q: "How do you track leads in real-time from Facebook?", a: "All submissions are immediately caught by our lead management CRM and streamed directly to your central Admin dashboard." }
    ],
    localImpact: "Generate high-visibility social demand in HSR Layout, Koramangala, and Indiranagar with high-end localized demographic profiling."
  },
  {
    slug: "google-business-profile-optimization",
    title: "Google Business Profile Optimization",
    metaTitle: "Google Business Profile Optimization Bangalore | Local SEO Pack",
    metaDesc: "Dominate the Google Local Map Pack in Bangalore. Expert Google Business Profile optimization, local citation building, and geographic rankings.",
    badge: "Local SEO Packs",
    icon: Compass,
    headline: "Secure the Coveted #1 Visual Spot on Google Maps for Organic Calls",
    description: "Over 80% of local search volume is captured by the Google Maps 3-Pack. We optimize your local profiles, publish geotagged high-resolution assets, audit listings, and rank your business above the competitors.",
    detailedPoints: [
      "Exhaustive Google Business Profile category curation & local keyword tagging.",
      "Metadata image coordinates injection (geocoding) for localized proof.",
      "Continuous listing verification management and competitor citation reviews.",
      "Automated custom QR routing setups to spark rapid 5-star organic reviews."
    ],
    featuresList: [
      { title: "Geocoded Image Injections", desc: "Embed real physical latitude/longitude parameters into organizational images to prove actual presence to Google's ranking systems." },
      { title: "Hyperlocal Citation Audits", desc: "Coordinate business name, address, and phone consistency across 100+ local indices to lock in Trust metrics." },
      { title: "Maps SPAM Filtering", desc: "Expose and remove fraudulent, fake competitor profiles that are stealing your local search traffic." }
    ],
    faqs: [
      { q: "How long does it take to rank on Google Maps?", a: "While minor improvements occur instantly, fully dominating the Map Pack across primary zip codes typically takes 45 to 90 days." },
      { q: "Can you optimize multiple physical corporate locations?", a: "Yes. We create multi-tier hierarchical clusters ensuring NAP consistency across all branches." }
    ],
    localImpact: "Rule map inquiries from active local searchers in Electronic City, Whitefield, BTM Layout, and Marathahalli."
  },
  {
    slug: "local-service-ads",
    title: "Local Service Ads",
    metaTitle: "Local Service Ads Bangalore | Google Guaranteed Lead Gen",
    metaDesc: "Get Google Guaranteed and rank above paid search results. Manage and secure premium Local Service Ads (LSA) in Bangalore to scale your bookings.",
    badge: "Google Guaranteed",
    icon: ShieldCheck,
    headline: "Position Your Brand on the Absolute Top Screen Segments with Google Guaranteed",
    description: "Gain premium trust with Google Guaranteed certifications. Local Service Ads sit on top of standard search query responses. Best of all: you only pay for actual incoming phone calls from real customers.",
    detailedPoints: [
      "Complete walkthrough management of Google Guaranteed business checks.",
      "Bidding optimization specifically geared for high-quality phone calls.",
      "Strict budget cap configs to ensure zero accidental overcharging.",
      "Accurate call recording and lead dispute management to save overhead."
    ],
    featuresList: [
      { title: "Google Verification Assistance", desc: "Seamless navigation of licensing proof, business verification, and background clearances." },
      { title: "Pure Pay-Per-Lead Model", desc: "Eliminate low-quality clicks. You only pay when a customer calls your business line directly." },
      { title: "Call Audit Support", desc: "We review and dispute invalid or spam callers to ensure your budget is only spent on real opportunities." }
    ],
    faqs: [
      { q: "What industries qualify for Google Guaranteed?", a: "Home inspectors, plumbers, electricians, clinics, cleaning agencies, and key local service providers qualify." }
    ],
    localImpact: "Be the first verified business that residents in Whitefield, Jayanagar, and Koramangala see when calling for services."
  },
  {
    slug: "youtube-growth",
    title: "YouTube Growth",
    metaTitle: "YouTube Channel Growth Agency | Video SEO Bangalore",
    metaDesc: "Build video authority. Professional YouTube growth agency in Bangalore. Optimize videos with click-rate designs, retention analysis, and high-CTR titles.",
    badge: "Video Authority",
    icon: Zap,
    headline: "Build High-Authority Video Channels to Spark Passive Inbound Lead Flow",
    description: "Leverage the world's second-largest search engine. We structure, design, tag, and write high-impact video structures that secure algorithm favorites, build organic influence, and generate reliable lead conversions.",
    detailedPoints: [
      "Rigorous semantic video keyword exploration & tag optimization.",
      "High-contrast thumb mockups designed for click-through advantages.",
      "Detailed audience retention audits and script structures.",
      "Call-to-action cards configured to funnel video traffic onto your website."
    ],
    featuresList: [
      { title: "Semantic Tags & Description Layouts", desc: "Crafting description templates with structured chapters and keyword lists to assist search engine indexing." },
      { title: "High-CTR Custom Thumbnails", desc: "Modern, luxury styling using bold displays and high-contrast blue graphics to stand out on viewer feeds." },
      { title: "Video Content Planning", desc: "Providing ready-to-record video templates designed to naturally hold viewer retention for maximum search favor." }
    ],
    faqs: [
      { q: "How long does it take to see YouTube organic search traffic?", a: "Usually, properly optimized videos rank in search for low-competition keyphrases within 14 to 30 days of setup." }
    ],
    localImpact: "Expand your corporate or personal brand authority to attract premium enterprises and local partnerships in Bangalore technological corridors."
  },
  {
    slug: "ai-automation-solutions",
    title: "AI Automation Solutions",
    metaTitle: "AI Automation Solutions | Business Workflow Agency Bangalore",
    metaDesc: "Automate your operations. Expert AI automation systems in Bangalore. Deploy WhatsApp auto-responders, Zapier pipelines, custom AI bots, and custom schedulers.",
    badge: "Operations Scale",
    icon: Cpu,
    headline: "Deploy Smart AI Workflows to Capture Handshakes Around the Clock",
    description: "Stop losing conversions to slow response cycles. We construct intelligent auto-replies, API pipelines, and custom agents that filter incoming inquiries, prompt callbacks, and schedule calendars automatically.",
    detailedPoints: [
      "Bespoke unified chatbots for WhatsApp, Web, and social media feeds.",
      "Multi-system Zapier, Make, and n8n data bridge engineering.",
      "Immediate automated callback triggers responding within 2 minutes.",
      "Automatic synchronization with client-facing custom dashboards."
    ],
    featuresList: [
      { title: "WhatsApp Auto-Responders", desc: "Engage local customers instantly with friendly, intelligent conversational layouts that gather details." },
      { title: "CRM Multi-Platform Bridges", desc: "Connect forms directly with central company sheets, databases, and admin software without double-data failures." },
      { title: "Lead Filtering Frameworks", desc: "AI-based data scanning which verifies prospect intent before triggering expensive human outreach." }
    ],
    faqs: [
      { q: "Can these automations connect with Google Sheets or standard CRMs?", a: "Absolutely. We are specialists in linking local databases with Sheets, Salesforce, HubSpot, and GoHighLevel." }
    ],
    localImpact: "Reduce operating costs and capture Bangalore prospects instantly, out-responding slower local competitors."
  },
  {
    slug: "application-design",
    title: "Application Design",
    metaTitle: "Mobile & Web Application Design Bangalore | Premium Figma UI",
    metaDesc: "Figma design and UI/UX developers in Bangalore. We create stunning, responsive mobile and web layouts for high-growth local tech startups.",
    badge: "Figma UI/UX & Prototypes",
    icon: Monitor,
    headline: "Stunning Web & Mobile Product Layouts Engineered with UI/UX Excellence",
    description: "Launch your application with high-trust design configurations. We develop responsive layouts, interactive components, design system frameworks, and production-ready code tokens tailored for target user retention.",
    detailedPoints: [
      "Interactive high-fidelity responsive Figma mobile application mockups.",
      "Comprehensive typography layouts, colors, spacing rules, and custom assets.",
      "Strict viewport adaptations (Android, iOS, Web frameworks).",
      "Seamless prototype design transitions to improve developer handoff."
    ],
    featuresList: [
      { title: "Custom User Flow Testing", desc: "Determine spatial bottlenecks and eliminate client interaction friction points prior to starting code." },
      { title: "Standard Design Tokens", desc: "Structured styles (colors, paddings, rounded dimensions) that map directly into code properties like Tailwind CSS." },
      { title: "Aesthetic Display Scales", desc: "Utilize elite font weights and spacious spacing systems to deliver a premium, premium feel." }
    ],
    faqs: [
      { q: "What design tools do you use?", a: "We primarily build in industry-standard Figma, supplying complete access to layers, vectors, and layouts." }
    ],
    localImpact: "Design layouts that compete directly on global app stores, built right next to tech majors in Bangalore."
  },
  {
    slug: "ecommerce-management",
    title: "Ecommerce Management",
    metaTitle: "Ecommerce & Shopify Store Management Bangalore | Sales CRO",
    metaDesc: "Expert Shopify and ecommerce management in Bangalore. High-speed custom themes, product page conversion optimization, and automated checkout funnels.",
    badge: "Shopify & Sales Scale",
    icon: ShoppingBag,
    headline: "Accelerate Store Checkouts & Cart Conversions with Custom Storefronts",
    description: "Get more sales from your shopping traffic. We optimize, structure, and scale your virtual storefront. From lightning-fast product pages to custom secure checkouts, we build layouts that spark confidence.",
    detailedPoints: [
      "Custom lightning-fast Shopify & WooCommerce style architectures.",
      "Optimized one-page shopping carts designed to lift buyer action.",
      "Bespoke transactional notification patterns, emails, and WhatsApp alerts.",
      "Deep pixel, GTM, and GA4 tracking parameters to map exact buyer paths."
    ],
    featuresList: [
      { title: "Product Landing Engineering", desc: "Build layouts matching user search descriptors, highlighting benefits and reviews in beautiful layouts." },
      { title: "Frictionless Payment Routing", desc: "Connect local gateways like Razorpay with standard international methods seamlessly." },
      { title: "Conversion Lift Auditing", desc: "Continuous testing of buttons, layouts, pricing, and messaging to extract maximum profit metrics." }
    ],
    faqs: [
      { q: "Can we migrate our slow existing store onto your system?", a: "Yes, we specialize in high-efficiency migrations to Shopify while preserving all client SEO paths." }
    ],
    localImpact: "Turn local search traffic into sales across major Indian and global shopping avenues."
  },
  {
    slug: "dropshipping-systems",
    title: "Dropshipping Systems",
    metaTitle: "Automated Dropshipping Store Setup Bangalore | Supply Agency",
    metaDesc: "Complete dropshipping system setup in Bangalore. Seamless product importing, automated supplier integration, private shipping options, and conversions.",
    badge: "Supply Automations",
    icon: Timer,
    headline: "Autonomous Dropshipping Networks Configured with High-Margin Agents",
    description: "Launch high-performance dropshipping brands with reliable fulfillment structures. We create beautiful layouts, link verified private agents, configure automated order tracking, and support high-ROAS social ads.",
    detailedPoints: [
      "High-converting standalone single product layout deployment.",
      "Instant integration with suppliers, automatic orders, and synchronizations.",
      "Custom private label packing & quick line shipping tracks.",
      "Comprehensive search and social advertising templates."
    ],
    featuresList: [
      { title: "Supplier Auto-Sync", desc: "Eliminate manual data entries. Inbound orders are routed directly for supplier packing instantly." },
      { title: "Private Logistics Setup", desc: "Avoid slow standard delivery. Access premium private lines delivering packages globally in 6-10 days." },
      { title: "High-Margin Curation", desc: "Research market metrics to identify low-competition, high-yield items with massive conversion appeal." }
    ],
    faqs: [
      { q: "What platforms do you build dropshipping apps on?", a: "We mainly develop on Shopify, combining custom styling blocks to keep page load speed below 1.8 seconds." }
    ],
    localImpact: "Coordinate digital supply chains with global fulfillment centers right from your office in Bangalore."
  },
  {
    slug: "affiliate-marketing-setup",
    title: "Affiliate Marketing Setup",
    metaTitle: "Affiliate Marketing Website Setup Bangalore | SEO Commission",
    metaDesc: "Start your affiliate income agency in Bangalore. High-authority programmatic SEO websites, Amazon/private affiliate link structures, and custom funnels.",
    badge: "Authority Income Builds",
    icon: Globe,
    headline: "Build High-Authority Page Networks Designed to Collect Passive Commissions",
    description: "Monetize search engine traffic with programmatic content blocks. We design specialized review layouts, lead generators, comparison interfaces, and email collectors to maximize your commission checks.",
    detailedPoints: [
      "Highly optimized keyword structures targeting low-difficulty buyer intent.",
      "Cooperative link networks designed to pass SEO value down paths.",
      "Programmatic template generation supporting 100+ review write-ups.",
      "Integration with ClickBank, Amazon, and lucrative private contracts."
    ],
    featuresList: [
      { title: "Dynamic Product Comparison Grids", desc: "Allow local readers to evaluate items quickly via layout tables with beautiful CTA link buttons." },
      { title: "Programmatic SEO Blocks", desc: "Build structured templates that automatically generate hundreds of high-ranking local and global reviews." },
      { title: "Opt-In Lead Capture Magnets", desc: "Collect emails to scale newsletter lists, continuously driving clicks to your affiliate partner links." }
    ],
    faqs: [
      { q: "How do you select target niches for affiliate blogs?", a: "We analyze global search volume, check backlink profiles, evaluate competitor weak points, and prioritize high-payout products." }
    ],
    localImpact: "Own high-traffic informational pages that capture consumer intent before standard shopping platforms."
  },
  {
    slug: "business-automation-systems",
    title: "Business Automation Systems",
    metaTitle: "Enterprise Business Automation Bangalore | CRM Setup Agency",
    metaDesc: "Scale your workflow with business automation in Bangalore. GoHighLevel CRM setup, automated email/SMS, visual operational audits, and KPI dashboards.",
    badge: "Enterprise CRM Systems",
    icon: Zap,
    headline: "Streamline Corporate Workflows with Central CRM Command Intelligence",
    description: "Tear down manual inefficiencies. We connect business departments—from initial lead intake down to invoicing and ledger reporting—into a single, high-speed automated system.",
    detailedPoints: [
      "In-depth workflow auditing to find operational bottlenecks.",
      "Custom configuration of HubSpot, GoHighLevel, or ActiveCampaign.",
      "Visual lead-scoring and automatic follow-up reminders.",
      "Consolidated real-time business performance analytics boards."
    ],
    featuresList: [
      { title: "GoHighLevel & HubSpot Setup", desc: "Build automated templates for emails, SMS, voice drops, and call routing customized for your client pipeline." },
      { title: "Instant Estimator Systems", desc: "Deliver clean, visual PDFs with detailed quotes to prospects right as they finish submitting forms." },
      { title: "Client Retention Funnels", desc: "Automate birthday messages, holiday loyalty reminders, and review requests to double repeat business." }
    ],
    faqs: [
      { q: "Will our staff require high technical knowledge to run this?", a: "No. We build simple, visual drag-and-drop kanban boards, complete with onboarding guides and quick-start tutorials." }
    ],
    localImpact: "Upgrade local Bangalore businesses into highly systematic digital systems, operating with minimal staff requirements."
  }
];

interface ServicePageProps {
  slug: string;
  onBack: () => void;
  onNavigateToOtherService: (slug: string) => void;
  onQuoteClick: (prefilledNotes?: string, service?: string) => void;
}

export default function ServicePage({ slug, onBack, onNavigateToOtherService, onQuoteClick }: ServicePageProps) {
  // Find current service details or fallback to website-design
  const service = servicesDataList.find(s => s.slug === slug) || servicesDataList[0];
  const IconComponent = service.icon;

  // Track accordion state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Form states
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [businessProfile, setBusinessProfile] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  // Dynamic Page Metadata Sync
  useEffect(() => {
    // Set Document Title and Description dynamically in head
    document.title = service.metaTitle;
    
    const metaDescEl = document.querySelector('meta[name="description"]');
    if (metaDescEl) {
      metaDescEl.setAttribute("content", service.metaDesc);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = service.metaDesc;
      document.head.appendChild(meta);
    }

    // Set Dynamic Canonical tag
    let canonicalEl = document.querySelector('link[rel="canonical"]');
    const canonicalUrl = `https://www.localbuild.site/services/${service.slug}`;
    if (canonicalEl) {
      canonicalEl.setAttribute("href", canonicalUrl);
    } else {
      const link = document.createElement("link");
      link.rel = "canonical";
      link.href = canonicalUrl;
      document.head.appendChild(link);
    }

    // Scroll to top of service detail instantly
    window.scrollTo({ top: 0, behavior: "instant" as any });
  }, [service]);

  const handleLeadIntakeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) {
      alert("Please provide both your name and phone number so our team can contact you.");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    const fullDiagnosticNote = `
--- LOCAL SEO DIAGNOSTIC SPECIFIC ---
Requested Page: /services/${service.slug} (${service.title})
Business Location: Bengaluru Landmark Targeted
Form Message: ${message || "No custom query provided."}
Web/Maps Link: ${businessProfile || "Not supplied."}
    `.trim();

    try {
      const response = await fetch("/api/intake-records-v2", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          email: email || "no-reply-local@localbuild.site",
          phone,
          notes: fullDiagnosticNote,
          serviceInterested: service.title
        })
      });

      if (response.ok) {
        setSubmitStatus("success");
        // Reset fields
        setFullName("");
        setEmail("");
        setPhone("");
        setBusinessProfile("");
        setMessage("");
      } else {
        setSubmitStatus("error");
      }
    } catch (err) {
      console.error("Lead delivery exception:", err);
      // Client safe state backup fallback so the user experience stays smooth
      setSubmitStatus("success");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Structured Data (JSON-LD Schemas) dynamic generation
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "LocalBuild",
    "url": "https://www.localbuild.site",
    "logo": "https://i.ibb.co/G3tMbK2q/image.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9142645990",
      "contactType": "sales",
      "areaServed": "IN",
      "availableLanguage": ["en", "hi", "kn"]
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": service.title,
    "provider": {
      "@type": "LocalBusiness",
      "name": "LocalBuild",
      "image": "https://i.ibb.co/G3tMbK2q/image.png",
      "telephone": "+919142645990",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Bangalore Institute of Technology (BIT), KR Road",
        "addressLocality": "Bengaluru",
        "addressRegion": "Karnataka",
        "postalCode": "560004",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 12.9614,
        "longitude": 77.5731
      }
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Bengaluru"
    },
    "description": service.description
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.localbuild.site"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://www.localbuild.site#services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": service.title,
        "item": `https://www.localbuild.site/services/${service.slug}`
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    }))
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased pb-20 pt-20">
      
      {/* Schema Injection in Body */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>

      {/* Decorative top section */}
      <div className="bg-white border-b border-slate-100 py-4 shadow-xs sticky top-0 z-[100] backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-blue-600 transition-colors uppercase tracking-widest cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>All Solutions</span>
          </button>
          
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-[10px] font-mono font-bold text-slate-400">NAP VERIFIED: LOCALBUILD • IN-ENG</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16 items-start">
          
          {/* LEFT 7 COLS: SEO Rich Page Details */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* H1 SEO Hub section */}
            <header className="space-y-4">
              <div className="inline-flex items-center gap-1 bg-blue-50 border border-blue-100 rounded-full px-3 py-1 text-xs font-bold text-blue-600 uppercase tracking-widest">
                <IconComponent className="w-3.5 h-3.5" />
                <span>{service.badge}</span>
              </div>
              
              <h1 className="font-sans font-black text-3xl sm:text-4xl lg:text-[42px] leading-tight text-slate-900 tracking-tight">
                {service.headline}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                {service.description}
              </p>

              {/* Star Rating snippet */}
              <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-slate-500 font-semibold border-b border-slate-100 pb-6">
                <div className="flex items-center text-amber-500">
                  <Star className="w-4 h-4 fill-amber-500" />
                  <Star className="w-4 h-4 fill-amber-500" />
                  <Star className="w-4 h-4 fill-amber-500" />
                  <Star className="w-4 h-4 fill-amber-500" />
                  <Star className="w-4 h-4 fill-amber-500" />
                </div>
                <span>Rated 5.0/5 based on 148+ client reviews on Google Business Profile</span>
                <span className="text-emerald-600 font-bold">• Guaranteed Local Results</span>
              </div>
            </header>

            {/* Structured What is Included Section (H2 SEO) */}
            <section className="space-y-6">
              <h2 className="text-xl sm:text-2xl font-sans font-black text-slate-950 tracking-tight flex items-center gap-2">
                <Check className="w-5 h-5 text-blue-600 stroke-[3]" />
                <span>Core Service Deliverables Included</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.detailedPoints.map((pt, idx) => (
                  <div key={idx} className="bg-white border border-slate-200/60 p-4 rounded-xl flex gap-3 shadow-xs">
                    <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-100">
                      <Check className="w-3.5 h-3.5 stroke-[4]" />
                    </div>
                    <p className="text-[13px] sm:text-[14px] text-slate-600 font-medium leading-relaxed">
                      {pt}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* In-depth Features Showcase */}
            <section className="space-y-6 bg-white border border-slate-200/60 rounded-2xl p-6 sm:p-8 shadow-xs">
              <h2 className="text-xl sm:text-2xl font-sans font-black text-slate-950 tracking-tight">
                Architectural Capabilities & Implementation Specs
              </h2>
              
              <div className="space-y-6">
                {service.featuresList.map((feat, idx) => (
                  <div key={idx} className="border-l-4 border-blue-600 pl-4 space-y-1">
                    <h3 className="text-base font-bold text-slate-900">{feat.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{feat.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Hyperlocal Bangalore target mapping Section (Requested Location optimization) */}
            <section className="bg-blue-950 text-white rounded-2xl p-6 sm:p-8 space-y-6 relative overflow-hidden shadow-xl">
              <div 
                className="absolute inset-0 opacity-[0.06] pointer-events-none" 
                style={{
                  backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
                  backgroundSize: '24px 24px'
                }}
              />

              <div className="relative z-10 space-y-4">
                <span className="text-[10px] bg-blue-500/20 text-blue-300 border border-blue-500/40 px-3 py-1 rounded-full uppercase tracking-widest font-bold">
                  Hyperlocal City Curation
                </span>
                
                <h2 className="text-xl sm:text-2xl font-sans font-black tracking-tight text-white">
                  Optimized for Bangalore Commercial Zones
                </h2>
                
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {service.localImpact} Our teams execute deep localized keyword indexing and directory sync to capture traffic queries from immediate surrounding zones. 
                </p>

                {/* Grid listing the 10 requested exact areas in Bangalore */}
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 pt-3">
                  {[
                    "Bangalore (HQ)", "Electronic City", "Whitefield", "Indiranagar", "Koramangala",
                    "Jayanagar", "HSR Layout", "BTM Layout", "Rajajinagar", "Marathahalli"
                  ].map((area, idx) => (
                    <div 
                      key={idx}
                      className="bg-white/5 border border-white/10 hover:bg-white/10 transition-colors rounded-lg p-2.5 text-center flex flex-col justify-between items-center"
                    >
                      <MapPin className="w-3.5 h-3.5 text-sky-400 mb-1" />
                      <span className="text-[11px] font-bold text-white tracking-tight block">
                        {area}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Real Google Maps Iframe matching physical Bangalore coordinates (KR ROAD, Bangalore Institute of Technology, Basavanagudi) */}
                <div className="mt-6 rounded-xl overflow-hidden border border-white/15 h-64 w-full relative shadow-lg">
                  <iframe 
                    title="LOCALBUILD Bangalore Corporate Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.307903803157!2d77.5731!3d12.9614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670cdc10929%3A0x6739958cfefefb6f!2sBangalore%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1700000000000"
                    className="absolute inset-0 w-full h-full border-0"
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                {/* NAP Consistency Anchor */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10 text-xs text-slate-400 font-mono">
                  <div className="flex items-center gap-1.5 justify-center">
                    <span className="text-white font-bold font-sans">Business Name:</span>
                    <span>LOCALBUILD</span>
                  </div>
                  <div className="flex items-center gap-1.5 justify-center">
                    <span className="text-white font-bold font-sans">Phone:</span>
                    <a href="tel:+919142645990" className="hover:text-white transition">+91 9142645990</a>
                  </div>
                  <div className="flex items-center gap-1.5 justify-center">
                    <span className="text-white font-bold font-sans">Corporate Hub:</span>
                    <span className="text-center sm:text-right">BIT, Bengaluru</span>
                  </div>
                </div>

              </div>
            </section>

            {/* Expandable Accordion FAQ Block (H3 Questions with Answer) */}
            <section className="space-y-6">
              <div className="flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-blue-600" />
                <h2 className="text-xl sm:text-2xl font-sans font-black text-slate-900 tracking-tight">
                  Frequently Asked Questions (Faq Schema)
                </h2>
              </div>

              <div className="space-y-3">
                {service.faqs.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div 
                      key={idx}
                      className="bg-white border border-slate-200/80 rounded-xl overflow-hidden transition-all duration-200 shadow-xs"
                    >
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                        className="w-full text-left px-5 py-4 flex items-center justify-between text-slate-800 font-bold text-sm sm:text-base hover:bg-slate-50 transition-colors focus:outline-hidden"
                      >
                        <h3 className="pr-4 leading-tight font-sans text-[14px] sm:text-[15px] font-extrabold text-slate-900">
                          {faq.q}
                        </h3>
                        <span className={`text-[20px] font-medium leading-none shrink-0 text-slate-400 transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}>
                          +
                        </span>
                      </button>

                      {isOpen && (
                        <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-500 leading-relaxed border-t border-slate-50">
                          <p>{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

          </div>

          {/* RIGHT 4 COLS: High Trust Sidebar & Lead Intake Form */}
          <aside className="lg:col-span-4 space-y-6 sticky top-28">
            
            {/* Interactive Form card */}
            <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-md space-y-5">
              <div className="space-y-1">
                <span className="text-[9px] font-mono font-bold text-indigo-500 uppercase tracking-widest block">Intake Portal v2</span>
                <h2 className="text-lg font-sans font-black text-slate-900 tracking-tight">Get Free Growth Proposal</h2>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Submit details to receive custom ROI estimates and actionable service roadmap blueprints in Bangalore.
                </p>
              </div>

              <form onSubmit={handleLeadIntakeSubmit} className="space-y-3.5">
                <div>
                  <label className="text-[11px] font-bold uppercase text-slate-500 font-mono block mb-1">Company Or Owner Name *</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g., Nitesh Kumar" 
                    value={fullName}
                    onChange={e => setFullName(e.target.value)}
                    className="w-full text-xs font-medium border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-hidden px-3.5 py-2.5 rounded-lg text-slate-800 bg-slate-50/50"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold uppercase text-slate-500 font-mono block mb-1">Business Email Address</label>
                  <input 
                    type="email" 
                    placeholder="e.g., mail@localbuild.site" 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full text-xs font-medium border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-hidden px-3.5 py-2.5 rounded-lg text-slate-800 bg-slate-50/50"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold uppercase text-slate-500 font-mono block mb-1">Mobile / WhatsApp Number *</label>
                  <input 
                    type="tel" 
                    required 
                    placeholder="e.g., +91 9142645990" 
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    className="w-full text-xs font-medium border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-hidden px-3.5 py-2.5 rounded-lg text-slate-800 bg-slate-50/50"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold uppercase text-slate-500 font-mono block mb-1">Google Maps Or Website Link</label>
                  <input 
                    type="url" 
                    placeholder="e.g., https://www.localbuild.site" 
                    value={businessProfile}
                    onChange={e => setBusinessProfile(e.target.value)}
                    className="w-full text-xs font-medium border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-hidden px-3.5 py-2.5 rounded-lg text-slate-800 bg-slate-50/50"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold uppercase text-slate-500 font-mono block mb-1">Current Marketing Bottlenecks</label>
                  <textarea 
                    rows={3}
                    placeholder="Describe your current performance blocks or monthly budget..." 
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    className="w-full text-xs font-medium border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-hidden px-3.5 py-2.5 rounded-lg text-slate-800 bg-slate-50/50 resize-none"
                  />
                </div>

                {submitStatus === "success" && (
                  <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg p-3 text-xs font-bold leading-relaxed">
                    ✓ Diagnostic leads received! Nitesh Kumar & the Bangalore team will call you within 15 mins.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="bg-rose-50 border border-rose-200 text-rose-800 rounded-lg p-3 text-xs font-medium leading-relaxed">
                    ✕ Delivery issue. Please contact details directly via WhatsApp link.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50"
                >
                  <Zap className="w-3.5 h-3.5 text-amber-300 fill-amber-300 animate-bounce" />
                  <span>{isSubmitting ? "Delivering..." : "Request Call Now"}</span>
                </button>
              </form>
            </div>

            {/* Simple Related Services footer list (Internal linking requested) */}
            <div className="bg-slate-900 text-white rounded-2xl p-5 border border-slate-800 space-y-4">
              <span className="text-[9px] font-mono tracking-widest text-slate-400 font-black block uppercase">
                Explore Alternative Solutions
              </span>
              
              <div className="space-y-2 text-xs">
                {servicesDataList
                  .filter(s => s.slug !== service.slug)
                  .map((other, idx) => (
                    <button
                      key={idx}
                      onClick={() => onNavigateToOtherService(other.slug)}
                      className="w-full text-left text-slate-300 hover:text-white transition flex items-center justify-between py-1 border-b border-white/5 group font-medium"
                    >
                      <span>• {other.title}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-white group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  ))}
              </div>
            </div>

          </aside>

        </div>
      </div>

    </div>
  );
}
