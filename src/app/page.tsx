import { Heading } from "#/components/heading";
import { Pagination } from "#/components/pagination";
import { RecipeGrid } from "#/components/recipe-grid";
import { database } from "#/database";
import { getTranslation } from "#/i18n/server";
import { filtersSubmit } from "./actions";
import type { Metadata } from "next";

interface HomePageProps {
  readonly searchParams: {
    page?: number;
    rating?: string;
    search?: string;
  };
}

const getPageData = async ({ searchParams }: HomePageProps) => {
  const pageSize = 30;

  const where = {
    name: {
      contains: searchParams.search,
    },
    rating: searchParams.rating
      ? {
          equals: Number(searchParams.rating),
        }
      : undefined,
  };

  const recipes = await database.recipe.findMany({
    include: {
      ingredients: true,
      steps: true,
    },
    orderBy: {
      createdAt: "asc",
    },
    skip: searchParams.page ? pageSize * (searchParams.page - 1) : 0,
    take: pageSize,
    where,
  });

  const totalRecipeCount = await database.recipe.count({
    where,
  });

  return {
    recipes,
    totalRecipeCount,
  };
};

export const generateMetadata = async (): Promise<Metadata> => {
  const { t } = await getTranslation("home");

  return {
    title: t("home:pageTitle"),
  };
};

const PAGE_SIZE = 30;

const HomePage = async ({ searchParams }: HomePageProps) => {
  const { t } = await getTranslation("home");
  const { recipes, totalRecipeCount } = await getPageData({ searchParams });

  return (
    <main>
      <div className="mb-8 flex items-center gap-4">
        <div>
          <Heading type="h1">{t("home:heading")}</Heading>

          <p className="text-lg font-medium text-neutral-500 dark:text-neutral-400">
            {t("home:results", {
              count: recipes.length,
              totalCount: totalRecipeCount,
            })}
          </p>
        </div>

        <form action={filtersSubmit} className="ml-auto flex gap-2">
          <div className="relative">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500"
              fill="currentColor"
              height="16"
              stroke="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" />
            </svg>

            <select
              className="appearance-none rounded-md border-2 border-neutral-200 bg-white p-2 px-8 text-sm placeholder:text-neutral-500 dark:border-neutral-700 dark:bg-neutral-800"
              data-test={searchParams.rating}
              defaultValue={searchParams.rating}
              name="rating"
            >
              <option value="">Star rating</option>
              <option value="5">5 stars</option>
              <option value="4">4 stars</option>
              <option value="3">3 stars</option>
              <option value="2">2 stars</option>
              <option value="1">1 star</option>
            </select>

            <svg
              aria-hidden="true"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500"
              fill="none"
              height="16"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>

          <div className="relative">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500"
              fill="none"
              height="16"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>

            <input
              aria-label="Search recipes"
              className="rounded-md border-2 border-neutral-200 bg-white p-2 pl-9 text-sm placeholder:text-neutral-500 dark:border-neutral-700 dark:bg-neutral-800"
              defaultValue={searchParams.search}
              id="name"
              name="name"
              placeholder="Search"
              type="name"
            />
          </div>

          <button
            className="inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md bg-neutral-800 px-4 py-2 text-sm font-medium text-neutral-100 transition-colors hover:bg-neutral-800/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>

      <RecipeGrid recipes={recipes} />

      {totalRecipeCount > PAGE_SIZE ? (
        <div className="mt-8">
          <Pagination
            currentPage={searchParams.page ? Number(searchParams.page) : 1}
            pageSize={PAGE_SIZE}
            totalItemCount={totalRecipeCount}
          />
        </div>
      ) : null}
    </main>
  );
};

export default HomePage;
