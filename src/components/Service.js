import React from "react";
import Navbar from "../layouts/nav";
import Footer from "../layouts/Footer";
import { useTranslation } from "react-i18next";
import "./style1.css";
import { Link } from "react-router-dom";
import familyLawImage from "./../images/family law.png";
import employmentLawImage from "./../images/contract.png";
import criminalLawImage from "./../images/téléchargement.png";
import mediationImage from "./../images/mediation.png";

export default function NosServices() {
  const { t } = useTranslation();

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

  const service = [
    {
      title: t('maritime_law'),
      description: t('family_law_desc'),
      image: "",
      id: 1,
    },
    {
      title: t('corporate_law'),
      description: t('labor_law_desc'),
      image: "",
      id: 2,
    },
    {
      title: t('commercial_law'),
      description: t('criminal_law_desc'),
      image: "",
      id: 3,
    },
    {
      title: t('mediation'),
      description: t('mediation_desc'),
      image: "",
      id: 4,
    },
  ];

 function onSliceText(text, size ) {
 const returnVal =   text&&text.length > size?text.slice(0,size)+ "...": text
 console.log(returnVal.length)
 return returnVal
 }
  return (
    <div className="all">
      <Navbar />
      <div className="bg-gray-100 py-16">
        <div className="mx-5 p-auto text-center mb-8">
          <h2 className="text-4xl font-semibold mb-4 animate-fadeIn">
            {t('welcome_services')}
          </h2>
          <p className="text-lg text-gray-600 ">
            {t('services_description')}
          </p>
          <div className="mt-8 space-x-4">
            {service.map((service, index) => (
            
              <div
              className="text-red-500 hover:underline mt-4 inline-block"
              >
                {service.title}
            </div>
             
            ))}
            <a className="text-red-500 hover:none transition duration-300">
              Etc ...
            </a>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                id={service.id}
                className="flex flex-col md:flex-row items-center animate-slideIn transition duration-700 ease-in-out transform hover:scale-105"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full md:w-1/3 h-40 object-cover rounded mb-4 md:mb-0"
                />
                <div className="md:ml-6 text-center md:text-left p-4 border border-gray-200 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-semibold text-gray-800">
                   {onSliceText (service.title,20)}
                  </h3>
                  <p className="text-gray-600 mt-2 text-justifys">{onSliceText(service.description, 150)}</p>
                  <Link
                    to={`/services/${service.id}`}
                    className="text-red-500 hover:underline mt-4 inline-block"
                  >
                      En savoir plus ...
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
