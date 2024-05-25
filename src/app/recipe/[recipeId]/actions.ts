"use server";
import { cookies } from "next/headers";

const servingSizeCookieName = "servingSize";
const defaultServingSize = 1;

export const reduceServingSize = () => {
  const currentServingSize = cookies().get(servingSizeCookieName)?.value
    ? Number(cookies().get(servingSizeCookieName)?.value)
    : defaultServingSize;

  if (currentServingSize === 1) {
    return;
  }

  cookies().set(servingSizeCookieName, String(currentServingSize - 1));
};

export const increaseServingSize = () => {
  const currentServingSize = cookies().get(servingSizeCookieName)?.value
    ? Number(cookies().get(servingSizeCookieName)?.value)
    : defaultServingSize;

  cookies().set(servingSizeCookieName, String(currentServingSize + 1));
};
