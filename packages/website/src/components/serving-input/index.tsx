import * as styled from "./styles";
import { ServingInputProps } from "./types";

export const ServingInput = ({
  servings,
  min,
  max,
  onChange,
}: ServingInputProps) => {
  const handleChange = (servingCount: number) => {
    onChange(servingCount);
  };

  return (
    <styled.ServingInput>
      <styled.Button
        type="button"
        onClick={() => handleChange(servings - 1)}
        disabled={servings === min}
      >
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 640 640"
        >
          <path d="M512 320c0 17.696-1.536 32-19.232 32h-345.536c-17.664 0-19.232-14.304-19.232-32s1.568-32 19.232-32h345.568c17.664 0 19.2 14.304 19.2 32z" />
        </svg>
      </styled.Button>
      <styled.Input type="number" value={servings} readOnly disabled />
      <styled.Button
        type="button"
        onClick={() => handleChange(servings + 1)}
        disabled={servings === max}
      >
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 640 640"
        >
          <path d="M512 320c0 17.696-1.536 32-19.232 32h-140.768v140.768c0 17.664-14.304 19.232-32 19.232s-32-1.568-32-19.232v-140.768h-140.768c-17.664 0-19.232-14.304-19.232-32s1.568-32 19.232-32h140.768v-140.768c0-17.696 14.304-19.232 32-19.232s32 1.536 32 19.232v140.768h140.768c17.696 0 19.232 14.304 19.232 32z" />
        </svg>
      </styled.Button>
    </styled.ServingInput>
  );
};
