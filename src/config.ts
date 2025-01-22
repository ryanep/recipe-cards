import { z } from "zod";

const configValidationSchema = z.object({
  DATABASE_URL: z.string().default("file: ./recipes.sqlite"),
  OPENAI_API_KEY: z.string().optional(),
});

export const config = configValidationSchema.parse(process.env);
