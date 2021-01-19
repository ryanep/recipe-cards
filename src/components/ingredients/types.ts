export interface IngredientsProps {
  ingredients: {
    id: string;
    name: string;
    amount: number;
    unit: string;
  }[];
}

export interface IngredientStyleProps {
  isComplete: boolean;
}
