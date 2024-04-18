export type AmountMap = Record<
  string,
  {
    unit: string;
    value: number;
  }
>;

export const metricImperialMap: AmountMap = {
  bunch: {
    unit: "bunch",
    value: 1,
  },
  grams: {
    unit: "ounce",
    value: 0.03,
  },
  millilitres: {
    unit: "cup",
    value: 0.004,
  },
  tablespoon: {
    unit: "tablespoon",
    value: 1,
  },
  teaspoon: {
    unit: "teaspoon",
    value: 1,
  },
  whole: {
    unit: "whole",
    value: 1,
  },
};
