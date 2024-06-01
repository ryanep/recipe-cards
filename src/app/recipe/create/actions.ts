"use server";
import fs from "node:fs/promises";
import { redirect } from "next/navigation";
import { z } from "zod";
import { database } from "#/database";
import { formDataToObject } from "#/utils/form";

const createRecipeValidationSchema = z.object({
  description: z.string(),
  name: z.string(),
  rating: z.coerce.number(),
});

export const createRecipeAction = async (formData: FormData) => {
  const recipeData = formDataToObject(formData);
  const parsedRecipeData = createRecipeValidationSchema.parse(recipeData);

  const image = formData.get("image") as File | undefined;

  if (image) {
    const imageArrayBuffer = await image.arrayBuffer();
    const buffer = new Uint8Array(imageArrayBuffer);

    await fs.writeFile(`./images/${image.name}`, buffer, "utf8");
  }

  const recipe = await database.recipe.create({
    data: {
      description: parsedRecipeData.description,
      imageUrl: "",
      name: parsedRecipeData.name,
      rating: parsedRecipeData.rating,
    },
  });

  return redirect(`/recipe/${recipe.id}`);
};
