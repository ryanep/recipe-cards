export interface IngredientsProps {
  ingredients: {
    id: string;
    name: string;
    amount: number;
    unit: string;
  }[];
  selectedIngredients: string[];
  onIngredientClick: (ingredientId: string) => void;
}

export interface IngredientStyleProps {
  isComplete: boolean;
}
