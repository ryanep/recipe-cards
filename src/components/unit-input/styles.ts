import { styled } from '#/styles/theme';

export const Container = styled.div`
  display: flex;
  background-color: #ffffff;
  color: #000000;
  font-weight: bold;
  border-radius: 0.4rem;
  overflow: hidden;
`;

export const Label = styled.label`
  position: relative;
  width: 50%;
  border-left: 0.2rem solid #dddddd;
  text-align: center;

  &:first-child {
    border-left: 0;
  }
`;

export const Name = styled.div`
  padding: 1rem;
`;

export const Input = styled.input`
  position: absolute;
  left: 0;
  top: 0;
  width: 0;
  height: 0;
  overflow: hidden;
  opacity: 0;

  &:checked + ${Name} {
    background-color: #3c6b86;
    color: #ffffff;
  }

  &:focus + ${Name} {
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: -2px;
  }
`;
