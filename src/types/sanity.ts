export interface SanityRecipe {
  _id: string;
  name: string;
  description: string;
  rating: number;
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
