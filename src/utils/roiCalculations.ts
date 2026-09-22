import { SimulationParameters, SimulationResults } from "../types/simulation";

export function calculateSimulation(params: SimulationParameters): SimulationResults {
  // Safe boundaries and fallbacks
  const monthlyBudget = Math.max(0, Number(params.monthlyBudget) || 0);
  const cpc = Math.max(1, Number(params.cpc) || 1); // CPC cannot be zero
  const leadConversionRate = Math.min(100, Math.max(0.1, Number(params.leadConversionRate) || 0.1));
  const closeRate = Math.min(100, Math.max(0.1, Number(params.closeRate) || 0.1));
  const customerLTV = Math.max(0, Number(params.customerLTV) || 0);

  // Exact formulas from Master Prompt:
  // clicks = monthlyBudget / CPC
  const clicks = Math.round(monthlyBudget / cpc);

  // leads = clicks * leadConversionRate (percentage)
  const leads = Math.round(clicks * (leadConversionRate / 100));

  // acquisitions = leads * closeRate (percentage)
  const acquisitions = Math.round(leads * (closeRate / 100));

  // grossPipelineValue = acquisitions * customerLTV
  const grossPipelineValue = acquisitions * customerLTV;

  // netCampaignProfit = grossPipelineValue - monthlyBudget
  const netCampaignProfit = grossPipelineValue - monthlyBudget;

  // ROI = (netCampaignProfit / monthlyBudget) * 100
  const rawRoi = monthlyBudget > 0 ? (netCampaignProfit / monthlyBudget) * 100 : 0;
  const roi = Math.round(isNaN(rawRoi) || !isFinite(rawRoi) ? 0 : rawRoi);

  // Computed metrics
  const cpl = leads > 0 ? Math.round(monthlyBudget / leads) : monthlyBudget;
  const cac = acquisitions > 0 ? Math.round(monthlyBudget / acquisitions) : monthlyBudget;
  const simulatedMonthlyIncome = Math.max(0, netCampaignProfit);

  return {
    clicks: Math.max(0, clicks),
    leads: Math.max(0, leads),
    acquisitions: Math.max(0, acquisitions),
    grossPipelineValue: Math.max(0, grossPipelineValue),
    netCampaignProfit,
    roi,
    simulatedMonthlyIncome,
    cpl,
    cac
  };
}

export interface MonthlyTrendData {
  month: string;
  revenue: number;
  profit: number;
  leads: number;
  clicks: number;
  acquisitions: number;
  roi: number;
}

export function generateProjectedTrend(params: SimulationParameters): MonthlyTrendData[] {
  const base = calculateSimulation(params);
  const months = ["M1", "M2", "M3", "M4", "M5", "M6"];
  
  // Growth multipliers reflecting real campaign maturity (campaign optimization curve)
  const multipliers = [0.7, 0.85, 1.0, 1.18, 1.35, 1.55];

  return months.map((month, idx) => {
    const mult = multipliers[idx];
    const rev = Math.round(base.grossPipelineValue * mult);
    const profit = Math.round(rev - params.monthlyBudget);
    const calculatedRoi = params.monthlyBudget > 0 ? Math.round((profit / params.monthlyBudget) * 100) : 0;

    return {
      month,
      revenue: rev,
      profit,
      leads: Math.round(base.leads * mult),
      clicks: Math.round(base.clicks * (1 + (mult - 1) * 0.5)),
      acquisitions: Math.round(base.acquisitions * mult),
      roi: calculatedRoi
    };
  });
}
