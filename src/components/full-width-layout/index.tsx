import { Root } from '#/components/root';
import * as styled from './styled';
import { FullWidthLayoutProps } from './types';

export const FullWidthLayout = ({
  sidebar,
  children,
}: FullWidthLayoutProps) => {
  return (
    <Root>
      <styled.Layout>
        <aside>{sidebar}</aside>
        <styled.Main>{children}</styled.Main>
      </styled.Layout>
    </Root>
  );
};
