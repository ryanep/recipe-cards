import { PrismaClient } from "@prisma/client";
import { Heading } from "#/components/heading";
import { RecipeGrid } from "#/components/recipe-grid";
import { getTranslation } from "#/i18n/server";
import type { Metadata } from "next";

const getPageData = async () => {
  const database = new PrismaClient();

  const recipes = await database.recipe.findMany({
    include: {
      ingredients: true,
      steps: true,
      tags: true,
    },
  });

  return {
    recipes,
  };
};

export const metadata: Metadata = {
  title: "Home - Recipe Cards",
};

const HomePage = async () => {
  const { t } = await getTranslation("home");
  const { recipes } = await getPageData();

  return (
    <main>
      <Heading as="h1" type="h1">
        {t("home:heading")}
      </Heading>

      <p className="mb-8 text-lg font-medium text-neutral-400">
        Showing all {recipes.length} recipes.
      </p>

      <RecipeGrid recipes={recipes} />
    </main>
  );
};

export default HomePage;
