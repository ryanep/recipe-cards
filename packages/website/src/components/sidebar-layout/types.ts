import type { ReactNode } from "react";

export interface SidebarLayoutProps {
  breadcrumbs: {
    title: string;
    url: string;
  }[];
  children: ReactNode;
  sidebar: ReactNode;
}
