import React from 'react';
import headerDeskImg1 from '../Image/HeaderDesk-Img1.png'
import bannerimg1 from '../Image/Header-banner-img1.png'
import bannerimg2 from '../Image/Header-banner-img2.png'
const Header = () => {
    return (
        <div>
            <div className="">
                <img src={headerDeskImg1} alt='headerImg' />
                
            </div>
            <div class="relative h-36 overflow-hidden border-2 border-white ">
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

export default Header;
