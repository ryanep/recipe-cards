import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { resources } from "./translations";

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
      format: (value: number, format) => {
        if (format === "measurement") {
          return value % 1 !== 0
            ? value.toFixed(2).toString()
            : value.toString();
        }

        return value.toString();
      },
    },
    lng: "en",
    resources,
  })
  .catch((error: unknown) => {
    console.error("An error initialising i18n.", error);
  });
