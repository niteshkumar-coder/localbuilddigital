import { motion } from "motion/react";
import { ArrowLeft, MessageCircle, Phone, ArrowRight, Download, CheckCircle, Sparkles, AlertCircle } from "lucide-react";

interface CostViewProps {
  onBack: () => void;
  onQuoteClick: () => void;
}

export default function CostView({ onBack, onQuoteClick }: CostViewProps) {
  const handleWhatsappClick = () => {
    window.open("https://wa.me/919472028969?text=Hi%20LocalBuild!%20I%20have%20reviewed%20your%20pricing%20and%20cost%20structure.%20I'd%20like%20to%20discuss%20a%20project.", "_blank");
  };

  const benefits = [
    "No Hidden Fees — Transparent pricing structure",
    "Tailored Marketing Plans with complete breakdowns",
    "ROI-centric Campaigns designed for local markets",
    "Includes standard high-grade AI automation updates",
  ];

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
          <span>Transparent Packages • LocalBuild Pricing</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-sans font-black text-3xl sm:text-4xl md:text-5xl text-zinc-900 tracking-tight mb-4"
        >
          Our Business{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            Cost & Package Table
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-zinc-600 max-w-2xl mx-auto text-sm sm:text-base mb-8"
        >
          Configure and plan your ROI budget. View the complete pricing breakdown for our premium services below.
        </motion.p>
      </div>

      {/* Main Image Container and Panel Sheet */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white border border-zinc-200/80 rounded-3xl shadow-xl overflow-hidden p-3 sm:p-6 lg:p-8 flex flex-col items-center gap-6"
        >
          {/* Top Panel Actions bar */}
          <div className="w-full flex flex-col sm:flex-row justify-between items-center bg-zinc-50 border border-zinc-200 p-4 rounded-2xl gap-3 text-left">
            <div className="flex gap-2.5 items-start">
              <AlertCircle className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-zinc-900 text-sm">Official Pricing Card</h4>
                <p className="text-zinc-500 text-xs mt-0.5">Below is the complete price list updated for the current quarter.</p>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto self-end sm:self-center">
              <a
                href="https://i.ibb.co/3Yf3pVhH/coust.png"
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
          <div className="w-full relative bg-zinc-900 rounded-2xl p-1 sm:p-3 overflow-hidden border border-zinc-800 shadow-inner group">
            {/* The actual image requested */}
            <div className="w-full flex justify-center bg-slate-950 rounded-xl overflow-hidden relative">
              <img
                src="https://i.ibb.co/3Yf3pVhH/coust.png"
                alt="LocalBuild Premium Cost Details Table"
                className="w-full h-auto object-contain max-h-[85vh] sm:max-h-[95vh] self-center transition-all duration-300"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Quick interactive bullet value props below the pricing card */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-zinc-100 pt-6 mt-2 text-left">
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
          transition={{ delay: 0.4 }}
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
