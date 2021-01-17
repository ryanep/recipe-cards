import { Helmet } from 'react-helmet';
import * as styled from './styles';
import { RootProps } from './types';

export const Root = ({ children }: RootProps) => {
  return (
    <>
      <Helmet />
      <styled.Global />
      {children}
    </>
  );
};
