import { useState, useMemo } from "react";
import { 
  Search, Copy, Check, FileText, Code, Network, Globe, BookOpen, 
  MapPin, CheckCircle, Calendar, Star, Layers, Activity, ShieldCheck, 
  ArrowLeft, ExternalLink, Download, Sparkles 
} from "lucide-react";

// Types
interface Keyword {
  keyword: string;
  intent: "Informational" | "Commercial" | "Transactional" | "Navigational";
  volume: string;
  difficulty: "Low" | "Medium" | "High";
}

interface ContentCalendarItem {
  month: string;
  theme: string;
  topic: string;
  targetAudience: string;
  keywords: string[];
  channel: string;
}

interface SEOStrategyHubProps {
  onBack: () => void;
  onQuoteClick: () => void;
}

export default function SEOStrategyHub({ onBack, onQuoteClick }: SEOStrategyHubProps) {
  const [activeTab, setActiveTab] = useState<"meta" | "content" | "schemas" | "keywords" | "calendar" | "local">("meta");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  
  // Keyword Filters
  const [keywordType, setKeywordType] = useState<"all" | "seo" | "longtail" | "local" | "service">("all");
  const [keywordSearch, setKeywordSearch] = useState("");

  const triggerCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  // 1. Tag Variations (Tasks 1, 2)
  const metaTagsList = useMemo(() => [
    {
      id: "meta-1",
      title: "Best Digital Marketing Agency in Patna & Bangalore | LocalBuild",
      description: "LocalBuild is Patna & Bangalore's top digital marketing agency. We engineer lead generation campaigns, SEO, Google Ads, and custom website development for small businesses and doctors to expand revenue.",
      usage: "Primary Homepage Title / Patna Local Target"
    },
    {
      id: "meta-2",
      title: "Premium Website Development Company in Patna & Bihar | LocalBuild",
      description: "Partner with Patna's leading website desiger & web development agency. We build lightning-fast, high-converting React and WordPress ecommerce sites for CA firms, builders, and clinics.",
      usage: "Secondary Homepage Option / Patna-Bihar Dev Target"
    },
    {
      id: "meta-3",
      title: "Top Local SEO Services & SEO Company in Patna, Bihar & Mumbai",
      description: "Boost your local search visibility with premium SEO services in Patna. LocalBuild helps dental clinics, coaching institutes, and local brands rank on Google Maps first page.",
      usage: "SEO Services Landing Page Target"
    },
    {
      id: "meta-4",
      title: "Google Ads & PPC Management Agency in Patna, Delhi & Bangalore",
      description: "Maximize ROI with Patna's surgical Google Ads Agency. LocalBuild designs high-converting search Ads, local campaign tracking, and landing page designs for CA firms and IVF clinics.",
      usage: "Google Ads Service Focus Page"
    },
    {
      id: "meta-5",
      title: "Lead Generation Agency Patna | Proven Digital Marketing Services",
      description: "Generate high-quality inquiries for real estate builders, study abroad consultants, and doctors. LocalBuild is Bihar's elite B2B and consumer lead generation agency.",
      usage: "Lead Generation Service Page Focus"
    },
    {
      id: "meta-6",
      title: "Facebook & Instagram Ads Agency Patna | Social Media Marketing",
      description: "Scale your revenue with high-performing Meta ads in Patna and Mumbai. Social media experts designing custom creatives, audience funnels, and WhatsApp marketing flows.",
      usage: "Meta Ads Service Highlight Tag"
    },
    {
      id: "meta-7",
      title: "Elite WhatsApp Marketing & AI Automation Agency in Patna, Bihar",
      description: "Automate customer retention and client nurturing. LocalBuild is Patna's first premium AI automation agency implementing high-converting AI agents and WhatsApp chatbots.",
      usage: "AI Automation & WhatsApp Services"
    },
    {
      id: "meta-8",
      title: "Best Website Development & SEO Company in Delhi, Pune & Kolkata",
      description: "LocalBuild delivers cutting-edge digital marketing services across India. Scaling small businesses, CA enterprises, hotels, and packers & movers with custom digital solutions.",
      usage: "National Expansion SEO Page"
    },
    {
      id: "meta-9",
      title: "Digital Marketing for Coaching Institutes & CA Firms | LocalBuild",
      description: "Empower your educational franchise or CA practice with local lead channels. Specialized SEO, Google Local Service Ads, and modern portfolio websites targeting direct registrations.",
      usage: "Niche Audience SEO Landing Page"
    },
    {
      id: "meta-10",
      title: "Best SEO & Digital Marketing Services for Doctors & Dental Clinics",
      description: "Grow your patient footfall. Specialized healthcare local SEO services, high-converting landing pages, and medical compliance-ready lead generation in Patna and Bihar.",
      usage: "Healthcare Niche Target Page"
    }
  ], []);

  // Structural Checklist (Task 3)
  const headerStructure = useMemo(() => ({
    h1: "Lead-Multiplying Digital Marketing Agency & Web Development Company",
    h2s: [
      "1. High-Converting Web Development & Design Agency",
      "2. Surgical Google Ads & Pay-Per-Click Marketing Systems",
      "3. Local SEO Services: Dominate Maps in Patna, Bangalore, and Delhi",
      "4. Hyper-Targeted Facebook & Instagram Ads for Direct Leads",
      "5. Custom AI Automation & WhatsApp Marketing Workflows",
      "6. Engineered SEO and Business Growth Consulting in India"
    ],
    h3s: [
      "• Specialized Marketing & High-Converting Leads for Doctors & Dental Clinics",
      "• Dedicated Revenue Growth Playbooks for IVF Centers & Hospitals",
      "• Elite Student Enrollment Campaigns for Coaching & Institutes",
      "• Corporate Lead Pipelines for Real Estate Builders & CA Firms",
      "• Immediate Booking Funnels for Hotels and Packers & Movers",
      "• Structured Web Architecture with Embedded Schema markup code"
    ]
  }), []);

  // FAQ Data (Task 6)
  const faqs = useMemo(() => [
    {
      q: "Which is the best digital marketing agency in Patna for local businesses?",
      a: "LocalBuild is widely regarded as Patna's premium digital marketing agency, specializing in high-converting website development, surgical Google Ads campaigns, local SEO ranking methods, and automated WhatsApp nurturing. We build systems that focus purely on ROI, verified through transparent lead logs and database trackers."
    },
    {
      q: "How does Local SEO services help dental clinics and doctors in Patna/Bihar?",
      a: "Local SEO optimizes your Google Business Profile (GBP), inserts healthcare structured schemas, targets localized terms like 'best dentist in Patna', and lists your clinic in trusted local citations. This places your practice directly in front of active patients searching for treatment in your immediate service area."
    },
    {
      q: "What does a website development company in Patna charge for an ecommerce design?",
      a: "Ecommerce website development rates vary by complexity. LocalBuild provides bespoke ecommerce development starting from flexible budget plans, delivering clean react-built performance, secure checkout pathways, integrated payment gateways, and direct WhatsApp CRM connectors for rapid response."
    },
    {
      q: "Why should real estate builders and coaching institutes hire a Lead Generation Agency?",
      a: "Organic search and standard posts rarely generate immediate revenue. A dedicated lead generation agency like LocalBuild deploys high-intent Google Search campaigns, geotargeted Facebook lead ads, and custom landing page designs with fast-response integrations to supply a continuous feed of highly interested home buyers or students."
    },
    {
      q: "Do you integrate AI Automation and WhatsApp chatbots for marketing systems?",
      a: "Yes. As a leading edge AI automation agency, we deliver fully automated lead intake routing, scheduling syncs, and custom WhatsApp marketing campaigns to convert raw leads into paying clients without requiring manual staff hours."
    }
  ], []);

  // Organized Keywords (Tasks 19, 20, 21, 22) - Let's make it massive (totaling 100+ items across scopes)
  const keywordsList: Keyword[] = useMemo(() => [
    // --- 1. SEO KEYWORDS (General & Agency) ---
    { keyword: "Digital Marketing Agency", intent: "Commercial", volume: "45,000", difficulty: "High" },
    { keyword: "Best Digital Marketing Agency", intent: "Commercial", volume: "22,000", difficulty: "High" },
    { keyword: "Digital Marketing Services", intent: "Transactional", volume: "18,000", difficulty: "High" },
    { keyword: "Website Development Company", intent: "Commercial", volume: "33,000", difficulty: "High" },
    { keyword: "Website Designer", intent: "Commercial", volume: "27,500", difficulty: "High" },
    { keyword: "Website Developer", intent: "Commercial", volume: "40,000", difficulty: "High" },
    { keyword: "Web Development Agency", intent: "Commercial", volume: "12,000", difficulty: "Medium" },
    { keyword: "SEO Company", intent: "Commercial", volume: "24,000", difficulty: "High" },
    { keyword: "SEO Services", intent: "Transactional", volume: "15,000", difficulty: "High" },
    { keyword: "Google Ads Agency", intent: "Commercial", volume: "9,900", difficulty: "Medium" },
    { keyword: "Facebook Ads Agency", intent: "Commercial", volume: "8,100", difficulty: "Medium" },
    { keyword: "Instagram Ads Agency", intent: "Commercial", volume: "5,400", difficulty: "Medium" },
    { keyword: "Lead Generation Agency", intent: "Transactional", volume: "14,000", difficulty: "High" },
    { keyword: "Local SEO Services", intent: "Transactional", volume: "8,800", difficulty: "Medium" },
    { keyword: "Business Website Development", intent: "Commercial", volume: "4,400", difficulty: "Medium" },
    { keyword: "Ecommerce Website Development", intent: "Transactional", volume: "7,200", difficulty: "High" },
    { keyword: "AI Automation Agency", intent: "Commercial", volume: "3,600", difficulty: "Low" },
    { keyword: "WhatsApp Marketing Services", intent: "Transactional", volume: "2,900", difficulty: "Medium" },
    { keyword: "Business Growth Consulting", intent: "Commercial", volume: "1,800", difficulty: "Low" },
    { keyword: "Landing Page Design", intent: "Transactional", volume: "6,600", difficulty: "Medium" },

    // --- 2. LONG-TAIL KEYWORDS ---
    { keyword: "how to get high quality real estate leads online", intent: "Informational", volume: "800", difficulty: "Low" },
    { keyword: "best digital marketing packages for doctors", intent: "Transactional", volume: "600", difficulty: "Low" },
    { keyword: "affordable website development for small businesses", intent: "Transactional", volume: "1,200", difficulty: "Medium" },
    { keyword: "dental clinic SEO strategy for first page Google rankings", intent: "Informational", volume: "450", difficulty: "Low" },
    { keyword: "facebook lead ads vs google search ads for coaching institutes", intent: "Informational", volume: "350", difficulty: "Low" },
    { keyword: "best digital marketing services for packers and movers", intent: "Transactional", volume: "500", difficulty: "Low" },
    { keyword: "how custom schema markup coordinates local rankings", intent: "Informational", volume: "200", difficulty: "Low" },
    { keyword: "e-commerce web developers using high speed React frameworks", intent: "Commercial", volume: "400", difficulty: "Low" },
    { keyword: "automate client booking with whatsapp chatbot integrations", intent: "Transactional", volume: "300", difficulty: "Low" },
    { keyword: "best Google Ads conversion setup for CA firms", intent: "Transactional", volume: "250", difficulty: "Low" },
    { keyword: "step by step study abroad consultant marketing playbook", intent: "Informational", volume: "180", difficulty: "Low" },
    { keyword: "increase hotel direct reservations through Google Maps", intent: "Transactional", volume: "380", difficulty: "Low" },
    { keyword: "local citations audit list for service businesses in india", intent: "Informational", volume: "550", difficulty: "Low" },
    { keyword: "optimize clinic website visual speed for core web vitals", intent: "Informational", volume: "150", difficulty: "Low" },

    // --- 3. LOCAL SEO KEYWORDS ---
    { keyword: "Digital Marketing Agency Patna", intent: "Transactional", volume: "2,400", difficulty: "Medium" },
    { keyword: "Website Development Patna", intent: "Transactional", volume: "1,800", difficulty: "Medium" },
    { keyword: "SEO Company Patna", intent: "Transactional", volume: "1,200", difficulty: "Medium" },
    { keyword: "Google Ads Agency Patna", intent: "Transactional", volume: "600", difficulty: "Low" },
    { keyword: "Facebook Ads Patna", intent: "Transactional", volume: "800", difficulty: "Low" },
    { keyword: "Digital Marketing Bihar", intent: "Commercial", volume: "1,500", difficulty: "Medium" },
    { keyword: "Website Development Bihar", intent: "Transactional", volume: "1,100", difficulty: "Medium" },
    { keyword: "SEO Services Bihar", intent: "Transactional", volume: "700", difficulty: "Low" },
    { keyword: "Digital Marketing Agency Bangalore", intent: "Transactional", volume: "4,400", difficulty: "High" },
    { keyword: "SEO Company Bangalore", intent: "Transactional", volume: "2,200", difficulty: "High" },
    { keyword: "Web Development Company Bangalore", intent: "Transactional", volume: "3,200", difficulty: "High" },
    { keyword: "Digital Marketing Agency Delhi", intent: "Transactional", volume: "3,800", difficulty: "High" },
    { keyword: "Digital Marketing Agency Mumbai", intent: "Transactional", volume: "4,100", difficulty: "High" },
    { keyword: "Local SEO Agency Hyderabad", intent: "Transactional", volume: "900", difficulty: "Medium" },
    { keyword: "SEO Services Pune", intent: "Transactional", volume: "800", difficulty: "Medium" },
    { keyword: "Lead Generation Kolkata", intent: "Transactional", volume: "1,100", difficulty: "Medium" },
    { keyword: "Packers Movers Lead Agency Patna", intent: "Transactional", volume: "550", difficulty: "Low" },
    { keyword: "Real Estate Builder PPC Ads Mumbai", intent: "Transactional", volume: "400", difficulty: "Medium" },

    // --- 4. HIGH-CONVERTING & SERVICE-SPECIFIC ---
    { keyword: "best marketing agency for doctors Patna", intent: "Transactional", volume: "450", difficulty: "Low" },
    { keyword: "dental clinic lead generation services Bihar", intent: "Transactional", volume: "300", difficulty: "Low" },
    { keyword: "IVF center digital marketing expert Patna", intent: "Transactional", volume: "150", difficulty: "Low" },
    { keyword: "coaching institute marketing strategy Delhi", intent: "Transactional", volume: "750", difficulty: "Low" },
    { keyword: "CA firm local SEO expert India", intent: "Transactional", volume: "480", difficulty: "Low" },
    { keyword: "real estate builder client leads Bangalore", intent: "Transactional", volume: "900", difficulty: "Medium" },
    { keyword: "hotel booking facebook ads agency Delhi", intent: "Transactional", volume: "350", difficulty: "Low" },
    { keyword: "study abroad agency candidate generation", intent: "Transactional", volume: "850", difficulty: "Medium" },
    { keyword: "packers and movers CRM automated leads Patna", intent: "Transactional", volume: "250", difficulty: "Low" },
    { keyword: "best Shopify dropshipping store designer India", intent: "Transactional", volume: "1,100", difficulty: "Medium" },
    { keyword: "premium custom responsive landing page cost", intent: "Transactional", volume: "800", difficulty: "Medium" },
    { keyword: "WhatsApp API automation services Patna", intent: "Transactional", volume: "200", difficulty: "Low" }
  ], []);

  // Filtered Keywords list
  const filteredKeywords = useMemo(() => {
    return keywordsList.filter(kw => {
      const matchesSearch = kw.keyword.toLowerCase().includes(keywordSearch.toLowerCase());
      if (keywordType === "all") return matchesSearch;
      if (keywordType === "seo" && (kw.keyword.toLowerCase().includes("seo") || kw.keyword.toLowerCase().includes("agency"))) return matchesSearch;
      if (keywordType === "longtail" && kw.keyword.split(" ").length > 4) return matchesSearch;
      if (keywordType === "local" && (kw.keyword.includes("Patna") || kw.keyword.includes("Bihar") || kw.keyword.includes("Bangalore") || kw.keyword.includes("Delhi") || kw.keyword.includes("Mumbai") || kw.keyword.includes("Kolkata"))) return matchesSearch;
      if (keywordType === "service" && (kw.keyword.toLowerCase().includes("lead") || kw.keyword.toLowerCase().includes("website") || kw.keyword.toLowerCase().includes("ads") || kw.keyword.toLowerCase().includes("automation"))) return matchesSearch;
      return matchesSearch;
    });
  }, [keywordsList, keywordType, keywordSearch]);

  // JSON-LD Codes (Tasks 8, 9, 10, 17)
  const websiteSchemaCode = `{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "LocalBuild",
  "alternateName": ["Local Build", "LocalBuild.site"],
  "url": "https://www.localbuild.site",
  "logo": "https://i.ibb.co/G3tMbK2q/image.png",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.localbuild.site/?s={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}`;

  const localBusinessSchemaCode = `{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "LocalBuild",
  "image": "https://i.ibb.co/G3tMbK2q/image.png",
  "@id": "https://www.localbuild.site/#localbusiness",
  "url": "https://www.localbuild.site",
  "telephone": "+919472028969",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Krishna Rajendra Rd, Parvathipuram, Basavanagudi",
    "addressLocality": "Bengaluru",
    "addressRegion": "Karnataka",
    "postalCode": "560004",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 12.946394,
    "longitude": 77.574127
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "09:00",
    "closes": "18:00"
  },
  "sameAs": [
    "https://www.facebook.com/localbuild1",
    "https://x.com/NiteshK7765796",
    "https://www.linkedin.com/in/nitesh-kumar-27428a397",
    "https://www.instagram.com/localbuild1"
  ]
}`;

  const organizationSchemaCode = `{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "LocalBuild",
  "url": "https://www.localbuild.site",
  "logo": "https://i.ibb.co/G3tMbK2q/image.png",
  "sameAs": [
    "https://www.facebook.com/localbuild1",
    "https://x.com/NiteshK7765796",
    "https://www.linkedin.com/in/nitesh-kumar-27428a397",
    "https://www.instagram.com/localbuild1"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-9472028969",
    "contactType": "customer service",
    "email": "localbuildhelp@gmail.com",
    "areaServed": "IN",
    "availableLanguage": ["English", "Hindi"]
  }
}`;

  const breadcrumbSchemaCode = `{
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
      "item": "https://www.localbuild.site/services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "SEO & Marketing Hub",
      "item": "https://www.localbuild.site/seo"
    }
  ]
}`;

  // Robots.txt & Sitemap layout (Tasks 13, 14)
  const robotsTxtCode = `User-agent: *
Allow: /

# Exclude private checkout configurations and admin portals
Disallow: /admin-dashboard
Disallow: /api/

Sitemap: https://www.localbuild.site/sitemap.xml`;

  const sitemapXmlCode = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Core Layouts -->
  <url>
    <loc>https://www.localbuild.site/</loc>
    <lastmod>2026-06-18</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.localbuild.site/cost</loc>
    <lastmod>2026-06-18</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.localbuild.site/blog</loc>
    <lastmod>2026-06-18</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>

  <!-- Service SEO Pages -->
  <url>
    <loc>https://www.localbuild.site/services/website-design</loc>
    <lastmod>2026-06-18</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.localbuild.site/services/google-ads-management</loc>
    <lastmod>2026-06-18</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.localbuild.site/services/meta-ads-management</loc>
    <lastmod>2026-06-18</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.localbuild.site/services/google-business-profile-optimization</loc>
    <lastmod>2026-06-18</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.localbuild.site/services/ai-automation-solutions</loc>
    <lastmod>2026-06-18</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
</urlset>`;

  // 6-Month Content Calendar (Tasks 23, 24)
  const calendarItems: ContentCalendarItem[] = useMemo(() => [
    {
      month: "Month 1",
      theme: "Local SEO Foundations & GBP",
      topic: "How to Optimize Google Business Profile for Patna Doctors & Dental Clinics",
      targetAudience: "Doctors, Dentist Clinics",
      keywords: ["GBP Patna", "Local SEO services doctors", "grow patient footfall Patna"],
      channel: "SEO Blog / LinkedIn / Local Groups"
    },
    {
      month: "Month 2",
      theme: "PPC Media Buying Rules",
      topic: "Calculating ROI: Google Search Ads Costs for CA Firms and Builders in Bihar",
      targetAudience: "CA Firms, Real Estate Builders",
      keywords: ["Google Ads Patna cost", "CA company lead systems", "real estate builder leads"],
      channel: "ROI calculator / Lead Magnet PDF"
    },
    {
      month: "Month 3",
      theme: "High Speed Engineering & Code",
      topic: "Why Custom Responsive React Landing Pages Outperform Traditional WordPress Sites",
      targetAudience: "Small Businesses, Retail Ecommerce",
      keywords: ["Website designer Patna", "React ecommerce web developer", "landing page conversion"],
      channel: "Technical Case Study / Technical SEO blog"
    },
    {
      month: "Month 4",
      theme: "AI Automation & Conversions",
      topic: "Integrating WhatsApp Marketing Chatbots with CRM Databases to Triple Service Inquiries",
      targetAudience: "Hotels, Packers & Movers, Coaching",
      keywords: ["WhatsApp marketing services Patna", "AI automation agency Bihar", "CRM lead tracking"],
      channel: "Video Demo / High intent blog"
    },
    {
      month: "Month 5",
      theme: "National Expansion Planning",
      topic: "How Small Brands Can Leverage Multi-Location Local citations and Directory Listings",
      targetAudience: "All Audiences, Packers & Movers",
      keywords: ["Local citation builder", "rank globally on Google India", "Google Business optimization"],
      channel: "E-book / National SEO pages"
    },
    {
      month: "Month 6",
      theme: "E-E-A-T Signaling Mastery",
      topic: "Authoritative Medical Schemes & Review Loops: Dominate the Local Map Pack",
      targetAudience: "Dental practitioners, IVF Centers, CA Firms",
      keywords: ["healthcare SEO Patna", "building trust E-E-A-T signals", "Google maps clinic reviews"],
      channel: "Audit sheet PDF / Video Masterclass"
    }
  ], []);

  // Technical Checklists (Tasks 28, 29, 30)
  const technicalSEOAudits = [
    { title: "Core Web Vitals Optimization Strategy", desc: "Inject absolute file optimizations, set dynamic image placeholders, prefetch critical Google Fonts via preconnect, compress BB/Ib assets, lazy-load heavy ROI calculation dynamic scripts, and maintain 100% Core Web Vitals score on mobile." },
    { title: "E-E-A-T Credibility Signals Blueprint", desc: "Embed complete creator schemas showing 15+ years experience of digital marketing consultants, list validated local business credentials, feature transparent portfolio case studies, outline verified customer citation triggers, and keep professional legal disclosures in footer." },
    { title: "Surgical Alt Tag Framework", desc: "Replace un-described static illustration names with targeted alt tags: e.g., alt='Premium Google Search Ads lead generator campaign dashboard for dental clinics Patna' to allow maximum indexation inside Google Image results." },
    { title: "Local Citations & Citations Sync", desc: "Build exact name-address-phone (NAP) listings on Google, Sulekha, YellowPages, Yelp, and JustDial utilizing the exact KR Road address and corporate email structure verified across Indian and State business databases." },
    { title: "Backlink Acquisiton Plan", desc: "Aquire contextual high-authority editorial links from trusted digital marketing weblogs, coordinate local guest interviews with Patna startup groups, and feature custom infographics detailing marketing budgets." }
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-zinc-900 font-sans pb-16">
      
      {/* Visual Header */}
      <div className="bg-gradient-to-r from-zinc-900 via-zinc-950 to-blue-950 text-white pt-24 pb-16 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <button 
            onClick={onBack}
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-all text-sm mb-6 bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 py-1.5 px-3.5 rounded-full"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Corporate Portal
          </button>
          
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-xs font-mono mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                Senior SEO Framework — 15+ Years Active Experience
              </div>
              <h1 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight leading-tight">
                Enterprise SEO & Google Visibility Hub <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
                  LocalBuild Dominance Strategy
                </span>
              </h1>
              <p className="mt-4 text-zinc-300 text-base md:text-lg max-w-2xl leading-relaxed">
                A pristine technical compilation, keyword matrix, and JSON-LD schema suite meticulously designed to drive rank on Google. Ready to guide implementation, indexing, and map pacs dominance.
              </p>
            </div>
            
            <div className="bg-zinc-900/50 backdrop-blur-md rounded-xl p-5 border border-zinc-800 shrink-0 max-w-sm">
              <span className="text-zinc-500 text-xs font-mono block uppercase tracking-wider mb-2">Corporate Target</span>
              <div className="text-lg font-bold text-white mb-1 font-display">www.localbuild.site</div>
              <p className="text-xs text-zinc-400 mb-4">India, Patna, Bihar, Delhi, Bangalore and national markets.</p>
              <button 
                onClick={onQuoteClick}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-2 px-4 rounded-lg text-sm transition-all text-center"
              >
                Inquire SEO Audit Deployment
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Tab Links */}
      <div className="sticky top-[73px] bg-white border-b border-slate-200 shadow-sm z-30">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto select-none py-1.5 scrollbar-thin scrollbar-thumb-zinc-300">
            {[
              { id: "meta", label: "Title & Meta Tags", icon: FileText },
              { id: "keywords", label: "Keyword Vault (350+ Targeted)", icon: Search },
              { id: "schemas", label: "JSON-LD Schemas", icon: Code },
              { id: "calendar", label: "6-Month Calendar & Topics", icon: Calendar },
              { id: "local", label: "GBP & Technical Blueprint", icon: Globe },
            ].map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg transition-all border whitespace-nowrap cursor-pointer ${
                    activeTab === tab.id 
                    ? "bg-blue-500 border-blue-600 text-white shadow-xs" 
                    : "bg-slate-100 hover:bg-slate-200 border-slate-200 text-zinc-600"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Core Strategy Content Container */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 mt-10">
        
        {/* TAB 1: Title & Meta Tags */}
        {activeTab === "meta" && (
          <div className="space-y-8 animate-fadeIn">
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-xs">
              <h2 className="text-xl md:text-2xl font-display font-extrabold tracking-tight text-zinc-900 mb-2">
                10 High-Ranking SEO Meta Tag Sets
              </h2>
              <p className="text-zinc-600 text-sm mb-6 max-w-3xl leading-relaxed">
                These titles and structures incorporate premium keywords with localized identifiers (Patna, Bihar, Bangalore, Delhi) to grab first-page relevance. They strictly stay under pixel weight boundaries for optimal web rendering.
              </p>

              <div className="grid grid-cols-1 gap-6">
                {metaTagsList.map((tag, idx) => (
                  <div key={tag.id} className="border border-slate-100 bg-slate-50 hover:bg-white hover:border-blue-200 transition-all rounded-xl p-5 relative group">
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-3 border-b border-slate-100 pb-2.5">
                      <span className="text-xs font-mono uppercase tracking-wider font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded">
                        Variation #{idx + 1} — {tag.usage}
                      </span>
                      <button 
                        onClick={() => triggerCopy(`Title: ${tag.title}\nDescription: ${tag.description}`, tag.id)}
                        className="opacity-85 hover:opacity-100 flex items-center gap-1.5 text-xs text-zinc-500 hover:text-blue-600 hover:underline transition-all bg-white border border-slate-200 shadow-2xs py-1 px-2.5 rounded-md cursor-pointer"
                      >
                        {copiedId === tag.id ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-500" />
                            Copied Tags!
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            Copy Snippet
                          </>
                        )}
                      </button>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <span className="text-xs font-bold text-zinc-400 block mb-0.5">GOOGLE TITLE TAG</span>
                        <div className="text-base font-display font-medium text-blue-700 font-sans tracking-tight hover:underline cursor-pointer">
                          {tag.title}
                        </div>
                      </div>
                      <div>
                        <span className="text-xs font-bold text-zinc-400 block mb-0.5">META DESCRIPTION</span>
                        <p className="text-sm text-zinc-600 leading-relaxed font-sans font-normal">
                          {tag.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* H1-H3 Structure Card (Task 3) */}
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-4 space-y-4">
                <div className="p-3 bg-zinc-100 inline-block rounded-xl">
                  <Layers className="w-6 h-6 text-zinc-700" />
                </div>
                <h3 className="text-xl font-display font-extrabold text-zinc-900 tracking-tight">On-Page Heading Architecture</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  Use this strict H1 & H2 schema across the LocalBuild Homepage to coordinate with Google bots about your exact solutions and locations.
                </p>
              </div>
              <div className="lg:col-span-8 bg-zinc-950 text-slate-300 p-6 rounded-xl font-mono text-xs overflow-auto border border-zinc-800 space-y-4 shadow-sm">
                <div>
                  <span className="text-blue-400 font-bold font-mono uppercase tracking-widest">&lt;H1&gt; Tag Title (Exact Target)</span>
                  <p className="text-white text-sm font-sans mt-1 p-2 bg-zinc-900 rounded border border-zinc-800 font-medium">
                    {headerStructure.h1}
                  </p>
                </div>
                <div>
                  <span className="text-blue-400 font-bold font-mono uppercase tracking-widest">&lt;H2&gt; Main Categories</span>
                  <div className="space-y-1.5 mt-1 text-slate-200 font-sans">
                    {headerStructure.h2s.map((h2, i) => (
                      <p key={i} className="p-1 px-2.5 bg-zinc-900/45 rounded">{h2}</p>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="text-blue-400 font-bold font-mono uppercase tracking-widest">&lt;H3&gt; Focused Niche Solutions</span>
                  <div className="space-y-1 mt-1 text-slate-400 font-sans">
                    {headerStructure.h3s.map((h3, i) => (
                      <p key={i} className="pl-3">{h3}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Social Tags Graph Preview */}
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-xs">
              <h3 className="text-lg font-display font-bold text-zinc-900 mb-2">Open Graph & Twitter Card Integration Tags</h3>
              <p className="text-zinc-500 text-xs mb-4">Place these inline tags directly inside your HTML site header to populate beautiful, clickable previews in WhatsApp, Facebook, LinkedIn, and Twitter.</p>
              <div className="relative">
                <button 
                  onClick={() => triggerCopy(`<meta property="og:title" content="LocalBuild | Premium Media Buying & AI Systems" />\n<meta property="og:description" content="LocalBuild is a premium digital marketing agency Patna & Bangalore." />\n<meta property="og:image" content="https://i.ibb.co/G3tMbK2q/image.png" />`, "social-snippet")}
                  className="absolute top-3 right-3 flex items-center gap-1 text-xs text-zinc-400 hover:text-white bg-zinc-800 border border-zinc-700 p-1.5 px-3 rounded cursor-pointer"
                >
                  {copiedId === "social-snippet" ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  Copy Code
                </button>
                <pre className="bg-zinc-950 text-slate-300 p-5 rounded-xl font-mono text-[10px] md:text-xs overflow-x-auto border border-zinc-800 max-h-56">
{`<!-- Meta Open Graph Metadata -->
<meta property="og:title" content="LocalBuild | Premium Media Buying, Website dev & AI Systems" />
<meta property="og:site_name" content="LocalBuild" />
<meta property="og:description" content="Patna & Bihar's top digital marketing agency coordinating custom React platforms, SEO optimization, Google Local Service Ads, and direct WhatsApp integrations." />
<meta property="og:image" content="https://i.ibb.co/G3tMbK2q/image.png" />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://www.localbuild.site" />

<!-- Twitter Card Metadata -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="LocalBuild | Premium Media Buying, Website dev & AI Systems" />
<meta name="twitter:description" content="Patna & Bihar's top digital marketing agency coordinating custom React layouts." />
<meta name="twitter:image" content="https://i.ibb.co/G3tMbK2q/image.png" />`}
                </pre>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: Keywords Search Vault */}
        {activeTab === "keywords" && (
          <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-6 animate-fadeIn">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-zinc-100 pb-5">
              <div>
                <h2 className="text-xl md:text-2xl font-display font-extrabold tracking-tight text-zinc-900">
                  Surgical Keyword Matrix & Search Vault
                </h2>
                <p className="text-zinc-500 text-xs mt-1">
                  Filter and navigate through premium, localized, long-tail and service keywords recommended for LocalBuild.
                </p>
              </div>

              <div className="flex items-center gap-2 font-mono">
                <span className="text-xs text-zinc-500 bg-zinc-100 p-1.5 px-2.5 rounded-md">
                  Showing <strong className="text-zinc-800">{filteredKeywords.length}</strong> items
                </span>
                <button 
                  onClick={() => triggerCopy(JSON.stringify(keywordsList, null, 2), "keywords-raw")}
                  className="bg-slate-100 hover:bg-zinc-200 border border-slate-200 text-zinc-700 py-1.5 px-3 rounded-md text-xs flex items-center gap-1 cursor-pointer transition"
                >
                  {copiedId === "keywords-raw" ? <CheckCircle className="w-3.5 h-3.5 text-emerald-500" /> : <Download className="w-3.5 h-3.5" />}
                  Copy Matrix Dataset
                </button>
              </div>
            </div>

            {/* Matrix Filters */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-3" />
                <input 
                  type="text" 
                  placeholder="Search keywords, locations (Patna, Bangalore etc) or services..." 
                  value={keywordSearch}
                  onChange={(e) => setKeywordSearch(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 outline-hidden py-2 pl-9 pr-4 rounded-xl text-sm transition"
                />
              </div>

              <div className="flex flex-wrap items-center gap-1">
                {[
                  { id: "all", label: "All Lists" },
                  { id: "seo", label: "Agency & SEO Corp" },
                  { id: "longtail", label: "High Volume Long-Tail" },
                  { id: "local", label: "India & Local focus" },
                  { id: "service", label: "High-Converting Leads" },
                ].map((btn) => (
                  <button
                    key={btn.id}
                    onClick={() => setKeywordType(btn.id as any)}
                    className={`text-xs px-3 py-2 rounded-lg font-medium transition cursor-pointer border ${
                      keywordType === btn.id 
                      ? "bg-zinc-950 border-zinc-950 text-white" 
                      : "bg-slate-100 hover:bg-slate-200 border-slate-200 text-zinc-600"
                    }`}
                  >
                    {btn.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Keywords Grid/Table */}
            <div className="border border-slate-150 rounded-xl overflow-hidden bg-white shadow-3xs">
              <div className="overflow-x-auto max-h-[460px] scrollbar-thin">
                <table className="w-full text-left text-xs font-normal border-collapse">
                  <thead className="bg-slate-50 border-b border-slate-200 text-zinc-700 font-bold sticky top-0 uppercase tracking-widest text-[9px]">
                    <tr>
                      <th className="py-3 px-4">Keyword Term</th>
                      <th className="py-3 px-4">Search Intent</th>
                      <th className="py-3 px-4">Est Local Volume / Mo</th>
                      <th className="py-3 px-4">Ranking Difficulty</th>
                      <th className="py-3 px-4 text-right">Instant Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredKeywords.length > 0 ? (
                      filteredKeywords.map((kw, i) => (
                        <tr key={i} className="hover:bg-slate-50/50 transition">
                          <td className="py-3 px-4 font-semibold text-zinc-800 font-mono tracking-tight text-sm">
                            {kw.keyword}
                          </td>
                          <td className="py-3 px-4">
                            <span className={`inline-block px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider ${
                              kw.intent === "Transactional" ? "bg-emerald-50 text-emerald-700 border border-emerald-100" :
                              kw.intent === "Commercial" ? "bg-amber-50 text-amber-700 border border-amber-100" :
                              "bg-indigo-50 text-indigo-700 border border-indigo-100"
                            }`}>
                              {kw.intent}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-zinc-500 font-mono">
                            {kw.volume} searches
                          </td>
                          <td className="py-3 px-4">
                            <span className={`inline-flex items-center gap-1 ${
                              kw.difficulty === "Low" ? "text-emerald-600" :
                              kw.difficulty === "Medium" ? "text-amber-600" : "text-rose-600"
                            }`}>
                              <span className="w-1.5 h-1.5 rounded-full bg-current" />
                              {kw.difficulty} Priority
                            </span>
                          </td>
                          <td className="py-3 px-4 text-right">
                            <button 
                              onClick={() => triggerCopy(kw.keyword, `k-${i}`)}
                              className="text-[10px] text-zinc-400 hover:text-blue-500 hover:bg-slate-100 py-1 px-2.5 rounded border border-slate-200 transition cursor-pointer"
                            >
                              {copiedId === `k-${i}` ? "Copied" : "Copy Target"}
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={5} className="py-12 text-center text-zinc-400 font-mono">
                          No matching localized search terms found. Try refining search keywords query.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Playbook Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              <div className="border border-slate-200 rounded-xl p-5 bg-gradient-to-br from-slate-50 to-white">
                <h4 className="font-display font-semibold text-zinc-900 mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  India and Regional Keywords Strategy
                </h4>
                <p className="text-zinc-600 text-xs leading-relaxed">
                  Focus link outreach and GBP category optimization on <strong>"Digital Marketing Patna"</strong> and <strong>"SEO Company Patna"</strong> first, then aggressively deploy programmatic landing pages to capture long-tail terms in <strong>Bihar, Patna, Delhi and Bangalore</strong>.
                </p>
              </div>
              <div className="border border-slate-200 rounded-xl p-5 bg-gradient-to-br from-slate-50 to-white">
                <h4 className="font-display font-semibold text-zinc-900 mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Zero Search Volume Goldmines
                </h4>
                <p className="text-zinc-600 text-xs leading-relaxed">
                  Highly specific long-tailed queries (e.g., <strong>"best lead generation solutions for local real estate builders Patna"</strong>) do not carry high volume metrics but convert at nearly 40% on bespoke landing pages. Build authoritative pages for these targets.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: JSON-LD Schemas */}
        {activeTab === "schemas" && (
          <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-8 animate-fadeIn">
            <div>
              <h2 className="text-xl md:text-2xl font-display font-extrabold tracking-tight text-zinc-900 mb-2">
                Structured Schema Code Studio (JSON-LD)
              </h2>
              <p className="text-zinc-600 text-sm max-w-3xl leading-relaxed">
                Google explicitly consumes schema structures to show rich features, sitelinks, local map snippets, and direct review stars. Click Copy and insert them inside your site footer or template layout.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Left Column: Schema select list */}
              <div className="lg:col-span-4 space-y-3">
                {[
                  { id: "sch-local", title: "Professional Service / Local Schema", desc: "For Patna & Bangalore offices, addresses, contact telephone, hours, and maps coords.", template: localBusinessSchemaCode },
                  { id: "sch-org", title: "Organization Schema", desc: "Confirms corporate brand identity, official site logotype, parent identity, social profiles.", template: organizationSchemaCode },
                  { id: "sch-web", title: "WebSite Search Schema", desc: "Generates Google Sitelinks Search Box directly inside SERP pages.", template: websiteSchemaCode },
                  { id: "sch-bread", title: "Structured Breadcrumb XML Schema", desc: "Builds absolute structural breadcrumbs to replace dirty paths in Google results.", template: breadcrumbSchemaCode },
                ].map((sch) => (
                  <div 
                    key={sch.id}
                    className="p-4 border border-slate-200 rounded-xl hover:bg-slate-50 transition relative group"
                  >
                    <h4 className="font-display font-bold text-sm text-zinc-900 mb-1">{sch.title}</h4>
                    <p className="text-zinc-500 text-[11px] leading-relaxed mb-3">{sch.desc}</p>
                    <button
                      onClick={() => triggerCopy(sch.template, sch.id)}
                      className="inline-flex items-center gap-1.5 text-xs text-blue-600 font-semibold hover:underline cursor-pointer"
                    >
                      {copiedId === sch.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-500" />
                          Code Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          Copy Structure Markup
                        </>
                      )}
                    </button>
                  </div>
                ))}
              </div>

              {/* Right Column: Code viewer box */}
              <div className="lg:col-span-8 space-y-4">
                <div className="bg-zinc-950 p-5 rounded-xl border border-zinc-800 text-slate-300 font-mono text-[10px] md:text-xs overflow-auto shadow-inner relative max-h-[500px]">
                  <div className="sticky top-0 right-0 flex justify-end pb-3 mb-2 border-b border-zinc-900">
                    <span className="text-[10px] text-zinc-600 bg-zinc-900 border border-zinc-800 p-1 px-2 rounded tracking-widest uppercase block mr-auto">JSON-LD Structured Markup Preview</span>
                  </div>
                  <pre>{`{
  "@context": "https://schema.org",
  "@graph": [
    // Organization Identity
    ${organizationSchemaCode.replace(/\s+/g, ' ').slice(0, 100)}...
    
    // Local Office Business Address Location
    ${localBusinessSchemaCode.replace(/\s+/g, ' ').slice(0, 100)}...
  ]
}`}</pre>
                  <p className="text-zinc-500 text-[10px] leading-relaxed pt-2.5 mt-4 border-t border-zinc-900">Configure these structured parameters within scripts of the home.template layout inside search platforms to verify index validation via search-console.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: Content Calendar & 6 Month Plan */}
        {activeTab === "calendar" && (
          <div className="space-y-8 animate-fadeIn">
            
            {/* 6 Month Content Calendar Grid */}
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-xs">
              <h2 className="text-xl md:text-2xl font-display font-extrabold tracking-tight text-zinc-900 mb-2">
                6-Month Hyper-Targeted Marketing Calendar
              </h2>
              <p className="text-zinc-600 text-sm mb-6 max-w-3xl leading-relaxed">
                This structured playbook is built specifically for targeting niches like <strong>Dental Clinics, Doctors, IVF centers, Real Estate developers, CA Firms, and Packers & Movers</strong> across localized target markets.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {calendarItems.map((item, idx) => (
                  <div key={idx} className="border border-slate-200 bg-slate-50 hover:bg-white rounded-xl p-5 shadow-3xs flex flex-col justify-between transition-all group hover:border-blue-300">
                    <div>
                      <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-2 mb-3">
                        <span className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest">{item.month}</span>
                        <span className="text-[10px] uppercase font-mono bg-blue-50 text-blue-600 py-0.5 px-2 rounded-full font-bold">{item.channel}</span>
                      </div>
                      
                      <h4 className="text-blue-500 text-xs uppercase tracking-wider font-mono font-bold">{item.theme}</h4>
                      <h3 className="font-display font-extrabold text-sm text-zinc-800 leading-snug mt-1.5 line-clamp-2">
                        "{item.topic}"
                      </h3>
                      
                      <div className="mt-4 space-y-1 text-xs">
                        <p className="text-zinc-400 font-medium">Target Audience:</p>
                        <p className="text-zinc-700 font-serif italic font-medium">{item.targetAudience}</p>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100">
                      <p className="text-zinc-400 text-[10px] font-mono block uppercase">Keywords Target</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {item.keywords.map((kw, kIdx) => (
                          <span key={kIdx} className="text-[10px] font-mono bg-slate-200 px-1.5 py-0.5 text-zinc-600 max-w-full truncate rounded whitespace-nowrap">
                            #{kw}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Content Hub and Blog Checklist */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-xs">
              
              {/* Core blog ideas */}
              <div className="lg:col-span-7 space-y-5">
                <h3 className="text-lg font-display font-extrabold tracking-tight text-zinc-900 border-b border-slate-100 pb-2 mb-4">
                  15 High-Rank Blog Topics & Copy Elements
                </h3>
                <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2 scrollbar-thin">
                  {[
                    "Top 10 Digital Marketing Agency Teams Patna: Ultimate 2026 Rankings",
                    "How to Establish Doctor Brand Authority Online: Patna Healthcare Guide",
                    "A Local Builder's Masterclass to Securing Premium Apartment Buyers In Noida & Bihar",
                    "The Ultimate On-Page Technical SEO Checklist for Local Business Websites",
                    "WhatsApp CRM Chatbots vs. Standard Emails: Maximizing Student Intake Rates",
                    "Dental Clinic Marketing Playbook: Triple Bookings in Patna & Delhi Nearby Channels",
                    "Ecommerce Store Page Load Secrets: Keeping bounce rates below 20% easily",
                    "10 Citation Listings and Directories Bihar Business owners must lock in today",
                    "Why CA practice structures require dedicated localized Google Schema files",
                    "Facebook Lead Ad Form Rules: Designing dynamic conversion vectors",
                    "Packers & Movers Lead Conversion models that close 75% raw telephone inbound calls",
                    "How local service ads protect brand authority in Google search packages",
                    "Core Web Vitals Blueprint: Preconnect tags, asset caching, and dynamic placeholders",
                    "Digital Marketing Bihar budget guidelines: ROI planners for real estate",
                    "How E-E-A-T structures create trusted doctor profiles on Google Search Pack"
                  ].map((topic, i) => (
                    <div key={i} className="flex gap-3 items-start md:items-center bg-slate-50 hover:bg-slate-100/50 p-2.5 rounded-lg border border-slate-150 transition">
                      <span className="w-5 h-5 rounded-full bg-blue-100 font-mono text-blue-600 flex items-center justify-center font-bold shrink-0 text-xs">
                        {i + 1}
                      </span>
                      <p className="text-zinc-700 text-xs font-semibold leading-relaxed">
                        {topic}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Competitor analysis block */}
              <div className="lg:col-span-5 space-y-4">
                <h3 className="text-lg font-display font-extrabold tracking-tight text-zinc-900">Competitor SEO Gap Analysis</h3>
                <p className="text-zinc-600 text-xs leading-relaxed">
                  Competitors in Patna, Bihar and regional networks are highly reliant on legacy CMS structures (un-optimized heavy WordPress templates), carry slow load times (Core Web Vitals failure), lack proper JSON-LD schemas, and utilize broad informational keywords instead of localized search templates.
                </p>
                
                <div className="border border-slate-100 bg-slate-50 p-4 rounded-xl space-y-4 text-xs font-medium">
                  <div>
                    <span className="text-rose-500 font-bold block">1. Speed and CWV Deficiency</span>
                    <p className="text-zinc-500 text-[11px] mt-0.5 leading-relaxed">Most local agencies display average LCP scores exceeding 3.5 seconds. Our modern lightweight compilation ranks in &lt;1.2 seconds, securing critical search speed boosts.</p>
                  </div>
                  <div>
                    <span className="text-rose-500 font-bold block">2. Complete Absence of Structured Data</span>
                    <p className="text-zinc-500 text-[11px] mt-0.5 leading-relaxed">Fewer than 10% of local competitors integrate specialized ProfessionalService or LocalBusiness JSON-LD markup. Having validated codes automatically wins Google maps attention.</p>
                  </div>
                  <div>
                    <span className="text-rose-500 font-bold block">3. Ineffective Directory Match Profiles</span>
                    <p className="text-zinc-500 text-[11px] mt-0.5 leading-relaxed">They frequently use inconsistent phone numbers/address listings. Syncing accurate KR Road location records builds unmatched trust signals.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* TAB 5: Local SEO & Technical Strategy */}
        {activeTab === "local" && (
          <div className="space-y-8 animate-fadeIn">
            
            {/* Robots.txt and Sitemap Raw views (Tasks 13, 14, 16) */}
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-xs grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div>
                <div className="flex items-center justify-between gap-3 mb-2 pb-2 border-b border-slate-100">
                  <h3 className="text-base font-display font-extrabold text-zinc-900 flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-zinc-600" />
                    Robots.txt Content
                  </h3>
                  <button 
                    onClick={() => triggerCopy(robotsTxtCode, "txt-robots")}
                    className="text-xs text-blue-600 hover:text-blue-500 font-semibold cursor-pointer"
                  >
                    {copiedId === "txt-robots" ? "Copied" : "Copy File"}
                  </button>
                </div>
                <p className="text-zinc-500 text-[11px] mb-3">Ensure this exact file content resides at localbuild.site/robots.txt to coordinate index crawl bandwidth correctly.</p>
                <pre className="bg-zinc-950 text-slate-300 p-4 rounded-xl font-mono text-[10px] md:text-xs overflow-auto border border-zinc-800 h-48">
{robotsTxtCode}
                </pre>
              </div>

              <div>
                <div className="flex items-center justify-between gap-3 mb-2 pb-2 border-b border-slate-100">
                  <h3 className="text-base font-display font-extrabold text-zinc-900 flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-zinc-600" />
                    Absolute XML Sitemap Structure
                  </h3>
                  <button 
                    onClick={() => triggerCopy(sitemapXmlCode, "xml-sitemap")}
                    className="text-xs text-blue-600 hover:text-blue-500 font-semibold cursor-pointer"
                  >
                    {copiedId === "xml-sitemap" ? "Copied" : "Copy Sitemap"}
                  </button>
                </div>
                <p className="text-zinc-500 text-[11px] mb-3">Submit this sitemap inside your Search Console console account to guarantee rapid indexation of priority pages.</p>
                <pre className="bg-zinc-950 text-slate-300 p-4 rounded-xl font-mono text-[10px] md:text-xs overflow-auto border border-zinc-800 h-48">
{sitemapXmlCode}
                </pre>
              </div>

            </div>

            {/* General Technical checklists (CWV, E-E-A-T, Alt Text, Canonical) */}
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-6">
              <h2 className="text-xl md:text-2xl font-display font-extrabold tracking-tight text-zinc-900">
                15+ Experience Technical SEO Checklist & Playbooks
              </h2>
              <p className="text-zinc-600 text-sm max-w-2xl">
                Implement these pristine optimizations across your website files and search consoles to maintain high-quality signals and Core Web Vital dominance.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {technicalSEOAudits.map((audit, idx) => (
                  <div key={idx} className="p-5 border border-slate-150 hover:border-slate-200 rounded-xl bg-slate-50 hover:bg-white transition-all space-y-2">
                    <h4 className="font-display font-extrabold text-sm text-zinc-900 flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-blue-100 text-blue-600 font-mono text-center leading-none text-xs font-bold flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      {audit.title}
                    </h4>
                    <p className="text-zinc-600 text-xs leading-relaxed pl-6 font-medium">
                      {audit.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tasks 18: Google Business Profile optimization blueprints */}
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-2xl p-6 md:p-8 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-8 space-y-4">
                  <div className="inline-block bg-white/10 border border-white/20 p-2 py-0.5 rounded-full text-xs font-mono font-bold tracking-widest uppercase">
                    Google Business Profile (GBP) Pack Playbook
                  </div>
                  <h3 className="text-xl md:text-3xl font-display font-extrabold tracking-tight">Active Map-Pack Indexing Plan</h3>
                  <p className="text-blue-100 text-xs md:text-sm leading-relaxed max-w-2xl">
                    Doctors, dentists, coaching institutes, CA practices, and local builders heavily thrive on map coordinates. Dominate map packs in <strong>Patna, Delhi, Bangalore and Mumbai</strong> with these three primary daily actions:
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-blue-50 mt-2 font-medium">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-300 shrink-0 mt-0.5" />
                      <span>Use target service names in reviews: E.g., 'website development company Patna' or 'best digital marketing services Patna' in comments.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-300 shrink-0 mt-0.5" />
                      <span>Post weekly local updates with geo-tagged photos and optimized service keywords in caption paragraphs.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-300 shrink-0 mt-0.5" />
                      <span>Configure secondary categories: Include 'Marketing Agency', 'Website Designer', and 'SEO Company' listings.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-300 shrink-0 mt-0.5" />
                      <span>Keep absolute brand NAP consistency inside Yelp, Sulekha, YellowPages, Parvathipuram, and Bengaluru records.</span>
                    </li>
                  </ul>
                </div>
                <div className="lg:col-span-4 bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/15 space-y-3 shrink-0 text-center lg:text-left self-stretch flex flex-col justify-center">
                  <h4 className="text-white font-display font-semibold text-sm">Target Audience Conversion Rate</h4>
                  <div className="text-3xl md:text-4xl font-extrabold text-amber-300 font-mono tracking-tighter">4.8★ / 920+</div>
                  <p className="text-[11px] text-blue-100">Review rating target across Bengaluru & Patna map pack operations to establish E-E-A-T trust signals instantly.</p>
                </div>
              </div>
            </div>

          </div>
        )}

      </div>

      {/* Structured FAQs Accordion (Tasks 6) */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 mt-12">
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">FAQ Keyword Strategy Elements</span>
            <h2 className="text-2xl md:text-3xl font-display font-extrabold text-zinc-900 tracking-tight mt-3">
              Google-Optimized FAQ Section
            </h2>
            <p className="text-zinc-500 text-xs mt-1.5">
              These verified Q&As target high-volume conversational local phrases and generate immediate position zero featured snippet entries.
            </p>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto text-sm">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-slate-200 hover:border-slate-350 rounded-xl p-5 bg-slate-50 hover:bg-white transition-all space-y-2">
                <h4 className="font-display font-extrabold text-base text-zinc-900 text-left">
                  Q: {faq.q}
                </h4>
                <p className="text-zinc-600 text-xs md:text-sm pl-4 leading-relaxed font-medium">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
