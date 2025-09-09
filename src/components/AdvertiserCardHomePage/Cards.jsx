"use client";
import { motion } from "framer-motion";
import { FaBullhorn, FaPaperPlane } from "react-icons/fa";

export default function AdvertisersPublishers() {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        {/* Advertisers Card */}
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="show"
          variants={cardVariants}
          viewport={{ once: true }}
          className="bg-black text-white  p-8 flex flex-col items-center justify-center shadow-lg hover:scale-105 transition-transform"
        >
          <FaBullhorn className="text-6xl mb-4 text-white" />
          <h3 className="text-3xl font-light">Advertisers</h3>
          <p className="mt-3 text-gray-300 text-xl text-center">
            Acquire the right users, <br /> Scale your app.
          </p>
          <button className="mt-6 px-10 py-3 bg-blue-600 rounded-lg font-medium hover:bg-blue-700 transition">
            Learn More
          </button>
        </motion.div>

        {/* Publishers Card */}
        <motion.div
          custom={1}
          initial="hidden"
          whileInView="show"
          variants={cardVariants}
          viewport={{ once: true }}
          className="bg-blue-600 text-white  p-8 flex flex-col items-center justify-center shadow-lg hover:scale-105 transition-transform"
        >
          <FaPaperPlane className="text-6xl mb-4 text-white" />
          <h3 className="text-3xl font-light">Publishers</h3>
          <p className="mt-3 text-center text-xl text-blue-100">
            Monetize smarter, <br /> Maximize ROI.
          </p>
          <button className="mt-6 px-10 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-900 transition">
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
}
