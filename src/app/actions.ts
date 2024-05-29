"use server";
import { redirect, RedirectType } from "next/navigation";

export const filtersSubmit = (formData: FormData) => {
  const nameInput = formData.get("name")?.toString();
  const ratingInput = formData.get("rating")?.toString();

  const queryString = new URLSearchParams();

  if (nameInput) {
    queryString.append("search", nameInput);
  }

  if (ratingInput) {
    queryString.append("rating", ratingInput);
  }

  return redirect(`/?${queryString.toString()}`, RedirectType.replace);
};
