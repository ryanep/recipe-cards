/* eslint-disable react/jsx-max-depth */
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "#/components/breadcrumbs";
import { Heading } from "#/components/heading";
import { HorizontalDotsIcon, MinusIcon, PlusIcon } from "#/components/icons";
import { Image } from "#/components/image";
import { Ingredients } from "#/components/ingredients";
import { Link } from "#/components/link";
import { Steps } from "#/components/steps";
import { WakeLock } from "#/components/wake-lock";
import { recipeService } from "#/services/recipe";
import { buildEditRecipePageUrl } from "#/utils/page";
import { increaseServingSize, reduceServingSize } from "./actions";
import type { Metadata } from "next";

interface RecipePageProps {
  readonly params: Promise<{
    recipeId: string;
  }>;
}

const getPageData = async ({
  recipeId,
}: Awaited<RecipePageProps["params"]>) => {
  const cookieStore = await cookies();

  const servingSize = cookieStore.get("servingSize")?.value
    ? Number(cookieStore.get("servingSize")?.value)
    : 1;

  const recipe = await recipeService.getRecipe({ recipeId });

  if (!recipe) {
    return notFound();
  }

  const breadcrumbs = [
    {
      title: recipe.name,
      url: buildEditRecipePageUrl(recipe.id),
    },
  ];

  return {
    breadcrumbs,
    recipe,
    servingSize,
  };
};

export const generateMetadata = async (
  props: RecipePageProps
): Promise<Metadata> => {
  const parameters = await props.params;

  const { recipe } = await getPageData(parameters);

  return {
    description: recipe.description,
    title: recipe.name,
  };
};

const RecipePage = async ({ params }: RecipePageProps) => {
  const parameters = await params;

  const { breadcrumbs, recipe, servingSize } = await getPageData(parameters);

  return (
    <>
      <WakeLock />

      <div className="mb-5">
        <Breadcrumbs breadcrumbs={breadcrumbs} />
      </div>

      <div className="grid items-start gap-5 md:grid-cols-[minmax(300px,25%)_auto]">
        <aside className="md:sticky md:top-20">
          <Image
            alt={recipe.name}
            className="mb-4 aspect-square w-full rounded-lg object-cover"
            height={500}
            isPriority
            isUnoptimized
            src={`/image?id=${recipe.id}`}
            width={500}
          />

          <div className="mb-4 flex items-start justify-between gap-4">
            <Heading type="h1">{recipe.name}</Heading>

            <details className="relative">
              <summary className="cursor-pointer rounded-md border-2 border-neutral-300 p-1 px-2 text-neutral-300 dark:border-neutral-600 dark:text-neutral-600">
                <HorizontalDotsIcon size={24} />
              </summary>

              <ul className="absolute right-0 w-max rounded-md border border-neutral-200 bg-white p-1 text-sm font-medium shadow-md dark:border-neutral-800 dark:bg-neutral-950">
                <li className="rounded-xs cursor-pointer border-b border-neutral-200 px-2 py-1.5 hover:bg-black/5 dark:border-neutral-800 dark:hover:bg-white/10">
                  <Link className="block" href={`/recipe/${recipe.id}/edit`}>
                    Edit
                  </Link>
                </li>

                <li className="rounded-xs cursor-pointer px-2 py-1.5 text-red-600 hover:bg-black/5 dark:hover:bg-white/10">
                  <Link className="block" href={`/recipe/${recipe.id}/delete`}>
                    Delete recipe
                  </Link>
                </li>
              </ul>
            </details>
          </div>

          <p className="mb-8 text-lg font-medium text-neutral-500 dark:text-neutral-400">
            {recipe.description}
          </p>

          <Heading as="h4" className="mb-4" type="h2">
            Servings
          </Heading>

          <form className="flex h-10 items-center gap-0.5">
            <button
              className="flex aspect-square h-full place-content-center place-items-center rounded-l-md bg-neutral-200 text-lg font-bold text-neutral-400 dark:bg-neutral-700 dark:text-neutral-400"
              formAction={reduceServingSize}
              type="submit"
            >
              <MinusIcon size={20} />
            </button>

            <div className="flex h-full grow place-content-center place-items-center bg-neutral-200 font-bold text-neutral-400 dark:bg-neutral-700 dark:text-neutral-400">
              {servingSize}
            </div>

            <button
              className="flex aspect-square h-full place-content-center place-items-center rounded-r-md bg-neutral-200 text-lg font-bold text-neutral-400 dark:bg-neutral-700 dark:text-neutral-400"
              formAction={increaseServingSize}
              type="submit"
            >
              <PlusIcon size={20} />
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
