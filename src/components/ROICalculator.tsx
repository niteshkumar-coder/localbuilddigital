import { useState } from "react";
import { Calculator, Sparkles, HelpCircle, ArrowRight, TrendingUp, HandCoins, CheckCircle } from "lucide-react";
import { motion } from "motion/react";

interface ROICalculatorProps {
  onQuoteClick: (prefilledNotes?: string) => void;
}

export default function ROICalculator({ onQuoteClick }: ROICalculatorProps) {
  // Input states
  const [budget, setBudget] = useState(25000); // Monthly spending in Rupees
  const [cpc, setCpc] = useState(15.0); // Cost Per Click in Rupees
  const [convRate, setConvRate] = useState(5.0); // Website Lead Conversion %
  const [closeRate, setCloseRate] = useState(25); // Close lead %
  const [customerValue, setCustomerValue] = useState(15000); // Contract Value / LTV in Rupees

  // Intermediate computations
  const estimatedClicks = Math.floor(budget / cpc);
  const estimatedLeads = Math.floor(estimatedClicks * (convRate / 100));
  const estimatedCloses = Math.floor(estimatedLeads * (closeRate / 100));
  const totalRevenue = estimatedCloses * customerValue;
  const netProfit = totalRevenue - budget;
  const roi = budget > 0 ? ((totalRevenue - budget) / budget) * 100 : 0;

  // Visual highlights
  const isHealthy = roi > 100;
  const isOptimal = roi >= 300;

  const handlePreFill = () => {
    const prefilledNotes = `Hi LocalBuild team! I simulated my target campaign on your Campaign ROI Simulator. Here are my numbers: Monthly Budget: [₹${budget.toLocaleString()}], Cost Per Click: [₹${cpc.toFixed(2)}], Conversion Rate: [${convRate}%], Win/Close Rate: [${closeRate}%], Customer Value: [₹${customerValue.toLocaleString()}]. This produces simulated monthly revenues of [₹${totalRevenue.toLocaleString()}] (${roi.toFixed(0)}% ROI). I'd love to discuss how to make this simulation a reality!`;
    onQuoteClick(prefilledNotes);
  };

  return (
    <section id="roi" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 bg-accent/5 border border-accent/10 px-3 py-1 rounded-full text-xs font-semibold text-accent uppercase tracking-wide mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>ROI Calculator & Estimator</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-heading tracking-tight mb-4">
            Simulate your marketing return on investment
          </h2>

          <p className="text-brand-body text-md">
            Slide the values to match your specific industry parameters and see how optimizing search conversion yields massive pipeline revenue increases.
          </p>
        </div>

        {/* Dashboard Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Slider Panel (Left Column) */}
          <div className="lg:col-span-7 bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
            <div className="border-b border-gray-100 pb-4 mb-2 flex items-center justify-between">
              <h3 className="font-display font-semibold text-brand-heading text-lg">Campaign Parameters</h3>
              <span className="text-[10px] text-brand-body uppercase tracking-wider font-extrabold bg-gray-50 px-2 py-1 rounded">Interactive</span>
            </div>

            {/* Slider 1: Budget */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold text-brand-heading uppercase tracking-wider">Monthly Spend Budget</label>
                <span className="font-mono text-sm font-extrabold text-primary">₹{budget.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="5000"
                max="250000"
                step="5000"
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between text-[10px] text-brand-body font-medium">
                <span>₹5,000/mo</span>
                <span>₹2,50,000/mo</span>
              </div>
            </div>

            {/* Slider 2: CPC */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold text-brand-heading uppercase tracking-wider">Average Cost Per Click (CPC)</label>
                <span className="font-mono text-sm font-extrabold text-primary">₹{cpc.toFixed(1)}</span>
              </div>
              <input
                type="range"
                min="2"
                max="200"
                step="1"
                value={cpc}
                onChange={(e) => setCpc(Number(e.target.value))}
                className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between text-[10px] text-brand-body font-medium">
                <span>₹2</span>
                <span>₹200 (High Competition)</span>
              </div>
            </div>

            {/* Slider 3: Conversion Rate */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold text-brand-heading uppercase tracking-wider">Website Lead Conv. Rate</label>
                <span className="font-mono text-sm font-extrabold text-accent">{convRate.toFixed(1)}%</span>
              </div>
              <input
                type="range"
                min="1.0"
                max="15.0"
                step="0.1"
                value={convRate}
                onChange={(e) => setConvRate(Number(e.target.value))}
                className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-accent"
              />
              <div className="flex justify-between text-[10px] text-brand-body font-medium">
                <span>1% (Low)</span>
                <span>15% (LocalBuild CRO Engine Target)</span>
              </div>
            </div>

            {/* Slider 4: Lead Close Win Rate */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold text-brand-heading uppercase tracking-wider">Lead-to-Close Rate</label>
                <span className="font-mono text-sm font-extrabold text-accent">{closeRate}%</span>
              </div>
              <input
                type="range"
                min="5"
                max="80"
                step="5"
                value={closeRate}
                onChange={(e) => setCloseRate(Number(e.target.value))}
                className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-accent"
              />
              <div className="flex justify-between text-[10px] text-brand-body font-medium">
                <span>5%</span>
                <span>80% (High Close Mastery)</span>
              </div>
            </div>

            {/* Slider 5: Customer LTV / Contract Value */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold text-brand-heading uppercase tracking-wider">Avg Customer Value (LTV)</label>
                <span className="font-mono text-sm font-extrabold text-cta">₹{customerValue.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="1000"
                max="150000"
                step="1000"
                value={customerValue}
                onChange={(e) => setCustomerValue(Number(e.target.value))}
                className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-cta"
              />
              <div className="flex justify-between text-[10px] text-brand-body font-medium">
                <span>₹1,000</span>
                <span>₹1,50,000</span>
              </div>
            </div>
          </div>

          {/* Results Output Canvas (Right Column) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Main Profit Card */}
            <div className="bg-primary text-white border-0 rounded-2xl p-6 sm:p-8 shadow-lg shadow-primary/20 flex flex-col justify-between h-full relative overflow-hidden">
              {/* background dynamic circular shapes */}
              <div className="absolute -top-10 -right-10 w-36 h-36 bg-accent/20 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-36 h-36 bg-cta/15 rounded-full blur-2xl pointer-events-none" />

              <div>
                <span className="text-[10px] tracking-widest font-bold uppercase text-accent/80 flex items-center gap-1.5 mb-3">
                  <TrendingUp className="w-3.5 h-3.5 text-accent" />
                  Simulated Monthly Income
                </span>
                <p className="font-display font-extrabold text-[40px] sm:text-[46px] leading-none mb-1">
                  ₹{totalRevenue.toLocaleString()}
                </p>
                <p className="text-xs text-white/70">
                  Gross Pipeline Value
                </p>
              </div>

              {/* Middle stats splits indicators */}
              <div className="grid grid-cols-2 gap-4 py-6 my-6 border-y border-white/10">
                <div>
                  <p className="text-[10px] text-white/50 uppercase font-semibold">Net Campaign Profit</p>
                  <p className={`text-md font-bold mt-1 ${netProfit > 0 ? "text-emerald-400" : "text-rose-400"}`}>
                    {netProfit >= 0 ? "+" : ""}₹{netProfit.toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] text-white/50 uppercase font-semibold text-right">Computed ROI</p>
                  <p className={`text-md font-bold text-right mt-1 ${isHealthy ? "text-accent" : "text-gray-300"}`}>
                    {roi.toFixed(0)}%
                  </p>
                </div>
              </div>

              {/* Micro-performance indicators alerts */}
              <div className="mb-6">
                {isOptimal ? (
                  <div className="bg-accent/20 border border-accent/20 rounded-lg p-3 text-xs flex gap-2">
                    <Sparkles className="w-4 h-4 text-accent shrink-0" />
                    <div>
                      <span className="font-bold text-white">Scale Parameter Optimal</span>: Your average contract values comfortably cover localized acquisition expenses. This is a primary search target.
                    </div>
                  </div>
                ) : isHealthy ? (
                  <div className="bg-emerald-500/10 border border-emerald-500/15 rounded-lg p-3 text-xs text-emerald-100 flex gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div>
                      <span className="font-bold text-white">Healthy Returns Expected</span>: Stable marketing model with high capture profiles. Proceed with active ad launch.
                    </div>
                  </div>
                ) : (
                  <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-3 text-xs text-amber-100 flex gap-2">
                    <HelpCircle className="w-4 h-4 text-cta shrink-0" />
                    <div>
                      <span className="font-bold">Optimization Advisory</span>: Return profiles are tight. Increase conversion rates or customer life value to secure a deeper ROI margin.
                    </div>
                  </div>
                )}
              </div>

              {/* Conversion metrics sub-row */}
              <div className="grid grid-cols-3 gap-2 text-center bg-black/15 rounded-xl p-3 mb-6 border border-white/5">
                <div>
                  <p className="text-[9px] text-white/40 uppercase font-bold">Clicks</p>
                  <p className="font-mono text-sm font-bold text-white">{estimatedClicks}</p>
                </div>
                <div>
                  <p className="text-[9px] text-white/40 uppercase font-bold">Leads</p>
                  <p className="font-mono text-sm font-bold text-white">{estimatedLeads}</p>
                </div>
                <div>
                  <p className="text-[9px] text-white/40 uppercase font-bold">Acquisitions</p>
                  <p className="font-mono text-sm font-bold text-white">{estimatedCloses}</p>
                </div>
              </div>

              {/* Action */}
              <button
                onClick={handlePreFill}
                className="bg-cta hover:bg-cta/90 text-white text-sm font-bold py-3.5 px-4 rounded-lg flex items-center justify-center gap-1.5 transition-all shadow-md shadow-cta/15 cursor-pointer hover:-translate-y-0.5"
              >
                Claim This ROI Funnel Strategy
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
