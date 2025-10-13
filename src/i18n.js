import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

console.log("i18n load path:", `${import.meta.env.BASE_URL}locales/{{lng}}/translation.json`);

i18n
  .use(Backend) // load translations via http (good for lazy loading)
  .use(LanguageDetector) // detect user language
  .use(initReactI18next) // pass the i18n instance to react-i18next.
  .init({
    fallbackLng: "en",
    debug: true, // Enable debug logs to see what's happening
    interpolation: {
      escapeValue: false, // react already escapes
    },
    backend: { // ✅ FIXED: Changed "balbackend" to "backend"
      loadPath: `${import.meta.env.BASE_URL}locales/{{lng}}/translation.json`,
    },
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator'],
      caches: ['cookie', 'localStorage']
    }
  });

export default i18n;