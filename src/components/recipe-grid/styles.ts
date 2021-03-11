import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 2rem;
`;

export const Image = styled.img`
  width: 100%;
  max-height: 40rem;
  aspect-ratio: 1/1;
  border-radius: 0.4rem;
`;

export const Link = styled.a`
  color: #ffffff;
`;
