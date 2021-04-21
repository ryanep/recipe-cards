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
import { MeasurementsUnit } from "#/context/settings/types";
import { useSettingsContext } from "#/hooks/context/settings";
import { createRecipeService } from "#/services/recipe";
import { calculateServings, adjustUnits } from "#/utils/ingredient";
import { createSanityClient } from "#/utils/sanity";
import type { RecipeContainerProps, RecipePageContext } from "./types";

export const RecipeContainer = ({ recipe }: RecipeContainerProps) => {
  const { t } = useTranslation();
  const breadcrumbs = [
    {
      title: recipe.name,
      url: `/recipe/${recipe.id}`,
    },
  ];
  const { servings, units, changeServings, changeUnits } = useSettingsContext();
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
    setSelectedStepIndex((prevIndex) =>
      prevIndex === stepIndex ? stepIndex - 1 : stepIndex
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
          imageUrl={recipe.imageUrl}
          name={recipe.name}
          description={recipe.description}
          servings={servings}
          units={units}
          onUnitChange={handleUnitChange}
          onServingChange={handleServingChange}
        />
      }
    >
      <Head>
        <title>{t("recipe:pageTitle", { name: recipe.name })}</title>
        <meta name="description" content={recipe.description} />
        <meta property="og:title" content={recipe.name} />
        <meta property="og:description" content={recipe.description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={recipe.imageUrl} />
      </Head>
      <Heading type="h2" as="h4" text={t("recipe:ingredients")} />
      <Spacer size="medium" />
      {showIngredients && (
        <Ingredients
          ingredients={adjustedIngredients}
          selectedIngredients={selectedIngredients}
          onIngredientClick={handleIngredientClick}
        />
      )}
      <Spacer size="medium" />
      <Heading type="h2" as="h4" text={t("recipe:steps")} />
      <Spacer size="medium" />
      <Steps
        steps={recipe.steps}
        selectedStepIndex={selectedStepIndex}
        onStepClick={handleStepClick}
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
