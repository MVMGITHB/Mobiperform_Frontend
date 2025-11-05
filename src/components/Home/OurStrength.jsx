"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const strengths = [
  { title: "Data + AI", highlight: "Optimization", icon: "/images/t3.webp" },
  { title: "Flexible", highlight: "Campaign Models", icon: "/images/t2.webp" },
];

const strengths1 = [
  { title: "Global", highlight: "Reach", icon: "/images/t4.webp" },
  { title: "Dedicated", highlight: "AC Managers", icon: "/images/t1.webp" },
];

export default function OurStrengths() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <>
      {/* 👇 Mobile-only image */}
      <div className="block lg:hidden justify-center mx-auto">
        <Image
          src="/images/advertiser/mobileimg.webp"
          alt="Mobile Strengths Illustration"
          width={450}
          height={300}
          className="object-contain"
        />
      </div>

      {/* 👇 Desktop Section */}
      <section className="relative px-20 w-full max-w-[1500px] bg-white mx-auto overflow-hidden hidden lg:block">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, amount: 0.4 }} // 👈 trigger when 40% visible
          className="w-full flex flex-col md:flex-row items-center"
        >
          {/* LEFT: Robot Arm */}
          <motion.div
            variants={itemVariants}
            className="flex relative z-10 w-[30%]"
            viewport={{ once: true, amount: 0.4 }}
          >
            <motion.img
              src="/images/home/robothome.webp"
              alt="Robotic Arm"
              sizes=""
              className="h-[500px]"
              initial={{ x: -80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.4 }}
            />
          </motion.div>

          {/* RIGHT: Strength Items */}
          <div className="w-[70%] flex mt-[-90px] ml-[-100px]">
            {/* Heading */}
            <motion.h4
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.4 }}
              className="pt-[90px] font-semibold text-[40px] text-black"
            >
              Our <br />
              <span className="text-blue-600">Strengths</span>
            </motion.h4>

            {/* Middle illustration */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.4 }}
              className="w-[40%] flex justify-center items-center"
            >
              <img 
              src="/images/s1.webp"
              sizes="" 
              alt="Strengths Illustration" />
            </motion.div>

            {/* Strengths List */}
            <motion.div
              variants={containerVariants}
              viewport={{ once: true, amount: 0.4 }}
              className="flex flex-col justify-between gap-5 pb-5"
            >
              {/* First group */}
              <motion.div
                variants={containerVariants}
                viewport={{ once: true, amount: 0.4 }}
                className="flex flex-col gap-6 ml-[-70px]"
              >
                {strengths.map((item) => (
                  <motion.div
                    key={item.title}
                    variants={itemVariants}
                    whileHover={{ scale: 1.03 }}
                    className="flex gap-5 items-center"
                  >
                    <div className="w-[400px] flex gap-3">
                      <h4 className="text-[27px] text-black">{item.title}</h4>
                      <h4 className="text-[27px] text-blue-600">
                        {item.highlight}
                      </h4>
                    </div>
                    <motion.img
                      src={item.icon}
                      alt={item.title}
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    />
                  </motion.div>
                ))}
              </motion.div>

              {/* Second group */}
              <motion.div
                variants={containerVariants}
                viewport={{ once: true, amount: 0.4 }}
                className="flex flex-col gap-4 ml-[-70px]"
              >
                {strengths1.map((item) => (
                  <motion.div
                    key={item.title}
                    variants={itemVariants}
                    whileHover={{ scale: 1.03 }}
                    className="flex gap-5 items-center"
                  >
                    <div className="w-[400px] flex gap-3">
                      <h4 className="text-[27px] text-black">{item.title}</h4>
                      <h4 className="text-[27px] text-blue-600">
                        {item.highlight}
                      </h4>
                    </div>
                    <motion.img
                      src={item.icon}
                      alt={item.title}
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
