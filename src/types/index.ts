import { IconType } from 'react-icons';

export interface Metric {
  title: string;
  value: string | number;
  change: string;
  isPositive: boolean;
  icon: IconType;
}

export interface PipelineStage {
  id: string;
  name: string;
  status: 'active' | 'completed' | 'error' | 'waiting';
  itemsProcessed: number;
  totalItems: number;
  latency: string;
}

export interface LogEntry {
  id: string;
  timestamp: string;
  source: 'TIME_TRACKING' | 'FINANCE' | 'PAYROLL' | 'HRIS' | 'SAP' | 'BENEFITS' | 'WORKFORCE_MGMT';
  table: string;
  message: string;
  status: 'success' | 'error' | 'warning';
}

// Helper for display-friendly source names
export const SOURCE_DISPLAY_NAMES: Record<LogEntry['source'], string> = {
  TIME_TRACKING: 'Time Tracking',
  FINANCE: 'Finance',
  PAYROLL: 'Payroll',
  HRIS: 'HRIS',
  SAP: 'SAP',
  BENEFITS: 'Benefits',
  WORKFORCE_MGMT: 'Workforce Management'
} as const;

export enum ChartPeriod {
  HOURLY = 'Hourly',
  DAILY = 'Daily',
  WEEKLY = 'Weekly'
}
