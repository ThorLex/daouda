import React from "react";
import Navbar from "../layouts/nav";
import Footer from "../layouts/Footer";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import familyLawImage from "./../images/family law.png";
import employmentLawImage from "./../images/contract.png";
import criminalLawImage from "./../images/téléchargement.png";
import mediationImage from "./../images/mediation.png";

export default function ServiceDetail() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { id } = useParams();

  const services = [
    {
      title: t('family_law'),
      description: t('family_law_desc'),
      image: familyLawImage,
      id: 1,
    },
    {
      title: t('labor_law'),
      description: t('labor_law_desc'),
      image: employmentLawImage,
      id: 2,
    },
    {
      title: t('criminal_law'),
      description: t('criminal_law_desc'),
      image: criminalLawImage,
      id: 3,
    },
    {
      title: t('mediation'),
      description: t('mediation_desc'),
      image: mediationImage,
      id: 4,
    },
  ];

  // Convert id from useParams to a number
  const serviceId = Number(id);
  const service = services.find((service) => service.id === serviceId);

  // Redirect to 404 if service is not found
  if (!service) {
    navigate("/404");
    return null;
  }

  return (
    <div className="all">
      <Navbar />
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 relative">
          {/* Bouton de retour */}
          <button
            onClick={() => navigate(-1)}
            className="absolute top-0 left-0 mt-4 ml-4 bg-red-950 text-white px-4 py-2 rounded hover:bg-red-800 transition-colors"
          >
            {t('back')}
          </button>

          <div className="flex flex-col md:flex-row items-center mt-12">
            <div className="flex-1 p-8">
              <h1 className="text-4xl font-semibold mb-4">{service.title}</h1>
              <p className="text-lg text-red-900 mb-6">
                {t('discover_service')} <strong className="text-balance">{service.title}</strong>
              </p>
              <p className="text-gray-600 mb-4 text-justify leading-6  text-justify first-letter:ml-10 first-letter:font-semibold first-letter:text-3xl">
                {service.description}
              </p>
              <p className="text-gray-600 mb-4">
                {t('contact_for_more_info')}
              </p>
              {/* Bouton "Contactez-nous" */}
              <div className="flex justify-end mt-4">
                <button
                  onClick={() => navigate("/contact")}
                  className="bg-red-950 text-white px-6 py-3 rounded hover:bg-red-800 transition-colors"
                >
                  {t('contact_us')}
                </button>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <img
                src={service.image}
                alt={service.title}
                className="w-3/4 md:w-full object-contain rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
