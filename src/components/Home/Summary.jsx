"use client";
import Link from "next/link";
import { useState } from "react";
import { base_url } from "../Helper/helper";


import Image from "next/image";


const Summary = ({ blog }) => {
  const [visibleCount, setVisibleCount] = useState(4);
  const sortedData = Array.isArray(blog)
    ? [...blog].sort((a, b) => a.id - b.id)
    : [];

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  return (
    <div className="mx-auto flex flex-col md:flex-row gap-6">
      <aside className="w-full md:w-1/5">
        <div className="sticky top-4 bg-gray-100 p-4 rounded-lg shadow-md ">
           <Link
            href="https://tracking.ajio.business/click?pid=87&offer_id=2&sub1=pass_your_subid%20&redirect=https://www.ajio.com/s/50to90percentoff-140961"
            target="_blank"
            rel="noopener noreferrer"

          >
            <img
              src="/ajionew.webp"
              alt="Tata Neu Event"
              className="w-full h-[480px] object-conver rounded-md"
            />
          </Link>
        </div>
        
      </aside>

      <main className="w-full md:w-3/5 flex flex-col gap-4 p-2 mt-[-25px]">
        <h2 className="text-2xl font-bold text-gray-700">Recent Blogs</h2>
        {Array.isArray(blog) &&
          blog.slice(0, visibleCount).map((item, index) => (
            <div
              key={index}
              className="w-full p-4 flex flex-col md:flex-row items-center gap-4 bg-gray-100 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={`${base_url}${item?.image}`}
                alt={item?.title}
                // fill
                className="rounded-xl w-full md:w-40 h-auto object-cover"
                // priority
              />
              <div>
                <Link
                  href={`/${item?.category?.slug}/${item?.slug}`}
                  className="text-lg font-semibold text-gray-800 hover:text-indigo-600 transition-colors duration-300"
                >
                  {item?.title}
                </Link>
                <p>{item?.mdesc}</p>
              </div>
            </div>
          ))}

        {visibleCount < sortedData.length && (
          <div className="flex justify-center">
            <button
              onClick={handleLoadMore}
              className="px-4 py-2 bg-gray-600  text-white rounded-md hover:bg-gray-700 cursor-pointer transition-colors duration-300"
            >
              View More
            </button>
          </div>
        )}
      </main>

      <aside className="w-full md:w-1/5">
        <div className="sticky top-4 bg-gray-100 p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-4">Top Offers</h2>
          <ul className="space-y-3">
            <li className="border-b pb-2">
              Breaking: Market hits all-time high
            </li>
            <li className="border-b pb-2">Politics: New policies announced</li>
            <li className="border-b pb-2">
              Sports: Championship finals highlights
            </li>
            <li className="border-b pb-2">Tech: New smartphone released</li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Summary;
