import * as styled from './styles';
import { HeadingProps } from './types';

export const Heading = ({ type, as, text }: HeadingProps) => (
  <styled.Heading type={as ?? type} as={type}>
    {text}
  </styled.Heading>
  );
