import React, { useState } from "react";
import Navbar from "../layouts/nav";
import Footer from "../layouts/Footer";
import bootverif from "./../images/bootverif.PNG";
import { useTranslation } from "react-i18next";

export default function VerificationTool() {
  const { t } = useTranslation();
  const [inputValue, setInputValue] = useState("");
  const [verificationResult, setVerificationResult] = useState(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate verification process
    setTimeout(() => {
      if (inputValue === "valid") {
        setVerificationResult(
          "Succès : La vérification est positive. Vous êtes sécurisé."
        );
      } else {
        setVerificationResult(
          "Erreur : La vérification a échoué. Veuillez réessayer."
        );
      }
    }, 1500);
  };

  return (
    <div className="all">
      <Navbar />
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto bg-white shadow-lg p-8 flex flex-col md:flex-row items-center">
          <div className="flex-1 rounded flex justify-center">
            <img
              src={bootverif}
              alt="Verification"
              className="w-3/4 md:w-full object-contain scale-75"
            />
          </div>
          <div className="flex-1 p-8">
            <h2 className="text-3xl font-semibold mb-4 text-center">
              {t("bootverif_title")}{" "}
              <span className="text-green-500 text-4xl">✔</span>
            </h2>
            <p className="text-lg mb-6 text-center">
              {t("security_priority")}
            </p>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  placeholder={t("enter_info")}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700"
                disabled
              >
                {t("no_access")}
              </button>
            </form>
            {verificationResult && (
              <div
                className={`mt-8 p-4 rounded-lg ${
                  verificationResult.startsWith("Succès")
                    ? "bg-green-100"
                    : "bg-red-100"
                }`}
              >
                <p
                  className={`text-center font-semibold ${
                    verificationResult.startsWith("Succès")
                      ? "text-green-700"
                      : "text-red-700"
                  }`}
                >
                  {verificationResult}
                </p>
              </div>
            )}
          </div>
        </div>

        <section className="bg-gray-100 py-8 mt-8">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-4 text-center">
              {t("why_use")}
            </h2>
            <div className="text-center text-lg">
              <p className="mb-4">
                {t("verification_tool")}
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <li>{t("user_security")}</li>
                <li>{t("unauthorized_prevention")}</li>
                <li>{t("info_integrity")}</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
