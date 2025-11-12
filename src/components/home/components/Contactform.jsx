"use client";
import React from "react";
import { FaCircle } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

const Contactform = () => {
  // Animation Variants
  const leftVariant = {
    hidden: { opacity: 0, x: 100 }, // move from center to left outward
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const rightVariant = {
    hidden: { opacity: 0, x: -100 }, // move from center to right outward
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="bg-[#000f30] w-full py-20 overflow-hidden">
      <div className="mycontainer2 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
        {/* Left Side: Text */}
        <motion.div
          className="lg:w-1/2 w-full flex flex-col gap-1"
          variants={leftVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="flex items-center gap-1">
            <FaCircle className="text-[#3cd278] h-3 w-3" />
            <p className="text-[#b3b7c1] text-sm">build everything</p>
          </div>

          <h2 className="text-white mt-7 text-[36px] font-bold leading-snug">
            Let’s discuss about your project and take it the next level.
          </h2>
          <div className="flex mt-15 items-center">
            <div className="w-1/2 flex flex-col">
              <span className="text-[#b3b7c1] text-[16px]">Phone</span>
              <p className="text-[16px] text-white">+92 328 4468 247</p>
            </div>
            <div className="w-1/2 flex flex-col">
              <span className="text-[#b3b7c1] text-[16px]">Email</span>
              <p className="text-[16px] text-white">info.abdullah57@gmail.com</p>
            </div>
          </div>
          <span className="text-[#b3b7c1] mt-10 text-[16px]">Location</span>
          <p className="text-[16px] text-white">
            Mark Avenue, Dalls Road, New York
          </p>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div
          className="lg:w-1/2 w-full bg-[#081738] rounded-lg p-10 flex flex-col gap-5"
          variants={rightVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <h1 className="text-white text-[30px] font-bold">Get in touch</h1>

          <div className="flex flex-col md:flex-row gap-3">
            <input
              type="text"
              placeholder="First Name"
              className="flex-1 rounded-lg px-3 py-3 border border-[#668199] text-[#adb3b9]"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="flex-1 rounded-lg px-3 py-3 border border-[#668199] text-[#adb3b9]"
            />
          </div>

          <input
            type="email"
            placeholder="Enter your email"
            className="rounded-lg px-3 py-3 border border-[#668199] text-[#adb3b9] w-full"
          />
          <input
            type="text"
            placeholder="Country"
            className="rounded-lg px-3 py-3 border border-[#668199] text-[#adb3b9] w-full"
          />
          <textarea
            placeholder="Let us know more about your project"
            className="rounded-lg px-3 py-3 border border-[#668199] text-[#adb3b9] w-full resize-none"
            rows={7}
          ></textarea>

          <div className="flex items-center gap-2">
            <input type="checkbox" className="h-5 w-5" />
            <p className="text-[#b3b7c1] text-sm">
              I agree to the{" "}
              <span className="text-[#3cd278]">Terms & Conditions</span>
            </p>
          </div>

          <Link
            href="/"
            className="bg-[#2673f2] hover:bg-[#1447e6] text-white font-semibold w-full px-5 py-3 md:text-sm rounded-lg text-lg text-center"
          >
            Submit Inquiry
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Contactform;
