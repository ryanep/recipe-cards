import type { SanityRecipe } from "#/types/sanity";
import { formatRecipe } from "#/utils/sanity";
import type { RecipeFilters } from "./types";
import type { SanityClient } from "@sanity/client";

export const createRecipeService = (sanity: SanityClient) => {
  const getRecipes = async (filters: RecipeFilters) => {
    const nameFilter = filters.name ? `&& name match "*${filters.name}*"` : "";
    const ratingFilter = filters.rating
      ? `&& rating in [${filters.rating.join(",")}]`
      : "";

    const recipes = await sanity.fetch<SanityRecipe[]>(
      `
    *[_type == "recipe" ${ratingFilter} ${nameFilter}] {
      _id,
      name,
      description,
      ingredients,
      steps,
      rating,
      "imageUrl": imageUrl.asset->url,
      tags
    } | order(_createdAt desc)
`
    );

    return recipes.map((recipe) => formatRecipe(recipe));
  };

  const getRecipe = async (recipeId: string) => {
    const recipe = await sanity.fetch<SanityRecipe | undefined>(
      `
      *[_type == "recipe" && _id == $id]{
        _id,
        name,
        description,
        ingredients,
        steps,
        rating,
        "imageUrl": imageUrl.asset->url,
        tags
      }[0]
  `,
      { id: recipeId }
    );

    return recipe ? formatRecipe(recipe) : undefined;
  };

  return {
    getRecipe,
    getRecipes,
  };
};
