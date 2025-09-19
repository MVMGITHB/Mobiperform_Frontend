"use client";

import { motion } from "framer-motion";
import { FaMicrochip, FaArrowsAltH, FaGlobe, FaUsers } from "react-icons/fa";
import Image from "next/image";

const strengths = [
  { title: "Data + AI", highlight: "Optimization", icon: '/images/t3.png' },
  { title: "Flexible ", highlight: "Campaign Models", icon: "/images/t2.png" },
 
];

const strengths1 = [
  { title: "Global", highlight: "Reach", icon: "/images/t4.png" },
  { title: "Dedicated", highlight: "AC Managers", icon: "/images/t1.png" },
];

export default function OurStrengths() {
  return (
    <section className="relative px-20 w-full max-w-[1500px] bg-white mx-auto overflow-hidden hidden lg:block ">
      <div className="w-full flex  flex-col md:flex-row items-center ">
        {/* LEFT: Robot Arm */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex relative z-10  w-[30%]  "
        >
          {/* <Image
            src="/images/home/robothome.png"
            alt="Robotic Arm Illustration"
            width={450}
            height={400}
            className="drop-shadow-2xl w-2/3 sm:w-1/2 md:w-[360px] lg:w-[420px] xl:w-[480px] object-contain"
            priority
          /> */}

          <div className="h-[500px] ">
             <img src="/images/home/robothome.png" alt="" />
          </div>
        </motion.div>

        {/* RIGHT: Strength Items */}
        {/* <div className="relative flex flex-col items-center md:items-start">
         
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 text-center md:text-left mb-8 sm:mb-10 relative z-10">
            Our <span className="text-blue-600">Strengths</span>
          </h1>

          
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 justify-items-center md:justify-items-start z-10">
            {strengths.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center md:items-start justify-center p-5 sm:p-6 md:p-7 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-200 w-full"
              >
                <div className="text-blue-600 text-3xl sm:text-4xl md:text-5xl mb-3">
                  {item.icon}
                </div>
                <p className="font-medium text-gray-900 text-center md:text-left text-base sm:text-lg md:text-xl">
                  {item.title}{" "}
                  <span className="text-blue-600">{item.highlight}</span>
                </p>
              </motion.div>
            ))}
          </div>




          
        </div> */}

        <div className="w-[70%] flex mt-[-90px] ml-[-100px] ">

          <h4 className=" pt-[90px] font-semibold text-[40px] text-black" >Our <br></br>
          <span className="text-blue-600">Strengths</span></h4>

           <div className="w-[40%] flex justify-center items-center ">
             <img src="/images/s1.png" alt="" />
           </div>

           <div className="  flex flex-col justify-between gap-5 pb-5 ">
               <div className="flex flex-col gap-6 ml-[-70px]">
                 {
                  // title: "Data + AI", highlight: "Optimization", icon:
                  strengths?.map((item)=>{
                     return (
                       <>
                        <div className="flex gap-5 items-center">

                          <div className="w-[400px] flex gap-3">
                         <h4 className="text-[27px] text-black ">{item?.title}</h4> {" "}
                         <h4 className="text-[27px] text-blue-600 ">{item?.highlight}</h4>
                          </div>

                       
                         <img src={`${item.icon}`} alt="" />
                        </div>
                     
                       </>
                     )
                  })
                 }
               </div>

                <div className="flex flex-col gap-4 ml-[-70px]">
                 {
                  // title: "Data + AI", highlight: "Optimization", icon:
                  strengths1?.map((item)=>{
                     return (
                       <>
                        <div className="flex gap-5 items-center">
                       <div className="w-[400px] flex gap-3">
                         <h4 className="text-[27px] text-black ">{item?.title}</h4>
                         <h4 className="text-[27px] text-blue-600 ">{item?.highlight}</h4>
                          </div>
                         <img src={`${item.icon}`} alt="" />
                        </div>
                     
                       </>
                     )
                  })
                 }
               </div>
             
           </div>
        </div>
      </div>
    </section>
  );
}


