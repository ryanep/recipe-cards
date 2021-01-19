import { fromTablet } from "#/styles/media";
import { styled } from "#/styles/theme";

export const Layout = styled.div`
  height: 100%;
  margin: ${({ theme }) => theme.sizing.large};
  border-radius: 1rem;
  overflow: hidden;

  @media ${fromTablet} {
    display: grid;
    grid-template-columns: minmax(30rem, 30%) auto;
    grid-gap: 2rem;
  }
`;

export const Main = styled.main``;
