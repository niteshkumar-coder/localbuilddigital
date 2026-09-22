export interface CaseStudyMetric {
  metric: string;
  before: string;
  withLocalBuild: string;
}

export interface CaseStudy {
  id: string;
  serviceNumber: string;
  serviceCategory: string;
  title: string;
  tagline: string;
  clientDomain: string;
  imageUrl: string;
  imageWidth: number;
  imageHeight: number;
  altText: string;
  keyOutcome: string;
  shortSummary: string;
  challenge: string;
  strategy: string;
  strategyPoints: string[];
  result: string;
  metrics: CaseStudyMetric[];
  isSampleResult: boolean;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "case-01-website-design",
    serviceNumber: "01",
    serviceCategory: "Website Design",
    title: "01 Website Design",
    tagline: "Stunning, fast, mobile-first websites that convert visitors into customers.",
    clientDomain: "Architecture & Engineering Practice",
    imageUrl: "https://i.ibb.co/mCVRS6js/image.png",
    imageWidth: 380,
    imageHeight: 337,
    altText: "Website design case study — homepage layout shown on desktop and mobile screens",
    keyOutcome: "Sub-1.4s Mobile Page Load Speed & 2.6x Inbound Inquiries [Illustrative]",
    shortSummary: "Slow legacy site transformed into a sub-1.4s responsive web funnel with streamlined inquiry conversion.",
    challenge: "Outdated legacy website with 5.8s load times, broken mobile layout, and high visitor drop-off prior to inquiring.",
    strategy: "Engineered a mobile-first responsive architecture with sub-1.4s performance, clear consultation CTAs, and SEO-ready structure.",
    strategyPoints: [
      "Mobile-first responsive architecture and code optimization",
      "High-contrast consultation CTAs across key service pages",
      "Streamlined technical structure for fast mobile indexing"
    ],
    result: "Bounce rate reduced from 68% to 29%, with mobile inquiries expanding steadily month over month.",
    metrics: [
      { metric: "Page Load Speed", before: "5.8s", withLocalBuild: "1.4s" },
      { metric: "Speed Score", before: "42 / 100", withLocalBuild: "96 / 100" },
      { metric: "Inquiry Conversion", before: "1.2%", withLocalBuild: "3.1%" }
    ],
    isSampleResult: true
  },
  {
    id: "case-02-google-ads",
    serviceNumber: "02",
    serviceCategory: "Google Ads Management",
    title: "02 Google Ads Management",
    tagline: "ROI-focused Search & Display campaigns that bring real, targeted leads.",
    clientDomain: "Diagnostic Healthcare & Specialty Clinic",
    imageUrl: "https://i.ibb.co/RkSvbSTs/image.png",
    imageWidth: 380,
    imageHeight: 337,
    altText: "Google Ads case study — paid search campaign dashboard with performance graphs",
    keyOutcome: "42% Reduction in Cost Per Lead with Wasted Spend Eliminated [Illustrative]",
    shortSummary: "Broad casual clicks eliminated through High-Intent Search Keywords and conversion-aligned landing pages.",
    challenge: "Wasted ad budget on broad informational searches with low appointment bookings and poor conversion tracking.",
    strategy: "Restructured campaigns strictly around High-Intent Search Keywords with extensive negative keywords and disciplined bidding.",
    strategyPoints: [
      "High-Intent Search Keywords matched to clinical procedures",
      "Extensive negative keyword strategy to eliminate irrelevant clicks",
      "Verified booking conversion tracking and bid optimization"
    ],
    result: "Cost per lead plunged from ₹780 to ₹450 while qualified monthly patient bookings surged from 45 to 115.",
    metrics: [
      { metric: "Cost Per Lead", before: "₹780", withLocalBuild: "₹450" },
      { metric: "Qualified Leads", before: "45 / Mo", withLocalBuild: "115 / Mo" },
      { metric: "Conversion Rate", before: "2.1%", withLocalBuild: "5.8%" }
    ],
    isSampleResult: true
  },
  {
    id: "case-03-meta-ads",
    serviceNumber: "03",
    serviceCategory: "Meta Ads Management",
    title: "03 Meta Ads Management",
    tagline: "High-converting Facebook & Instagram ads for maximum brand reach.",
    clientDomain: "Aesthetic Wellness & Dermatology Clinic",
    imageUrl: "https://i.ibb.co/1Js1gPbQ/image.png",
    imageWidth: 380,
    imageHeight: 337,
    altText: "Meta Ads case study — Facebook and Instagram ad creative shown on mobile",
    keyOutcome: "3.4x Return on Ad Spend & Predictable Inbound Lead Flow [Illustrative]",
    shortSummary: "Broad audience ad fatigue solved with structured video creatives and segmented retargeting pools.",
    challenge: "High cost per lead and creative fatigue from unsegmented cold targeting on Instagram and Facebook.",
    strategy: "Segmented discovery audiences from warm retargeting, rolled out multi-angle creative tests, and built streamlined inquiry forms.",
    strategyPoints: [
      "Audience segmentation separating discovery from retargeting",
      "Creative testing framework with video and carousel formats",
      "Conversion-focused campaigns with Facebook & Instagram optimization"
    ],
    result: "Inbound consultations grew from 38 to 134 per month while cost per lead dropped from ₹920 to ₹380.",
    metrics: [
      { metric: "Cost Per Lead", before: "₹920", withLocalBuild: "₹380" },
      { metric: "Click-Through Rate", before: "0.85%", withLocalBuild: "2.90%" },
      { metric: "Return on Ad Spend", before: "1.4x", withLocalBuild: "3.4x" }
    ],
    isSampleResult: true
  },
  {
    id: "case-04-gbp-optimization",
    serviceNumber: "04",
    serviceCategory: "Google Business Profile Optimization",
    title: "04 Google Business Profile Optimization",
    tagline: "Dominate local search and get more walk-ins & calls from Google Maps.",
    clientDomain: "Specialty Medical & Diagnostic Center",
    imageUrl: "https://i.ibb.co/DTB24sC/image.png",
    imageWidth: 380,
    imageHeight: 337,
    altText: "Google Business Profile case study — local business listing with calls and directions actions",
    keyOutcome: "#1 Google Maps Rank & 3.2x Direct Inbound Call Volume [Illustrative]",
    shortSummary: "Incomplete listing transformed into the #1 ranked Local 3-Pack result across target service radius.",
    challenge: "Rank #14 on Google Maps despite central location, missing service attributes, and no review collection workflow.",
    strategy: "Full profile optimization, category calibration, regional directory citation audit, and systematic patient review workflows.",
    strategyPoints: [
      "Profile optimization with complete medical categories & services",
      "Citation consistency audit across key regional directories",
      "Ethical post-consultation review generation workflow"
    ],
    result: "Direct monthly calls increased from 65 to 210 and direction requests rose from 95 to 340.",
    metrics: [
      { metric: "Maps Visibility", before: "#14 Rank", withLocalBuild: "#1 Rank" },
      { metric: "Direct Phone Calls", before: "65 / Mo", withLocalBuild: "210 / Mo" },
      { metric: "Direction Requests", before: "95 / Mo", withLocalBuild: "340 / Mo" }
    ],
    isSampleResult: true
  },
  {
    id: "case-05-local-service-ads",
    serviceNumber: "05",
    serviceCategory: "Local Service Ads",
    title: "05 Local Service Ads",
    tagline: "Get Google-verified leads directly from Local Service Ads.",
    clientDomain: "Residential HVAC & Electrical Services",
    imageUrl: "https://i.ibb.co/SL0RrYk/image.png",
    imageWidth: 380,
    imageHeight: 338,
    altText: "Local Service Ads case study — pay-per-lead local campaign for a service business",
    keyOutcome: "74% Inbound Booking Rate with Verified Direct Phone Calls [Illustrative]",
    shortSummary: "Switched to verified pay-per-lead acquisition directly from Local Service Ads in priority service zip codes.",
    challenge: "Expensive clicks from outside the contractor's dispatch zone with inconsistent qualified phone lead volume.",
    strategy: "Launched campaigns directly from Local Service Ads with tight postal-code targeting, dispute screening, and instant dispatch routing.",
    strategyPoints: [
      "Service-area optimization focused strictly on profitable dispatch zones",
      "Verified service categories with immediate phone lead qualification",
      "Profile optimization and budget calibration for peak hours"
    ],
    result: "Weekly verified leads grew from 12 to 38, with average cost per lead declining from ₹980 to ₹410.",
    metrics: [
      { metric: "Verified Leads", before: "12 / Wk", withLocalBuild: "38 / Wk" },
      { metric: "Cost Per Lead", before: "₹980", withLocalBuild: "₹410" },
      { metric: "Job Booking Rate", before: "34%", withLocalBuild: "74%" }
    ],
    isSampleResult: true
  },
  {
    id: "case-06-youtube-growth",
    serviceNumber: "06",
    serviceCategory: "YouTube Growth",
    title: "06 YouTube Growth",
    tagline: "Build a powerful YouTube presence with strategy, SEO & content planning.",
    clientDomain: "Finance & Investment Advisory Channel",
    imageUrl: "https://i.ibb.co/6JywbNvk/image.png",
    imageWidth: 380,
    imageHeight: 337,
    altText: "YouTube growth case study — video channel analytics dashboard",
    keyOutcome: "3.2x Average Watch Time & 8.4% Thumbnail Click-Through Rate [Illustrative]",
    shortSummary: "Search-demand topic research and structured retention pacing lifted monthly views from 18.5K to 124K.",
    challenge: "Advisory channel suffered from low discovery, weak thumbnail click-through, and steep 30-second viewer drop-offs.",
    strategy: "Implemented search-driven topic clustering, high-contrast thumbnail hierarchy, and intro pacing optimization.",
    strategyPoints: [
      "YouTube SEO and viewer search-intent research",
      "Thumbnail strategy and title testing for higher click-through",
      "Editorial planning and viewer retention structure"
    ],
    result: "Average view duration jumped from 2m 10s to 6m 55s, and monthly organic reach grew from 14K to 92K.",
    metrics: [
      { metric: "Thumbnail CTR", before: "2.1%", withLocalBuild: "8.4%" },
      { metric: "Avg View Duration", before: "2m 10s", withLocalBuild: "6m 55s" },
      { metric: "Monthly Views", before: "18,500", withLocalBuild: "124,000" }
    ],
    isSampleResult: true
  },
  {
    id: "case-07-ai-automation",
    serviceNumber: "07",
    serviceCategory: "AI Automation Solutions",
    title: "07 AI Automation Solutions",
    tagline: "Automate repetitive tasks and scale smarter with AI-powered tools.",
    clientDomain: "Solar Equipment & Installation Advisory",
    imageUrl: "https://i.ibb.co/QzrYnVs/image.png",
    imageWidth: 380,
    imageHeight: 338,
    altText: "AI automation case study — automated workflow assistant beside a laptop",
    keyOutcome: "Sub-45-Second Response Time & 18 Manual Hours Saved Weekly [Illustrative]",
    shortSummary: "24/7 conversational AI assistant qualifies incoming leads instantly and schedules site surveys.",
    challenge: "4 to 8 hour delay replying to incoming website and WhatsApp inquiries, leading to lost prospects.",
    strategy: "Deployed conversational AI assistant for instant lead capture, rooftop requirement scoring, and calendar booking.",
    strategyPoints: [
      "24/7 conversational AI assistant for instant lead response",
      "Automated lead qualification and suitability data collection",
      "Direct calendar sync and instant sales notifications"
    ],
    result: "Response time plunged from 4.8 hours to 42 seconds, lifting lead response rates from 44% to 96%.",
    metrics: [
      { metric: "Lead Response Time", before: "4.8 Hours", withLocalBuild: "42 Seconds" },
      { metric: "Manual Hours Saved", before: "0 Hrs", withLocalBuild: "18 Hrs / Wk" },
      { metric: "Lead Response Rate", before: "44%", withLocalBuild: "96%" }
    ],
    isSampleResult: true
  },
  {
    id: "case-08-application-design",
    serviceNumber: "08",
    serviceCategory: "Application Design",
    title: "08 Application Design",
    tagline: "Custom mobile & web app UI/UX design for seamless user experience.",
    clientDomain: "Field Service Fleet & Logistics Platform",
    imageUrl: "https://i.ibb.co/0j9x5QTJ/image.png",
    imageWidth: 380,
    imageHeight: 338,
    altText: "Application design case study — mobile app screens and user flow",
    keyOutcome: "92% Task Completion Rate with Driver Workflow Friction Removed [Illustrative]",
    shortSummary: "Confusing 4-step dispatch interface redesigned into a streamlined 2-tap field operator mobile workflow.",
    challenge: "Field operators encountered high error rates and slow booking completion due to cluttered mobile interfaces.",
    strategy: "Streamlined UX wireframes, created an accessible UI component system with 48px+ touch targets, and optimized mobile flow.",
    strategyPoints: [
      "Field UX research and simplified task architecture",
      "High-contrast mobile UI design system with responsive layouts",
      "Usability testing that cut dispatch friction by over 70%"
    ],
    result: "Dispatch completion time fell from 4 minutes to 1 minute, with usability score rising from 46 to 94.",
    metrics: [
      { metric: "Task Completion", before: "58%", withLocalBuild: "92%" },
      { metric: "User Flow Steps", before: "4 Steps", withLocalBuild: "2 Steps" },
      { metric: "Usability Score", before: "46 / 100", withLocalBuild: "94 / 100" }
    ],
    isSampleResult: true
  },
  {
    id: "case-09-ecommerce-management",
    serviceNumber: "09",
    serviceCategory: "Ecommerce Management",
    title: "09 Ecommerce Management",
    tagline: "End-to-end ecommerce setup, management and conversion optimization.",
    clientDomain: "DTC Wellness & Skincare Brand",
    imageUrl: "https://i.ibb.co/TxqD4t1N/image.png",
    imageWidth: 380,
    imageHeight: 337,
    altText: "Ecommerce case study — online store product grid and checkout setup",
    keyOutcome: "Store Conversion Rate Lifted from 1.3% to 3.4% [Illustrative]",
    shortSummary: "Mobile product presentation revamp and streamlined checkout reduced cart abandonment by 41%.",
    challenge: "78% abandoned cart rate caused by cluttered product pages and multi-step mobile checkout friction.",
    strategy: "Redesigned product pages with benefit hierarchy, simplified 1-page checkout, and automated recovery workflows.",
    strategyPoints: [
      "Storefront optimization with clear social proof highlights",
      "Checkout streamlining with fast mobile payment options",
      "Automated cart recovery and merchandising analytics"
    ],
    result: "Store conversion rate jumped from 1.3% to 3.4%, and average order value rose from ₹820 to ₹1,020.",
    metrics: [
      { metric: "Conversion Rate", before: "1.3%", withLocalBuild: "3.4%" },
      { metric: "Cart Abandonment", before: "78%", withLocalBuild: "46%" },
      { metric: "Average Order Value", before: "₹820", withLocalBuild: "₹1,020" }
    ],
    isSampleResult: true
  },
  {
    id: "case-10-dropshipping-systems",
    serviceNumber: "10",
    serviceCategory: "Dropshipping Systems",
    title: "10 Dropshipping Systems",
    tagline: "Complete dropshipping store setup with supplier integration & automation.",
    clientDomain: "Curated Home Decor & Lifestyle Retailer",
    imageUrl: "https://i.ibb.co/tMVbBRNC/image.png",
    imageWidth: 380,
    imageHeight: 337,
    altText: "Dropshipping systems case study — automated order flow between store, supplier and customer",
    keyOutcome: "Order Processing Time Reduced from 4 Hours to 3 Minutes [Illustrative]",
    shortSummary: "Manual spreadsheet coordination replaced with automated supplier routing and inventory sync.",
    challenge: "Manual order copying caused frequent supplier delays, stock mismatches, and customer service backlog.",
    strategy: "Integrated verified supplier catalog APIs, automated order routing upon customer checkout, and synced real-time inventory.",
    strategyPoints: [
      "Direct API integration with verified supplier catalogs",
      "Automated order routing upon payment verification",
      "Real-time inventory synchronization preventing backorders"
    ],
    result: "Fulfillment routing time dropped from 48 hours to 8 hours, with automated tracking notifications sent to buyers.",
    metrics: [
      { metric: "Processing Time", before: "4.2 Hours", withLocalBuild: "3 Minutes" },
      { metric: "Automation Rate", before: "15%", withLocalBuild: "98%" },
      { metric: "Fulfillment Time", before: "48 Hours", withLocalBuild: "8 Hours" }
    ],
    isSampleResult: true
  },
  {
    id: "case-11-affiliate-marketing",
    serviceNumber: "11",
    serviceCategory: "Affiliate Marketing",
    title: "11 Affiliate Marketing",
    tagline: "Build and scale a profitable affiliate income system from scratch.",
    clientDomain: "Software & Business Tools Comparison Portal",
    imageUrl: "https://i.ibb.co/tPTJzBhx/image.png",
    imageWidth: 380,
    imageHeight: 337,
    altText: "Affiliate marketing case study — affiliate performance and content funnel overview",
    keyOutcome: "210% Organic Traffic Growth with Structured Affiliate Tracking [Illustrative]",
    shortSummary: "Commercial-intent review architecture and comparison tables increased outbound affiliate clicks from 180 to 740/mo.",
    challenge: "Low search traffic, lack of commercial comparison intent, and untracked recommendation links.",
    strategy: "Conducted high-intent query research, built structured comparison matrices with clear CTA links, and enabled tracking.",
    strategyPoints: [
      "Commercial-intent query research for high-demand tool categories",
      "Structured comparison tables optimized for click-through",
      "Transparent affiliate attribution tracking"
    ],
    result: "Target comparison guides reached top-3 Google rankings, lifting affiliate conversion from 1.6% to 4.2%.",
    metrics: [
      { metric: "Organic Traffic", before: "3,200 / Mo", withLocalBuild: "9,900 / Mo" },
      { metric: "Affiliate Clicks", before: "180 / Mo", withLocalBuild: "740 / Mo" },
      { metric: "Conversion Rate", before: "1.6%", withLocalBuild: "4.2%" }
    ],
    isSampleResult: true
  },
  {
    id: "case-12-business-automation",
    serviceNumber: "12",
    serviceCategory: "Business Automation Systems",
    title: "12 Business Automation Systems",
    tagline: "Streamline your entire operations with smart automation workflows.",
    clientDomain: "Corporate Financial & Legal Advisory Practice",
    imageUrl: "https://i.ibb.co/p6Xjnw5V/image.png",
    imageWidth: 380,
    imageHeight: 337,
    altText: "Business automation case study — operations workflow linking leads, CRM and reporting",
    keyOutcome: "24 Hours Saved Weekly in Administrative Work & Fast Proposal Turnaround [Illustrative]",
    shortSummary: "Internal CRM pipeline connected with automated proposal generation, instant client notifications, and weekly reporting.",
    challenge: "Fragmented tools, manual spreadsheet proposals taking 48 hours, and delayed client follow-ups.",
    strategy: "Mapped operational workflows, automated quotation generation from CRM stages, and unified milestone notifications.",
    strategyPoints: [
      "End-to-end workflow mapping and automation architecture",
      "CRM integration with automated quote and proposal generation",
      "Automated milestone status notifications and weekly reporting"
    ],
    result: "Proposal turnaround plunged from 48 hours to 20 minutes, saving 24 hours of repetitive manual data entry per week.",
    metrics: [
      { metric: "Admin Hours Saved", before: "0 Hrs", withLocalBuild: "24 Hrs / Wk" },
      { metric: "Automation Rate", before: "12%", withLocalBuild: "85%" },
      { metric: "Proposal Turnaround", before: "48 Hours", withLocalBuild: "20 Minutes" }
    ],
    isSampleResult: true
  }
];
