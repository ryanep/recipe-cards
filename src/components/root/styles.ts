import reset from "styled-reset";
import { createGlobalStyle } from "#/styles/theme";
import { fromTablet } from "#/styles/media";

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
  }

  html, body, #__next {

    @media ${fromTablet} {
      height: 100%;
      overflow: hidden;
    }
  }

  select {
    appearance: none;
    display: block;
  }

  button, textarea, input[type=text], input[type=email], input[type=password] {
    appearance: none;
  }

  button, input, textarea, select {
    font-size: inherit;
    font-family: inherit;
    background-color: transparent;
    border: 0;
    padding: 0;
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
