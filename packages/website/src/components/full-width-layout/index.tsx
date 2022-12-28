import { Header } from "#/components/header";
import { Root } from "#/components/root";
import * as styled from "./styles";
import type { FullWidthLayoutProps } from "./types";

export const FullWidthLayout = ({
  breadcrumbs,
  children,
}: FullWidthLayoutProps) => (
  <Root>
    <div>
      <Header breadcrumbs={breadcrumbs} />

      <styled.Content>
        <main>{children}</main>
      </styled.Content>
    </div>
  </Root>
);
