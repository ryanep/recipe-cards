import { FullWidthLayout } from '#/components/full-width-layout';
import { Heading } from '#/components/heading';
import { RecipeGrid } from '#/components/recipe-grid';
import { Spacer } from '#/components/spacer';
import { SanityRecipe } from '#/types/sanity';
import { createSanityClient, formatRecipe } from '#/utils/sanity';
import type { HomeContainerProps } from './types';

export const HomeContainer = ({ recipes }: HomeContainerProps) => {
  return (
    <FullWidthLayout>
      <Heading type="h1" as="h2" text="All recipes" />
      <Spacer size="medium" />
      <RecipeGrid recipes={recipes} />
    </FullWidthLayout>
  );
};

HomeContainer.getInitialProps = async ({ query }: any) => {
  const sanity = createSanityClient();
  const recipes = await sanity.fetch<SanityRecipe[]>(
    `
    *[_type == "recipe"]
`
  );

  return {
    recipes: recipes.map((recipe) => formatRecipe(recipe)),
  };
};
