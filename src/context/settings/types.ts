import type { ReactNode } from "react";

export interface SettingsProviderProps {
  children: ReactNode;
}

export interface SettingsProviderContext {
  changeServings: (servings: number) => void;
  changeUnits: (units: MeasurementsUnit) => void;
  servings: number;
  units: MeasurementsUnit;
}

export enum MeasurementsUnit {
  Imperial = "imperial",
  Metric = "metric",
}
