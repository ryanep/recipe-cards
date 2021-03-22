import { Header } from '#/components/header';
import { Root } from '#/components/root';
import * as styled from './styles';
import { FullWidthLayoutProps } from './types';

export const FullWidthLayout = ({
  children,
  breadcrumbs,
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
