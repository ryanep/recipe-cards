import type { ReactNode } from "react";

export interface FullWidthLayoutProps {
  breadcrumbs: {
    title: string;
    url: string;
  }[];
  children: ReactNode;
}
