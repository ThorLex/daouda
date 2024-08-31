import React from "react";
import Navbar from "../layouts/nav";
import Footer from "../layouts/Footer";

import "./style1.css"; // Pour les styles et animations personnalisés
import { Link } from "react-router-dom";
import familyLawImage from "./../images/family law.png";
import employmentLawImage from "./../images/contract.png";
import criminalLawImage from "./../images/téléchargement.png";
import mediationImage from "./../images/mediation.png";

export default function NosServices() {
  const services = [
    {
      title: "Droit de la Famille",
      description:
        "Notre équipe fournit des conseils et une représentation juridique experte dans tous les domaines du droit de la famille, y compris le divorce, la garde des enfants, et plus encore.",
      image: familyLawImage,
      id: 1,
    },
    {
      title: "Droit du Travail",
      description:
        "Nous assistons nos clients dans divers problèmes de droit du travail, y compris le licenciement abusif, la discrimination, et le harcèlement.",
      image: employmentLawImage,
      id: 2,
    },
    {
      title: "Droit Pénal",
      description:
        "Nos avocats spécialisés en défense pénale ont une vaste expérience dans la défense des clients contre une large gamme d'accusations criminelles.",
      image: criminalLawImage,
      id: 3,
    },
    {
      title: "Services de Médiation",
      description:
        "Nous offrons des services de médiation pour aider les clients à résoudre les litiges en dehors des tribunaux, ce qui permet de gagner du temps et de réduire les coûts.",
      image: mediationImage,
      id: 4,
    },
  ];

  return (
    <div className="all">
      <Navbar />
      <div className="bg-gray-100 py-16">
        <div className="mx-5 p-auto text-center mb-8">
          <h2 className="text-4xl font-semibold mb-4 animate-fadeIn">
            Bienvenue dans nos services juridiques
          </h2>
          <p className="text-lg text-gray-600 animate-fadeIn delay-2s">
            Nous proposons une large gamme de services juridiques pour répondre
            à vos besoins. Veuillez trouver ci-dessous les détails de nos
            services et n'hésitez pas à nous contacter pour plus d'informations.
          </p>
          <div className="mt-8 space-x-4">
            {services.map((service, index) => (
              <a
                key={index}
                href={`#${service.id}`}
                className="text-red-500 hover:none transition duration-300"
              >
                {service.title}
              </a>
            ))}
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
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{service.description}</p>
                  <Link
                    to={`/services/${service.id}`}
                    className="text-red-500 hover:underline mt-4 inline-block"
                  >
                    Contactez-nous pour plus de détails
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
