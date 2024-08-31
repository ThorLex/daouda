import React, { useEffect, useState } from "react";
import "./stylenav.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faMailBulk } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
    <nav className=" mx-10 p-3">
      <div
        className={` contact-info pt-2 transition-transform duration-300 ease-in-out ${
          isScrolled ? "h-[2px] " : ""
        }`}
      >
        <span
          className={`  transition-transform duration-300 ease-in-out ${
            isScrolled ? "translate-x-80" : ""
          }`}
        >
          <FontAwesomeIcon icon={faMailBulk}></FontAwesomeIcon> :
          Daoudambouobouo@gmail.com <br />{" "}
          <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>: +237 677 516 461
        </span>
      </div>
      <div className="navbar-content  content-start ">
        <div className="navbar-left justify-start  ">
          <h1 className="text-sm text-center">
            Cabinet D.Mbouobouo <br />
            <small>Lord tchamba</small>
          </h1>
          <p className="text-center">Cabinet d'avocat</p>
        </div>
        <div className="navbar-right md:translate-x-[-300px] sm:translate-x-[0px] content-end">
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
              <div className="small-text mx-2 ">
                conctacter nous rapidement grace a ces Informations
              </div>
            </li>
            <li>
              <Link to="/our-services">Services</Link>
            </li>
            <li>
              <Link to="/about-us">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
