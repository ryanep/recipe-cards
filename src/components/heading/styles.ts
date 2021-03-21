import styled, { css } from 'styled-components';
import { HeadingStyleProps } from './types';

export const Heading = styled.h1<HeadingStyleProps>`
  line-height: 1.2;
  font-weight: bold;

  ${({ type }) =>
    type === 'h1' &&
    css`
      font-size: 3.6rem;
      font-weight: 900;
    `}

  ${({ type }) =>
    type === 'h2' &&
    css`
      font-size: 2.8rem;
      font-weight: 900;
    `}

    ${({ type }) =>
    type === 'h3' &&
    css`
      font-size: 2.4rem;
      font-weight: 900;
    `}

    ${({ type }) =>
    type === 'h4' &&
    css`
      font-size: 1.8rem;
      text-transform: uppercase;
      font-weight: 900;
    `}

    ${({ type }) =>
    type === 'h5' &&
    css`
      font-size: 1.6rem;
    `}

    ${({ type }) =>
    type === 'h6' &&
    css`
      font-size: 1.4rem;
    `}
`;
