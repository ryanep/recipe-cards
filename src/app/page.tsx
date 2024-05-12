import { Heading } from "#/components/heading";
import { Pagination } from "#/components/pagination";
import { RecipeGrid } from "#/components/recipe-grid";
import { database } from "#/database";
import { getTranslation } from "#/i18n/server";
import type { Metadata } from "next";

interface HomePageProps {
  readonly searchParams: {
    page?: number;
  };
}

const getPageData = async ({ searchParams }: HomePageProps) => {
  const pageSize = 30;

  const recipes = await database.recipe.findMany({
    include: {
      ingredients: true,
      steps: true,
      tags: true,
    },
    orderBy: {
      createdAt: "asc",
    },
    skip: searchParams.page ? pageSize * searchParams.page : 0,
    take: pageSize,
  });

  const totalRecipeCount = await database.recipe.count();

  return {
    recipes,
    totalRecipeCount,
  };
};

export const getMetadata = async (): Promise<Metadata> => {
  const { t } = await getTranslation("home");

  return {
    title: t("home:pageTitle"),
  };
};

const HomePage = async ({ searchParams }: HomePageProps) => {
  const { t } = await getTranslation("home");
  const { recipes, totalRecipeCount } = await getPageData({ searchParams });

  return (
    <main>
      <Heading type="h1">{t("home:heading")}</Heading>

      <p className="mb-8 text-lg font-medium text-neutral-400">
        {t("home:results", {
          count: recipes.length,
          totalCount: totalRecipeCount,
        })}
      </p>

      <div className="mb-8">
        <RecipeGrid recipes={recipes} />
      </div>

      <Pagination
        currentPage={searchParams.page ? Number(searchParams.page) : 1}
        pageSize={recipes.length}
        totalItemCount={totalRecipeCount}
      />
    </main>
  );
};

export default HomePage;
