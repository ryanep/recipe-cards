import { useState } from 'react';
import { FullWidthLayout } from '#/components/full-width-layout';
import { Heading } from '#/components/heading';
import { Ingredients } from '#/components/ingredients';
import { RecipeSidebar } from '#/components/recipe-sidebar';
import { Spacer } from '#/components/spacer';
import { Steps } from '#/components/steps';
import { MeasurementsUnit } from '#/context/settings/types';
import { useSettingsContext } from '#/hooks/context/settings';
import { convertScale } from '#/utils/ingredient';
import { createSanityClient } from '#/utils/sanity';

// const recipe = {
//   imageUrl:
//     'https://www.foodiecrush.com/wp-content/uploads/2018/12/Sesame-Soba-Noodles-foodiecrush.com-015-683x1024.jpg',
//   name: 'Sesame Soba Noodles',
//   description:
//     'This Japanese Sesame Soba Noodles recipe makes a simple Asian side dish or easy main meal that can be served hot or cold, and is on the table in 20 minutes or less.',
//   ingredients: [
//     {
//       id: '1',
//       name: 'Buckwheat Noodles',
//       amount: 50,
//       unit: 'grams',
//     },
//     {
//       id: '2',
//       name: 'Soy Sauce',
//       amount: 15,
//       unit: 'millilitres',
//     },
//     {
//       id: '3',
//       name: 'Rice Vinegar',
//       amount: 5,
//       unit: 'millilitres',
//     },
//     {
//       id: '4',
//       name: 'Sesame Oil',
//       amount: 8,
//       unit: 'millilitres',
//     },
//     {
//       id: '5',
//       name: 'Freshly Ground Pepper',
//       amount: 0.25,
//       unit: 'grams',
//     },
//     {
//       id: '6',
//       name: 'Sugar',
//       amount: 1,
//       unit: 'grams',
//     },
//     {
//       id: '7',
//       name: 'Canola Oil',
//       amount: 2.5,
//       unit: 'millilitres',
//     },
//     {
//       id: '8',
//       name: 'Onion (Chopped)',
//       amount: 40,
//       unit: 'grams',
//     },
//     {
//       id: '9',
//       name: 'Onion (Minced)',
//       amount: 10,
//       unit: 'grams',
//     },
//     {
//       id: '10',
//       name: 'Sesame Seeds',
//       amount: 45,
//       unit: 'grams',
//     },
//   ],
//   steps: [
//     {
//       id: '1',
//       description:
//         "Bring a large pot of water to a boil and cook the soba noodles for 4-5 minutes or just until tender, stirring occasionally so the noodles don't clump. Drain in a colander and rinse well under cold water, tossing to remove the starch.",
//     },
//     {
//       id: '2',
//       description:
//         'While the noodles are cooking, in a medium bowl, whisk together the soy sauce, sesame oil, rice vinegar, sugar and black pepper. Set aside.',
//     },
//     {
//       id: '3',
//       description:
//         'Heat a large skillet over medium high heat. Add the canola oil and heat until shimmering then add the chopped green onions. Cook, stirring, for 15 to 30 seconds or until fragrant.',
//     },
//     {
//       id: '4',
//       description:
//         'Add the soy and sesame mixture and cook for 30 seconds, Add the noodles and toss until the noodles are heated through. Add the remaining minced green onion and half of the sesame seeds. Garnish with the remaining seeds and serve warm or at room temperature.',
//     },
//   ],
// };

export const RecipeContainer = ({ recipe }: any) => {
  const { servings, units, changeServings, changeUnits } = useSettingsContext();
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [selectedStepIndex, setSelectedStepIndex] = useState<number>(-1);
  const [showIngredients, setShowIngredients] = useState(true);
  const adjustedIngredients = recipe.ingredients.map((ingredient) => {
    return convertScale(ingredient, units, servings);
  });

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
    <FullWidthLayout
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
      <Heading type="h2" as="h3" text="Ingredients" />
      <Spacer size="medium" />
      {showIngredients && (
        <Ingredients
          ingredients={adjustedIngredients}
          selectedIngredients={selectedIngredients}
          onIngredientClick={handleIngredientClick}
        />
      )}
      <Spacer size="medium" />
      <Heading type="h2" as="h3" text="Steps" />
      <Spacer size="medium" />
      <Steps
        steps={recipe.steps}
        selectedStepIndex={selectedStepIndex}
        onStepClick={handleStepClick}
      />
    </FullWidthLayout>
  );
};

interface SanityRecipe {
  _id: string;
  ingredients: {
    _key: string;
    name: string;
    amount: number;
    unit: string;
  }[];
  steps: {
    _key: string;
    description: string;
  }[];
}

RecipeContainer.getInitialProps = async ({ query }: any) => {
  const sanity = createSanityClient();
  const sanityRecipe = await sanity.fetch<SanityRecipe>(
    `
    *[_type == "recipe" && _id == $id][0]
`,
    { id: query.id }
  );

  const recipe = {
    id: sanityRecipe._id,
    ingredients: sanityRecipe.ingredients.map((ingredient) => ({
      id: ingredient._key,
      name: ingredient.name,
      amount: ingredient.amount,
      unit: ingredient.unit,
    })),
    steps: sanityRecipe.steps.map((step) => ({
      id: step._key,
      description: step.description,
    })),
  };

  return {
    recipe,
  };
};
