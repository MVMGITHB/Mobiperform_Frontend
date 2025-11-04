"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function PrivacyHero() {
  // animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100 py-16 px-6 sm:px-12 lg:px-20">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 max-w-7xl mx-auto">
        {/* Text Section */}
        <motion.div
          className="flex-1 text-center lg:text-left space-y-6"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <motion.h1
            custom={1}
            variants={fadeUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
          >
            Privacy Policy  <span className="text-blue-700">Mobiperform</span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            className="text-gray-700 text-lg sm:text-xl max-w-2xl mx-auto lg:mx-0"
          >
            Your privacy is our priority. Learn how we protect your data and
            manage your information with complete transparency.
          </motion.p>

          <motion.div custom={3} variants={fadeUp} className="space-y-4 text-gray-600">
            <p>
              Welcome to <span className="font-semibold">Mobiperform.com</span> (referred to as "we," "us," or "our"). 
              We are committed to safeguarding your privacy and ensuring a safe online experience 
              for all users. This Privacy Policy outlines the data we collect, how we use it, 
              and the choices you have regarding your personal information.
            </p>
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="flex-1 flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px]">
            <Image
              src="/privacybanner.png" // change this to your actual image path
              alt="Privacy Illustration"
              fill
              className="object-contain drop-shadow-xl"
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* Decorative blur element */}
      <div className="absolute -top-10 -right-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-40" />
    </section>
  );
}
