import * as styledComponents from "styled-components";
import { colours } from "./colours";
import { sizing } from "./sizing";
import { spacing } from "./spacing";

export const theme = {
  colours,
  spacing,
  sizing,
};

export type Theme = typeof theme;

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
} = (styledComponents as unknown) as styledComponents.ThemedStyledComponentsModule<Theme>;

export { styled, css, createGlobalStyle, keyframes, ThemeProvider };
