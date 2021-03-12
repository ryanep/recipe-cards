import { Header } from '#/components/header';
import { Root } from '#/components/root';
import * as styled from './styles';
import { FullWidthLayoutProps } from './types';

export const FullWidthLayout = ({ children }: FullWidthLayoutProps) => (
  <Root>
    <styled.Layout>
      <Header />
      <styled.Content>
        <styled.Main>{children}</styled.Main>
      </styled.Content>
    </styled.Layout>
  </Root>
);
