"use server";
import { redirect } from "next/navigation";
import { database } from "#/database";
import { createRecipeService } from "#/services/recipe";

export const deleteRecipe = async (formData: FormData) => {
  const recipeId = formData.get("recipeId")?.toString();

  if (!recipeId) {
    throw new Error("Invalid recipe id.");
  }

  const recipeService = createRecipeService(database);

  await recipeService.deleteRecipe(recipeId);

  return redirect("/");
};
