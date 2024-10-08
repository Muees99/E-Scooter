"use client";
import React, { useEffect, useState } from 'react'
import { BiLoaderCircle } from 'react-icons/bi';


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
    <div>HomeLayout</div>
  )
}
