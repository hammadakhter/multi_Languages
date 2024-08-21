// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "welcome": "Welcome to React Project",
    }
  },
  ur: {
    translation: {
      "welcome": "ریئیکٹ پروجیکٹ میں خوش آمدید",
    }
  },
  es: {
    translation: {
      "welcome": "Bienvenido al proyecto React",
    }
  },
  fr: {
    translation: {
      "welcome": "Bienvenue dans le projet React",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
