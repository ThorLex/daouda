import React from "react";
import { Link } from "react-router-dom";
import notFoundImage from "../images/pexels-matreding-4646777.jpg"; // Add your illustration image here

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="text-center">
        <img
          src={notFoundImage}
          alt="404 Not Found"
          className="w-full max-w-md mx-auto mb-8"
        />
        <h1 className="text-5xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">
          Oops! The page you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="bg-red-950 text-white px-4 py-2 rounded hover:bg-red-800 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
