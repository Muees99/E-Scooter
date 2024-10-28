"use client";

import { NAVLINKS } from "@/app/libs/constant";
import cn from "@/app/utils/twcx";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import MobileNav from "../MobileNav";
import { useStateCtx } from "@/context/StateContext";
import useWindowHeight from "@/hooks/useDimension";
import Button from "@/components/Ui/Button";
import { CiLogin } from "react-icons/ci";
import Image from "next/image";
import EcoRide from "@/public/assets/Ecoride.svg";
import { SiGnuprivacyguard } from "react-icons/si";

const Navbar = () => {
  const {  setShowMobileMenu } = useStateCtx();
  const searchParams = useSearchParams().get("path");
  const scrollHeight = useWindowHeight();
  const router = useRouter();

  const [isActive, setIsActive] = useState("");
  useEffect(() => {
    if (searchParams) {
      setIsActive(searchParams);
      return;
    }
  }, [searchParams]);

  return (
    <header className="w-full ">
      <nav
        className={cn(
          "max-[500px]:py-2 shadow-lg sm:px-[5%] px-[4%] h-[12vh] flex shadow-slate-800/20 justify-between items-center transition-colors duration-500 max-w-[1440px] mx-auto",
          scrollHeight > 200
            ? "fixed backdrop-blur-xl top-0 left-0 z-50 -translate-y-28 opacity-0 animate-slideDown bg-white-100 py-3 border-b border-gray-200 shadow-md"
            : "md:py-3 py-3",
          {
            "bg-white/60": scrollHeight > 800 && scrollHeight < 4300,
          }
        )}
      >
        <Link
          href="/?path=home"
          className={cn(
            "max-sm:w-[120px] max-[450px]:w-[100px]",
            scrollHeight > 200 ? "w-[120px] " : "w-fit",
            "animate-pulse" // Apply the pulse animation
          )}
        >
          <span className=" flex text-black text-lg lg:text-2xl font-bold">
            <Image
              src={EcoRide}
              alt={""}
              width={120}
              height={120}
              objectFit="contain"
              className=" ml-2"
            />
            {/* E-Scoot */}
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-x-5 lg:gap-x-7 2xl:gap-x-10">
          {NAVLINKS.map((link) => (
            <Link
              // href={
              //   link.link === "home"
              //     ? "/?path=home"
              //     : `${link.link}?path=${link.link}`
              // }
              href={`#${link.link}`} // Use hash links for on-page navigation
              key={link.id}
              onClick={() => {
                setIsActive(link.link);
              }}
              className={cn(
                "text-[#42454A]  capitalize text-base relative font-medium  before:bg-[#383b4533] before:w-[0%] before:h-1 before:absolute before:-bottom-2 before:left-0 before:transition-all before:duration-500",
                isActive === link.link ? "before:w-full text-[#1c213433]" : "",
                "hover:text-[#cfbf63e7]"
              )}
            >
              <span>{link.label}</span>
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex gap-x-3 xl:gap-x-5">
          <Button
            isLoading={false}
            onClick={() => {
              router.push("/auth/login");
            }}
            className="bg-[#ffffff] hover:bg-[#32322986] focus:bg-[#383b4533] px-4 py-2 rounded-md font-medium border border-[#484646] text-black"
          >
            Login
            <CiLogin />
          </Button>
          <Button
            isLoading={false}
            onClick={() => {
              router.push("/auth/signUp");
            }}
            className="bg-[#3a3c43] hover:bg-[#32322986] focus:bg-[#807500] px-4 py-2 rounded-md font-medium text-white"
          >
            Sign Up
            <SiGnuprivacyguard className=" text-white" />
          </Button>
        </div>

        <div
          tabIndex={0}
          className="lg:hidden text-2xl cursor-pointer focus:border border-primary focus:p-1 focus:rounded-md"
          onClick={() => setShowMobileMenu(true)}
        >
          <FaBars className=" text-gray-500" />
        </div>
        <MobileNav />
      </nav>
    </header>
  );
};

export default Navbar;
