import { useTranslation } from "react-i18next";
import { MeasurementsUnit } from "#/context/settings/types";
import * as styled from "./styles";

interface MeasurementUnitInputProps {
  readonly onUnitChange: (unit: MeasurementsUnit) => void;
  readonly selectedUnit: MeasurementsUnit;
}

export const MeasurementUnitInput = ({
  onUnitChange,
  selectedUnit,
}: MeasurementUnitInputProps) => {
  const { t } = useTranslation();

  return (
    <styled.Container>
      <styled.Label htmlFor="measurement-metric">
        <styled.Input
          checked={selectedUnit === MeasurementsUnit.Metric}
          id="measurement-metric"
          name="measurement"
          onChange={() => {
            onUnitChange(MeasurementsUnit.Metric);
          }}
          type="radio"
        />
        <styled.Name>{t("common:metric")}</styled.Name>
      </styled.Label>

      <styled.Label htmlFor="measurement-imperial">
        <styled.Input
          checked={selectedUnit === MeasurementsUnit.Imperial}
          id="measurement-imperial"
          name="measurement"
          onChange={() => {
            onUnitChange(MeasurementsUnit.Imperial);
          }}
          type="radio"
        />
        <styled.Name>{t("common:imperial")}</styled.Name>
      </styled.Label>
    </styled.Container>
  );
};
