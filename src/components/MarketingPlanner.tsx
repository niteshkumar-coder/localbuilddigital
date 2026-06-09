import { useState } from "react";
import { Sparkles, Map, ClipboardCheck, ArrowRight, BookOpen, RefreshCw, PhoneCall, Gift, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface PlannerProps {
  onQuoteClick: (prefilledNotes?: string) => void;
}

export default function MarketingPlanner({ onQuoteClick }: PlannerProps) {
  const [step, setStep] = useState(1);
  const [industry, setIndustry] = useState("");
  const [goal, setGoal] = useState("");
  const [budget, setBudget] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [showResult, setShowResult] = useState(false);

  // Simple question datasets
  const industries = [
    { value: "Home Services", label: "Home Services", desc: "Plumbing, HVAC, Electrical, Roofing, General Contracting" },
    { value: "Medical & Health", label: "Medical & Clinics", desc: "Dental, Chiropractic, Optometry, Wellness, Aesthetics" },
    { value: "Professional Services", label: "Professional Agencies", desc: "Law firms, Accounting, Real Estate, Consulting, Brokers" },
    { value: "E-Commerce & Local Shop", label: "Retail & Local Commerce", desc: "Boutiques, Gyms, Restaurants, Local showrooms, Retail" },
  ];

  const goals = [
    { value: "phone_calls", label: "Skyrocket Direct Phone Calls", desc: "Focus heavily on immediate callback conversions & Maps pack" },
    { value: "maps_rank", label: "Dominate Google Maps Pack", desc: "Secure #1 visual spot in localized map queries" },
    { value: "high_value_ppc", label: "Capture High-intent Paid Leads", desc: "Launch advanced PPC search campaigns with high conversion" },
    { value: "website_conversions", label: "Increase Consultation Booking Rates", desc: "Optimize current website conversion funnels & CRO" },
  ];

  const budgets = [
    { value: "starter", label: "₹25,000 – ₹50,000 / mo", desc: "Target localized dominance for a single metropolitan area" },
    { value: "growth", label: "₹50,000 – ₹1,00,000 / mo", desc: "Target multi-city expansion with competitive keyword capture" },
    { value: "aggressive", label: "₹1,00,000+ / mo", desc: "Total market saturation, advanced programmatic & custom funnels" },
  ];

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      setIsGenerating(true);
      setTimeout(() => {
        setIsGenerating(false);
        setShowResult(true);
      }, 1500);
    }
  };

  const handleReset = () => {
    setStep(1);
    setIndustry("");
    setGoal("");
    setBudget("");
    setShowResult(false);
  };

  // Dynamically compute customized plan output based on answers
  const getCustomizedPlan = () => {
    let ppcShare = 40;
    let seoShare = 40;
    let croShare = 20;
    let recommendedPath = "";
    let timingDays = "14 Days";

    if (goal === "phone_calls") {
      seoShare = 50;
      ppcShare = 30;
      croShare = 20;
      recommendedPath = "Focus heavily on Google Maps local rankings & fast mobile call click buttons.";
    } else if (goal === "maps_rank") {
      seoShare = 60;
      ppcShare = 20;
      croShare = 20;
      recommendedPath = "Target high local directory volume, schema tag reviews, and geographic schema codes.";
    } else if (goal === "high_value_ppc") {
      ppcShare = 60;
      seoShare = 20;
      croShare = 20;
      recommendedPath = "Target competitors aggressively with Google search ads linked directly to high-converting landing pages.";
    } else if (goal === "website_conversions") {
      croShare = 40;
      ppcShare = 30;
      seoShare = 30;
      recommendedPath = "Redefine current navigation, form triggers, speed optimization, and interactive scheduling dials.";
    }

    let estimatedLeads = "15 - 35";
    if (budget === "growth") {
      estimatedLeads = "45 - 85";
    } else if (budget === "aggressive") {
      estimatedLeads = "120 - 250+";
    }

    const prefilledNotes = `Hi LocalBuild team! I ran your Interactive Strategy Planner. I am in the [${industry}] sector. My main target is [${goal}]. Budget selected: [${budget}]. I'd love a personalized review of this dynamic roadmap!`;

    return { ppcShare, seoShare, croShare, recommendedPath, timingDays, estimatedLeads, prefilledNotes };
  };

  const plan = getCustomizedPlan();

  return (
    <section id="planner" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 bg-accent/5 border border-accent/10 px-3 py-1 rounded-full text-xs font-semibold text-accent uppercase tracking-wide mb-4">
            <Map className="w-3.5 h-3.5 text-accent" />
            <span>Interactive Strategy Planner</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-heading tracking-tight mb-4">
            Create your custom digital marketing blueprint
          </h2>

          <p className="text-brand-body text-md">
            Answer 3 quick questions about your local business goals. Our system will generate a customized marketing layout, budget split, and action roadmap.
          </p>
        </div>

        {/* Blueprint Box */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden min-h-[480px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            {!showResult && !isGenerating && (
              <motion.div
                key="quiz"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="p-6 sm:p-10 flex-1 flex flex-col justify-between"
              >
                {/* Step indicator */}
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xs uppercase tracking-wider font-extrabold text-accent">
                    Step {step} of 3
                  </span>
                  <div className="flex gap-1.5">
                    {[1, 2, 3].map((s) => (
                      <div
                        key={s}
                        className={`w-10 h-1.5 rounded-full transition-colors duration-300 ${
                          s <= step ? "bg-primary" : "bg-gray-100"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Step 1: Industry */}
                {step === 1 && (
                  <div>
                    <h3 className="font-display font-semibold text-xl text-brand-heading mb-6">
                      What is your industry or service sector?
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {industries.map((item) => (
                        <button
                          key={item.value}
                          onClick={() => setIndustry(item.value)}
                          className={`text-left p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                            industry === item.value
                              ? "border-accent bg-accent/5 shadow-xs"
                              : "border-gray-200 hover:border-gray-300 hover:bg-gray-50/50"
                          }`}
                        >
                          <p className="font-semibold text-brand-heading text-sm">{item.label}</p>
                          <p className="text-xs text-brand-body mt-1 leading-normal">{item.desc}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 2: Goal */}
                {step === 2 && (
                  <div>
                    <h3 className="font-display font-semibold text-xl text-brand-heading mb-6">
                      What is your primary commercial goal?
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {goals.map((item) => (
                        <button
                          key={item.value}
                          onClick={() => setGoal(item.value)}
                          className={`text-left p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                            goal === item.value
                              ? "border-accent bg-accent/5 shadow-xs"
                              : "border-gray-200 hover:border-gray-300 hover:bg-gray-50/50"
                          }`}
                        >
                          <p className="font-semibold text-brand-heading text-sm">{item.label}</p>
                          <p className="text-xs text-brand-body mt-1 leading-normal">{item.desc}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 3: Budget */}
                {step === 3 && (
                  <div>
                    <h3 className="font-display font-semibold text-xl text-brand-heading mb-6">
                      Select your target monthly marketing budget parameter:
                    </h3>
                    <div className="grid grid-cols-1 gap-4">
                      {budgets.map((item) => (
                        <button
                          key={item.value}
                          onClick={() => setBudget(item.value)}
                          className={`text-left p-4 rounded-xl border transition-all duration-200 cursor-pointer flex justify-between items-center ${
                            budget === item.value
                              ? "border-accent bg-accent/5 shadow-xs"
                              : "border-gray-200 hover:border-gray-300 hover:bg-gray-50/50"
                          }`}
                        >
                          <div className="pr-4">
                            <p className="font-semibold text-brand-heading text-sm">{item.label}</p>
                            <p className="text-xs text-brand-body mt-0.5 leading-normal">{item.desc}</p>
                          </div>
                          <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                            budget === item.value ? "border-accent bg-accent text-white" : "border-gray-300"
                          }`}>
                            {budget === item.value && <div className="w-2.5 h-2.5 bg-white rounded-full" />}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action buttons */}
                <div className="flex gap-4 items-center justify-end pt-10 border-t border-gray-100 mt-8">
                  {step > 1 && (
                    <button
                      onClick={() => setStep(step - 1)}
                      className="text-sm font-semibold text-brand-body hover:text-brand-heading cursor-pointer transition-colors"
                    >
                      Back
                    </button>
                  )}
                  <button
                    onClick={handleNext}
                    disabled={
                      (step === 1 && !industry) ||
                      (step === 2 && !goal) ||
                      (step === 3 && !budget)
                    }
                    className="bg-primary hover:bg-primary/95 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed text-white font-semibold text-sm px-6 py-3.5 rounded-lg flex items-center gap-1.5 transition-all shadow-sm shadow-primary/5 cursor-pointer"
                  >
                    {step === 3 ? "Generate Dynamic Blueprint" : "Next Step"}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Generating Loader */}
            {isGenerating && (
              <motion.div
                key="generating"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="p-16 flex-1 flex flex-col items-center justify-center text-center select-none"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-full border-4 border-gray-100 border-t-accent animate-spin" />
                  <Map className="w-6 h-6 text-primary absolute inset-0 m-auto" />
                </div>
                <h4 className="font-display font-semibold text-lg text-brand-heading mb-2">
                  Analyzing Competitors & Localized Density...
                </h4>
                <p className="text-xs text-brand-body max-w-xs leading-relaxed">
                  Structuring keyword map indexes, directory citations, and computing ROI curves based on budget parameters.
                </p>
              </motion.div>
            )}

            {/* Generated Results Panel */}
            {showResult && (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="p-6 sm:p-10 flex-1"
              >
                {/* Result Header */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-gray-100 mb-8">
                  <div>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-brand-heading tracking-tight">
                      Custom Scaling Blueprint Generated!
                    </h3>
                    <p className="text-xs text-accent font-semibold uppercase tracking-wider mt-1 flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      Sector Strategy: {industry}
                    </p>
                  </div>
                  <button
                    onClick={handleReset}
                    className="text-xs font-semibold text-brand-body hover:text-accent transition-colors flex items-center gap-1.5 py-1 px-2.5 rounded-md hover:bg-gray-50 border border-gray-200 cursor-pointer"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    Reset Quiz
                  </button>
                </div>

                {/* Budget Split Visual Indicator */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-8">
                  <div className="md:col-span-5 bg-gray-50 rounded-xl p-5 border border-gray-100 select-none">
                    <p className="text-[11px] uppercase tracking-wider font-extrabold text-brand-heading mb-4">
                      Recommended Investment Split
                    </p>
                    <div className="space-y-4">
                      {/* Bar 1: SEO */}
                      <div>
                        <div className="flex justify-between text-xs font-semibold text-brand-heading mb-1.5">
                          <span>Local SEO & Maps</span>
                          <span>{plan.seoShare}%</span>
                        </div>
                        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                          <div className="bg-primary h-full rounded-full" style={{ width: `${plan.seoShare}%` }} />
                        </div>
                      </div>

                      {/* Bar 2: PPC */}
                      <div>
                        <div className="flex justify-between text-xs font-semibold text-brand-heading mb-1.5">
                          <span>Performance PPC Ads</span>
                          <span>{plan.ppcShare}%</span>
                        </div>
                        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                          <div className="bg-accent h-full rounded-full" style={{ width: `${plan.ppcShare}%` }} />
                        </div>
                      </div>

                      {/* Bar 3: CRO */}
                      <div>
                        <div className="flex justify-between text-xs font-semibold text-brand-heading mb-1.5">
                          <span>Site Conversions & CRO</span>
                          <span>{plan.croShare}%</span>
                        </div>
                        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                          <div className="bg-cta h-full rounded-full" style={{ width: `${plan.croShare}%` }} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Recommendation Copy block */}
                  <div className="md:col-span-7">
                    <div className="flex items-start gap-2 mb-3">
                      <ClipboardCheck className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <p className="font-semibold text-brand-heading text-sm">Key Strategist Recommendation</p>
                    </div>
                    <p className="text-brand-body text-sm leading-relaxed mb-4">
                      {plan.recommendedPath} We estimate this deployment framework can generate approximately{" "}
                      <strong className="text-primary font-bold">{plan.estimatedLeads} high-conversion local leads per month</strong> once live.
                    </p>
                    <div className="bg-orange-50/40 border border-orange-100 text-brand-heading p-3 rounded-lg text-xs flex gap-2">
                      <Gift className="w-4 h-4 text-cta shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-cta">Bonus Applied:</span> Receive a free localized keyword audit valued at ₹19,999 when you request your proposal.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Progress Roadmap Timeline */}
                <p className="text-[11px] uppercase tracking-wider font-extrabold text-brand-heading mb-4 block">
                  Projected 60-Day Implementation Roadmap
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  <div className="border border-gray-100 rounded-xl p-4 bg-white shadow-xs">
                    <span className="text-[10px] uppercase font-bold text-accent tracking-widest bg-accent/5 px-2 py-0.5 rounded-md">Phase 01: Audit</span>
                    <p className="font-semibold text-brand-heading text-xs mt-2.5">Map & GBP Lock-in</p>
                    <p className="text-[11px] text-brand-body mt-1 leading-normal">Optimizing citation indexes, securing core local listing directories, and configuring analytics tracking pixels.</p>
                  </div>
                  <div className="border border-gray-100 rounded-xl p-4 bg-white shadow-xs">
                    <span className="text-[10px] uppercase font-bold text-primary tracking-widest bg-primary/5 px-2 py-0.5 rounded-md">Phase 02: Launch</span>
                    <p className="font-semibold text-brand-heading text-xs mt-2.5">Active Conversion Funnel</p>
                    <p className="text-[11px] text-brand-body mt-1 leading-normal">Building custom-coded geographic landing pages and kicking off optimized micro-budget ad campaigns.</p>
                  </div>
                  <div className="border border-gray-100 rounded-xl p-4 bg-white shadow-xs">
                    <span className="text-[10px] uppercase font-bold text-cta tracking-widest bg-cta/5 px-2 py-0.5 rounded-md font-sans">Phase 03: Scaling</span>
                    <p className="font-semibold text-brand-heading text-xs mt-2.5">Retargeting Loops</p>
                    <p className="text-[11px] text-brand-body mt-1 leading-normal">Launching aggressive remarketing, keyword expanders, negative terms pruning, and high ranking link indexing.</p>
                  </div>
                </div>

                {/* Final Booking Call-to-Action */}
                <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
                  <div>
                    <p className="text-xs text-brand-body font-medium">Ready to claim your territory?</p>
                    <p className="text-xs font-bold text-brand-heading">Lock in a live consulting demo with our strategist.</p>
                  </div>
                  <button
                    onClick={() => onQuoteClick(plan.prefilledNotes)}
                    className="bg-cta hover:bg-cta/90 text-white font-semibold text-sm py-3 px-5 rounded-lg flex items-center gap-1.5 transition-all shadow-md shadow-cta/15 cursor-pointer max-sm:w-full justify-center"
                  >
                    <PhoneCall className="w-4 h-4" />
                    Secure Free Strategy Session
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
