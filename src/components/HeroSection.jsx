import React, { useState } from "react";
import bgimg from "../Image/Header-bg-Desktop-1.png";
import heroDeskimg1 from "../Image/heroDeskImg-1.png";
import heroTabimg1 from "../Image/hero-Tab-Img.png";
import heroMobimg1 from "../Image/hero-Mob-Img.png";
import heroDeskimg2 from "../Image/heroDesk-img-2.png";
import heroDeskimg3 from "../Image/heroDesk-img-3.png";
import heroDeskimg4 from "../Image/heroDesk-img-4.png";
const HeroSection = () => {
  const [activeImage, setActiveImage] = useState(1); // Default to center image
  return (
    <div>
      <div className="">
        <div className="bottom-auto z-10 hidden lg:block">
          <img src={heroDeskimg1} alt="heroDeskimg1" />
        </div>
        <img src={heroTabimg1} alt="heroimg1"className="hidden md:block lg:hidden w-full  h-auto" />
        <img src={heroMobimg1} alt="heroimg1" className="block md:hidden w-full max-w-[480px] h-auto" />
      </div>

      <div
        className="relative flex h-screen items-center justify-center bottom-16 hidden lg:block"
        style={{ backgroundImage: `url(${bgimg})` }}
      >
        <div className=" bg-cover bg-center h-screen"></div>

        {/* Image Container */}
        <div className="relative w-full h-[70vh] bottom-[520px] flex items-center justify-center">
          {/* First Image */}
          <div
            className={`absolute top-0 left-0 w-1/3 h-full transition-transform duration-500 ${
              activeImage === 1 ? "scale-110 z-10" : "scale-90"
            } hidden lg:block`}
            onMouseEnter={() => setActiveImage(1)}
          >
            <img
              src={heroDeskimg2}
              alt="heroDeskimg2"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Second Image */}
          <div
            className={`absolute top-0 left-1/3 w-1/3 h-full transition-transform duration-500 ${
              activeImage === 2 ? "scale-110 z-10" : "scale-90"
            } hidden lg:block`}
            onMouseEnter={() => setActiveImage(2)}
          >
            <img
              src={heroDeskimg3}
              alt="heroDeskimg3"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Third Image */}
          <div
            className={`absolute top-0 left-2/3 w-1/3 h-full transition-transform duration-500 ${
              activeImage === 3 ? "scale-110 z-10" : "scale-90"
            } hidden lg:block`}
            onMouseEnter={() => setActiveImage(3)}
          >
            <img
              src={heroDeskimg4}
              alt="heroDeskimg4"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
