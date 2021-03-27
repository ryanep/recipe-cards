import { fromTablet } from "#/styles/media";
import { styled } from "#/styles/theme";

export const Image = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 1rem;

  @media ${fromTablet} {
    max-height: 32rem;
  }
`;

export const Content = styled.div`
  padding: ${({ theme }) => theme.sizing.medium} 0;
`;

export const Name = styled.h1`
  font-weight: 900;
  font-size: 3.6rem;
`;

export const Description = styled.p`
  font-size: 1.8rem;
`;
