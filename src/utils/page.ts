export const buildHomePageUrl = () => {
  return "/";
};

export const buildRecipePageUrl = (recipeId: string) => {
  return `/recipe/${recipeId}`;
};

export const buildEditRecipePageUrl = (recipeId: string) => {
  return `/recipe/${recipeId}/edit`;
};

export const buildCreateRecipePageUrl = () => {
  return `/recipe/create`;
};
