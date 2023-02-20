import i18next from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  uk: {
    translation: {
      home: "головна",
      news: "новини",
      profile: "профіль",
      login: "увійти",
    },
  },
  en: {
    translation: {
      home: "home",
      news: "news",
      profile: "profile",
      login: "login",
    },
  },
};
i18next.use(initReactI18next).init({
  lng: "uk",
  resources,
  interpolation: {
    escapeValue: false,
  },
});
export default i18next;
