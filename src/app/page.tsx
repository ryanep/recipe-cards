import { Heading } from "#/components/heading";
import { Pagination } from "#/components/pagination";
import { RecipeGrid } from "#/components/recipe-grid";
import { DEFAULT_PAGE_SIZE } from "#/constants/settings";
import { getTranslation } from "#/i18n/server";
import { recipeService } from "#/services/recipe";

interface HomePageProps {
  readonly searchParams: Promise<{
    page?: string;
    rating?: string;
    search?: string;
  }>;
}

const getPageData = async ({
  page,
  rating,
  search,
}: Awaited<HomePageProps["searchParams"]>) => {
  const { getRecipes } = recipeService;

  const recipes = await getRecipes({
    filters: {
      page,
      rating,
      search,
    },
    pageSize: DEFAULT_PAGE_SIZE,
  });

  return recipes;
};

const HomePage = async ({ searchParams }: HomePageProps) => {
  const searchParameters = await searchParams;
  const { t } = await getTranslation("home");
  const { pageInfo, recipes } = await getPageData(searchParameters);

  return (
    <main>
      <div className="mb-8">
        <Heading type="h1">{t("home:heading")}</Heading>

        <p className="text-lg font-medium text-neutral-500 dark:text-neutral-400">
          {t("home:results", {
            count: pageInfo.pageCount,
            totalCount: pageInfo.totalCount,
          })}
        </p>
      </div>

      <RecipeGrid recipes={recipes} />

      {pageInfo.totalCount > pageInfo.pageSize ? (
        <div className="mt-8">
          <Pagination
            currentPage={pageInfo.currentPage}
            pageSize={pageInfo.pageSize}
            totalItemCount={pageInfo.totalCount}
          />
        </div>
      ) : null}
    </main>
  );
};

export default HomePage;
