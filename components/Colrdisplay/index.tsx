import React, { useState } from "react";
import Image from "next/image";
import colorScoot from "@/public/assets/colorScoot.svg"; // Default main image
import skyeblueB1 from "@/public/assets/skyeblueB1.svg";
import greenB2 from "@/public/assets/greenB2.svg";
import redB3 from "@/public/assets/redB3.svg";
import blackB4 from "@/public/assets/blackB4.svg";

function Colrdisplay() {
  // State to manage the currently displayed image
  const [mainImage, setMainImage] = useState(colorScoot);

  // Images array for easier mapping
  const cards = [
    { src: skyeblueB1, alt: "Card 1" },
    { src: greenB2, alt: "Card 2" },
    { src: redB3, alt: "Card 3" },
    { src: blackB4, alt: "Card 4" },
  ];

  return (
    <div className="w-full min-h-screen bg-white">
      <div className="max-w-[1440px] mx-auto sm:px-[5%] px-[4%] flex flex-col justify-center items-center h-full">
        {/* Product Information Section */}
        <div className="text-center text-[#42454A] mt-8 mb-8">
          <h3 className="font-bold text-xl sm:text-3xl">Colors</h3>
          <p className="font-thin text-md sm:text-lg mt-2">
            Checkout our product colors.
          </p>
        </div>

        {/* Main Image (Changes when card is clicked) */}
        <div className="flex justify-center items-center mb-8 w-full h-[300px] sm:h-[400px] lg:h-[500px]">
          <Image
            src={mainImage}
            alt="Main Image"
            layout="intrinsic"
            width={500}
            height={500}
            className="object-contain max-h-full"
          />
        </div>

        {/* Four Cards Section */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 justify-center items-center w-full">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex justify-center cursor-pointer"
              onClick={() => setMainImage(card.src)} // Set clicked image as the main image
            >
              <Image
                src={card.src}
                alt={card.alt}
                layout="intrinsic"
                width={150}
                height={150}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Colrdisplay;

