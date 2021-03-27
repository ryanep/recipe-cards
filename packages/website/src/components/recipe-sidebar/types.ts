import { MeasurementsUnit } from '#/context/settings/types';

export interface RecipeSidebarProps {
  imageUrl: string;
  name: string;
  description: string;
  servings: number;
  units: MeasurementsUnit;
  onUnitChange: (unit: MeasurementsUnit) => void;
  onServingChange: (servings: number) => void;
}
