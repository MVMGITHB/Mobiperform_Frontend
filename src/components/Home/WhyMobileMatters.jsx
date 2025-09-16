"use client";

import { FaMobileAlt, FaUsers } from "react-icons/fa";

export default function WhyMobileMatters() {
  const stats = [
    { value: "11+", label: "Years of Experience" },
    { value: "100+", label: "Global Brands" },
    { value: "500+", label: "Campaigns" },
  ];

  return (
    <section className="w-full bg-white">
      {/* Top Section */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left text */}
          <div className="flex justify-center md:justify-start">
            <p className="text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug max-w-2xl text-center md:text-left">
              <span className="text-blue-600 font-bold">11+ years</span> in
              mobile marketing, trusted by global brands & publishers.
            </p>
          </div>

          {/* Right stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 justify-items-center w-full">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-gray-100 shadow-md rounded-lg px-6 py-6 text-center w-full max-w-[220px]"
              >
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900">
                  {stat.value}
                </h3>
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Divider - full width */}
      <div className="mt-16 mb-16 w-full bg-blue-100 py-8 text-center shadow-2xl">
        <h2 className="text-3xl sm:text-3xl md:text-5xl lg:text-6xl font-md text-gray-900">
          Why Mobile <span className="text-blue-600">Matters</span>
        </h2>
      </div>

      {/* Bottom Section */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 lg:gap-20 mt-12">
          <div className="flex flex-col items-center text-center space-y-6 px-4">
            <FaMobileAlt className="text-6xl sm:text-7xl lg:text-8xl text-gray-600" />
            <p className="text-gray-800 text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-md leading-relaxed">
              <span className="text-blue-600 font-semibold">70%+</span> of
              global traffic is mobile
            </p>
          </div>

          <div className="flex flex-col items-center text-center space-y-6 px-4">
            <FaUsers className="text-6xl sm:text-7xl lg:text-8xl text-gray-600" />
            <p className="text-gray-800 text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-lg leading-relaxed">
              <span className="text-blue-600 font-semibold">
                User acquisition
              </span>{" "}
              on mobile is no longer optional,{" "}
              <span className="text-blue-600 font-semibold">
                it’s essential
              </span>
            </p>
          </div>
        </div>

        {/* Horizontal Black Line */}
        <div className="w-full border-t border-black my-16"></div>
      </div>
    </section>
  );
}
