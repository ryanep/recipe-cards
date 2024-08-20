export const buildHomePageUrl = () => {
  return "/";
};

export const buildRecipePageUrl = (recipeId: string) => {
  return `/recipe/${recipeId}`;
};

export const buildCreateRecipePageUrl = () => {
  return `/recipe/create`;
};
