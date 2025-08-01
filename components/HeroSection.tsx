"use client";

import { motion } from "framer-motion";

type HeroSectionProps = {
  title: string;
  backgroundImage: string;
};

export default function HeroSection({
  title,
  backgroundImage,
}: HeroSectionProps) {
  return (
    <section className="relative w-full min-h-[50vh] flex items-center justify-start overflow-hidden px-6 md:px-12">
      {/* Background image layer */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Title + underline */}
      <div className="relative z-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-amber-300 text-left drop-shadow-lg"
        >
          {title}
        </motion.h1>

        {/* Animated underline */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
          className="h-1 bg-amber-300 mt-2 rounded"
        />
      </div>
    </section>
  );
}
