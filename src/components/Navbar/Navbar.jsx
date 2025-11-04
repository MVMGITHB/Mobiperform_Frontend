"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [token, setToken] = useState("");
  const [userName, setUserName] = useState("")
  const pathname = usePathname();
  const isHome = pathname === "/";

  const links = [
    { name: "Home", path: "/" },
    { name: "For Advertisers", path: "/advertiser" },
    { name: "For Publishers", path: "/publisher" },
    { name: "Contact us", path: "/contact" },
    { name: "Our services", path: "/" },
  ];


  useEffect(() => {
    const token = localStorage.getItem("token");
    const userName = localStorage.getItem("name")
    setToken(token);
    setUserName(userName);

  }, [pathname, userName, token])

  console.log("token", token);
  console.log("user Name ", userName);


  useEffect(() => {
    switch (pathname) {
      case "/":
        setActive("Home");
        break;
      case "/advertiser":
        setActive("For Advertisers");
        break;
      case "/publisher":
        setActive("For Publishers");
        break;
      case "/contact":
        setActive("Contact us");
        break;
      case "/services":
        setActive("Our services");
        break;
      default:
        setActive("");
    }
  }, [pathname]);



  const handleLogout = () => {
    console.log("handle logou calld ")
    localStorage.removeItem("token");
    localStorage.removeItem("name")
    setToken("");
    setUserName("")
  }





  // ✨ Animation Variants
  const navContainer = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, when: "beforeChildren", staggerChildren: 0.1 },
    },
  };

  const navItem = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  const mobileMenu = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: "auto",
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.1 },
    },
    exit: { height: 0, opacity: 0, transition: { duration: 0.3 } },
  };

  const mobileLink = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full shadow-md tracking-widest bg-white text-black"
    >
      <motion.div
        variants={navContainer}
        initial="hidden"
        animate="visible"
        className="max-w-[1500px] mx-auto flex justify-between items-center px-4 md:px-20"
      >
        {/* Logo with subtle hover */}
        <motion.div
          whileHover={{ scale: 1.05, rotate: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <Link href="/">
            <div className="h-[50px] md:h-[80px] w-[100px] md:w-[150px] cursor-pointer">
              <img src="/images/logo.png" alt="Logo" className="h-full w-full object-contain" />
            </div>
          </Link>
        </motion.div>

        {/* Desktop Links */}
        <motion.ul
          variants={navContainer}
          className="hidden md:flex space-x-10 text-base md:text-lg font-medium tracking-wide"
        >
          {links.map((link) => (
            <motion.li key={link.name} variants={navItem} whileHover={{ y: -2 }}>
              <Link
                href={link.path}
                onClick={() => setActive(link.name)}
                className={`relative group transition-all duration-300 ${active === link.name
                  ? "text-blue-600 font-semibold"
                  : "text-gray-800 hover:text-blue-600"
                  }`}
              >
                {link.name}
                {/* underline animation */}
                <motion.span
                  layoutId="underline"
                  className={`absolute left-0 -bottom-1 h-[2px] bg-blue-600 transition-all ${active === link.name ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                />
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        {!token ? (
          <motion.div className="flex gap-2">
            {/* Register Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/register"
                className="hidden md:block px-6 py-2 rounded-full font-medium text-base md:text-lg transition-all duration-300 bg-blue-600 text-white hover:bg-blue-700 shadow-md"
              >
                Register
              </Link>
            </motion.div>

            {/* Login Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/login"
                className="hidden md:block px-6 py-2 rounded-full font-medium text-base md:text-lg transition-all duration-300 bg-blue-600 text-white hover:bg-blue-700 shadow-md"
              >
                Login
              </Link>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div className="flex gap-2">
            <motion.div className="hidden md:block px-4 py-2 border border-blue-600 rounded-full font-bold text-base md:text-lg transition-all duration-300 bg-white text-blue-600 hover:bg-blue-700 hover:text-white shadow-md" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              {userName ? userName.charAt(0).toUpperCase() : ""}

            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <div
                onClick={() => handleLogout()}
                className="hidden md:block px-6 py-2 cursor-pointer rounded-full font-medium text-base md:text-lg transition-all duration-300 bg-blue-600 text-white hover:bg-blue-700 shadow-md"
              >
                Logout
              </div>
            </motion.div>
          </motion.div>
        )}




        <motion.button
          onClick={() => setOpen(!open)}
          whileTap={{ scale: 0.9 }}
          className="md:hidden focus:outline-none text-3xl"
        >
          <motion.span
            initial={{ rotate: 0 }}
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="material-icons"
          >
            {open ? "close" : "menu"}
          </motion.span>
        </motion.button>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            variants={mobileMenu}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={`md:hidden px-6 py-4 space-y-4 ${isHome ? "bg-blue-600 text-white" : "bg-white text-black"
              } shadow-lg overflow-hidden`}
          >
            {links.map((link) => (
              <motion.div
                key={link.name}
                variants={mobileLink}
                whileHover={{ x: 5 }}
                className="flex justify-start"
              >
                <Link
                  href={link.path}
                  onClick={() => {
                    setActive(link.name);
                    setOpen(false);
                  }}
                  className={`block text-lg font-medium transition-all duration-300 ${active === link.name
                    ? "text-yellow-400 font-semibold"
                    : "hover:text-gray-300"
                    }`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}

            {!token ? (
              <motion.div
                variants={mobileLink}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="text-center"
              >
                <Link
                  href="/register"
                  onClick={() => setOpen(false)}
                  className={`mt-3 w-full block px-6 py-2 rounded-full font-medium text-lg transition-colors duration-300 ${isHome
                    ? "bg-white text-blue-600 hover:bg-gray-100"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                    }`}
                >
                  Register
                </Link>
                <Link
                  href="/login"
                  onClick={() => setOpen(false)}
                  className={`mt-3 w-full block px-6 py-2 rounded-full font-medium text-lg transition-colors duration-300 ${isHome
                    ? "bg-white text-blue-600 hover:bg-gray-100"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                    }`}
                >
                  Login
                </Link>
              </motion.div>
            ) : (
              <motion.div
                variants={mobileLink}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="text-center"
              >
                <Link
                  href="/register"
                  onClick={() => setOpen(false)}
                  className={`mt-3 w-full block px-6 py-2 rounded-full font-medium text-lg transition-colors duration-300 ${isHome
                    ? "bg-white text-blue-600 hover:bg-gray-100"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                    }`}
                >
{userName.charAt(0).toUpperCase() + userName.slice(1)}

                </Link>
                <Link
                  href="/login"
                  onClick={() => {

                    setOpen(false)
                    handleLogout()

                  }
                  }
                  className={`mt-3 w-full block px-6 py-2 rounded-full font-medium text-lg transition-colors duration-300 ${isHome
                    ? "bg-white text-blue-600 hover:bg-gray-100"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                    }`}
                >
                  Logout
                </Link>
              </motion.div>
            )

            }



          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
