"use client";
import { useState } from "react";
import { Button } from "#/components/button";
import { Heading } from "#/components/heading";
import { Image } from "#/components/image";
import { Input } from "#/components/input";
import { Select } from "#/components/select";
import { Textarea } from "#/components/textarea";

const ratingOptions = [
  {
    label: "5 stars",
    value: "5",
  },
  {
    label: "4 stars",
    value: "4",
  },
  {
    label: "3 stars",
    value: "3",
  },
  {
    label: "2 stars",
    value: "2",
  },
  {
    label: "1 star",
    value: "1",
  },
];

interface RecipeFormProps {
  readonly formAction: (formData: FormData) => void;
  readonly initialValues?: {
    description?: string;
    id?: string;
    imageUrl?: string;
    ingredients: {
      id: string;
      name: string;
      quantity: number;
      unit: string;
    }[];
    name?: string;
    rating?: number;
    steps: {
      id: string;
      name: string;
      order: number;
    }[];
  };
  readonly mode: "create" | "edit";
}

const defaultIngredientCount = 1;
const defaultStepCount = 1;

export const RecipeForm = ({
  formAction,
  initialValues,
  mode,
}: RecipeFormProps) => {
  const [ingredientCount, setIngredientCount] = useState(
    initialValues?.ingredients.length ?? defaultIngredientCount
  );
  const [stepCount, setStepCount] = useState(
    initialValues?.steps.length ?? defaultStepCount
  );

  return (
    <form action={formAction} className="flex flex-col gap-2">
      <input name="recipeId" type="hidden" value={initialValues?.id} />

      <div>
        <Heading as="h5" className="mb-2" type="h2">
          General
        </Heading>

        <div className="mb-8 flex flex-col gap-6 md:flex-row">
          <label
            className="group relative inline-block aspect-square w-[300px] cursor-pointer"
            htmlFor="image"
          >
            <div className="sr-only">
              <Input id="image" name="image" type="file" />
            </div>

            {initialValues?.imageUrl ? (
              <Image
                alt={initialValues.name ?? ""}
                className="aspect-square rounded-md object-cover"
                height={300}
                src={`/image?id=${initialValues.id}`}
                width={300}
              />
            ) : null}

            <div className="invisible absolute left-0 top-0 flex size-full items-center justify-center bg-black/60 font-bold backdrop-blur-xs group-hover:visible">
              Upload image
            </div>
          </label>

          <div className="flex grow flex-col gap-4">
            <label className="block" htmlFor="name">
              <span className="mb-2 block font-bold">Recipe name</span>

              <Input
                defaultValue={initialValues?.name}
                id="name"
                isRequired
                name="name"
                type="text"
              />
            </label>

            <label className="flex grow flex-col" htmlFor="description">
              <span className="mb-2 block font-bold">Description</span>

              <Textarea
                defaultValue={initialValues?.description}
                id="description"
                isRequired
                name="description"
              />
            </label>

            <label className="block" htmlFor="rating">
              <span className="mb-2 block font-bold">Rating</span>

              <Select
                defaultValue={initialValues?.rating}
                id="rating"
                isRequired
                name="rating"
                options={ratingOptions}
              />
            </label>
          </div>
        </div>
      </div>

      <div>
        <div className="flex gap-2">
          <Heading as="h5" className="mb-2" type="h2">
            Ingredients
          </Heading>

          <button
            className="ml-auto"
            onClick={() => {
              setIngredientCount(
                (previousIngredientCount) => previousIngredientCount + 1
              );
            }}
            type="button"
          >
            Add ingredient
          </button>
        </div>

        <div>
          {Array.from({ length: ingredientCount }).map((_, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <div className="flex gap-2" key={index}>
              <input
                name="ingredientId[]"
                type="hidden"
                value={initialValues?.ingredients[index]?.id}
              />

              <label htmlFor={`ingredient-name-${index}`}>
                <span>Name</span>

                <Input
                  defaultValue={initialValues?.ingredients[index]?.name}
                  id={`ingredient-name-${index}`}
                  isRequired
                  name="ingredientName[]"
                  type="text"
                />
              </label>

              <label htmlFor={`ingredient-quantity-${index}`}>
                <span>Amount</span>

                <Input
                  defaultValue={initialValues?.ingredients[index]?.quantity}
                  id={`ingredient-quantity-${index}`}
                  isRequired
                  name="ingredientQuantity[]"
                  type="number"
                />
              </label>

              <label htmlFor={`ingredient-unit-${index}`}>
                <span>Unit</span>

                <Input
                  defaultValue={initialValues?.ingredients[index]?.unit}
                  id={`ingredient-unit-${index}`}
                  isRequired
                  name="ingredientUnit[]"
                  type="text"
                />
              </label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="flex gap-2">
          <Heading as="h5" className="mb-2" type="h2">
            Steps
          </Heading>

          <button
            className="ml-auto"
            onClick={() => {
              setStepCount((previousStepCount) => previousStepCount + 1);
            }}
            type="button"
          >
            Add step
          </button>
        </div>

        {Array.from({ length: stepCount }).map((_, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={index}>
            <input
              name="stepId[]"
              type="hidden"
              value={initialValues?.steps[index]?.id}
            />

            <label htmlFor={`step-${index}`}>
              <span>Step {index + 1}</span>

              <Textarea
                defaultValue={initialValues?.steps[index]?.name}
                id={`step-${index}`}
                isRequired
                name="step[]"
              />
            </label>
          </div>
        ))}
      </div>

      <div>
        <Button type="submit">
          {mode === "create" ? "Create Recipe" : null}
          {mode === "edit" ? "Edit Recipe" : null}
        </Button>
      </div>
    </form>
  );
};
