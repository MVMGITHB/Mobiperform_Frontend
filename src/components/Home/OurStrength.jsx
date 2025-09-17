// "use client";

// import { motion } from "framer-motion";
// import { FaMicrochip, FaArrowsAltH, FaGlobe, FaUsers } from "react-icons/fa";
// import Image from "next/image";

// const strengths = [
//   { title: "Data + AI", highlight: "Optimization", icon: <FaMicrochip /> },
//   { title: "Flexible", highlight: "Campaign Models", icon: <FaArrowsAltH /> },
//   { title: "Global", highlight: "Reach", icon: <FaGlobe /> },
//   { title: "Dedicated", highlight: "Account Managers", icon: <FaUsers /> },
// ];

// export default function OurStrengths() {
//   return (
//     <section className="relative w-full max-w-[1500px] bg-white px-4 sm:px-8 md:px-12 lg:px-20 py-10 sm:py-16 md:py-20  overflow-hidden">
//       <div className="w-full flex  flex-col md:flex-row items-center ">
//         {/* LEFT: Robot Arm */}
//         <motion.div
//           initial={{ opacity: 0, x: -20 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="flex relative z-10 border w-[30%] border-amber-400 "
//         >
//           {/* <Image
//             src="/images/home/robothome.png"
//             alt="Robotic Arm Illustration"
//             width={450}
//             height={400}
//             className="drop-shadow-2xl w-2/3 sm:w-1/2 md:w-[360px] lg:w-[420px] xl:w-[480px] object-contain"
//             priority
//           /> */}

//           <div className="h-[500px] border border-amber-200">
//              <img src="/images/home/robothome.png" alt="" />
//           </div>
//         </motion.div>

//         {/* RIGHT: Strength Items */}
//         {/* <div className="relative flex flex-col items-center md:items-start">
         
//           <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 text-center md:text-left mb-8 sm:mb-10 relative z-10">
//             Our <span className="text-blue-600">Strengths</span>
//           </h1>

          
//           <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 justify-items-center md:justify-items-start z-10">
//             {strengths.map((item, idx) => (
//               <motion.div
//                 key={item.title}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: idx * 0.15 }}
//                 viewport={{ once: true }}
//                 whileHover={{ scale: 1.05 }}
//                 className="flex flex-col items-center md:items-start justify-center p-5 sm:p-6 md:p-7 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-200 w-full"
//               >
//                 <div className="text-blue-600 text-3xl sm:text-4xl md:text-5xl mb-3">
//                   {item.icon}
//                 </div>
//                 <p className="font-medium text-gray-900 text-center md:text-left text-base sm:text-lg md:text-xl">
//                   {item.title}{" "}
//                   <span className="text-blue-600">{item.highlight}</span>
//                 </p>
//               </motion.div>
//             ))}
//           </div>




          
//         </div> */}

//         <div className="w-[60%] border border-amber-400">

//            <div className="w-[60%] flex justify-center items-center ">
//              <img src="/images/s1.png" alt="" />
//            </div>
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import { motion } from "framer-motion";
import { FaMicrochip, FaArrowsAltH, FaGlobe, FaUsers } from "react-icons/fa";
import Image from "next/image";

const strengths = [
  { title: "Data + AI", highlight: "Optimization", icon: <FaMicrochip /> },
  { title: "Flexible", highlight: "Campaign Models", icon: <FaArrowsAltH /> },
  { title: "Global", highlight: "Reach", icon: <FaGlobe /> },
  { title: "Dedicated", highlight: "Account Managers", icon: <FaUsers /> },
];

export default function OurStrengths() {
  return (
    <section className="relative w-full bg-white py-12 md:py-16 px-4 md:px-6 lg:px-12 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative">
        {/* LEFT: Robot Arm */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center md:justify-end relative z-10"
        >
          <Image
            src="/images/home/robothome.png"
            alt="Robotic Arm Illustration"
            width={420}
            height={380}
            className="drop-shadow-2xl w-[260px] sm:w-[320px] md:w-[380px] lg:w-[420px] object-contain"
            priority
          />
        </motion.div>

        {/* RIGHT: Strength Items */}
        <div className="relative flex flex-col justify-center items-center md:items-center">
          {/* Decorative dotted line (desktop only) */}
          <div className="absolute inset-0 hidden md:block top-6">
            <img
              className="w-full"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
              alt="Connecting line"
            />
          </div>

          <h1 className="text-4xl md:text-3xl font-bold text-gray-900 text-center mb-10 relative z-10">
            Our <span className="text-blue-600">Strengths</span>
          </h1>

          <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10 justify-items-center z-10">
            {strengths.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200"
              >
                <div className="text-blue-600 text-4xl mb-3">{item.icon}</div>
                <p className="font-medium text-gray-900 text-center">
                  {item.title}{" "}
                  <span className="text-blue-600">{item.highlight}</span>
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
