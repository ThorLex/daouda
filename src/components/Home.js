import React from "react";
import image from "./../images/loi1.jpg";

export default function Home() {
  return (
    <div className=" container  mx-3 relative ">
      <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
        <a href="#">
          <img className="  m-2 img p-8" src={image} alt="image description" />
        </a>
        <figcaption className="absolute px-4 text-lg text-white bottom-6">
          <p></p>
        </figcaption>
      </figure>
      <div class=" top-0 left-0 w-full h-full flex items-center justify-center">
        <h1 class="text-5xl font-bold text-dark p-4 rounded-lg">
          <span className="text-green"> Justice</span> et{" "}
          <span className="text-red"> expertise</span> à votre service. Notre
          équipe d’avocats est prête à défendre vos droits avec rigueur et
          compassion. Votre confiance est notre priorité.
        </h1>
      </div>
    </div>
  );
}
