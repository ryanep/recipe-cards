import type { Ingredient } from "#/types/general";

export interface IngredientsProps {
  ingredients: Ingredient[];
  onIngredientClick: (ingredientId: string) => void;
  selectedIngredients: string[];
}
