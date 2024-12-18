import React from "react";
import headerbkg from "../Image/Header-bg-Desktop-1.png";
import headerTabImg from "../Image/Header-Tab.png";
import headerMobImg from "../Image/Header-Mob.png";
import headerpageTop from "../Image/00_HomePage-Top.png";
import headerpageBottom from "../Image/00_HomePage-Bottom.png";
import headerpageLeft from "../Image/00_HomePage-Left.png";
import headerpageRight from "../Image/00_HomePage-Right.png";

const Header = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${headerbkg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "150vh",
        position: "relative",
      }}
    >
      <div className="relative w-full h-full hidden lg:block">
        {/* Overlay Image Transition */}
        <div className="absolute inset-0">
          {/* Four splits */}
          {["top"].map((position, index) => (
            <div
              key={position}
              className={`absolute bg-cover bg-center transition-split ${position}-split`}
              style={{
                backgroundImage: `url(${headerpageTop})`,
                animation: `slide-in-${position} 1s ease-in-out ${
                  index * 0.3
                }s forwards`,
              }}
            ></div>
          ))}
          {["bottom"].map((position, index) => (
            <div
              key={position}
              className={`absolute bg-cover bg-center transition-split ${position}-split`}
              style={{
                backgroundImage: `url(${headerpageBottom})`,
                animation: `slide-in-${position} 1s ease-in-out ${
                  index * 0.3
                }s forwards`,
              }}
            ></div>
          ))}
          {["left"].map((position, index) => (
            <div
              key={position}
              className={`absolute bg-cover bg-center transition-split ${position}-split`}
              style={{
                backgroundImage: `url(${headerpageLeft})`,
                animation: `slide-in-${position} 1s ease-in-out ${
                  index * 0.3
                }s forwards`,
              }}
            ></div>
          ))}
          {["right"].map((position, index) => (
            <div
              key={position}
              className={`absolute bg-cover bg-center transition-split ${position}-split`}
              style={{
                backgroundImage: `url(${headerpageRight})`,
                animation: `slide-in-${position} 1s ease-in-out ${
                  index * 0.3
                }s forwards`,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* CSS */}
      <style jsx>{`
        .transition-split {
          background-size: 100% 100%;
          opacity: 0;
        }

        /* Top Split */
        .top-split {
          top: 0;
          left: 0;
          right: 0;
          height: 50%;
        }

        /* Bottom Split */
        .bottom-split {
          bottom: 0;
          left: 0;
          right: 0;
          height: 50%;
        }

        /* Left Split */
        .left-split {
          top: 0;
          bottom: 0;
          left: 0;
          width: 50%;
        }

        /* Right Split */
        .right-split {
          top: 0;
          bottom: 0;
          right: 0;
          width: 50%;
        }

        @keyframes slide-in-top {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes slide-in-bottom {
          0% {
            transform: translateY(100%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes slide-in-left {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slide-in-right {
          0% {
            transform: translateX(100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
      <div>
        <img
          src={headerTabImg}
          alt="headerTabImg"
          className="hidden md:block lg:hidden  w-full max-w-[768px] h-auto"
        />
        <img
          src={headerMobImg}
          alt="headerMobImg"
          className="block md:hidden w-full max-w-[480px] h-auto"
        />
      </div>

      

      
    </div>
  );
};

export default Header;
