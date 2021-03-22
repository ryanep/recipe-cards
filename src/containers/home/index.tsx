import { useRouter } from 'next/router';
import type { Breadcrumb } from '#/components/breadcrumbs/types';
import { Heading } from '#/components/heading';
import { RecipeFilters } from '#/components/recipe-filters';
import { RecipeFiltersFormValues } from '#/components/recipe-filters/types';
import { RecipeGrid } from '#/components/recipe-grid';
import { SidebarLayout } from '#/components/sidebar-layout';
import { Spacer } from '#/components/spacer';
import { SanityRecipe } from '#/types/sanity';
import { createSanityClient, formatRecipe } from '#/utils/sanity';
import type { HomeContainerProps, HomePageContext } from './types';

const breadcrumbs: Breadcrumb[] = [];

export const HomeContainer = ({ recipes }: HomeContainerProps) => {
  const router = useRouter();
  const initialFilterValues = {
    rating: [],
  };

  const handleFiltersSubmit = async (values: RecipeFiltersFormValues) => {
    router.replace({
      pathname: '/',
      query: {
        ...values,
      },
    });
    return true;
  };

  return (
    <SidebarLayout
      breadcrumbs={breadcrumbs}
      sidebar={
        <div>
          <Heading type="h2" as="h4" text="Filters" />
          <Spacer size="medium" />
          <RecipeFilters
            initialValues={initialFilterValues}
            onSubmit={handleFiltersSubmit}
          />
        </div>
      }
    >
      <Heading type="h1" as="h2" text="All recipes" />
      <Spacer size="tiny" />
      <p>Showing all {recipes.length} recipes</p>
      <Spacer size="medium" />
      <RecipeGrid recipes={recipes} />
    </SidebarLayout>
  );
};

HomeContainer.getInitialProps = async (context: HomePageContext) => {
  const ratingFilter = context.query.rating
    ? `&& rating in [${context.query.rating}]`
    : '';
  const sanity = createSanityClient();
  const recipes = await sanity.fetch<SanityRecipe[]>(
    `
    *[_type == "recipe" ${ratingFilter}] | order(_createdAt desc)
`
  );

  return {
    recipes: recipes?.map((recipe) => formatRecipe(recipe)) ?? [],
  };
};
