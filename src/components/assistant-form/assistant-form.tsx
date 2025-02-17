"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "#/components/button";
import { assistantAction } from "./actions";

const objectToFormData = (object: Record<string, unknown>): FormData => {
  const formData = new FormData();

  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      // @ts-expect-error TODO: Revisit
      formData.append(key, object[key]);
    }
  }

  return formData;
};

const validationSchema = z.object({
  prompt: z.string(),
});

export const AssistantForm = () => {
  const {
    formState: { isSubmitting },
    handleSubmit,
    register,
  } = useForm({
    resolver: zodResolver(validationSchema),
  });

  const handleFormSubmit = handleSubmit(async (data) => {
    const formData = objectToFormData(data);

    await assistantAction(formData);
  });

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="prompt">
        <span className="mb-4 block">What would you like a recipe for?</span>

        <input
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...register("prompt")}
          className="mb-4 w-full rounded-sm bg-neutral-800 p-2"
          id="prompt"
          type="text"
        />
      </label>

      <Button isLoading={isSubmitting} type="submit">
        Generate recipe
      </Button>
    </form>
  );
};
