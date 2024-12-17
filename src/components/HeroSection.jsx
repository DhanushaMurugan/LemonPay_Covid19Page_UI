import React, { useState } from "react";

const HeroSection = () => {
  const [activeCard, setActiveCard] = useState(1); // Default active card is 1

  // Define images for the cards
  const backgroundImages = {
    1: "url(../)", // Replace with your actual image paths
    2: "url('/images/image2.jpg')",
    3: "url('/images/image3.jpg')",
  };

  return (
    <div
      class="relative w-full h-[500px] flex items-center justify-center"
      style={{
        backgroundImage: backgroundImages[activeCard], // Dynamic background
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 0.5s ease-in-out", // Smooth transition
      }}
    >
      {/* Card Container */}
      <div class="flex gap-6">
        {/* Card 1 */}
        <div
          onClick={() => setActiveCard(1)} // Update state to show 1st image
          class={`w-40 h-52 flex items-center justify-center rounded-lg cursor-pointer ${
            activeCard === 1 ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          <p>Feature 1</p>
        </div>

        {/* Card 2 */}
        <div
          onClick={() => setActiveCard(2)} // Update state to show 2nd image
          class={`w-40 h-52 flex items-center justify-center rounded-lg cursor-pointer ${
            activeCard === 2 ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          <p>Feature 2</p>
        </div>

        {/* Card 3 */}
        <div
          onClick={() => setActiveCard(3)} // Update state to show 3rd image
          class={`w-40 h-52 flex items-center justify-center rounded-lg cursor-pointer ${
            activeCard === 3 ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          <p>Feature 3</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

