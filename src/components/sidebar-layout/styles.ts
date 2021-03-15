import { fromTablet } from '#/styles/media';
import { styled } from '#/styles/theme';

export const Layout = styled.div``;

export const Main = styled.main``;

export const Content = styled.div`
  padding: ${({ theme }) => theme.sizing.large};
  border-radius: 1rem;

  @media ${fromTablet} {
    display: grid;
    grid-template-columns: minmax(30rem, 25%) auto;
    grid-gap: 2rem;
  }
`;