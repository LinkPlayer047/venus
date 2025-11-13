import React from "react";

const Form = () => {
  return (
    <section className="bg-[#081738] px-4 py-25 border-t border-t-[#152f50]">
      <div className="mycontainer2 mx-auto flex flex-col md:flex-row gap-12 items-start">
        
        {/* Form - Left Side */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get Our Consultation
          </h2>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div className="flex flex-col">
              <label className="text-white font-medium mb-2">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="bg-[#081738] border border-[#152f50] rounded-md px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 w-full"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="text-white font-medium mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-[#081738] border border-[#152f50] rounded-md px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 w-full"
              />
            </div>

            {/* Contact Number */}
            <div className="flex flex-col">
              <label className="text-white font-medium mb-2">Contact Number</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="bg-[#081738] border border-[#152f50] rounded-md px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 w-full"
              />
            </div>

            {/* Date */}
            <div className="flex flex-col">
              <label className="text-white font-medium mb-2">Date</label>
              <input
                type="date"
                className="bg-[#081738] border border-[#152f50] rounded-md px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 w-full"
              />
            </div>

            {/* Time */}
            <div className="flex flex-col">
              <label className="text-white font-medium mb-2">Time</label>
              <input
                type="time"
                className="bg-[#081738] border border-[#152f50] rounded-md px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 w-full"
              />
            </div>

            {/* Service */}
            <div className="flex flex-col">
              <label className="text-white font-medium mb-2">Select Service</label>
              <select
                className="bg-[#081738] border border-[#152f50] rounded-md px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 w-full"
              >
                <option value="">Select Service</option>
                <option value="consultation">Consultation</option>
                <option value="design">Design</option>
                <option value="development">Development</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Submit Button - full width */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md px-6 py-3 w-full transition-colors mt-2"
              >
                Book Appointment
              </button>
            </div>
          </form>
        </div>

        {/* Image - Right Side */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/contact.jpg"
            alt="Appointment"
            className="rounded-lg w-full max-w-md object-cover shadow-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default Form;
