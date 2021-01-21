import { Helmet } from 'react-helmet';
import * as styled from './styles';
import { RootProps } from './types';

export const Root = ({ children }: RootProps) => (
  <>
    <Helmet />
    <styled.Global />
    {children}
  </>
  );
