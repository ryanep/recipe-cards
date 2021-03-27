import reset from "styled-reset";
import { fromTablet } from "#/styles/media";
import { createGlobalStyle } from "#/styles/theme";

export const Global = createGlobalStyle`
  ${reset}

  *, *::before, *::after {
    box-sizing: border-box
  }

  html {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 62.5%;
    -webkit-font-smoothing: antialiased;
  }

  body {
    font-size: 1.6rem;
    line-height: 1.5;
    min-width: 32rem;
    background-color: ${({ theme }) => theme.colours.body.background};
    color: ${({ theme }) => theme.colours.body.color};
    -webkit-text-size-adjust: none;
  }

  html, body, #__next {
    @media ${fromTablet} {
      min-height: 100%;
    }
  }

  select {
    appearance: none;
    display: block;
  }

  button, textarea, input[type=text], input[type=email], input[type=password], input[type=number] {
    appearance: none;
  }

  input[type=number] {
    -moz-appearance: textfield;

    &::-webkit-outer-spin-button, &::-webkit-inner-spin-button {
      appearance: none;
      margin: 0;
    }
  }

  button, input, textarea, select {
    font-size: inherit;
    font-family: inherit;
    background-color: transparent;
    border: 0;
    padding: 0;
    appearance: none;
  }

  h1, h2 ,h3 ,h4, h5, h6 {
    line-height: 1;
  }

  strong {
    font-weight: bold;
  }

  a {
    color: ${({ theme }) => theme.colours.primary};
    font-weight: bold;
  }
`;
