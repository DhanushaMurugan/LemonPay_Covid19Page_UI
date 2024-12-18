import React, { useState, useEffect } from "react";
import footerImg1 from "../Image/footer-img1.png";
import footerImg2 from "../Image/footer-img2.png";

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
    <div className="relative w-full h-screen mt-20">
      {/* Footer Section */}
      <footer
        id="footer"
        className="relative w-full h-screen overflow-hidden flex items-center justify-center"
      >
        {/* Default (1st) Image */}
        <img
          src={footerImg1}
          alt="Footer Default"
          className="w-full h-full object-cover transition-opacity duration-300"
        />
        {/* Second Image (Appears After Scroll) */}
        <img
          src={footerImg2}
          alt="Footer Scroll"
          className={`absolute top-0 bottom-40 left-0 w-full h-screen object-cover transform transition-transform duration-1000 ease-out delay-1000 ${
            isVisible ? "scale-100 opacity-100" : "scale-50 opacity-0"
          }`}
        />
      </footer>
    </div>
  );
};

export default Footer;
