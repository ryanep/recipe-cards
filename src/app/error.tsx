"use client";
import { Heading } from "#/components/heading";
import { Link } from "#/components/link";
import { buildHomePageUrl } from "#/utils/page";

const ErrorPage = () => {
  return (
    <div className="text-center">
      <Heading type="h1">Error</Heading>

      <Link className="underline" href={buildHomePageUrl()}>
        An error occurred. Please try again.
      </Link>
    </div>
  );
};

export default ErrorPage;
