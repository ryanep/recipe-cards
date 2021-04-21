import { styled } from "#/styles/theme";
import { SpacerStyleProps } from "./types";

export const Spacer = styled.div<SpacerStyleProps>`
  display: ${({ axis }) => (axis === "vertical" ? "inline-block" : undefined)};
  width: ${({ axis, theme, size }) =>
    axis === "vertical" ? theme.spacing[size] : undefined};
  height: ${({ axis, theme, size }) =>
    axis === "horizontal" ? theme.spacing[size] : undefined};
`;
