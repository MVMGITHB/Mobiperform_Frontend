"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaShieldAlt, FaUsers, FaGlobe } from "react-icons/fa";

const WeOfferFeature = () => {
  const features = [
    {
      icon: <FaShieldAlt className="text-green-600 text-4xl mb-4" />,
      title: "Fraud-Free Ecosystem",
      desc: "We ensure advanced tracking and anti-fraud tools — giving you confidence in every impression, click, and install.",
    },
    {
      icon: <FaUsers className="text-purple-600 text-4xl mb-4" />,
      title: "Dedicated Support",
      desc: "Our expert team works closely with you to optimize campaigns, enhance user acquisition, and drive sustainable ROI at every stage.",
    },
    {
      icon: <FaGlobe className="text-orange-600 text-4xl mb-4" />,
      title: "Global Reach",
      desc: "Whether you’re targeting specific regions or niche markets, we help you scale seamlessly across borders.",
    },
  ];

  return (
    <section className="py-20 px-6 sm:px-10 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-blue-700 mb-12"
        >
          <span className="text-gray-900">Our Key</span> Features
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300 flex flex-col items-center text-center"
            >
              {feature.icon}
              <h3 className="text-lg sm:text-xl font-semibold mb-3 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WeOfferFeature;
