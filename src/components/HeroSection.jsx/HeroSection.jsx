"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative bg-white p-6 sm:p-10 md:p-20">
      {/* Gradient overlay only on top */}
      <div className="absolute top-0 left-0 w-full h-30 sm:h-80 md:h-100 bg-gradient-to-b from-blue-600 via-blue-600/40 to-transparent" />

      {/* Content */}
      <div className="relative w-full mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-16 gap-8 md:gap-12 max-w-9xl">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="flex-1 mt-20 md:mt-35 "
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-snug text-gray-900 max-w-xl md:max-w-2xl">
            Driving Growth through <span className="text-blue-600">Mobile</span>{" "}
            <span className="text-blue-600">Performance Marketing</span>
          </h1>

          <p className="mt-6 sm:mt-8 text-gray-600 text-base sm:text-lg md:text-xl max-w-md md:max-w-2xl tracking-wide">
            Helping brands scale apps & publishers maximize traffic with
            AI-powered performance marketing solutions.
          </p>

          <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-10 sm:px-16 py-3 sm:py-4 bg-blue-600 text-white text-lg sm:text-xl font-normal rounded-lg shadow-lg hover:bg-blue-700 transition"
            >
              For advertisers
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-10 sm:px-16 py-3 sm:py-4 border border-gray-400 text-lg sm:text-xl font-normal rounded-lg hover:bg-gray-100 transition"
            >
              For Publishers
            </motion.button>
          </div>
        </motion.div>

        {/* Right Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex-1 flex justify-center mt-8 md:mt-0"
        >
          <Image
            src="/images/home/hero.png"
            alt="Mobile Performance Marketing"
            width={600} // smaller on mobile
            height={500} // smaller on mobile
            className="drop-shadow-2xl w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-[950px]"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
