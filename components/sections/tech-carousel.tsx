"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiAngular,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiJavascript,
  SiTypescript,
  SiAmazonaws
} from "react-icons/si";

const technologies = [
  { icon: SiReact, name: "React", color: "#61DAFB" },
  { icon: SiAngular, name: "Angular", color: "#DD0031" },
  { icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1" },
  { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
  { icon: SiMysql, name: "MySQL", color: "#4479A1" },
  { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { icon: SiAmazonaws, name: "AWS", color: "#FF9900" },
];

export function TechCarousel() {
  return (
    <section className="py-16 bg-white dark:bg-gray-950 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mb-12"
        >
          Tecnologias que utilizo
        </motion.h3>
      </div>

      <div className="relative">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white dark:from-gray-950 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white dark:from-gray-950 to-transparent z-10" />

        {/* First row - Left to Right */}
        <motion.div
          className="flex gap-12 mb-8"
          animate={{
            x: [0, -1920],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {[...technologies, ...technologies, ...technologies].map((tech, index) => (
            <div
              key={`tech-1-${index}`}
              className="flex-shrink-0 flex flex-col items-center justify-center gap-4 w-32"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity" />
                <div className="relative bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
                  <tech.icon
                    className="w-16 h-16 transition-colors"
                    style={{ color: tech.color }}
                  />
                </div>
              </div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Second row - Right to Left */}
        <motion.div
          className="flex gap-12"
          animate={{
            x: [-1920, 0],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {[...technologies, ...technologies, ...technologies].map((tech, index) => (
            <div
              key={`tech-2-${index}`}
              className="flex-shrink-0 flex flex-col items-center justify-center gap-4 w-32"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity" />
                <div className="relative bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
                  <tech.icon
                    className="w-16 h-16 transition-colors"
                    style={{ color: tech.color }}
                  />
                </div>
              </div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
