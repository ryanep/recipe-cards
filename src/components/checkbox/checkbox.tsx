import * as styled from "./styles";
import type { CheckboxProps } from "./types";

export const Checkbox = ({ id }: CheckboxProps) => {
  return <styled.Input id={id} type="checkbox" />;
};
