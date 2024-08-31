import React from "react";
import Navbar from "../layouts/nav";
import Footer from "../layouts/Footer";
import contactImage from "../images/image.jpg";

export default function Contact() {
  return (
    <div className="all">
      <Navbar />
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto bg-white shadow-lg p-8 flex flex-col md:flex-row items-center">
          <div className="flex-1 flex justify-center">
            <img
              src={contactImage}
              alt="Contact"
              className="w-3/4 md:w-full object-contain scale-75"
            />
          </div>
          <div className="flex-1 p-8">
            <h2 className="text-3xl font-semibold mb-4">Contactez-nous</h2>
            <p className="text-lg mb-6">
              Remplissez le formulaire ci-dessous pour nous contacter.
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
                  placeholder="Votre Email"
                  className="col-span-2 md:col-span-1 p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Numéro de Téléphone"
                  className="col-span-2 md:col-span-1 p-2 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="Votre Adresse"
                  className="col-span-2 md:col-span-1 p-2 border border-gray-300 rounded"
                />
              </div>
              <textarea
                placeholder="Votre Message"
                className="w-full p-2 border border-gray-300 rounded mb-4"
                rows={4}
              />
              <button className="bg-red-950 text-white px-4 py-2 rounded">
                Envoyer Maintenant
              </button>
            </form>
          </div>
        </div>

        <section className="bg-gray-100 py-8 mt-1">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Suivez-nous sur
            </h2>
            <div className="flex justify-center space-x-4">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22 12.1c0-5.5-4.5-10-10-10S2 6.6 2 12.1c0 4.9 3.6 8.9 8.3 9.9v-7h-2.5v-2.7h2.5v-2.1c0-2.5 1.5-3.8 3.6-3.8 1.1 0 2.1.1 2.4.1v2.7h-1.6c-1.3 0-1.6.8-1.6 1.6v1.8h3.2l-.5 2.7h-2.7v7c4.8-1 8.3-5 8.3-9.9" />
                </svg>
              </a>
              {/* Twitter */}

              {/* Instagram */}
              <a
                href="https://www.instagram.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-800"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.2c3.2 0 3.6.01 4.9.07 1.4.06 2.6.4 3.6 1.4.9.9 1.4 2.2 1.4 3.6.06 1.3.07 1.7.07 4.9s-.01 3.6-.07 4.9c-.06 1.4-.4 2.6-1.4 3.6-.9.9-2.2 1.4-3.6 1.4-1.3.06-1.7.07-4.9.07s-3.6-.01-4.9-.07c-1.4-.06-2.6-.4-3.6-1.4-.9-.9-1.4-2.2-1.4-3.6C2.2 12.6 2.1 12.2 2.1 9.9s.01-3.6.07-4.9c.06-1.4.4-2.6 1.4-3.6.9-.9 2.2-1.4 3.6-1.4 1.3-.06 1.7-.07 4.9-.07zm0-2.2c-3.2 0-3.6.01-4.8.07-1.5.06-2.8.38-3.9 1.5-1.1 1.1-1.5 2.4-1.5 3.9-.06 1.2-.07 1.6-.07 4.8s.01 3.6.07 4.8c.06 1.5.38 2.8 1.5 3.9 1.1 1.1 2.4 1.5 3.9 1.5 1.2.06 1.6.07 4.8.07s3.6-.01 4.8-.07c1.5-.06 2.8-.38 3.9-1.5 1.1-1.1 1.5-2.4 1.5-3.9.06-1.2.07-1.6.07-4.8s-.01-3.6-.07-4.8c-.06-1.5-.38-2.8-1.5-3.9-1.1-1.1-2.4-1.5-3.9-1.5-1.2-.06-1.6-.07-4.8-.07zM12 6.7c-2.9 0-5.3 2.4-5.3 5.3 0 2.9 2.4 5.3 5.3 5.3 2.9 0 5.3-2.4 5.3-5.3 0-2.9-2.4-5.3-5.3-5.3zm0 8.1c-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.2 2.7 2.7 0 1.5-1.2 2.7-2.7 2.7zm3.6-6.7c-.7 0-1.2-.6-1.2-1.2s.6-1.2 1.2-1.2 1.2.6 1.2 1.2-.6 1.2-1.2 1.2z" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
