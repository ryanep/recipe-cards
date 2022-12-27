export interface HeadingProps {
  as?: HeadingTag;
  text: string;
  type: HeadingTag;
}

export interface HeadingStyleProps {
  tag: HeadingTag;
}

export type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
