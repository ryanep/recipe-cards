import Head from "next/head";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { Heading } from "#/components/heading";
import { RecipeFilters } from "#/components/recipe-filters";
import { RecipeGrid } from "#/components/recipe-grid";
import { SidebarLayout } from "#/components/sidebar-layout";
import { Spacer } from "#/components/spacer";
import { createRecipeService } from "#/services/recipe";
import { createSanityClient } from "#/utils/sanity";
import type { NextPageContext } from "next";
import type { Recipe } from "#/types/general";

interface HomeContainerProps {
  recipes: Recipe[];
}

interface HomePageContext extends NextPageContext {
  query: {
    name?: string;
    rating?: string[];
  };
}

const breadcrumbs: { title: string; url: string }[] = [];

export const HomeContainer = ({ recipes }: HomeContainerProps) => {
  const { t } = useTranslation();
  const router = useRouter();
  const initialFilterValues = {
    name: "",
    rating: [],
  };

  const handleFiltersSubmit = async (values: { rating: number[] }) => {
    await router.replace({
      pathname: "/",
      query: {
        rating: values.rating,
      },
    });
    return true;
  };

  return (
    <SidebarLayout
      breadcrumbs={breadcrumbs}
      sidebar={
        <div>
          <Heading as="h4" text={t("home:filters")} type="h2" />
          <Spacer size="medium" />
          <RecipeFilters
            initialValues={initialFilterValues}
            onSubmit={handleFiltersSubmit}
          />
        </div>
      }
    >
      <Head>
        <title>{t("home:pageTitle")}</title>
      </Head>
      <Heading as="h2" text={t("home:heading")} type="h1" />
      <Spacer size="tiny" />
      <p>{t("home:results", { count: recipes.length })}</p>
      <Spacer size="medium" />
      <RecipeGrid recipes={recipes} />
    </SidebarLayout>
  );
};

HomeContainer.getInitialProps = async (context: HomePageContext) => {
  const sanity = createSanityClient();
  const recipeService = createRecipeService(sanity);
  const recipes = await recipeService.getRecipes({
    name: context.query.name,
    rating: context.query.rating,
  });

  return {
    recipes,
  };
};
