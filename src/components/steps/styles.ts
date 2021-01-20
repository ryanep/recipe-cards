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

export const Indicator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  flex-shrink: 0;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: grey;
  margin-right: 1rem;
`;

export const Checkbox = styled.input`
  position: absolute;
  width: 0;
  height: 0;
  overflow: hidden;
  opacity: 0;

  &:checked + ${Indicator} {
    opacity: 0.4;
    color: white;
    background-color: green;
  }
`;
