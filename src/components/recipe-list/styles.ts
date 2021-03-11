import styled from 'styled-components';
import type { ContainerStyleProps } from './types';

export const Container = styled.div<ContainerStyleProps>`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 30rem;
  background-color: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(0.4rem);
  padding: 2rem;
  transform: ${({ isVisible }) => (!isVisible ? 'translateX(-100%)' : 'none')};
`;

export const List = styled.ul``;

export const Toggle = styled.button`
  position: absolute;
  left: 100%;
  bottom: 4rem;
  width: 3rem;
  height: 5rem;
  border-radius: 0 0.4rem 0.4rem 0;
  background-color: #ffffff;
  border: none;
`;

export const Link = styled.a`
  color: #ffffff;
`;

export const ButtonLink = styled.a`
  margin-top: auto;
  background-color: #0f59ff;
  color: #ffffff;
  border-radius: 0.4rem;
  padding: 1rem;
  text-align: center;
  text-decoration: none;
`;
