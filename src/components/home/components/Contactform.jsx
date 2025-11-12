"use client";
import React from "react";
import { FaCircle } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

const ContactForm = () => {
  const leftVariant = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const rightVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="bg-[#000f30] w-full py-16 sm:py-20 overflow-x-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col md:flex-row gap-8 md:gap-12">
        {/* Left Column */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col gap-4"
          variants={leftVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="flex items-center gap-2">
            <FaCircle className="text-[#3cd278] h-3 w-3" />
            <p className="text-[#b3b7c1] text-sm sm:text-base">build everything</p>
          </div>

          <h2 className="text-white mt-2 text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
            Let’s discuss your project and take it to the next level.
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <div className="flex-1 flex flex-col gap-1">
              <span className="text-[#b3b7c1] text-sm sm:text-base">Phone</span>
              <p className="text-white text-sm sm:text-base">+92 328 4468 247</p>
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <span className="text-[#b3b7c1] text-sm sm:text-base">Email</span>
              <p className="text-white text-sm sm:text-base">info.abdullah57@gmail.com</p>
            </div>
          </div>

          <div className="mt-4">
            <span className="text-[#b3b7c1] text-sm sm:text-base">Location</span>
            <p className="text-white text-sm sm:text-base">Mark Avenue, Dalls Road, New York</p>
          </div>
        </motion.div>

        {/* Right Column - Form */}
        <motion.div
          className="w-full md:w-1/2 bg-[#081738] rounded-lg p-6 sm:p-8 md:p-10 flex flex-col gap-4"
          variants={rightVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <h1 className="text-white text-xl sm:text-2xl md:text-3xl font-bold">
            Get in touch
          </h1>

          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="First Name"
              className="flex-1 rounded-lg px-3 py-3 border border-[#668199] text-[#adb3b9] w-full"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="flex-1 rounded-lg px-3 py-3 border border-[#668199] text-[#adb3b9] w-full"
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
            rows={5}
          ></textarea>

          <div className="flex items-center gap-2">
            <input type="checkbox" className="h-5 w-5" />
            <p className="text-[#b3b7c1] text-sm sm:text-base">
              I agree to the <span className="text-[#3cd278]">Terms & Conditions</span>
            </p>
          </div>

          <Link
            href="/"
            className="bg-[#2673f2] hover:bg-[#1447e6] text-white font-semibold w-full px-5 py-3 text-center rounded-lg text-sm sm:text-base md:text-lg"
          >
            Submit Inquiry
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
