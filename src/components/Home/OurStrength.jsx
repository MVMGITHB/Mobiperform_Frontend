"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const strengths = [
  { title: "Data + AI", highlight: "Optimization", icon: "/images/t3.png" },
  { title: "Flexible ", highlight: "Campaign Models", icon: "/images/t2.png" },
];

const strengths1 = [
  { title: "Global", highlight: "Reach", icon: "/images/t4.png" },
  { title: "Dedicated", highlight: "AC Managers", icon: "/images/t1.png" },
];

export default function OurStrengths() {
  return (
    <>
      {/* 👇 Mobile-only image */}
      <div className="block lg:hidden justify-center  mx-auto ">
        <Image
          src="/images/advertiser/mobileimg.png"
          alt="Mobile Strengths Illustration"
          width={450}
          height={300}
          className="object-contain"
        />
      </div>

      {/* 👇 Desktop Section */}
      <section className="relative px-20 w-full max-w-[1500px] bg-white mx-auto overflow-hidden hidden lg:block">
        <div className="w-full flex flex-col md:flex-row items-center">
          {/* LEFT: Robot Arm */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex relative z-10 w-[30%]"
          >
            <div className="h-[500px]">
              <img src="/images/home/robothome.png" alt="Robotic Arm" />
            </div>
          </motion.div>

          {/* RIGHT: Strength Items */}
          <div className="w-[70%] flex mt-[-90px] ml-[-100px]">
            {/* Heading */}
            <h4 className="pt-[90px] font-semibold text-[40px] text-black">
              Our <br />
              <span className="text-blue-600">Strengths</span>
            </h4>

            {/* Middle illustration */}
            <div className="w-[40%] flex justify-center items-center">
              <img src="/images/s1.png" alt="Strengths Illustration" />
            </div>

            {/* Strengths List */}
            <div className="flex flex-col justify-between gap-5 pb-5">
              {/* First group */}
              <div className="flex flex-col gap-6 ml-[-70px]">
                {strengths?.map((item) => (
                  <div key={item.title} className="flex gap-5 items-center">
                    <div className="w-[400px] flex gap-3">
                      <h4 className="text-[27px] text-black">{item?.title}</h4>
                      <h4 className="text-[27px] text-blue-600">
                        {item?.highlight}
                      </h4>
                    </div>
                    <img src={item.icon} alt={item.title} />
                  </div>
                ))}
              </div>

              {/* Second group */}
              <div className="flex flex-col gap-4 ml-[-70px]">
                {strengths1?.map((item) => (
                  <div key={item.title} className="flex gap-5 items-center">
                    <div className="w-[400px] flex gap-3">
                      <h4 className="text-[27px] text-black">{item?.title}</h4>
                      <h4 className="text-[27px] text-blue-600">
                        {item?.highlight}
                      </h4>
                    </div>
                    <img src={item.icon} alt={item.title} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
