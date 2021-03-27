export interface HeadingProps {
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  text: string;
}

export interface HeadingStyleProps {
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}
