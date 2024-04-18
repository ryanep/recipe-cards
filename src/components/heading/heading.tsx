import * as styled from "./styles";

export interface HeadingProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  text: string;
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export const Heading = ({ as, text, type }: HeadingProps) => (
  <styled.Heading as={type} tag={as ?? type}>
    {text}
  </styled.Heading>
);
