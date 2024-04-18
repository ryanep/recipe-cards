import { useTranslation } from "react-i18next";
import * as styled from "./styles";
import type { IngredientsProps } from "./types";

export const Ingredients = ({
  ingredients,
  onIngredientClick,
  selectedIngredients,
}: IngredientsProps) => {
  const { t } = useTranslation();

  return (
    <styled.List>
      {ingredients.map((ingredient, index) => (
        <styled.Ingredient key={ingredient.id}>
          <styled.Label>
            <styled.Input
              checked={selectedIngredients.includes(ingredient.id)}
              onChange={() => {
                onIngredientClick(ingredient.id);
              }}
              type="checkbox"
              value={index}
            />
            <styled.Checkbox />
            <styled.Content>
              <styled.Amount>
                {t(`units:${ingredient.unit}`, {
                  count: ingredient.amount,
                })}
              </styled.Amount>
              <styled.Name>{ingredient.name}</styled.Name>
            </styled.Content>
          </styled.Label>
        </styled.Ingredient>
      ))}
    </styled.List>
  );
};
