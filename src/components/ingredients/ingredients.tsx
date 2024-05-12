"use client";
import { useId, useState } from "react";
import { useTranslation } from "#/i18n/client";

interface IngredientsProps {
  readonly ingredients: {
    id: string;
    name: string;
    quantity: number;
    unit: string;
  }[];
}

export const Ingredients = ({ ingredients }: IngredientsProps) => {
  const { t } = useTranslation("units");
  const id = useId();
  const [selectedIngredientIds, setSelectedIngredientIds] = useState<string[]>(
    []
  );

  const handleIngredientClick = (ingredientId: string) => {
    setSelectedIngredientIds((previousIngredientIds) => {
      const isPreviouslySelected = previousIngredientIds.includes(ingredientId);

      return isPreviouslySelected
        ? previousIngredientIds.filter(
            (previousIngredientId) => previousIngredientId !== ingredientId
          )
        : [...previousIngredientIds, ingredientId];
    });
  };

  return (
    <ul className="grid w-full flex-wrap gap-0.5 overflow-hidden rounded-md border-2 border-neutral-700 bg-neutral-800 md:grid-cols-2 lg:grid-cols-3">
      {ingredients.map((ingredient, index) => (
        <li className="relative font-bold" key={ingredient.id}>
          <label
            className="flex cursor-pointer items-center bg-black p-2"
            htmlFor={`${id}-${index}`}
          >
            <input
              checked={selectedIngredientIds.includes(ingredient.id)}
              className="peer sr-only"
              id={`${id}-${index}`}
              onChange={() => {
                handleIngredientClick(ingredient.id);
              }}
              type="checkbox"
              value={index}
            />

            {/* eslint-disable-next-line tailwindcss/no-arbitrary-value */}
            <span className="mr-3 flex aspect-square w-5 shrink-0 items-center justify-center rounded-sm border-2 border-neutral-700 text-white peer-checked:border-green-600 peer-checked:bg-green-600 peer-checked:before:text-xs peer-checked:before:font-bold peer-checked:before:content-['✓']" />

            <div className="flex flex-col">
              <div className="text-sm text-green-300">
                {ingredient.quantity} {ingredient.unit}
              </div>

              <div className="font-black">{ingredient.name}</div>
            </div>
          </label>
        </li>
      ))}
    </ul>
  );
};
