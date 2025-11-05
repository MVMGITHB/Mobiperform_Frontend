"use client";

import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion";

function OurServiceHero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50 to-white py-8 sm:py-10 lg:py-16">
            {/* 🌈 Animated background orbs */}
            <motion.div
                className="absolute top-10 -left-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-40"
                animate={{ x: [0, 30, -30, 0], y: [0, 20, -20, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-30"
                animate={{ x: [0, -40, 40, 0], y: [0, -30, 30, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* ✨ Main Content Section */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                {/* 📸 Left Image Section */}
                <motion.div
                    initial={{ opacity: 0, x: -60, scale: 0.9 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="w-full lg:w-1/2 flex justify-center lg:justify-start"
                >
                    <Image
                        src="/ourservice.png" // 👉 replace with your image path
                        alt="Our Mission"
                        width={520}
                        height={420}
                        className="object-contain drop-shadow-xl"
                        priority
                    />
                </motion.div>

                {/* 🧠 Right Text Section */}
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-8"
                    >
                        Our <span className='text-blue-600'>Services</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="text-gray-700 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto lg:mx-0"
                    >
                        At Mobiperform, we craft performance-driven marketing solutions that help brands grow smarter and faster. From app installs to conversions, our services are designed to align with your business goals and deliver measurable success.                    
                        </motion.p>

                   
                </div>
            </div>

            {/* 💡 Floating subtle glow effect */}
            <motion.div
                className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-40 bg-blue-200 blur-3xl opacity-30 rounded-full"
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
        </section>
    )
}

export default OurServiceHero