export interface AmountMap {
  [key: string]: {
    value: number;
    unit: string;
  };
}

export const metricImperialMap: AmountMap = {
  grams: {
    value: 0.03,
    unit: "ounce",
  },
  whole: {
    value: 1,
    unit: "whole",
  },
  millilitres: {
    value: 0.004,
    unit: "cup",
  },
  bunch: {
    value: 1,
    unit: "bunch",
  },
  tablespoon: {
    value: 1,
    unit: "tablespoon",
  },
  teaspoon: {
    value: 1,
    unit: "teaspoon",
  },
};
