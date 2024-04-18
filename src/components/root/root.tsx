import * as styled from "./styles";
import type { RootProps } from "./types";

export const Root = ({ children }: RootProps) => (
  <>
    <styled.Global />
    {children}
  </>
);
