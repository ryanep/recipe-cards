export interface RecipeContainerProps {
  recipes: Recipe[];
  recipe: Recipe;
}

interface Recipe {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  ingredients: {
    id: string;
    name: string;
    amount: number;
    unit: string;
  }[];
  steps: {
    id: string;
    description: string;
  }[];
}

export interface SanityRecipe {
  _id: string;
  name: string;
  description: string;
  imageUrl: string;
  ingredients: {
    _key: string;
    name: string;
    amount: number;
    unit: string;
  }[];
  steps: {
    _key: string;
    description: string;
  }[];
}
