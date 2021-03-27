import { NextPageContext } from 'next';
import { Recipe } from '#/types/general';

export interface HomeContainerProps {
  recipes: Recipe[];
}

export interface HomePageContext extends NextPageContext {
  query: {
    rating?: string[];
  };
}
