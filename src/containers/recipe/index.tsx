import { useState } from 'react';
import { FullWidthLayout } from '#/components/full-width-layout';
import { Heading } from '#/components/heading';
import { Ingredients } from '#/components/ingredients';
import { RecipeSidebar } from '#/components/recipe-sidebar';
import { Spacer } from '#/components/spacer';
import { Steps } from '#/components/steps';
import { useSettingsContext } from '#/hooks/context/settings';
import { calculateQuantity } from '#/utils/ingredient';

const recipe = {
  imageUrl:
    'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/creamy_mushroom_pasta-fc7ab67.jpg',
  name: 'Creamy mushroom pasta',
  description:
    'Make this creamy mushroom pasta dish on days when you need a big bowl of comfort. Cream, parmesan, white wine, lemon zest and parsley make this a rich and flavourful dinner.',
  ingredients: [
    {
      id: '1',
      name: 'Olive Oil',
      amount: 2,
      unit: 'tablespoon',
    },
    {
      id: '2',
      name: 'Butter',
      amount: 1,
      unit: 'teaspoon',
    },
    {
      id: '3',
      name: 'Onion',
      amount: 1,
      unit: 'whole',
    },
    {
      id: '4',
      name: 'Button Chestnut Mushroom',
      amount: 250,
      unit: 'grams',
    },
    {
      id: '5',
      name: 'Garlic Clove',
      amount: 1,
      unit: 'whole',
    },
    {
      id: '6',
      name: 'Dry White Wine',
      amount: 100,
      unit: 'milliliters',
    },
    {
      id: '7',
      name: 'Double Cream',
      amount: 200,
      unit: 'milliliters',
    },
    {
      id: '8',
      name: 'Lemon',
      amount: 1,
      unit: 'whole',
    },
    {
      id: '9',
      name: 'Parmesan',
      amount: 200,
      unit: 'grams',
    },
    {
      id: '10',
      name: 'Tagliatelle',
      amount: 300,
      unit: 'grams',
    },
    {
      id: '11',
      name: 'Parsley',
      amount: 0.5,
      unit: 'bunch',
    },
  ],
  steps: [
    {
      id: '1',
      description:
        'Heat the oil and butter in a medium saucepan. Fry the onion over a low heat for 10 mins or until softened and translucent.',
    },
    {
      id: '2',
      description:
        'Add the mushrooms and cook for 10 mins over a medium heat. Add the garlic and cook for 2 mins. Add the wine and bring to a simmer, reduce the liquid by half.',
    },
    {
      id: '3',
      description:
        'Add the double cream and bring to a simmer, then add the lemon zest and parmesan. Season with salt and plenty of black pepper.',
    },
    {
      id: '4',
      description:
        'Meanwhile, cook the pasta following pack instructions. Reserve 100ml of the pasta water. Toss the pasta in the pan with the creamy sauce and enough of the reserved water to loosen. Stir through the parsley, divide into bowls and top with extra cheese, if you like. ',
    },
  ],
};

export const RecipeContainer = () => {
  const { servings, changeServings } = useSettingsContext();
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [selectedStepIndex, setSelectedStepIndex] = useState<number>(-1);
  const adjustedIngredients = recipe.ingredients.map((ingredient) => {
    return {
      ...ingredient,
      amount: calculateQuantity(ingredient.amount, servings),
    };
  });

  const handleIngredientClick = (ingredientId: string) => {
    if (!selectedIngredients.includes(ingredientId)) {
      setSelectedIngredients((ingredients) => [...ingredients, ingredientId]);
      return;
    }

    setSelectedIngredients((ingredients) =>
      ingredients.filter((ingredient) => ingredient !== ingredientId)
    );
  };

  const handleStepClick = (stepIndex: number) => {
    setSelectedStepIndex((prevIndex) =>
      prevIndex === stepIndex ? stepIndex - 1 : stepIndex
    );
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
          onServingChange={handleServingChange}
        />
      }
    >
      <Heading type="h2" as="h3" text="Ingredients" />
      <Spacer size="medium" />
      <Ingredients
        ingredients={adjustedIngredients}
        selectedIngredients={selectedIngredients}
        onIngredientClick={handleIngredientClick}
      />
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
