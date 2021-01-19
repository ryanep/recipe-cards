import { IngredientsProps } from "./types";
import * as styled from "./styles";
import { ChangeEvent, useState } from "react";

export const Ingredients = ({ ingredients }: IngredientsProps) => {
  const [selectedIngredients, setSelectedIngredients] = useState<number[]>([]);

  const handleIngredientChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const ingredientIndex = parseInt(value, 10);

    if (selectedIngredients.includes(ingredientIndex)) {
      setSelectedIngredients((ingredients) =>
        ingredients.filter((ingredient) => ingredient !== ingredientIndex)
      );
      return;
    }

    setSelectedIngredients((ingredients) => [...ingredients, ingredientIndex]);
  };

  return (
    <styled.List>
      {ingredients.map((ingredient, index) => (
        <styled.Ingredient
          key={ingredient.id}
          isComplete={selectedIngredients.includes(index)}
        >
          <styled.Label>
            <input
              type="checkbox"
              onChange={handleIngredientChange}
              value={index}
              checked={selectedIngredients.includes(index)}
            />
            {ingredient.amount} {ingredient.unit} {ingredient.name}
          </styled.Label>
        </styled.Ingredient>
      ))}
    </styled.List>
  );
};
