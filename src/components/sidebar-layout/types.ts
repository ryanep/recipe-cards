import { ReactNode } from 'react';
import type { Breadcrumb } from '#/components/breadcrumbs/types';

export interface SidebarLayoutProps {
  sidebar: ReactNode;
  children: ReactNode;
  breadcrumbs: Breadcrumb[];
}
