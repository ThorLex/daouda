import React, { useEffect, useState } from "react";
import "./stylenav.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import LanguageSelector from '../components/LanguageSelector';

import {
  faPhone,
  faMailBulk,
  faTimes,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.classList.toggle("modal-open", !menuOpen);
  };
  // pour  al detection du changement de language 
  
 const { t } = useTranslation();
  


  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 10); // Adjust the scroll threshold as needed
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className="mx-10 p-3">
      {/* Language selector for small screens */}
     

      <div
        className={`contact-info pt-2 transition-transform duration-300 ease-in-out ${
          isScrolled ? "h-[2px]" : ""
        }`}
      >
        <span
          className={`transition-transform duration-300 ease-in-out ${
            isScrolled ? "translate-x-80" : ""
          }`}
        >
          <FontAwesomeIcon icon={faMailBulk}></FontAwesomeIcon> :
          Daoudambouobouo@gmail.com <br />
          <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>: +237 677 516 461
        </span>
      </div>
<<<<<<< HEAD
      <div className="navbar-content  content-start ">
        <div className="navbar-left justify-start  ">
          <h1 className="text-sm text-center">
            Cabinet D.Mbouobouo <br />
            <small>Lord tchamba</small>
          </h1>
          <p className="text-center">Cabinet d'avocat</p>
        </div>

        <div className="navbar-right hiddennav md:translate-x-[-300px] sm:translate-x-[0px] content-end">
          <ul className="nav-links">
            <li>
              <Link to="/">   {t("home")}</Link>
              <div className="small-text mx-2">
               {t("smallTextNavBar")}
              </div>
            </li>
            <li>
              <Link to="/our-services">{t("services")}</Link>
            </li>
            <li>
              <Link to="/about-us">{t("about_us")}</Link>
            </li>
            <li>
              <Link to="/contact">{t("contact_us")}</Link>
            </li>
            <li>
              <Link to="/blog">{t("blog")}</Link>
            </li>
          </ul>
          {/* Language selector for desktop - only visible on md and larger screens */}
          <div className="hidden md:block">
            <LanguageSelector />
          </div>
        </div>
      </div>

      {/* Modal Dropdown Menu for Small Screens */}
      {menuOpen && (
        <div className="modal-overlay fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="modal-content w-[300px] h-auto bg-white p-5 rounded-lg shadow-lg text-center relative">
            <button
              onClick={toggleMenu}
              className="absolute top-2 right-2 text-xl"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <h2 className="text-lg font-bold mb-4">Menu</h2>
            <div className="border-b-2 border-gray-300 my-4"></div>

            <ul className="nav-links flex flex-col space-y-4 mt-8">
              <li>
                <Link to="/" onClick={toggleMenu}>
                {t("home")}
                </Link>
              </li>
              <li>
                <Link to="/our-services" onClick={toggleMenu}>
                {t("services")}
                </Link>
              </li>
              <li>
                <Link to="/about-us" onClick={toggleMenu}>
                {t("about_us")}
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={toggleMenu}>
                {t("contact_us")}
                </Link>
              </li>
              <li>
                <Link to="/blog" onClick={toggleMenu}>
                {t("blog")}
                </Link>
              </li>
               <div className="flex justify-center  mb-4">
                <span className="flex justify-content-start m-4">{t('language')}</span>
              <LanguageSelector />
              </div>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
