import sanityClient from "@sanity/client";
import type { SanityRecipe } from "#/types/sanity";

export const createSanityClient = () =>
  sanityClient({
    apiVersion: "2021-03-31",
    dataset: "production",
    projectId: "21t4zq9k",
    useCdn: false,
  });

export const formatRecipe = (recipe: SanityRecipe) => {
  return {
    description: recipe.description,
    id: recipe._id,
    imageUrl: recipe.imageUrl,
    ingredients: recipe.ingredients.map((ingredient) => ({
      amount: ingredient.amount,
      id: ingredient._key,
      name: ingredient.name,
      unit: ingredient.unit,
    })),
    name: recipe.name,
    rating: recipe.rating,
    steps: recipe.steps.map((step) => ({
      description: step.description,
      id: step._key,
    })),
    tags: recipe.tags
      ? recipe.tags.map((tag) => ({
          id: tag.value,
          name: tag.label,
        }))
      : [],
  };
};
