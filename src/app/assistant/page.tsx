import { redirect } from "next/navigation";
import { Button } from "#/components/button";
import { Heading } from "#/components/heading";
import { database } from "#/database";
import { generateRecipe } from "#/utils/openai";
import { buildRecipePageUrl } from "#/utils/page";

interface OpenAiRecipe {
  description: string;
  ingredients: {
    name: string;
    quantity: number;
    unit: string;
  }[];
  name: string;
  steps: {
    name: string;
    order: number;
  }[];
}

const submit = async (formData: FormData) => {
  "use server";

  // eslint-disable-next-line @typescript-eslint/no-base-to-string
  const prompt = formData.get("prompt")?.toString();

  if (!prompt) {
    throw new Error("No valid prompt.");
  }

  const response = await generateRecipe(prompt);

  if (!response) {
    throw new Error("Failed to generate recipe.");
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
  const jsonData = JSON.parse(response) as OpenAiRecipe;

  const recipe = await database.recipe.create({
    data: {
      description: jsonData.description,
      imageUrl: "",
      ingredients: {
        createMany: {
          data: jsonData.ingredients,
        },
      },
      name: jsonData.name,
      rating: 1,
      steps: {
        createMany: {
          data: jsonData.steps,
        },
      },
    },
  });

  redirect(buildRecipePageUrl(recipe.id));
};

const AssistantPage = () => {
  return (
    <div>
      <div className="mb-8">
        <Heading type="h1">Assistant</Heading>

        <p className="text-lg font-medium text-neutral-500 dark:text-neutral-400">
          Generate and find new recipes.
        </p>
      </div>

      <form action={submit}>
        <label htmlFor="prompt">
          <span className="mb-4 block">What would you like a recipe for?</span>

          <input
            className="mb-4 w-full rounded bg-neutral-800 p-2"
            id="prompt"
            name="prompt"
            type="text"
          />
        </label>

        <Button type="submit">Generate recipe</Button>
      </form>
    </div>
  );
};

export default AssistantPage;
