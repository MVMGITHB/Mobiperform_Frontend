"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ContactFloatingButton() {
  const pathname = usePathname();

  // Hide button on contact page
  if (pathname === "/contact") return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed bottom-6 right-6 z-[999]"
    >
      <Link href="/contact">
        <motion.div
          className="relative w-16 h-16"
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* 🔵 Pulsing Ring Effect */}
          <motion.span
            className="absolute inset-0 rounded-full bg-blue-400/40 blur-md"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.6, 0, 0.6],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* 🌟 Outer Glow Pulse */}
          <motion.span
            className="absolute inset-0 rounded-full border-4 border-blue-300/60"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.8, 0, 0.8],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: 1.2,
              ease: "easeInOut",
            }}
          />

          {/* ☎️ Main Button */}
          <motion.button
            initial={{ scale: 1 }}
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-10 cursor-pointer rounded-full w-16 h-16 bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.8)] flex items-center justify-center overflow-hidden hover:bg-blue-700"
          >
            {/* ✨ Shine Sweep */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
              animate={{ x: ["-100%", "100%"] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                repeatDelay: 2,
              }}
            />

            <Image
              src="/Call-Button-PNG-Clipart.png"
              alt="Contact Us"
              width={50}
              height={50}
              className="object-contain relative z-10"
            />
          </motion.button>

          {/* 🪄 Floating “Click Me” Text */}
          {/* <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: [0, 1, 0], y: [20, 0, 10] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
            className="absolute -top-7 left-1/2 -translate-x-1/2 text-sm font-semibold text-blue-600"
          >
            👆 Click Me
          </motion.span> */}
        </motion.div>
      </Link>
    </motion.div>
  );
}
