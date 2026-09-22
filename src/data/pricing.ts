export interface PricingPlan {
  name: string;
  price: string;
  numericPrice: number;
  period: string;
  badge?: string;
  desc: string;
  features: string[];
  cta: string;
  popular: boolean;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Local Authority",
    price: "₹19,999",
    numericPrice: 19999,
    period: "3 years",
    desc: "Perfect for single-location owner-operators looking to claim top 3 ranks in their local zip code maps.",
    features: [
      "Google Business Profile (GBP) deep optimization",
      "Weekly local search keyword tracking (25 terms)",
      "Local schema data structure setup",
      "Directory listings & core citation synchronization",
      "1 dedicated speed-optimized landing page",
      "Monthly strategy audit & review call"
    ],
    cta: "Choose Local Authority",
    popular: false
  },
  {
    name: "Market Dominance",
    price: "₹34,999",
    numericPrice: 34999,
    period: "3 years",
    badge: "Most Popular Choice",
    desc: "Our signature package. Combines local maps dominance with aggressive Google & Meta paid lead generation.",
    features: [
      "Complete GBP optimization & ongoing local search plan",
      "Competitor keyword monitoring (100 terms)",
      "Google Ads & Meta Paid ad campaign build",
      "Custom A/B landing page funnel matching CRO norms",
      "Up to ₹2,50,000 monthly ad spend execution",
      "Dynamic phone call lead routing & dashboard sync",
      "Bi-weekly strategy sync & optimization adjustments"
    ],
    cta: "Choose Market Dominance",
    popular: true
  },
  {
    name: "City Saturation",
    price: "₹64,999",
    numericPrice: 64999,
    period: "3 years",
    desc: "Designed for scaling service teams with multiple territories, offices, or franchise locations.",
    features: [
      "Multi-city/office maps pack ranking strategy",
      "Unlimited keyword monitoring & competitor analysis",
      "Aggressive ad spend execution (unlimited budgets)",
      "Unlimited premium speed-optimized funnel creations",
      "Continuous CRO form tracking & chat-bot triggers",
      "Advanced programmatic competitor geo-conquesting",
      "Direct API integration with customer CRMs",
      "Weekly status calls & bespoke visual dashboard"
    ],
    cta: "Choose Saturation",
    popular: false
  }
];
