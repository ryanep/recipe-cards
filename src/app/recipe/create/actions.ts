"use server";
import fs from "node:fs/promises";
import { redirect } from "next/navigation";
import { string, z } from "zod";
import { database } from "#/database";

const createRecipeValidationSchema = z.object({
  description: z.string(),
  imageUrl: z.string(),
  name: z.string(),
  rating: z.coerce.number(),
});

const recipeIngredientsValidationSchema = z.array(
  z.object({
    name: z.string(),
    quantity: z.coerce.number(),
    unit: z.string(),
  })
);

const stepValidationSchema = z.array(
  z.object({
    name: z.string(),
    order: z.number(),
  })
);

export const createRecipeAction = async (formData: FormData) => {
  const recipeName = formData.get("name");
  const recipeDescription = formData.get("description");
  const recipeRating = formData.get("rating");
  const ingredientNames = formData.getAll("ingredientName[]");
  const ingredientUnits = formData.getAll("ingredientUnit[]");
  const ingredientQuantities = formData.getAll("ingredientQuantity[]");

  const stepsData = formData.getAll("step[]");

  const steps = Array.from({ length: stepsData.length }).map((_, index) => {
    return {
      name: stepsData[index],
      order: index,
    };
  });

  const ingredients = Array.from({ length: ingredientNames.length }).map(
    (ingredientName, index) => {
      return {
        name: ingredientNames[index],
        quantity: ingredientQuantities[index],
        unit: ingredientUnits[index],
      };
    }
  );

  const recipeData = {
    description: recipeDescription,
    imageUrl: "",
    name: recipeName,
    rating: recipeRating,
  };

  const parsedRecipeData = createRecipeValidationSchema.parse(recipeData);
  const parsedIngredients =
    recipeIngredientsValidationSchema.parse(ingredients);
  const parsedSteps = stepValidationSchema.parse(steps);

  const recipe = await database.recipe.create({
    data: {
      ...parsedRecipeData,
      ingredients: {
        createMany: {
          data: parsedIngredients,
        },
      },
      steps: {
        createMany: {
          data: parsedSteps,
        },
      },
    },
  });

  const image = formData.get("image") as File | undefined;

  if (image) {
    const imageArrayBuffer = await image.arrayBuffer();
    const buffer = new Uint8Array(imageArrayBuffer);

    await fs.writeFile(
      `./public/images/recipes/${recipe.id}.jpg`,
      buffer,
      "utf8"
    );
  }

  await database.recipe.update({
    data: {
      // TODO: Support other file extensions.
      imageUrl: `${recipe.id}.jpg`,
    },
    where: {
      id: recipe.id,
    },
  });

  return redirect(`/recipe/${recipe.id}`);
};
