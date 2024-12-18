import React from "react";
import reviewDeskImg1 from "../Image/customer testimonial.png";
import reviewcard1 from "../Image/reviewDesk-img1.png";
import reviewcard2 from "../Image/reviewDesk-img2.png";

const CustomerTestimonial = () => {
  return (
    <div className="relative w-full mt-32 h-screen">
      {/* Main Image */}
      <div className="relative">
        <img
          src={reviewDeskImg1}
          alt="reviewimg"
          className="w-full h-auto object-cover"
        />
      {/* Optional Sliding Animation */}
      <div className="relative w-full bottom-96 overflow-hidden">
        <div className="flex  animate-slide">
          <img
            src={reviewcard1}
            alt="reviewcard1"
            className="h-full object-cover"
          />
          <img
            src={reviewcard2}
            alt="reviewcard2"
            className="h-full object-cover"
          />
          <img
            src={reviewcard2}
            alt="reviewcard3"
            className="h-full object-cover"
          />
        </div>
      </div>
        
      </div>

      
    </div>
  );
};

export default CustomerTestimonial;



// import React from "react";
// import reviewDeskImg1 from "../Image/customer testimonial.png";
// import reviewcard1 from "../Image/reviewDesk-img1.png";
// import reviewcard2 from "../Image/reviewDesk-img2.png";
// const CustomerTestimonial = () => {
//   return (
//     <div className="">
//       <div className="">
//       <img src={reviewDeskImg1} alt="reviewimg" />
//       </div>
//       <div class="relative w-full  bottom-80 overflow-hidden ">
      
//         <div class="flex w-[200%] h-full animate-slide">
//           <img
//             src={reviewcard1}
//             alt="reviewcard1"
//             class="h-full object-cover"
//           />
//           <img
//             src={reviewcard2}
//             alt="reviewcard1"
//             class="h-full object-cover"
//           />
//           <img
//             src={reviewcard2}
//             alt="reviewcard1"
//             class="h-full object-cover"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CustomerTestimonial;
