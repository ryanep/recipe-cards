import { IngredientsProps } from './types';
import * as styled from './styles';
import { ChangeEvent, useState } from 'react';

export const Ingredients = ({ ingredients }: IngredientsProps) => {
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);

  const handleIngredientChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    if (selectedIngredients.includes(value)) {
      setSelectedIngredients((ingredients) =>
        ingredients.filter((ingredient) => ingredient !== value)
      );
      return;
    }

    setSelectedIngredients((ingredients) => [...ingredients, value]);
  };

  return (
    <styled.List>
      {ingredients.map((ingredient) => (
        <styled.Ingredient>
          <label>
            <input
              type="checkbox"
              onChange={handleIngredientChange}
              value={ingredient.name}
              checked={selectedIngredients.includes(ingredient.name)}
            />
            {ingredient.amount} {ingredient.unit} {ingredient.name}
          </label>
        </styled.Ingredient>
      ))}
    </styled.List>
  );
};
