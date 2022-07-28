import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { ar } from "./languages/ar";
import { en } from "./languages/en";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    ar: {
      translation: ar,
    },
    default: {
      translation: en,
    },
  },
  react: {
    useSuspense: false, //   <---- this will do the magic
  },
});

export default i18n;
