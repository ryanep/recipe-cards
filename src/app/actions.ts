"use server";
import { redirect } from "next/navigation";

export const filtersSubmit = (formData: FormData) => {
  const nameInput = formData.get("name")?.toString();

  const queryString = nameInput ? `?search=${nameInput}` : "";

  return redirect(`/${queryString}`);
};
