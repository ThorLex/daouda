import React from "react";
import Navbar from "../layouts/nav";
import Footer from "../layouts/Footer";
import aboutImage from "../images/marteau.jpg"; // Exemple d'image, remplacez par une image réelle
import { useNavigate } from "react-router-dom";

export default function APropos() {
  const navigate = useNavigate();
  return (
    <div className="all">
      <Navbar />
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex-1 p-8">
              <h2 className="text-3xl font-semibold mb-4">À Propos de Nous</h2>
              <p className="text-lg text-gray-600 mb-4">
                Découvrez-en plus sur notre cabinet, nos valeurs et notre
                mission.
              </p>
              <p className="text-gray-600 mb-4">
                Notre cabinet d'avocats a une longue histoire de prestation de
                services juridiques excellents. Notre équipe de professionnels
                expérimentés est dédiée à obtenir les meilleurs résultats pour
                nos clients.
              </p>
              <p className="text-gray-600 mb-4">
                Nous nous spécialisons dans divers domaines du droit, y compris
                le droit de la famille, le droit du travail et le droit pénal.
                Nous nous engageons à fournir des solutions juridiques
                personnalisées adaptées à vos besoins spécifiques.
              </p>

              <button
                onClick={() => navigate("/contact")}
                className="bg-red-950 text-white px-6 py-3 rounded hover:bg-red-800 transition-colors"
              >
                Contactez-nous
              </button>
            </div>
            <div className="flex-1 flex justify-center">
              <img
                src={aboutImage}
                alt="À Propos de Nous"
                className="w-3/4 md:w-full object-contain scale-75"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
