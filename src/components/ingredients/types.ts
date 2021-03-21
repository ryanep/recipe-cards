import { Ingredient } from '#/types/general';

export interface IngredientsProps {
  ingredients: Ingredient[];
  selectedIngredients: string[];
  onIngredientClick: (ingredientId: string) => void;
}
