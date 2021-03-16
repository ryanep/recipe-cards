import { Heading } from '#/components/heading';
import { RecipeGrid } from '#/components/recipe-grid';
import { SidebarLayout } from '#/components/sidebar-layout';
import { Spacer } from '#/components/spacer';
import { SanityRecipe } from '#/types/sanity';
import { createSanityClient, formatRecipe } from '#/utils/sanity';
import type { HomeContainerProps } from './types';

export const HomeContainer = ({ recipes }: HomeContainerProps) => {
  return (
    <SidebarLayout sidebar={<div>Sidebar</div>}>
      <Heading type="h1" as="h2" text="All recipes" />
      <Spacer size="tiny" />
      <p>Showing all {recipes.length} recipes</p>
      <Spacer size="medium" />
      <RecipeGrid recipes={recipes} />
    </SidebarLayout>
  );
};

HomeContainer.getInitialProps = async () => {
  const sanity = createSanityClient();
  const recipes = await sanity.fetch<SanityRecipe[]>(
    `
    *[_type == "recipe"] | order(_createdAt desc)
`
  );

  return {
    recipes: recipes.map((recipe) => formatRecipe(recipe)),
  };
};
