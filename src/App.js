import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home.js";
import Footer from "./layouts/Footer.js";
import Contact from "./components/Contact.js";
import NotFound from "./components/404.js";
import AboutUs from "./components/AboutUs.js";
import OurServices from "./components/Service.js";
import Animation from "./components/Animation.js";
import ServiceDetail from "./services/ServiceDetail.js";
import { useState, useEffect } from "react";
import Blog from "./components/blog.js";
import AddArticleForm from "./components/addblog.js";

import Loading from "./components/Animation.js";
import BlogDetail from "./components/BlogDetail.js";

function App(location) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/about-us" element={<AboutUs />} />
          <Route exact path="/our-services" element={<OurServices />} />
          <Route exact path="/services/:id" element={<ServiceDetail />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/blog/:id" element={<BlogDetail />} />
          <Route exact path="/add" element={<AddArticleForm />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
