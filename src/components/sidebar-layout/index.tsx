import { Root } from '#/components/root';
import * as styled from './styles';
import { SidebarLayoutProps } from './types';

export const SidebarLayout = ({ sidebar, children }: SidebarLayoutProps) => (
  <Root>
    <styled.Layout>
      <aside>{sidebar}</aside>
      <styled.Main>{children}</styled.Main>
    </styled.Layout>
  </Root>
);
