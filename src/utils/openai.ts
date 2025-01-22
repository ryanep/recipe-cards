import { OpenAI } from "openai";
import { config } from "#/config";

export const generateRecipe = async (prompt: string) => {
  const client = new OpenAI({
    apiKey: config.OPENAI_API_KEY,
  });

  const context = `
Generate and return only a JSON payload which adheres to the following TypeScript interface. Do not wrap the response in markdown.

interface Recipe {
  name: string;
  description: string;
  ingredients: {
    name: string;
    quantity: number;
    unit: string;
  }[]
  steps: {
    name: string;
    order: number;
  }[]
}

Give a recipe for the following, ensuring the recipe is normalised down to 1 serving and using metric measurements. Be specific but concise with the instruction steps and only include critical steps.

Capitalise the ingredient names.
Ensure the steps are sentence case and end with a period.

${prompt}
`;

  try {
    const response = await client.chat.completions.create({
      messages: [{ content: context, role: "assistant" }],
      model: "gpt-4o",
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error("Error generating recipe:", error);

    return null;
  }
};
