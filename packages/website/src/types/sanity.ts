export interface SanityRecipe {
  _id: string;
  description: string;
  imageUrl: string;
  ingredients: {
    _key: string;
    amount: number;
    name: string;
    unit: string;
  }[];
  name: string;
  rating: number;
  steps: {
    _key: string;
    description: string;
  }[];
  tags: {
    label: string;
    value: string;
  }[];
}
