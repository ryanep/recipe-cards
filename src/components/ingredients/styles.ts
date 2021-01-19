import { styled } from "#/styles/theme";
import { IngredientStyleProps } from "./types";

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 0.2rem;
  background-color: grey;
  flex-wrap: wrap;
  width: 100%;
  border: 0.2rem solid grey;
  border-radius: 1rem;
  overflow: hidden;
`;

export const Ingredient = styled.li<IngredientStyleProps>`
  background-color: black;
  color: ${({ isComplete }) => (isComplete ? "grey" : "white")};
  font-weight: bold;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  padding: 1rem;
`;
