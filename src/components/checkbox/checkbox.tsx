import * as styled from "./styles";

interface CheckboxProps {
  id: string;
}

export const Checkbox = ({ id }: CheckboxProps) => {
  return <styled.Input id={id} type="checkbox" />;
};
