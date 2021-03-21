import { styled } from '#/styles/theme';
import type { StepStyleProps } from './types';

export const List = styled.ul`
  border: 0.2rem solid grey;
  border-radius: 0.4rem;
`;

export const Step = styled.li<StepStyleProps>`
  border-bottom: 0.2rem solid grey;
  color: ${({ isCurrent }) => (isCurrent ? 'white' : 'grey')};
  font-weight: bold;
  background-color: #000000;

  &:last-child {
    border-bottom: 0;
  }
`;

export const Label = styled.label`
  display: block;
  padding: 1.4rem;
  cursor: pointer;
`;

export const Title = styled.p`
  text-transform: uppercase;
  font-weight: 900;
  color: #6e9ee8;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
`;

export const Checkbox = styled.input`
  position: absolute;
  width: 0;
  height: 0;
  overflow: hidden;
  opacity: 0;

  &:checked + ${Title} {
    opacity: 0.4;
  }
`;
