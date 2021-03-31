import sanityClient from "@sanity/client";
import type { SanityRecipe } from "#/types/sanity";

export const createSanityClient = () =>
  sanityClient({
    projectId: "21t4zq9k",
    dataset: "production",
    apiVersion: "2021-03-31",
    useCdn: false,
  });

export const formatRecipe = (recipe: SanityRecipe) => {
  return {
    id: recipe._id,
    name: recipe.name,
    description: recipe.description,
    rating: recipe.rating,
    imageUrl: recipe.imageUrl,
    tags: recipe.tags.map((tag) => ({
      id: tag.value,
      name: tag.label,
    })),
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
