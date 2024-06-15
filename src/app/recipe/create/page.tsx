import { Heading } from "#/components/heading";
import { RecipeForm } from "#/components/recipe-form";
import { createRecipeAction } from "./actions";

const CreateRecipePage = () => {
  return (
    <div>
      <Heading type="h1">Create recipe</Heading>

      <RecipeForm formAction={createRecipeAction} />
    </div>
  );
};

export default CreateRecipePage;
