import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "../layouts/nav";
import Footer from "../layouts/Footer";

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <div className="all">
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center py-16">
        <div className="text-center">
          <h1 className="text-9xl font-bold text-red-900">404</h1>
          <h2 className="text-4xl font-bold text-gray-800 mt-4">
            {t("page_not_found")}
          </h2>
          <p className="text-gray-600 mt-4 text-lg">
            {t("page_not_found_desc")}
          </p>
          <Link
            to="/"
            className="mt-8 inline-block bg-red-900 text-white px-6 py-3 rounded-lg hover:bg-red-800 transition-colors"
          >
            {t("back_to_home")}
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
