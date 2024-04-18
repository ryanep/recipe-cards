import { Header } from "#/components/header";
import { Root } from "#/components/root";
import { ReactNode } from "react";
import * as styled from "./styles";

export interface FullWidthLayoutProps {
  breadcrumbs: {
    title: string;
    url: string;
  }[];
  children: ReactNode;
}

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
