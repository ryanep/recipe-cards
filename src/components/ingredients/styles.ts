import { fromTablet } from '#/styles/media';
import { styled } from '#/styles/theme';
import { IngredientStyleProps } from './types';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(1);
  background-color: grey;
  flex-wrap: wrap;
  width: 100%;
  border: 0.2rem solid grey;
  border-radius: 1rem;
  overflow: hidden;

  @media ${fromTablet} {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 0.2rem;
  }
`;

export const Ingredient = styled.li<IngredientStyleProps>`
  position: relative;
  background-color: black;
  color: ${({ isComplete }) => (isComplete ? 'grey' : 'white')};
  font-weight: bold;
  cursor: pointer;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  padding: 1rem;
`;

export const Name = styled.div`
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 900;
`;

export const Amount = styled.div`
  font-size: 1.4rem;
`;

export const Checkbox = styled.div`
  border-radius: 0.4rem;
  width: 2rem;
  height: 2rem;
  border: 0.2rem solid grey;
  margin-right: 1rem;
`;

export const Input = styled.input`
  position: absolute;
  width: 0;
  height: 0;
  overflow: hidden;

  &:checked + ${Checkbox} {
    border-color: #3e843e;
    background-color: #3e843e;
  }
`;
