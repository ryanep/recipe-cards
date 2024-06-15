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
        id: recipeId,
      },
    });
  };

  const deleteRecipe = async (recipeId: string) => {
    await database.recipe.delete({
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
