"use client";
import React from "react";
import { motion } from "framer-motion";

const PublisherPage = () => {
  return (
    <section className="relative bg-blue-50 py-12 sm:py-16 md:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-start"
          >
            <img
              src="/images/publisher/publisher.png"
              alt="Publisher"
              className="w-full max-w-[320px] sm:max-w-[420px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[650px] rounded-2xl object-cover"
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            {/* Headline */}
            <h1 className="font-serif italic font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tight text-gray-900 leading-snug">
              <span className="text-blue-600">Maximize</span> Your Traffic{" "}
              <span className="text-blue-600">Monetize</span> Smarter
            </h1>

            {/* Description */}
            <p className="mt-4 sm:mt-5 md:mt-6 max-w-md mx-auto lg:mx-0 text-sm sm:text-base md:text-lg lg:text-xl font-medium text-gray-700 leading-relaxed">
              Premium offers, transparent tracking & smooth payouts for
              publishers
            </p>

            {/* CTA */}
            <div className="mt-6 sm:mt-8 flex justify-center lg:justify-start">
              <a
                href="/register"
                className="inline-flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 md:px-7 md:py-4 rounded-full font-semibold text-sm sm:text-base md:text-lg lg:text-xl text-white bg-blue-600 shadow-lg hover:bg-white hover:text-blue-600 border-2 border-blue-600 transition-all duration-300"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.0416 4.9192C7.37507 4.51928 6.5271 4.99939 6.5271 5.77669L6.5271 18.2232C6.5271 19.0005 7.37507 19.4806 8.0416 19.0807L18.4137 12.8574C19.061 12.469 19.061 11.5308 18.4137 11.1424L8.0416 4.9192Z"
                  />
                </svg>
                Register as Advertiser
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PublisherPage;
