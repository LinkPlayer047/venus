import Link from 'next/link';
import React from 'react';
import { ImFacebook2 } from "react-icons/im";
import { FaTwitterSquare } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";

const Footer = () => {
  return (
    <footer className="bg-[#081738] border-t border-t-[#152f50] text-white w-full">
      {/* Top Section */}
      <div className="mycontainer2 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 py-16">
        {/* Left Column */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-5 lg:w-1/3 w-full">
          <img src="/logo-white.svg" alt="Logo" className="h-10" />
          <h1 className="text-[40px] font-bold">Ready to get started?</h1>
          <Link
            href="/"
            className="bg-[#2673f2] hover:bg-[#1447e6] px-5 py-2 md:text-sm rounded-lg text-lg"
          >
            Get Started
          </Link>
        </div>

        {/* Middle Column */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left border-t lg:border-t-0 lg:border-l border-t-[#152f50] lg:border-l-[#152f50] py-10 lg:py-0 px-0 lg:px-10 w-full lg:w-1/3 gap-3">
          <span className="text-[18px] font-bold">Support</span>
          <p className="text-[16px] font-semibold pt-3">Phone</p>
          <Link
            href="/"
            className="text-gray-500 lg:text-[24px] text-[18px] font-semibold hover:text-white"
          >
            +92 328 4468 247
          </Link>
          <p className="text-[16px] font-semibold pt-3">Email</p>
          <Link
            href="/"
            className="text-gray-500 lg:text-[24px] text-[18px] font-semibold hover:text-white"
          >
            info.abdullah57@gmail.com
          </Link>

          {/* Social Icons */}
          <div className="flex items-center gap-3 pt-5">
            <Link href="/" className="text-gray-500 hover:text-[#2673f2]">
              <ImFacebook2 className="h-5 w-5" />
            </Link>
            <Link href="/" className="text-gray-500 hover:text-[#2673f2]">
              <FaTwitterSquare className="h-6 w-6" />
            </Link>
            <Link href="/" className="text-gray-500 hover:text-[#2673f2]">
              <ImLinkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left border-t lg:border-t-0 lg:border-l border-t-[#152f50] lg:border-l-[#152f50] py-10 lg:py-0 px-0 lg:px-10 w-full lg:w-1/3 gap-3">
          <span className="text-[24px] font-bold">Subscribe newsletter</span>
          <p className="text-gray-500 mt-2">
            To be updated with all the latest trends and product
          </p>
          <input
            type="email"
            placeholder="Enter your email"
            className="mt-5 bg-[#102d47] rounded-lg px-3 py-3 w-full text-white placeholder-gray-400"
          />
          <Link
            href="/"
            className="bg-[#2673f2] hover:bg-[#1447e6] px-5 mt-3 py-2 md:text-sm rounded-lg text-lg text-center"
          >
            Subscribe
          </Link>
        </div>
      </div>

      {/* Bottom Navigation & Copyright */}
      <div className="flex flex-col md:flex-row items-center justify-between w-[95%] mx-auto border-t border-t-[#152f50] py-5 gap-3">
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-5">
          <Link href="/" className="text-gray-500 hover:text-[#2673f2] text-sm md:text-md">
            Home
          </Link>
          <Link href="/" className="text-gray-500 hover:text-[#2673f2] text-sm md:text-md">
            About
          </Link>
          <Link href="/" className="text-gray-500 hover:text-[#2673f2] text-sm md:text-md">
            Services
          </Link>
          <Link href="/" className="text-gray-500 hover:text-[#2673f2] text-sm md:text-md">
            Portfolio
          </Link>
          <Link href="/" className="text-gray-500 hover:text-[#2673f2] text-sm md:text-md">
            Blogs
          </Link>
          <Link href="/" className="text-gray-500 hover:text-[#2673f2] text-sm md:text-md">
            Contact
          </Link>
        </div>
        <p className="text-gray-500 text-sm md:text-md mt-3 md:mt-0">
          © 2025 Abdullah. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
