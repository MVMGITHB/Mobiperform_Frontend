"use client";

import { useEffect, useState } from "react";
import { FaMobileAlt, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";

// ✅ Small Count-Up component
function CountUp({ end }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // total duration in ms
    const increment = end / (duration / 16); // approx 60fps
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return <span>{count}+</span>;
}

export default function WhyMobileMatters() {
  const stats = [
    { value: 11, label: "Years of Experience" },
    { value: 100, label: "Global Brands" },
    { value: 500, label: "Campaigns" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full bg-white overflow-hidden"
    >
      {/* Top Section */}
      <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-8 md:px-12 py-10 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full lg:w-[88%] mx-auto items-center gap-10">
          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex justify-center md:justify-start"
          >
            <p className="text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-snug lg:px-10 max-w-2xl text-center md:text-left">
              <span className="text-blue-600 font-bold">11+ years</span> in mobile
              <br /> marketing, trusted by
              <br /> global brands & <br /> publishers.
            </p>
          </motion.div>

          {/* Right stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 justify-items-center w-full"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="shadow-md rounded-lg px-6 py-6 text-center w-full max-w-[200px] h-[170px] bg-[#EFF4FE]"
              >
                <h2 className="text-3xl sm:text-[20px] lg:text-[45px] font-medium text-gray-900 popins">
                  <CountUp end={stat.value} />
                </h2>
                <p className="text-base sm:text-lg lg:text-[22px] text-gray-600 mt-2 popins">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Divider */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mt-16 mb-16 w-full bg-blue-100 py-8 text-center shadow-[0_-6px_12px_-2px_rgba(0,0,0,0.25),0_6px_12px_-2px_rgba(0,0,0,0.25)]"
      >
        <h2 className="text-3xl sm:text-3xl md:text-5xl lg:text-6xl font-md text-gray-900">
          Why Mobile <span className="text-blue-600">Matters</span>
        </h2>
      </motion.div>

      {/* Bottom Section */}
      <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 lg:gap-20 mt-12">
          {/* Left card */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center space-y-6 px-4"
          >
            <FaMobileAlt className="text-6xl sm:text-7xl lg:text-8xl text-blue-600" />
            <p className="text-gray-800 text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-md leading-relaxed">
              <span className="text-blue-600 font-semibold">70%+</span> of global
              traffic is mobile
            </p>
          </motion.div>

          {/* Right card */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center space-y-6 px-4"
          >
            <FaUsers className="text-6xl sm:text-7xl lg:text-8xl text-blue-600" />
            <p className="text-gray-800 text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-lg leading-relaxed">
              <span className="text-blue-600 font-semibold">User acquisition</span> on
              mobile is no longer optional,{" "}
              <span className="text-blue-600 font-semibold">it’s essential</span>
            </p>
          </motion.div>
        </div>
      </div>

      {/* Horizontal Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="w-full border-t-2 border-black my-16 origin-left"
      ></motion.div>
    </motion.section>
  );
}
