import { FullWidthLayout } from '#/components/full-width-layout';
import { Ingredients } from '#/components/ingredients';
import { Spacer } from '#/components/spacer';
import { Heading } from '#/components/heading';
import { Steps } from '#/components/steps';
import { RecipeSidebar } from '#/components/recipe-sidebar';

const recipe = {
  imageUrl:
    'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/creamy_mushroom_pasta-fc7ab67.jpg',
  name: 'Creamy mushroom pasta',
  description:
    'Make this creamy mushroom pasta dish on days when you need a big bowl of comfort. Cream, parmesan, white wine, lemon zest and parsley make this a rich and flavourful dinner.',
  ingredients: [
    {
      name: 'Olive Oil',
      amount: 2,
      unit: 'tablespoon',
    },
    {
      name: 'Butter',
      amount: 1,
      unit: 'teaspoon',
    },
    {
      name: 'Onion',
      amount: 1,
      unit: 'whole',
    },
    {
      name: 'Button Chestnut Mushroom',
      amount: 250,
      unit: 'grams',
    },
    {
      name: 'Garlic Clove',
      amount: 1,
      unit: 'whole',
    },
    {
      name: 'Dry White Wine',
      amount: 100,
      unit: 'milliliters',
    },
    {
      name: 'Double Cream',
      amount: 200,
      unit: 'milliliters',
    },
    {
      name: 'Lemon',
      amount: 1,
      unit: 'whole',
    },
    {
      name: 'Parmesan',
      amount: 200,
      unit: 'grams',
    },
    {
      name: 'Tagliatelle',
      amount: 300,
      unit: 'grams',
    },
    {
      name: 'Parsley',
      amount: 0.5,
      unit: 'bunch',
    },
  ],
  steps: [
    {
      description:
        'Heat the oil and butter in a medium saucepan. Fry the onion over a low heat for 10 mins or until softened and translucent.',
    },
    {
      description:
        'Add the mushrooms and cook for 10 mins over a medium heat. Add the garlic and cook for 2 mins. Add the wine and bring to a simmer, reduce the liquid by half.',
    },
    {
      description:
        'Add the double cream and bring to a simmer, then add the lemon zest and parmesan. Season with salt and plenty of black pepper.',
    },
    {
      description:
        'Meanwhile, cook the pasta following pack instructions. Reserve 100ml of the pasta water. Toss the pasta in the pan with the creamy sauce and enough of the reserved water to loosen. Stir through the parsley, divide into bowls and top with extra cheese, if you like. ',
    },
  ],
};

export const RecipeContainer = () => {
  return (
    <FullWidthLayout
      sidebar={
        <RecipeSidebar
          imageUrl={recipe.imageUrl}
          name={recipe.name}
          description={recipe.description}
        />
      }
    >
      <Heading type="h2" as="h3" text="Ingredients" />
      <Spacer size="medium" />
      <Ingredients ingredients={recipe.ingredients} />
      <Spacer size="medium" />
      <Heading type="h2" as="h3" text="Steps" />
      <Spacer size="medium" />
      <Steps steps={recipe.steps} />
    </FullWidthLayout>
  );
};
