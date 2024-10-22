import React, { useState, useRef } from "react";
import Image from "next/image";
import Button from "@/components/Ui/Button";
import { MdOutlineUnsubscribe } from "react-icons/md";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // For directional arrows

interface ReviewData {
  header: string;
  subheader: string;
  content: string;
  image: string;
  rating: number;
}

const reviewData: ReviewData[] = [
  {
    image: "/assets/Alice.svg",
    header: "Alice Smith",
    subheader: "CEO Eronaman",
    content:
      "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure.",
    rating: 5,
  },
  {
    image: "/assets/Bob.svg",
    header: "Bob Johnson",
    subheader: "CEO Universal",
    content:
      "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.",
    rating: 4,
  },
  {
    image: "/assets/Carol.svg",
    header: "Carol Williams",
    subheader: "Pet Owner",
    content:
      "Found the perfect companion here. The team was very supportive throughout the adoption process.",
    rating: 5,
  },
  {
    image: "/assets/David.svg",
    header: "David Jones",
    subheader: "Pet Parent",
    content:
      "A wonderful platform for finding your new best friend. The variety of dogs available was impressive.",
    rating: 4,
  },
  {
    image: "/assets/Eva.svg",
    header: "Eva Brown",
    subheader: "Dog Trainer",
    content:
      "This platform connects dogs with loving homes. The process was easy and stress-free.",
    rating: 5,
  },
  {
    image: "/assets/Frank.svg",
    header: "Frank Miller",
    subheader: "Animal Advocate",
    content:
      "Great experience adopting a dog here. The support and guidance provided were top-notch.",
    rating: 4,
  },
  {
    image: "/assets/Gina.svg",
    header: "Gina Thompson",
    subheader: "Veterinarian",
    content:
      "Impressed by the professionalism and care taken to match dogs with suitable families.",
    rating: 5,
  },
  {
    image: "/assets/Henry.svg",
    header: "Henry Clark",
    subheader: "Dog Enthusiast",
    content:
      "Fantastic service and wonderful dogs. My new pet is a perfect match for my family.",
    rating: 5,
  },
];


const Card: React.FC<ReviewData> = ({
  header,
  subheader,
  content,
  image,
  rating,
}) => (
  <div
    className="card flex flex-col p-5 border border-gray-200 rounded-lg shadow-lg bg-white "
    style={{ width: "320px", height: "300px", minWidth: "300px" }} // Fixed width and height
  >
    <div className="rating  text-amber-300 text-center">
      {"★".repeat(rating)}
      {"☆".repeat(5 - rating)}
    </div>
    <div className="card-content mb-4 overflow-hidden">
      <p className="text-sm text-gray-600">{content}</p>
    </div>
    <div className="card-header flex items-center mb-4">
      <Image
        src={image}
        alt={header}
        width={64}
        height={64}
        className="rounded-full object-cover" // Ensures images are properly contained
      />
      <div className="ml-4">
        <h3 className="text-lg font-semibold">{header}</h3>
        <h4 className="text-sm text-gray-500">{subheader}</h4>
      </div>
    </div>
  </div>
);

function Reviews() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const cardContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (cardContainerRef.current) {
      const newPosition = Math.max(scrollPosition - 200, 0); // Scroll 300px left
      cardContainerRef.current.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });
      setScrollPosition(newPosition);
    }
  };

  const scrollRight = () => {
    if (cardContainerRef.current) {
      const maxScroll =
        cardContainerRef.current.scrollWidth -
        cardContainerRef.current.clientWidth;
      const newPosition = Math.min(scrollPosition + 200, maxScroll); // Scroll 300px right
      cardContainerRef.current.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });
      setScrollPosition(newPosition);
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#FAFAFA]">
      <div className="max-w-[1440px] mx-auto sm:px-[5%] px-[4%] mt-4">
        <div className="flex w-full h-full items-center justify-center">
          <h2 className="text-[#42454A] text-2xl md:text-4xl sm:text-2xl leading-[140%] font-semibold m-4 ">
            Testimonials
          </h2>
        </div>

        {/* Cards section with horizontal scrolling */}
        <div className="relative overflow-hidden  mt-4">
          {" "}
          {/* Hide overflow for a cleaner scroll */}
          <div
            ref={cardContainerRef}
            className="flex flex-row overflow-hidden gap-8"
            style={{ scrollBehavior: "smooth" }}
          >
            {reviewData.map((review, index) => (
              <Card key={index} {...review} />
            ))}
          </div>
          {/* Arrows for directional purposes */}
          <div className="flex justify-center items-center mt-6 gap-8 text-white">
            <button
              onClick={scrollLeft}
              className="p-3 rounded-full  bg-gray-200 hover:bg-gray-800"
            >
              <FaArrowLeft size={24} />
            </button>
            <button
              onClick={scrollRight}
              className="p-3 rounded-full bg-gray-200 hover:bg-gray-800"
            >
              <FaArrowRight size={24} />
            </button>
          </div>
        </div>

        {/* Newsletter section */}
        <div className="flex flex-col justify-center items-center  py-4">
          <div className="text-[#42454A] text-center">
            <h2 className="text-xl md:text-2xl sm:text-lg leading-[140%] font-semibold mt-4">
              Subscribe To Newsletter
            </h2>
            <p className="mt-2">
              Subscribe to our newsletter to get amazing offers in future.
            </p>
          </div>
          <div className="relative flex items-center mt-4">
            <input
              className="w-full p-4 pr-40 font-medium placeholder-opacity-100 border rounded-md focus:outline-none"
              type="text"
              placeholder="contact@petadoption.com"
            />
            <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-400  hover:bg-gray-500 focus:bg-[#42454A] text-white text-sm font-medium leading-snug text-center rounded-md px-4 py-2 flex items-center">
              <MdOutlineUnsubscribe className="w-6 h-6" />
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
