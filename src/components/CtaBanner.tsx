import { ArrowRight, Sparkles, Rocket } from "lucide-react";
import { motion } from "motion/react";
import rocketImage from "../assets/images/hero_3d_illustration_1781005351599.png"; // We can reuse our beautiful 3D graphic

interface CtaBannerProps {
  onQuoteClick: () => void;
}

export default function CtaBanner({ onQuoteClick }: CtaBannerProps) {
  return (
    <section className="py-12 md:py-20 bg-primary relative overflow-hidden text-white border-t border-blue-950">
      {/* Abstract light bursts background */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-accent/20 rounded-full blur-3xl pointer-events-none -translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cta/10 rounded-full blur-3xl pointer-events-none translate-x-1/4 translate-y-1/4" />

      {/* Main Container - Mobile Responsive Padding */}
      <div className="max-w-7xl mx-auto px-5 py-10 md:py-12 md:px-8 relative z-10">
        
        {/* Layout: side-by-side on desktop (lg), stacked vertically on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-center lg:text-left">
          
          {/* Content Block */}
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-1.5 bg-white/10 border border-white/10 px-3 py-1 rounded-full text-xs font-semibold text-accent uppercase tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span>Limited Client Openings</span>
            </div>
            
            <h2 className="font-display font-bold text-[22px] md:text-3xl lg:text-4xl leading-snug tracking-tight">
              Ready to claim absolute digital dominance in your local market?
            </h2>
            
            <p className="text-white/80 font-medium text-[14px] md:text-base max-w-2xl leading-relaxed">
              We work with only ONE local business per category in any geography. Secure your city before your competitor does. Plan your diagnostic blueprint now.
            </p>
          </div>

          {/* CTA Button Block */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center">
            <button
              onClick={onQuoteClick}
              className="w-full md:w-auto min-w-[200px] h-[50px] px-8 bg-cta hover:bg-cta/90 text-white font-bold text-center rounded-xl transition-all duration-200 shadow-lg shadow-cta/20 flex items-center justify-center gap-2 cursor-pointer"
            >
              Get Free Consultation
              <ArrowRight className="w-5 h-5" />
            </button>
            <p className="mt-2.5 text-xs text-white/50 font-mono">No credit card or setup fees required.</p>
          </div>

        </div>

      </div>

      {/* 3D rocket/image illustration panel - Strictly hidden on mobile */}
      <div className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2 w-64 select-none pointer-events-none opacity-20 xl:opacity-30">
        <img
          src={rocketImage}
          alt="LocalBuild Growth Rocket illustration"
          referrerPolicy="no-referrer"
          className="w-full h-auto object-contain"
        />
      </div>

    </section>
  );
}
