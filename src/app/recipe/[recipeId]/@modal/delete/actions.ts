"use server";
import { redirect } from "next/navigation";
import { recipeService } from "#/services/recipe";

export const deleteRecipeAction = async (formData: FormData) => {
  // eslint-disable-next-line @typescript-eslint/no-base-to-string
  const recipeId = formData.get("recipeId")?.toString();

  if (!recipeId) {
    throw new Error("Invalid recipe id.");
  }

  await recipeService.deleteRecipe({
    recipeId,
  });

  return redirect("/");
};
