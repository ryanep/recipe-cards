import { Link } from "#/components/link";
import { buildCreateRecipePageUrl, buildHomePageUrl } from "#/utils/page";

export const Header = () => {
  return (
    <header className="sticky top-0 z-10 flex w-full items-center bg-white/90 p-4 font-bold shadow-sm backdrop-blur-sm dark:bg-black/90">
      <Link className="hover:opacity-80" href={buildHomePageUrl()}>
        Recipe Cards
      </Link>

      <div className="ml-auto">
        <Link
          className="flex items-center gap-2 hover:opacity-80"
          href={buildCreateRecipePageUrl()}
        >
          <svg
            fill="currentColor"
            height="24"
            stroke="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M416 277.333H277.333V416h-42.666V277.333H96v-42.666h138.667V96h42.666v138.667H416v42.666z" />
          </svg>
          Create Recipe
        </Link>
      </div>
    </header>
  );
};
