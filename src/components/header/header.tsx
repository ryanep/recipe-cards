import { Link } from "#/components/link";

export const Header = () => {
  return (
    <header className="sticky top-0 z-10 flex w-full items-center bg-black/90 p-4 font-bold shadow-md">
      <Link href="/">Recipe Cards</Link>
    </header>
  );
};
