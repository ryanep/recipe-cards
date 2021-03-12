import { Header } from '#/components/header';
import { Root } from '#/components/root';
import * as styled from './styles';
import { SidebarLayoutProps } from './types';

export const SidebarLayout = ({ sidebar, children }: SidebarLayoutProps) => (
  <Root>
    <styled.Layout>
      <Header />
      <styled.Content>
        <aside>{sidebar}</aside>
        <styled.Main>{children}</styled.Main>
      </styled.Content>
    </styled.Layout>
  </Root>
);
