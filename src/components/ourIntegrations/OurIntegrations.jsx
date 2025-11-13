"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const OurIntegrations = () => {
  const logoVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  const titleVariant = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  const logos = [
    "/integrationsImage/integrations1.jpg",
    "/integrationsImage/integrations2.jpg",
    "/integrationsImage/integrations3.jpg",
    "/integrationsImage/integrations4.jpg",
  ];

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-white via-gray-50 to-gray-100">
      {/* Title Section */}
      <motion.div
        className="flex items-center justify-center mb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={titleVariant}
      >
        <div className="flex items-center justify-center mb-10 w-full px-6 sm:px-12">
          <motion.div
            className="flex-grow h-[2px] bg-gradient-to-l from-gray-900 via-gray-500 to-gray-200 animate-gradient-x"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          ></motion.div>

          <motion.h2
            className="px-4 text-gray-800 text-2xl sm:text-3xl font-bold text-center whitespace-nowrap"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our Integrations
          </motion.h2>

          <motion.div
            className="flex-grow h-[2px] bg-gradient-to-r from-gray-900 via-gray-100 to-gray-200 animate-gradient-x"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          ></motion.div>
        </div>
      </motion.div>

      {/* Logos */}
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {logos.map((src, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={logoVariant}
              whileHover={{ scale: 1.1, rotate: 1 }}
              className="flex justify-center items-center bg-white shadow-md rounded-2xl p-4 hover:shadow-lg transition-all duration-300"
            >
              <img
                src={src}
                alt={`integration-logo-${i + 1}`}
                className="w-28 sm:w-36 md:w-44 lg:w-56 h-auto object-contain"
                width={""}
                height={""}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurIntegrations;
