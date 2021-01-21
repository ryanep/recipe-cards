export interface ServingInputProps {
  servings: number;
  min: number;
  max: number;
  onChange: (servings: number) => void;
}
