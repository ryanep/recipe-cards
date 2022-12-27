import { useTranslation } from "react-i18next";
import { Heading } from "#/components/heading";
import { ServingInput } from "#/components/serving-input";
import { Spacer } from "#/components/spacer";
import { MeasurementUnitInput } from "../unit-input";
import * as styled from "./styles";
import type { RecipeSidebarProps } from "./types";

export const RecipeSidebar = ({
  description,
  imageUrl,
  name,
  onServingChange,
  onUnitChange,
  servings,
  units,
}: RecipeSidebarProps) => {
  const { t } = useTranslation();

  return (
    <div>
      <styled.Image alt={name} src={`${imageUrl}?w=500`} />
      <styled.Content>
        <styled.Name>{name}</styled.Name>
        <Spacer size="medium" />
        <styled.Description>{description}</styled.Description>
        <Spacer size="large" />
        <Heading as="h4" text={t("common:measurement")} type="h2" />
        <Spacer size="medium" />
        <MeasurementUnitInput
          onUnitChange={onUnitChange}
          selectedUnit={units}
        />
        <Spacer size="large" />
        <Heading as="h4" text={t("common:servings")} type="h2" />
        <Spacer size="medium" />
        <ServingInput
          max={12}
          min={1}
          onChange={onServingChange}
          servings={servings}
        />
      </styled.Content>
    </div>
  );
};
