import type { ChangeEvent } from "react";

export interface StarRatingFilterProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
