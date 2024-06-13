import type { PrismaClient } from "@prisma/client";

export const createRecipeService = (database: PrismaClient) => {
  const deleteRecipe = async (recipeId: string) => {
    await database.recipe.delete({
      where: {
        id: recipeId,
      },
    });
  };

  return {
    deleteRecipe,
  };
};
