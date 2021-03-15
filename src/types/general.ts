export interface Ingredient {
  id: string;
  name: string;
  amount: number;
  unit: string;
}

export interface Recipe {
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