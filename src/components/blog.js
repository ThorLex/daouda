import React from "react";
import Navbar from "../layouts/nav";
import Footer from "../layouts/Footer";
import blogImage from "./../images/pexels-matreding-4646777.jpg"; // Remplacez par une image de blog réelle
import { Link } from "react-router-dom";

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "Comprendre le Droit de la Famille",
      excerpt:
        "Découvrez les bases du droit de la famille et comment il peut vous protéger et protéger vos proches...",
      date: "29 Août 2024",
      image: blogImage,
    },
    {
      id: 2,
      title: "Les Lois sur l'Emploi : Ce que Vous Devez Savoir",
      excerpt:
        "Le droit du travail peut être complexe. Voici un aperçu des lois les plus importantes à connaître...",
      date: "15 Août 2024",
      image: blogImage,
    },
    {
      id: 3,
      title: "Guide sur la Médiation Juridique",
      excerpt:
        "La médiation est une alternative efficace au litige. Découvrez comment elle peut résoudre vos conflits...",
      date: "1er Août 2024",
      image: blogImage,
    },
    {
      id: 4,
      title: "Guide sur la Protection des Donneés",
      excerpt:
        "La protection des données est une partie essentielle du droit. Découvrez comment elle peut vous aider...",
      date: "1er Août 2024",
      image: blogImage,
    },
    {
      id: 5,
      title: "Comprendre le Droit de la Famille",
      excerpt:
        "Découvrez les bases du droit de la famille et comment il peut vous protéger et protéger vos proches...",
      date: "29 Août 2024",
      image: blogImage,
    },
    {
      id: 6,
      title: "Les Lois sur l'Emploi : Ce que Vous Devez Savoir",
      excerpt:
        "Le droit du travail peut être complexe. Voici un aperçu des lois les plus importantes à connaître...",
      date: "15 Août 2024",
      image: blogImage,
    },
    {
      id: 7,
      title: "Guide sur la Médiation Juridique",
      excerpt:
        "La médiation est une alternative efficace au litige. Découvrez comment elle peut résoudre vos conflits...",
      date: "1er Août 2024",
      image: blogImage,
    },
    {
      id: 8,
      title: "Guide sur la Protection des Donneés",
      excerpt:
        "La protection des données est une partie essentielle du droit. Découvrez comment elle peut vous aider...",
      date: "1er Août 2024",
      image: blogImage,
    },
    {
      id: 9,
      title: "Comprendre le Droit de la Famille",

      excerpt:
        "Découvrez les bases du droit de la famille et comment il peut vous protéger et protéger vos proches...",
      date: "29 Août 2024",
      image: blogImage,
    },
    {
      id: 10,
      title: "Les Lois sur l'Emploi : Ce que Vous Devez Savoir",
      excerpt:
        "Le droit du travail peut être complexe. Voici un aperçu des lois les plus importantes à connaître...",
      date: "15 Août 2024",
      image: blogImage,
    },
    {
      id: 11,
      title: "Guide sur la Médiation Juridique",
      excerpt:
        "La médiation est une alternative efficace au litige. Découvrez comment elle peut résoudre vos conflits...",
      date: "1er Août 2024",
      image: blogImage,
    },
  ];

  return (
    <div className="all">
      <Navbar />
      <div className="bg-gray-100 py-16">
        <dv className=" p-4">
          <h1 className="text-4xl font-semibold mb-8 text-center">Blog</h1>{" "}
          <br />
          <p class="text-lg mx-10  flex text-center text-gray-600 animate-fadeIn delay-2s">
            sur cette page nous presentons les derniers articles, les actualites
            et des connaisssance avec Vous. abonnez vous a notre newsletter pour
            rester informé.
          </p>
        </dv>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-4">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">{post.date}</span>
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-red-500 hover:underline"
                    >
                      Lire plus
                    </Link>
                  </div>
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
