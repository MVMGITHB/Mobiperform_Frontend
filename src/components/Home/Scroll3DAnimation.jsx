"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Scroll3DAnimation() {
  const ref = useRef(null);

  // Track scroll progress
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // 3D tilt and rotation from scrolling
  const tiltX = useTransform(scrollYProgress, [0, 1], [0, -25]); // top tilt
  const tiltY = useTransform(scrollYProgress, [0, 1], [0, 25]); // side tilt
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 360]); // full Y rotation on scroll
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <div className="h-[150vh] flex items-center justify-center">
      <motion.div
        ref={ref}
        style={{
          rotateY, // scroll-based rotation
          rotateX: tiltX, // scroll tilt
          rotateZ: tiltY, // scroll tilt
          scale,
          opacity,
          perspective: 1200,
        }}
        className="p-10"
      >
        <Image
          src="/direction-clipart-2.jpg"
          width={500}
          height={550}
          alt="3D Image"
        />
      </motion.div>
    </div>
  );
}
