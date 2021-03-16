import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;
`;

export const Image = styled.img`
  width: 100%;
  max-height: 40rem;
  aspect-ratio: 1/1;
  border-radius: 0.4rem;
  object-fit: cover;
`;

export const Info = styled.div`
  padding: 1rem;
`;

export const Link = styled.a`
  color: #ffffff;
  background-color: #000000;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #111111;
  }
`;
