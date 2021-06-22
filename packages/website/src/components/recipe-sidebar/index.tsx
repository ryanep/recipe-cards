import { useTranslation } from "react-i18next";
import { Heading } from "#/components/heading";
import { ServingInput } from "#/components/serving-input";
import { Spacer } from "#/components/spacer";
import { MeasurementUnitInput } from "../unit-input";
import * as styled from "./styles";
import { RecipeSidebarProps } from "./types";

export const RecipeSidebar = ({
  imageUrl,
  name,
  description,
  servings,
  units,
  onUnitChange,
  onServingChange,
}: RecipeSidebarProps) => {
  const { t } = useTranslation();

  return (
    <div>
      <styled.Image src={`${imageUrl}?w=500`} alt={name} />
      <styled.Content>
        <styled.Name>{name}</styled.Name>
        <Spacer size="medium" />
        <styled.Description>{description}</styled.Description>
        <Spacer size="large" />
        <Heading type="h2" as="h4" text={t("common:measurement")} />
        <Spacer size="medium" />
        <MeasurementUnitInput
          selectedUnit={units}
          onUnitChange={onUnitChange}
        />
        <Spacer size="large" />
        <Heading type="h2" as="h4" text={t("common:servings")} />
        <Spacer size="medium" />
        <ServingInput
          servings={servings}
          onChange={onServingChange}
          min={1}
          max={12}
        />
      </styled.Content>
    </div>
  );
};
