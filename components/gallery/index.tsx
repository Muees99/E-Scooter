// import React from "react";
// import Image from "next/image";
// import Galscoot1 from "@/public/assets/Galscoot1.svg";
// import Galscoot2 from "@/public/assets/Galscoot2.svg";
// import Galscoot3 from "@/public/assets/Galscoot3.svg";
// import Link from "next/link";

// function Gallery() {
//   return (
//     <div className="w-full h-full">
//       <div className="max-w-[1440px] mx-auto sm:px-[5%] px-[4%]">
//         {/* Product Information Section */}
//         <div className="text-center text-[#42454A] mt-10 mb-10">
//           <h3 className="font-bold text-2xl sm:text-3xl">Gallery</h3>
//           <p className="font-thin text-md sm:text-lg mt-2">
//             View gallery of our products and make yourself satisfied with our
//             creation.
//           </p>
//         </div>

//         {/* Gallery Section */}
//         <div className="flex flex-col md:flex-row justify-between w-full h-full">
//           {/* Left Section */}
//           <div className="flex flex-col  justify-center items-start text-[#42454A] max-w-[464px] md:w-1/3 p-4 mt-4 md:mt-0 md:ml-4">
//             <Image src={Galscoot1} alt={""} width={748} height={720} />
//           </div>
//           {/* Right Section */}
//           <div className="flex flex-row justify-center items-center w-full md:w-1/2 p-4 gap-4">
//             <Image src={Galscoot2} alt={""} width={748} height={720} />
//           </div>
//         </div>

//         {/* Parts and Spare Parts Section */}
//         <div className="text-center text-[#42454A] mt-10 mb-10">
//           <div className="flex flex-col md:flex-row justify-between w-full h-full">
//             {/* Left Section */}

//             <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-4 gap-6 ">
//               <div className="flex justify-center items-center py-4 w-full">
//                 <Link
//                   href="#"
//                   className="flex items-center justify-center w-64 px-8 py-2 rounded-md hover:bg-[#F5F5F5] sm:mb-0 sm:mr-4 border border-[#42454A]"
//                   passHref
//                 >
//                   <span className="font-semibold text-[#42454A]">
//                     Battery Images
//                   </span>
//                 </Link>
//               </div>
//               <div className="flex justify-center items-center py-4 w-full">
//                 <Link
//                   href="#"
//                   className="flex items-center justify-center w-64 px-8 py-2 rounded-md hover:bg-[#F5F5F5] sm:mb-0 sm:mr-4 border border-[#42454A]"
//                   passHref
//                 >
//                   <span className="font-semibold text-[#42454A]">
//                     Spare Parts Images
//                   </span>
//                 </Link>
//               </div>
//               <div className="flex justify-center items-center py-4 w-full">
//                 <Link
//                   href="#"
//                   className="flex items-center justify-center w-64 px-8 py-2 rounded-md hover:bg-[#F5F5F5] sm:mb-0 sm:mr-4 border border-[#42454A]"
//                   passHref
//                 >
//                   <span className="font-semibold text-[#42454A]">
//                     Charging Cable Images
//                   </span>
//                 </Link>
//               </div>
//             </div>

//             {/* Right Section */}
//             <div className="flex flex-col  justify-center items-start text-[#42454A] max-w-[464px] md:w-1/2 p-4 mt-4 md:mt-0 md:ml-4">
//               <Image src={Galscoot3} alt={""} width={748} height={720} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Gallery;
