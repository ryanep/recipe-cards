import { NextPageContext } from 'next';
import { Recipe } from '#/types/general';

export interface HomeContainerProps {
  recipes: Recipe[];
}

export type HomePageContext = NextPageContext & {
  query: {
    rating?: string[];
  };
};
