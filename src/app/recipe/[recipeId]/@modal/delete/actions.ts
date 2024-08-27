"use server";
import { redirect } from "next/navigation";
import { recipeService } from "#/services/recipe";

export const deleteRecipeAction = async (formData: FormData) => {
  const { deleteRecipe } = recipeService;

  const recipeId = formData.get("recipeId")?.toString();

  if (!recipeId) {
    throw new Error("Invalid recipe id.");
  }

  await deleteRecipe({
    recipeId,
  });

  return redirect("/");
};
