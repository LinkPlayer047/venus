"use client";

import React from "react";
import { FaCircle } from "react-icons/fa";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Portfolio = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    speed: 500,
    cssEase: "ease-in-out",
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="bg-[#081738] w-full py-20 flex flex-col items-center overflow-hidden">
      {/* Heading Section */}
      <div className="max-w-2xl text-center px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
          className="flex items-center justify-center gap-2 mb-3"
        >
          <FaCircle className="text-green-400 text-xs" />
          <p className="text-gray-400 text-sm tracking-wide">portfolio</p>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: false, amount: 0.2 }}
          className="text-3xl md:text-4xl text-white font-bold leading-snug"
        >
          Explore my portfolio showcase
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <p className="pt-5 text-[#b3b7c1]">
            Dive into a curated collection of my finest work,
          </p>
          <p className="text-[#b3b7c1]">
            showcasing expertise across various industries.
          </p>
        </motion.div>
      </div>

      {/* Slider Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: false, amount: 0.2 }}
        className="mycontainer px-4 w-full"
      >
        <Slider {...settings}>
          {/* Card 1 */}
          <div className="px-2">
            <div className="overflow-hidden p-6 text-start shadow-md hover:shadow-lg transition-transform duration-500 -translate-y-6">
              <img
                src="/cozycasa.png"
                alt="InnovateX Venture"
                className="w-full object-cover mb-4 rounded-md"
              />
              <h4 className="text-xl text-white font-semibold mb-2">
                InnovateX Venture
              </h4>
              <p className="text-[#b3b7c1]">Designation</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="px-2">
            <div className="overflow-hidden p-6 text-start shadow-md hover:shadow-lg transition-transform duration-500 translate-y-6">
              <img
                src="/panda-logo.png"
                alt="Panda Logo"
                className="w-full object-cover mb-4 rounded-md"
              />
              <h4 className="text-xl text-white font-semibold mb-2">
                Panda Logo
              </h4>
              <p className="text-[#b3b7c1]">Designation</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="px-2">
            <div className="overflow-hidden p-6 text-start shadow-md hover:shadow-lg transition-transform duration-500 -translate-y-6">
              <img
                src="/roket-squred.png"
                alt="Appix Strategy"
                className="w-full object-cover mb-4 rounded-md"
              />
              <h4 className="text-xl text-white font-semibold mb-2">
                Appix Strategy
              </h4>
              <p className="text-[#b3b7c1]">Designation</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="px-2">
            <div className="overflow-hidden p-6 text-start shadow-md hover:shadow-lg transition-transform duration-500 translate-y-6">
              <img
                src="/humans.png"
                alt="Everyday Humans"
                className="w-full object-cover mb-4 rounded-md"
              />
              <h4 className="text-xl text-white font-semibold mb-2">
                Everyday Humans
              </h4>
              <p className="text-[#b3b7c1]">Designation</p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="px-2">
            <div className="overflow-hidden p-6 text-start shadow-md hover:shadow-lg transition-transform duration-500 -translate-y-6">
              <img
                src="/mars.png"
                alt="Nebula Holdings"
                className="w-full object-cover mb-4 rounded-md"
              />
              <h4 className="text-xl text-white font-semibold mb-2">
                Nebula Holdings
              </h4>
              <p className="text-[#b3b7c1]">Designation</p>
            </div>
          </div>

          {/* Card 6 */}
          <div className="px-2">
            <div className="overflow-hidden p-6 text-start shadow-md hover:shadow-lg transition-transform duration-500 translate-y-6">
              <img
                src="/panda-logo.png"
                alt="Summit Partner"
                className="w-full object-cover mb-4 rounded-md"
              />
              <h4 className="text-xl text-white font-semibold mb-2">
                Summit Partner
              </h4>
              <p className="text-[#b3b7c1]">Designation</p>
            </div>
          </div>
        </Slider>
      </motion.div>
    </section>
  );
};

export default Portfolio;
