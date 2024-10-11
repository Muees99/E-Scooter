import React from "react";
import Image from "next/image";
import Biklus from "@/public/assets/Biklus.svg";
import ThickIcon from "@/public/assets/ThickIcon.svg";
import Torque from "@/public/assets/Torque.svg";



function ProInfo() {
  return (
    <div className="w-full  h-full">
      <div className="max-w-[1440px] mx-auto sm:px-[5%] px-[4%]">
        {/* Product Information Section */}
        <div className="text-center text-[#42454A] mt-10 mb-10">
          <h3 className="font-bold text-2xl">Product Information</h3>
          <p className="font-thin text-xl mt-2">
            Our Scooter has the following unique design and technology features:
          </p>
        </div>

        {/* Two Column Section */}
        <div className="flex flex-col md:flex-row justify-between w-full h-full">
          {/* Left Section */}
          <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-4">
            {/* <h4 className="font-semibold text-lg">Left Section</h4> */}
            {/* <p>Content for the left section goes here.</p> */}
            <Image src={Biklus} alt={""} width={748} height={720} />
          </div>

          {/* Right Section */}
          <div className="flex flex-col  justify-center items-start max-w-[464px] md:w-1/2 p-4 mt-4 md:mt-0 md:ml-4">
            {/* <h4 className="font-semibold text-lg">Right Section</h4>
            <p>Content for the right section goes here.</p> */}
            <div className="flex flex-col sm:flex-row mt-4 md:mt-8 w-fit md:w-auto">
              <Image src={ThickIcon} alt="ThickIcon" width={30} height={30} />
              <span className="ml-4 font-light text-[#42454A]">
                Lightweight aircraft grade aluminium frame
              </span>
            </div>
            <div className="flex flex-col sm:flex-row mt-4 md:mt-8 w-fit md:w-auto">
              <Image src={ThickIcon} alt="ThickIcon" width={30} height={30} />
              <span className="ml-4 font-light text-[#42454A]">
                Car grade lithium battery
              </span>
            </div>
            <div className="flex flex-col sm:flex-row mt-4 md:mt-8 w-fit md:w-auto">
              <Image src={ThickIcon} alt="ThickIcon" width={30} height={30} />
              <span className="ml-4 font-light text-[#42454A]">
                Self-balanced
              </span>
            </div>
            <div className="flex flex-col sm:flex-row mt-4 md:mt-8 w-fit md:w-auto">
              <Image src={ThickIcon} alt="ThickIcon" width={30} height={30} />
              <span className="ml-4 font-light text-[#42454A]">
                Plug n play
              </span>
            </div>
            <div className="flex flex-col sm:flex-row mt-4 md:mt-8 w-fit md:w-auto">
              <Image src={ThickIcon} alt="ThickIcon" width={30} height={30} />
              <span className="ml-4 font-light text-[#42454A]">
                Quick release adapter RFID key card
              </span>
            </div>
            <div className="flex flex-col sm:flex-row mt-4 md:mt-8 w-fit md:w-auto">
              <Image src={ThickIcon} alt="ThickIcon" width={30} height={30} />
              <span className="ml-4 font-light text-[#42454A]">
                RFID key card
              </span>
            </div>
          </div>
        </div>
        {/* High Efficiency Motor Section */}
        <div className="text-center text-[#42454A] mt-10 mb-10">
          <h3 className="font-bold text-2xl">High Efficiency Motor</h3>
          <p className="font-thin text-xl mt-2">
            More torque for powerful riding with 22% maximum hill climbing
            capability.
          </p>
        </div>
        <div className=" flex justify-center items-center ">
          <Image src={Torque} alt={""} width={1042} height={792} />
        </div>
      </div>
    </div>
  );
}

export default ProInfo;
