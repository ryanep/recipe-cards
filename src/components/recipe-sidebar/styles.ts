import { styled } from '#/styles/theme';

export const Image = styled.img`
  width: 100%;
  border-radius: 1rem;
`;

export const Content = styled.div`
  padding: ${({ theme }) => theme.sizing.medium};
`;

export const Name = styled.h1`
  font-weight: 900;
  font-size: 3.6rem;
`;

export const Description = styled.p`
  font-size: 1.8rem;
`;
