import { AmountMap } from "#/constants/units";
import { MeasurementsUnit } from "#/context/settings/types";
import { Ingredient } from "#/types/general";

export const calculateServings = (servings: number) => (
  ingredient: Ingredient
) => {
  return {
    ...ingredient,
    amount: ingredient.amount * servings,
  };
};

export const adjustUnits = (
  unitMap: AmountMap,
  selectedUnits: MeasurementsUnit
) => (ingredient: Ingredient) => {
  if (selectedUnits === MeasurementsUnit.Metric) {
    return ingredient;
  }

  const mappedUnit = unitMap[ingredient.unit];
  const convertedAmount = ingredient.amount * mappedUnit.value;
  return {
    ...ingredient,
    amount: convertedAmount,
    unit: mappedUnit.unit,
  };
};
