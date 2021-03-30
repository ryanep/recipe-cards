import styled from "styled-components";

export const Button = styled.button`
  display: block;
  width: 100%;
  padding: 1.2rem 1.6rem;
  transition: opacity 0.2s ease;
  border-radius: 0.4rem;
  background-color: #1f5efe;
  color: #ffffff;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const Label = styled.label`
  font-weight: bold;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  padding: 1.2rem;
  border: 0.1rem solid #444;
  border-radius: 0.4rem;
  background-color: #333;
  color: #ffffff;
`;
