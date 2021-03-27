import { styled } from "#/styles/theme";

export const ServingInput = styled.div`
  display: flex;
  overflow: hidden;
  border-radius: 0.4rem;
  background-color: #333333;
`;

export const Input = styled.input`
  flex-grow: 1;
  border-width: 0 0.2rem;
  border-style: solid;
  border-color: #222222;
  color: #cccccc;
  text-align: center;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  width: 4rem;
  padding: 1rem;
  transition: 0.3s ease background-color;
  outline-offset: -2px;
  font-size: 1.8rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  svg {
    fill: #aaaaaa;
  }

  &:disabled {
    svg {
      fill: #aaaaaa;
    }
  }
`;
