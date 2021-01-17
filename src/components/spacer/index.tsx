import * as styled from './styles';
import { SpacerProps } from './types';

export const Spacer = ({ size, direction = 'horizontal' }: SpacerProps) => {
  return <styled.Spacer size={size} direction={direction} />;
};
