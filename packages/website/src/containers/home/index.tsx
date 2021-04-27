import Head from "next/head";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import type { Breadcrumb } from "#/components/breadcrumbs/types";
import { Heading } from "#/components/heading";
import { RecipeFilters } from "#/components/recipe-filters";
import { RecipeFiltersFormValues } from "#/components/recipe-filters/types";
import { RecipeGrid } from "#/components/recipe-grid";
import { SidebarLayout } from "#/components/sidebar-layout";
import { Spacer } from "#/components/spacer";
import { createRecipeService } from "#/services/recipe";
import { createSanityClient } from "#/utils/sanity";
import type { HomeContainerProps, HomePageContext } from "./types";

const breadcrumbs: Breadcrumb[] = [];

export const HomeContainer = ({ recipes }: HomeContainerProps) => {
  const { t } = useTranslation();
  const router = useRouter();
  const initialFilterValues = {
    name: "",
    rating: [],
  };

  const handleFiltersSubmit = async (values: RecipeFiltersFormValues) => {
    router.replace({
      pathname: "/",
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
          <Heading type="h2" as="h4" text={t("home:filters")} />
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
      <Heading type="h1" as="h2" text={t("home:heading")} />
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