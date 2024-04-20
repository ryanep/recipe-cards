import * as styled from "./styles";

interface CheckboxProps {
  readonly id: string;
}

export const Checkbox = ({ id }: CheckboxProps) => {
  return <styled.Input id={id} type="checkbox" />;
};
