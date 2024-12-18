import React from "react";

import bannerimg1 from "../Image/Header-banner-img1.png";
import bannerimg2 from "../Image/Header-banner-img2.png";
const Banner = () => {
  return (
    <div>
      <div class=" overflow-hidden border-2 border-white hidden lg:block">
        <div class="flex h-full animate-slide">
          <img
            src={bannerimg1}
            alt="banner-img-1"
            class="h-full object-cover"
          />

          <img
            src={bannerimg2}
            alt="banner-img-2"
            class="h-full object-cover"
          />
        </div>
      </div>
      <div class=" overflow-hidden border-2 border-white hidden md:block lg:hidden ">
        <div class="flex h-full animate-slide">
          <img
            src={bannerimg1}
            alt="banner-img-1"
            class="h-full object-cover"
          />

          <img
            src={bannerimg2}
            alt="banner-img-2"
            class="h-full object-cover"
          />
        </div>
      </div>

      <div class=" overflow-hidden border-2 border-white block md:hidden">
        <div class="flex h-full animate-slide">
          <img
            src={bannerimg1}
            alt="banner-img-1"
            class="h-full object-cover"
          />

          <img
            src={bannerimg2}
            alt="banner-img-2"
            class="h-full object-cover"
          />
        </div>
      </div>
      
      
    </div>
  );
};

export default Banner;
