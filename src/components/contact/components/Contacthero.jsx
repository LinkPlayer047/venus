import React from "react";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const Contacthero = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center bg-[#081738] px-4 py-20 sm:py-24 md:py-28 lg:py-32">
      {/* Heading */}
      <h1 className="text-white font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
        Contact Us
      </h1>

      {/* Description */}
      <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl">
        Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive understanding of the latest trends.
      </p>

      {/* Breadcrumb */}
      <div className="flex items-center justify-center gap-2 mt-6 text-sm sm:text-base md:text-lg">
        <Link
          href="/"
          className="flex items-center gap-1 text-gray-400 hover:text-white hover:underline transition-colors font-medium"
        >
          <span>Home</span>
          <IoIosArrowForward
            className="text-white relative top-[1px]" // 🔥 icon alignment fix
            size={16}
          />
        </Link>
        <span className="text-white font-semibold">Contact</span>
      </div>
    </section>
  )
}

export default Contacthero