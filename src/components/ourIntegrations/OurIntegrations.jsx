"use client";
import React from "react";
import { motion } from "framer-motion";

const OurIntegrations = () => {
  // Animation variants for logo images
  const logoVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2, // staggered entrance
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="w-full py-12 bg-white overflow-hidden">
      {/* Title Divider Animation */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex items-center justify-center my-8"
      >
        <div className="flex-grow h-px bg-gray-300"></div>
        <p className="px-4 text-gray-700 text-xl sm:text-2xl md:text-3xl font-semibold text-center whitespace-nowrap">
          Our Integrations
        </p>
        <div className="flex-grow h-px bg-gray-300"></div>
      </motion.div>

      {/* Logos Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-8 md:gap-20 mt-10 px-4"
      >
        {[1, 2, 3, 4].map((num, i) => (
          <motion.img
            key={i}
            custom={i}
            variants={logoVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            src={`/integrationsImage/integrations${num}.jpg`}
            alt={`integration logo ${num}`}
            className="w-auto md:w-40 lg:w-64 h-auto object-contain hover:scale-105 transition-transform duration-300"
          />
        ))}
      </motion.div>
    </section>
  );
};

export default OurIntegrations;
