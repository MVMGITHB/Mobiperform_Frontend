"use client";

import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from "next/link";
import SimilarBlogs from "./SimilarBlogs";
import { base_url } from "../Helper/helper";


import Image from "next/image";


export default function NewsLayout({ blog }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Ensure blog is a non-null array
  const blogs = Array.isArray(blog) ? blog : [];

  return (
    <div className="mx-auto p-4 flex flex-col md:flex-row gap-6">
      {/* Left Sidebar */}
      <SimilarBlogs blogs={blogs} />

      {/* Main Section */}
      <main className="w-full md:w-3/5 p-2 rounded-lg">
        <h2 className="text-lg font-bold mb-4 text-gray-800">Trending Topics</h2>

        {blogs.length > 0 && (
          <Carousel
            showThumbs={false}
            showArrows={true}
            autoPlay
            infiniteLoop
            showIndicators={false}
            onChange={(index) => setCurrentIndex(index)}
          >
            {blogs.map((property) => (
              <Link
                key={property.id}
                href={`/${property.category?.slug}/${property.slug}`}
                className="block"
              >
                <div className="w-full h-96 relative cursor-pointer">
                  <Image
                    src={`${base_url}${property.image}`}
                    alt={property.title}
                    fill
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </Link>
            ))}
          </Carousel>
        )}

        {blogs[currentIndex] && (
          <Link
            href={`/${blogs[currentIndex].category?.slug}/${blogs[currentIndex].slug}`}
          >
            <h3 className="mt-4 text-center cursor-pointer hover:text-[#5E3B5E] text-[#4F1C51] font-bold text-xl md:text-2xl transition">
              {blogs[currentIndex].title}
            </h3>
          </Link>
        )}
      </main>

      {/* Right Sidebar */}
      <aside className="w-full md:w-1/5 rounded-lg">
        <div className="flex flex-col gap-2">
          <Link
            href="https://tracking.ajio.business/click?pid=87&offer_id=2&sub1=pass_your_subid%20&redirect=https://www.ajio.com/s/50to90percentoff-140961"
            target="_blank"
          >
            <img
              src="./ajionew.webp"
              alt="Ajio event"
              className="w-full h-[480px] object-conver rounded-md"
              loading="lazy"
            />
          </Link>
        </div>
      </aside>
    </div>
  );
}
