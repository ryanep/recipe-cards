import { styled } from "#/styles/theme";
import type { StepStyleProps } from "./types";

export const List = styled.ul`
  border: 0.2rem solid grey;
  border-radius: 0.4rem;
`;

export const Step = styled.li<StepStyleProps>`
  border-bottom: 0.2rem solid grey;
  color: ${({ isCurrent }) => (isCurrent ? "white" : "grey")};
  font-weight: bold;

  &:last-child {
    border-bottom: 0;
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  padding: 1rem;
  margin-bottom: 1rem;
`;
