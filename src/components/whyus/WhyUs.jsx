"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function WhyUs() {
  // Parent container animation (stagger)
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  // Each card animation
  const card = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Heading wave text animation
  const textWave = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  const title = "Why Choose Mobiperform?".split(" ");

  return (
    <section className="relative bg-gray-50 text-gray-800 py-16 sm:py-24 lg:py-32 overflow-hidden bg-gradient-to-l from-blue-400 via-blue-100/20 to-blue-50">
      {/* Animated background gradient glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-100 via-transparent to-blue-100 opacity-40 blur-3xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.4 }}
        transition={{ duration: 1.2 }}
      />

      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <motion.h2
          className="text-2xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 flex flex-wrap justify-center gap-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
        Why Choose <span className="text-blue-700"> Mobiperform ?</span> 
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2"
        >
          {[
            {
              title: "Performance-Driven Approach",
              desc: "Every campaign is designed to meet your growth goals with measurable ROI.",
              icon: "/images/icons/performance.svg",
            },
            {
              title: "End-to-End Transparency",
              desc: "Get real-time data, detailed insights, and complete visibility of campaign performance.",
              icon: "/images/icons/transparency.svg",
            },
            {
              title: "Global Reach",
              desc: "Access diverse traffic sources and connect with millions of engaged users worldwide.",
              icon: "/images/icons/global.svg",
            },
            {
              title: "Trusted Partnerships",
              desc: "Work with a network of vetted advertisers and publishers to ensure quality and compliance.",
              icon: "/images/icons/trusted.svg",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={card}
              whileHover={{
                scale: 1.05,
                y: -5,
                boxShadow: "0px 10px 20px rgba(0, 0, 255, 0.15)",
                transition: { duration: 0.3 },
              }}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-3">
               
                <h3 className="font-semibold text-lg text-blue-600">
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-700 text-sm sm:text-base">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
