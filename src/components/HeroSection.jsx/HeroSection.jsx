"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-blue-600 to-white">
      <div className="w-full mx-auto flex flex-col md:flex-row items-center justify-between px-6 lg:px-16 py-20 gap-12 max-w-8xl">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-gray-900">
            Driving Growth through{" "}
            <span className="text-blue-600">Mobile Performance Marketing</span>
          </h1>
          <p className="mt-8 text-gray-600 text-xl md:text-2xl max-w-2xl leading-relaxed">
            Helping brands scale apps & publishers maximize traffic with
            AI-powered performance marketing solutions.
          </p>

          <div className="mt-10 flex gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition"
            >
              For Advertisers
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 border border-gray-400 text-lg font-semibold rounded-lg hover:bg-gray-100 transition"
            >
              For Publishers
            </motion.button>
          </div>
        </motion.div>

        {/* Right Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex-1 flex justify-center"
        >
          <Image
            src="/images/home/hero.png" // replace with your image
            alt="Mobile Performance Marketing"
            width={550}
            height={550}
            className="drop-shadow-2xl"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
