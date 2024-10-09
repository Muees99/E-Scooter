
import Link from "next/link";
import React from "react";
import Image from "next/image";
import iconbuy from "@/public/assets/iconbuy.svg";
import video from "@/public/assets/watch our video.svg";
import ScooterHer from "@/public/assets/ScootHer.svg";

function Hero() {
  return (
    <header className="w-full sm:h-screen h-full">
      <div className="max-w-[1440px] mx-auto sm:px-[5%] px-[4%]">
        <div className="flex w-full h-full items-center">
          <div className="flex flex-col md:flex-row justify-between items-center w-full min-h-screen">
            {/* Left Section */}
            <div className="flex flex-col flex-1">
              <div className="">
                <div className="max-w-full md:max-w-[50%] uppercase flex flex-col mt-4">
                  <h2 className="text-[#42454A] text-xl sm:text-2xl md:text-4xl leading-tight font-light tracking-[0.063em]">
                    Let&apos;s ride
                  </h2>
                  <h2 className="text-[#42454A] text-xl sm:text-2xl md:text-4xl leading-tight font-semibold tracking-[0.063em]">
                    the future.
                  </h2>
                </div>

                {/* Line divider */}
                <div className="w-1/3 sm:w-1/4 h-[0.125rem] bg-[#42454A] mt-4 mb-4"></div>

                {/* Description Text */}
                <p className="font-normal mt-4 text-base sm:text-lg md:text-xl text-[#42454A] max-w-full sm:max-w-[500px] md:max-w-[50%]">
                  Simple and sleek design with users in mind.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row mt-4 md:mt-8 w-fit md:w-auto">
                  <Link
                    href="#"
                    className="flex items-center px-4 py-2 rounded-md
                    hover:bg-gray-400 focus:bg-[#42454A] mb-6 sm:mb-0 sm:mr-4
                    bg-[#F5F5F5]"
                    passHref
                  >
                    <Image src={iconbuy} alt="Buy now" width={30} height={30} />
                    <span className="ml-4 font-semibold">Buy now</span>
                  </Link>

                  <Link
                    href="#"
                    passHref
                    className="flex items-center px-4 py-2 rounded-md hover:bg-gray-400 focus:bg-[#42454A] mb-6 sm:mb-0 bg-[#F5F5F5]"
                  >
                    <Image
                      src={video}
                      alt="Watch our video"
                      width={100}
                      height={100}
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Section - Image */}
            <div className="flex flex-1">
              <div className="flex justify-end w-full mt-2">
                <Image
                  src={ScooterHer}
                  alt="Scooter Image"
                  width={856}
                  height={807}
                  priority
                  className="w-full max-w-[400px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[856px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
