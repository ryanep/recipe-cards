import { PrismaClient } from "@prisma/client";
import type { Prisma } from "@prisma/client";

export const factory =
  <TData>(create: (index: number) => TData) =>
  (count: number): TData[] => {
    return Array.from({ length: count }, (_, index) => create(index + 1));
  };

const createTag = (index: number): Prisma.TagCreateInput => {
  return {
    name: `Tag ${index}`,
  };
};

const createStep = (index: number): Prisma.RecipeStepCreateInput => {
  return {
    name: `Step ${index}`,
    order: index,
  };
};

const createIngredient = (
  index: number
): Prisma.RecipeIngredientCreateInput => {
  return {
    name: `Ingredient ${index}`,
    quantity: 1,
    unit: "grams",
  };
};

const createRecipe = (index: number): Prisma.RecipeCreateInput => {
  return {
    description: `Description ${index}`,
    imageUrl:
      "https://cdn.sanity.io/images/21t4zq9k/production/bbd6cebbb8990a2a002b01ba5213aa4e6e0a36e7-832x468.jpg",
    ingredients: {
      create: factory(createIngredient)(5),
    },
    name: `Recipe ${index}`,
    rating: Math.floor(Math.random() * 5) + 1,
    steps: {
      create: factory(createStep)(5),
    },
    tags: {
      create: factory(createTag)(2),
    },
  };
};

const main = async () => {
  console.info("Seeding database...");

  const prisma = new PrismaClient();

  for (let index = 0; index < 1000; index++) {
    await prisma.recipe.create({
      data: createRecipe(index),
    });
  }

  await prisma.$disconnect();
};

main()
  .then(() => {
    console.info("Database seed successful..");
  })
  .catch((error: unknown) => {
    console.error("Error seeding database.", error);
  });
