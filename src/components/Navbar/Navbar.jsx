"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  weight: "400", // only one weight for Bebas Neue
  subsets: ["latin"],
});

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("About"); // default active link

  // Map each link to a route
  const links = [
    { name: "About", path: "/about" },
    { name: "Advertiser", path: "/advertiser" },
    { name: "Publishers", path: "/publishers" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={` w-full bg-blue-600 text-white shadow-md tracking-widest`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className={`${bebasNeue.className} font-extrabold text-2xl md:text-3xl tracking-widest uppercase cursor-pointer`}
        >
          MOBIPERFORM
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-10 text-base md:text-lg font-medium tracking-wide">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                href={link.path}
                onClick={() => setActive(link.name)}
                className={`transition-colors duration-300 ${
                  active === link.name
                    ? "text-yellow-300 font-semibold underline underline-offset-4"
                    : "hover:text-gray-200"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Button */}
        <Link
          href="/register"
          className="hidden md:block bg-white text-blue-600 px-6 py-2 rounded-full font-medium text-base md:text-lg hover:bg-gray-100 transition-colors duration-300"
        >
          Register Now
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden focus:outline-none text-2xl"
        >
          <span className="material-icons">{open ? "close" : "menu"}</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="md:hidden bg-blue-500 px-6 py-4 space-y-4"
        >
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              onClick={() => {
                setActive(link.name);
                setOpen(false); // close menu after click
              }}
              className={`block text-lg font-medium tracking-wide transition-colors duration-300 ${
                active === link.name
                  ? "text-yellow-300 font-semibold"
                  : "hover:text-gray-200"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/register"
            className="mt-2 w-full block text-center bg-white text-blue-600 px-6 py-2 rounded-full font-medium text-lg hover:bg-gray-100 transition-colors duration-300"
          >
            Register Now
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
}
