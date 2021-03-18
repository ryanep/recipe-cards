import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(23rem, 1fr));
`;

export const Image = styled.img`
  width: 100%;
  max-height: 40rem;
  aspect-ratio: 1/1;
  border-radius: 0.4rem;
  object-fit: cover;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
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

export const Tags = styled.ul`
  display: flex;
  gap: 1rem;
  overflow: scroll;
  margin-top: auto;
`;

export const Tag = styled.li`
  padding: 0.2rem 0.4rem;
  border-radius: 0.4rem;
  font-size: 1.4rem;
  background-color: #222222;
`;
