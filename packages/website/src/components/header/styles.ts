import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  position: sticky;
  z-index: 1;
  top: 0;
  align-items: center;
  width: 100%;
  height: 5rem;
  padding: 2rem;
  background-color: rgba(0, 0, 0, 0.9);
  box-shadow: 0px 0px 1rem rgba(0, 0, 0, 0.2);
  font-weight: bold;
  backdrop-filter: blur(0.4rem);
`;
