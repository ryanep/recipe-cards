import { z } from "zod";

const configValidationSchema = z.object({
  DATABASE_URL: z.string().default("file: ./recipes.sqlite"),
});

export const config = configValidationSchema.parse(process.env);
