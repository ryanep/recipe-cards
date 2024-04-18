import Head from "next/head";
import { pipe } from "ramda";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Heading } from "#/components/heading";
import { Ingredients } from "#/components/ingredients";
import { RecipeSidebar } from "#/components/recipe-sidebar";
import { SidebarLayout } from "#/components/sidebar-layout";
import { Spacer } from "#/components/spacer";
import { Steps } from "#/components/steps";
import { metricImperialMap } from "#/constants/units";
import { useSettingsContext } from "#/hooks/context/settings";
import { createRecipeService } from "#/services/recipe";
import { adjustUnits, calculateServings } from "#/utils/ingredient";
import { createSanityClient } from "#/utils/sanity";
import type { MeasurementsUnit } from "#/context/settings/types";

import type { NextPageContext } from "next";
import type { Recipe } from "#/types/general";

interface RecipeContainerProps {
  recipe: Recipe;
}

interface RecipePageContext extends NextPageContext {
  query: {
    id: string;
  };
}

export const RecipeContainer = ({ recipe }: RecipeContainerProps) => {
  const { t } = useTranslation();
  const breadcrumbs = [
    {
      title: recipe.name,
      url: `/recipe/${recipe.id}`,
    },
  ];
  const { changeServings, changeUnits, servings, units } = useSettingsContext();
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [selectedStepIndex, setSelectedStepIndex] = useState<number>(-1);
  const [showIngredients, setShowIngredients] = useState(true);
  const adjustedIngredients = recipe.ingredients.map((ingredient) =>
    pipe(
      calculateServings(servings),
      adjustUnits(metricImperialMap, units)
    )(ingredient)
  );

  const handleIngredientClick = (ingredientId: string) => {
    if (!selectedIngredients.includes(ingredientId)) {
      const newSelectedIngredients = [...selectedIngredients, ingredientId];
      setSelectedIngredients(newSelectedIngredients);
      if (newSelectedIngredients.length === adjustedIngredients.length) {
        setShowIngredients(false);
      }
      return;
    }

    const ingredients = selectedIngredients.filter(
      (ingredient) => ingredient !== ingredientId
    );
    setSelectedIngredients(ingredients);
  };

  const handleStepClick = (stepIndex: number) => {
    setSelectedStepIndex((previousIndex) =>
      previousIndex === stepIndex ? stepIndex - 1 : stepIndex
    );
  };

  const handleUnitChange = (unit: MeasurementsUnit) => {
    changeUnits(unit);
  };

  const handleServingChange = (servingCount: number) => {
    changeServings(servingCount);
  };

  return (
    <SidebarLayout
      breadcrumbs={breadcrumbs}
      sidebar={
        <RecipeSidebar
          description={recipe.description}
          imageUrl={recipe.imageUrl}
          name={recipe.name}
          onServingChange={handleServingChange}
          onUnitChange={handleUnitChange}
          servings={servings}
          units={units}
        />
      }
    >
      <Head>
        <title>{t("recipe:pageTitle", { name: recipe.name })}</title>
        <meta content={recipe.description} name="description" />
        <meta content={recipe.name} property="og:title" />
        <meta content={recipe.description} property="og:description" />
        <meta content="website" property="og:type" />
        <meta content={recipe.imageUrl} property="og:image" />
      </Head>
      <Heading as="h4" text={t("recipe:ingredients")} type="h2" />
      <Spacer size="medium" />
      {showIngredients ? (
        <Ingredients
          ingredients={adjustedIngredients}
          onIngredientClick={handleIngredientClick}
          selectedIngredients={selectedIngredients}
        />
      ) : null}
      <Spacer size="medium" />
      <Heading as="h4" text={t("recipe:steps")} type="h2" />
      <Spacer size="medium" />
      <Steps
        onStepClick={handleStepClick}
        selectedStepIndex={selectedStepIndex}
        steps={recipe.steps}
      />
    </SidebarLayout>
  );
};

RecipeContainer.getInitialProps = async ({ query }: RecipePageContext) => {
  const sanity = createSanityClient();
  const recipeService = createRecipeService(sanity);
  const recipe = await recipeService.getRecipe(query.id);

  return {
    recipe,
  };
};
