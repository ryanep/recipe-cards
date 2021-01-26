import { MeasurementsUnit } from '#/context/settings/types';

export interface MeasurementUnitInputProps {
  selectedUnit: MeasurementsUnit;
  onUnitChange: (unit: MeasurementsUnit) => void;
}
