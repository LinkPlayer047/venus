"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaCircle } from "react-icons/fa";

const Aboutprogress = () => {
  const [cardsVisible, setCardsVisible] = useState(false);
  const [rightVisible, setRightVisible] = useState(false);
  const cardsRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === cardsRef.current && entry.isIntersecting) {
            setCardsVisible(true);
          }
          if (entry.target === rightRef.current && entry.isIntersecting) {
            setRightVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (cardsRef.current) observer.observe(cardsRef.current);
    if (rightRef.current) observer.observe(rightRef.current);

    return () => {
      if (cardsRef.current) observer.unobserve(cardsRef.current);
      if (rightRef.current) observer.unobserve(rightRef.current);
    };
  }, []);

  return (
    <section className="bg-[#000f30] w-full py-16 overflow-x-hidden">
      <div className="mycontainer2 mx-auto px-6 flex flex-col items-center space-y-20">
        {/* Top Stats Section */}
        <div
          ref={cardsRef}
          className={`flex flex-col md:flex-row items-center justify-center gap-10 w-full transition-all duration-700 ${
            cardsVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          <div className="w-full md:w-1/3 flex flex-col items-center text-center space-y-3">
            <img src="/star.svg" alt="" className="w-7 h-7" />
            <span className="text-4xl md:text-5xl text-white font-bold">4.86</span>
            <p className="text-gray-400 max-w-xs">
              Out of 5 stars from 3896 reviews on Google platform
            </p>
          </div>
          <div className="w-full md:w-1/3 flex flex-col items-center text-center space-y-3">
            <img src="/admin.svg" alt="" className="w-7 h-7" />
            <span className="text-4xl md:text-5xl text-white font-bold">364</span>
            <p className="text-gray-400 max-w-xs">
              Client testimonials received in the year 2021
            </p>
          </div>
          <div className="w-full md:w-1/3 flex flex-col items-center text-center space-y-3">
            <img src="/bag.svg" alt="" className="w-7 h-7" />
            <span className="text-4xl md:text-5xl text-white font-bold">45M+</span>
            <p className="text-gray-400 max-w-xs">
              Revenue generated through new projects & marketing
            </p>
          </div>
        </div>

        {/* Progress + Image Section */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-20 w-full">
          {/* Left Image */}
          <div className="flex justify-center md:justify-start w-full md:w-1/2">
            <img
              src="/progress-work.png"
              alt="Progress Work Illustration"
              className="w-full max-w-md h-auto"
              loading="lazy"
            />
          </div>

          {/* Right Content */}
          <div
            ref={rightRef}
            className={`flex flex-col gap-5 w-full md:w-1/2 transition-all duration-700 ${
              rightVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
            }`}
          >
            <div className="flex items-center gap-2">
              <FaCircle className="text-green-400 text-xs" />
              <p className="text-gray-400 text-sm tracking-wide">build everything</p>
            </div>

            <h2 className="text-3xl md:text-4xl text-white font-semibold leading-tight">
              Build amazing websites and landing pages with ease
            </h2>

            <p className="text-gray-400 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida.
            </p>

            {/* Progress Bars */}
            <div className="pt-10 space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-400">
                  <span>UX Research and Testing</span>
                  <span>95%</span>
                </div>
                <div className="relative h-1 w-full bg-slate-700 rounded-md overflow-hidden">
                  <div
                    className="absolute left-0 top-0 h-full bg-[#2f73f2] rounded-md transition-all duration-500 ease-in-out"
                    style={{ width: "95%" }}
                  ></div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-400">
                  <span>Product Management</span>
                  <span>84%</span>
                </div>
                <div className="relative h-1 w-full bg-slate-700 rounded-md overflow-hidden">
                  <div
                    className="absolute left-0 top-0 h-full bg-[#2f73f2] rounded-md transition-all duration-500 ease-in-out"
                    style={{ width: "84%" }}
                  ></div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-400">
                  <span>UI & Visual Design</span>
                  <span>90%</span>
                </div>
                <div className="relative h-1 w-full bg-slate-700 rounded-md overflow-hidden">
                  <div
                    className="absolute left-0 top-0 h-full bg-[#2f73f2] rounded-md transition-all duration-500 ease-in-out"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutprogress
