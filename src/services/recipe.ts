import type { PrismaClient } from "@prisma/client";

export const createRecipeService = (database: PrismaClient) => {
  const getRecipe = async (recipeId: string) => {
    return database.recipe.findUnique({
      include: {
        ingredients: true,
        steps: {
          orderBy: {
            order: "asc",
          },
        },
      },
      where: {
        deletedAt: null,
        id: recipeId,
      },
    });
  };

  const deleteRecipe = async (recipeId: string) => {
    await database.recipe.update({
      data: {
        deletedAt: new Date(),
      },
      where: {
        id: recipeId,
      },
    });
  };

  return {
    deleteRecipe,
    getRecipe,
  };
};
