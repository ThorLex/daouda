import React from "react";
import ant from "./../Animation - 1724862719858.json";
import Lottie from "react-lottie";
import "./Animation.css";
const Animation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,

    animationData: ant,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="">
      <div class="flex items-center justify-center h-screen">
        <div class="bg-red-950 w-[200px] h-[200px] rounded-full">
          <Lottie
            className=""
            options={defaultOptions}
            height={200}
            width={200}
          />
          <div
            className="  flex m-4 text-red-950 
            justify-center align-center"
          >
            Cabinet Daouda{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Animation;
