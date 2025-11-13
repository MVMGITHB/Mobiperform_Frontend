"use client";

import React from "react";

const steps = [
  {
    title: "User Acquisition",
    desc: "Reach the right audience",
    img: "/images/advertiser/pic1.webp",
  },
  {
    title: "Optimization",
    desc: "AI + data-driven campaigns",
    img: "/images/advertiser/pic2.webp",
  },
  {
    title: "Growth",
    desc: "From awareness to loyalty",
    img: "/images/advertiser/pic3.webp",
  },
];

const HowItWorks = () => {
  return (
    <section className="relative bg-white py-10 sm:py-16 lg:py-24 overflow-hidden  overflow-x-hidden ">
      {/* Background Text */}
      <div className="absolute inset-0 flex bg-white items-center justify-center pointer-events-none">
        <h2 className="text-[3.5rem] sm:text-[6rem] md:text-[12rem] lg:text-[18rem] font-extrabold text-gray-200 opacity-40 select-none text-center leading-none">
          Approach
        </h2>
      </div>

      {/* Content */}
      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight text-black">
            Our <span className="text-blue-500"> Approach</span>
          </h2>
        </div>

        <div className="w-[90%] mx-auto">
          <img 
          src="/images/bg1.webp" 
          alt="bg-image"
         height=""
         width=""
         className=" w-full object-cover " />
        </div>

        <div className="flex gap-4   justify-between mt-4 md:pl-[40px]">
          <div>
            <h6 className="text-blue-600 md:text-xl font-medium">
              User Acquisition
            </h6>
            <p className=" text-black md:text-[20px]">Reach right audience </p>
          </div>

          <div>
            <h6 className="text-blue-600 md:text-xl font-medium text-center ">
              Optimization
            </h6>
            <p className=" text-black md:text-xl text-center">AI + data-driven campaigns </p>
          </div>

          <div className="">
            <h6 className="text-blue-600 md:text-xl font-medium text-center ">
              Growth
            </h6>
            <p className=" text-black md:text-xl text-center">from  awareness  to loyalty  </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
