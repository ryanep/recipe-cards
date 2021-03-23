import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  width: 100%;
  height: 5rem;
  background-color: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(0.4rem);
  box-shadow: 0px 0px 1rem rgba(0, 0, 0, 0.2);
  padding: 2rem;
  font-weight: bold;
  z-index: 1;
`;
