import type { Recipe } from '#/containers/recipe/types';

export interface RecipeListProps {
  recipes: Recipe[];
}

export interface ContainerStyleProps {
  isVisible: boolean;
}
