import { IngredientsProps } from "./types";
import * as styled from "./styles";

export const Ingredients = ({
  ingredients,
  selectedIngredients,
  onIngredientClick,
}: IngredientsProps) => {
  return (
    <styled.List>
      {ingredients.map((ingredient, index) => (
        <styled.Ingredient
          key={ingredient.id}
          isComplete={selectedIngredients.includes(ingredient.id)}
        >
          <styled.Label>
            <input
              type="checkbox"
              onChange={() => onIngredientClick(ingredient.id)}
              value={index}
              checked={selectedIngredients.includes(ingredient.id)}
            />
            {ingredient.amount} {ingredient.unit} {ingredient.name}
          </styled.Label>
        </styled.Ingredient>
      ))}
    </styled.List>
  );
};
