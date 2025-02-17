"use server";
import { redirect } from "next/navigation";
import { zfd } from "zod-form-data";
import { database } from "#/database";
import { generateRecipe } from "#/utils/openai";
import { buildRecipePageUrl } from "#/utils/page";

const validationSchema = zfd.formData({
  prompt: zfd.text(),
});

interface OpenAiRecipe {
  description: string;
  ingredients: {
    name: string;
    quantity: number;
    unit: string;
  }[];
  name: string;
  steps: {
    name: string;
    order: number;
  }[];
}

export const assistantAction = async (formData: FormData) => {
  const data = validationSchema.parse(formData);

  const { prompt } = data;

  const response = await generateRecipe(prompt);

  if (!response) {
    throw new Error("Failed to generate recipe.");
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
  const jsonData = JSON.parse(response) as OpenAiRecipe;

  const recipe = await database.recipe.create({
    data: {
      description: jsonData.description,
      imageUrl: "",
      ingredients: {
        createMany: {
          data: jsonData.ingredients,
        },
      },
      name: jsonData.name,
      rating: 1,
      steps: {
        createMany: {
          data: jsonData.steps,
        },
      },
    },
  });

  redirect(buildRecipePageUrl(recipe.id));
};
