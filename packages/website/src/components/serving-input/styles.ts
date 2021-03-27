import { styled } from '#/styles/theme';

export const ServingInput = styled.div`
  display: flex;
  background-color: #333333;
  border-radius: 0.4rem;
  overflow: hidden;
`;

export const Input = styled.input`
  flex-grow: 1;
  text-align: center;
  border-color: #222222;
  border-style: solid;
  color: #cccccc;
  border-width: 0 0.2rem;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 1rem;
  font-size: 1.8rem;
  width: 4rem;
  font-weight: bold;
  cursor: pointer;
  outline-offset: -2px;
  transition: 0.3s ease background-color;

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