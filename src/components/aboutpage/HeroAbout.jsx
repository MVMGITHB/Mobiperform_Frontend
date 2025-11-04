"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const HeroAbout = () => {
  return (
    <section className="relative overflow-hidden w-full bg-gradient-to-b from-blue-50 via-white to-blue-50 py-16 sm:py-20 lg:py-28">
      {/* 🔮 Animated Background Lights */}
      <motion.div
        className="absolute -top-24 -left-24 w-100 h-100 bg-blue-500 rounded-full blur-3xl opacity-40"
        animate={{ x: [0, 50, -30, 0], y: [0, 30, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-[28rem] h-[28rem] bg-blue-300 rounded-full blur-3xl opacity-30"
        animate={{ x: [0, -40, 40, 0], y: [0, -30, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 🌟 Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
        {/* 🧠 Left Side — Text */}
        <div className="max-w-4xl text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900"
          >
            Welcome to{" "}
            <motion.span
              animate={{
                color: ["#2563eb", "#1e3a8a", "#2563eb"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-blue-600"
            >
              Mobiperform
            </motion.span>{" "}
            Your Growth Engine for{" "}
            <span className="text-blue-700">Performance Marketing</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mt-6 text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed"
          >
            In today’s competitive digital landscape, success is not just about{" "}
            <span className="font-semibold text-blue-600">reach</span> — it’s
            about <span className="font-semibold text-blue-600">results</span>.
            At Mobiperform, we focus on delivering measurable performance.
            Whether you’re an advertiser looking to acquire the right users or a
            publisher optimizing traffic monetization, our platform ensures{" "}
            <span className="font-medium text-blue-600">
              transparency, efficiency, and scalability
            </span>{" "}
            at every step.
          </motion.p>

          {/* 🌈 CTA Buttons */}
        
        </div>

        {/* 📸 Right Side — Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-full max-w-[550px] sm:max-w-[600px] lg:max-w-[650px] flex justify-center"
        >
          <Image
            src="/aboutbanner.webp"
            alt="Mobiperform Illustration"
            width={700}
            height={550}
            className="object-contain drop-shadow-2xl"
            priority
          />

          {/* Floating light glow */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-200/30 via-white/10 to-blue-200/30 blur-2xl opacity-40 pointer-events-none"
            animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroAbout;
