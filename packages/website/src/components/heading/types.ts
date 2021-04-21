export interface HeadingProps {
  type: HeadingTag;
  as?: HeadingTag;
  text: string;
}

export interface HeadingStyleProps {
  tag: HeadingTag;
}

export type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
