import type { Recipe } from "#/types/general";
import type { NextPageContext } from "next";

export interface RecipeContainerProps {
  recipe: Recipe;
}

export interface RecipePageContext extends NextPageContext {
  query: {
    id: string;
  };
}
