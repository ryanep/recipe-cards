import { Fragment } from "react";
import { Link } from "#/components/link";
import * as styled from "./styles";

interface BreadcrumbsProps {
  breadcrumbs: {
    title: string;
    url: string;
  }[];
}

export const Breadcrumbs = ({ breadcrumbs }: BreadcrumbsProps) => {
  return (
    <styled.Breadcrumbs>
      <Link href="/">All recipes</Link>
      {breadcrumbs.map((breadcrumb) => (
        <Fragment key={breadcrumb.url}>
          <styled.BreadcrumbSeparator
            height="18"
            version="1.1"
            viewBox="0 0 24 24"
            width="18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.707 18.707l6-6c0.391-0.391 0.391-1.024 0-1.414l-6-6c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0z" />
          </styled.BreadcrumbSeparator>
          <Link href={breadcrumb.url} key={breadcrumb.url}>
            {breadcrumb.title}
          </Link>
        </Fragment>
      ))}
    </styled.Breadcrumbs>
  );
};
