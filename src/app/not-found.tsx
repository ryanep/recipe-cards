import { Heading } from "#/components/heading";
import { Link } from "#/components/link";
import { buildHomePageUrl } from "#/utils/page";

const NotFoundPage = () => {
  return (
    <div className="text-center">
      <Heading type="h1">Page not found</Heading>

      <Link className="underline" href={buildHomePageUrl()}>
        View all recipes
      </Link>
    </div>
  );
};

export default NotFoundPage;
