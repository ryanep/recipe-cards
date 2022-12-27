import type { Recipe } from "#/types/general";
import type { NextPageContext } from "next";

export interface HomeContainerProps {
  recipes: Recipe[];
}

export interface HomePageContext extends NextPageContext {
  query: {
    name?: string;
    rating?: string[];
  };
}
