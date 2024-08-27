import { notFound } from "next/navigation";
import { Breadcrumbs } from "#/components/breadcrumbs";
import { Heading } from "#/components/heading";
import { RecipeForm } from "#/components/recipe-form";
import { recipeService } from "#/services/recipe";
import { buildEditRecipePageUrl, buildRecipePageUrl } from "#/utils/page";
import { saveRecipeAction } from "./actions";
import type { Metadata } from "next";

interface EditRecipePageProps {
  readonly params: {
    recipeId: string;
  };
}

const getPageData = async ({ params }: EditRecipePageProps) => {
  const { getRecipe } = recipeService;

  const recipe = await getRecipe(params);

  if (!recipe) {
    return notFound();
  }

  const breadcrumbs = [
    {
      title: recipe.name,
      url: buildRecipePageUrl(recipe.id),
    },
    {
      title: "Edit recipe",
      url: buildEditRecipePageUrl(recipe.id),
    },
  ];

  return {
    breadcrumbs,
    recipe,
  };
};

export const generateMetadata = async ({
  params,
}: EditRecipePageProps): Promise<Metadata> => {
  const { recipe } = await getPageData({ params });

  return {
    title: `Edit ${recipe.name}`,
  };
};

const EditRecipePage = async ({ params }: EditRecipePageProps) => {
  const { breadcrumbs, recipe } = await getPageData({ params });

  return (
    <main>
      <div className="mb-5">
        <Breadcrumbs breadcrumbs={breadcrumbs} />
      </div>

      <div className="mb-4">
        <Heading type="h1">Edit Recipe</Heading>
      </div>

      <RecipeForm
        formAction={saveRecipeAction}
        initialValues={recipe}
        mode="edit"
      />
    </main>
  );
};

export default EditRecipePage;
