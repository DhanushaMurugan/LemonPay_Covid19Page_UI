import React from "react";
import RegistrationDeskimg from "../Image/registration-Desk-img.png";
import RegistrationTabimg from "../Image/registration-Tab-img.png";
import RegistrationMobimg from "../Image/registration-Mob-img.png";

const RegistrationImageBanner = () => {
  return (
    <div className="flex justify-center items-center">
      {/* Desktop Image */}
      <img
        src={RegistrationDeskimg}
        alt="Registration Desk"
        className="hidden lg:block w-full  h-auto"
      />

      {/* Tablet Image */}
      <img
        src={RegistrationTabimg}
        alt="Registration Tablet"
        className="hidden md:block lg:hidden w-full  h-auto"
      />

      {/* Mobile Image */}
      <img
        src={RegistrationMobimg}
        alt="Registration Mobile"
        className="block md:hidden w-full max-w-[480px] h-auto"
      />
    </div>
  );
};

export default RegistrationImageBanner;



