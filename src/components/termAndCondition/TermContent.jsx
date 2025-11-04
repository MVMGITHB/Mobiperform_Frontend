"use client";

import React from "react";
import { motion } from "framer-motion";

export default function TermContent() {
  // Animation variant for each section
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
      title: "1. Description and Acceptance of Services",
      content: (
        <>
          <p>
            We provide information about products & services, including news
            blogs in categories like Health, Technology, Education, Travel,
            Sports, Fashion, Food, etc. You agree that participation in these
            services is voluntary.
          </p>
          <p>
            Continued usage constitutes acceptance of the TOU, including
            modifications. You consent to receive communications through
            email, phone, or SMS, even if your number is on the DND/NCPR list.
          </p>
        </>
      ),
    },
    {
      title: "2. License and Website Access",
      content: (
        <>
          <p>
            The company owns all legal rights, titles, and interests in the
            services, including intellectual property. You are granted a
            limited license to access the website and services, but may not
            copy, distribute, reverse engineer, or otherwise misuse the content.
          </p>
          <p>
            Unauthorized actions include commercial use, fraudulent
            transactions, scraping content, deep-linking without permission,
            bypassing security, and framing the website on another domain.
          </p>
        </>
      ),
    },
    {
      title: "3. Privacy Policy",
      content: (
        <p>
          By using the website, you consent to the collection and use of
          information as described in our Privacy Policy.
        </p>
      ),
    },
    {
      title: "4. Your Registration / Account",
      content: (
        <p>
          You represent that you are of legal age and legally allowed to
          access services. You are responsible for maintaining the
          confidentiality of login credentials and ensuring accuracy of
          registration information.
        </p>
      ),
    },
    {
      title: "5. Eligibility",
      content: (
        <p>
          You confirm that you are a resident of India, above 18 years of
          age, and capable of entering into a binding contract.
        </p>
      ),
    },
    {
      title: "6. Third-Party Links",
      content: (
        <p>
          We are not responsible for content, goods, or services on
          third-party sites. Your interaction with third-party resources is
          at your own risk.
        </p>
      ),
    },
    {
      title: "7. Disclaimer of Warranty",
      content: (
        <p>
          Services are provided "as is" and "as available". We disclaim all
          warranties, express or implied, including merchantability, fitness
          for a purpose, or non-infringement. Registration is free unless
          stated otherwise.
        </p>
      ),
    },
    {
      title: "8. Limitation of Liability",
      content: (
        <p>
          The company shall not be liable for any damages, direct or
          indirect, arising from use of services, including third-party
          services. Liability, if proven, is limited to fees paid to the
          company.
        </p>
      ),
    },
    {
      title: "9. Site-provided Email and Postings",
      content: (
        <p>
          You may post messages or communicate via the website, but must not
          share illegal, abusive, misleading, or harmful content.
          Mobiperform reserves the right to remove posts and monitor
          activity.
        </p>
      ),
    },
    {
      title: "10. Indemnity",
      content: (
        <p>
          You agree to indemnify and hold the company harmless from claims,
          damages, or losses resulting from your breach of these TOU or
          violation of laws or third-party rights.
        </p>
      ),
    },
    {
      title: "11. Additional Terms and Conditions",
      content: (
        <p>
          The company may update policies, services, or promotional offers
          at any time. Your continued use signifies acceptance of such
          changes. You must not use services for illegal or harmful
          purposes.
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
          <p>Thank you for visiting Mobiperform.com!</p>
        </motion.div>
      </div>

      {/* Decorative background blur circles */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-30 -z-10" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-300 rounded-full blur-3xl opacity-20 -z-10" />
    </section>
  );
}
