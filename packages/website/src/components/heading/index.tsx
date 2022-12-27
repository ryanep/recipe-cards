import * as styled from "./styles";
import type { HeadingProps } from "./types";

export const Heading = ({ as, text, type }: HeadingProps) => (
  <styled.Heading as={type} tag={as ?? type}>
    {text}
  </styled.Heading>
);
