import common from "./locales/en/common.json";
import filters from "./locales/en/filters.json";
import home from "./locales/en/home.json";
import recipe from "./locales/en/recipe.json";
import units from "./locales/en/units.json";
import type { Namespace } from "i18next";

export const fallbackLocale = "en";
export const supportedLocales = [fallbackLocale];
export const defaultNamespace = "common";
export const resources = {
  en: {
    common,
    filters,
    home,
    recipe,
    units,
  },
} as const;

export type Locale = "en";

export const getOptions = (
  locale: Locale = fallbackLocale,
  namespace: Namespace = defaultNamespace
) => {
  return {
    defaultNS: defaultNamespace,
    fallbackLng: fallbackLocale,
    fallbackNS: defaultNamespace,
    lng: locale,
    ns: namespace,
    supportedLngs: supportedLocales,
  };
};
