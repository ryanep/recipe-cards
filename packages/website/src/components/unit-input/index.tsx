import { useTranslation } from "react-i18next";
import { MeasurementsUnit } from "#/context/settings/types";
import * as styled from "./styles";
import { MeasurementUnitInputProps } from "./types";

export const MeasurementUnitInput = ({
  selectedUnit,
  onUnitChange,
}: MeasurementUnitInputProps) => {
  const { t } = useTranslation();

  return (
    <styled.Container>
      <styled.Label htmlFor="measurement-metric">
        <styled.Input
          type="radio"
          id="measurement-metric"
          name="measurement"
          checked={selectedUnit === MeasurementsUnit.Metric}
          onChange={() => onUnitChange(MeasurementsUnit.Metric)}
        />
        <styled.Name>{t("common:metric")}</styled.Name>
      </styled.Label>

      <styled.Label htmlFor="measurement-imperial">
        <styled.Input
          type="radio"
          id="measurement-imperial"
          name="measurement"
          checked={selectedUnit === MeasurementsUnit.Imperial}
          onChange={() => onUnitChange(MeasurementsUnit.Imperial)}
        />
        <styled.Name>{t("common:imperial")}</styled.Name>
      </styled.Label>
    </styled.Container>
  );
};
