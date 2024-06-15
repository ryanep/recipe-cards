"use server";

"use server";
import fs from "node:fs/promises";
import { redirect } from "next/navigation";
import { z } from "zod";
import { database } from "#/database";

const createRecipeValidationSchema = z.object({
  description: z.string(),
  id: z.string(),
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

export const saveRecipeAction = async (formData: FormData) => {
  const recipeId = formData.get("recipeId");
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
    id: recipeId,
    imageUrl: "",
    name: recipeName,
    rating: recipeRating,
  };

  const parsedRecipeData = createRecipeValidationSchema.parse(recipeData);
  const parsedIngredients =
    recipeIngredientsValidationSchema.parse(ingredients);

  const parsedSteps = stepValidationSchema.parse(steps);

  await database.$transaction([
    database.recipeIngredient.deleteMany({
      where: {
        recipeId: parsedRecipeData.id,
      },
    }),
    database.recipeStep.deleteMany({
      where: {
        recipeId: parsedRecipeData.id,
      },
    }),
    database.recipe.update({
      data: parsedRecipeData,
      where: {
        id: parsedRecipeData.id,
      },
    }),
    database.recipe.update({
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
      where: {
        id: parsedRecipeData.id,
      },
    }),
  ]);

  const image = formData.get("image") as File | undefined;

  if (image) {
    const imageArrayBuffer = await image.arrayBuffer();
    const buffer = new Uint8Array(imageArrayBuffer);

    await fs.writeFile(
      `./public/images/recipes/${parsedRecipeData.id}.jpg`,
      buffer,
      "utf8"
    );
  }

  await database.recipe.update({
    data: {
      // TODO: Support other file extensions.
      imageUrl: `${parsedRecipeData.id}.jpg`,
    },
    where: {
      id: parsedRecipeData.id,
    },
  });

  return redirect(`/recipe/${parsedRecipeData.id}`);
};
