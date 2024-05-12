import { notFound } from "next/navigation";
import { Breadcrumbs } from "#/components/breadcrumbs";
import { Heading } from "#/components/heading";
import { Image } from "#/components/image";
import { Ingredients } from "#/components/ingredients";
import { Steps } from "#/components/steps";
import { database } from "#/database";
import { buildRecipePageUrl } from "#/utils/page";
import type { Metadata } from "next";

interface RecipePageProps {
  readonly params: {
    recipeId: string;
  };
}

const getPageData = async ({ params }: RecipePageProps) => {
  const recipe = await database.recipe.findUnique({
    include: {
      ingredients: true,
      steps: {
        orderBy: {
          order: "asc",
        },
      },
      tags: true,
    },
    where: {
      id: params.recipeId,
    },
  });

  if (!recipe) {
    return notFound();
  }

  return {
    recipe,
  };
};

export const generateMetadata = async ({
  params,
}: RecipePageProps): Promise<Metadata> => {
  const { recipe } = await getPageData({ params });

  return {
    description: recipe.description,
    title: recipe.name,
  };
};

const RecipePage = async ({ params }: RecipePageProps) => {
  const { recipe } = await getPageData({ params });

  const breadcrumbs = [
    {
      title: recipe.name,
      url: buildRecipePageUrl(recipe.id),
    },
  ];

  return (
    <div>
      <div className="mb-5">
        <Breadcrumbs breadcrumbs={breadcrumbs} />
      </div>

      {/* eslint-disable-next-line tailwindcss/no-arbitrary-value */}
      <div className="grid gap-5 md:grid-cols-[minmax(300px,_25%)_auto]">
        <div>
          <Image
            alt={recipe.name}
            className="mb-4 aspect-square w-full rounded-lg object-cover md:max-h-80"
            height={500}
            isPriority
            isUnoptimized
            src={`/images/recipes/${recipe.imageUrl}`}
            width={500}
          />

          <Heading className="mb-4" type="h1">
            {recipe.name}
          </Heading>

          <p className="text-lg font-medium">{recipe.description}</p>
        </div>

        <div className="flex flex-col gap-4">
          <Heading as="h5" type="h2">
            Ingredients
          </Heading>

          <Ingredients ingredients={recipe.ingredients} />

          <Heading as="h5" type="h2">
            Steps
          </Heading>

          <Steps steps={recipe.steps} />
        </div>
      </div>
    </div>
  );
};

export default RecipePage;
