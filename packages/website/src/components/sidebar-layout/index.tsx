import { Header } from "#/components/header";
import { Root } from "#/components/root";
import * as styled from "./styles";
import type { SidebarLayoutProps } from "./types";

export const SidebarLayout = ({
  breadcrumbs,
  children,
  sidebar,
}: SidebarLayoutProps) => (
  <Root>
    <div>
      <Header breadcrumbs={breadcrumbs} />
      <styled.Content>
        <styled.Sidebar>
          <styled.Sticky>{sidebar}</styled.Sticky>
        </styled.Sidebar>
        <styled.Main>{children}</styled.Main>
      </styled.Content>
    </div>
  </Root>
);
