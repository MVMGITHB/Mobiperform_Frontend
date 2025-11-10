"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300 px-6 md:px-16 py-12">
      <div className="max-w-8xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        {/* Quick Links */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          {/* change ancher tag to link tag for better seo  */}
          <ul className="space-y-2">
            <li>
              <Link
                href="/advertiser"
                aria-label="Advertiser page"
                title="Go to advertiser page"
                className="hover:text-white transition"
              >
                Advertisers
              </Link>
            </li>
            <li>
              <Link
                href="/publisher"
                aria-label="Publisher page"
                title="Go to publisher-page"
                className="hover:text-white transition"
              >
                Publisher
              </Link>
            </li>
            <li>
              <Link
                href="/blogs"
                aria-label="Publisher page"
                title="Go to publisher-page"
                className="hover:text-white transition"
              >
                Blogs
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Company */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/about"
                aria-label="About-us page"
                title="Go to about-us page"
                className="hover:text-white transition"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                aria-label="Contact-us page"
                title="Go to Contact-us page"
                className="hover:text-white transition"
              >
                Contact
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Legal */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-white font-semibold mb-4">Legal</h3>
          {/* change ancher tag to link tag for seo  */}
          <ul className="space-y-2">
            <li>
              <Link
                href="/terms-of-use"
                aria-label="term-of-use page"
                title="Go to term-of-use page"
                className="hover:text-white transition"
              >
                Terms of Use
              </Link>
            </li>
            <li>
              <Link
                href="/privacy-policy"
                aria-label="Privacy Policy page"
                title="Go to privacy-policy page"
                className="hover:text-white transition"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Social Media */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-white font-semibold mb-4">Follow us</h3>
          {/* change ancher tag to Link tag  */}
          <div className="flex space-x-4 text-lg">
            <Link
              href="https://www.facebook.com/profile.php?id=61582288139690"
              target="_blank"
              aria-label="Facebook page"
              title="Go to facebook page"
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className=""
              >
                <FaFacebookF />
              </motion.div>
            </Link>
            <Link
              href="https://www.linkedin.com/company/mobiperformads"
              target="_blank"
              aria-label="LinkedIn"
              title="Go to linkedIn page"
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className=""
              >
                <FaLinkedinIn />
              </motion.div>
            </Link>
            <Link
              href="https://www.instagram.com/mobiperform/"
              target="_blank"
              aria-label="Instagram page"
              title="Go to instagram page"
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className=""
              >
                <FaInstagram />
              </motion.div>
            </Link>
             <Link
              href="https://x.com/mobiperform"
              target="_blank"
              aria-label="X page"
              title="Go to x page"
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className=""
              >
                <FaTwitter />
              </motion.div>
            </Link>
            {/* <a
              href="#"
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition"
            >
              <FaYoutube />
            </a> */}
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 border-t border-gray-800 pt-6"
      >
        <div className="font-bold text-white text-lg tracking-wide">
          MOBIPERFORM
        </div>
        <p className="mt-4 md:mt-0">© MobiPerform All rights reserved</p>
      </motion.div>
    </footer>
  );
}
