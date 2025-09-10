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
    <section className="relative py-10 sm:py-16 lg:py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/advertiser/bg.png"
          alt="Background"
          className="max-w-3xl h-full object-fit justify-center mx-auto"
        />
        {/* Optional overlay for readability */}
        <div className="absolute inset-0 bg-white/80" />
      </div>

      {/* Content */}
      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Our <span className="text-blue-500"> Approach</span>
          </h2>
          <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-700">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-12 lg:mt-20">
          {/* Decorative line (desktop only) */}
          <div className="absolute inset-x-0 hidden md:block top-2 md:px-20 lg:px-28 xl:px-44">
            <img
              className="w-full"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
              alt="Process line"
            />
          </div>

          <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
            {steps.map((step, index) => (
              <div key={index}>
                {/* Circle with Image */}
                <div className="flex items-center justify-center w-20 h-20 mx-auto bg-white border-2 border-gray-200 rounded-full shadow-lg overflow-hidden">
                  <img
                    src={step.img}
                    alt={step.title}
                    className="w-12 h-12 object-contain"
                  />
                </div>

                {/* Title */}
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-base text-gray-700">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
