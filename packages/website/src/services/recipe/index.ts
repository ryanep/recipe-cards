import type { SanityClient } from '@sanity/client';
import { SanityRecipe } from '#/types/sanity';
import { formatRecipe } from '#/utils/sanity';
import type { RecipeFilters } from './types';

export const createRecipeService = (sanity: SanityClient) => {
  const getRecipes = async (filters: RecipeFilters) => {
    const ratingFilter = filters.rating
      ? `&& rating in [${filters.rating}]`
      : '';

    const recipes = await sanity.fetch<SanityRecipe[]>(
      `
    *[_type == "recipe" ${ratingFilter}] {
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
    getRecipes,
    getRecipe,
  };
};
