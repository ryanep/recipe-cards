import sanityClient from '@sanity/client';
import type { SanityRecipe } from '#/types/sanity';

export const createSanityClient = () =>
  sanityClient({
    projectId: '21t4zq9k',
    dataset: 'production',
    useCdn: false,
  });

export const formatRecipe = (recipe: SanityRecipe) => {
  return {
    id: recipe._id,
    name: recipe.name,
    description: recipe.description,
    rating: recipe.rating,
    imageUrl: recipe.imageUrl,
    ingredients: recipe.ingredients.map((ingredient) => ({
      id: ingredient._key,
      name: ingredient.name,
      amount: ingredient.amount,
      unit: ingredient.unit,
    })),
    steps: recipe.steps.map((step) => ({
      id: step._key,
      description: step.description,
    })),
  };
};
