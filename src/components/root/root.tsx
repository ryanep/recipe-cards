import * as styled from "./styles";
import type { ReactNode } from "react";

interface RootProps {
  readonly children: ReactNode;
}

export const Root = ({ children }: RootProps) => (
  <>
    <styled.Global />
    {children}
  </>
);
