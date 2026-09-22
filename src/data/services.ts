import { ServiceDetail } from "../types/services";

export const SERVICES_DATA: ServiceDetail[] = [
  // ===================== GROUP 01: BUILD =====================
  {
    id: "website-design",
    num: "01",
    iconName: "Monitor",
    title: "Website Design",
    badge: "High-Converting Websites",
    shortDesc: "Build a fast website that gives visitors a clear reason to contact you.",
    problemSolved: "Most local business websites are slow, difficult to navigate on smartphones, and lack clear reasons for visitors to call or message, resulting in wasted ad spend and lost revenue.",
    whatWeDo: "We design, build, and deploy high-performance, mobile-first websites engineered specifically around clear customer conversion, fast loading speeds, and local search authority.",
    capabilities: [
      "Sub-2-second load times on mobile connections",
      "Direct WhatsApp and click-to-call integrations",
      "Clean local business schema and on-page SEO"
    ],
    features: [
      "Responsive editorial layout tested across all phone, tablet, and desktop sizes",
      "Conversion-focused copy that clearly answers what you do and why customers should choose you",
      "Instant 1-tap phone and WhatsApp inquiry triggers",
      "Direct Google Tag Manager and conversion pixel integration",
      "Clean semantic code structure with zero bloated page builder dependencies",
      "Speed optimization achieving 90+ Google Lighthouse performance scores"
    ],
    whosItFor: "Doctors, clinics, professional firms, home services contractors, and local businesses seeking predictable online inquiries",
    ctaText: "Explore Website Design",
    category: "build",
    group: "build",
    groupNumber: "01",
    groupTitle: "BUILD",
    slug: "website-design",
    metricHighlight: { label: "Target Load Speed", value: "< 1.8s" }
  },
  {
    id: "application-design",
    num: "02",
    iconName: "Smartphone",
    title: "Application Design",
    badge: "Web & Mobile Experiences",
    shortDesc: "Design intuitive web and mobile experiences around how your customers actually use them.",
    problemSolved: "Generic off-the-shelf software often complicates team workflows or charges recurring per-user fees, while clunky customer portals frustrate users.",
    whatWeDo: "We design and build purpose-built web tools, customer estimate calculators, client portals, and administrative workflows tailored to your exact business operation.",
    capabilities: [
      "Interactive customer calculators & estimate generators",
      "Secure client intake and document portals",
      "Zero per-seat recurring vendor software costs"
    ],
    features: [
      "User journey mapping and high-fidelity interface prototypes",
      "Responsive web applications optimized for desktop and mobile browsers",
      "Instant inquiry and booking flow synchronization",
      "Role-based authentication and secure cloud database architecture",
      "Direct API integrations with billing, SMS, and WhatsApp",
      "Complete code and platform ownership"
    ],
    whosItFor: "Businesses requiring custom estimation calculators, appointment portals, or internal team workflow software",
    ctaText: "Explore Application Design",
    category: "build",
    group: "build",
    groupNumber: "01",
    groupTitle: "BUILD",
    slug: "web-mobile-applications",
    metricHighlight: { label: "Client Usability", value: "100% Custom" }
  },
  {
    id: "ecommerce",
    num: "03",
    iconName: "ShoppingBag",
    title: "Ecommerce",
    badge: "Frictionless Checkout",
    shortDesc: "Create a smoother online buying experience from product discovery to checkout.",
    problemSolved: "Slow product pages, complicated checkouts, and high cart abandonment kill profitability on ecommerce campaigns.",
    whatWeDo: "We build modern, fast storefronts optimized for Indian payment gateways (UPI, cards, net banking, and verified Cash on Delivery) with automated cart recovery.",
    capabilities: [
      "Frictionless 1-page checkout flows",
      "Razorpay, Cashfree & UPI instant payment integration",
      "Automated WhatsApp abandoned cart recovery"
    ],
    features: [
      "Custom Shopify or fast headless storefront architecture",
      "Speed-optimized catalog and product detail templates",
      "Seamless Indian payment gateway setup (UPI, Cards, NetBanking)",
      "Automated WhatsApp notification triggers for order updates and abandoned carts",
      "Customer review displays and high-trust conversion badges",
      "Real-time inventory and courier logistics integration"
    ],
    whosItFor: "Direct-to-consumer brands, local manufacturers, and regional retailers selling products online",
    ctaText: "Explore Ecommerce",
    category: "build",
    group: "build",
    groupNumber: "01",
    groupTitle: "BUILD",
    slug: "ecommerce",
    metricHighlight: { label: "Checkout Optimization", value: "1-Page Flow" }
  },

  // ===================== GROUP 02: GROW =====================
  {
    id: "google-ads",
    num: "04",
    iconName: "Target",
    title: "Google Ads",
    badge: "High-Intent Search",
    shortDesc: "Reach people who are already searching for your products or services.",
    problemSolved: "Businesses burn through ad budgets on broad search terms that attract unqualified clicks rather than paying local clients.",
    whatWeDo: "We architect tightly structured Google Search campaigns with rigorous negative keyword exclusions, compelling direct-response copy, and verified phone call tracking.",
    capabilities: [
      "High-intent local keyword targeting",
      "Exhaustive negative keyword budget protection",
      "Direct call and qualified lead conversion tracking"
    ],
    features: [
      "Granular ad group structuring matched directly to specific service offerings",
      "Daily negative keyword maintenance preventing wasted ad clicks",
      "High-converting ad copy with local sitelinks and call extensions",
      "Dedicated high-speed landing page alignment for high Quality Scores",
      "Live conversion tracking via Google Tag Manager and direct call routing",
      "Transparent weekly performance reports focusing on cost per inquiry"
    ],
    whosItFor: "Service providers, clinics, and professional firms wanting immediate phone inquiries from high-intent local buyers",
    ctaText: "Explore Google Ads",
    category: "grow",
    group: "grow",
    groupNumber: "02",
    groupTitle: "GROW",
    slug: "google-ads-management",
    metricHighlight: { label: "Intent Focus", value: "100% Inbound" }
  },
  {
    id: "meta-ads",
    num: "05",
    iconName: "Share2",
    title: "Meta Ads",
    badge: "Social Inquiries",
    shortDesc: "Turn attention on Instagram and Facebook into qualified enquiries.",
    problemSolved: "Boosting random posts generates passive vanity likes but zero qualified customer inquiries or consultations.",
    whatWeDo: "We run disciplined Meta advertising campaigns that combine precise geographic radius targeting, clear visual problem-solution creative, and direct-to-WhatsApp or form funnels.",
    capabilities: [
      "Precise local radius and demographic targeting",
      "High-converting direct-response video and image creative",
      "Direct WhatsApp and instant lead form conversion flows"
    ],
    features: [
      "Tightly targeted radius boundaries around your physical practice or service area",
      "Direct-response visual creative designed to stop social scrolling",
      "Direct WhatsApp click-to-chat funnels with pre-filled customer inquiries",
      "Retargeting funnels for prospective clients who visited your website",
      "Continuous creative testing to prevent ad fatigue and lower acquisition costs",
      "Instant lead notifications sent straight to your phone and sales team"
    ],
    whosItFor: "Clinics, cosmetic centers, educational institutes, interior design studios, and local retail showrooms",
    ctaText: "Explore Meta Ads",
    category: "grow",
    group: "grow",
    groupNumber: "02",
    groupTitle: "GROW",
    slug: "meta-ads-management",
    metricHighlight: { label: "Conversion Funnel", value: "Direct WhatsApp" }
  },
  {
    id: "gbp-optimization",
    num: "06",
    iconName: "Compass",
    title: "Google Business Profile",
    badge: "Local Maps & Calls",
    shortDesc: "Help nearby customers discover your business when they're ready to buy.",
    problemSolved: "Incomplete or neglected Google Business Profiles fail to rank in the Google Maps 3-Pack, causing nearby high-intent searchers to call your competitors instead.",
    whatWeDo: "We systematically audit, optimize, and actively maintain your Google Business Profile so local customers searching nearby find your phone number, location, and reviews first.",
    capabilities: [
      "Google Map 3-Pack visibility optimization",
      "Proactive review acquisition and reputation workflows",
      "Accurate local citation and business category alignment"
    ],
    features: [
      "Complete profile audit, secondary category structuring, and attribute enrichment",
      "Proactive review generation systems that encourage satisfied clients to leave 5-star feedback",
      "Regular geo-tagged visual updates, product listings, and service Q&A curation",
      "Duplicate listing suppression and spam competitor mitigation",
      "Weekly monitoring of direct phone calls, direction requests, and profile visits",
      "Direct phone call lead attribution synced with your operational dashboard"
    ],
    whosItFor: "Doctors, dental clinics, specialty contractors, retail outlets, and local service establishments",
    ctaText: "Explore Business Profile",
    category: "grow",
    group: "grow",
    groupNumber: "02",
    groupTitle: "GROW",
    slug: "google-business-profile-optimization",
    metricHighlight: { label: "Map Rank Target", value: "Top 3 Pack" }
  },
  {
    id: "seo",
    num: "07",
    iconName: "Search",
    title: "Local SEO",
    badge: "Sustainable Organic Reach",
    shortDesc: "Rank for high-intent local searches in your city and surrounding neighbourhoods.",
    problemSolved: "Relying purely on paid ads means inquiries stop the moment ad spend halts; without organic search visibility, your business remains dependent on daily ad budgets.",
    whatWeDo: "We build long-term local organic search equity through technical site optimization, dedicated local service area pages, structured schema markup, and authoritative local citations.",
    capabilities: [
      "City and locality-specific keyword optimization",
      "Technical site speed and mobile crawlability enhancement",
      "Consistent local citation and NAP authority building"
    ],
    features: [
      "In-depth local search keyword research focusing on high-commercial buyer intent",
      "Service area landing pages targeting key surrounding neighborhoods and pin codes",
      "Clean metadata, descriptive headers, and local business schema markup",
      "Google Search Console audit, indexing checks, and broken link resolution",
      "Authoritative local directory submissions with strict NAP (Name, Address, Phone) consistency",
      "Transparent monthly search ranking and organic inquiry reports"
    ],
    whosItFor: "Established businesses looking to build a sustainable, recurring stream of free organic customer inquiries",
    ctaText: "Explore Local SEO",
    category: "grow",
    group: "grow",
    groupNumber: "02",
    groupTitle: "GROW",
    slug: "seo",
    metricHighlight: { label: "Traffic Source", value: "High Intent" }
  },

  // ===================== GROUP 03: REACH =====================
  {
    id: "youtube-growth",
    num: "08",
    iconName: "PlayCircle",
    title: "YouTube Growth",
    badge: "Video Authority",
    shortDesc: "Build a stronger YouTube presence with strategy, content and search optimization.",
    problemSolved: "Local businesses struggle to build deep trust with buyers who increasingly want to see real work demonstrations, doctor explanations, or customer transformations before choosing a provider.",
    whatWeDo: "We structure your YouTube channel, develop customer-focused video topic strategies, optimize metadata for video search, and run targeted YouTube ads to position your business as the category authority.",
    capabilities: [
      "Topic planning based on real customer questions",
      "Search-optimized titles, descriptions, and thumbnails",
      "Geo-targeted YouTube in-feed ad campaigns"
    ],
    features: [
      "Content strategy addressing common customer hesitations, procedure questions, and case studies",
      "Thumbnail design guidelines and title optimization for higher click-through rates",
      "Video SEO for high-ranking terms on both YouTube search and Google search results",
      "Targeted YouTube discovery campaigns reaching prospective clients in your local metro area",
      "Direct call-to-action overlays driving viewers to your website consultation form",
      "Repurposing long-form client stories into high-performing short-form video assets"
    ],
    whosItFor: "Specialist doctors, educational institutions, real estate builders, and high-value service consultants",
    ctaText: "Explore YouTube Growth",
    category: "reach",
    group: "reach",
    groupNumber: "03",
    groupTitle: "REACH",
    slug: "youtube-growth",
    metricHighlight: { label: "Authority Format", value: "Long & Short Video" }
  },
  {
    id: "content-creative",
    num: "09",
    iconName: "PenTool",
    title: "Content & Creative",
    badge: "Brand Messaging",
    shortDesc: "High-performing video and visual creative engineered for social conversion.",
    problemSolved: "Generic stock photos and uninspired graphic templates make businesses look identical to competitors, failing to communicate why customers should trust them.",
    whatWeDo: "We craft clear, persuasive messaging, direct-response advertising creatives, and educational customer content that builds commercial credibility and motivates action.",
    capabilities: [
      "Conversion-engineered ad creatives & video concepts",
      "Customer-centric website copywriting & messaging",
      "Automated follow-up message scripts that close leads"
    ],
    features: [
      "Clear, benefit-led headline and value proposition frameworks",
      "Direct-response visual ad creatives tailored for Instagram, Facebook, and Google",
      "Objection-handling copy that resolves customer doubts before they contact you",
      "Professional script outlines for short-form client case studies and video testimonials",
      "Structured WhatsApp and email inquiry response templates for your sales team",
      "Regular creative testing and iterations based on real conversion data"
    ],
    whosItFor: "Businesses wanting their digital communications to look professional, credible, and distinctly human",
    ctaText: "Explore Content & Creative",
    category: "reach",
    group: "reach",
    groupNumber: "03",
    groupTitle: "REACH",
    slug: "content-copywriting",
    metricHighlight: { label: "Creative Focus", value: "Direct Response" }
  },
  {
    id: "local-marketing",
    num: "10",
    iconName: "Compass",
    title: "Local Marketing",
    badge: "Community Presence",
    shortDesc: "Direct local acquisition campaigns combining physical community presence with digital retargeting.",
    problemSolved: "Businesses often treat offline local presence and digital advertising as disconnected silos, losing cross-channel leverage and brand recall.",
    whatWeDo: "We connect hyper-local digital advertising with on-ground promotional touchpoints, local community partnerships, and geo-targeted promotions to dominate specific zip codes.",
    capabilities: [
      "Hyper-local pin code & landmark geo-targeting",
      "Cross-channel review and referral incentives",
      "Integrated local campaign promotion schedules"
    ],
    features: [
      "Geo-fenced mobile advertising targeting high-footfall commercial zones and competitor vicinities",
      "Local seasonal and festival promotional campaigns coordinated across search and social",
      "QR code intake flows bridging print collateral directly to WhatsApp consultations",
      "Community referral loops that reward word-of-mouth client introductions",
      "Multi-channel retargeting ensuring local searchers encounter your brand repeatedly",
      "Consolidated lead tracking across all digital and local outreach touchpoints"
    ],
    whosItFor: "Diagnostic labs, fitness clubs, retail stores, and service contractors dominating specific neighborhoods",
    ctaText: "Explore Local Marketing",
    category: "reach",
    group: "reach",
    groupNumber: "03",
    groupTitle: "REACH",
    slug: "local-marketing",
    metricHighlight: { label: "Territory Focus", value: "Hyper-Local Radius" }
  },

  // ===================== GROUP 04: AUTOMATE =====================
  {
    id: "ai-automation",
    num: "11",
    iconName: "Cpu",
    title: "AI Automation",
    badge: "Instant 24/7 Response",
    shortDesc: "Automate repetitive work so your team can spend more time on customers.",
    problemSolved: "Prospective customers reach out after hours, on weekends, or during busy workdays; slow responses cause over 50% of inbound inquiries to hire a competitor instead.",
    whatWeDo: "We install intelligent, reliable auto-qualification systems on WhatsApp and your website that instantly acknowledge inquiries, collect customer needs, and book consultations.",
    capabilities: [
      "Under-60-second WhatsApp & form inquiry response",
      "Automated lead qualification & requirement gathering",
      "Direct calendar booking and instant staff notifications"
    ],
    features: [
      "Custom WhatsApp conversational flows tailored to your specific service catalog",
      "Instant intake of client name, location, required service, and urgency",
      "Immediate mobile alerts sent directly to your phone the instant a qualified inquiry arrives",
      "Automatic synchronization with your team calendar for consultation booking",
      "Graceful escalation to human team members for specialized or complex inquiries",
      "Complete conversation logs and lead status tagging"
    ],
    whosItFor: "Clinics, busy contractors, legal advisors, and high-volume local service businesses",
    ctaText: "Explore AI Automation",
    category: "automate",
    group: "automate",
    groupNumber: "04",
    groupTitle: "AUTOMATE",
    slug: "ai-automation",
    metricHighlight: { label: "Response Time", value: "< 60 Seconds" }
  },
  {
    id: "business-automation",
    num: "12",
    iconName: "Zap",
    title: "Business Automation",
    badge: "Operations & Follow-Up",
    shortDesc: "Connect repetitive business tasks into simple, reliable workflows.",
    problemSolved: "Manually copying lead contacts into spreadsheets, forgetting follow-up calls, and sending manual appointment reminders wastes hours and drops revenue.",
    whatWeDo: "We connect your website forms, advertising platforms, CRM, and messaging channels so leads flow automatically to the right person and reminders go out without manual effort.",
    capabilities: [
      "Instant lead syncing between Ads, forms, CRM & phone",
      "Automated appointment & consultation reminders",
      "Systematic multi-day follow-up sequences for open leads"
    ],
    features: [
      "Direct webhook synchronization from Google Ads & Meta Ads into your CRM database",
      "Automated WhatsApp & SMS appointment reminders reducing consultation no-show rates",
      "Post-consultation follow-up sequences that systematically nurture undecided leads",
      "Automated review request messages sent after successful customer service delivery",
      "Centralized inquiry dashboard eliminating manual spreadsheet copy-pasting",
      "Full workflow testing, staff training, and ongoing technical support"
    ],
    whosItFor: "Growing teams seeking to eliminate administrative bottlenecks and keep every sales lead moving",
    ctaText: "Explore Business Automation",
    category: "automate",
    group: "automate",
    groupNumber: "04",
    groupTitle: "AUTOMATE",
    slug: "business-automation",
    metricHighlight: { label: "Admin Time Saved", value: "10+ Hours/Week" }
  },
  {
    id: "growth-systems",
    num: "13",
    iconName: "Truck",
    title: "Growth Systems",
    badge: "Integrated Pipeline",
    shortDesc: "Integrated lead generation, conversion funnels and tracking infrastructure.",
    problemSolved: "Disjointed marketing tools, uncalibrated fulfillment, and lack of end-to-end unit economic visibility make scaling ad spend risky and unpredictable.",
    whatWeDo: "We construct end-to-end commercial growth systems linking high-converting front-end funnels, real-time conversion tracking, customer verification, and pipeline analytics.",
    capabilities: [
      "Full-funnel conversion architecture & tracking",
      "Automated customer verification & inquiry scoring",
      "Unit economic reporting linking spend directly to revenue"
    ],
    features: [
      "High-converting landing page funnels tailored specifically to Indian consumer habits",
      "Automated phone/WhatsApp verification reducing bogus inquiries and cancellations",
      "Clean revenue attribution tracking linking ad spend to closed sales deals",
      "Customized inquiry routing rules for sales representatives and field specialists",
      "Predictable unit economic models accounting for acquisition costs and customer lifetime value",
      "Quarterly strategy reviews and system upgrades to sustain category leadership"
    ],
    whosItFor: "Ambitious businesses scaling ad spend across regional territories or multi-city locations",
    ctaText: "Explore Growth Systems",
    category: "automate",
    group: "automate",
    groupNumber: "04",
    groupTitle: "AUTOMATE",
    slug: "dropshipping",
    metricHighlight: { label: "System Goal", value: "Predictable Scale" }
  }
];
