import React from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../layouts/nav";
import Footer from "../layouts/Footer";
import "./style.css";
import pic1 from "./../images/pexels-matreding-4646777.jpg";
import pic2 from "./../images/pexels-pavel-danilyuk-8112195.jpg";

export default function AboutUs() {
  const { t } = useTranslation();

  return (
    <div className="all">
      <Navbar />
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              {t("about_title")}
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              {t("about_subtitle")}
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {t("firm_overview")}
                </h2>
                <p className="text-gray-600 mb-4">
                  {t("about_intro")}
                </p>
                <p className="text-gray-600">
                  {t("about_description")}
                </p>
              </div>
              <div className="lg:pl-8">
                <img
                  src={pic1}
                  alt="Law Office"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              {t("why_choose_us")}
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {t("expertise")}
                </h3>
                <p className="text-gray-600">
                  {t("expertise_desc")}
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {t("dedication")}
                </h3>
                <p className="text-gray-600">
                  {t("dedication_desc")}
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {t("innovation")}
                </h3>
                <p className="text-gray-600">
                  {t("innovation_desc")}
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {t("integrity")}
                </h3>
                <p className="text-gray-600">
                  {t("integrity_desc")}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div className="lg:pr-8">
                <img
                  src={pic2}
                  alt="Law Practice"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {t("our_mission")}
                </h2>
                <p className="text-gray-600">
                  {t("mission_statement")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
