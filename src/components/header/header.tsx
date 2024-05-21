import { Link } from "#/components/link";
import { buildHomePageUrl } from "#/utils/page";

export const Header = () => {
  return (
    <header className="sticky top-0 z-10 flex w-full items-center bg-white/90 p-4 font-bold shadow-sm backdrop-blur-sm dark:bg-black/90">
      <Link href={buildHomePageUrl()}>Recipe Cards</Link>
    </header>
  );
};
