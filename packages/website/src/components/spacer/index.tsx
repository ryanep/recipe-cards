import * as styled from "./styles";
import { SpacerProps } from "./types";

export const Spacer = ({ size, direction = "horizontal" }: SpacerProps) => (
  <styled.Spacer size={size} axis={direction} />
);
