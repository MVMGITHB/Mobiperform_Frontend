"use client";

import React from "react";
import { motion } from "framer-motion";

export default function PrivacyContent() {
  // Animation variant for sections
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  const sections = [
    {
      title: "1. Information We Collect",
      content: (
        <>
          <p>
            This notice applies to all information collected or submitted on our
            website. Some examples include:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>Name</li>
            <li>IP Address</li>
            <li>Phone Number</li>
            <li>Descriptions of business issues or queries</li>
            <li>Details & requirements shared via lead forms</li>
          </ul>
          <p>
            We also use cookies and similar tracking technologies to enhance
            your browsing experience and collect information about your
            preferences.
          </p>
        </>
      ),
    },
    {
      title: "2. How We Use Your Information",
      content: (
        <>
          <p>We may use your information for purposes including:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>Providing and improving our services</li>
            <li>Communicating with you about our services and promotions</li>
            <li>Analyzing trends and user behavior</li>
            <li>Customizing content and advertising</li>
            <li>Sharing different offers and products from brands</li>
            <li>Preventing fraudulent activity</li>
            <li>Using your email to address queries</li>
            <li>
              Communicating via SMS, Email, RCS, WhatsApp, and Voice (with
              consent)
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "3. Data Security",
      content: (
        <p>
          We take reasonable measures to protect your personal information from
          unauthorized access, use, or disclosure. However, no method of
          transmission over the internet or electronic storage is 100% secure.
        </p>
      ),
    },
    {
      title: "4. Changes to this Privacy Policy",
      content: (
        <p>
          We reserve the right to update or change this Privacy Policy at any
          time. Any changes will be effective immediately upon posting the
          revised Privacy Policy on our website.
        </p>
      ),
    },
    {
      title: "5. Your Rights",
      content: (
        <p>
          You have the right to access, update, or delete your personal
          information. Contact us if you wish to make changes or request
          deletion.
        </p>
      ),
    },
    {
      title: "6. Contact Us",
      content: (
        <p>
          If you have any questions or concerns about this Privacy Policy or our
          practices, please contact us at{" "}
          <a
            href="mailto:contact@mobiperform.com"
            className="text-blue-600 underline"
          >
            contact@mobiperform.com
          </a>
          .
        </p>
      ),
    },
  ];

  return (
    <section className="relative py-20 px-6 sm:px-12 lg:px-20 bg-white">
      <div className="max-w-5xl mx-auto space-y-12">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="p-6 sm:p-8 rounded-2xl shadow-md bg-gradient-to-br from-white to-blue-50 hover:shadow-lg transition-all duration-300"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-blue-700 mb-4">
              {section.title}
            </h2>
            <div className="text-gray-700 space-y-2">{section.content}</div>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center text-gray-700 text-lg sm:text-xl mt-10"
        >
          <p>Thank you for choosing Mobiperform.com!</p>
        </motion.div>
      </div>

      {/* Decorative blur circle */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-30 -z-10" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-300 rounded-full blur-3xl opacity-20 -z-10" />
    </section>
  );
}
