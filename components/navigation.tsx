"use client";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

export default function Navigation() {
  const [mobileNav, setMobileNav] = useState(false);
  const pages = ["Home", "About", "Experience", "Skills", "Projects"];

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 1024) {
        setMobileNav(false);
      }						
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* mobile button */}
      <div className="flex p-6 md:p-16 lg:hidden cursor-pointer opacity-70 hover:opacity-100 transition-opacity duration-200">
        <button
          className="h-14 w-14 rounded-md border-4 border-white flex flex-col justify-evenly items-center"
          onClick={() => setMobileNav(!mobileNav)}
        >
          <span className="h-1 w-8/12 bg-white rounded-md"></span>
          <span className="h-1 w-8/12 bg-white rounded-md"></span>
          <span className="h-1 w-8/12 bg-white rounded-md"></span>
        </button>
      </div>
      {/* mobile navigation */}
      {/* disable Colorzilla chrome extension to avoid console error */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.95 }}
        transition={{ duration: 0.5 }}
        className={`${
          mobileNav ? "absolute min-h-screen z-10 w-full bg-black" : "hidden"
        }`}
        onClick={() => setMobileNav(false)}
      >
        <div className="min-h-screen flex flex-col justify-evenly items-center">
          {pages.map((page, i) => (
            <p className="px-5 mx-5 text-3xl cursor-pointer opacity-70 hover:opacity-100 hover:text-4xl transition-all duration-200 flex justify-center items-center" key={i}>
              {page}
            </p>
          ))}
        </div>
      </motion.div>
      {/* desktop navigation */}
      <div className="p-16 hidden lg:flex">
        {pages.map((page, i) => (
          <p className="px-5 mx-5 text-3xl cursor-pointer opacity-70 hover:opacity-100 hover:text-4xl transition-all duration-200 flex justify-center items-center h-16" key={i}>
            {page}
          </p>
        ))}
      </div>
    </>
  );
}
