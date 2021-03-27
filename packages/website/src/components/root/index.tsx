import * as styled from "./styles";
import { RootProps } from "./types";

export const Root = ({ children }: RootProps) => (
  <>
    <styled.Global />
    {children}
  </>
);
