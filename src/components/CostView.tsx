import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, MessageCircle, Phone, ArrowRight, Download, CheckCircle, Sparkles, AlertCircle, FileText, LayoutGrid, TrendingUp, GraduationCap, Scissors, Hotel, Stethoscope, Scale, Dumbbell, Home, Utensils } from "lucide-react";

interface CostViewProps {
  onBack: () => void;
  onQuoteClick: () => void;
}

export default function CostView({ onBack, onQuoteClick }: CostViewProps) {
  const [activeTab, setActiveTab] = useState<"primary" | "detailed" | "additional" | "addons" | "growth" | "coaching" | "salon" | "hotel">("primary");

  const handleWhatsappClick = () => {
    window.open("https://wa.me/919472028969?text=Hi%20LocalBuild!%20I%20have%20reviewed%20your%2520pricing%20and%20cost%20structure.%20I'd%20like%20to%20discuss%20a%20project.", "_blank");
  };

  const benefits = [
    "No Hidden Fees — Transparent pricing structure",
    "Tailored Marketing Plans with complete breakdowns",
    "ROI-centric Campaigns designed for local markets",
    "Includes standard high-grade AI automation updates",
    "Comprehensive lead reporting dashboard",
    "Direct expert consultation & weekly sync meetings",
  ];

  const cards = {
    primary: {
      title: "Doctors & Clinics Marketing Packages",
      description: "Direct view of campaign budgets, patient flow optimization, and specialized healthcare marketing metrics.",
      imgUrl: "https://i.ibb.co/3Yf3pVhH/coust.png",
      label: "View Doctors & Clinics Plans",
    },
    detailed: {
      title: "Lawyers & Advocates Marketing Packages",
      description: "Checklists, localized SEO deliverables, legal compliance, and digital roadmap audits for law firms.",
      imgUrl: "https://i.ibb.co/BKFC7b4M/image.png",
      label: "View Lawyers & Advocates Plans",
    },
    additional: {
      title: "Gyms & Fitness Centers Packages",
      description: "Comprehensive membership marketing, custom high-converting fitness landing pages, and lead generation rates.",
      imgUrl: "https://i.ibb.co/ZRxWBfXy/image.png",
      label: "View Gyms & Fitness Plans",
    },
    addons: {
      title: "Real Estate Agents & Builders Action Plan",
      description: "Property marketing packages, Meta/Google lead forms configurations, and direct consultation budgets.",
      imgUrl: "https://i.ibb.co/ycwWm0s3/image.png",
      label: "View Real Estate & Builder Plans",
    },
    growth: {
      title: "Restaurants & Cafes Marketing Packages",
      description: "Google Maps rating amplification, custom food menus optimization, and local targeting strategies.",
      imgUrl: "https://i.ibb.co/YBLYGvj0/image.png",
      label: "View Restaurant & Cafe Plans",
    },
    coaching: {
      title: "Coaching & Training Programs",
      description: "Specialized coaching and marketing training packages with specific local scale checklists.",
      imgUrl: "https://i.ibb.co/GQKYCcky/image.png",
      label: "View Coaching Program Rates",
    },
    salon: {
      title: "Salon & Beauty Marketing Packages",
      description: "Dedicated scaling plans, local SEO targeting, and custom visual catalog updates for beauty salons.",
      imgUrl: "https://i.ibb.co/vxvL5MXF/image.png",
      label: "View Salon & Beauty Rates",
    },
    hotel: {
      title: "Hotels & Resorts Marketing Packages",
      description: "Dedicated digital roadmap, custom booking engine audits, and local tourism optimization scopes designed for premium resorts.",
      imgUrl: "https://i.ibb.co/TqJsggHV/image.png",
      label: "View Hotels & Resorts Rates",
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-zinc-950 font-sans pb-16">
      {/* Premium top branding header with navigation */}
      <header className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-zinc-200/80 shadow-xs z-50 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[64px] flex items-center justify-between">
          <button
            onClick={onBack}
            className="group flex items-center gap-2 text-zinc-700 hover:text-blue-600 transition-colors font-medium text-sm cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5 transition-transform duration-200 group-hover:-translate-x-1" />
            <span>Back to Home</span>
          </button>

          {/* Logo */}
          <div onClick={onBack} className="flex items-center space-x-2 cursor-pointer">
            <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center border border-gray-100 shrink-0">
              <img 
                src="https://i.ibb.co/G3tMbK2q/image.png" 
                alt="LocalBuild Logo" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <span className="font-display text-lg font-bold text-zinc-900 tracking-tight leading-none block">
                Local<span className="text-blue-600">Build</span>
              </span>
            </div>
          </div>

          <button
            onClick={onQuoteClick}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-2 px-4 rounded-lg shadow-sm transition-all cursor-pointer"
          >
            Get Free Audit
          </button>
        </div>
      </header>

      {/* Hero Header Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100/50 px-3.5 py-1 rounded-full text-xs font-bold text-blue-600 mb-4"
        >
          <Sparkles className="w-3.5 h-3.5 text-blue-500" />
          <span>Transparent Packages • LocalBuild Pricing Sheets</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-sans font-black text-3xl sm:text-4xl md:text-5xl text-zinc-900 tracking-tight mb-4"
        >
          Our Business{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            Cost & Strategy sheets
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-zinc-600 max-w-2xl mx-auto text-sm sm:text-base mb-8"
        >
          Configure and plan your ROI budget perfectly. Switch between the general package pricing and our detailed service roadmap list below.
        </motion.p>

        {/* Elegant Tab Switcher Button Bar */}
        <div className="flex justify-center mt-3 mb-8">
          <div className="inline-flex flex-wrap justify-center p-1.5 bg-zinc-200/60 rounded-2xl border border-zinc-300/40 shadow-xs gap-1 sm:gap-1.5 max-w-full">
            <button
              onClick={() => setActiveTab("primary")}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-black transition-all cursor-pointer relative ${
                activeTab === "primary"
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-zinc-600 hover:text-zinc-950"
              }`}
            >
              <Stethoscope className="w-4 h-4" />
              <span>1. Doctors & Clinics</span>
            </button>
            <button
              onClick={() => setActiveTab("detailed")}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-black transition-all cursor-pointer relative ${
                activeTab === "detailed"
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-zinc-600 hover:text-zinc-950"
              }`}
            >
              <Scale className="w-4 h-4" />
              <span>2. Lawyers & Advocates</span>
            </button>
            <button
              onClick={() => setActiveTab("additional")}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-black transition-all cursor-pointer relative ${
                activeTab === "additional"
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-zinc-600 hover:text-zinc-950"
              }`}
            >
              <Dumbbell className="w-4 h-4 text-amber-500 fill-amber-300/20" />
              <span>3. Gyms & Fitness</span>
            </button>
            <button
              onClick={() => setActiveTab("addons")}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-black transition-all cursor-pointer relative ${
                activeTab === "addons"
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-zinc-600 hover:text-zinc-950"
              }`}
            >
              <Home className="w-4 h-4 text-indigo-500 fill-indigo-300/20" />
              <span>4. Real Estate & Builders</span>
            </button>
            <button
              onClick={() => setActiveTab("growth")}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-black transition-all cursor-pointer relative ${
                activeTab === "growth"
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-zinc-600 hover:text-zinc-950"
              }`}
            >
              <Utensils className="w-4 h-4 text-emerald-500 fill-emerald-300/20" />
              <span>5. Restaurants & Cafes</span>
            </button>
            <button
              onClick={() => setActiveTab("coaching")}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-black transition-all cursor-pointer relative ${
                activeTab === "coaching"
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-zinc-600 hover:text-zinc-950"
              }`}
            >
              <GraduationCap className="w-4.5 h-4.5 text-rose-500 fill-rose-300/20" />
              <span>6. Coaching Packages</span>
            </button>
            <button
              onClick={() => setActiveTab("salon")}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-black transition-all cursor-pointer relative ${
                activeTab === "salon"
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-zinc-600 hover:text-zinc-950"
              }`}
            >
              <Scissors className="w-4 h-4 text-pink-500 fill-pink-300/20" />
              <span>7. Salon & Beauty</span>
            </button>
            <button
              onClick={() => setActiveTab("hotel")}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-black transition-all cursor-pointer relative ${
                activeTab === "hotel"
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-zinc-650 hover:text-zinc-950"
              }`}
            >
              <Hotel className="w-4 h-4 text-emerald-600 fill-emerald-300/10" />
              <span>8. Hotels & Resorts</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Image Container and Panel Sheet */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="bg-white border border-zinc-200/80 rounded-3xl shadow-xl overflow-hidden p-3 sm:p-6 lg:p-8 flex flex-col items-center gap-6"
        >
          {/* Top Panel Actions bar */}
          <div className="w-full flex flex-col sm:flex-row justify-between items-center bg-zinc-50 border border-zinc-200 p-4 rounded-2xl gap-3 text-left">
            <div className="flex gap-2.5 items-start">
              <AlertCircle className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-zinc-900 text-sm">
                  {cards[activeTab].title}
                </h4>
                <p className="text-zinc-500 text-xs mt-0.5">
                  {cards[activeTab].description}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto self-end sm:self-center">
              <a
                href={cards[activeTab].imgUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none justify-center h-10 px-4 bg-white hover:bg-zinc-100 border border-zinc-200 text-zinc-700 font-bold text-xs rounded-xl flex items-center gap-2 transition duration-200"
              >
                <Download className="w-4 h-4 text-zinc-500" />
                View Full Size
              </a>
            </div>
          </div>

          {/* Transparent high resolution view structure */}
          <div className="w-full relative bg-zinc-900 rounded-2xl p-1 sm:p-3 overflow-hidden border border-zinc-800 shadow-inner">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="w-full flex justify-center bg-slate-950 rounded-xl overflow-hidden relative"
              >
                <img
                  src={cards[activeTab].imgUrl}
                  alt={`LocalBuild Premium Cost - ${cards[activeTab].title}`}
                  className="w-full h-auto object-contain max-h-[85vh] sm:max-h-[95vh] self-center transition-all duration-300"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Quick interactive bullet value props below the pricing card */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border-t border-zinc-100 pt-6 mt-2 text-left">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex gap-3 items-start">
                <div className="bg-emerald-50 text-emerald-600 rounded-full p-0.5 shrink-0 mt-0.5">
                  <CheckCircle className="w-4.5 h-4.5" />
                </div>
                <span className="text-zinc-700 text-sm font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Dynamic lower conversion banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-linear-to-r from-zinc-900 to-slate-950 text-white rounded-3xl p-6 sm:p-10 mt-10 shadow-lg text-left relative overflow-hidden"
        >
          {/* subtle mesh background */}
          <div className="absolute inset-0 bg-linear-to-tr from-blue-900/10 via-transparent to-transparent opacity-90 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <h3 className="font-sans font-black text-xl sm:text-2xl mb-2 text-white">Need a Customized Dynamic Marketing Plan?</h3>
              <p className="text-zinc-400 text-sm max-w-xl">
                Every enterprise has unique scaling goals. Talk to our expert consultants today for a free custom roadmap.
              </p>
            </div>
            
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 w-full">
              <button
                onClick={onQuoteClick}
                className="flex-1 sm:flex-none h-12 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 transition duration-200 cursor-pointer"
              >
                <span>Request Dynamic Quote</span>
                <ArrowRight className="w-4.5 h-4.5" />
              </button>

              <button
                onClick={handleWhatsappClick}
                className="flex-1 sm:flex-none h-12 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 transition duration-200 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-white/10" />
                <span>Discuss on WhatsApp</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
