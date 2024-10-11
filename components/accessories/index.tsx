import React from "react";
import Image from "next/image";
import ThickIcon from "@/public/assets/ThickIcon.svg";
import Grack1 from "@/public/assets/Grack1.svg";
import Grack2 from "@/public/assets/Grack2.svg";
import GreenRack from "@/public/assets/GreenRack.svg";
import RedRack from "@/public/assets/RedRack.svg";
import Link from "next/link";

function Accessories() {
  return (
    <div className="w-full h-full">
      <div className="max-w-[1440px] mx-auto sm:px-[5%] px-[4%]">
        {/* Product Information Section */}
        <div className="text-center text-[#42454A] mt-10 mb-10">
          <h3 className="font-bold text-2xl">Multiple Accessories</h3>
          <p className="font-thin text-xl mt-2">
            There are multiple modes for the scooter for your multiple needs.
          </p>
        </div>

        {/* Golf Rack Section */}
        <div className="flex flex-col md:flex-row justify-between w-full h-full">
          {/* Left Section */}
          <div className="flex flex-col  justify-center items-start text-[#42454A] max-w-[464px] md:w-1/3 p-4 mt-4 md:mt-0 md:ml-4">
            <h4 className="font-bold text-lg">Golf Bag Rock</h4>
            {/* <p>Content for the right section goes here.</p> */}
            <div className="flex flex-col sm:flex-row mt-4 md:mt-8 w-fit md:w-auto">
              <Image src={ThickIcon} alt="ThickIcon" width={30} height={30} />
              <span className="ml-4 font-light">
                Material : Aluminium alloy
              </span>
            </div>
            <div className="flex flex-col sm:flex-row mt-4 md:mt-8 w-fit md:w-auto">
              <Image src={ThickIcon} alt="ThickIcon" width={30} height={30} />
              <span className="ml-4 font-light">Color : Black</span>
            </div>
            <div className="flex flex-col sm:flex-row mt-4 md:mt-8 w-fit md:w-auto">
              <Image src={ThickIcon} alt="ThickIcon" width={30} height={30} />
              <span className="ml-4 font-light">Capacity : 45lbs</span>
            </div>
            <div className="flex flex-col sm:flex-row mt-4 md:mt-8 w-fit md:w-auto">
              <Image src={ThickIcon} alt="ThickIcon" width={30} height={30} />
              <span className="ml-4 font-light">Capacity : 45lbs</span>
            </div>
            <div className="flex flex-col sm:flex-row mt-4 md:mt-8 w-fit md:w-auto">
              <Image src={ThickIcon} alt="ThickIcon" width={30} height={30} />
              <span className="ml-4 font-light">
                Ease : Steady & adjustable
              </span>
            </div>
          </div>
          {/* Right Section */}
          <div className="flex flex-row justify-center items-center w-full md:w-1/2 p-4 gap-4">
            <div className=" w-1/2">
              <Image src={Grack1} alt={""} width={748} height={720} />
            </div>
            <div className=" w-1/2">
              <Image src={Grack2} alt={""} width={748} height={720} />
            </div>
          </div>
        </div>

        {/* Shopping Rack Section */}
        <div className="text-center text-[#42454A] mt-10 mb-10">
          <div className="flex flex-col md:flex-row justify-between w-full h-full">
            {/* Left Section */}
            <div className="flex flex-row justify-center items-center w-full md:w-1/2 p-4 gap-6">
              <div className=" w-1/2">
                <Image src={GreenRack} alt={""} width={472} height={427} />
              </div>
              <div className=" w-1/2">
                <Image src={RedRack} alt={""} width={240} height={210} />
              </div>
            </div>
            {/* Right Section */}
            <div className="flex flex-col  justify-center items-start text-[#42454A] max-w-[464px] md:w-1/3 p-4 mt-4 md:mt-0 md:ml-4">
              <h4 className="font-bold text-lg">Golf Bag Rock</h4>
              {/* <p>Content for the right section goes here.</p> */}
              <div className="flex flex-col sm:flex-row mt-4 md:mt-8 w-fit md:w-auto">
                <Image src={ThickIcon} alt="ThickIcon" width={30} height={30} />
                <span className="ml-4 font-light">
                  Material : Aluminium alloy
                </span>
              </div>
              <div className="flex flex-col sm:flex-row mt-4 md:mt-8 w-fit md:w-auto">
                <Image src={ThickIcon} alt="ThickIcon" width={30} height={30} />
                <span className="ml-4 font-light">Color : Black</span>
              </div>
              <div className="flex flex-col sm:flex-row mt-4 md:mt-8 w-fit md:w-auto">
                <Image src={ThickIcon} alt="ThickIcon" width={30} height={30} />
                <span className="ml-4 font-light">Capacity : 45lbs</span>
              </div>
              <div className="flex flex-col sm:flex-row mt-4 md:mt-8 w-fit md:w-auto">
                <Image src={ThickIcon} alt="ThickIcon" width={30} height={30} />
                <span className="ml-4 font-light">
                  Ease : Steady & adjustable
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex justify-center items-center  py-4 ">
          <Link
            href="#"
            className="flex items-center px-4 py-2 rounded-md
                    hover:bg-gray-400  mb-6 sm:mb-0 sm:mr-4
                    bg-[#F5F5F5] border border-[#42454A]"
            passHref
          >
            <span className=" font-semibold text-[#42454A] ">
              More Accessories Coming Soon
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Accessories;
