"use client";

import Link from 'next/link';
import { useState } from 'react';
import { MdOutlineSegment } from "react-icons/md";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <div className="bg-[#000f30] w-full py-5 fixed z-50 shadow-md">
        <div className="mycontainer2 flex items-center justify-between">
          
          {/* Logo */}
          <div>
            <img src="/logo-white.svg" alt="Logo" className="h-10" />
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex gap-10">
            <Link href="/" className="text-white hover:text-[#2673f2] text-lg">Home</Link>
            <Link href="/about" className="text-white hover:text-[#2673f2] text-lg">About</Link>
            <Link href="/services" className="text-white hover:text-[#2673f2] text-lg">Services</Link>
            <Link href="/" className="text-white hover:text-[#2673f2] text-lg">Portfolio</Link>
            <Link href="/" className="text-white hover:text-[#2673f2] text-lg">Blogs</Link>
            <Link href="/contact" className="text-white hover:text-[#2673f2] text-lg">Contact</Link>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex gap-3">
            <Link href="/" className="text-[#2673f2] hover:bg-[#155DFC] hover:text-white border border-[#2673f2] px-5 py-2 rounded-lg md:text-sm text-lg">Sign in</Link>
            <Link href="/" className="text-white bg-[#2673f2] hover:bg-[#1447e6] px-5 py-2 md:text-sm rounded-lg text-lg">Sign Up</Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="lg:hidden">
            <MdOutlineSegment
              className="text-white h-6 w-6 cursor-pointer"
              onClick={toggleMobileMenu}
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-[#000f30] z-50 transform transition-transform duration-300 ease-in-out
        ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {/* Close Icon */}
        <div className="flex justify-end p-5">
          <FaTimes
            className="text-white h-6 w-6 cursor-pointer"
            onClick={toggleMobileMenu}
          />
        </div>

        {/* Mobile Links */}
        <div className="flex flex-col items-center justify-center gap-8 mt-10">
          <Link href="/" onClick={handleLinkClick} className="text-white text-2xl hover:text-[#2673f2]">Home</Link>
          <Link href="/about" onClick={handleLinkClick} className="text-white text-2xl hover:text-[#2673f2]">About</Link>
          <Link href="/services" onClick={handleLinkClick} className="text-white text-2xl hover:text-[#2673f2]">Services</Link>
          <Link href="/" onClick={handleLinkClick} className="text-white text-2xl hover:text-[#2673f2]">Portfolio</Link>
          <Link href="/" onClick={handleLinkClick} className="text-white text-2xl hover:text-[#2673f2]">Blogs</Link>
          <Link href="/contact" onClick={handleLinkClick} className="text-white text-2xl hover:text-[#2673f2]">Contact</Link>
        </div>

        {/* Mobile Buttons */}
        <div className="flex flex-col items-center mt-10 gap-4">
          <Link href="/" onClick={handleLinkClick} className="text-[#2673f2] hover:bg-[#155DFC] hover:text-white border border-[#2673f2] px-8 py-2 rounded-lg text-lg w-3/4 text-center">Sign in</Link>
          <Link href="/" onClick={handleLinkClick} className="text-white bg-[#2673f2] hover:bg-[#1447e6] px-8 py-2 rounded-lg text-lg w-3/4 text-center">Sign Up</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
