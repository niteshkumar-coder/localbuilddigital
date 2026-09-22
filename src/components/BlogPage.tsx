import React, { useState } from "react";
import { ArrowLeft, ArrowRight, MessageSquare, Clock, Calendar, CheckCircle } from "lucide-react";
import { getWhatsAppUrl } from "../utils/whatsapp";

export interface BlogPost {
  slug: string;
  category: "Local SEO" | "Paid Ads" | "Conversion" | "Automation" | "Transparency" | "Process";
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  image: string;
  takeaways: string[];
  content: {
    heading: string;
    body: string[];
  }[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "what-a-20-cpc-buys-in-a-tier-2-city",
    category: "Paid Ads",
    date: "12 September 2026",
    readTime: "6 min",
    title: "What a ₹20 CPC actually buys in a Tier-2 city",
    excerpt: "Cost per click is not a price, it is a market reading. Here is how to tell whether your CPC is expensive because your market is competitive, or cheap because your ads are reaching the wrong people — and what to change in each case.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1200",
    takeaways: [
      "A cheap CPC (₹5–₹10) often indicates broad match bleed capturing student searches, job seekers, and irrelevant queries.",
      "A ₹20–₹40 CPC in competitive local verticals (dental, commercial real estate, specialist legal) is healthy if negative match lists are aggressive.",
      "Calculate your actual Cost Per Qualified Call (CPQC) rather than obsessing over front-end CPC."
    ],
    content: [
      {
        heading: "Cost per click is a diagnostic metric, not a pricing benchmark",
        body: [
          "When business owners look at their Google Ads dashboard in cities like Patna, Ranchi, or Lucknow, the first reaction to a ₹25 click is almost always sticker shock. Agencies often respond by lowering the bid or broadening the match type to drive the average CPC down to ₹8.",
          "This is almost always a commercial mistake. When you artificially force a lower CPC in a local auction, Google's algorithm does not magically find high-intent buyers for less money. Instead, it serves your impressions on peripheral, low-competition search queries: people looking for free advice, exam syllabus downloads, job vacancies, or DIY tutorials."
        ]
      },
      {
        heading: "The difference between market competition and query waste",
        body: [
          "In Tier-2 service markets, high commercial intent is concentrated in a tight cluster of search phrases. A patient searching 'root canal dentist in Boring Road Patna' is ready to book today. There are only a few hundred of those searches each month. Naturally, three or four clinics will bid on them, driving the CPC up to ₹25 or ₹35.",
          "If your campaign captures that click, converts 20% of landing page visitors into calls, and 50% of those calls book an appointment, your acquisition cost per patient is under ₹350. On a procedure worth ₹4,000 to ₹12,000, that is an outstanding commercial return.",
          "Conversely, paying ₹7 for 'dental course admission 2026' or 'teeth anatomy chart pdf' is 100% wasted capital, no matter how cheap the click appears on the spreadsheet."
        ]
      },
      {
        heading: "How to audit your current search term report",
        body: [
          "Open your Google Ads account, navigate to Insights & Reports, and select Search Terms. Sort the list by spend descending.",
          "Look at the exact phrases that triggered your spend over the last 30 days. If more than 15% of your search terms contain words like 'free', 'jobs', 'salary', 'near me meaning', or competitor names outside your service area, you have an urgent negative keyword deficit. Adding exact and phrase negative matches will immediately lift your lead quality."
        ]
      }
    ]
  },
  {
    slug: "nine-google-business-profile-fields-left-empty",
    category: "Local SEO",
    date: "28 August 2026",
    readTime: "7 min",
    title: "The nine Google Business Profile fields most local businesses leave empty",
    excerpt: "Your profile is usually the first thing a customer sees and the last thing anyone maintains. These are the fields that quietly decide whether you show up for 'near me' searches — and how to fill each one properly.",
    image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&q=80&w=1200",
    takeaways: [
      "Secondary categories carry almost 40% of local discovery search visibility.",
      "Custom service item descriptions give Google semantic context that keyword-stuffed business titles cannot safely match.",
      "Setting accurate service area polygons prevents algorithmic dilution across non-service zones."
    ],
    content: [
      {
        heading: "The invisible levers in the Google Maps algorithm",
        body: [
          "Most business owners claim their Google Business Profile, enter their primary category, upload two photos from a smartphone, and never log back in. Meanwhile, competitors who rank consistently in the 3-Pack have completed every single field down to sub-service pricing and accessibility tags.",
          "Google's local ranking engine evaluates relevance, distance, and prominence. Completing secondary fields gives Google structured attributes to match against conversational voice queries and specific long-tail queries."
        ]
      },
      {
        heading: "The nine high-leverage fields to audit right now",
        body: [
          "1. Secondary Business Categories: You can choose up to 9 secondary categories. If you are a dermatological clinic, adding 'Laser Hair Removal Service' and 'Skin Care Clinic' expands your search footprint instantly.",
          "2. Service Descriptions: Under each service, Google allows up to 300 characters of description. Write clear, factual descriptions detailing what the service involves.",
          "3. Service Area Polygons: Explicitly specify the zip codes or localities you physically serve.",
          "4. Business Attributes: Identify accessibility, payment methods accepted (UPI, credit cards), and appointment booking requirements.",
          "5. From the Business Story: Use all 750 characters to describe your founding history, certifications, and service principles.",
          "6. Products Catalog: Even service businesses can use the Products tab to showcase packages with starting prices.",
          "7. Direct Appointment URL: Link directly to your booking page or WhatsApp consultation URL rather than your generic homepage.",
          "8. Pre-populated Q&A: Proactively answer the top 5 questions customers ask before visiting.",
          "9. Verified Opening Hours & Holiday Hours: Inaccurate holiday hours damage trust and lower ranking reliability during festival periods."
        ]
      }
    ]
  },
  {
    slug: "why-page-speed-is-a-lead-quality-problem",
    category: "Conversion",
    date: "14 August 2026",
    readTime: "5 min",
    title: "Why page speed is a lead-quality problem, not a technical one",
    excerpt: "A slow landing page does not just lose visitors, it loses the motivated ones first. What a sub-two-second mobile page changes about who reaches your enquiry form — and how to get there.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    takeaways: [
      "High-intent local buyers on 4G connections abandon pages taking longer than 2.8 seconds.",
      "Fast page load directly improves Google Ads Quality Score, lowering your effective cost per lead.",
      "Cutting heavy third-party tracking scripts and uncompressed hero images solves 80% of speed bottlenecks."
    ],
    content: [
      {
        heading: "High-intent customers have the shortest patience",
        body: [
          "When an air conditioner breaks down in 42°C heat, or a patient needs an emergency dental consult, they are searching on a smartphone with urgent intent. They tap the top result. If that page sits on a blank white screen with a spinning loader for four seconds, they hit the back button and tap result number two.",
          "The casual browser who is merely browsing will happily wait. The ready-to-buy customer who has their wallet out leaves immediately. Speed is not an engineering metric — it is a customer qualification filter."
        ]
      },
      {
        heading: "The core components of sub-2-second local load times",
        body: [
          "Most local business websites suffer from heavy WordPress page-builder bloat, massive 4MB uncompressed PNG banners, and dozens of unnecessary plugins.",
          "Moving to lean, static-compiled HTML, serving responsive WebP imagery with explicit width/height dimensions, and deferring non-critical analytics ensures your hero text and phone numbers render in under 1.2 seconds even on unstable mobile data."
        ]
      }
    ]
  },
  {
    slug: "direct-billing-vs-agency-markup-audit",
    category: "Transparency",
    date: "31 July 2026",
    readTime: "6 min",
    title: "Direct billing vs agency markup: how to audit your own media spend",
    excerpt: "If you cannot see the invoice your agency receives from Google or Meta, you cannot see your real cost per lead. A simple way to check whether your media budget is being marked up, and what to ask for.",
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=1200",
    takeaways: [
      "Never allow an agency to run your campaigns out of their centralized master account without direct billing access.",
      "Compare your total invoice against the internal Google/Meta billing statement rupee for rupee.",
      "Maintain primary ownership of Google Ads, Meta Business Manager, and Google Analytics at all times."
    ],
    content: [
      {
        heading: "The hidden markup practice in local agency marketing",
        body: [
          "A common practice among traditional digital agencies is bundling media spend and management fees into a single composite invoice: for example, ₹50,000 per month for 'Digital Growth Package'.",
          "When pressed, the client is told ₹35,000 went to Google Ads and ₹15,000 was the agency management fee. But without direct access to the Google billing receipt, the business owner has no way of verifying whether ₹35,000 was spent, or whether the agency spent ₹18,000 and pocketed the ₹17,000 difference as profit."
        ]
      },
      {
        heading: "The three golden rules of agency transparency",
        body: [
          "Rule 1: Your credit card on the ad account. Google and Meta should debit your corporate card directly. The agency sends you an invoice solely for their strategic service fee.",
          "Rule 2: Admin ownership remains with you. You invite the agency as a Manager or Partner. You never let them create your account under their proprietary agency email.",
          "Rule 3: Lead data exportability. All call logs, form entries, and CRM records belong to your business permanently."
        ]
      }
    ]
  },
  {
    slug: "wiring-1-tap-call-and-whatsapp-routing",
    category: "Automation",
    date: "17 July 2026",
    readTime: "6 min",
    title: "From enquiry to booked job: wiring 1-tap call and WhatsApp routing",
    excerpt: "Most lost enquiries are lost in the first ten minutes. How to connect your landing page, phone and WhatsApp into one path so a motivated customer reaches a human before they cool off.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1200",
    takeaways: [
      "Lead conversion drops by up to 391% if follow-up takes longer than 60 minutes.",
      "Sticky mobile headers with one-tap phone and WhatsApp buttons capture 65%+ of local conversions.",
      "Automate immediate WhatsApp confirmation messages with consultation details and team contact numbers."
    ],
    content: [
      {
        heading: "The ten-minute conversion window",
        body: [
          "When a customer submits an inquiry form online, they are actively sitting with their phone in hand, thinking about their problem. Ten minutes later, they are driving, in a meeting, or browsing another provider's website.",
          "If your business takes 4 hours or the next morning to call them back, they have forgotten what they asked, or they have already booked with the competitor who answered their WhatsApp message in 90 seconds."
        ]
      },
      {
        heading: "Building the unified mobile lead path",
        body: [
          "Every high-converting local landing page should feature two persistent conversion mechanisms: a primary direct call button connected to an active business phone line, and a secondary WhatsApp link pre-filled with the customer's specific service query.",
          "When forms are submitted, an instant webhook trigger should dispatch a WhatsApp notification to your on-duty front desk or sales coordinator, allowing them to initiate human contact within 5 minutes."
        ]
      }
    ]
  },
  {
    slug: "negative-keywords-cheapest-optimisation-in-google-ads",
    category: "Paid Ads",
    date: "30 June 2026",
    readTime: "8 min",
    title: "Negative keywords are the cheapest optimisation in Google Ads",
    excerpt: "The fastest way to improve a local campaign is usually not better ad copy — it is removing the searches you should never have paid for. How to build a negative keyword list from your own search terms.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    takeaways: [
      "Negative match lists stop budget bleeding on irrelevant search intent before a single ad dollar is spent.",
      "Cross-check your search term report weekly to identify non-commercial queries and competitor branch locations.",
      "Create shared negative keyword lists across all search campaigns in your account."
    ],
    content: [
      {
        heading: "Why Google defaults to wasting your budget",
        body: [
          "Google's automated smart bidding and broad match models are designed to maximize impressions and clicks across broad semantic topics. If you bid on 'commercial architect', Google will happily serve your ads for 'architect salary in Bihar', 'free architectural drawings download', and 'top architecture colleges'.",
          "Every one of those clicks costs you real money. Without a disciplined negative keyword strategy, 30% to 50% of your advertising budget is systematically incinerated on people who will never buy from you."
        ]
      },
      {
        heading: "How to structure an impenetrable negative keyword library",
        body: [
          "Start by building standard negative lists across four categories: Career queries ('jobs', 'vacancy', 'internship', 'recruitment'), Educational queries ('syllabus', 'course', 'pdf', 'notes', 'tutorial'), Price queries ('free', 'cheap', 'lowest price', 'subsidy'), and Competitor queries for areas outside your physical delivery range.",
          "Review your search query report every Monday morning. Any phrase with more than 3 impressions that lacks commercial intent must be added as a phrase or exact negative match immediately."
        ]
      }
    ]
  },
  {
    slug: "the-30-minute-discovery-call-what-to-ask",
    category: "Process",
    date: "16 June 2026",
    readTime: "4 min",
    title: "The 30-minute discovery call: what we ask, and what you should ask us",
    excerpt: "A discovery call should leave you with a clearer picture even if you never work with the agency. The questions we ask every time — and the five you should be asking in return.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1200",
    takeaways: [
      "A genuine discovery call audits commercial unit economics, not vanity metrics.",
      "Ask your agency who specifically does the work and whether they charge markups on media spend.",
      "You should walk away with a written roadmap of immediate fixes regardless of whether you engage."
    ],
    content: [
      {
        heading: "What a professional discovery call should feel like",
        body: [
          "Too many agency discovery calls are disguised sales pitches: 5 minutes of generic chit-chat, followed by a 25-minute PowerPoint deck showing award logos and case studies of multinational brands.",
          "At LocalBuild, discovery is a technical and commercial diagnosis. Before the call, we inspect your Google Business Profile, your search competitors in your city, your mobile speed, and your current enquiry flow. The call is spent discussing your real numbers: customer lifetime value, conversion rates, and the economics of customer acquisition."
        ]
      },
      {
        heading: "The five questions you should ask any agency before signing",
        body: [
          "1. 'Will I own my Google Ads account and Google Analytics property directly, or will it live in your agency master account?'",
          "2. 'Does your agency add any percentage markup or transaction fee onto my advertising spend?'",
          "3. 'What specific person on your team will be managing my search terms and negative keyword lists each week?'",
          "4. 'How do you measure a lead — is it an impression, a click, or a verified phone call lasting over 30 seconds?'",
          "5. 'What happens to my landing pages and creative assets if I decide not to renew after our engagement?'"
        ]
      }
    ]
  },
  {
    slug: "local-schema-explained-without-the-jargon",
    category: "Local SEO",
    date: "02 June 2026",
    readTime: "7 min",
    title: "Local schema explained without the jargon",
    excerpt: "Structured data is how you tell search engines exactly what your business is, where it is and what it does. A plain explanation of local schema, and the three things worth getting right first.",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=1200",
    takeaways: [
      "JSON-LD Schema provides unambiguous entity data directly to Google's Knowledge Graph.",
      "Ensure NAP (Name, Address, Phone) in schema matches Google Business Profile down to punctuation.",
      "Include GeoCoordinates, OpeningHoursSpecification, and hasOfferCatalog for local service indexing."
    ],
    content: [
      {
        heading: "Why Google needs machine-readable data",
        body: [
          "Search engines are remarkably capable at reading text, but English is inherently ambiguous. When a webpage says 'LocalBuild on Boring Road', Google has to guess whether that refers to a construction company, a directory, or an agency.",
          "Schema markup (specifically JSON-LD format) is structured code embedded in your site's header that translates your business information into machine-readable facts: 'We are a LocalBusiness in Patna, Bihar, located at latitude 25.613 and longitude 85.111, operating Monday through Saturday from 09:30 to 19:30 IST.'"
        ]
      },
      {
        heading: "The three schema items that deliver immediate local benefit",
        body: [
          "1. LocalBusiness / ProfessionalService Entity: Specifies exact business legal name, primary telephone number, physical office address, and official logos.",
          "2. GeoCoordinates & AreaServed: Pins your exact geographic latitude and longitude, anchoring your website to Google Maps data.",
          "3. AggregateRating & Reviews: Linking verified customer review counts to your schema allows Google to display golden star rating snippets directly beneath your organic search results."
        ]
      }
    ]
  }
];

