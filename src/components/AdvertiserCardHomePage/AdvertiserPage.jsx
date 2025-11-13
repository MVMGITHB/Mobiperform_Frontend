"use client";
import React from "react";
import { motion } from "framer-motion";

const AdvertiserPage = () => {
  return (
    <section className="relative bg-blue-50 py-16 sm:py-24 lg:py-2">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-1 items-center">
          {/* Left Image */}

          <div className=" mt-[-70px] md:mt-1">

             <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex justify-end w-full md:max-w-[700px]"
          >

            <img
            // converts png to webp;
              src="/images/advertiser/advertiserImage.webp"
              alt="Advertiser"
              height=""
              width=""
              className="w-full rounded-2xl object-cover"
            />
          </motion.div>
          </div>
         

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-start pt-1 lg:pt-35"
          >
            {/* Headline */}
             

             <div className=" max-w-[1000px] flex flex-col justify-center items-center ml-0 md:ml-[-70px] ">
               <h1 className=" font-bold text-center text-3xl sm:text-4xl lg:text-6xl xl:text-6xl tracking-tight text-gray-900 leading-snug">
              Acquire the <span className="text-blue-600">Right</span> Users {" "}
              <span className="text-blue-600">Grow</span> Your App
            </h1>

            

            {/* Description */}
            <p className="mt-5 max-w-[500px] sm:mt-6  text-center d mx-auto lg:mx-0 text-base sm:text-lg lg:text-xl font-medium text-gray-700 leading-relaxed">
              AI + Data powered app marketing designed to scale your growth,
              maximize ROI
            </p>


                        {/* CTA */}
            <div className="mt-6 sm:mt-8 flex justify-center lg:justify-start">
              <a
                href="/register"
                className="inline-flex items-center justify-center px-5 py-3 sm:px-7 sm:py-4 rounded-full font-semibold text-base sm:text-lg lg:text-xl text-white bg-blue-600 shadow-lg hover:bg-white hover:text-blue-600 border-2 border-blue-600 transition-all duration-300"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 mr-2"
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

             </div>
           
           


          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AdvertiserPage;
