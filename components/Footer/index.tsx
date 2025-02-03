// "use client";
// import React from "react";
// import cn from "@/app/utils/twcx";
// import { FOOTER_LINKS } from "@/app/libs/constant";
// import { FaGithub, FaXTwitter } from "react-icons/fa6";
// import { FaLinkedin } from "react-icons/fa";
// import Link from "next/link";
// import Image from "next/image";
// import BikeFooter from "@/public/assets/BikeFooter.svg";

// const Footer = () => {
//   return (
//     <footer className="w-full h-full  bg-[#42454A] pt-5 lg:pt-10 ">
//       <div className=" max-w-[1440px] mx-auto sm:px-[5%] px-[4%]">
//         <div className="w-full h-full max-container flex flex-col justify-between pb-8">
//           <div className="flex flex-col gap-y-5 ">
//             <div className="w-full max-[550px]:flex-col flex justify-between lg:justify-start items-center max-[550px]:items-start max-[550px]:gap-y-5">
//               <div className="w-full min-[550px]:max-w-[300px] sm:max-w-[380px] lg:hidden ">
//                 <Image
//                   className="w-[50%]"
//                   src={BikeFooter}
//                   width={120}
//                   height={120}
//                   alt={""}
//                 />
//               </div>
//             </div>
//             <div className="flex max-[550px]:flex-col max-[550px]:gap-y-7 w-full justify-between items-start [&>ul>span]:text-white-100 [&>ul>span]:text-base [&>ul>span]:font-semibold [&>ul>a]:text-white-100 [&>ul>a]:text-base ">
//               <div className="w-full max-w-[50%]  hidden lg:block">
//                 <Image src={BikeFooter} height={250} width={420} alt={""} />
//               </div>

//               <ul className="flex flex-col gap-y-5 max-[550px]:gap-y-3 text-[#ffff]">
//                 <span>Quick Links</span>
//                 {FOOTER_LINKS.QuickLinks.map(
//                   (link: { id: number; link: string; label: string }) => (
//                     <Link
//                       href={link.link}
//                       key={link.id}
//                       className=" hover:font-medium hover:text-primary transition-colors duration-300"
//                     >
//                       {link.label}
//                     </Link>
//                   )
//                 )}
//               </ul>

//               <ul className="flex flex-col gap-y-5 max-[550px]:gap-y-3 text-[#ffff]">
//                 <span>Resources</span>
//                 {FOOTER_LINKS.resources.map(
//                   (link: { id: number; link: string; label: string }) => (
//                     <Link
//                       href={link.link}
//                       key={link.id}
//                       className={cn(
//                         "capitalize hover:font-medium hover:text-primary transition-colors duration-300",
//                         {
//                           uppercase: link.label === "resources",
//                         }
//                       )}
//                     >
//                       {link.label}
//                     </Link>
//                   )
//                 )}
//               </ul>
//               <div className="flex flex-col">
//                 <ul className="flex flex-col gap-y-5 max-[550px]:gap-y-3 text-[#ffff]">
//                   <span>Legals</span>
//                   {FOOTER_LINKS.legals.map(
//                     (link: { id: number; link: string; label: string }) => (
//                       <Link
//                         href={link.link}
//                         key={link.id}
//                         className={cn(
//                           "capitalize hover:font-medium hover:text-primary transition-colors duration-300",
//                           {
//                             uppercase: link.label === "legals",
//                           }
//                         )}
//                       >
//                         {link.label}
//                       </Link>
//                     )
//                   )}
//                 </ul>
//                 <div className="flex items-end mb-4  text-[#ffff] mt-2">
//                   {" "}
//                   {/*Flex container for icons */}
//                   {/* First icon */}
//                   <Link href="https://github.com/Muees99">
//                     <FaGithub className="text-white-100 text-2xl mr-4" />{" "}
//                   </Link>
//                   {/* Second icon */}
//                   <Link href="https://twitter.com/Muees__99">
//                     <FaXTwitter className="text-white-100 text-2xl mr-4" />{" "}
//                   </Link>
//                   {/* Third icon */}
//                   <Link href="https://www.linkedin.com/in/muees-alabi-77b14b239/">
//                     <FaLinkedin className="text-white-100 text-2xl " />{" "}
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="text-center text-[#FBFBFB] text-sm mt-4">
//             © Copyright Muees Alabi 2024. All Rights Reserved.
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


