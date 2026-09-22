export interface SimulationParameters {
  monthlyBudget: number; // in INR (e.g. 50000)
  cpc: number; // in INR (e.g. 25)
  leadConversionRate: number; // percentage (e.g. 8 for 8%)
  closeRate: number; // percentage (e.g. 22 for 22%)
  customerLTV: number; // in INR (e.g. 45000)
  speed: 0.5 | 1 | 2 | 4;
}

export interface SimulationResults {
  clicks: number;
  leads: number;
  acquisitions: number;
  grossPipelineValue: number;
  netCampaignProfit: number;
  roi: number; // percentage
  simulatedMonthlyIncome: number;
  cpl: number; // Cost per lead
  cac: number; // Customer acquisition cost
}

export type CameraMode = "overview" | "pipeline" | "analytics" | "closeup";

export type SimulationStage = 
  | "traffic" 
  | "engagement" 
  | "lead" 
  | "qualification" 
  | "customer" 
  | "revenue";

export interface StageInfo {
  id: number;
  key: SimulationStage;
  label: string;
  sublabel: string;
  description: string;
  metricLabel: string;
}
