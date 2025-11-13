"use client";
import Link from "next/link";
import React from "react";
import { FaCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const Servicessection = () => {
  const services = [
    {
      img: "/ux-design-.svg",
      title: "UX & Product Design",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      img: "/perfomance.svg",
      title: "Performance Optimization",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      img: "/ux-design-1.svg",
      title: "UX & Product Design",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-[#000f30] py-20 w-full flex flex-col items-center overflow-x-hidden">
      {/* Section Heading */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="max-w-2xl text-center mb-16 px-4"
      >
        <div className="flex items-center justify-center gap-2 mb-3">
          <FaCircle className="text-green-400 text-xs" />
          <p className="text-gray-400 text-sm tracking-wide">our services</p>
        </div>
        <h2 className="text-3xl md:text-4xl text-white font-bold leading-snug">
          Services specifically designed to meet your business needs
        </h2>
      </motion.div>

      {/* Services Cards */}
      <div className="mycontainer2 flex flex-col md:flex-row items-stretch justify-between gap-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="flex flex-col text-center items-center bg-[#081738] p-10 gap-5 rounded-lg hover:scale-[1.02] transition-transform duration-300"
          >
            <img src={service.img} alt={service.title} className="w-10 h-10" />
            <h3 className="text-2xl text-white font-bold">{service.title}</h3>
            <p className="text-[16px] text-[#b3b7c1] leading-relaxed">
              {service.desc}
            </p>
            <Link
              href="/"
              className="text-[#2f73f2] hover:text-[#1447e6] font-semibold text-lg transition-colors"
            >
              Get Started
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Servicessection