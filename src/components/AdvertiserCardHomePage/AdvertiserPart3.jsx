"use client";
import { motion } from "framer-motion";

export default function AdvertiserWhyUs() {
  const features = [
    { title: "11+", desc: "Years of Experience" },
    { title: "Proven", desc: "Across industries" },
    { title: "Scalable", desc: "ROI-driven growth" },
    { title: "Trusted", desc: "By global brands" },
  ];

  return (
    <section className="relative bg-white py-16 sm:py-20 lg:py-24 text-center overflow-hidden">
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 mt-130">
        <h1 className="text-[4rem] sm:text-[7rem] md:text-[12rem] lg:text-[18rem] font-extrabold text-gray-200 opacity-60 select-none leading-none text-center">
          Scale
        </h1>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-4xl lg:text-5xl font-semibold text-blue-600 mb-10"
        >
          Why Advertisers Choose Us
        </motion.h2>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 mb-16 max-w-4xl mx-auto"
        >
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-blue-50 shadow-md rounded-lg p-4 sm:p-6 flex flex-col items-center justify-center"
            >
              <h3 className="text-xl sm:text-3xl lg:text-4xl font-bold text-blue-700">
                {f.title}
              </h3>
              <p className="mt-1 text-sm sm:text-lg text-gray-700">{f.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative text-3xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold leading-snug text-blue-600 mb-[250px]"
        >
          Ready to <span className="italic text-black libre">Scale</span> Your <br />
          App Campaigns?
        </motion.h1>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <a
            href="/register"
            className="inline-block bg-black text-white px-6 sm:px-10 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold shadow-lg hover:bg-gray-800 transition"
          >
            Register as Advertiser
          </a>
        </motion.div>
      </div>
    </section>
  );
}
