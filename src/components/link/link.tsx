import NextLink from "next/link";
import type { ReactNode } from "react";

interface LinkProps {
  readonly children: ReactNode;
  readonly className?: string;
  readonly href: string;
}

export const Link = ({ children, className, href }: LinkProps) => {
  return (
    <NextLink className={className} href={href}>
      {children}
    </NextLink>
  );
};
