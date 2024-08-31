// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Translation resources
const resources = {
  en: {
    translation: {
      welcome: "Welcome to our website!",
      contact_us: "Contact Us",
      services: "Our Services",
      about_us: "About Us",
      home: "Home",
      // Add more translations as needed
    },
  },
  fr: {
    translation: {
      home1:
        "Votre conseiller juridique De longues années d'expérience en tant qu'avocat spécialisé en droit de la famille et du travail",
      home2: "",
      welcome: "Bienvenue sur notre site!",
      contact_us: "Contactez-nous",
      services: "Nos services",
      about_us: "À propos de nous",
      home: "Accueil",
      // Add more translations as needed
    },
  },
  // Add other languages as needed
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
