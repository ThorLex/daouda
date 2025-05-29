import React from "react";
import Navbar from "../layouts/nav";
import Footer from "../layouts/Footer";
import aboutImage from "../images/marteau.jpg"; // Exemple d'image, remplacez par une image réelle
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function APropos() {
  const navigate = useNavigate();
   const {t}= useTranslation()
  return (
    <div className="all">
      <Navbar />
      <div className="bg-gray-100 py-16 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 p-8 bg-white rounded-xl shadow-2xl mb-8 md:mb-0 flex flex-col items-center">
              <div className="mb-8 flex flex-col items-center w-full">
                <div className="rounded-full border-8 border-red-100 shadow-lg p-2 bg-white flex items-center justify-center mb-6" style={{width:'200px',height:'200px'}}>
                  <img
                    src={aboutImage}
                    alt="À Propos de Nous"
                    className="object-cover w-full h-full rounded-full"
                    style={{maxWidth:'180px',maxHeight:'180px'}}
                  />
                </div>
                <h2 className="text-4xl font-bold mb-4 text-red-950 text-center"> {t("about_us")} </h2>
                <p className="text-lg text-gray-700 mb-4 italic text-center">
                  {t("discover_more")}
                </p>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-red-950 pb-2 text-center">
                  {t("firm_overview")}
                </h2>
                <p className="text-gray-700 mb-4 text-center">
                  {t("about_intro")}
                </p>
                <p className="text-gray-600 mb-8 text-center">
                  {t("about_description")}
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8 w-full">
                <div className="bg-white p-6 rounded-lg shadow-md border border-red-100">
                  <h3 className="text-xl font-bold text-red-950 mb-2">
                    {t("expertise")}
                  </h3>
                  <p className="text-gray-700 text-sm">{t("expertise_desc")}</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-red-100">
                  <h3 className="text-xl font-bold text-red-950 mb-2">
                    {t("dedication")}
                  </h3>
                  <p className="text-gray-700 text-sm">{t("dedication_desc")}</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-red-100">
                  <h3 className="text-xl font-bold text-red-950 mb-2">
                    {t("innovation")}
                  </h3>
                  <p className="text-gray-700 text-sm">{t("innovation_desc")}</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border border-red-100">
                  <h3 className="text-xl font-bold text-red-950 mb-2">
                    {t("integrity")}
                  </h3>
                  <p className="text-gray-700 text-sm">{t("integrity_desc")}</p>
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-red-950 pb-2 text-center">
                {t("our_mission")}
              </h2>
              <p className="text-gray-700 mb-8 text-center">
                {t("mission_statement")}
              </p>
              <button
                onClick={() => navigate("/contact")}
                className="bg-red-950 text-white px-8 py-3 rounded-lg shadow hover:bg-red-800 transition-colors text-lg font-semibold mx-auto block"
              >
                {t('get_in_touch')}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
