import styled from "styled-components";
import type { HeadingStyleProps, HeadingTag } from "./types";

const getFontSize = (tag: HeadingTag) => {
  switch (tag) {
    case "h1": {
      return "3.6rem";
    }
    case "h2": {
      return "2.8rem";
    }
    case "h3": {
      return "2.4rem";
    }
    case "h4": {
      return "1.8rem";
    }
    case "h5": {
      return "1.6rem";
    }
    case "h6": {
      return "1.4rem";
    }
    default: {
      return "1.4rem;";
    }
  }
};

const getFontWeight = (tag: HeadingTag) => {
  switch (tag) {
    case "h1":
    case "h2":
    case "h3":
    case "h4": {
      return "900";
    }
    default: {
      return "700";
    }
  }
};

export const Heading = styled.h1<HeadingStyleProps>`
  font-size: ${({ tag }) => getFontSize(tag)};
  font-weight: ${({ tag }) => getFontWeight(tag)};
  line-height: 1.2;
  text-transform: ${({ tag }) => (tag === "h4" ? "uppercase" : undefined)};
`;
