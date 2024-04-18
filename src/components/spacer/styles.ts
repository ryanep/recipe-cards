import { styled } from "#/styles/theme";
import type { SpacerStyleProps } from "./types";

export const Spacer = styled.div<SpacerStyleProps>`
  display: ${({ axis }) => (axis === "vertical" ? "inline-block" : undefined)};
  width: ${({ axis, size, theme }) =>
    axis === "vertical" ? theme.spacing[size] : undefined};
  height: ${({ axis, size, theme }) =>
    axis === "horizontal" ? theme.spacing[size] : undefined};
`;
