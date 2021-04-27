import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  position: sticky;
  z-index: 1;
  top: 0;
  align-items: center;
  width: 100%;
  padding: 1.5rem;
  background-color: rgba(0, 0, 0, 0.9);
  box-shadow: 0px 0px 1rem rgba(0, 0, 0, 0.2);
  font-weight: bold;
  backdrop-filter: blur(0.4rem);
`;

export const Dropdown = styled.details`
  margin-left: auto;
`;

export const DropdownSummary = styled.summary`
  cursor: pointer;
`;

export const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  right: 0;
  width: 20rem;
  border-bottom-left-radius: 0.4rem;
  background-color: rgb(50, 50, 50);
  box-shadow: 0px 0px 1rem rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(0.4rem);
`;

export const DropdownLink = styled.a`
  display: block;
  padding: 1.2rem;
  color: #ffffff;
  text-decoration: none;
`;
