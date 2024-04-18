import { createInstance } from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { initReactI18next } from "react-i18next/initReactI18next";
import { fallbackLocale, getOptions } from "./options";
import type { Namespace } from "i18next";
import type { Locale } from "./options";

const initI18next = async (locale: Locale, namespace: Namespace) => {
  const i18nInstance = createInstance();

  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        (resourceLocale: string, resourceNamespace: string) =>
          import(`./locales/${resourceLocale}/${resourceNamespace}.json`)
      )
    )
    .init(getOptions(locale, namespace));

  return i18nInstance;
};

export const getTranslation = async (namespace: Namespace) => {
  const locale = fallbackLocale;
  const i18nextInstance = await initI18next(locale, namespace);

  console.log(i18nextInstance.store);

  return {
    i18n: i18nextInstance,
    t: i18nextInstance.getFixedT(locale, namespace, undefined),
  };
};
