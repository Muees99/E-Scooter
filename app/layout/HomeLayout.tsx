"use client";
import React, { useEffect, useState } from "react";
import { BiLoaderCircle } from "react-icons/bi";
import Navbar from "@/components/Navs/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProInfo from "@/components/ProInfo";
import Accessories from "../../components/Accessories";
import Gallery from "../../components/Gallery";
import Colrdisplay from "@/components/Colrdisplay";
import Reviews from "@/components/Reviews";

export default function HomeLayout({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulate a 1 second loading time
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <BiLoaderCircle className="animate-spin  h-24 w-24 text-[#484646]" />
      </div>
    );
  }
  return (
    <>
      <Navbar />
      <Hero />
      <section id="products">
        <ProInfo />
      </section>
      <Accessories />
      <section id="gallery">
        <Gallery />
      </section>
      <Colrdisplay />
      <Reviews />
      <Footer />
    </>
  );
}
