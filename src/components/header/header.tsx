import { Link } from "#/components/link";
import { config } from "#/config";
import {
  buildAssistantPageUrl,
  buildCreateRecipePageUrl,
  buildHomePageUrl,
} from "#/utils/page";
import { Logo } from "#/components/logo";

export const Header = () => {
  return (
    <header className="sticky top-0 z-10 flex w-full items-center bg-white/90 p-4 font-bold shadow-xs backdrop-blur-xs dark:bg-black/90">
      <Link className="hover:opacity-80 flex gap-2" href={buildHomePageUrl()}>
        <Logo />
      </Link>

      <div className="ml-auto flex gap-4">
        {config.OPENAI_API_KEY ? (
          <Link
            className="flex items-center gap-2 hover:opacity-80"
            href={buildAssistantPageUrl()}
          >
            <svg
              aria-hidden="true"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        ) : null}

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
