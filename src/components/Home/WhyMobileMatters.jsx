"use client";

import { FaMobileAlt, FaUsers } from "react-icons/fa";

export default function WhyMobileMatters() {
  const stats = [
    { value: "11+", label: "Years of Experience" },
    { value: "100+", label: "Global Brands" },
    { value: "500+", label: "Campaigns" },
  ];

  return (
    <section className="w-full bg-white px-4 md:px-6 max-w-8xl mx-auto">
      <div className="w-full mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left text */}
          <div className="flex justify-center md:justify-start mx-auto">
            <p className="text-gray-900 text-2xl sm:text-3xl md:text-4xl leading-snug max-w-xl text-center md:text-left">
              <span className="text-blue-600 font-bold">11+ years</span> in
              mobile marketing, trusted by global brands & publishers.
            </p>
          </div>

          {/* Right stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center ">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-gray-100 shadow-md rounded-lg px-6 sm:px-8 py-6 text-center w-full max-w-[180px]"
              >
                <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                  {stat.value}
                </h3>
                <p className="text-base sm:text-lg text-gray-600 mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="mt-20 mb-20 md:mt-20 bg-gradient-to-r bg-blue-100  py-5 text-center w-full shadow-2xl ">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Why Mobile <span className="text-blue-600">Matters</span>
          </h2>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mt-12">
          <div className="flex flex-col items-center text-center space-y-4 sm:space-y-6 px-4 mx-auto">
            <FaMobileAlt className="text-6xl sm:text-7xl text-gray-600" />
            <p className="text-gray-800 text-xl sm:text-2xl max-w-sm sm:max-w-sm leading-relaxed ">
              <span className="text-blue-600 font-bold">70%+</span> of global
              traffic is mobile
            </p>
          </div>

          <div className="flex flex-col items-center text-center space-y-4 sm:space-y-6 px-4">
            <FaUsers className="text-6xl sm:text-7xl text-gray-600" />
            <p className="text-gray-800 text-xl sm:text-2xl max-w-xs sm:max-w-md leading-relaxed">
              <span className="text-blue-600 font-bold">User acquisition</span>{" "}
              on mobile is no longer optional,{" "}
              <span className="text-blue-600 font-bold">it’s essential</span>
            </p>
          </div>
        </div>

        {/* Horizontal Black Line */}
        <div className="w-full border-t border-black my-12"></div>
      </div>
    </section>
  );
}
