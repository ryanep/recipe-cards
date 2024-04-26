import { Link } from "#/components/link";

export const Header = () => {
  return (
    <header className="sticky top-0 z-10 flex w-full items-center bg-black/90 p-4 font-bold shadow-md">
      <details className="ml-auto">
        <summary className="cursor-pointer">Settings</summary>

        <ul className="absolute right-0 top-full w-52 bg-neutral-800 shadow-sm">
          <li>
            <Link
              className="block p-3 text-white no-underline"
              href="https://recipe-cards.sanity.studio"
              rel="noopener"
              target="_blank"
            >
              Manage recipes
            </Link>
          </li>
        </ul>
      </details>
    </header>
  );
};
