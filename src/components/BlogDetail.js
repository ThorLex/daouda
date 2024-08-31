import React, { useState } from "react";
import Navbar from "../layouts/nav";
import Footer from "../layouts/Footer";
import blogImage from "../images/istockphoto-1417589521-1024x1024.jpg";
import { useParams, Link } from "react-router-dom";

// Tableaux de blogs récents et connexes avec chemins d'image corrects
const recentBlogs = [
  {
    id: 1,
    title: "Comprendre le Droit de la Famille",
    excerpt: "Découvrez les bases du droit de la famille...",
    date: "29 Août 2024",
    image: blogImage,
  },
  {
    id: 2,
    title: "Les Lois sur l'Emploi : Ce que Vous Devez Savoir",
    excerpt: "Le droit du travail peut être complexe...",
    date: "15 Août 2024",
    image: blogImage,
  },
  {
    id: 3,
    title: "Guide sur la Médiation Juridique",
    excerpt: "La médiation est une alternative efficace...",
    date: "1er Août 2024",
    image: blogImage,
  },
];

const comments = [
  {
    id: 1,
    author: "Jean Dupont",
    date: "29 Août 2024",
    content:
      "Excellent article ! J'ai beaucoup appris sur le droit de la famille.",
  },
  {
    id: 2,
    author: "Marie Curie",
    date: "28 Août 2024",
    content:
      "Très informatif, mais j'aurais aimé plus de détails sur les lois de l'emploi.",
  },
  // Ajoutez d'autres commentaires ici si nécessaire
];

const relatedBlogs = [
  {
    id: 1,
    title: "Comprendre le Droit de la Famille",
    excerpt: "Découvrez les bases du droit de la famille...",
    date: "29 Août 2024",
    image: blogImage,
  },
  {
    id: 2,
    title: "Les Lois sur l'Emploi : Ce que Vous Devez Savoir",
    excerpt: "Le droit du travail peut être complexe...",
    date: "15 Août 2024",
    image: blogImage,
  },
  {
    id: 3,
    title: "Guide sur la Médiation Juridique",
    excerpt: "La médiation est une alternative efficace...",
    date: "1er Août 2024",
    image: blogImage,
  },
];

export default function BlogDetail() {
  const { id } = useParams();
  const [comment, setComment] = useState("");
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);

  const handleBold = () => {
    setBold(!bold);
  };

  const handleItalic = () => {
    setItalic(!italic);
  };

  const handleLink = () => {
    setComment(comment + " [link](url) ");
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = () => {
    // Logique pour soumettre le commentaire
    console.log("Commentaire soumis:", comment);
  };

  return (
    <div className="all">
      <Navbar />
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row">
          <div className="lg:w-3/4 p-8">
            <img
              src={blogImage}
              alt="Blog"
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <h1 className="text-4xl font-semibold mb-4">Titre du Blog {id}</h1>
            <p className="text-lg text-gray-600 mb-6">
              Voici le contenu du billet de blog. Il fournira des informations
              détaillées sur le sujet, offrant des perspectives et des conseils
              utiles aux lecteurs.
            </p>
            <p className="text-gray-600 mb-4">
              Le billet de blog discute de divers aspects du sujet, y compris
              les principales considérations, les implications juridiques et les
              opinions d'experts.
            </p>
            <p className="text-gray-600 mb-4">
              Les lecteurs trouveront ici des informations précieuses pour les
              aider à comprendre les complexités du sujet.
            </p>
          </div>

          <div className="lg:w-1/4 p-8 bg-white shadow-lg rounded-lg">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-4">Blogs Récents</h3>
              <ul>
                {recentBlogs.map((blog) => (
                  <li key={blog.id} className="mb-6 flex items-center">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-16 h-16 object-cover rounded mr-4"
                    />
                    <Link
                      to={`/blog/${blog.id}`}
                      className="text-red-500 hover:underline"
                    >
                      {blog.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Blogs Connexes</h3>
              <ul>
                {relatedBlogs.map((blog) => (
                  <li key={blog.id} className="mb-6 flex items-center">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-16 h-16 object-cover rounded mr-4"
                    />
                    <Link
                      to={`/blog/${blog.id}`}
                      className="text-red-500 hover:underline"
                    >
                      {blog.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Section Commentaires */}
        <div className="bg-white mx-16 p-6 rounded-lg shadow-lg mt-8">
          <h3 className="text-2xl font-semibold mb-4">
            Laissez un commentaire
          </h3>
          <div className="mb-4 flex items-center">
            <button
              onClick={handleBold}
              className={`mr-2 px-3 py-1 rounded ${
                bold ? "bg-gray-300" : "bg-gray-200"
              }`}
            >
              <strong>B</strong>
            </button>
            <button
              onClick={handleItalic}
              className={`mr-2 px-3 py-1 rounded ${
                italic ? "bg-gray-300" : "bg-gray-200"
              }`}
            >
              <em>I</em>
            </button>
            <button
              onClick={handleLink}
              className="px-3 py-1 rounded bg-gray-200"
            >
              🔗
            </button>
          </div>
          <textarea
            value={comment}
            onChange={handleCommentChange}
            className="w-full p-4 border border-gray-300 rounded mb-4"
            rows={4}
            placeholder="Votre commentaire..."
            style={{
              fontWeight: bold ? "bold" : "normal",
              fontStyle: italic ? "italic" : "normal",
            }}
          />
          <button
            onClick={handleSubmit}
            className="bg-red-950 text-white px-4 py-2 rounded"
          >
            Envoyer
          </button>

          <div>
            <h3 className="text-2xl font-semibold m-4">Commentaires</h3>
            <ul>
              {comments.map((comment) => (
                <li key={comment.id} className="mb-6">
                  <p className="text-gray-600">{comment.content}</p>
                  <small className="text-gray-500 ">
                    {comment.author}
                  </small>{" "}
                  <u>
                    {" "}
                    <small className="text-gray-500 ">le {comment.date} </small>
                  </u>{" "}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
