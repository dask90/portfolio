"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";

export default function AboutPage() {
  const bioRef = useRef(null);
  const isInView = useInView(bioRef, { once: true, margin: "-100px" });

  return (
    <>
      <HeroSection title="About Me" backgroundImage="/image/allhero.jpg" />

      {/* Bio Section */}
      <section
        ref={bioRef}
        className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row gap-10 items-center"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-[30%] h-[300px] md:h-[400px] relative rounded-lg overflow-hidden shadow-lg"
        >
          <Image src="/image/pp.jpg" alt="Dave" fill className="object-cover" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="w-full md:w-[70%]"
        >
          <h2 className="text-3xl font-bold mb-4">Who I Am</h2>
          <p className="text-lg leading-relaxed text-black  mb-4">
            I&apos;m a frontend developer with a passion for creating intuitive,
            responsive, and accessible user experiences. I love crafting clean
            interfaces and writing well-structured code that brings designs to
            life.
          </p>
          <p className="text-lg leading-relaxed text-black">
            My focus is on modern web technologies like React, TypeScript, and
            Tailwind CSS. Im always exploring new tools and frameworks that
            improve both developer and user experience.
          </p>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">My Skills</h2>
        <ul className="flex flex-wrap justify-center gap-4">
          {["HTML", "CSS", "JavaScript", "TypeScript"].map((skill) => (
            <li
              key={skill}
              className="px-6 py-2 bg-amber-300 text-black rounded-full font-medium shadow hover:bg-amber-400 transition"
            >
              {skill}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
