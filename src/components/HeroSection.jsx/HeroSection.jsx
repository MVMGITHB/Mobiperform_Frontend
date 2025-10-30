"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative bg-white px-4 sm:px-8 md:px-12 lg:px-20 py-10 sm:py-16 md:py-0 mt-[-10px]">
      {/* Gradient overlay only on top */}
      <div className="absolute top-0 left-0 w-full h-32 sm:h-48 md:h-64 lg:h-56 bg-gradient-to-b from-blue-600 via-blue-600/40 to-transparent" />

      {/* Content Wrapper */}
      <div className="relative w-full max-w-[1500px] mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-14 lg:gap-20">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="flex-1 mt-8 sm:mt-10 md:mt-12 lg:mt-16 text-center md:text-left"
        >
          <h1 className="text-2xl sm:text-3xl md:text-5xl text-size lg:text-5xl font-bold leading-snug text-gray-900 max-w-2xl lg:max-w-3xl">
            Driving Growth <br />
            through <span className="text-blue-600">Mobile</span> <br />
            <span className="text-blue-600">Performance Marketing</span>
          </h1>

          <p className="mt-4 sm:mt-6 text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl max-w-md md:max-w-2xl tracking-wide">
            Helping brands scale apps & publishers maximize traffic with
            AI-powered performance marketing solutions.
          </p>

          {/* CTA Buttons */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center sm:items-start justify-center md:justify-start gap-4 sm:gap-6">
            <Link href={"/advertiser"}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 sm:px-8 md:px-12 lg:px-14 py-2 sm:py-3 md:py-4 bg-blue-600 text-white text-sm sm:text-base md:text-lg font-medium rounded-2xl shadow-[0_6px_12px_2px_rgba(0,0,0,0.25)] hover:bg-blue-700 transition"
              >
                For Advertisers
              </motion.button>
            </Link>
            <Link href={"/publisher"}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 sm:px-8 md:px-12 text-black lg:px-14 py-2 sm:py-3 md:py-4 border border-gray-400 text-sm sm:text-base md:text-lg font-medium rounded-lg hover:bg-gray-100 transition"
              >
                For Publishers
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Right Illustration */}
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
            width={700}
            height={600}
            className="drop-shadow-2xl w-full max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-2xl xl:max-w-[900px] object-contain"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
