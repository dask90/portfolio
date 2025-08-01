"use client";

import HeroSection from "@/components/HeroSection";
//import { motion } from "framer-motion";
import Image from "next/image";

export default function ContactPage() {
  return (
    <>
      <HeroSection title="About Me" backgroundImage="/image/allhero.jpg" />

      {/* Contact Info Section */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-3 text-black">
          {/* Email */}
          <div className="flex flex-col items-start p-6 border-l-4 border-amber-300 bg-white rounded-r-lg shadow hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-4">
              <i className="fa-solid fa-envelope text-amber-300 text-xl" />
              <h4 className="text-lg font-semibold">Mail</h4>
            </div>
            <p>dasokwa90@gmail.com</p>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-start p-6 border-l-4 border-amber-300 bg-white rounded-r-lg shadow hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-4">
              <i className="fa-solid fa-phone text-amber-500 text-xl" />
              <h4 className="text-lg font-semibold">Contact</h4>
            </div>
            <p>+233 25 656 5609</p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="bg-gray-100 py-10 px-6 text-black">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12">
          {/* Form */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl font-bold text-amber-300 mb-8">
              Send me a message
            </h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-1">Full Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-300"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-300"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-1">Subject</label>
                <input
                  type="text"
                  placeholder="Subject"
                  className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-300"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+233 XX XXX XXXX"
                  className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-300"
                />
              </div>

              <div className="md:col-span-2 flex flex-col">
                <label className="text-sm font-semibold mb-1">
                  Your Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Type your message here..."
                  className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-300"
                />
              </div>

              <div className="md:col-span-2 w-full">
                <button
                  type="submit"
                  className="bg-amber-300 text-white px-6 py-2 rounded-md hover:bg-amber-400 transition"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <Image
              src="/image/contactpg.jpg"
              alt="Contact Illustration"
              width={600}
              height={600}
              className="rounded-lg object-cover w-full h-[450px]"
            />
          </div>
        </div>
      </section>
    </>
  );
}
