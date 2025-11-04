"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const texts = ["ROI", "Reach", "Power "];
  const [index, setIndex] = useState(0);

  // Auto-change text every 2 seconds (a bit slower for smoother swipe)
  useEffect(() => {
    // console.log("use Efffect cakled ")
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // console.log("index ", index, texts[index])

  return (
    <section className="relative bg-white px-4 sm:px-8 md:px-12 lg:px-20 py-10 sm:py-16 md:py-0 mt-[-10px]">
      {/* Gradient overlay only on top */}
      <div className="absolute top-0 left-0 w-full h-32 sm:h-48 md:h-64 lg:h-56 bg-gradient-to-b from-blue-600 via-blue-600/40 to-transparent" />

      <div className="relative w-full max-w-[1500px] mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-14 lg:gap-20">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="flex-1 mt-8 sm:mt-10 md:mt-12 lg:mt-16 r md:text-left"
        >
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-snug  sm:text-left">
            With Mobiperform <br />
            <span className=" md:inline-block sm:inline-block">High</span>
            <span className="= md:inline-block sm:inline-block text-blue-600 relative h-[1.2em] ">
              <AnimatePresence mode="wait">
                <motion.span
                  key={texts[index]}
                  initial={{ y: "-40%", opacity: 0 }}
                  animate={{ y: "14%", opacity: 1 }}
                  exit={{ y: "50%", opacity: 0 }}
                  transition={{
                    duration: 0.7,
                    ease: "easeInOut",
                  }}
                  className="absolute left-3 right-0"
                >
                  {texts[index]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>





          <p className="mt-4 sm:mt-6 text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl max-w-md md:max-w-2xl tracking-wide">
            Helping brands scale apps & publishers maximize traffic with
            AI-powered performance marketing solutions.
          </p>

          {/* CTA Buttons */}
          <div className="mt-6 cursor-pointer sm:mt-8 flex flex-col sm:flex-row items-center sm:items-start justify-center md:justify-start gap-4 sm:gap-6">
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Link href="/advertiser">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-6 cursor-pointer sm:px-8 md:px-12 lg:px-14 py-2 sm:py-3 md:py-4 bg-blue-600 text-white text-sm sm:text-base md:text-lg font-medium rounded-2xl shadow-[0_6px_12px_2px_rgba(0,0,0,0.25)] hover:bg-blue-700 transition"
                >
                  For Advertisers
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Link href="/publisher">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-6 sm:px-8 md:px-12 lg:px-14 py-2 sm:py-3 md:py-4 border border-gray-400 text-sm sm:text-base md:text-lg font-medium rounded-lg text-black hover:bg-gray-100 transition"
                >
                  For Publishers
                </motion.button>
              </Link>
            </motion.div>
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
