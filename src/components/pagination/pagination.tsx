import Link from "next/link";

interface PaginationProps {
  readonly currentPage: number;
  readonly pageSize: number;
  readonly totalItemCount: number;
}

export const Pagination = ({
  currentPage,
  pageSize,
  totalItemCount,
}: PaginationProps) => {
  const maxPageCount = 5;
  const totalPageCount = totalItemCount / pageSize;
  const truncatedPageCount =
    totalPageCount < maxPageCount ? totalPageCount : maxPageCount;

  return (
    <nav>
      <ul className="flex gap-1">
        {currentPage !== 1 ? (
          <li>
            <Link
              className="block rounded-md p-2 text-sm font-medium hover:bg-neutral-800"
              href={`?page=${currentPage - 1}`}
            >
              Previous
            </Link>
          </li>
        ) : null}

        {Array.from({ length: truncatedPageCount }).map((_, index) => {
          const pageNumber = index + 1;

          return (
            <li key={pageNumber}>
              {pageNumber !== currentPage ? (
                <Link
                  className="flex aspect-square w-10 items-center justify-center rounded-md p-2 text-sm font-medium hover:bg-neutral-800"
                  href={`?page=${pageNumber}`}
                >
                  {pageNumber}
                </Link>
              ) : (
                <div className="flex aspect-square w-10 items-center justify-center rounded-md border border-neutral-700 text-sm font-medium">
                  {pageNumber}
                </div>
              )}
            </li>
          );
        })}

        {totalPageCount !== truncatedPageCount ? (
          <div className="flex aspect-square w-10 items-center justify-center rounded-md p-2 text-sm font-medium">
            ...
          </div>
        ) : null}

        {currentPage !== totalPageCount ? (
          <li>
            <Link
              className="block rounded-md p-2 text-sm font-medium hover:bg-neutral-800"
              href={`?page=${currentPage + 1}`}
            >
              Next
            </Link>
          </li>
        ) : null}
      </ul>
    </nav>
  );
};
