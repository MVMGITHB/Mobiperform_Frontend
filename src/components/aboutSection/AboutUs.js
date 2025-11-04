"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutUs() {
  // animation variants for text appearing one by one (wave-like)
  const textWave = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-4 md:px-10 lg:px-20 py-16 bg-white overflow-hidden">
      {/* Left Image */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0"
      >
        <img
          src="/aboutbanner.webp"
          alt="About illustration"
          
          className="h-130 object-contain"
        />
      </motion.div>

      {/* Right Text Content */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="w-full md:w-1/2 text-center  md:px-12 md:text-left"
      >
        <motion.h2
          variants={textWave}
          initial="hidden"
          whileInView="visible"
          custom={0}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-sky-700 mb-6"
        >
          About Us
        </motion.h2>

        <motion.p
          variants={textWave}
          initial="hidden"
          whileInView="visible"
          custom={1}
          viewport={{ once: true }}
          className="text-gray-600 text-base md:text-lg leading-relaxed mb-6"
        >
         At Mobiperform, we believe success isn’t just about reach, it’s about results. We deliver measurable performance through transparent, efficient, and scalable solutions. Whether you’re an advertiser aiming for quality user acquisition or a publisher optimizing traffic monetization, Mobiperform drives real growth at every step with cutting edge technology.
        </motion.p>

        <motion.div
          variants={textWave}
          initial="hidden"
          whileInView="visible"
          custom={2}
          viewport={{ once: true }}
          className="mb-6"
        >
          <h3 className="text-2xl font-semibold text-sky-700 mb-2">Our Mission</h3>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
          To build a win-win system  where advertisers achieve higher ROAS through optimized user acquisition, and publishers maximize revenue with transparent, reliable monetization.

          </p>
        </motion.div>

        <motion.div
          variants={textWave}
          initial="hidden"
          whileInView="visible"
          custom={3}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-sky-700 mb-2"> Our Vision</h3>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
           To create lasting value for every stakeholder — clients, partners, and teams.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
