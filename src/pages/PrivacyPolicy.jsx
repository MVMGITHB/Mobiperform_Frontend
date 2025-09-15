"use client";
import React from "react";

export default function PrivacyPolicy() {
  return (
    <section className="bg-gray-50 text-gray-800 py-16 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600 leading-tight">
            Privacy Policy – Mobiperform
          </h1>
          <p className="text-gray-700 text-lg sm:text-xl">
            Your privacy is our priority. Learn how we protect your data and
            manage your information.
          </p>
        </div>

        {/* Introduction */}
        <div className="space-y-4 text-gray-700">
          <p>
            Welcome to Mobiperform.com (referred to as "we," "us," or "our"). We
            are committed to protecting your privacy and providing a safe online
            experience for all our users. This Privacy Policy outlines the
            information we collect, how we use it, and the choices you have
            regarding your personal information.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {/* 1. Information We Collect */}
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-bold text-blue-600">
              1. Information We Collect
            </h2>
            <p>
              This notice applies to all information collected or submitted on
              our website. Some examples include:
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
          </div>

          {/* 2. How We Use Your Information */}
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-bold text-blue-600">
              2. How We Use Your Information
            </h2>
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
          </div>

          {/* 3. Data Security */}
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-bold text-blue-600">
              3. Data Security
            </h2>
            <p>
              We take reasonable measures to protect your personal information
              from unauthorized access, use, or disclosure. However, no method
              of transmission over the internet or electronic storage is 100%
              secure.
            </p>
          </div>

          {/* 4. Changes to this Privacy Policy */}
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-bold text-blue-600">
              4. Changes to this Privacy Policy
            </h2>
            <p>
              We reserve the right to update or change this Privacy Policy at
              any time. Any changes will be effective immediately upon posting
              the revised Privacy Policy on our website.
            </p>
          </div>

          {/* 5. Your Rights */}
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-bold text-blue-600">
              5. Your Rights
            </h2>
            <p>
              You have the right to access, update, or delete your personal
              information. Contact us if you wish to make changes or request
              deletion.
            </p>
          </div>

          {/* 6. Contact Us */}
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-bold text-blue-600">
              6. Contact Us
            </h2>
            <p>
              If you have any questions or concerns about this Privacy Policy or
              our practices, please contact us at{" "}
              <a
                href="mailto:contact@mobiperform.com"
                className="text-blue-600 underline"
              >
                contact@mobiperform.com
              </a>
              .
            </p>
          </div>

          <div className="text-center text-gray-700 text-lg sm:text-xl mt-6">
            <p>Thank you for choosing Mobiperform.com!</p>
          </div>
        </div>
      </div>
    </section>
  );
}
