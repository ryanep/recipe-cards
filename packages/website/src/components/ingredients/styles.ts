import { fromDesktop, fromTablet } from "#/styles/media";
import { styled } from "#/styles/theme";

export const List = styled.ul`
  display: grid;
  flex-wrap: wrap;
  width: 100%;
  overflow: hidden;
  border: 0.2rem solid grey;
  border-radius: 0.4rem;
  background-color: grey;
  gap: 0.2rem;

  @media ${fromTablet} {
    grid-template-columns: repeat(2, 50%);
  }

  @media ${fromDesktop} {
    grid-template-columns: repeat(3, 33.3%);
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
  cursor: pointer;
`;

export const Name = styled.span`
  display: block;
  overflow: hidden;
  font-weight: 900;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Amount = styled.span`
  color: #8ee28e;
  font-size: 1.4rem;
`;

export const Checkbox = styled.span`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
  border: 0.2rem solid grey;
  border-radius: 0.4rem;

  &::before {
    color: #ffffff;
    font-size: 1.2rem;
    font-weight: bold;
  }
`;

export const Content = styled.span`
  overflow: hidden;
  transition: opacity 0.1s ease;
`;

export const Input = styled.input`
  position: absolute;
  width: 0;
  height: 0;
  overflow: hidden;
  opacity: 0;

  &:checked + ${Checkbox} {
    border-color: #00d000;
    opacity: 0.5;
    background-color: #00d000;

    &::before {
      content: "✓";
    }
  }

  &:checked ~ ${Content} {
    opacity: 0.5;
  }
`;
