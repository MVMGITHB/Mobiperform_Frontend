"use client";
import React, { useState, useEffect } from "react";
import { LeftSidebar } from "./LeftSifebar";
import { RightSide } from "./RightSide";
import Link from "next/link";
import axios from "axios";
import { base_url } from "../Helper/helper";
import Image from "next/image";
import { motion } from "framer-motion"; // 👈 added

export const BlogHome = ({ url }) => {
  const [cards, setCards] = useState();

  const fetchdata = async () => {
    try {
      const data = await axios.get(
        `${base_url}/api/blog/getOneBlogCategoryslug/${url}`
      );
      console.log("response i data is ", data.data);
      setCards(data.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchdata();
  }, []);

  // 👇 Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="mx-auto p-6 flex flex-col md:flex-row gap-6"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* <div className="w-full md:w-1/5">
        <LeftSidebar />
      </div> */}

      <motion.div
        className="w-full md:w-3/5 mx-auto shadow-md p-4"
        variants={cardVariants}
      >
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          variants={containerVariants}
        >
          {cards && cards.length > 0 ? (
            [...cards]
              .sort((a, b) => a.id - b.id)
              .map((card, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{
                    scale: 1.04,
                    boxShadow: "0 8px 16px rgba(0,0,0,0.15)",
                  }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="bg-[#f4f4f5] border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-transform duration-300"
                >
                  <img
                    src={`${base_url}${card.image}`}
                    alt={card.title}
                    className="w-full  object-contain rounded-t-xl"
                  />
                  <div className="p-2 text-center">
                    <Link
                      href={`${card?.category?.slug}/${card?.slug}`}
                      className="text-md font-semibold text-[#091057] hover:text-[#313561] transition-colors duration-200"
                    >
                      {card.title}
                    </Link>
                  </div>
                </motion.div>
              ))
          ) : (
            <div className="col-span-full text-center text-gray-400 text-lg">
              No data found
            </div>
          )}
        </motion.div>
      </motion.div>

      {/* <div className="w-full md:w-1/5">
        <RightSide />
      </div> */}
    </motion.div>
  );
};
