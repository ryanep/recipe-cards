export interface Ingredient {
  amount: number;
  id: string;
  name: string;
  unit: string;
}

export interface Recipe {
  description: string;
  id: string;
  imageUrl: string;
  ingredients: {
    amount: number;
    id: string;
    name: string;
    unit: string;
  }[];
  name: string;
  rating: number;
  steps: {
    description: string;
    id: string;
  }[];
  tags: {
    id: string;
    name: string;
  }[];
}
