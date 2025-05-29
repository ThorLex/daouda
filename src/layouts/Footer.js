// src/Footer.js
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FaTwitter, FaGlobe, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <div className="footer">
      <footer className="w-full bg-gray-800 text-white p-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="footer-section flex flex-col justify-center md:justify-start items-center md:items-start">
            <h2 className="text-2xl font-bold">{t('law_chambers')}</h2>
            <p className="text-2xl font-bold">{t('law_firm')}</p>
          </div>

          <div className="footer-section">
            <h3 className="text-xl font-semibold mb-4">{t('contact_us')}</h3>
            <p>Email: daoudambouobouo@gmail.com</p>
            <span>Tel: +237 677 516 461</span> <br />
            <span> +39 348 178 7560 </span>
            <p>{t('address')}: SCDP NSAM Yaoundé face ECHE garage 1<sup>er</sup> etage</p>
          </div>

          <div className="footer-section">
            <h3 className="text-xl font-semibold mb-4">{t('services')}</h3>
            <ul>
              <li>
                <Link to="/" className="hover:text-red-950 transition-colors duration-300">
                  {t('navhome')}
                </Link>
              </li>
              <li>
                <Link to="/our-services" className="hover:text-red-950 transition-colors duration-300">
                  {t('services')}
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="hover:text-red-950 transition-colors duration-300">
                  {t('about_us')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-red-950 transition-colors duration-300">
                  {t('contact_us')}
                </Link>
              </li>
              <li>
                <Link to="/bootverif" className="hover:text-red-950 transition-colors duration-300">
                  BootVerif
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-section bg-blend-darken">
            <h3 className="text-xl font-semibold mb-4">{t('our_location')}</h3>
            <div className="map-container">
              <iframe
                title="Google Map"
                src={`https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12698.772168635114!2d${11.5116669}!3d${5.83297}!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwNDknNTguNyJOIDExwrAzMCcyMi4wIkU!5e0!3m2!1sen!2sus!4v1693240036013!5m2!1sen!2sus`}
                width="100%"
                height="200"
                allowFullScreen=""
                loading="lazy"
                className="border-0"
              ></iframe>
              <Link to="https://www.google.com/maps/place/Cabinet+daouda+Mbouobouo/@3.8329623,11.5112432,349m/data=!3m1!1e3!4m5!3m4!1s0x108bcf006b1c14d3:0xd6de8ca8d15bc6ec!8m2!3d3.8329141!4d11.5116629?hl=en&entry=ttu&g_ep=EgoyMDI0MDgyNi4wIKXMDSoASAFQAw%3D%3D">
                {t('find_on_maps')}
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center border-t border-gray-700 pt-4">
<div className="text-center justify-center align-content-around">
        {t('made_with')} <span className="text-red-950">❤️</span> {t('by_galaxy_dev')}
       </div>
          <div className="flex justify-center space-x-6">
            <a
              href="https://twitter.com/dev__Galaxy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-950 transition-colors duration-300"
            >
              <FaTwitter className="text-2xl" />
            </a>
            <a
              href="https://galaxydev.portfolio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-950 transition-colors duration-300"
            >
              <FaGlobe className="text-2xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/ambroise-beyas-bekono-2a0079368/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-950 transition-colors duration-300"
            >
              <FaLinkedin className="text-2xl" />
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-400">
            © {new Date().getFullYear()} Galaxy dev. {t('all_rights_reserved')}
          </p>
        </div>
      </footer>
    </div>
  );
}
