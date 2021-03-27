import { ReactNode } from "react";

export interface SettingsProviderProps {
  children: ReactNode;
}

export interface SettingsProviderContext {
  servings: number;
  units: MeasurementsUnit;
  changeUnits: (units: MeasurementsUnit) => void;
  changeServings: (servings: number) => void;
}

export type MeasurementsUnit = "metric" | "imperial";
