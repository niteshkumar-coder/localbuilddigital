import { useState, useEffect } from "react";
import { 
  ArrowRight, 
  Sparkles, 
  MessageCircle, 
  Phone, 
  MapPin, 
  Target, 
  Cpu, 
  TrendingUp, 
  BarChart3, 
  Smartphone, 
  Zap, 
  Search, 
  Youtube, 
  MousePointer, 
  CheckCircle2, 
  Globe, 
  Layers, 
  LineChart, 
  Award 
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface HeroProps {
  onQuoteClick: (prefilledNotes?: string) => void;
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onQuoteClick, onNavigate }: HeroProps) {
  const [activeTab, setActiveTab] = useState<"ppc" | "seo" | "roi">("ppc");
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    // Elegant local clock representer to support high-end real-time dashboard feeling
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString("en-IN", { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleConsultationClick = () => {
    // Triggers structured prefilled proposal notes
    onQuoteClick(
      "Hi LOCALBUILD team! I am looking for a premium, high-performance digital marketing proposal and AI-powered strategy plan for our company. We want to scale our leads, ads, and local dominance."
    );
  };

  return (
    <section
      id="hero"
      className="relative pt-[90px] md:pt-[130px] pb-20 md:pb-32 overflow-hidden bg-white"
    >
      {/* SaaS Stripe/Framer Styled Background Atmosphere */}
      {/* Pure white base with soft blue radial overlays */}
      <div className="absolute inset-0 bg-white -z-20" />
      
      {/* Sleek Grid mesh lines */}
      <div 
        className="absolute inset-0 -z-10 opacity-[0.25] pointer-events-none" 
        style={{
          backgroundImage: `
            radial-gradient(rgba(37, 99, 235, 0.15) 1px, transparent 1px),
            linear-gradient(to right, rgba(37, 99, 235, 0.02) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(37, 99, 235, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px, 48px 48px, 48px 48px',
          backgroundPosition: 'center top'
        }}
      />

      {/* Advanced glowing ambient wave background vectors */}
      <div className="absolute top-[10%] left-[-10%] w-[50%] h-[50%] bg-radial from-blue-100/40 via-blue-50/10 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-[20%] right-[-15%] w-[60%] h-[60%] bg-radial from-indigo-100/30 via-sky-50/10 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-[20%] w-[40%] h-[30%] bg-radial from-sky-100/25 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />

      {/* Dynamic Animated Glowing Ripple Wave */}
      <div className="absolute top-[35%] right-[15%] w-96 h-96 border border-blue-500/10 rounded-full -z-10 pointer-events-none animate-ping [animation-duration:8s]" />
      <div className="absolute top-[35%] right-[15%] w-[42rem] h-[42rem] border border-blue-400/5 rounded-full -z-10 pointer-events-none animate-pulse [animation-duration:12s]" />

      {/* DESKTOP & TABLET VIEW (768px+) */}
      <div className="hidden md:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: HERO TEXT & CONTROLS */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            
            {/* Small Badge */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100/80 px-4 py-1.5 rounded-full text-[12px] font-bold text-blue-600 tracking-wide uppercase mb-6 self-start shadow-xs shadow-blue-50/50"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-500 animate-spin [animation-duration:6s]" />
              <span className="font-sans font-extrabold">🚀 AI Powered Digital Marketing Agency</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-sans font-black text-[30px] sm:text-4xl md:text-5xl lg:text-[56px] text-zinc-900 leading-[1.12] tracking-tight mb-5"
            >
              Grow Your Business Faster With{" "}
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 inline-block font-sans font-black">
                AI-Powered Marketing
                <span className="absolute bottom-1 left-0 w-full h-[4px] bg-blue-100 rounded-full -z-10" />
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[14px] sm:text-[16px] md:text-[17px] text-zinc-600 leading-relaxed font-normal mb-8 max-w-2xl"
            >
              Generate More Leads, More Sales and More Revenue Through Websites, Google Ads, Meta Ads, SEO and Business Automation.
            </motion.p>

            {/* Buttons Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center mb-8"
            >
              <button
                onClick={handleConsultationClick}
                className="group flex-1 sm:flex-none justify-center h-[52px] px-7 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl flex items-center gap-2.5 transition-all duration-300 shadow-lg shadow-blue-600/20 hover:shadow-blue-600/35 cursor-pointer text-sm tracking-wide"
              >
                Get Free Consultation
                <ArrowRight className="w-4.5 h-4.5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <a
                href="https://wa.me/919472028969?text=Hi%20LocalBuild!%20I'm%20interested%20in%20your%20expert%20AI-Powered%20Digital%20Marketing%20services.%20I'd%20like%20to%20get%20a%20free%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none justify-center h-[52px] px-7 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl flex items-center gap-2 transition-all duration-300 shadow-md hover:shadow-emerald-600/20 cursor-pointer text-sm tracking-wide"
              >
                <MessageCircle className="w-5 h-5 fill-white/10 text-white" />
                WhatsApp Now
              </a>
            </motion.div>

            {/* Contact, Company & Location Glassmorphic Information Block */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-4 bg-zinc-50/95 border border-zinc-200/60 rounded-2xl max-w-xl shadow-xs flex flex-col gap-3"
            >
              <div className="flex items-center justify-between text-[11px] font-mono tracking-wider text-zinc-400 font-bold uppercase pb-1 border-b border-zinc-200/50">
                <span>Enterprise Registry</span>
                <span className="text-blue-500">Active Node • Bengaluru</span>
              </div>
              
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                <div className="flex items-center gap-2 text-[13px] text-zinc-700 font-semibold font-mono">
                  <Phone className="w-4 h-4 text-blue-600" />
                  <a href="tel:+919142645990" className="hover:text-blue-600 transition-colors">
                    +91 9142645990
                  </a>
                </div>
                
                <div className="w-1.5 h-1.5 bg-zinc-300 rounded-full hidden sm:block" />
                
                <div className="flex items-center gap-2 text-[13px] text-zinc-700 font-bold tracking-wide">
                  <span className="text-[10px] bg-zinc-200 text-zinc-800 font-extrabold px-1.5 py-0.5 rounded font-mono">CORP</span>
                  <span>LOCALBUILD</span>
                </div>
              </div>

              <div className="flex items-start gap-2 text-[12.5px] text-zinc-600">
                <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span className="font-medium">
                  Krishna Rajendra Rd, Parvathipuram, Basavanagudi, Bengaluru, Karnataka 560004
                </span>
              </div>
            </motion.div>

          </div>

          {/* RIGHT COLUMN: MacBook Centerpiece & Cloud of Floating Elements */}
          <div className="lg:col-span-6 relative flex justify-center items-center min-h-[500px] sm:min-h-[550px] lg:min-h-[640px]">
            
            {/* ------------------------------------------------------------- */}
            {/* TOP AREA FLOATING ELEMENTS */}
            {/* ------------------------------------------------------------- */}
            
            {/* Widget 1: Total Leads Card */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut" }}
              className="absolute top-[1%] left-[8%] md:left-[15%] z-30 bg-white/90 backdrop-blur-md border border-neutral-100 shadow-xl px-3.5 py-2.5 rounded-xl flex items-center gap-3 w-40 sm:w-44"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              </div>
              <div className="text-left">
                <p className="text-[10px] uppercase font-bold tracking-wider text-zinc-400">Total Leads</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-extrabold text-slate-800">12,480</span>
                  <span className="text-[9px] text-emerald-500 font-bold font-mono">+18%</span>
                </div>
              </div>
            </motion.div>

            {/* Widget 2: Performance Growth Card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 5.4, ease: "easeInOut", delay: 0.3 }}
              className="absolute top-[2%] right-[5%] md:right-[15%] z-30 bg-gradient-to-br from-blue-700 to-indigo-800 shadow-xl px-4 py-2.5 rounded-xl text-white flex items-center gap-2.5 w-[140px] sm:w-[160px]"
            >
              <TrendingUp className="w-4 h-4 text-sky-300 animate-pulse shrink-0" />
              <div className="text-left font-sans">
                <p className="text-[9px] uppercase font-semibold text-sky-200/80">YoY Perf. Growth</p>
                <p className="text-sm font-black text-white font-mono">+245%</p>
              </div>
            </motion.div>

            {/* Widget 3: Conversion Tracking Widget */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut", delay: 0.6 }}
              className="absolute top-[13%] left-[45%] -translate-x-1/2 z-30 bg-white/90 backdrop-blur-md border border-neutral-100/70 shadow-lg px-3 py-2 rounded-lg flex items-center gap-2"
            >
              <div className="w-2.5 h-2.5 bg-blue-600 rounded-full animate-ping" />
              <p className="text-[11px] font-bold text-zinc-800 font-mono">Conv. Rate: 6.8%</p>
            </motion.div>

            {/* Widget 4: AI Insights Widget */}
            <motion.div
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
              className="absolute top-[22%] left-[42%] -translate-x-1/2 z-30 bg-zinc-950 text-sky-400 border border-zinc-800 shadow-2xl px-3.5 py-1.5 rounded-full flex items-center gap-2"
            >
              <Cpu className="w-3.5 h-3.5 text-sky-400 animate-spin [animation-duration:8s]" />
              <span className="text-[10px] font-extrabold uppercase tracking-widest font-mono">🤖 AI Opt. Active</span>
            </motion.div>


            {/* ------------------------------------------------------------- */}
            {/* LEFT SIDE FLOATING ELEMENTS */}
            {/* ------------------------------------------------------------- */}
            
            {/* Widget 5: Google Ads Card */}
            <motion.div
              animate={{ x: [0, -4, 0], y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
              className="absolute left-[1%] sm:left-[5%] top-[33%] z-30 bg-white/95 backdrop-blur-md border border-neutral-100 shadow-xl p-3 rounded-xl flex flex-col gap-1.5 w-36 sm:w-40 text-left"
            >
              <div className="flex justify-between items-center">
                <span className="text-[10px] bg-blue-50 text-blue-600 font-bold px-1.5 py-0.5 rounded">Google Ads</span>
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
              </div>
              <p className="text-[10px] font-bold text-zinc-400">Total Conversions</p>
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-xs font-black text-slate-800">1,842 clicks</span>
                <span className="text-[9px] text-emerald-500 font-extrabold">14.8% CTR</span>
              </div>
            </motion.div>

            {/* Widget 6: Meta Ads Card */}
            <motion.div
              animate={{ x: [0, 4, 0], y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 5.2, ease: "easeInOut", delay: 0.4 }}
              className="absolute left-[3%] sm:left-[8%] top-[56%] z-30 bg-gradient-to-tr from-indigo-50 to-white/95 border border-indigo-100 shadow-lg p-2.5 rounded-lg flex items-center gap-2.5 w-[140px] text-left"
            >
              <div className="w-7 h-7 rounded bg-blue-100 flex items-center justify-center shrink-0">
                <Globe className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <p className="text-[9px] text-indigo-500 font-bold uppercase tracking-wider">Meta Scale</p>
                <p className="text-[11px] text-slate-800 font-black font-mono">ROAS 4.8x</p>
              </div>
            </motion.div>

            {/* Widget 7: Target Icon Card */}
            <motion.div
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
              className="absolute left-[-2%] sm:left-[2%] top-[74%] z-30 bg-blue-50 border border-blue-100 p-2.5 rounded-full shadow-lg"
            >
              <div className="bg-blue-600 text-white rounded-full p-2">
                <Target className="w-5 h-5" />
              </div>
            </motion.div>

            {/* Widget 8: Mobile Analytics Screen */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5.1, ease: "easeInOut", delay: 0.1 }}
              className="absolute left-[13%] sm:left-[18%] top-[73%] z-30 bg-slate-900 text-white p-2.5 rounded-2xl shadow-xl border border-slate-800 w-[110px]"
            >
              <div className="w-12 h-1 bg-zinc-700 mx-auto rounded-full mb-2" />
              <p className="text-[8px] uppercase tracking-widest text-sky-400 font-bold font-mono text-center">Mobile Live</p>
              <p className="text-xs font-black font-mono text-center mt-1">₹4,31,000</p>
              <div className="flex justify-center items-end gap-[2px] h-6 mt-1.5">
                <div className="w-[4px] h-[30%] bg-sky-500/50 rounded-sm" />
                <div className="w-[4px] h-[55%] bg-sky-500/60 rounded-sm" />
                <div className="w-[4px] h-[40%] bg-sky-500/70 rounded-sm" />
                <div className="w-[4px] h-[75%] bg-sky-500/80 rounded-sm" />
                <div className="w-[4px] h-[95%] bg-sky-500 rounded-sm animate-pulse" />
              </div>
            </motion.div>

            {/* Widget 9: Lead Generation Card */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 4.6, ease: "easeInOut" }}
              className="absolute left-[38%] -translate-x-1/2 top-[88%] z-30 bg-white/95 backdrop-blur-md border border-neutral-100 shadow-md p-2 rounded-lg flex items-center gap-2 whitespace-nowrap"
            >
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce" />
              <p className="text-[10px] font-extrabold text-neutral-800 font-mono">+512 Leads Today</p>
            </motion.div>


            {/* ------------------------------------------------------------- */}
            {/* CENTERPIECE: REALISTIC GLASSMORPHIC MACBOOK / LAPTOP */}
            {/* ------------------------------------------------------------- */}
            <div className="relative w-[340px] sm:w-[460px] md:w-[500px] lg:w-[520px] transition-all flex flex-col items-center">
              
              {/* Laptop Screen (Lid Half) */}
              <motion.div
                initial={{ transformPerspective: 1200, rotateX: 6, rotateY: -4, rotateZ: 2, scale: 0.96 }}
                animate={{ rotateX: [6, 4, 6], rotateY: [-4, -2, -4], scale: 1 }}
                transition={{ duration: 7, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                className="relative w-full aspect-[1.6] bg-zinc-900 rounded-[20px] p-2 sm:p-3 shadow-2xl border border-zinc-800 flex flex-col overflow-hidden"
              >
                {/* Glossy Reflection Highlight Overlays */}
                <div className="absolute top-0 right-0 w-[45%] h-full bg-linear-to-bl from-white/10 via-transparent to-transparent pointer-events-none z-10" />
                <div className="absolute bottom-0 left-0 w-full h-[60%] bg-linear-to-t from-black/20 via-transparent to-transparent pointer-events-none z-10" />

                {/* Webcam and indicator notch */}
                <div className="absolute top-1 left-1/2 -translate-x-1/2 flex items-center gap-1 z-20">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-950 border border-zinc-800" />
                  <div className="w-1 h-1 rounded-full bg-blue-500/40" />
                </div>

                {/* LAPTOP SCREEN CANVAS: BLUE PREMIUM DASHBOARD UI */}
                <div className="w-full h-full bg-slate-950 rounded-lg p-2 flex flex-col overflow-hidden text-left relative text-white font-sans border border-slate-800">
                  
                  {/* Dashboard Header Bar */}
                  <div className="flex items-center justify-between pb-1.5 border-b border-slate-800 mb-1.5 shrink-0">
                    <div className="flex items-center gap-1.5">
                      <div className="flex gap-[4px]">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      </div>
                      <span className="text-[8px] sm:text-[9.5px] font-black text-slate-400 font-mono tracking-wider ml-1">LOCALBUILD ENGINE v4.2</span>
                    </div>
                    
                    {/* Live clock inside screen */}
                    <div className="flex items-center gap-1.5">
                      <span className="w-1 h-1 bg-emerald-500 rounded-full animate-ping" />
                      <span className="text-[8px] sm:text-[9px] font-mono text-indigo-300 font-bold">{currentTime || "12:15:09"}</span>
                    </div>
                  </div>

                  {/* Dashboard View Body */}
                  <div className="flex-1 grid grid-cols-12 gap-1.5 overflow-hidden">
                    
                    {/* Screen Left Sidebar Navigation (Mock Icons) */}
                    <div className="col-span-1 border-r border-slate-800/60 pr-1 flex flex-col gap-2 pt-0.5 justify-start items-center">
                      <div className="w-4 h-4 bg-blue-900/60 border border-blue-500/30 rounded-xs flex items-center justify-center">
                        <Layers className="w-2.5 h-2.5 text-blue-400" />
                      </div>
                      <span className="w-3.5 h-[1.5px] bg-slate-800 rounded-xs" />
                      <div className="w-2.5 h-2.5 rounded-xs bg-slate-800 hover:bg-slate-700" />
                      <div className="w-2.5 h-2.5 rounded-xs bg-slate-800 hover:bg-slate-700" />
                      <div className="w-2.5 h-2.5 rounded-xs bg-slate-800 hover:bg-slate-700" />
                      <div className="w-2.5 h-2.5 rounded-xs bg-slate-800 hover:bg-slate-700" />
                    </div>

                    {/* Left Screen Data Column */}
                    <div className="col-span-11 flex flex-col gap-1.5 h-full overflow-y-auto pr-0.5 scrollbar-thin">
                      
                      {/* Active KPI Tabs */}
                      <div className="grid grid-cols-3 gap-1 shrink-0">
                        <div 
                          onClick={() => setActiveTab("ppc")}
                          className={`p-1.5 rounded-md border text-left cursor-pointer transition-colors ${activeTab === "ppc" ? "bg-blue-950/60 border-blue-500/80" : "bg-slate-900/30 border-slate-800/40"}`}
                        >
                          <p className="text-[7.5px] text-slate-400 font-semibold uppercase">Google & Meta Ads</p>
                          <p className="text-[10px] sm:text-[11.5px] font-extrabold text-white font-mono">₹45.8 L</p>
                        </div>
                        
                        <div 
                          onClick={() => setActiveTab("seo")}
                          className={`p-1.5 rounded-md border text-left cursor-pointer transition-colors ${activeTab === "seo" ? "bg-indigo-950/60 border-indigo-500/80" : "bg-slate-900/30 border-slate-800/40"}`}
                        >
                          <p className="text-[7.5px] text-slate-400 font-semibold uppercase">Organic SEO</p>
                          <p className="text-[10px] sm:text-[11.5px] font-extrabold text-blue-300 font-mono">#1 Maps</p>
                        </div>

                        <div 
                          onClick={() => setActiveTab("roi")}
                          className={`p-1.5 rounded-md border text-left cursor-pointer transition-colors ${activeTab === "roi" ? "bg-sky-950/60 border-sky-500/80" : "bg-slate-900/30 border-slate-800/40"}`}
                        >
                          <p className="text-[7.5px] text-slate-400 font-semibold uppercase">System ROI</p>
                          <p className="text-[10px] sm:text-[11.5px] font-extrabold text-emerald-400 font-mono">342% Avg</p>
                        </div>
                      </div>

                      {/* Main Dynamic Panel Chart Area */}
                      <div className="flex-1 bg-slate-950/80 border border-slate-800/80 rounded-md p-1.5 flex flex-col justify-between overflow-hidden min-h-[90px]">
                        <div className="flex justify-between items-center mb-1 shrink-0">
                          <div>
                            <span className="text-[8px] uppercase tracking-wider text-slate-400 font-bold">Campaign Conversion Momentum</span>
                            <p className="text-[10px] text-white/90 font-medium">Real-time incoming business validation</p>
                          </div>
                          <span className="text-[9px] bg-emerald-500/10 text-emerald-400 px-1 py-0.5 rounded-sm font-bold font-mono">
                            Live Node
                          </span>
                        </div>

                        {/* Interactive Sparkline graph rendering using vector curve SVG */}
                        <div className="flex-1 w-full relative group h-[45px]">
                          <svg className="w-full h-full" viewBox="0 0 400 80" preserveAspectRatio="none">
                            <defs>
                              <linearGradient id="glowGrad" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#2563EB" stopOpacity="0.4" />
                                <stop offset="100%" stopColor="#2563EB" stopOpacity="0.0" />
                              </linearGradient>
                            </defs>
                            {/* Target horizontal guides */}
                            <line x1="0" y1="20" x2="400" y2="20" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                            <line x1="0" y1="50" x2="400" y2="50" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                            
                            {/* Revenue line curve gradient flow */}
                            <path
                              d="M 0 65 Q 40 70 80 40 T 160 55 T 240 25 T 320 30 T 400 5"
                              fill="none"
                              stroke="#3b82f6"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                            />
                            {/* Area fill */}
                            <path
                              d="M 0 65 Q 40 70 80 40 T 160 55 T 240 25 T 320 30 T 400 5 L 400 80 L 0 80 Z"
                              fill="url(#glowGrad)"
                            />
                            {/* Pulse dot indicator at end */}
                            <circle cx="398" cy="5" r="4.5" fill="#3b82f6" className="animate-ping" />
                            <circle cx="398" cy="5" r="2.5" fill="#ffffff" />
                          </svg>
                        </div>

                        {/* Chart Bottom Label Legend */}
                        <div className="flex justify-between items-center text-[7.5px] text-slate-500 font-mono pt-1 border-t border-slate-900 shrink-0">
                          <span>Q1 Ads Audit</span>
                          <span>Bengaluru Local Target</span>
                          <span>100% Google Guaranteed Cap</span>
                        </div>

                      </div>

                      {/* Multi-source traffic and AI automation Insights (Screen Bottom part) */}
                      <div className="grid grid-cols-2 gap-1.5 shrink-0 text-left">
                        <div className="p-1 bg-slate-900/40 border border-slate-800/50 rounded-sm">
                          <p className="text-[7px] text-zinc-400 font-bold uppercase">Traffic Contribution</p>
                          <div className="flex items-center gap-1 mt-1 justify-between font-mono text-[8px]">
                            <span className="text-blue-400">Google Ads (55%)</span>
                            <span className="text-zinc-300">SEO (30%)</span>
                          </div>
                        </div>

                        <div className="p-1 bg-blue-950/20 border border-blue-900/30 rounded-sm flex items-center justify-between">
                          <div className="text-left">
                            <span className="text-[7px] text-blue-300 font-bold uppercase block">AI Bid Adjuster</span>
                            <span className="text-[8px] font-mono text-white/95 font-medium">Saves ₹14,200/mo</span>
                          </div>
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                        </div>
                      </div>

                    </div>

                  </div>

                </div>

              </motion.div>

              {/* Laptop Keyboard Base/Hinges (Base Half) */}
              <div className="relative w-[104%] h-4 sm:h-[18px] bg-zinc-800 border-t border-zinc-700/60 shadow-xl rounded-b-[18px] z-20 flex justify-center [perspective:600px]">
                {/* Opener groove indentation */}
                <div className="w-12 sm:w-16 h-1 bg-zinc-900 rounded-b-sm border-t border-zinc-950/50 z-30" />
                
                {/* Aluminum reflections style layer */}
                <div className="absolute top-0 inset-x-2 h-[2px] bg-white/20 rounded-full" />
                <div className="absolute top-[3px] inset-x-2 h-[1px] bg-white/5" />

                {/* Subtly angled underside drop shadows to anchor it */}
                <div className="absolute -bottom-8 w-[95%] h-6 bg-blue-500/10 rounded-full blur-xl pointer-events-none -z-10" />
                <div className="absolute -bottom-16 w-[88%] h-8 bg-zinc-950/15 rounded-full blur-[26px] pointer-events-none -z-10" />
              </div>

            </div>


            {/* ------------------------------------------------------------- */}
            {/* RIGHT SIDE FLOATING ELEMENTS */}
            {/* ------------------------------------------------------------- */}
            
            {/* Widget 10: Youtube Growth Card */}
            <motion.div
              animate={{ x: [0, 5, 0], y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 4.9, ease: "easeInOut", delay: 0.2 }}
              className="absolute right-[-1%] sm:right-[4%] top-[31%] z-30 bg-white/95 backdrop-blur-md border border-neutral-100 shadow-xl p-3 rounded-xl flex items-center gap-2.5 w-36 sm:w-[155px] text-left"
            >
              <div className="w-7 h-7 bg-rose-50 text-rose-600 rounded-lg flex items-center justify-center shrink-0">
                <Youtube className="w-4 h-4 fill-rose-600 text-rose-600" />
              </div>
              <div>
                <p className="text-[10px] text-neutral-400 font-bold uppercase">YouTube Ads</p>
                <p className="text-[11.5px] text-slate-800 font-black font-mono">3.2M Impr.</p>
              </div>
            </motion.div>

            {/* Widget 11: AI Automation Card */}
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ repeat: Infinity, duration: 4.1, ease: "easeInOut", delay: 0.5 }}
              className="absolute right-[1%] sm:right-[5%] top-[54%] z-30 bg-gradient-to-tr from-indigo-900 to-indigo-950 text-indigo-200 border border-indigo-800 shadow-2xl p-2.5 rounded-xl w-[135px] text-left"
            >
              <p className="text-[8px] text-indigo-400 uppercase font-black font-mono">AI AUTOMATION</p>
              <div className="flex items-center justify-between mt-1">
                <span className="text-xs font-black text-white font-mono">Rate: 98%</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
            </motion.div>

            {/* Widget 12: SEO Growth Chart */}
            <motion.div
              animate={{ x: [0, -4, 0], y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 5.6, ease: "easeInOut", delay: 0.3 }}
              className="absolute right-[-1%] sm:right-[2%] top-[72%] z-30 bg-white/95 backdrop-blur-md border border-neutral-100 shadow-xl p-2.5 rounded-lg w-32 sm:w-36 text-left"
            >
              <p className="text-[8.5px] uppercase font-bold text-zinc-400">SEO Growth</p>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-mono font-black text-slate-800">#1 Spot</span>
                <span className="text-[8px] font-bold text-blue-600 bg-blue-50 px-1 rounded font-mono">+185%</span>
              </div>
              {/* Mini SVG Trend Line */}
              <div className="h-4 w-full mt-1.5">
                <svg className="w-full h-full" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0,17 L25,12 L50,14 L75,3 L100,2" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            </motion.div>

            {/* Widget 13: Business Scaling Graph */}
            <motion.div
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut" }}
              className="absolute right-[14%] sm:right-[20%] top-[87%] z-30 bg-white/95 backdrop-blur-md border border-neutral-100 shadow-lg p-2 rounded-lg text-left"
            >
              <p className="text-[8px] text-zinc-500 font-bold uppercase tracking-wider">Business Scaling</p>
              <div className="flex gap-[3px] items-end h-5 mt-1.5">
                <div className="w-[3px] h-[30%] bg-blue-600/40 rounded-sm" />
                <div className="w-[3px] h-[50%] bg-blue-600/60 rounded-sm" />
                <div className="w-[3px] h-[80%] bg-blue-600/80 rounded-sm" />
                <div className="w-[3px] h-[100%] bg-blue-600 rounded-sm" />
              </div>
            </motion.div>

            {/* Widget 14: Upward Growth Arrow Background Glow Vector */}
            <motion.div
              animate={{ y: [0, -15, 0], opacity: [0.15, 0.25, 0.15] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute right-[5%] top-[5%] -z-10 pointer-events-none select-none text-blue-500 font-sans"
            >
              <span className="text-[120px] font-black leading-none select-none">↗</span>
            </motion.div>

          </div>

        </div>
      </div>

      {/* MOBILE & SMALL MOBILE DEDICATED HERO VIEW (<768px) */}
      <div className="block md:hidden max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center w-full max-w-md mx-auto pt-10 pb-12 gap-8 overflow-hidden">
          
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center gap-1.5 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100/80 h-9 px-4 rounded-full text-[12px] font-bold text-blue-600 tracking-wide uppercase shadow-xs self-center select-none"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-500 animate-spin [animation-duration:6s]" />
            <span>🚀 AI-Powered Digital Marketing Agency</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-sans font-extrabold text-[34px] xs:text-[36px] sm:text-[38px] text-zinc-900 leading-[1.05] tracking-tight max-w-[95%] text-center"
          >
            Grow Your Business Faster With{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 font-sans font-extrabold block">
              AI-Powered Marketing
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[16px] text-zinc-600 leading-[1.7] max-w-[95%] text-center font-normal"
          >
            Generate More Leads, More Sales and More Revenue Through Websites, Google Ads, Meta Ads, SEO and Business Automation.
          </motion.p>

          {/* CTA Buttons - Stacked Vertically */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col gap-3 w-full"
          >
            <button
              onClick={handleConsultationClick}
              className="w-full h-[54px] bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm tracking-wide rounded-[14px] flex items-center justify-center gap-2 transition duration-300 shadow-md shadow-blue-500/10 hover:shadow-lg active:scale-98 cursor-pointer"
            >
              Get Free Consultation
              <ArrowRight className="w-4 h-4" />
            </button>
            
            <a
              href="https://wa.me/919472028969?text=Hi%20LocalBuild!%20I'm%20interested%20in%20your%20expert%20AI-Powered%20Digital%20Marketing%20services.%20I'd%20like%20to%20get%20a%20free%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-[54px] bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm tracking-wide rounded-[14px] flex items-center justify-center gap-2 transition duration-300 shadow-md shadow-emerald-500/10 hover:shadow-lg active:scale-98 cursor-pointer whitespace-nowrap"
            >
              <MessageCircle className="w-5 h-5 fill-white/10 text-white" />
              WhatsApp Now
            </a>
          </motion.div>

          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full max-w-[340px] p-5 bg-white/95 border border-zinc-200 shadow-md rounded-[20px] flex flex-col gap-3 text-left self-center"
          >
            <div className="flex items-center gap-2 text-zinc-700 hover:text-blue-600 transition-colors">
              <Phone className="w-4 h-4 text-blue-600 shrink-0" />
              <a href="tel:+919142645990" className="text-sm font-bold font-mono">
                +91 9142645990
              </a>
            </div>
            
            <div className="flex items-center gap-2 text-zinc-800">
              <span className="text-[9px] bg-zinc-200 text-zinc-900 font-extrabold px-1.5 py-0.5 rounded font-mono">CORP</span>
              <span className="text-sm font-extrabold tracking-wide">LOCALBUILD</span>
            </div>

            <div className="flex items-start gap-2 text-zinc-600 pt-0.5 border-t border-zinc-100">
              <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <span className="text-xs font-semibold leading-normal">
                Krishna Rajendra Rd, Parvathipuram, Basavanagudi, Bengaluru, Karnataka 560004
              </span>
            </div>
          </motion.div>

          {/* Simplified Hero Illustration with 4 cards ONLY */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="w-full max-w-[440px] flex justify-center py-5 relative self-center"
          >
            {/* White Premium Container card */}
            <div className="w-[92%] max-w-[340px] p-6 bg-white border border-zinc-200 rounded-[28px] shadow-xl flex flex-col items-center relative aspect-[1.3] justify-center overflow-hidden">
              
              {/* MacBook Mockup */}
              <div className="w-full relative aspect-[1.6] bg-zinc-900 rounded-lg p-1.5 shadow-2xl border border-zinc-800 flex flex-col overflow-hidden max-w-[220px]">
                {/* Webcam Notch */}
                <div className="absolute top-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-zinc-950" />
                
                {/* Internal Screen content */}
                <div className="w-full h-full bg-slate-950 rounded-xs flex flex-col items-center justify-center p-1.5 relative border border-slate-900 text-center text-white">
                  {/* Subtle graph elements */}
                  <div className="absolute inset-x-1.5 bottom-1.5 h-4 flex items-end gap-[2px] opacity-40">
                    <div className="w-1.5 h-[30%] bg-blue-500 rounded-2xs" />
                    <div className="w-1.5 h-[55%] bg-blue-500 rounded-2xs" />
                    <div className="w-1.5 h-[80%] bg-blue-500 rounded-2xs" />
                    <div className="w-1.5 h-[45%] bg-blue-500 rounded-2xs" />
                  </div>
                  
                  <Cpu className="w-7 h-7 text-blue-400 animate-spin [animation-duration:12s] shrink-0 mb-1" />
                  <span className="text-[8px] font-black text-blue-200 tracking-wider">LOCALBUILD ACTIVE</span>
                </div>
              </div>
              
              {/* Keyboard Base */}
              <div className="relative w-[108%] max-w-[240px] h-2.5 bg-zinc-800 border-t border-zinc-700 shadow-md rounded-b-md z-15" />
              
              {/* Google Ads Card */}
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-[12px] -left-[18px] bg-white border border-neutral-150 shadow-md px-2.5 py-1.5 rounded-xl flex flex-col items-start text-left w-28 z-20"
              >
                <span className="text-[7.5px] bg-blue-50 text-blue-600 font-extrabold px-1.5 py-0.5 rounded">Google Ads</span>
                <span className="text-[10px] font-black font-mono text-zinc-800 mt-1">14.8% CTR</span>
              </motion.div>

              {/* Meta Ads Card */}
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.2 }}
                className="absolute top-[10px] -right-[18px] bg-white border border-neutral-150 shadow-md px-2.5 py-1.5 rounded-xl flex items-center gap-1.5 w-28 z-20 text-left"
              >
                <div className="w-4.5 h-4.5 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                  <Globe className="w-3 h-3 text-blue-600" />
                </div>
                <div className="min-w-0">
                  <span className="text-[6.5px] text-zinc-400 font-bold block leading-none">ROAS</span>
                  <span className="text-[10px] font-black font-mono text-zinc-800 leading-none">4.8x KPI</span>
                </div>
              </motion.div>

              {/* AI Automation Card */}
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut", delay: 0.4 }}
                className="absolute -bottom-[10px] -left-[18px] bg-zinc-950 text-indigo-300 border border-zinc-800 shadow-lg px-2.5 py-1.5 rounded-xl flex flex-col text-left w-28 z-20"
              >
                <span className="text-[7px] text-indigo-400 font-black font-mono tracking-wide">AI AUTOMATION</span>
                <span className="text-[10px] font-black font-mono text-white mt-1">98% OPT</span>
              </motion.div>

              {/* SEO Growth Card */}
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut", delay: 0.6 }}
                className="absolute -bottom-[12px] -right-[18px] bg-white border border-neutral-150 shadow-md px-2.5 py-1.5 rounded-xl flex flex-col text-left w-28 z-20"
              >
                <span className="text-[7.5px] uppercase font-extrabold text-blue-500">SEO Growth</span>
                <span className="text-[10px] font-black text-slate-800 font-mono mt-0.5">#1 Spot</span>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* BOTTOM AREA BAR: PREMIUM BRAND ICON BADGES */}
      {/* ------------------------------------------------------------- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 md:mt-32">
        <div className="border-t border-zinc-200/70 pt-10">
          
          <p className="text-[11px] font-mono tracking-widest text-zinc-400 uppercase font-black text-center mb-7">
            Precision Built & Structured for High Performance Lead Gen
          </p>

          {/* Premium 5 Horizontal Badge Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            
            {/* Badge 1: Data Driven Strategies */}
            <motion.div
              whileHover={{ y: -3 }}
              className="bg-zinc-50/80 border border-zinc-200/50 hover:bg-white hover:border-blue-400 p-4 rounded-2xl flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3.5 transition-all duration-300 shadow-xs hover:shadow-lg hover:shadow-blue-50/40"
            >
              <div className="w-[42px] h-[42px] bg-blue-50 hover:bg-blue-100 rounded-xl flex items-center justify-center shrink-0 border border-blue-100/50 shadow-inner">
                <BarChart3 className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-zinc-800 font-extrabold text-[13.5px] leading-tight">Data Driven</p>
                <p className="text-zinc-500 text-[11px] mt-0.5 font-medium leading-tight">Strategies</p>
              </div>
            </motion.div>

            {/* Badge 2: High Quality Traffic */}
            <motion.div
              whileHover={{ y: -3 }}
              className="bg-zinc-50/80 border border-zinc-200/50 hover:bg-white hover:border-emerald-400 p-4 rounded-2xl flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3.5 transition-all duration-300 shadow-xs hover:shadow-lg hover:shadow-emerald-50/40"
            >
              <div className="w-[42px] h-[42px] bg-emerald-50 hover:bg-emerald-100 rounded-xl flex items-center justify-center shrink-0 border border-emerald-100/50 shadow-inner">
                <TrendingUp className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <p className="text-zinc-800 font-extrabold text-[13.5px] leading-tight">High Quality</p>
                <p className="text-zinc-500 text-[11px] mt-0.5 font-medium leading-tight">Traffic</p>
              </div>
            </motion.div>

            {/* Badge 3: More Leads More Sales */}
            <motion.div
              whileHover={{ y: -3 }}
              className="bg-zinc-50/80 border border-zinc-200/50 hover:bg-white hover:border-orange-400 p-4 rounded-2xl flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3.5 transition-all duration-300 shadow-xs hover:shadow-lg hover:shadow-orange-50/40 col-span-2 md:col-span-1"
            >
              <div className="w-[42px] h-[42px] bg-orange-50 hover:bg-orange-100 rounded-xl flex items-center justify-center shrink-0 border border-orange-100/50 shadow-inner">
                <Target className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <p className="text-zinc-800 font-extrabold text-[13.5px] leading-tight">More Leads</p>
                <p className="text-zinc-500 text-[11px] mt-0.5 font-medium leading-tight">More Sales</p>
              </div>
            </motion.div>

            {/* Badge 4: AI Powered Solutions */}
            <motion.div
              whileHover={{ y: -3 }}
              className="bg-zinc-50/80 border border-zinc-200/50 hover:bg-white hover:border-indigo-400 p-4 rounded-2xl flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3.5 transition-all duration-300 shadow-xs hover:shadow-lg hover:shadow-indigo-50/40"
            >
              <div className="w-[42px] h-[42px] bg-indigo-50 hover:bg-indigo-100 rounded-xl flex items-center justify-center shrink-0 border border-indigo-100/50 shadow-inner">
                <Cpu className="w-5 h-5 text-indigo-600" />
              </div>
              <div>
                <p className="text-zinc-800 font-extrabold text-[13.5px] leading-tight">AI Powered</p>
                <p className="text-zinc-500 text-[11px] mt-0.5 font-medium leading-tight">Solutions</p>
              </div>
            </motion.div>

            {/* Badge 5: Business Growth */}
            <motion.div
              whileHover={{ y: -3 }}
              className="bg-zinc-50/80 border border-zinc-200/50 hover:bg-white hover:border-sky-400 p-4 rounded-2xl flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3.5 transition-all duration-300 shadow-xs hover:shadow-lg hover:shadow-sky-50/40"
            >
              <div className="w-[42px] h-[42px] bg-sky-50 hover:bg-sky-100 rounded-xl flex items-center justify-center shrink-0 border border-sky-100/50 shadow-inner">
                <Zap className="w-5 h-5 text-sky-600" />
              </div>
              <div>
                <p className="text-zinc-800 font-extrabold text-[13.5px] leading-tight">Business</p>
                <p className="text-zinc-500 text-[11px] mt-0.5 font-medium leading-tight">Growth</p>
              </div>
            </motion.div>

          </div>

        </div>
      </div>

    </section>
  );
}
