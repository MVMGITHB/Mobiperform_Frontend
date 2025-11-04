"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Libre_Baskerville } from "next/font/google";

// Load Libre Baskerville
const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function PublisherPart3() {
  return (
    <div className="relative overflow-hidden">
      {/* Divider Section - Full Width */}
      <div className="w-screen bg-blue-50 py-8 sm:py-10 lg:py-14 px-4">
        <h3 className="text-center text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-blue-600 leading-snug">
          Dedicated publisher account managers
        </h3>
        <p className="text-black text-base sm:text-xl md:text-2xl lg:text-3xl text-center font-medium sm:font-semibold max-w-2xl mx-auto mt-3 leading-relaxed">
          for campaign setup, delivery & ROI growth
        </p>
      </div>

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex justify-center mt-10 relative z-10"
      >
        <Image
          src="/images/publisher/publisherp3.webp"
          alt="Publisher illustration"
          width={600}
          height={450}
          className="w-full max-w-[420px] sm:max-w-[500px] lg:max-w-[620px] rounded-2xl object-cover"
          priority
        />
      </motion.div>

      {/* Main Headline */}
      {/* // chnages h1 to h2  */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className={`${libreBaskerville.className} relative text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center font-bold leading-snug text-blue-600 mt-10 z-10 px-4`}
      >
        Start <span className="italic text-black">Monetizing</span> Smarter with{" "}
        <span className="text-blue-700">Mobiperform</span>
      </motion.h2>

      {/* Button - Centered */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        className="mt-10 flex justify-center z-10 relative mb-20"
      >
        <a
          href="/register"
          className="inline-block bg-black text-white px-6 sm:px-10 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold shadow-lg hover:bg-gray-800 transition"
        >
          Register as Advertiser
        </a>
      </motion.div>

      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 mt-260">
        {/* // change h1 to h2   */}
        <h2 className="text-[3rem] sm:text-[8rem] md:text-[12rem] lg:text-[20rem] xl:text-[21rem] font-extrabold text-gray-200 opacity-50 select-none leading-none text-center">
          Monetize
        </h2>
      </div>
    </div>
  );
}

export default PublisherPart3;
