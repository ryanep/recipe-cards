import { Heading } from "#/components/heading";
import { Link } from "#/components/link";
import { buildHomePageUrl } from "#/utils/page";

const NotFoundPage = () => {
  return (
    <main className="size-full place-items-center">
      <Heading type="h1">Page not found</Heading>

      <Link className="underline" href={buildHomePageUrl()}>
        View all recipes
      </Link>
    </main>
  );
};

export default NotFoundPage;
