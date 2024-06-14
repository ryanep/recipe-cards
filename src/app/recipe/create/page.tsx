"use client";
import { useState } from "react";
import { Button } from "#/components/button";
import { Heading } from "#/components/heading";
import { Input } from "#/components/input";
import { Select } from "#/components/select";
import { Textarea } from "#/components/textarea";
import { createRecipeAction } from "./actions";

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

const CreateRecipePage = () => {
  const [ingredientCount, setIngredientCount] = useState(1);
  const [stepCount, setStepCount] = useState(1);

  return (
    <div>
      <Heading type="h1">Create recipe</Heading>

      <form action={createRecipeAction} className="flex flex-col gap-2">
        <div>
          <Heading as="h5" type="h2">
            General
          </Heading>

          <label className="block" htmlFor="name">
            <span className="block">Recipe name</span>

            <Input id="name" name="name" type="text" />
          </label>

          <label className="block" htmlFor="description">
            <span className="block">Description</span>

            <Textarea id="description" name="description" />
          </label>

          <label className="block" htmlFor="image">
            <span className="block">Image</span>

            <Input id="image" name="image" type="file" />
          </label>

          <label className="block" htmlFor="rating">
            <span className="block">Rating</span>

            <Select
              id="rating"
              isRequired
              name="rating"
              options={ratingOptions}
            />
          </label>
        </div>

        <div>
          <div className="flex gap-2">
            <Heading as="h5" type="h2">
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
                <label htmlFor={`ingredient-quantity-${index}`}>
                  <span>Amount</span>

                  <Input
                    id={`ingredient-quantity-${index}`}
                    name="ingredientQuantity[]"
                    type="number"
                  />
                </label>

                <label htmlFor={`ingredient-unit-${index}`}>
                  <span>Unit</span>

                  <Input
                    id={`ingredient-unit-${index}`}
                    name="ingredientUnit[]"
                    type="text"
                  />
                </label>

                <label htmlFor={`ingredient-name-${index}`}>
                  <span>Name</span>

                  <Input
                    id={`ingredient-name-${index}`}
                    name="ingredientName[]"
                    type="text"
                  />
                </label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex gap-2">
            <Heading as="h5" type="h2">
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
              <label htmlFor={`step-${index}`}>
                Step {index + 1}
                <Input id={`step-${index}`} name="step[]" type="text" />
              </label>
            </div>
          ))}
        </div>

        <div>
          <Button type="submit">Create recipe</Button>
        </div>
      </form>
    </div>
  );
};

export default CreateRecipePage;
