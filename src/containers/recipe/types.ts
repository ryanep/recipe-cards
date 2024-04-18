import type { NextPageContext } from "next";
import type { Recipe } from "#/types/general";

export interface RecipeContainerProps {
  recipe: Recipe;
}

export interface RecipePageContext extends NextPageContext {
  query: {
    id: string;
  };
}
