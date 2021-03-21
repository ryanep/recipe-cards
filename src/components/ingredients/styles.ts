import { fromTablet } from '#/styles/media';
import { styled } from '#/styles/theme';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(1);
  gap: 0.2rem;
  flex-wrap: wrap;
  width: 100%;
  border: 0.2rem solid grey;
  background-color: grey;
  border-radius: 0.4rem;
  overflow: hidden;

  @media ${fromTablet} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Ingredient = styled.li`
  position: relative;
  background-color: black;
  color: #ffffff;
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
  color: #8ee28e;
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

export const Content = styled.div``;

export const Input = styled.input`
  position: absolute;
  width: 0;
  height: 0;
  overflow: hidden;
  opacity: 0;

  &:checked + ${Checkbox} {
    border-color: #00d000;
    background-color: #00d000;
    opacity: 0.6;

    &::before {
      content: '✓';
    }
  }

  &:checked ~ ${Content} {
    opacity: 0.5;
  }
`;
