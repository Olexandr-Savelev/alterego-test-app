import i18next from "i18next";
import { initReactI18next } from "react-i18next";
// "Inline" English and Arabic translations.
// We can localize to any language and any number of languages.
const resources = {
  en: {
    translation: {
      home: "home",
      news: "news",
      profile: "profile",
    },
  },
  ua: {
    translation: {
      home: "головна",
      news: "новини",
      profile: "профіль",
    },
  },
};
// .use(initReactI18next)
i18next.use(initReactI18next).init({
  lng: "en",
  resources,
  interpolation: {
    escapeValue: false,
  },
});
export default i18next;
