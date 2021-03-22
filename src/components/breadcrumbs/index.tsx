import Link from 'next/link';
import * as styled from './styles';
import { BreadcrumbsProps } from './types';

export const Breadcrumbs = ({ breadcrumbs }: BreadcrumbsProps) => {
  return (
    <styled.Breadcrumbs>
      <Link href="/">
        <styled.Link href="/">All recipes</styled.Link>
      </Link>
      {breadcrumbs.map((breadcrumb) => (
        <>
          <styled.BreadcrumbSeparator
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
          >
            <path d="M9.707 18.707l6-6c0.391-0.391 0.391-1.024 0-1.414l-6-6c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0z" />
          </styled.BreadcrumbSeparator>
          <Link key={breadcrumb.url} href={breadcrumb.url}>
            <styled.Link href={breadcrumb.url}>{breadcrumb.title}</styled.Link>
          </Link>
        </>
      ))}
    </styled.Breadcrumbs>
  );
};
