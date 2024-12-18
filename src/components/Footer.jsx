



import React, { useState, useEffect } from "react";
import footerDeskImg1 from "../Image/footer-Desk-img1.png";
import footerDeskImg2 from "../Image/footer-Desk-img2.png";
import footerTabImg1 from "../Image/footer-Tab-img1.png";
import footerTabImg2 from "../Image/footer-Tab-img2.png";
import footerMobImg1 from "../Image/footer-Mob-img1.png";
import footerMobImg2 from "../Image/footer-Mob-img2.png";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const footerPosition = document.getElementById("footer").offsetTop;

      // Check if footer is in the viewport
      if (scrollPosition > footerPosition) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full h-screen ">
      {/* Footer Section */}
      <footer
        id="footer"
        className="relative w-full h-screen overflow-hidden flex items-center justify-center"
      >
        {/* Default Desk Image  */}
        <img
          src={footerDeskImg1}
          alt="Footer Default"
          className="w-full w-screen h-full mt-96 object-cover transition-opacity duration-300 hidden lg:block "
        />
         {/* Default Tab Image  */}
         <img
          src={footerTabImg1}
          alt="Footer Default"
          className="w-full w-screen h-full mt-96 object-cover transition-opacity duration-300 hidden md:block lg:hidden"
        />
         {/* Default Mob Image  */}
         <img
          src={footerMobImg1}
          alt="Footer Default"
          className="w-full w-screen h-full mt-96 object-cover transition-opacity duration-300 hidden md:hidden"
        />
        {/* Second Desk Image (Appears After Scroll) */}
        <img
          src={footerDeskImg2}
          alt="Footer Scroll"
          className={`absolute top-0 bottom-40 left-0 mt-8 w-screen h-30 object-cover transform transition-transform duration-1000 ease-out delay-1000 ${
            isVisible ? "scale-100 opacity-100" : "scale-50 opacity-0"
          } hidden lg:block`}
        />
        {/* Second Tab Image (Appears After Scroll) */}
        <img
          src={footerTabImg2}
          alt="Footer Scroll"
          className={`absolute top-0 bottom-40 left-0 mt-8 w-screen h-30 object-cover transform transition-transform duration-1000 ease-out delay-1000 ${
            isVisible ? "scale-100 opacity-100" : "scale-50 opacity-0"
          }hidden md:block lg:hidden`}
        />
        {/* Second Mob Image (Appears After Scroll) */}
        <img
          src={footerMobImg2}
          alt="Footer Scroll"
          className={`absolute top-0 bottom-40 left-0 mt-8 w-screen h-30 object-cover transform transition-transform duration-1000 ease-out delay-1000 ${
            isVisible ? "scale-100 opacity-100" : "scale-50 opacity-0"
          }hidden md:hidden`}
        />
      </footer>
    </div>
  );
};

export default Footer;
