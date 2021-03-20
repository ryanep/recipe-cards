import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  align-items: center;
`;

export const Checkbox = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
  width: 2rem;
  border-radius: 0.4rem;
  border: 0.2rem solid #444;
  background-color: #333;
  color: #ffffff;
  margin-right: 1rem;

  &:checked {
    content: '✓';
    background-color: #1f5efe;
    border-color: #194dd2;
  }
`;
