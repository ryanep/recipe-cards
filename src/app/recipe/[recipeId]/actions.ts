"use server";
import { cookies } from "next/headers";

const servingSizeCookieName = "servingSize";
const defaultServingSize = 1;

export const reduceServingSize = async () => {
  const cookieStore = await cookies();

  const currentServingSize = cookieStore.get(servingSizeCookieName)?.value
    ? Number(cookieStore.get(servingSizeCookieName)?.value)
    : defaultServingSize;

  if (currentServingSize === 1) {
    return;
  }

  cookieStore.set(servingSizeCookieName, String(currentServingSize - 1));
};

export const increaseServingSize = async () => {
  const cookieStore = await cookies();

  const currentServingSize = cookieStore.get(servingSizeCookieName)?.value
    ? Number(cookieStore.get(servingSizeCookieName)?.value)
    : defaultServingSize;

  cookieStore.set(servingSizeCookieName, String(currentServingSize + 1));
};
