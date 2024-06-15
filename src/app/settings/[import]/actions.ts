"use server";
import os from "node:os";
import { z } from "zod";
import { database } from "#/database";

// sanity.imageAsset
// system.retention
// system.group

const sanityRecipeSchema = z.object({
  _createdAt: z.string(),
  _id: z.string(),
  _rev: z.string(),
  _type: z.literal("recipe"),
  _updatedAt: z.string(),
  description: z.string(),
  imageUrl: z.object({
    _type: z.literal("image"),
    asset: z.object({
      _ref: z.string(),
      _type: z.literal("reference"),
    }),
  }),
  ingredients: z.array(
    z.object({
      _key: z.string(),
      _type: z.string(),
      amount: z.number(),
      name: z.string(),
      unit: z.string(),
    })
  ),
  name: z.string(),
  rating: z.number(),
  steps: z.array(
    z.object({
      _key: z.string(),
      _type: z.literal("step"),
      description: z.string(),
    })
  ),
  tags: z.array(
    z.object({
      _key: z.string(),
      label: z.string(),
      value: z.string(),
    })
  ),
});

export const importAction = async (formData: FormData) => {
  const file = formData.get("file") as File | undefined;

  if (!file) {
    throw new Error("File is required.");
  }

  const fileContent = await file.text();

  const sanityDocuments = fileContent
    .trim()
    .split(os.EOL)
    .filter(Boolean)
    .map((item) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return JSON.parse(item);
    })
    .filter((item) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      return item._type === "recipe";
    })
    .map((item) => {
      return sanityRecipeSchema.parse(item);
    });

  for (const recipe of sanityDocuments) {
    await database.recipe.create({
      data: {
        createdAt: recipe._createdAt,
        description: recipe.description,
        imageUrl: recipe.imageUrl.asset._ref,
        ingredients: {
          create: recipe.ingredients.map((ingredient) => {
            return {
              name: ingredient.name,
              quantity: ingredient.amount,
              unit: ingredient.unit,
            };
          }),
        },
        name: recipe.name,
        rating: recipe.rating,
        steps: {
          create: recipe.steps.map((step, index) => {
            return {
              name: step.description,
              order: index,
            };
          }),
        },
        updatedAt: recipe._updatedAt,
        // tags?: TagCreateNestedManyWithoutRecipesInput
        // ingredients?: RecipeIngredientCreateNestedManyWithoutRecipeInput
        // steps?: RecipeStepCreateNestedManyWithoutRecipeInput
      },
    });
  }
};
