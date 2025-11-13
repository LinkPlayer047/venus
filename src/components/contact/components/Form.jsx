"use client";
import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    service: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", date: "", time: "", service: "" });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Error sending message.");
    }
  };

  return (
    <section className="bg-[#081738] px-4 py-25 border-t border-t-[#152f50]">
      <div className="mycontainer2 mx-auto flex flex-col md:flex-row gap-12 items-start">
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get Our Consultation</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label className="text-white font-medium mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="bg-[#081738] border border-[#152f50] rounded-md px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 w-full"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-white font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="bg-[#081738] border border-[#152f50] rounded-md px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 w-full"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-white font-medium mb-2">Contact Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="bg-[#081738] border border-[#152f50] rounded-md px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 w-full"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-white font-medium mb-2">Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="bg-[#081738] border border-[#152f50] rounded-md px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 w-full"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-white font-medium mb-2">Time</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="bg-[#081738] border border-[#152f50] rounded-md px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 w-full"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-white font-medium mb-2">Select Service</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="bg-[#081738] border border-[#152f50] rounded-md px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 w-full"
              >
                <option value="">Select Service</option>
                <option value="consultation">Consultation</option>
                <option value="design">Design</option>
                <option value="development">Development</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md px-6 py-3 w-full transition-colors mt-2"
              >
                Book Appointment
              </button>
              {status && <p className="text-white mt-2">{status}</p>}
            </div>
          </form>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img src="/contact.jpg" alt="Appointment" className="rounded-lg w-full max-w-md object-cover shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default Form;
