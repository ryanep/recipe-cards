import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "#/components/breadcrumbs";
import { Heading } from "#/components/heading";
import { Image } from "#/components/image";
import { Ingredients } from "#/components/ingredients";
import { Steps } from "#/components/steps";
import { database } from "#/database";
import { buildRecipePageUrl } from "#/utils/page";
import { increaseServingSize, reduceServingSize } from "./actions";
import type { Metadata } from "next";

interface RecipePageProps {
  readonly params: {
    recipeId: string;
  };
}

const getPageData = async ({ params }: RecipePageProps) => {
  const servingSize = cookies().get("servingSize")?.value
    ? Number(cookies().get("servingSize")?.value)
    : 1;

  const recipe = await database.recipe.findUnique({
    include: {
      ingredients: true,
      steps: {
        orderBy: {
          order: "asc",
        },
      },
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
    servingSize,
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
  const { recipe, servingSize } = await getPageData({ params });

  const breadcrumbs = [
    {
      title: recipe.name,
      url: buildRecipePageUrl(recipe.id),
    },
  ];

  return (
    <>
      <div className="mb-5">
        <Breadcrumbs breadcrumbs={breadcrumbs} />
      </div>

      {/* eslint-disable-next-line tailwindcss/no-arbitrary-value */}
      <div className="grid items-start gap-5 md:grid-cols-[minmax(300px,_25%)_auto]">
        <aside className="sticky top-20">
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

          <p className="mb-8 text-lg font-medium">{recipe.description}</p>

          <Heading as="h4" className="mb-4" type="h2">
            Servings
          </Heading>

          <div className="flex h-10 items-center gap-0.5">
            <form action={reduceServingSize} className="h-full">
              <button
                className="flex aspect-square h-full place-content-center place-items-center rounded-l-md bg-neutral-200 text-lg font-bold text-neutral-400 dark:bg-neutral-700 dark:text-neutral-400"
                type="submit"
              >
                <svg
                  fill="currentColor"
                  height="20"
                  version="1.1"
                  viewBox="0 0 640 640"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* eslint-disable-next-line react/jsx-max-depth */}
                  <path d="M512 320c0 17.696-1.536 32-19.232 32h-345.536c-17.664 0-19.232-14.304-19.232-32s1.568-32 19.232-32h345.568c17.664 0 19.2 14.304 19.2 32z" />
                </svg>
              </button>
            </form>

            <div className="flex h-full grow place-content-center place-items-center bg-neutral-200 font-bold text-neutral-400 dark:bg-neutral-700 dark:text-neutral-400">
              {servingSize}
            </div>

            <form action={increaseServingSize} className="h-full">
              <button
                className="flex aspect-square h-full place-content-center place-items-center rounded-r-md bg-neutral-200 text-lg font-bold text-neutral-400 dark:bg-neutral-700 dark:text-neutral-400"
                type="submit"
              >
                <svg
                  fill="currentColor"
                  height="20"
                  version="1.1"
                  viewBox="0 0 640 640"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* eslint-disable-next-line react/jsx-max-depth */}
                  <path d="M512 320c0 17.696-1.536 32-19.232 32h-140.768v140.768c0 17.664-14.304 19.232-32 19.232s-32-1.568-32-19.232v-140.768h-140.768c-17.664 0-19.232-14.304-19.232-32s1.568-32 19.232-32h140.768v-140.768c0-17.696 14.304-19.232 32-19.232s32 1.536 32 19.232v140.768h140.768c17.696 0 19.232 14.304 19.232 32z" />
                </svg>
              </button>
            </form>
          </div>
        </aside>

        <main className="flex flex-col gap-4">
          <Heading as="h5" type="h2">
            Ingredients
          </Heading>

          <Ingredients
            ingredients={recipe.ingredients}
            servingSize={servingSize}
          />

          <Heading as="h5" type="h2">
            Steps
          </Heading>

          <Steps steps={recipe.steps} />
        </main>
      </div>
    </>
  );
};

export default RecipePage;
