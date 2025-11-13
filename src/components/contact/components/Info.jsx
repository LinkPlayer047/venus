import Link from "next/link";
import React from "react";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaArrowRight, FaUserAlt } from "react-icons/fa";

const Info = () => {
  return (
    <section className="bg-[#081738] px-4 py-10">
      <div className="mycontainer2 mx-auto flex flex-col gap-10">

        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Email Card */}
          <div className="flex-1 flex flex-col md:flex-row gap-4 items-start">
            <div className="flex-shrink-0 flex items-center justify-center rounded-full bg-[#0f295d] p-5">
              <MdMarkEmailUnread className="text-white text-3xl" />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-white font-bold text-lg md:text-xl">Email Us</span>
              <p className="text-gray-400 text-sm md:text-base">
                Please feel free to drop us a line. We will respond as soon as possible.
              </p>
              <Link
                href="/"
                className="flex items-center gap-1 text-[#2f73f2] hover:text-white hover:underline font-medium"
              >
                <span>Leave a message</span>
                <FaArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Careers Card */}
          <div className="flex-1 flex flex-col md:flex-row gap-4 items-start">
            <div className="flex-shrink-0 flex items-center justify-center rounded-full bg-[#0f295d] p-5">
              <FaUserAlt className="text-white text-3xl" />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-white font-bold text-lg md:text-xl">Careers</span>
              <p className="text-gray-400 text-sm md:text-base">
                Please feel free to drop us a line. We will respond as soon as possible.
              </p>
              <Link
                href="/"
                className="flex items-center gap-1 text-[#2f73f2] hover:text-white hover:underline font-medium"
              >
                <span>Send an Application</span>
                <FaArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="w-full h-64 md:h-96 rounded-md overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0869469517747!2d-122.41941548468173!3d37.77492977975978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085818c2d1b8a1b%3A0x8d2f0d45182b9e0b!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </section>
  );
};

export default Info;
