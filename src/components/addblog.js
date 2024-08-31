import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoImageOutline } from "react-icons/io5";

// Navbar Component
const Navbar = () => (
  <nav className="bg-gray-800 text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
      <a href="/" className="text-2xl font-bold">
        MonSite
      </a>
      <div>
        <a href="/" className="mr-4 hover:underline">
          Accueil
        </a>
        <a href="/articles" className="mr-4 hover:underline">
          Articles
        </a>
        <a href="/contact" className="hover:underline">
          Contact
        </a>
      </div>
    </div>
  </nav>
);

// Footer Component
const Footer = () => (
  <footer className="bg-gray-800 text-white p-4 mt-8">
    <div className="container mx-auto text-center">
      <p>&copy; 2024 MonSite. Tous droits réservés.</p>
    </div>
  </footer>
);

const AddArticleForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImage(null);
      setPreview("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form validation
    if (!title || !content || !category) {
      alert("Veuillez remplir tous les champs requis.");
      return;
    }

    // Create a FormData object
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("category", category);
    if (image) formData.append("image", image);

    try {
      // Example of uploading the form data to the server
      const response = await fetch("/api/articles", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'ajout de l'article.");
      }

      // Clear form fields
      setTitle("");
      setContent("");
      setCategory("");
      setImage(null);
      setPreview("");

      alert("Article ajouté avec succès!");
    } catch (error) {
      console.error("Erreur:", error);
      alert("Une erreur est survenue. Veuillez réessayer.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8 max-w-screen-lg">
        {/* Preview Section */}

        <motion.div
          className="mb-8 max-w-[700px] mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative">
            <img
              src={preview}
              alt="Prévisualisation"
              className="w-full h-auto rounded-lg shadow-md mt-4"
            />{" "}
            <br />
            <p className="text-2xl font-semibold text-gray-800 mb-2 truncate">
              {title}
              <br />
              <small>{category}</small> <br />
            </p>
            <p className="text-gray-600 mt-2 break-words">{content}</p>
          </div>
        </motion.div>

        {/* Form Section */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-lg max-w-[700px] mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="title"
            >
              Titre
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="content"
            >
              Contenu
            </label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="8"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="category"
            >
              Catégorie
            </label>
            <input
              type="text"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2 flex items-center">
              <IoImageOutline className="mr-2 text-gray-600" />
              Image (optionnelle)
            </label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
          </div>
          <motion.button
            type="submit"
            className="bg-red-950 text-white px-6 py-3 rounded hover:bg-red-700 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            Ajouter l'Article
          </motion.button>
        </motion.form>
      </div>
      <Footer />
    </>
  );
};
export default AddArticleForm;
