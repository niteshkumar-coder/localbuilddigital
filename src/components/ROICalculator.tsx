import { useState } from "react";
import { Calculator, ArrowRight, RotateCcw, AlertCircle } from "lucide-react";

interface ROICalculatorProps {
  onQuoteClick: (prefilledNotes?: string) => void;
}

export default function ROICalculator({ onQuoteClick }: ROICalculatorProps) {
  // Controlled input states to allow user direct editing and edge-case testing
  const [budgetStr, setBudgetStr] = useState<string>("35000");
  const [cpcStr, setCpcStr] = useState<string>("20");
  const [convRateStr, setConvRateStr] = useState<string>("6");
  const [closeRateStr, setCloseRateStr] = useState<string>("25");
  const [customerValueStr, setCustomerValueStr] = useState<string>("15000");

  // Reset to shipped defaults
  const handleReset = () => {
    setBudgetStr("35000");
    setCpcStr("20");
    setConvRateStr("6");
    setCloseRateStr("25");
    setCustomerValueStr("15000");
  };

  // Validation
  const budgetNum = Number(budgetStr.trim());
  const cpcNum = Number(cpcStr.trim());
  const convRateNum = Number(convRateStr.trim());
  const closeRateNum = Number(closeRateStr.trim());
  const customerValueNum = Number(customerValueStr.trim());

  let budgetError: string | null = null;
  if (budgetStr.trim() === "") {
    budgetError = "Budget cannot be empty.";
  } else if (isNaN(budgetNum) || budgetNum < 0) {
    budgetError = "Budget cannot be negative.";
  }

  let cpcError: string | null = null;
  if (cpcStr.trim() === "") {
    cpcError = "CPC cannot be empty.";
  } else if (isNaN(cpcNum) || cpcNum <= 0) {
    cpcError = "Cost per click must be greater than 0.";
  }

  let convRateError: string | null = null;
  if (convRateStr.trim() === "") {
    convRateError = "Conversion rate cannot be empty.";
  } else if (isNaN(convRateNum) || convRateNum <= 0) {
    convRateError = "Conversion rate must be greater than 0%.";
  } else if (convRateNum > 100) {
    convRateError = "Conversion rate cannot exceed 100%.";
  }

  let closeRateError: string | null = null;
  if (closeRateStr.trim() === "") {
    closeRateError = "Close rate cannot be empty.";
  } else if (isNaN(closeRateNum) || closeRateNum <= 0) {
    closeRateError = "Close rate must be greater than 0%.";
  } else if (closeRateNum > 100) {
    closeRateError = "Close rate cannot exceed 100%.";
  }

  let customerValueError: string | null = null;
  if (customerValueStr.trim() === "") {
    customerValueError = "Customer value cannot be empty.";
  } else if (isNaN(customerValueNum) || customerValueNum <= 0) {
    customerValueError = "Customer value must be greater than 0.";
  }

  const hasError = !!(budgetError || cpcError || convRateError || closeRateError || customerValueError);

  // Literal formulas:
  // Clicks    = Budget / CPC
  // Leads     = Clicks × Conversion Rate
  // Customers = Leads × Close Rate (rounded DOWN)
  // Revenue   = Customers × Customer Value
  // Profit    = Revenue − Budget
  // ROI       = (Profit / Budget) × 100
  let estimatedLeads = 0;
  let estimatedCustomers = 0;
  let estimatedRevenue = 0;
  let estimatedProfit = 0;
  let estimatedROI = 0;

  if (!hasError && budgetNum > 0 && cpcNum > 0) {
    const clicks = budgetNum / cpcNum;
    estimatedLeads = clicks * (convRateNum / 100);
    estimatedCustomers = Math.floor(estimatedLeads * (closeRateNum / 100));
    estimatedRevenue = Math.round(estimatedCustomers * customerValueNum);
    estimatedProfit = Math.round(estimatedRevenue - budgetNum);
    estimatedROI = Math.round((estimatedProfit / budgetNum) * 100);
  }

  const handleApply = () => {
    if (hasError) return;
    const notes = `ROI Estimate Plan:
Monthly Budget: ₹${budgetNum.toLocaleString("en-IN")}
CPC: ₹${cpcNum}
Conversion Rate: ${convRateNum}%
Close Rate: ${closeRateNum}%
Customer Value: ₹${customerValueNum.toLocaleString("en-IN")}
Est. Leads: ${Math.round(estimatedLeads)}
Est. Customers: ${estimatedCustomers}
Est. Revenue: ₹${estimatedRevenue.toLocaleString("en-IN")}
Est. ROI: ${estimatedROI}%`;
    onQuoteClick(notes);
  };

  return (
    <section id="roi" className="py-16 sm:py-24 bg-[#EBF1FA] border-b border-[#DDE3EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white border border-[#DDE3EC] text-[#263044] text-xs font-semibold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5 text-[#3157D5]" />
            <span>Interactive Tool</span>
          </div>

          <h2 className="font-display font-extrabold text-2xl sm:text-4xl lg:text-5xl text-[#263044] tracking-tight leading-[1.15] mb-3">
            Commercial Marketing ROI Calculator
          </h2>

          <p className="text-base sm:text-lg text-[#667085] leading-relaxed max-w-2xl">
            Test your budget assumptions to estimate the revenue and customer volume needed to make your local marketing profitable.
          </p>

          <p className="text-xs text-[#667085] font-medium mt-3">
            * Illustrative estimate — actual results vary based on competition and sales conversion.
          </p>
        </div>

        {/* 2-Column Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Inputs Column (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-[#DDE3EC] p-6 sm:p-8 space-y-6 shadow-2xs">
            <div className="flex items-center justify-between pb-3 border-b border-[#DDE3EC]">
              <span className="font-display font-bold text-base text-[#263044]">
                Campaign Inputs
              </span>
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 text-xs text-[#667085] hover:text-[#263044] transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            </div>

            {/* Field 1: Monthly Ad Budget */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-xs sm:text-sm font-semibold text-[#263044]">
                <label htmlFor="roi-field-budget">Monthly Ad Budget</label>
                <div className="flex items-center gap-1">
                  <span className="text-[#667085] text-xs">₹</span>
                  <input
                    id="roi-field-budget"
                    type="number"
                    value={budgetStr}
                    onChange={(e) => setBudgetStr(e.target.value)}
                    className={`w-28 px-2 py-1 text-right font-mono font-bold text-sm rounded border ${
                      budgetError ? "border-red-500 bg-red-50/30 text-red-700" : "border-[#DDE3EC] text-[#3157D5]"
                    }`}
                  />
                </div>
              </div>
              <input
                type="range"
                min="5000"
                max="250000"
                step="5000"
                value={budgetNum > 0 ? budgetNum : 35000}
                onChange={(e) => setBudgetStr(e.target.value)}
                className="w-full accent-[#3157D5] cursor-pointer"
              />
              {budgetError && (
                <p className="text-xs text-red-600 flex items-center gap-1 mt-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{budgetError}</span>
                </p>
              )}
            </div>

            {/* Field 2: Estimated Cost Per Click (CPC) */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-xs sm:text-sm font-semibold text-[#263044]">
                <label htmlFor="roi-field-cpc">Estimated Cost Per Click (CPC)</label>
                <div className="flex items-center gap-1">
                  <span className="text-[#667085] text-xs">₹</span>
                  <input
                    id="roi-field-cpc"
                    type="number"
                    value={cpcStr}
                    onChange={(e) => setCpcStr(e.target.value)}
                    className={`w-24 px-2 py-1 text-right font-mono font-bold text-sm rounded border ${
                      cpcError ? "border-red-500 bg-red-50/30 text-red-700" : "border-[#DDE3EC] text-[#263044]"
                    }`}
                  />
                </div>
              </div>
              <input
                type="range"
                min="5"
                max="100"
                step="1"
                value={cpcNum > 0 ? cpcNum : 20}
                onChange={(e) => setCpcStr(e.target.value)}
                className="w-full accent-[#3157D5] cursor-pointer"
              />
              {cpcError && (
                <p className="text-xs text-red-600 flex items-center gap-1 mt-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{cpcError}</span>
                </p>
              )}
            </div>

            {/* Field 3: Website Conversion Rate */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-xs sm:text-sm font-semibold text-[#263044]">
                <label htmlFor="roi-field-conv">Website Conversion Rate (Visitors to Leads)</label>
                <div className="flex items-center gap-1">
                  <input
                    id="roi-field-conv"
                    type="number"
                    step="0.5"
                    value={convRateStr}
                    onChange={(e) => setConvRateStr(e.target.value)}
                    className={`w-20 px-2 py-1 text-right font-mono font-bold text-sm rounded border ${
                      convRateError ? "border-red-500 bg-red-50/30 text-red-700" : "border-[#DDE3EC] text-[#263044]"
                    }`}
                  />
                  <span className="text-[#667085] text-xs">%</span>
                </div>
              </div>
              <input
                type="range"
                min="1"
                max="20"
                step="0.5"
                value={convRateNum > 0 && convRateNum <= 100 ? convRateNum : 6}
                onChange={(e) => setConvRateStr(e.target.value)}
                className="w-full accent-[#3157D5] cursor-pointer"
              />
              {convRateError && (
                <p className="text-xs text-red-600 flex items-center gap-1 mt-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{convRateError}</span>
                </p>
              )}
            </div>

            {/* Field 4: Lead-to-Customer Close Rate */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-xs sm:text-sm font-semibold text-[#263044]">
                <label htmlFor="roi-field-close">Lead-to-Customer Close Rate</label>
                <div className="flex items-center gap-1">
                  <input
                    id="roi-field-close"
                    type="number"
                    step="1"
                    value={closeRateStr}
                    onChange={(e) => setCloseRateStr(e.target.value)}
                    className={`w-20 px-2 py-1 text-right font-mono font-bold text-sm rounded border ${
                      closeRateError ? "border-red-500 bg-red-50/30 text-red-700" : "border-[#DDE3EC] text-[#263044]"
                    }`}
                  />
                  <span className="text-[#667085] text-xs">%</span>
                </div>
              </div>
              <input
                type="range"
                min="5"
                max="60"
                step="1"
                value={closeRateNum > 0 && closeRateNum <= 100 ? closeRateNum : 25}
                onChange={(e) => setCloseRateStr(e.target.value)}
                className="w-full accent-[#3157D5] cursor-pointer"
              />
              {closeRateError && (
                <p className="text-xs text-red-600 flex items-center gap-1 mt-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{closeRateError}</span>
                </p>
              )}
            </div>

            {/* Field 5: Average Value Per Customer */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-xs sm:text-sm font-semibold text-[#263044]">
                <label htmlFor="roi-field-val">Average Value Per Customer</label>
                <div className="flex items-center gap-1">
                  <span className="text-[#667085] text-xs">₹</span>
                  <input
                    id="roi-field-val"
                    type="number"
                    value={customerValueStr}
                    onChange={(e) => setCustomerValueStr(e.target.value)}
                    className={`w-28 px-2 py-1 text-right font-mono font-bold text-sm rounded border ${
                      customerValueError ? "border-red-500 bg-red-50/30 text-red-700" : "border-[#DDE3EC] text-[#263044]"
                    }`}
                  />
                </div>
              </div>
              <input
                type="range"
                min="1000"
                max="100000"
                step="1000"
                value={customerValueNum > 0 ? customerValueNum : 15000}
                onChange={(e) => setCustomerValueStr(e.target.value)}
                className="w-full accent-[#3157D5] cursor-pointer"
              />
              {customerValueError && (
                <p className="text-xs text-red-600 flex items-center gap-1 mt-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{customerValueError}</span>
                </p>
              )}
            </div>

          </div>

          {/* Output Panel (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-[#0B1633] text-white border border-[#071126] shadow-xl">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#7C8CFF] block mb-6">
                Calculated Projection
              </span>

              {hasError ? (
                <div className="p-4 rounded-xl bg-red-950/40 border border-red-800 text-xs text-red-200 mb-6">
                  Please resolve the input errors on the left to calculate your campaign projection.
                </div>
              ) : (
                <div className="space-y-4 mb-6">
                  {/* Estimated Leads */}
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <span className="text-xs text-zinc-300">Estimated Leads</span>
                    <span className="font-display font-extrabold text-2xl text-white">
                      {Math.round(estimatedLeads)}
                    </span>
                  </div>

                  {/* Estimated Customers */}
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <span className="text-xs text-zinc-300">Estimated Customers</span>
                    <span className="font-display font-extrabold text-2xl text-white">
                      {estimatedCustomers}
                    </span>
                  </div>

                  {/* Estimated Revenue */}
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <span className="text-xs text-zinc-300">Estimated Revenue</span>
                    <span className="font-display font-extrabold text-2xl sm:text-3xl text-emerald-400 font-mono">
                      ₹{estimatedRevenue.toLocaleString("en-IN")}
                    </span>
                  </div>

                  {/* Estimated ROI */}
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                    <div className="flex items-center justify-between text-xs text-zinc-300">
                      <span>Estimated ROI</span>
                      <span className="font-mono font-bold text-emerald-400">
                        {estimatedProfit >= 0 ? `+₹${estimatedProfit.toLocaleString("en-IN")} profit` : `-₹${Math.abs(estimatedProfit).toLocaleString("en-IN")} loss`}
                      </span>
                    </div>
                    <div className="font-display font-extrabold text-3xl sm:text-4xl text-white">
                      {estimatedROI}%
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-white/10">
              <button
                type="button"
                disabled={hasError}
                onClick={handleApply}
                className="w-full h-[52px] px-4 rounded-md font-bold text-xs sm:text-sm text-white bg-[#3157D5] hover:bg-[#2546B8] active:bg-[#1E3A8A] disabled:opacity-50 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs uppercase tracking-wide"
              >
                <span>Plan Campaign With These Numbers</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
