"use client";

import HeroSection from "@/components/HeroSection";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "MetalMart",
    description:
      "An e-commerce platform for building materials using Next.js and Tailwind CSS.",
    image: "/image/m1.jpg",
    github: "https://github.com/dask90/metalsmart",
    live: "https://metalsmarts.vercel.app/",
  },
  {
    title: "Portfolio",
    description:
      "My personal portfolio built with Next.js, showcasing my skills and projects.",
    image: "/image/pf.jpg",
    github: "https://github.com/dask90/portfolio",
    live: "https://portfolio-eh6yj6d33-dask90s-projects.vercel.app",
  },
  {
    title: "UI",
    description: "Built a nice web portal ui",
    image: "/image/ui.jpg",
    github: "",
    live: "",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <HeroSection title="Projects" backgroundImage="/image/allhero.jpg" />
      <section className="w-full px-4 sm:px-6 py-16 grid gap-20">
        {projects.map((project, index) => {
          const isEven = index % 2 === 1;

          const textMotion = {
            initial: { opacity: 0, x: isEven ? 80 : -80 },
            whileInView: { opacity: 1, x: 0 },
          };

          const imageMotion = {
            initial: { opacity: 0, x: isEven ? -80 : 80 },
            whileInView: { opacity: 1, x: 0 },
          };

          return (
            <div
              key={project.title}
              className={`flex flex-col ${
                isEven ? "md:flex-row-reverse" : "md:flex-row"
              } items-center gap-8 w-full ${
                index === 1 ? "bg-gray-50  py-12" : ""
              }`}
            >
              {/* Image */}
              <motion.div
                {...imageMotion}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="w-full md:w-[40%] relative rounded-lg overflow-hidden shadow-lg"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="rounded-lg object-contain w-full h-auto"
                />
              </motion.div>

              {/* Text */}
              <motion.div
                {...textMotion}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="w-full md:[60%] px-4"
              >
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-black mb-4">{project.description}</p>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-amber-300 text-black rounded-full hover:bg-amber-400 transition"
                  >
                    Live Demo
                  </a>
                </div>
              </motion.div>
            </div>
          );
        })}
      </section>
    </>
  );
}
