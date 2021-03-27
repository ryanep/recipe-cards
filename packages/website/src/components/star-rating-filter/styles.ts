import styled from "styled-components";

export const Options = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
`;

export const Checkbox = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
  border: 0.2rem solid #444;
  border-radius: 0.4rem;
  background-color: #333;
  color: #ffffff;

  &:checked {
    border-color: #194dd2;
    background-color: #1f5efe;
  }
`;
