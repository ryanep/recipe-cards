import NextLink from "next/link";
import type { LinkProps } from "./types";

export const Link = ({ children, href }: LinkProps) => {
  return <NextLink href={href}>{children}</NextLink>;
};
