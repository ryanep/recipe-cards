import NextLink from "next/link";
import type { ReactNode } from "react";

interface LinkProps {
  children: ReactNode;
  href: string;
}

export const Link = ({ children, href }: LinkProps) => {
  return <NextLink href={href}>{children}</NextLink>;
};
