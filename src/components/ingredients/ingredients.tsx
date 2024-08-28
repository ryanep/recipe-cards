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
    <ul className="grid w-full flex-wrap gap-1 md:grid-cols-2 lg:grid-cols-3">
      {ingredients.map((ingredient, index) => {
        const inputId = `${id}-${index}`;

        return (
          <li className="relative font-bold" key={ingredient.id}>
            <label
              className="flex h-full cursor-pointer items-center rounded-md bg-white px-4 py-2 shadow-sm dark:bg-black"
              htmlFor={inputId}
            >
              <span className="sr-only">{ingredient.name}</span>

              <input
                className="peer sr-only"
                id={inputId}
                type="checkbox"
                value={index}
              />

              <span className="mr-3 flex aspect-square w-5 shrink-0 items-center justify-center rounded-sm border-2 border-neutral-700 text-white peer-checked:border-green-600 peer-checked:bg-green-600 peer-checked:before:text-xs peer-checked:before:font-bold peer-checked:before:content-['✓']" />

              <span className="flex flex-col">
                <span className="block text-sm text-green-600 dark:text-green-300">
                  {ingredient.quantity * servingSize} {ingredient.unit}
                </span>

                <span className="font-black leading-tight">
                  {ingredient.name}
                </span>
              </span>
            </label>
          </li>
        );
      })}
    </ul>
  );
};
