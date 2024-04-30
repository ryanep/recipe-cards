import { cx } from "classix";
import type { ReactNode } from "react";

type HeadingType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface HeadingProps {
  readonly as?: HeadingType;
  readonly children: ReactNode;
  readonly className?: string;
  readonly type: HeadingType;
}

export const Heading = ({ as, children, className, type }: HeadingProps) => {
  const tagType = as ?? type;
  const HeadingTag = type;

  return (
    <HeadingTag
      className={cx(
        className,
        "font-black leading-tight",
        tagType === "h1" && "text-4xl",
        tagType === "h2" && "text-3xl",
        tagType === "h3" && "text-2xl",
        tagType === "h4" && "text-xl uppercase",
        tagType === "h5" && "text-lg uppercase",
        tagType === "h6" && "text-base uppercase"
      )}
    >
      {children}
    </HeadingTag>
  );
};
