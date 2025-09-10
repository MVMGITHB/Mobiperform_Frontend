"use client";
import React from "react";
import { motion } from "framer-motion";
import HowItWorks from "./AdvertiserPart2";

const AdvertiserPage = () => {
  return (
    <section className="relative bg-blue-50 py-20 sm:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center"
          >
            <img
              src="/images/advertiser/advertiserImage.png"
              alt="Advertiser"
              className="w-full max-w-lg rounded-2xl  object-cover"
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-center lg:text-left"
          >
            {/* Headline */}
            <h1 className="font-serif italic font-semibold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-gray-900 leading-snug">
              Acquire the <span className="text-blue-600">Right</span> Users &{" "}
              <span className="text-blue-600">Grow</span> Your App
            </h1>

            {/* Subheadline */}
            <p className="mt-4 font-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-400">
              Like a Pro 🚀
            </p>

            {/* Description */}
            <p className="mt-6 max-w-md mx-auto lg:mx-0 text-lg sm:text-xl font-medium text-gray-700 leading-relaxed">
              AI + Data powered app marketing designed to scale your growth,
              maximize ROI, and put your app in front of the right audience.
            </p>

            {/* CTA */}
            <div className="mt-8 flex justify-center lg:justify-start">
              <a
                href="/register"
                className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-lg sm:text-xl text-white bg-blue-600 shadow-lg hover:bg-white hover:text-blue-600 border-2 border-blue-600 transition-all duration-300"
              >
                <svg
                  className="w-6 h-6 mr-2"
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

export default AdvertiserPage;
