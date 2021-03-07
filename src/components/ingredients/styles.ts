import { fromTablet } from '#/styles/media';
import { styled } from '#/styles/theme';
import { IngredientStyleProps } from './types';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(1);
  flex-wrap: wrap;
  width: 100%;
  border: 0.2rem solid grey;
  border-radius: 1rem;
  overflow: hidden;

  @media ${fromTablet} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Ingredient = styled.li<IngredientStyleProps>`
  position: relative;
  background-color: black;
  color: ${({ isComplete }) => (isComplete ? 'grey' : 'white')};
  font-weight: bold;
  cursor: pointer;

  @media ${fromTablet} {
    border-top: 0.2rem solid grey;

    &:nth-child(-n + 3) {
      border-top: none;
    }
  }
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
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.4rem;
  width: 2rem;
  height: 2rem;
  border: 0.2rem solid grey;
  margin-right: 1rem;

  &::before {
    color: #ffffff;
    font-size: 1.2rem;
    font-weight: bold;
  }
`;

export const Input = styled.input`
  position: absolute;
  width: 0;
  height: 0;
  overflow: hidden;
  opacity: 0;

  &:checked + ${Checkbox} {
    border-color: #00d000;
    background-color: #00d000;

    &::before {
      content: '✓';
    }
  }
`;
