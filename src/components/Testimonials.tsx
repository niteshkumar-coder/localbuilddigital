import { Lock, ArrowRight, CheckCircle2 } from "lucide-react";

interface TestimonialsProps {
  onQuoteClick?: (prefilledNotes?: string) => void;
}

export default function Testimonials({ onQuoteClick }: TestimonialsProps) {
  return (
    <section id="testimonials" className="py-16 sm:py-20 bg-white border-b border-zinc-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Credibility Statement Card */}
        <div className="bg-zinc-50 rounded-2xl border border-zinc-200/90 p-8 sm:p-10 text-center space-y-5">
          <div className="w-10 h-10 rounded-full bg-zinc-200/80 text-zinc-800 flex items-center justify-center mx-auto">
            <Lock className="w-5 h-5 text-zinc-700" />
          </div>

          <div className="space-y-2 max-w-xl mx-auto">
            <h3 className="font-display font-bold text-xl sm:text-2xl text-zinc-900">
              Verified Client References on Request
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
              Selected work and documented results will be added as verified client projects become available. Verified references available on request for serious enquiries.
            </p>
          </div>

          {/* 3 Verification Bullets */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 max-w-2xl mx-auto text-left border-t border-zinc-200/70">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span className="text-xs text-zinc-700">Real business owner contacts</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span className="text-xs text-zinc-700">Live ad account audit walk-through</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span className="text-xs text-zinc-700">Documented call volume increases</span>
            </div>
          </div>

          {onQuoteClick && (
            <div className="pt-2">
              <button
                type="button"
                onClick={() => onQuoteClick("Hi LocalBuild, I would like to request relevant case references and campaign performance examples for my industry.")}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-zinc-900 bg-white hover:bg-zinc-100 border border-zinc-200 transition-colors shadow-2xs cursor-pointer"
              >
                <span>Request Case References for Your Sector</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
