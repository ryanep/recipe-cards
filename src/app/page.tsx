import { PrismaClient } from "@prisma/client";
import { Header } from "#/components/header";
import { Heading } from "#/components/heading";
import { RecipeGrid } from "#/components/recipe-grid";
import { getTranslation } from "#/i18n/server";

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

export const HomePage = async () => {
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
