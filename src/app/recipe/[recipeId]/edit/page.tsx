import { notFound } from "next/navigation";
import { Heading } from "#/components/heading";
import { RecipeForm } from "#/components/recipe-form";
import { database } from "#/database";
import { createRecipeService } from "#/services/recipe";
import { saveRecipeAction } from "./actions";

interface EditRecipePageProps {
  readonly params: {
    recipeId: string;
  };
}

const getPageData = async ({ params }: EditRecipePageProps) => {
  const recipeService = createRecipeService(database);

  const recipe = await recipeService.getRecipe(params.recipeId);

  if (!recipe) {
    return notFound();
  }

  return {
    recipe,
  };
};

const EditRecipePage = async ({ params }: EditRecipePageProps) => {
  const { recipe } = await getPageData({ params });

  return (
    <div>
      <Heading type="h1">Edit Recipe</Heading>

      <RecipeForm formAction={saveRecipeAction} initialValues={recipe} />
    </div>
  );
};

export default EditRecipePage;
