"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import sharp from "sharp";
import { z } from "zod";
import { database } from "#/database";
import { buildRecipePageUrl } from "#/utils/page";

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
    const outputFileType = "webp";
    const imageArrayBuffer = await image.arrayBuffer();
    const buffer = new Uint8Array(imageArrayBuffer);
    const outputFilePath = `./public/images/recipes/${parsedRecipeData.id}.${outputFileType}`;

    await sharp(buffer).resize(384).webp().toFile(outputFilePath);

    await database.recipe.update({
      data: {
        imageUrl: `${parsedRecipeData.id}.${outputFileType}`,
      },
      where: {
        id: parsedRecipeData.id,
      },
    });
  }

  const recipePath = buildRecipePageUrl(parsedRecipeData.id);

  revalidatePath(recipePath);
  revalidatePath(`${recipePath}/edit`);

  return redirect(recipePath);
};
