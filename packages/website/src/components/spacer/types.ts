import { spacing } from "#/styles/spacing";

export interface SpacerProps {
  size: keyof typeof spacing;
  direction?: SpacerAxis;
}

export interface SpacerStyleProps {
  size: keyof typeof spacing;
  axis?: SpacerAxis;
}

type SpacerAxis = "horizontal" | "vertical";
