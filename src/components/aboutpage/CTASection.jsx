"use client";

import { motion } from "framer-motion";
import React from "react";

const CTASection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50 to-blue-100 text-gray-900 py-20 sm:py-24 lg:py-32">
      {/* 🌌 Subtle Animated Orbs */}
      <motion.div
        className="absolute -top-20 left-0 w-80 h-80 bg-blue-200/40 rounded-full blur-3xl"
        animate={{ x: [0, 20, -20, 0], y: [0, 15, -15, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-sky-200/30 rounded-full blur-3xl"
        animate={{ x: [0, -30, 30, 0], y: [0, -15, 15, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 🌟 Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 sm:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight text-gray-900"
        >
          Start Scaling with{" "}
          <motion.span
            animate={{
              color: ["#2563EB", "#1E3A8A", "#2563EB"],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="font-extrabold"
          >
            Mobiperform
          </motion.span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-base sm:text-lg lg:text-xl text-gray-700 mb-10 leading-relaxed"
        >
          From user acquisition to revenue optimization, Mobiperform helps you
          turn every click into measurable growth. Whether you’re running{" "}
          <span className="font-semibold text-blue-700">CPI campaigns</span> or{" "}
          <span className="font-semibold text-blue-700">monetizing traffic</span>,
          we make performance marketing simple, scalable, and profitable.
        </motion.p>

        {/* 🚀 CTA Button */}
        <motion.a
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 25px rgba(59,130,246,0.4)",
          }}
          whileTap={{ scale: 0.95 }}
          href="/contact"
          className="inline-block px-10 py-4 rounded-full text-lg sm:text-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-md"
        >
          Partner with Mobiperform Today
        </motion.a>
      </div>

      {/* ✨ Soft Glow */}
      <motion.div
        className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[80%] h-40 bg-blue-300/30 blur-3xl opacity-40 rounded-full"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
};

export default CTASection;
