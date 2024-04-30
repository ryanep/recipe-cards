import { PrismaClient } from "@prisma/client";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "#/components/breadcrumbs";
import { Heading } from "#/components/heading";
import { Ingredients } from "#/components/ingredients";
import { Steps } from "#/components/steps";
import type { Metadata } from "next";

interface RecipePageProps {
  readonly params: {
    recipeId: string;
  };
}

const getPageData = async ({ params }: RecipePageProps) => {
  const database = new PrismaClient();

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
      url: `/recipe/${recipe.id}`,
    },
  ];

  return (
    <div>
      <div className="mb-5">
        <Breadcrumbs breadcrumbs={breadcrumbs} />
      </div>

      {/* eslint-disable-next-line tailwindcss/no-arbitrary-value */}
      <div className="grid grid-cols-[minmax(300px,_25%)_auto] gap-5">
        <div>
          <Image
            alt={recipe.name}
            className="mb-4 aspect-square max-h-80 w-full rounded-lg object-cover"
            height={500}
            priority
            src={`${recipe.imageUrl}?w=500`}
            unoptimized
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

          <Steps steps={recipe.steps} />
        </div>
      </div>
    </div>
  );
};

export default RecipePage;
