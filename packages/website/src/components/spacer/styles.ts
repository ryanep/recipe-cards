import { styled, css } from "#/styles/theme";
import { SpacerStyleProps } from "./types";

export const Spacer = styled.div<SpacerStyleProps>`
  ${({ theme, size, axis }) =>
    axis === "vertical"
      ? css`
          width: ${theme.spacing[size]};
          display: inline-block;
        `
      : css`
          height: ${theme.spacing[size]};
        `}
`;
