"use client";

import React from "react";

const steps = [
  {
    title: "User Acquisition",
    desc: "Reach the right audience",
    img: "/images/advertiser/pic1.png",
  },
  {
    title: "Optimization",
    desc: "AI + data-driven campaigns",
    img: "/images/advertiser/pic2.png",
  },
  {
    title: "Growth",
    desc: "From awareness to loyalty",
    img: "/images/advertiser/pic3.png",
  },
];

const HowItWorks = () => {
  return (
    <section className="relative py-10 sm:py-16 lg:py-24 overflow-hidden mt-10 mb-10">
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1 className="text-[3.5rem] sm:text-[6rem] md:text-[12rem] lg:text-[18rem] font-extrabold text-gray-200 opacity-40 select-none text-center leading-none">
          Approach
        </h1>
      </div>

      {/* Content */}
      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight text-black">
            Our <span className="text-blue-500"> Approach</span>
          </h2>
          <p className="max-w-lg mx-auto mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed text-gray-700">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-10 sm:mt-12 lg:mt-20">
          {/* Decorative line (desktop only) */}
          <div className="absolute inset-x-0 hidden md:block top-6 md:px-20 lg:px-28 xl:px-44">
            <img
              className="w-full"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
              alt="Process line"
            />
          </div>

          <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-10 sm:gap-y-12 md:gap-y-0 md:gap-x-12 text-center">
            {steps.map((step, index) => (
              <div key={index} className="px-4 sm:px-6">
                {/* Circle with Image */}
                <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-white border-2 border-gray-200 rounded-full shadow-md sm:shadow-lg overflow-hidden">
                  <img
                    src={step.img}
                    alt={step.title}
                    className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                  />
                </div>

                {/* Title */}
                <h3 className="mt-4 sm:mt-6 text-lg sm:text-xl font-semibold leading-tight text-black">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mt-2 sm:mt-4 text-sm sm:text-base text-gray-700">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
