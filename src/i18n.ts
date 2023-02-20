import i18next from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      home: "home",
      news: "news",
      profile: "profile",
      login: "login",
    },
  },
  ua: {
    translation: {
      home: "головна",
      news: "новини",
      profile: "профіль",
      login: "увійти",
    },
  },
};
i18next.use(initReactI18next).init({
  lng: "en",
  resources,
  interpolation: {
    escapeValue: false,
  },
});
export default i18next;
