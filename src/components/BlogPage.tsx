import React, { useState, useEffect } from "react";
import { ArrowLeft, BookOpen, Calendar, Clock, ArrowRight, User, Share2, Star, ChevronRight, CheckCircle, Smartphone, ExternalLink, Sparkles, Mail, MessageSquare, Zap, MapPin } from "lucide-react";

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDesc: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  intro: string;
  coverImage: string;
  relatedServiceSlug: string;
  relatedServiceName: string;
  contentHtml: React.ReactNode;
}

export const blogPostsList: BlogPost[] = [
  {
    slug: "website-design-tips",
    title: "10 High-Converting Website Design Tips for Local Bangalore Businesses",
    metaTitle: "Website Design Tips for Bangalore Businesses | Local SEO Growth",
    metaDesc: "Discover 10 actionable website design tips to triple conversion rates, score 90+ on Google PageSpeed, and dominate commercial search feeds in Bangalore.",
    category: "Web Design & UI/UX",
    date: "June 12, 2026",
    readTime: "6 Min Read",
    author: "Nitesh Kumar",
    intro: "In 2026, a static online brochure is a liability. Your website must act as an aggressive conversion machine, securing visitor trust in under 3 seconds.",
    coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    relatedServiceSlug: "website-design",
    relatedServiceName: "Website Design",
    contentHtml: (
      <article className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">1. Score Above 90 On Live PageSpeed Audits</h2>
        <p className="text-sm sm:text-base leading-relaxed text-slate-600">
          Mobile consumers in Bangalore will abandon your page if it doesn't render completely in 2.5 seconds. Optimize your site's codebase by stripping unused frameworks, compressing high-resolution hero banners into modern WebP vector formats, and lazy-loading media blocks.
        </p>

        <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">2. Put CTA Modules Inside the Immediate View Header (Above the Fold)</h2>
        <p className="text-sm sm:text-base leading-relaxed text-slate-600">
          Never force consumers to play hide-and-seek looking for contact buttons. Introduce strong primary CTA pathways like <strong>&quot;Get Free Proposal&quot;</strong> and <strong>&quot;Talk to Nitesh Kumar&quot;</strong> directly below your primary display title.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-xl">
          <p className="text-xs sm:text-sm text-blue-800 font-bold">
            💡 Protip: Mobile readers respond exceptionally well to sticky call buttons pinned to their bottom viewports. Live tracking proves this simple addition can increase reservation click rates by up to 34%.
          </p>
        </div>

        <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">3. Build Fluid Mobile Touch-Targets Exceeding 44 Pixels</h2>
        <p className="text-sm sm:text-base leading-relaxed text-slate-600">
          Avoid miniature buttons clumped tightly together. Keep navigation links thick, responsive, and spacious enough to resolve accidental clicks.
        </p>

        <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">4. Leverage Direct Social Proof (NAP & Reviews Integration)</h2>
        <p className="text-sm sm:text-base leading-relaxed text-slate-600">
          Interlock real Google Maps reviews instantly below benefits tables. Ensure your corporate Business Name, Phone Number, and Physical Hub address (NAP consistency) match your Google Business list identically in your footers.
        </p>
      </article>
    )
  },
  {
    slug: "google-ads-tips",
    title: "Mastering Google Ads: How to Lower CPC while Multiplying Warm Local Calls",
    metaTitle: "Google Ads Tips and PPC Optimization | Bangalore Marketing",
    metaDesc: "Lower cost-per-click and double incoming customer call volume. Explore step-by-step Google Search Ads optimizations for local businesses.",
    category: "PPC & Lead Generation",
    date: "June 08, 2026",
    readTime: "7 Min Read",
    author: "Nitesh Kumar",
    intro: "Stop donating money directly to Google's bidding systems. Discover how structuring negative match patterns and improving landing quality secures the #1 position on a budget.",
    coverImage: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800",
    relatedServiceSlug: "google-ads-management",
    relatedServiceName: "Google Ads Management",
    contentHtml: (
      <article className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">The quality Score formula: Lower Cost, Greater Rank</h2>
        <p className="text-sm sm:text-base leading-relaxed text-slate-600">
          Google decides your actual cost-per-click based on your Quality Score. Improved quality scores allow you to pay less than competitors while holding higher visibility segments. Ensure your target keyword features in your copy and landing headers.
        </p>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm font-medium">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="pb-2 text-slate-400 uppercase font-bold text-[10px]">Optimization Vector</th>
                <th className="pb-2 text-slate-400 uppercase font-bold text-[10px]">Impact Ratio</th>
                <th className="pb-2 text-slate-400 uppercase font-bold text-[10px]">Action Standard</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="py-2.5 font-bold text-slate-800">Negative Mapping</td>
                <td className="py-2.5 text-blue-600 font-extrabold">High Reduction</td>
                <td className="py-2.5 text-slate-500">Add negative match terms daily to kill trash clicks.</td>
              </tr>
              <tr>
                <td className="py-2.5 font-bold text-slate-800">Match Type Balance</td>
                <td className="py-2.5 text-blue-600 font-extrabold">High Efficiency</td>
                <td className="py-2.5 text-slate-500">Migrate from loose Broad phrase structures into Exact triggers.</td>
              </tr>
              <tr>
                <td className="py-2.5 font-bold text-slate-800">LSA Guaranteed</td>
                <td className="py-2.5 text-blue-600 font-extrabold">Instant Trust</td>
                <td className="py-2.5 text-slate-500">Deploy Google Guaranteed tags above standard search bars.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">Actionable Check: Implement Phrase Exclusions</h2>
        <p className="text-sm sm:text-base leading-relaxed text-slate-600">
          If you operate a premium website designer service, you do NOT want to waste money paying for search queries containing &quot;free&quot;, &quot;course&quot;, &quot;salary&quot;, or &quot;tutorial&quot;. Create centralized phrase exclusion libraries to preserve ad integrity.
        </p>
      </article>
    )
  },
  {
    slug: "local-seo-guide",
    title: "The Ultimate Local SEO Playbook: Dominating the Maps pack in Bangalore",
    metaTitle: "Local SEO Guide for Bangalore | Local Map Pack Optimization",
    metaDesc: "Step-by-step local SEO guide targeting top map listings. Learn citation sync, metadata coordination, reviews generation, and local ranking hacks.",
    category: "Local SEO Packs",
    date: "June 05, 2026",
    readTime: "8 Min Read",
    author: "Nitesh Kumar",
    intro: "When residents search for urgent assistance nearby, they pick the first top-rated company in the Local 3-Pack. Here is how your company secures that spot.",
    coverImage: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800",
    relatedServiceSlug: "google-business-profile-optimization",
    relatedServiceName: "GBP Optimization",
    contentHtml: (
      <article className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">1. Stabilize NAP Uniformity</h2>
        <p className="text-sm sm:text-base leading-relaxed text-slate-600">
          NAP represents Name, Address, and Phone. Google comparison bots evaluate directories looking to verify your legitimacy. Every directory you list on (JustDial, IndiaMart, Facebook, Yelp) must feature identical name and map spelling.
        </p>

        <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">2. Leverage Local Keyword Neighborhood Targets</h2>
        <p className="text-sm sm:text-base leading-relaxed text-slate-600">
          Don't just say &quot;Bangalore&quot;. Specifically call out commercial centers like Electronic City, Whitefield, Indiranagar, Koramangala, Jayanagar, and HSR Layout in your primary landing metadata tags. Google tracks localized signals and boosts listings nearby.
        </p>

        <div className="bg-blue-900 text-white rounded-xl p-5 space-y-2">
          <h4 className="font-bold text-sm text-sky-400">Map Pack Search Ranking Ingredients</h4>
          <ul className="space-y-1.5 text-xs text-slate-300">
            <li>• Distance (Physical proximity to seeker) - Constant</li>
            <li>• Relevance (Proper keyword optimization & schemas) - Highly Optimizable</li>
            <li>• Prominence (Direct local 5-star review density) - Highly Optimizable</li>
          </ul>
        </div>

        <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">3. Structured Schema Injecting</h2>
        <p className="text-sm sm:text-base leading-relaxed text-slate-600">
          Add LocalBusiness metadata schemas explicitly nested inside index.html profiles. This helps search engine crawlers dynamically recognize your precise latitude, longitude, and operations.
        </p>
      </article>
    )
  },
  {
    slug: "google-business-profile-guide",
    title: "GBP Optimization: Step-by-Step Guide to Exploding Maps Call Traffic",
    metaTitle: "Google Business Profile Optimization Guide | Local SEO",
    metaDesc: "Step-by-step Google Business Profile (GMB) blueprint. Skyrocket organic call traffic, coordinate geotagged media, and manage listing reviews.",
    category: "Google Business Profile",
    date: "June 03, 2026",
    readTime: "5 Min Read",
    author: "Nitesh Kumar",
    intro: "Your Google Business Profile (formerly GMB) is the strongest call generator in your digital toolkit. We show you the precise updates to transform it into a lead machine.",
    coverImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
    relatedServiceSlug: "google-business-profile-optimization",
    relatedServiceName: "GBP Optimization",
    contentHtml: (
      <article className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">Geocoding & Exif Data: The Secret Image Optimization</h2>
        <p className="text-sm sm:text-base leading-relaxed text-slate-600">
          When uploading images to your corporate location profile, don't just dump raw mobile snapshots. Inject physical latitude and longitude details representing Bangalore Institute of Technology, KR Road coordinates (+12.9614, +77.5731) directly into EXIF properties. Google reads this to verify your actual physical presence.
        </p>

        <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">Weekly Custom Update Broadcasts</h2>
        <p className="text-sm sm:text-base leading-relaxed text-slate-600">
          Create short weekly custom updates on your maps dashboard highlight specific projects, promotional deals, and local tips. Treat GMB as a specialized micro-blogging tool to establish relevance.
        </p>

        <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">Combattingcompetitor SPAM Accounts</h2>
        <p className="text-sm sm:text-base leading-relaxed text-slate-600">
          Fake map pins violate guidelines and divert massive search volume. Routinely report fake, unmanned keywords on Google Maps to clear space for verified, legitimate businesses.
        </p>
      </article>
    )
  },
  {
    slug: "lead-generation-strategies",
    title: "Local Lead Gen Strategies: Turning Casual Website Visitors into Active Sales Leads",
    metaTitle: "High-Converting Lead Generation Strategies | LocalBuild Agency",
    metaDesc: "Actionable local lead generation metrics. Master custom calculators, interactive strategy planners, and sticky WhatsApp CTA conversion systems.",
    category: "Business Scaling",
    date: "May 29, 2026",
    readTime: "6 Min Read",
    author: "Nitesh Kumar",
    intro: "It is easy to generate empty clicks. True digital excellence is generating high-intent leads that welcome sales discussions. We break down the exact conversion funnels.",
    coverImage: "https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&q=80&w=800",
    relatedServiceSlug: "ai-automation-solutions",
    relatedServiceName: "AI Automation Solutions",
    contentHtml: (
      <article className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">1. Introduce Dynamic Calculators and Interactive Planners</h2>
        <p className="text-sm sm:text-base leading-relaxed text-slate-600">
          Traditional contact grids are boring. Guide prospects through simple visual quizzes like our <strong>S_Roadmap Planner</strong> or <strong>ROI Simulators</strong>. Interactive experiences keep prospects engaged, lowering exit ratios while gathering high-fidelity business datasets.
        </p>

        <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">2. Trigger SMS Auto-Replies Within Exactly 2 Minutes</h2>
        <p className="text-sm sm:text-base leading-relaxed text-slate-600">
          The likelihood of qualifying a lead falls by 400% if you wait more than 10 minutes to call them. Put auto-reply web triggers in place to engage incoming requests instantly, securing the deal while they are ready.
        </p>

        <div className="bg-emerald-50 border-1 border-emerald-200 text-emerald-800 rounded-xl p-5 text-xs sm:text-sm leading-relaxed">
          <strong>✓ Lead Conversion Fast Fact:</strong> Companies utilizing automated WhatsApp or SMS auto-responders convert average inbound traffic into active consultations up to 3 times more reliably than teams using manual outreach.
        </div>
      </article>
    )
  },
  {
    slug: "digital-marketing-trends",
    title: "Digital Marketing Trends: Future-Proofing Bangalore Service Corporations",
    metaTitle: "Digital Marketing Trends in Bangalore | Future Business-Tech",
    metaDesc: "Analyze future digital marketing trends in India. Master real-time conversational channels, localized maps filters, and hyper-targeted advertising.",
    category: "Marketing Future",
    date: "May 25, 2026",
    readTime: "6 Min Read",
    author: "Nitesh Kumar",
    intro: "Traditional outbound marketing is collapsing. Stay ahead of shifts in visual searching, artificial intelligence assistance, and privacy regulations.",
    coverImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800",
    relatedServiceSlug: "business-automation-systems",
    relatedServiceName: "Business Automation Systems",
    contentHtml: (
      <article className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">The Decentralization of Search Queries</h2>
        <p className="text-sm sm:text-base leading-relaxed text-slate-600">
          While traditional search remains highly dominant, rising cohorts utilize Instagram grids, TikTok channels, and Google Maps to evaluate options locally. Maintain dynamic profiles across multiple networks to catch every consumer stream.
        </p>

        <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">First-Party Data Collection Supremacy</h2>
        <p className="text-sm sm:text-base leading-relaxed text-slate-600">
          With cookies deprecating, owning deep customer email and phone direct contact lists is critical. Design premium resources and interactive surveys on high-trust corporate landing structures.
        </p>

        <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">Hyperlocal Community Personalization</h2>
        <p className="text-sm sm:text-base leading-relaxed text-slate-600">
          Vague national advertising is dying. Bangalore consumers look to book companies with a real physical footprint close to home. Accentuate your Bangalore landmarks and support neighboring societies.
        </p>
      </article>
    )
  },
  {
    slug: "ai-automation-for-businesses",
    title: "AI & Business Automation: Eliminating Operating Blocks with Smart Systems",
    metaTitle: "AI Automation & CRM Strategy Bangalore | Business Workflows",
    metaDesc: "Discover how AI and CRM automation save over 20+ staff hours weekly. Implement chat systems, dynamic lead routing, and database aggregations in Bangalore.",
    category: "AI & Automations",
    date: "May 18, 2026",
    readTime: "7 Min Read",
    author: "Nitesh Kumar",
    intro: "Stop spending expensive office hours executing repetitive, administrative chores. Build automated digital systems that work tirelessly to organize your sales pipeline.",
    coverImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
    relatedServiceSlug: "business-automation-systems",
    relatedServiceName: "Business Automation Systems",
    contentHtml: (
      <article className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">1. Streamline Customer Intake Fields with AI Forms</h2>
        <p className="text-sm sm:text-base leading-relaxed text-slate-600">
          When a prospect answers a strategy quiz online, deploy automated parser software to analyze inputs, estimate project size, and automatically flag high-value inquiries on team pipelines.
        </p>

        <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">2. Synchronize Instant Lead Routing</h2>
        <p className="text-sm sm:text-base leading-relaxed text-slate-600">
          Round-robin assignment algorithms route leads to active call agents instantaneously. This keeps teams productive and avoids missed connections or slower manual allocations.
        </p>

        <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">3. Automate Client Invoicing & Estimations</h2>
        <p className="text-sm sm:text-base leading-relaxed text-slate-600">
          Upon marking a deal as qualified in your GoHighLevel or custom dashboard, prompt automatic triggers to draft custom proposals, send estimate PDFs, and coordinate electronic signatures.
        </p>
      </article>
    )
  }
];

