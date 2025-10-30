"use client";
import { motion } from "framer-motion";
import {
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
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white transition">
                Advertisers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Publisher
              </a>
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
              <a href="/about" className="hover:text-white transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white transition">
                Contact
              </a>
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
          <ul className="space-y-2">
            <li>
              <a href="/terms-of-use" className="hover:text-white transition">
                Terms of Use
              </a>
            </li>
            <li>
              <a href="/privacy-policy" className="hover:text-white transition">
                Privacy Policy
              </a>
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
          <div className="flex space-x-4 text-lg">
            <a
              href="https://www.facebook.com/profile.php?id=61582288139690"
              target="_blank"
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.linkedin.com/company/mobiperformads"
              target="_blank"
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.instagram.com/mobiperform/"
              target="_blank"
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition"
            >
              <FaYoutube />
            </a>
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
