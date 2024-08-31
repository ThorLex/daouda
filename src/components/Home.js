import React, { useState } from "react";
import Navbar from "../layouts/nav";
import Footer from "../layouts/Footer";
import circle from "./../images/image.jpg";
import down from "../images/image.jpg";
import "./style.css";
import { Link } from "react-router-dom";
import dm from "./../images/dmbou.jpeg";
import proprieté from "./../images/téléchargement.png";
import civil from "./../images/Best Civil Lawyers in Delhi Call-9870270979.png";
import backgroundImage from "../images/pexels-pavel-danilyuk-8112193.jpg";
import contrat from "../images/work.png";
export default function Home() {
  const size = 35;
  const carouselItems = [
    {
      image: down, // Remplacez par la référence de l'image réelle
      title: "Cabinet Daouda",
      href: "/services/conseil-juridique",
      subtitle: "Conseil Juridique",
      description:
        "Obtenez des conseils juridiques sur mesure adaptés à votre situation. Nos avocats expérimentés....",
    },

    {
      image: civil, // Remplacez par la référence de l'image réelle
      title: "Cabinet Daouda",
      href: "/services/litiges-civils",
      subtitle: "Litiges Civils",
      description:
        "Notre cabinet est spécialisé en litiges civils, offrant une représentation solide ",
    },

    {
      image: proprieté, // Remplacez par la référence de l'image réelle
      title: "Cabinet Daouda",
      href: "/services/propriete-intellectuelle",
      subtitle: "Propriété Intellectuelle",
      description:
        "Protégez vos œuvres créatives avec nos services complets en propriété intellectuelle. Nous traitons les dossiers de marques",
    },

    {
      image: contrat, // Remplacez par la référence de l'image réelle
      title: "Cabinet Daouda",
      href: "/services/droit-du-travail",
      subtitle: "Droit du Travail",
      description:
        "Protégez vos droits au travail grâce à notre expertise en droit du travail. Nous offrons des conseils .",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className=" back all">
      <Navbar />
      <div className="mb-32">
        {/* Hero Section */}
        <div className="text-center py-16 px-8">
          <h2 className="text-4xl font-semibold text-gray-800">
            Votre conseiller juridique à Yaoundé
          </h2>
          <h3 className="text-xl text-gray-600 mt-4">
            De nombreuses années d'expérience en tant qu'avocat spécialisé dans
            le domaine familial, juridique et social a mettre a votre
            disposition.
          </h3>
          <Link to="about-us">
            <button
              type="button"
              className="mt-6 text-white bg-red-950 hover:bg-red-800 font-medium text-xl px-8 py-3 rounded"
            >
              En savoir plus ...
            </button>
          </Link>
        </div>

        {/* Familienrecht Section */}
        <div className="mx-8 mt-8 w-auto  lg:mx-20 flex flex-col lg:flex-row items-center lg:justify-between">
          <div className="  flex flex-col lg:flex-row items-center">
            <img
              src={carouselItems[currentIndex].image}
              className="w-64 h-64 rounded-full object-cover "
              alt="Familienrecht"
            />

            {/* Vertical Line */}
            <div className="hidden lg:block border-l-2 border-red-950 mx-8 h-32"></div>

            <div className="mt-4 lg:mt-0 text-center lg:text-left">
              <h3 className="text-2xl font-semibold text-gray-800">
                {carouselItems[currentIndex].subtitle} <br />
                <small> {carouselItems[currentIndex].title}</small>
              </h3>
              <p className="text-gray-600 mt-2">
                {carouselItems[currentIndex].description}
                <br />
                <Link
                  className="text-red-700 justify-center flex text-center "
                  to={carouselItems[currentIndex].href}
                >
                  En savoir ...
                </Link>
              </p>
            </div>
          </div>

          {/* Tabs */}
          <div className=" tabs  sm : display-inline flex mt-8 lg:mt-0 space-x-4">
            {carouselItems.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`  ${currentIndex == index ? "active" : " dot"}`}
              >
                0{index + 1}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Continuation Section */}
      <div className="continuation-section bg-gray-50 py-8 sm:py-12 px-4 sm:px-8 lg:py-16 lg:px-8">
        <span className="text-red-700 text-xl  justify-center  flex text-center md:hidden ">
          Specialisation
        </span>
        <div className="flex justify-center m-4 mb-4 space-x-7 md:hidden">
          <div className="flex flex-col items-center">
            <svg
              width={size}
              height={size}
              viewBox="0 0 1 1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M0.25 0.25V0.188a0.125 0.125 0 0 1 0.125 -0.125h0.25a0.125 0.125 0 0 1 0.125 0.125v0.063h0.125a0.125 0.125 0 0 1 0.125 0.125v0.438a0.125 0.125 0 0 1 -0.125 0.125H0.125a0.125 0.125 0 0 1 -0.125 -0.125V0.375a0.125 0.125 0 0 1 0.125 -0.125zm0.125 -0.063h0.25v0.063H0.375zM0.125 0.375v0.125h0.75V0.375zm0 0.438v-0.188h0.313v0.063h0.125v-0.063h0.313v0.188z"
              />
            </svg>
          </div>
          <div className="flex flex-col items-center">
            <svg
              width={size}
              height={size}
              className="w-3/4 md:w-full object-contain scale-75"
              viewBox="-0.25 0 4.75 4.75"
              xmlns="http://www.w3.org/2000/svg"
              class="cf-icon-svg"
            >
              <path d="M1.795 3.782a0.45 0.45 0 0 0 0.056 0.218H0.463a0.318 0.318 0 0 1 -0.317 -0.317v-0.475A0.794 0.794 0 0 1 0.938 2.417h1.369a0.8 0.8 0 0 0 0.139 0.267 0.784 0.784 0 0 0 -0.651 0.771zM1.65 2.179a0.809 0.809 0 1 1 0.809 -0.809A0.809 0.809 0 0 1 1.65 2.179m2.454 1.603a0.219 0.219 0 0 1 -0.218 0.218H2.251a0.219 0.219 0 0 1 -0.218 -0.218V3.455a0.547 0.547 0 0 1 0.545 -0.545h0.981a0.547 0.547 0 0 1 0.545 0.545zm-0.479 -1.593a0.557 0.557 0 1 1 -0.557 -0.557 0.557 0.557 0 0 1 0.557 0.557" />
            </svg>
          </div>
          <div className="flex flex-col items-center">
            <svg
              width={size}
              height={size}
              viewBox="0 0 1 1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M.914.438.813.188h.063V.125H.563V.063H.5v.063H.188v.063h.063L.149.438H.125v.063h.009Q.15.549.19.578a.15.15 0 0 0 .181 0A.15.15 0 0 0 .429.5h.009V.438H.41L.305.188H.5v.5H.375L.351.699.226.856.25.907h.563L.837.856.712.699.688.688H.563v-.5h.196l-.104.25h-.03v.063h.009a.155.155 0 0 0 .294 0h.01V.438zM.326.532a.1.1 0 0 1-.045.012.1.1 0 0 1-.044-.012A.1.1 0 0 1 .203.5h.156a.1.1 0 0 1-.033.032M.342.438H.217L.28.288zm.331.313L.75.844H.313L.39.75zM.784.29l.063.15H.722zm.043.244a.1.1 0 0 1-.045.012.1.1 0 0 1-.044-.012.1.1 0 0 1-.034-.033H.86a.1.1 0 0 1-.033.033" />
            </svg>
          </div>
          <div className="flex flex-col items-center">
            <svg
              width={size}
              height={size}
              viewBox="0 0 1.5 1.5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.313.75H.188"
                stroke="#000"
                stroke-width=".125"
                stroke-linecap="round"
              />
              <path
                d="M.75.125V.5m0 .875V1M.563.313l.188.188.188-.188m-.376.875L.751 1l.188.188"
                stroke="#000"
                stroke-width=".125"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <div className="flex flex-col items-center">
            <svg
              width={size}
              height={size}
              viewBox="0 0 0.938 0.938"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M.281.438H.25v.063h.031zm.375.063h.031V.438H.656zM.281.251H.25v.063h.031zm.125.063h.032V.25H.407zm.25-.281L.678.011.669 0H.656zm.188.188h.031V.208L.866.199zM.5.688.478.71zM.469.719l.014.028.003-.001.002-.002zM.281.5h.375V.438H.281zm0-.188h.125V.25H.281zm.5.563H.156v.063h.625zM.125.844v-.75H.063v.75zM.156.063h.5V0h-.5zm.657.156v.625h.063V.219zM.634.053l.188.188.044-.044L.678.009zM.156.875A.03.03 0 0 1 .125.844H.063a.094.094 0 0 0 .093.094zm.625.063A.094.094 0 0 0 .875.844H.812a.03.03 0 0 1-.031.031zM.125.094A.03.03 0 0 1 .156.063V0a.094.094 0 0 0-.093.094zm.217.635A.08.08 0 0 1 .394.682C.418.676.448.68.478.71L.522.666A.15.15 0 0 0 .378.622a.14.14 0 0 0-.095.087zM.478.71l.005.005.049-.038-.01-.011zm.005.005.004.007-.003.004-.018.011-.025.007-.016.001.004.002a.024.024 0 0 1 .008.027L.436.777.44.773A.2.2 0 0 1 .482.748L.454.692Q.419.71.401.724L.385.741a.04.04 0 0 0-.009.027.04.04 0 0 0 .016.029q.011.007.021.009a.1.1 0 0 0 .037 0A.15.15 0 0 0 .525.773.07.07 0 0 0 .548.73.07.07 0 0 0 .531.678zm.005.029L.52.725.495.668Q.473.678.45.695zM.52.725C.561.707.597.717.634.734l.028.014.028.015a.14.14 0 0 0 .061.018V.718A.1.1 0 0 1 .718.707L.692.693.661.677a.2.2 0 0 0-.166-.01z"
                fill="#000"
              />
            </svg>
          </div>
        </div>

        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="left-column space-y-4 sm:space-y-6 lg:order-2 md:left-column">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">
              Cabinet D.Mbouobouo
            </h2>
            <h3 className="text-lg sm:text-xl text-gray-600 mt-2">
              Avocat spécialisé en droit du travail - droit de la famille
            </h3>
            <p className=" text-justify text-sm sm:text-base text-gray-600 mt-4 leading-relaxed">
              Cabinet Daouda Mbouobouo, Esq. est votre partenaire juridique de
              confiance, offrant des solutions innovantes et personnalisées pour
              répondre à vos besoins juridiques les plus complexes. Avec une
              expertise reconnue en droit international, droit civil, résolution
              de litiges, et bien plus encore, Maître Daouda Mbouobouo, avocat
              admis aux barreaux du Nigeria et du Cameroun, met son savoir-faire
              et son expérience à votre service pour défendre vos intérêts avec
              passion et rigueur.
            </p>
            <p className=" text-justify text-sm sm:text-base text-gray-600 mt-2 leading-relaxed">
              Situé à Yaoundé, le cabinet Daouda Mbouobouo se distingue par son
              engagement indéfectible à fournir des conseils juridiques de haute
              qualité et à accompagner ses clients à chaque étape de leurs
              démarches, qu'il s'agisse de résoudre des différends, de protéger
              leurs droits, ou de les guider dans les méandres du droit des
              affaires.
            </p>
            <p className=" text-justify text-sm sm:text-base text-gray-600 mt-2 leading-relaxed">
              Que vous soyez une entreprise ou un particulier, le cabinet Daouda
              Mbouobouo est dédié à vous offrir une représentation juridique
              exceptionnelle, avec une approche axée sur l'écoute, la
              transparence et l'efficacité. Faites le choix de l'excellence
              juridique avec le cabinet Daouda Mbouobouo.
            </p>
          </div>

          <div className=" display-none right-column lg:order-1">
            <h3 className="text-2xl font-semibold text-gray-800">
              Spécialisations
            </h3>
            <ul className="  list-disc list-inside mt-4 space-y-2 text-gray-600">
              <li>Droit du travail</li>
              <li>Droit de la famille</li>
              <li>Droit pénal</li>
              <li>Médiation</li>
              <li>Droit des contrats</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Additional Information Section */}
      <div className="continuation-section bg-white py-16 px-8">
        <div className="container mx-auto py-12 px-6 lg:px-8">
          <div className="relative">
            {/* Image section */}

            {/* Text sections */}
            <div className="relative mt-8">
              <article className=" rounded-lg ">
                <img
                  src={dm}
                  alt="cat"
                  className="w-48 h-48 object-cover rounded-full float-left mr-5 mb-2 shape-image"
                />
                <h2 className="mb-5 text-center text-2xl font-semibold sm:text-2xl text-red-950 mt-2">
                  Daouda Mbouobouo{" "}
                </h2>
                <p className="leading-6  text-justify first-letter:mt-10 first-letter:font-semibold first-letter:text-3xl">
                  Fort de plusieurs années d’expérience, Maître D. Mbouobouo est
                  un avocat renommé, reconnu pour son expertise en droit
                  international et en contentieux civil. Son parcours
                  impressionnant est marqué par une solide expérience dans la
                  résolution des conflits, la rédaction de testaments, et le
                  droit de la propriété intellectuelle. En tant qu’avocat admis
                  aux Barreaux du Cameroun et du Nigéria, Maître Mbouobouo a su
                  bâtir une carrière exemplaire, en défendant les intérêts de
                  ses clients avec rigueur et professionnalisme. Ses compétences
                  s’étendent également aux litiges fonciers, aux litiges en
                  matière de droit du travail, ainsi qu’aux solutions
                  alternatives de résolution des différends, où il excelle dans
                  l’apport de conseils juridiques stratégiques. Grâce à son
                  dévouement et à sa connaissance approfondie du droit, Maître
                  Mbouobouo s’est imposé comme un allié incontournable pour ceux
                  qui recherchent une défense efficace et des solutions
                  juridiques sur mesure.
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>

      {/* cta Section */}
      <section
        className="relative bg-cover bg-center h-64 flex items-center justify-center text-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-25"></div>
        <div className="relative z-10 p-4">
          <h1 className="text-white text-4xl lg:text-6xl font-bold mb-4">
            Nul n'est sensé ignorer la loi
          </h1>
          <Link to="/contact" className="text-white text-lg underline">
            Contacter Nour pour plus de conseils
          </Link>
        </div>
      </section>

      {/* CTA Section */}

      {/* Contact Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto bg-white shadow-lg p-8 flex flex-col md:flex-row items-center">
          {/* Left side: Image */}
          <div className="flex-1 flex justify-center">
            <img
              src={down}
              alt="Scales and gavel"
              className="w-3/4 md:w-full object-contain scale-75"
            />
          </div>
          {/* Right side: Form */}
          <div className="flex-1 p-8">
            <h2 className="text-3xl font-semibold mb-4">Contactez-Nous</h2>
            <p className="text-lg mb-6">
              Utilisez le formulaire de contact en ligne
            </p>
            <form>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Votre Nom"
                  className="col-span-2 md:col-span-1 p-2 border border-gray-300 rounded"
                />
                <input
                  type="email"
                  placeholder=" Votre Adresse"
                  className="col-span-2 md:col-span-1 p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Numéro de téléphone"
                  className="col-span-2 md:col-span-1 p-2 border border-gray-300 rounded"
                />
                <input
                  type=" Votre email"
                  placeholder="E-Mail"
                  className="col-span-2 md:col-span-1 p-2 border border-gray-300 rounded"
                />
              </div>
              <textarea
                placeholder="Votre message"
                className="w-full p-2 border border-gray-300 rounded mb-4"
                rows={4}
              />
              <div className="flex items-center mb-6">
                <input type="checkbox" id="privacy" className="mr-2" />
                <label htmlFor="privacy" className="text-sm text-gray-600">
                  J'accepte par la présente que les données soient transmises
                  via Ce formulaire en clair
                </label>
              </div>
              <button className="bg-red-950 text-white px-4 py-2 rounded">
                Envoyer maintenant
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
