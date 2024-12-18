import React from "react";
import reviewDeskImg1 from "../Image/customer testimonial.png";
import reviewTabImg1 from "../Image/customerTestionial-2.png";
import reviewMobImg1 from "../Image/customer testimonial-3.png";
import reviewDeskcard2 from "../Image/reviewDesk-img1.png";
import reviewDeskcard3 from "../Image/reviewDesk-img2.png";

const CustomerTestimonial = () => {
  return (
    <div className="flex justify-center items-center">
    <div className="relative w-full mt-46 mb-8 h-screen ">
      {/* Desk Main Image */}
      <div className="relative ">
        <img
          src={reviewDeskImg1}
          alt="reviewimg"
          className="w-full h-auto object-cover hidden lg:block "
        />
        {/* tab Main Image */}
        <img
          src={reviewTabImg1}
          alt="reviewimg"
          className="hidden md:block lg:hidden w-full  h-auto"
        />
        {/* Mob Main Image */}
        <img
          src={reviewMobImg1}
          alt="reviewimg"
         className="block md:hidden w-full max-w-[480px] h-auto"
        />

        {/* Optional Sliding Animation */}
        <div
          className="relative w-full overflow-hidden hidden lg:block"
          style={{ bottom: "32rem" }}
        >
          <div className="flex animate-slide">
            <img
              src={reviewDeskcard2}
              alt="reviewcard1"
              className="h-full object-cover"
            />
            <img
              src={reviewDeskcard3}
              alt="reviewcard2"
              className="h-full object-cover"
            />
            <img
              src={reviewDeskcard3}
              alt="reviewcard3"
              className="h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CustomerTestimonial;