"use client";
import React from "react";
import cn from "@/app/utils/twcx";
import { FOOTER_LINKS } from "@/app/libs/constant";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import BikeFooter from "@/public/assets/BikeFooter.svg";

const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <footer className="w-full h-full bg-[#42454A] pt-5 lg:pt-10">
      <div className="max-w-[1440px] mx-auto sm:px-[5%] px-[4%]">
        <div className="w-full h-full max-container flex flex-col justify-between pb-8">
          <div className="flex flex-col gap-y-5">
            <div className="w-full max-[550px]:flex-col flex justify-between lg:justify-start items-center max-[550px]:items-start max-[550px]:gap-y-5">
              <div className="w-full min-[550px]:max-w-[300px] sm:max-w-[380px] lg:hidden ">
                <Image
                  className="w-[50%] -mt-8" // Apply negative margin-top for overlap
                  src={BikeFooter}
                  width={120}
                  height={120}
                  alt={""}
                />
              </div>
            </div>
            <div className="flex max-[550px]:flex-col max-[550px]:gap-y-7 w-full justify-between items-start [&>ul>span]:text-white-100 [&>ul>span]:text-base [&>ul>span]:font-semibold [&>ul>a]:text-white-100 [&>ul>a]:text-base">
              <div className="w-full max-w-[50%] hidden lg:block">
                <Image
                  src={BikeFooter}
                  height={250}
                  width={420}
                  alt={""}
                  className="-mt-40" // Adjust this negative margin as needed
                />
              </div>

              <ul className="flex flex-col gap-y-5 max-[550px]:gap-y-3 text-[#ffff]">
                <span>Quick Links</span>
                {FOOTER_LINKS.QuickLinks.map(
                  (link: { id: number; link: string; label: string }) => (
                    <Link
                      href={link.link}
                      key={link.id}
                      className="hover:font-medium hover:text-primary transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  )
                )}
              </ul>

              <ul className="flex flex-col gap-y-5 max-[550px]:gap-y-3 text-[#ffff]">
                <span>Resources</span>
                {FOOTER_LINKS.resources.map(
                  (link: { id: number; link: string; label: string }) => (
                    <Link
                      href={link.link}
                      key={link.id}
                      className={cn(
                        "capitalize hover:font-medium hover:text-primary transition-colors duration-300",
                        {
                          uppercase: link.label === "resources",
                        }
                      )}
                    >
                      {link.label}
                    </Link>
                  )
                )}
              </ul>
              <div className="flex flex-col">
                <ul className="flex flex-col gap-y-5 max-[550px]:gap-y-3 text-[#ffff]">
                  <span>Legals</span>
                  {FOOTER_LINKS.legals.map(
                    (link: { id: number; link: string; label: string }) => (
                      <Link
                        href={link.link}
                        key={link.id}
                        className={cn(
                          "capitalize hover:font-medium hover:text-primary transition-colors duration-300",
                          {
                            uppercase: link.label === "legals",
                          }
                        )}
                      >
                        {link.label}
                      </Link>
                    )
                  )}
                </ul>
                <div className="flex items-end mb-4 text-[#ffff] mt-2">
                  {/*Flex container for icons */}
                  <Link href="https://github.com/Muees99">
                    <FaGithub className="text-white-100 text-2xl mr-4" />
                  </Link>
                  <Link href="https://twitter.com/Muees__99">
                    <FaXTwitter className="text-white-100 text-2xl mr-4" />
                  </Link>
                  <Link href="https://www.linkedin.com/in/muees-alabi-77b14b239/">
                    <FaLinkedin className="text-white-100 text-2xl" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className=" text-center text-[#FBFBFB] text-sm mt-4">
            © Copyright Muees Alabi {currentYear}. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