interface BlogPageProps {
  currentBlogSlug: string | null;
  onSelectBlog: (slug: string | null) => void;
  onNavigateToService: (slug: string) => void;
  onQuoteClick: () => void;
}

export default function BlogPage({ currentBlogSlug, onSelectBlog, onNavigateToService, onQuoteClick }: BlogPageProps) {
  
  // Expose specific blog post or show main category list
  const activePost = currentBlogSlug ? blogPostsList.find(b => b.slug === currentBlogSlug) : null;
  
  // Track dynamic tab categories
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  useEffect(() => {
    if (activePost) {
      document.title = activePost.metaTitle;
      const meta = document.querySelector('meta[name="description"]');
      if (meta) {
        meta.setAttribute("content", activePost.metaDesc);
      } else {
        const metaEl = document.createElement("meta");
        metaEl.name = "description";
        metaEl.content = activePost.metaDesc;
        document.head.appendChild(metaEl);
      }

      // Sync Canonical tag
      let canonicalEl = document.querySelector('link[rel="canonical"]');
      const canonicalUrl = `https://www.localbuild.site/blog/${activePost.slug}`;
      if (canonicalEl) {
        canonicalEl.setAttribute("href", canonicalUrl);
      } else {
        const link = document.createElement("link");
        link.rel = "canonical";
        link.href = canonicalUrl;
        document.head.appendChild(link);
      }
    } else {
      document.title = "LocalBuild Insight Blog | Expert Marketing Guides Bangalore";
      const meta = document.querySelector('meta[name="description"]');
      if (meta) {
        meta.setAttribute("content", "Access elite local SEO strategies, PPC tips, GBP ranking blueprints, and AI Business automations from LOCALBUILD, Bangalore's premier agency.");
      }

      let canonicalEl = document.querySelector('link[rel="canonical"]');
      const canonicalUrl = `https://www.localbuild.site/blog`;
      if (canonicalEl) {
        canonicalEl.setAttribute("href", canonicalUrl);
      }
    }

    // Smooth scroll view back to top
    window.scrollTo({ top: 0, behavior: "instant" as any });
  }, [activePost]);

  const categories = ["All", "Web Design & UI/UX", "PPC & Lead Generation", "Local SEO Packs", "Google Business Profile", "Business Scaling", "AI & Automations"];

  const filteredPosts = selectedCategory === "All" 
    ? blogPostsList 
    : blogPostsList.filter(p => p.category === selectedCategory || p.slug === "digital-marketing-trends" && selectedCategory === "Marketing Future");

  const articleSchema = activePost ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": activePost.title,
    "image": [activePost.coverImage],
    "datePublished": "2026-06-13T09:00:00Z",
    "dateModified": "2026-06-13T09:00:00Z",
    "author": [{
      "@type": "Person",
      "name": activePost.author,
      "url": "https://www.localbuild.site"
    }],
    "publisher": {
      "@type": "Organization",
      "name": "LocalBuild",
      "logo": {
        "@type": "ImageObject",
        "url": "https://i.ibb.co/G3tMbK2q/image.png"
      }
    },
    "description": activePost.metaDesc
  } : null;

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased pb-20 pt-20">
      
      {/* Article Schema Injection in Body */}
      {articleSchema && (
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      )}

      {/* Mini Breadcrumb Controller bar */}
      <div className="bg-white border-b border-slate-100 py-3.5 sticky top-0 z-[100] backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <button 
            onClick={() => onSelectBlog(null)}
            className="flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-blue-600 transition-colors uppercase tracking-widest cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{activePost ? "Back to Blog Hub" : "Main Website"}</span>
          </button>
          
          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 font-mono">
            <span>LOCATION: BENGALURU CORPORATE HUB</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        
        {/* IF VIEWING DETAILED POST */}
        {activePost ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16 items-start">
            
            {/* POST MAIN CONTAINER */}
            <main className="lg:col-span-8 bg-white border border-slate-200/80 p-5 sm:p-10 rounded-2xl shadow-xs space-y-8">
              
              <header className="space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 bg-blue-50/70 border border-blue-100 px-3 py-1 rounded-full uppercase tracking-wider">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>{activePost.category}</span>
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-[38px] font-sans font-black text-slate-900 leading-tight tracking-tight">
                  {activePost.title}
                </h1>

                {/* Meta details bar */}
                <div className="flex flex-wrap items-center gap-5 text-xs text-slate-400 font-semibold border-b border-slate-100 pb-5">
                  <div className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-slate-400" />
                    <span>By {activePost.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{activePost.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{activePost.readTime}</span>
                  </div>
                </div>
              </header>

              {/* Cover Banner Illustration */}
              <div className="relative aspect-video rounded-xl overflow-hidden border border-slate-100 shadow-xs">
                <img 
                  src={activePost.coverImage} 
                  alt={activePost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
              </div>

              {/* Intro quote bar */}
              <p className="text-base sm:text-lg text-slate-500 italic font-medium leading-relaxed border-l-4 border-blue-600 pl-4 py-1">
                &quot;{activePost.intro}&quot;
              </p>

              {/* Content Body */}
              <div className="prose prose-slate max-w-none text-slate-600 font-normal">
                {activePost.contentHtml}
              </div>

              {/* Dynamic Action Trigger widget */}
              <div className="bg-slate-50 border border-slate-100 rounded-xl p-5 sm:p-7 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-5 mt-10">
                <div className="space-y-1 text-left">
                  <span className="text-[10px] font-mono tracking-widest font-black uppercase text-slate-400">Related Resource Path</span>
                  <h4 className="text-base font-sans font-black text-slate-900">Need specific custom adjustments?</h4>
                  <p className="text-xs text-slate-500">Explore our professional {activePost.relatedServiceName} framework built right here in Bangalore.</p>
                </div>
                
                <button
                  onClick={() => onNavigateToService(activePost.relatedServiceSlug)}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider py-2.5 px-5 rounded-lg flex items-center gap-1 shadow transition cursor-pointer shrink-0"
                >
                  <span>Explore {activePost.relatedServiceName}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </main>

            {/* SIDEBAR WIDGET */}
            <aside className="lg:col-span-4 space-y-6">
              
              {/* Profile Card */}
              <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xs text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center font-black text-xl font-mono mx-auto shadow border-2 border-white">
                  NK
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-base font-black text-slate-900">Nitesh Kumar</h4>
                  <p className="text-xs text-indigo-500 font-bold">Founder & local Growth Architect</p>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Engineering high-conversions local SEO strategies, search ad frameworks, and business software models at LOCALBUILD Bengaluru.
                </p>
                <button
                  onClick={onQuoteClick}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider py-2.5 rounded-lg transition-colors cursor-pointer"
                >
                  Book Free Audit Call
                </button>
              </div>

              {/* Related Blog Posts Links */}
              <div className="bg-white border border-slate-200 p-5 rounded-1.5xl shadow-xs space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Alternative Marketing Guides</h4>
                <div className="space-y-3.5">
                  {blogPostsList
                    .filter(b => b.slug !== activePost.slug)
                    .slice(0, 4)
                    .map((other, idx) => (
                      <button
                        key={idx}
                        onClick={() => onSelectBlog(other.slug)}
                        className="w-full text-left font-sans text-xs hover:text-blue-600 transition flex items-start gap-2.5 group"
                      >
                        <span className="text-slate-300 group-hover:text-blue-500 transition-colors font-bold mt-0.5">•</span>
                        <div className="space-y-0.5">
                          <p className="font-bold text-slate-800 leading-snug group-hover:text-blue-600 transition-colors">
                            {other.title}
                          </p>
                          <span className="text-[10px] text-slate-400 block font-mono font-medium">{other.category}</span>
                        </div>
                      </button>
                    ))}
                </div>
              </div>

            </aside>
          </div>
        ) : (
          /* OTHERWISE: CATEGORY DASHBOARD HUB VIEW */
          <div className="space-y-12">
            
            {/* Header intro panel */}
            <div className="text-center max-w-3.5xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-1 bg-blue-50 px-3 py-1 border border-blue-100 rounded-full text-xs font-bold text-blue-600 uppercase tracking-widest">
                <Sparkles className="w-3 px-0 p-0 text-blue-500" />
                <span>LocalBuild Insight Hub</span>
              </div>
              
              <h1 className="font-sans font-black text-3xl sm:text-5xl text-slate-900 tracking-tight leading-none">
                Organic Search SEO & Conversion Optimization Guides
              </h1>
              
              <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-2xl mx-auto">
                Discover diagnostic playbooks, negative campaign mapping formulas, local schemas, and AI automatons crafted to help Bangalore service corporations double conversions.
              </p>
            </div>

            {/* Category Filter Pills (Horizontal scrollable) */}
            <div className="flex overflow-x-auto gap-2 pb-2 justify-start sm:justify-center scrollbar-none">
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-155 cursor-pointer ${
                    selectedCategory === cat 
                      ? "bg-blue-600 text-white shadow shadow-blue-500/15" 
                      : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Posts Cards Grid - Stacks on mobile, beautifully aligned layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, idx) => (
                <article 
                  key={idx}
                  className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="relative aspect-video bg-slate-100 border-b border-slate-100 overflow-hidden">
                    <img 
                      src={post.coverImage} 
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs border border-slate-100 px-2.5 py-1 rounded text-[10px] font-black uppercase text-blue-600 tracking-wider">
                      {post.category}
                    </span>
                  </div>

                  {/* Body description panel */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4 text-left">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 text-[10px] text-slate-400 font-semibold font-mono">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      
                      <h3 className="text-base sm:text-lg font-black text-slate-900 leading-snug group-hover:text-blue-600">
                        {post.title}
                      </h3>
                      
                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal line-clamp-3">
                        {post.intro}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-50 flex items-center justify-between">
                      <button 
                        onClick={() => onSelectBlog(post.slug)}
                        className="text-xs font-bold text-blue-600 hover:text-blue-700 hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <span>Read Complete Playbook</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
