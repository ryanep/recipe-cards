import { Header } from "#/components/header";
import { Root } from "#/components/root";
import * as styled from "./styles";
import type { FullWidthLayoutProps } from "./types";

export const FullWidthLayout = ({
  breadcrumbs,
  children,
}: FullWidthLayoutProps) => (
  <Root>
    <styled.Layout>
      <Header breadcrumbs={breadcrumbs} />
      <styled.Content>
        <styled.Main>{children}</styled.Main>
      </styled.Content>
    </styled.Layout>
  </Root>
);
