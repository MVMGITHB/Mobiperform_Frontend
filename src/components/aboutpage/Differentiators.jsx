"use client";

import { motion } from "framer-motion";
import React from "react";

const Differentiators = () => {
  const features = [
    {
      title: "CPI, CPA, CPR, CPS Expertise",
      desc: "Tailored campaigns to suit your KPIs and growth strategy.",
      icon: "📊",
    },
    {
      title: "Fraud-Free Ecosystem",
      desc: "Advanced tracking and anti-fraud solutions for clean, high-quality traffic.",
      icon: "🛡️",
    },
    {
      title: "Dedicated Support",
      desc: "Our team works with you to optimize campaigns, improve user acquisition, and boost ROI.",
      icon: "🤝",
    },
    {
      title: "Global Reach",
      desc: "Connect with premium publishers and audiences across multiple regions and niches.",
      icon: "🌍",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-blue-50 py-20 sm:py-24 lg:py-32">
      {/* 💫 Background Glow Effects */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-blue-200 blur-3xl rounded-full opacity-30"
        animate={{ x: [0, 40, -40, 0], y: [0, 20, -20, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-80 h-80 bg-blue-300 blur-3xl rounded-full opacity-25"
        animate={{ x: [0, -40, 40, 0], y: [0, -20, 20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 🌟 Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
        {/* 🧭 Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-10"
        >
          What Makes Us <span className="text-blue-600">Different?</span>
        </motion.h2>

        <motion.div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
          viewport={{ once: true }}
        >
          {features.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{
                scale: 1.05,
                y: -5,
                boxShadow: "0 10px 25px rgba(37, 99, 235, 0.2)",
              }}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-transparent hover:border-blue-100"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-semibold text-xl text-blue-700 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ✨ Bottom Glow */}
      <motion.div
        className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-40 bg-blue-200 blur-3xl opacity-30 rounded-full"
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
};

export default Differentiators;
