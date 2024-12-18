import React from 'react';
import featureDeskimg from '../Image/feature-Desk-img.png';
import featureTabimg from '../Image/feature-Tab-img.png';
import featureMobimg from '../Image/feature-mob-img.png';

const Features = () => {
  return (
    <div>
      <div className=" flex justify-center items-center">
        {/* Desktop Image */}
        <img
          src={featureDeskimg}
          alt="Desktop Feature"
          className="hidden lg:block w-full  "
        />

        {/* Tablet Image */}
        <img
          src={featureTabimg}
          alt="Tablet Feature"
          className="hidden md:block lg:hidden w-full  h-auto"
        />

        {/* Mobile Image */}
        <img
          src={featureMobimg}
          alt="Mobile Feature"
          className="block md:hidden w-full max-w-[480px] h-auto"
        />
      </div>
    </div>
  );
};

export default Features;




