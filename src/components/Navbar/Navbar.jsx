"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("About");
  const pathname = usePathname();

  const isHome = pathname === "/";

  const links = [
    { name: "Advertiser", path: "/advertiser" },
    { name: "Publisher", path: "/publisher" },
    { name: "Contact", path: "/contact" },
    // {name:"Register",path:"/register"}
  ];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      // className={`w-full shadow-md tracking-widest ${
      //   isHome ? "bg-white text-black" : "bg-white text-black"
      // }`}

      className="w-full shadow-md tracking-widest bg-white text-black"
    >
      <div className="max-w-[1500px] mx-auto flex justify-between items-center px-4 md:px-20 ">
        {/* Logo */}
        <Link
          href="/"
          // className={`${
          //   bebasNeue.className
          // } font-extrabold text-2xl md:text-3xl tracking-widest uppercase cursor-pointer ${
          //   isHome ? "text-white" : "text-blue-600"
          // }`}
        >

         <div className="h-[50px] md:h-[80px] w-[100px] md:w-[150px] ">
  <img src="/images/logo.png" alt="" className="h-full w-full object-contain" />
</div>

         
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
                    ? "text-yellow-400 font-semibold underline underline-offset-4"
                    : isHome
                    ? "hover:text-gray-200"
                    : "text-black hover:text-gray-700"
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
          className={`hidden md:block px-6 py-2 rounded-full font-medium text-base md:text-lg transition-colors duration-300 bg-blue-600 text-white hover:bg-blue-700 
            `}
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
          className={`md:hidden px-6 py-4 space-y-4 ${
            isHome ? "bg-blue-500 text-white" : "bg-white text-black"
          }`}
        >
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              onClick={() => {
                setActive(link.name);
                setOpen(false);
              }}
              className={`block text-lg font-medium tracking-wide transition-colors duration-300 ${
                active === link.name
                  ? "text-yellow-400 font-semibold"
                  : isHome
                  ? "hover:text-gray-200"
                  : "text-black hover:text-gray-700"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/register"
            className={`mt-2 w-full block text-center px-6 py-2 rounded-full font-medium text-lg transition-colors duration-300 ${
              isHome
                ? "bg-white text-blue-600 hover:bg-gray-100"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            Register Now
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
}
