import { Breadcrumbs } from "#/components/breadcrumbs";
import { Heading } from "#/components/heading";
import { RecipeForm } from "#/components/recipe-form";
import { buildCreateRecipePageUrl } from "#/utils/page";
import { createRecipeAction } from "./actions";

const getPageData = () => {
  const breadcrumbs = [
    {
      title: "Create recipe",
      url: buildCreateRecipePageUrl(),
    },
  ];

  return {
    breadcrumbs,
  };
};

const CreateRecipePage = () => {
  const { breadcrumbs } = getPageData();

  return (
    <main>
      <div className="mb-5">
        <Breadcrumbs breadcrumbs={breadcrumbs} />
      </div>

      <div className="mb-4">
        <Heading type="h1">Create recipe</Heading>
      </div>

      <RecipeForm formAction={createRecipeAction} mode="create" />
    </main>
  );
};

export default CreateRecipePage;
