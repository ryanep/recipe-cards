import { fromTablet } from "#/styles/media";
import { styled } from "#/styles/theme";

export const Main = styled.main`
  overflow: hidden;
`;

export const Sticky = styled.div``;

export const Sidebar = styled.aside`
  ${Sticky} {
    @media ${fromTablet} {
      position: sticky;
      top: 7rem;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: ${({ theme }) => theme.sizing.large};
  border-radius: 1rem;

  @media ${fromTablet} {
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: minmax(30rem, 25%) auto;
  }
`;
