import type { MeasurementsUnit } from "#/context/settings/types";

export interface RecipeSidebarProps {
  description: string;
  imageUrl: string;
  name: string;
  onServingChange: (servings: number) => void;
  onUnitChange: (unit: MeasurementsUnit) => void;
  servings: number;
  units: MeasurementsUnit;
}
