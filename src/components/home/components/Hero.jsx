"use client";

import Link from "next/link";
import React from "react";
import { FaCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="bg-[#000f30] flex items-center justify-between">
      <div className="mycontainer2 flex flex-col md:flex-row gap-10 items-center py-40">
        
        {/* Left side with animation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:w-1/2 w-full flex flex-col"
        >
          <div className="flex items-center gap-1">
            <FaCircle className="text-[#3cd278] h-3" />
            <p className="text-[#b3b7c1] text-sm">build everything</p>
          </div>
          <h1 className="text-white lg:text-[48px] text-[36px] font-bold">
            Unveiling My Professional Odyssey: Portfolio Highlights
          </h1>
          <p className="text-[#b3b7c1] text-[20px] font-semibold">
            A brief introduction about myself and my professional objectives.
          </p>
          <div className="flex mt-5">
            <Link
              href="/"
              className="bg-[#2673f2] text-white font-semibold hover:bg-[#1447e6] px-8 py-3 md:text-sm rounded-md text-lg"
            >
              Get Started
            </Link>
          </div>
        </motion.div>

        {/* Right side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="lg:w-1/2 w-full flex flex-col"
        >
          <img src="/hero-image.png" alt="Hero" className="rounded-2xl" />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
