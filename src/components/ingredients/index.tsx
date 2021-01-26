import * as styled from './styles';
import { IngredientsProps } from './types';

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
            <styled.Input
              type="checkbox"
              onChange={() => onIngredientClick(ingredient.id)}
              value={index}
              checked={selectedIngredients.includes(ingredient.id)}
            />
            <styled.Checkbox />
            <div>
              <styled.Amount>
                {ingredient.amount % 1 !== 0
                  ? ingredient.amount.toFixed(2)
                  : ingredient.amount}{' '}
                {ingredient.unit}
              </styled.Amount>
              <styled.Name>{ingredient.name}</styled.Name>
            </div>
          </styled.Label>
        </styled.Ingredient>
      ))}
    </styled.List>
  );
};
