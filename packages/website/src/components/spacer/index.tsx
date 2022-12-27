import * as styled from "./styles";
import type { SpacerProps } from "./types";

export const Spacer = ({ direction = "horizontal", size }: SpacerProps) => (
  <styled.Spacer axis={direction} size={size} />
);
