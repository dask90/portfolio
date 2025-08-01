"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HomePage() {
  return (
    <section className="relative w-full h-screen flex flex-col justify-center overflow-hidden">
      {/* Background image layer */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 bg-[url('/image/hero1.jpg')] bg-cover bg-center bg-no-repeat z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Text content */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-20 px-6 md:px-12 max-w-3xl text-white"
      >
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold drop-shadow-lg text-left">
          Hi, I&apos;m David
        </h1>

        <p className="text-xl mt-4 text-gray-100 dark:text-gray-300 drop-shadow text-left">
          Frontend Developer & Designer
        </p>

        {/* Buttons */}
        <div className="mt-8 flex gap-4 flex-wrap">
          <Link
            href="/about"
            className="bg-amber-300 text-black px-6 py-3 rounded-full font-semibold hover:bg-amber-400 transition"
          >
            See More
          </Link>

          <Link
            href="/contact"
            className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
          >
            Contact
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
