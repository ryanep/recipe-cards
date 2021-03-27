import { styled, css } from "#/styles/theme";
import { SpacerStyleProps } from "./types";

export const Spacer = styled.div<SpacerStyleProps>`
  ${({ theme, size, axis }) =>
    axis === "vertical"
      ? css`
          display: inline-block;
          width: ${theme.spacing[size]};
        `
      : css`
          height: ${theme.spacing[size]};
        `}
`;
