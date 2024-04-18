import type { spacing } from "#/styles/spacing";

export interface SpacerProps {
  direction?: SpacerAxis;
  size: keyof typeof spacing;
}

export interface SpacerStyleProps {
  axis?: SpacerAxis;
  size: keyof typeof spacing;
}

type SpacerAxis = "horizontal" | "vertical";
