import { useId } from "react";

interface IngredientsProps {
  readonly ingredients: {
    id: string;
    name: string;
    quantity: number;
    unit: string;
  }[];
  readonly servingSize: number;
}

export const Ingredients = ({ ingredients, servingSize }: IngredientsProps) => {
  const id = useId();

  return (
    <ul className="grid w-full flex-wrap gap-0.5 overflow-hidden rounded-md border-2 border-neutral-100 bg-neutral-100 md:grid-cols-2 lg:grid-cols-3 dark:border-neutral-700 dark:bg-neutral-800">
      {ingredients.map((ingredient, index) => (
        <li className="relative font-bold" key={ingredient.id}>
          <label
            className="flex h-full cursor-pointer items-center bg-white px-4 py-2 dark:bg-black"
            htmlFor={`${id}-${index}`}
          >
            <input
              className="peer sr-only"
              id={`${id}-${index}`}
              type="checkbox"
              value={index}
            />

            {/* eslint-disable-next-line tailwindcss/no-arbitrary-value */}
            <span className="mr-3 flex aspect-square w-5 shrink-0 items-center justify-center rounded-sm border-2 border-neutral-700 text-white peer-checked:border-green-600 peer-checked:bg-green-600 peer-checked:before:text-xs peer-checked:before:font-bold peer-checked:before:content-['✓']" />

            <div className="flex flex-col">
              <div className="text-sm text-green-600 dark:text-green-300">
                {ingredient.quantity * servingSize} {ingredient.unit}
              </div>

              <div className="font-black leading-tight">{ingredient.name}</div>
            </div>
          </label>
        </li>
      ))}
    </ul>
  );
};
