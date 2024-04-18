import type { NextPageContext } from "next";
import type { Recipe } from "#/types/general";

export interface HomeContainerProps {
  recipes: Recipe[];
}

export interface HomePageContext extends NextPageContext {
  query: {
    name?: string;
    rating?: string[];
  };
}
