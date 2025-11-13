"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Blogs = () => {
  const blogPosts = [
    {
      img: "/blog_1.png",
      title: "How to Improve UX Design",
      desc: "Learn the key principles of user experience design for better interfaces.",
      date: "Nov 10, 2025",
      price: "Pricing",
    },
    {
      img: "/blog_2.jpg",
      title: "Boost Your Website Performance",
      desc: "Discover techniques to make your website load faster and perform better.",
      date: "Nov 08, 2025",
      price: "Pricing",
    },
    {
      img: "/blog_3.png",
      title: "Top Marketing Strategies",
      desc: "Effective marketing strategies to grow your business in 2025.",
      date: "Nov 05, 2025",
      price: "Pricing",
    },
  ];

  return (
    <section className="bg-[#081738] w-full py-20 overflow-x-hidden">
      <div className="mycontainer2 flex flex-col gap-10">
        {/* Header */}
        <div className="w-full flex flex-col md:flex-row items-start justify-between">
          <motion.h1
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="text-white text-3xl font-bold"
          >
            Latest Blogs & News
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: false, amount: 0.2 }}
            className="mt-4 md:mt-0"
          >
            <Link
              href="/"
              className="text-[#2673f2] hover:text-[#1447e6] md:text-sm rounded-lg text-lg flex items-center gap-2"
            >
              View All
            </Link>
          </motion.div>
        </div>

        {/* Blog Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
          className="w-full flex flex-col md:flex-row gap-6"
        >
          {blogPosts.map((blog, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 60 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full md:w-1/3 rounded-lg overflow-hidden shadow-lg group cursor-pointer bg-[#0d1e4b]"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute top-4 left-4 bg-[#2673f2] text-white px-3 py-1 rounded-md text-sm font-semibold">
                  {blog.price}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-white font-semibold text-xl mb-2">
                  {blog.title}
                </h3>
                <p className="text-[#b3b7c1] line-clamp-2 mb-3">{blog.desc}</p>
                <p className="text-gray-400 text-sm">{blog.date}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Blogs;
