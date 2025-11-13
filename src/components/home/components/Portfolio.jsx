"use client";

import React from "react";
import dynamic from "next/dynamic";
import { FaCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// ✅ Prevent SSR crash
const Slider = dynamic(() => import("react-slick"), { ssr: false });

const Portfolio = () => {
  // ✅ Slick settings (mobile → tablet → desktop)
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 600,
    cssEase: "ease-in-out",
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 480, // mobile <768px
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024, // tablet <1024px
        settings: {
          slidesToShow: 3,
        },
      },
      // no need to define for desktop, base 5 will apply
    ],
  };

  const cards = [
    {
      img: "/cozycasa.png",
      title: "InnovateX Venture",
      subtitle: "Creative Agency",
      shift: "-translate-y-6",
    },
    {
      img: "/panda-logo.png",
      title: "Panda Logo",
      subtitle: "Brand Identity",
      shift: "translate-y-6",
    },
    {
      img: "/roket-squred.png",
      title: "Appix Strategy",
      subtitle: "Marketing Design",
      shift: "-translate-y-6",
    },
    {
      img: "/humans.png",
      title: "Everyday Humans",
      subtitle: "UI/UX Design",
      shift: "translate-y-6",
    },
    {
      img: "/mars.png",
      title: "Nebula Holdings",
      subtitle: "Corporate Design",
      shift: "-translate-y-6",
    },
    {
      img: "/panda-logo.png",
      title: "Summit Partner",
      subtitle: "Business Growth",
      shift: "translate-y-6",
    },
  ];

  return (
    <section className="bg-[#081738] w-full py-30 overflow-hidden">
      {/* Heading */}
      <div className="max-w-2xl text-center px-4 mb-16 mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-2 mb-3"
        >
          <FaCircle className="text-green-400 text-xs" />
          <p className="text-gray-400 text-sm tracking-wide">portfolio</p>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl text-white font-bold leading-snug"
        >
          Explore my portfolio showcase
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="pt-5 text-[#b3b7c1]"
        >
          Dive into a curated collection of my finest work, showcasing expertise
          across various industries.
        </motion.p>
      </div>

      {/* Slider */}
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8">
        <Slider {...settings}>
          {cards.map((c, i) => (
            <div key={i} className="px-3">
              <div
                className={`text-start hover:shadow-lg transition-transform duration-500 ${c.shift}`}
              >
                <img
                  src={c.img}
                  alt={c.title}
                  className="w-full object-cover mb-4 rounded-md"
                />
                <h4 className="text-xl text-white font-semibold mb-2">
                  {c.title}
                </h4>
                <p className="text-[#b3b7c1] text-sm">{c.subtitle}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Portfolio;
