"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Globe,
  CheckSquare,
  DollarSign,
  CreditCard,
  Check,
} from "lucide-react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const OffersSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    hover: { scale: 1.05, transition: { duration: 0.2, ease: "easeInOut" } },
  };

  const offers = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Offers",
      description: "across categories & geographies",
    },
    {
      icon: <CheckSquare className="w-8 h-8" />,
      title: "Right Attribution",
      description: "transparent tracking & reporting",
    },
    {
      icon: (
        <div className="relative">
          <DollarSign className="w-8 h-8" />
          <div className="absolute -top-1 -right-1">
            <div className="w-3 h-3 bg-current rounded-full" />
          </div>
        </div>
      ),
      title: "Better Monetization",
      description: "optimized ROI",
    },
    {
      icon: (
        <div className="relative">
          <CreditCard className="w-8 h-8" />
          <div className="absolute top-0 right-0">
            <Check className="w-4 h-4 bg-white rounded-full" />
          </div>
        </div>
      ),
      title: "Timely Payments",
      description: "best cycles & reliable payouts",
    },
  ];

  const benefits = [
    "Global reach",
    "Transparent reporting",
    "Reliable payments",
    "Dedicated support managers",
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 to-white p-6 md:p-12">
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 sm:mb-75">
        {/* // change h1 to h2  */}
        <h2 className="text-[6rem] sm:text-[8rem] md:text-[12rem] lg:text-[18rem] font-extrabold text-gray-200 opacity-50 select-none text-center leading-none">
          Offers
        </h2>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-16">
        {/* Our Offers Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-12"
          >
            Our <span className="text-blue-500">Offers</span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-10">
            {offers.map((offer, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="flex flex-col justify-between items-center bg-blue-50/30 border border-white/40 rounded-2xl p-6 md:p-8 h-64 text-center shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div
                  className={`flex justify-center items-center w-16 h-16 md:w-20 md:h-20 rounded-full text-black mb-4 md:mb-6 ${montserrat.className}`}
                >
                  {offer.icon}
                </div>
                <h3
                  className={`text-xl sm:text-2xl md:text-2xl lg:text-2xl font-semibold text-blue-600 mb-2 md:mb-3 ${montserrat.className}`}
                >
                  {offer.title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-600">
                  {offer.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Publishers Work with Us Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center sm:ml-70"
        >
          {/* Left Heading */}
          <motion.div
            variants={itemVariants}
            className="text-center md:text-left"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold">
              Why <span className="text-blue-500">Publishers</span>
              <br />
              <span className="text-blue-500">Work</span> with
              <br />
              <span className="text-blue-500">Us?</span>
            </h2>
          </motion.div>

          {/* Right Column (Benefits) */}
          <motion.div
            variants={containerVariants}
            className="space-y-4 md:space-y-6"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ x: 10 }}
                className="flex items-center gap-3 md:gap-4"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-black rounded-full flex items-center justify-center"
                >
                  <Check className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </motion.div>
                <span className="text-base sm:text-lg md:text-lg text-gray-700">
                  {benefit}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default OffersSection;
