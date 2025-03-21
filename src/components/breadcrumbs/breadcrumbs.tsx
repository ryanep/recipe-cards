import { Fragment } from "react";
import { Link } from "#/components/link";
import { buildHomePageUrl } from "#/utils/page";

interface BreadcrumbsProps {
  readonly breadcrumbs: {
    title: string;
    url: string;
  }[];
}

export const Breadcrumbs = ({ breadcrumbs }: BreadcrumbsProps) => {
  return (
    <nav className="flex items-center gap-2 font-bold">
      <Link
        className="text-neutral-700 no-underline hover:opacity-80 dark:text-neutral-300"
        href={buildHomePageUrl()}
      >
        Home
      </Link>

      {breadcrumbs.map((breadcrumb, index) => {
        const isLastBreadcrumb = index + 1 < breadcrumbs.length;

        return (
          <Fragment key={breadcrumb.url}>
            <svg
              fill="currentColor"
              height={12}
              viewBox="0 0 256 512"
              width={12}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
            </svg>

            {isLastBreadcrumb ? (
              <Link
                className="text-neutral-700 no-underline hover:opacity-80 dark:text-neutral-300"
                href={breadcrumb.url}
                key={breadcrumb.url}
              >
                {breadcrumb.title}
              </Link>
            ) : (
              <span className="text-neutral-700 no-underline dark:text-neutral-300">
                {breadcrumb.title}
              </span>
            )}
          </Fragment>
        );
      })}
    </nav>
  );
};
