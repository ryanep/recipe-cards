import type { MeasurementsUnit } from "#/context/settings/types";

export interface MeasurementUnitInputProps {
  onUnitChange: (unit: MeasurementsUnit) => void;
  selectedUnit: MeasurementsUnit;
}
