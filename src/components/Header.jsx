import React from 'react';
import headerImg from '../Image/Header-bg-Desktop - 1.png'
import bannerimg1 from '../Image/Header-banner-img1.png'
import bannerimg2 from '../Image/Header-banner-img2.png'
const Header = () => {
    return (
        <div>
            <div className="">
                <img src={headerImg} alt='headerImg' />
            </div>
            <div class="relative w-full h-[300px] overflow-hidden bg-gray-200">
                <div class="flex w-[200%] h-full animate-slide">

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

export default Header;
