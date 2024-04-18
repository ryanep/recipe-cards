import * as styledComponents from "styled-components";
import { colours } from "./colours";
import { sizing } from "./sizing";
import { spacing } from "./spacing";

export const theme = {
  colours,
  sizing,
  spacing,
};

export type Theme = typeof theme;

const {
  ThemeProvider,
  createGlobalStyle,
  css,
  default: styled,
  keyframes,
} = styledComponents as unknown as styledComponents.ThemedStyledComponentsModule<Theme>;

export { styled, css, createGlobalStyle, keyframes, ThemeProvider };
