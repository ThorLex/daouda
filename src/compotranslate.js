// src/App.js
import React from "react";
import { useTranslation } from "react-i18next";
import Footer from "./Footer.js";

export default function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>{t("welcome")}</h1>
        <div>
          <button onClick={() => changeLanguage("en")}>English</button>
          <button onClick={() => changeLanguage("fr")}>Français</button>
          {/* Add more buttons for other languages */}
        </div>
      </header>
      <main>
        <p>{t("services")}</p>
        <p>{t("about_us")}</p>
        <p>{t("contact_us")}</p>
      </main>
      <Footer />
    </div>
  );
}
