import { LucideIcon } from "lucide-react";

export type ServiceCategory = "build" | "grow" | "reach" | "automate" | string;

export interface ServiceDetail {
  id: string;
  num: string;
  iconName: string;
  title: string;
  badge: string;
  shortDesc: string;
  problemSolved: string;
  whatWeDo: string;
  features: string[];
  capabilities: [string, string, string];
  whosItFor: string;
  ctaText: string;
  category: ServiceCategory;
  slug: string;
  group?: "build" | "grow" | "reach" | "automate";
  groupNumber?: string;
  groupTitle?: string;
  metricHighlight?: { label: string; value: string };
}

