import { MeasurementsUnit } from '#/context/settings/types';
import { Ingredient } from '#/types/general';

interface AmountMap {
  [key: string]: {
    value: number;
    unit: string;
  };
}

const metricImperialMap: AmountMap = {
  grams: {
    value: 0.03,
    unit: 'ounce',
  },
  whole: {
    value: 1,
    unit: 'whole',
  },
  millilitres: {
    value: 0.004,
    unit: 'cups',
  },
  bunch: {
    value: 1,
    unit: 'bunch',
  },
};

export const convertScale = (
  ingredient: Ingredient,
  units: MeasurementsUnit,
  servings: number
) => {
  if (units === 'metric') {
    return {
      ...ingredient,
      amount: ingredient.amount * servings,
    };
  }

  const mappedUnit = metricImperialMap[ingredient.unit];
  const convertedAmount = ingredient.amount * mappedUnit.value * servings;
  return {
    ...ingredient,
    amount: convertedAmount,
    unit: mappedUnit.unit,
  };
};

export const calculateMeasurement = (
  amount: number,
  units: string,
  displayUnit: string
) => {
  if (displayUnit === 'metric') {
    return `${amount} ${units}`;
  }

  const mappedUnit = metricImperialMap[displayUnit];
  const convertedAmount = amount * mappedUnit.value;
  return `${convertedAmount} ${mappedUnit.unit}`;
};