interface BlogPageProps {
  currentSlug?: string | null;
  onNavigate: (pathOrId: string) => void;
  onQuoteClick: (prefilledService?: string, prefilledNotes?: string) => void;
}

export default function BlogPage({ currentSlug, onNavigate, onQuoteClick }: BlogPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Local SEO", "Paid Ads", "Conversion", "Automation", "Transparency", "Process"];

  // If a slug is specified, render the individual Post Page Template (Section 5.6)
  if (currentSlug) {
    const post = BLOG_POSTS.find((p) => p.slug === currentSlug) || BLOG_POSTS[0];
    const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

    return (
      <div className="min-h-screen bg-white text-[#263044]">
        {/* Breadcrumb / Back button */}
        <div className="bg-[#F7F5EF] border-b border-[#DDE3EC] py-4">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <button
              type="button"
              onClick={() => onNavigate("/blog")}
              className="inline-flex items-center gap-2 text-xs font-bold text-[#3157D5] hover:text-[#2546B8] cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to all insights</span>
            </button>
          </div>
        </div>

        {/* Post Header */}
        <header className="py-12 sm:py-16 bg-[#071126] text-white border-b border-[#1C2A4A]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-block px-2.5 py-1 rounded bg-[#3157D5] text-white text-[11px] font-bold uppercase tracking-wider mb-4">
              {post.category}
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-xs text-[#C6CEDE]">
              <span className="font-semibold text-white">LocalBuild Team</span>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <span>{post.date}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span>{post.readTime} read</span>
              </div>
            </div>
          </div>
        </header>

        {/* Post Body */}
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {/* Standfirst */}
          <div className="text-lg sm:text-xl font-medium text-[#263044] leading-relaxed pb-8 mb-8 border-b border-[#DDE3EC]">
            {post.excerpt}
          </div>

          {/* Featured Image */}
          <div className="mb-10 rounded-xl overflow-hidden border border-[#DDE3EC]">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-auto aspect-[16/9] object-cover"
            />
          </div>

          {/* Body content with H2 subheads every 200-300 words */}
          <div className="space-y-10 text-base sm:text-lg text-[#263044] leading-relaxed">
            {post.content.map((section, idx) => (
              <div key={idx} className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#0B1633] tracking-tight">
                  {section.heading}
                </h2>
                {section.body.map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))}
              </div>
            ))}
          </div>

          {/* Practical Takeaways */}
          <div className="mt-12 p-6 sm:p-8 bg-[#F7F5EF] border border-[#DDE3EC] rounded-xl">
            <h3 className="text-base sm:text-lg font-extrabold text-[#0B1633] mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#168A62]" />
              <span>Key Takeaways for Local Business Owners</span>
            </h3>
            <ul className="space-y-2.5 text-sm sm:text-base text-[#263044]">
              {post.takeaways.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-[#3157D5] font-bold mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contextual CTA Block */}
          <div className="mt-12 p-8 bg-[#0B1633] text-white rounded-xl">
            <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2">
              Want this reviewed in your market?
            </h3>
            <p className="text-sm sm:text-base text-[#C6CEDE] mb-6 leading-relaxed">
              We&apos;ll look at your profile, your ads and your landing page and tell you what we would change first.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                type="button"
                onClick={() => onQuoteClick("Discovery Call", `Inquiry from blog post: ${post.title}`)}
                className="btn btn--primary"
              >
                Start a Conversation
              </button>
              <a
                href={getWhatsAppUrl(`Hi LocalBuild, I read your article "${post.title}" and would like to review this in my market.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--ghost inline-flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* Related Reading (3 real posts from grid) */}
          <div className="mt-16 pt-12 border-t border-[#DDE3EC]">
            <h3 className="text-xl font-extrabold text-[#263044] mb-6">
              Related Reading
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((rPost) => (
                <div
                  key={rPost.slug}
                  onClick={() => onNavigate(`/blog/${rPost.slug}`)}
                  className="p-5 rounded-lg border border-[#DDE3EC] bg-white hover:border-[#3157D5] transition-all cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-bold text-[#3157D5] uppercase tracking-wider block mb-1">
                      {rPost.category}
                    </span>
                    <h4 className="text-sm font-bold text-[#263044] line-clamp-2 mb-2">
                      {rPost.title}
                    </h4>
                    <p className="text-xs text-[#667085] line-clamp-3 mb-4">
                      {rPost.excerpt}
                    </p>
                  </div>
                  <span className="text-xs font-bold text-[#3157D5] inline-flex items-center gap-1">
                    Read article <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    );
  }

  // Otherwise, render Blog Index Page (Sections 5.2 - 5.5)
  const featuredPost = BLOG_POSTS[0];
  const remainingPosts = BLOG_POSTS.slice(1);

  const filteredPosts = remainingPosts.filter(
    (post) => selectedCategory === "All" || post.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-white text-[#263044]">
      {/* 5.2 Hero Section (Ivory, typography only, no photograph) */}
      <section className="bg-[#F7F5EF] border-b border-[#DDE3EC] py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#3157D5] mb-2">
              INSIGHTS
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#263044] tracking-tight leading-[1.14] mb-4">
              Plain-English notes on local growth.
            </h1>
            <p className="text-base sm:text-lg text-[#667085] leading-relaxed mb-6">
              Short, practical writing on local search, advertising, landing pages and lead automation. No jargon, no hype, no recycled listicles.
            </p>
            <div>
              <button
                type="button"
                onClick={() => onNavigate("/contact")}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#3157D5] hover:text-[#2546B8] cursor-pointer"
              >
                <span>Talk to a strategist</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5.3 Category Filter (6 filter chips + All, single-select, aria-pressed) */}
      <section className="py-6 bg-white border-b border-[#DDE3EC] sticky top-16 z-20 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none" role="group" aria-label="Filter blog posts by category">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  aria-pressed={isSelected}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-colors whitespace-nowrap cursor-pointer ${
                    isSelected
                      ? "bg-[#0B1633] text-white"
                      : "bg-[#F2F5FA] text-[#667085] hover:bg-[#E5ECF6] hover:text-[#263044]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5.4 Featured Post (One large editorial block, no card) */}
      {selectedCategory === "All" && (
        <section className="py-12 sm:py-16 bg-white border-b border-[#DDE3EC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="aspect-[16/9] rounded-xl overflow-hidden border border-[#DDE3EC]">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="lg:col-span-5 space-y-4">
                <div className="flex items-center gap-3 text-xs text-[#667085]">
                  <span className="font-bold text-[#3157D5] uppercase tracking-wider">{featuredPost.category}</span>
                  <span>•</span>
                  <span>{featuredPost.date}</span>
                  <span>•</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1633] tracking-tight leading-snug">
                  {featuredPost.title}
                </h2>
                <p className="text-sm sm:text-base text-[#667085] leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="pt-2 flex items-center justify-between">
                  <span className="text-xs text-[#667085]">By LocalBuild Team</span>
                  <button
                    type="button"
                    onClick={() => onNavigate(`/blog/${featuredPost.slug}`)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#3157D5] hover:text-[#2546B8] cursor-pointer"
                  >
                    <span>Read the article</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 5.5 Post Grid (Seven more posts) */}
      <section className="py-16 sm:py-24 bg-[#F2F5FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h3 className="text-xl font-extrabold text-[#263044]">
              {selectedCategory === "All" ? "Latest Articles" : `${selectedCategory} Articles`}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.slug}
                onClick={() => onNavigate(`/blog/${post.slug}`)}
                className="bg-white rounded-xl border border-[#DDE3EC] overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="aspect-[16/9] w-full overflow-hidden bg-zinc-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-[#667085] mb-2">
                      <span className="font-bold text-[#3157D5] uppercase tracking-wider">{post.category}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-[#0B1633] mb-2 line-clamp-2 leading-snug">
                      {post.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#667085] line-clamp-3 leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#DDE3EC] flex items-center justify-between text-xs">
                    <span className="text-[#667085]">By LocalBuild Team</span>
                    <span className="font-bold text-[#3157D5] inline-flex items-center gap-1">
                      Read article <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
