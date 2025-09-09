"use client";

import { motion } from "framer-motion";
import { FaMicrochip, FaArrowsAltH, FaGlobe, FaUsers } from "react-icons/fa";
import Image from "next/image";

const strengths = [
  { title: "Data + AI", highlight: "Optimization", icon: <FaMicrochip /> },
  { title: "Flexible", highlight: "Campaign Models", icon: <FaArrowsAltH /> },
  { title: "Global", highlight: "Reach", icon: <FaGlobe /> },
  { title: "Dedicated", highlight: "Account Managers", icon: <FaUsers /> },
];

export default function OurStrengths() {
  return (
    <section className="w-full bg-white py-12 md:py-16 px-4 md:px-6 lg:px-12 mx-auto items-center">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* LEFT: Robot Arm */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center md:justify-end"
        >
          <Image
            src="/images/home/robothome.png"
            alt="Robotic Arm Illustration"
            width={400}
            height={350}
            className="drop-shadow-2xl w-[260px] sm:w-[320px] md:w-[380px] lg:w-[420px] object-contain"
            priority
          />
        </motion.div>

        {/* RIGHT: Strength Items */}
        <div className="flex flex-col justify-center items-center md:items-center space-y-4 md:space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
            Our <span className="text-blue-600">Strengths</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 justify-items-center">
            {strengths.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-4 sm:p-5 bg-gray-100 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-blue-600 text-3xl sm:text-4xl">
                  {item.icon}
                </div>
                <div>
                  <p className="font-medium text-gray-900 text-center sm:text-left">
                    {item.title}{" "}
                    <span className="text-blue-600">{item.highlight}</span>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
