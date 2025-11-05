"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const MissionAbout = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50 to-white py-20 sm:py-24 lg:py-32">
      {/* 🌈 Animated background orbs */}
      <motion.div
        className="absolute top-10 -left-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-40"
        animate={{ x: [0, 30, -30, 0], y: [0, 20, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-30"
        animate={{ x: [0, -40, 40, 0], y: [0, -30, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ✨ Main Content Section */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* 📸 Left Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -60, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 flex justify-center lg:justify-start"
        >
          <Image
            src="/ourmission.png" // 👉 replace with your image path
            alt="Our Mission"
            width={520}
            height={420}
            className="object-contain drop-shadow-xl"
            priority
          />
        </motion.div>

        {/* 🧠 Right Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-8"
          >
            Our Mission
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-gray-700 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto lg:mx-0"
          >
            Our mission is simple — to create a win-win ecosystem for{" "}
            <span className="font-semibold text-blue-600">advertisers</span> and{" "}
            <span className="font-semibold text-blue-600">publishers</span> by
            driving measurable results and transparent growth.
          </motion.p>

          <motion.ul
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } },
            }}
            viewport={{ once: true }}
            className="mt-10 space-y-6 text-left text-gray-800 text-lg sm:text-xl"
          >
            {[
              {
                title: "For Advertisers:",
                desc: "Acquire the right users, optimize campaigns, and deliver the best ROAS (Return on Ad Spend).",
              },
              {
                title: "For Publishers:",
                desc: "Maximize traffic monetization, ensure reliable attribution, and provide timely, guaranteed payouts.",
              },
            ].map((item, index) => (
              <motion.li
                key={index}
                variants={{
                  hidden: { opacity: 0, x: -40 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="flex items-start gap-4"
              >
                <motion.div
                  className="w-3 h-3 mt-2 bg-blue-600 rounded-full flex-shrink-0"
                  whileHover={{ scale: 1.4 }}
                />
                <span>
                  <span className="font-semibold text-blue-700">
                    {item.title}
                  </span>{" "}
                  {item.desc}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>

      {/* 💡 Floating subtle glow effect */}
      <motion.div
        className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-40 bg-blue-200 blur-3xl opacity-30 rounded-full"
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
};

export default MissionAbout;
