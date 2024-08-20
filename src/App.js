import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home.js";
import Navbar from "./layouts/Navbar.js";
import Footer from "./layouts/Footer.js";
import Contact from "./components/Contact.js";
import Error from "./components/404.js";
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contacts" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}
