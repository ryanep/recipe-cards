import { Root } from '#/components/root';
import * as styled from './styles';
import { FullWidthLayoutProps } from './types';

export const FullWidthLayout = ({ children }: FullWidthLayoutProps) => (
  <Root>
    <styled.Layout>
      <styled.Main>{children}</styled.Main>
    </styled.Layout>
  </Root>
);
