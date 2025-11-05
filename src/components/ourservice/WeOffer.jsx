"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaChartLine,
  FaMousePointer,
  FaTasks,
  FaEye,
} from "react-icons/fa";
import Image from "next/image";

const offers = [
  {
    icon: <FaChartLine className="text-blue-600 text-4xl mb-3" />,
    title: "CPI – Cost Per Install",
    desc: "Pay only for real app installs. Attract high-quality users who download and engage with your app.",
  },
  {
    icon: <FaMousePointer className="text-blue-600 text-4xl mb-3" />,
    title: "CPC – Cost Per Click",
    desc: "Generate traffic to your app or website. Pay for clicks and gauge user intent before conversion.",
  },
  {
    icon: <FaTasks className="text-blue-600 text-4xl mb-3" />,
    title: "CPA – Cost Per Action",
    desc: "Invest only when your audience takes valuable actions like signing up, purchasing, or subscribing — maximizing ROI.",
  },
  {
    icon: <FaEye className="text-blue-600 text-4xl mb-3" />,
    title: "CPM – Cost Per Mille",
    desc: "Enhance your brand presence with high-reach campaigns. Pay per 1,000 impressions to boost awareness and visibility.",
  },
];

export default function WeOffer() {
  return (
    <section className="py-20 px-6 sm:px-10 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* ---------- Section Heading ---------- */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-12"
        >
          <span className="text-gray-900">We</span>{" "}
          <span className="text-blue-600">Offer</span>
        </motion.h2>

        {/* ---------- Grid Layout (Image + Boxes) ---------- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          

          {/* ---------- Right: Offer Boxes ---------- */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
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
            {offers.map((offer, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.15)",
                }}
                className="p-6 bg-white rounded-2xl border border-blue-100 flex flex-col items-start text-left shadow-sm hover:shadow-md transition-all duration-300"
              >
                {offer.icon}
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  {offer.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  {offer.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>


          {/* ---------- Left: Image Section ---------- */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative w-full h-[350px] sm:h-[450px] lg:h-[520px] rounded-2xl overflow-hidden "
          >
            <Image
              src="/ourmission.png" // 👈 Replace with your image path
              alt="We Offer"
              fill
              className="object-cover"
            />
            {/* <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
