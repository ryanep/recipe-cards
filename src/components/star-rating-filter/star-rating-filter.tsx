import { useTranslation } from "react-i18next";
import * as styled from "./styles";
import type { ChangeEvent } from "react";

interface StarRatingFilterProps {
  readonly onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const options = [5, 4, 3];

export const StarRatingFilter = ({ onChange }: StarRatingFilterProps) => {
  const { t } = useTranslation();

  return (
    <styled.Options>
      {[...options]
        .sort((a, b) => b - a)
        .map((option) => (
          <li key={option}>
            <styled.Label htmlFor={`rating-${option}`}>
              <styled.Checkbox
                id={`rating-${option}`}
                name="rating"
                onChange={onChange}
                type="checkbox"
                value={option}
              />
              {t("common:rating", { count: option })}
            </styled.Label>
          </li>
        ))}
    </styled.Options>
  );
};
