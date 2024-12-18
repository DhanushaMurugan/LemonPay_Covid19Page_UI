import React from 'react';
import SymptomDeskimg from '../Image/SymptomsDesk-img.png';
import SymptomTabimg from '../Image/SymptomsTab-img.png';
import SymptomMobimg from '../Image/SymptomsMob-img.png';

const SymptomView = () => {
  return (
    <div className="flex justify-center items-center">
      {/* Desktop Image */}
      <img
        src={SymptomDeskimg}
        alt="Symptom Desktop View"
        className="hidden lg:block w-full "
      />

      {/* Tablet Image */}
      <img
        src={SymptomTabimg}
        alt="Symptom Tablet View"
        className="hidden md:block lg:hidden w-full  h-auto"
      />

      {/* Mobile Image */}
      <img
        src={SymptomMobimg}
        alt="Symptom Mobile View"
        className="block md:hidden w-full max-w-[480px] h-auto"
      />
    </div>
  );
};

export default SymptomView;


