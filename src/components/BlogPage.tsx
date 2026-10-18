import React, { useState } from "react";
import { ArrowLeft, ArrowRight, MessageSquare, Clock, Calendar, CheckCircle } from "lucide-react";
import { getWhatsAppUrl } from "../utils/whatsapp";

import { BLOG_POSTS, BlogPost } from "../data/blogPosts";
export { BLOG_POSTS };
export type { BlogPost };

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
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#3157D5] hover:text-[#2546B8] cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to all insights</span>
            </button>
          </div>
        </div>

        {/* Post Header */}
        <header className="py-12 sm:py-16 bg-[#071126] text-white border-b border-[#1C2A4A]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-block px-2.5 py-1 rounded bg-[#3157D5] text-white text-[11px] font-semibold uppercase tracking-wider mb-4">
              {post.category}
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight leading-tight mb-4">
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
                <h2 className="text-xl sm:text-2xl font-semibold text-[#0B1633] tracking-tight">
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
            <h3 className="text-base sm:text-lg font-semibold text-[#0B1633] mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#168A62]" />
              <span>Key Takeaways for Local Business Owners</span>
            </h3>
            <ul className="space-y-2.5 text-sm sm:text-base text-[#263044]">
              {post.takeaways.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-[#3157D5] font-semibold mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contextual CTA Block */}
          <div className="mt-12 p-8 bg-[#0B1633] text-white rounded-xl">
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">
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
            <h3 className="text-xl font-semibold text-[#263044] mb-6">
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
                    <span className="text-[10px] font-semibold text-[#3157D5] uppercase tracking-wider block mb-1">
                      {rPost.category}
                    </span>
                    <h4 className="text-sm font-semibold text-[#263044] line-clamp-2 mb-2">
                      {rPost.title}
                    </h4>
                    <p className="text-xs text-[#667085] line-clamp-3 mb-4">
                      {rPost.excerpt}
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-[#3157D5] inline-flex items-center gap-1">
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
            <p className="text-xs font-semibold uppercase tracking-wider text-[#3157D5] mb-2">
              Insights
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#263044] tracking-tight leading-[1.12] mb-4">
              Plain-English notes on local growth.
            </h1>
            <p className="text-base sm:text-lg text-[#667085] leading-relaxed mb-6 max-w-[620px]">
              Short, practical writing on local search, advertising, landing pages and lead automation. No jargon, no hype, no recycled listicles.
            </p>
            <div>
              <button
                type="button"
                onClick={() => onNavigate("/contact")}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#3157D5] hover:text-[#2546B8] cursor-pointer"
              >
                <span>Talk to a strategist</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5.3 Category Filter (Segmented control style) */}
      <section className="py-4 bg-white border-b border-[#DDE3EC] sticky top-16 z-20 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none" role="group" aria-label="Filter blog posts by category">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  aria-pressed={isSelected}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap cursor-pointer ${
                    isSelected
                      ? "bg-[#0B1633] text-white"
                      : "bg-[#F8FAFC] text-[#667085] hover:bg-[#E2E8F0] hover:text-[#263044]"
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
                  <span className="font-semibold text-[#3157D5] uppercase tracking-wider">{featuredPost.category}</span>
                  <span>•</span>
                  <span>{featuredPost.date}</span>
                  <span>•</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#0B1633] tracking-tight leading-snug">
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
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#3157D5] hover:text-[#2546B8] cursor-pointer"
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
            <h3 className="text-xl font-semibold text-[#263044]">
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
                      <span className="font-semibold text-[#3157D5] uppercase tracking-wider">{post.category}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h4 className="text-base sm:text-lg font-semibold text-[#0B1633] mb-2 line-clamp-2 leading-snug">
                      {post.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#667085] line-clamp-3 leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#DDE3EC] flex items-center justify-between text-xs">
                    <span className="text-[#667085]">By LocalBuild Team</span>
                    <span className="font-semibold text-[#3157D5] inline-flex items-center gap-1">
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
