import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "#/components/breadcrumbs";
import { Heading } from "#/components/heading";
import { Image } from "#/components/image";
import { Ingredients } from "#/components/ingredients";
import { Link } from "#/components/link";
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

      <div className="grid items-start gap-5 md:grid-cols-[minmax(300px,_25%)_auto]">
        <aside className="md:sticky md:top-20">
          <Image
            alt={recipe.name}
            className="mb-4 aspect-square w-full rounded-lg object-cover"
            height={500}
            isPriority
            isUnoptimized
            src={`/images/recipes/${recipe.imageUrl}`}
            width={500}
          />

          <div className="mb-4 flex items-start justify-between gap-4">
            <Heading type="h1">{recipe.name}</Heading>

            <details className="relative">
              <summary className="cursor-pointer rounded-md border-2 border-neutral-300 p-1 px-2 text-neutral-300 dark:border-neutral-600 dark:text-neutral-600">
                <svg
                  aria-hidden="true"
                  fill="currentColor"
                  height="24"
                  stroke="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 20 20"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
              </summary>

              <ul className="absolute right-0 w-max rounded-md border border-neutral-200 bg-white p-1 text-sm font-medium shadow-md dark:border-neutral-800 dark:bg-neutral-950">
                <li className="cursor-pointer rounded-sm border-b border-neutral-200 px-2 py-1.5 hover:bg-black/5 dark:border-neutral-800 dark:hover:bg-white/10">
                  <Link className="block" href={`/recipe/${recipe.id}/edit`}>
                    Edit
                  </Link>
                </li>

                <li className="cursor-pointer rounded-sm px-2 py-1.5 text-red-600 hover:bg-black/5 dark:hover:bg-white/10">
                  <Link className="block" href={`/recipe/${recipe.id}/delete`}>
                    Delete recipe
                  </Link>
                </li>
              </ul>
            </details>
          </div>

          <p className="mb-8 text-lg font-medium">{recipe.description}</p>

          <Heading as="h4" className="mb-4" type="h2">
            Servings
          </Heading>

          <form className="flex h-10 items-center gap-0.5">
            <button
              className="flex aspect-square h-full place-content-center place-items-center rounded-l-md bg-neutral-200 text-lg font-bold text-neutral-400 dark:bg-neutral-700 dark:text-neutral-400"
              formAction={reduceServingSize}
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

            <div className="flex h-full grow place-content-center place-items-center bg-neutral-200 font-bold text-neutral-400 dark:bg-neutral-700 dark:text-neutral-400">
              {servingSize}
            </div>

            <button
              className="flex aspect-square h-full place-content-center place-items-center rounded-r-md bg-neutral-200 text-lg font-bold text-neutral-400 dark:bg-neutral-700 dark:text-neutral-400"
              formAction={increaseServingSize}
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
