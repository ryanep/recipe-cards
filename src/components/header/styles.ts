import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  height: 5rem;
  background-color: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(0.4rem);
  box-shadow: 0px 0px 1rem rgba(0, 0, 0, 0.2);
  padding: 2rem;
  font-weight: bold;
  z-index: 1;
`;

export const Link = styled.a`
  align-items: center;
  color: #ffffff;
  font-size: 1.8rem;
  font-weight: 900;
  text-decoration: none;
`;

export const Buttons = styled.div`
  margin-left: auto;
`;

export const SettingsButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  color: inherit;
`;

export const Icon = styled.svg`
  display: block;
  width: 2rem;
  height: auto;
  margin-right: 1rem;
`;

export const Popover = styled.div`
  width: 40rem;
  border-radius: 0 0 0.4rem 0.4rem;
  background-color: #000000;
  position: absolute;
  top: calc(100% + 0.5rem);
  right: 0.5rem;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(0.4rem);
  box-shadow: 0px 0px 1rem rgba(0, 0, 0, 0.2);
`;
