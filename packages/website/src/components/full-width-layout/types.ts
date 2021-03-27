import { ReactNode } from "react";
import type { Breadcrumb } from "#/components/breadcrumbs/types";

export interface FullWidthLayoutProps {
  children: ReactNode;
  breadcrumbs: Breadcrumb[];
}
