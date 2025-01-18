import { database } from "#/database";

interface GetRecipesParameters {
  filters: {
    page?: string;
    rating?: string;
    search?: string;
  };
  pageSize: number;
}

type Repositories = typeof database;

const getRecipes =
  (repositories: Repositories) => async (parameters: GetRecipesParameters) => {
    const { filters, pageSize } = parameters;

    const where = {
      deletedAt: null,
      name: {
        contains: filters.search,
      },
      rating: filters.rating
        ? {
            equals: Number(filters.rating),
          }
        : undefined,
    };

    const currentPage = filters.page ? Number(filters.page) : 1;
    const skip = pageSize * (currentPage - 1);

    const recipes = await repositories.recipe.findMany({
      include: {
        ingredients: true,
        steps: true,
      },
      orderBy: {
        createdAt: "asc",
      },
      skip,
      take: pageSize,
      where,
    });

    const totalCount = await repositories.recipe.count({
      where,
    });

    const pageCount = skip ? totalCount - skip : pageSize;

    return {
      pageInfo: {
        currentPage,
        pageCount,
        pageSize,
        totalCount,
      },
      recipes,
    };
  };

interface GetRecipeParameters {
  recipeId: string;
}

const getRecipe =
  (repositories: Repositories) => (parameters: GetRecipeParameters) => {
    const { recipeId } = parameters;

    return repositories.recipe.findUnique({
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

interface DeleteRecipeParameters {
  recipeId: string;
}

const deleteRecipe =
  (repositories: Repositories) =>
  async (parameters: DeleteRecipeParameters) => {
    const { recipeId } = parameters;

    await repositories.recipe.update({
      data: {
        deletedAt: new Date(),
      },
      where: {
        id: recipeId,
      },
    });
  };

const createRecipeService = (repositories: Repositories) => {
  return {
    deleteRecipe: deleteRecipe(repositories),
    getRecipe: getRecipe(repositories),
    getRecipes: getRecipes(repositories),
  };
};

export const recipeService = createRecipeService(database);
