"use client";
import React from "react";

export default function AboutUs() {
  return (
    <section className="bg-gray-50 text-gray-800 py-16 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600 leading-tight">
            Welcome to <span className="text-black">Mobiperform</span> — Your
            Growth Engine for Performance Marketing
          </h1>
          <p className="text-lg sm:text-xl text-gray-700">
            In today’s competitive digital landscape, success is not just about
            reach — it’s about results. At Mobiperform, we focus on delivering
            performance you can measure. Whether you’re an advertiser looking to
            acquire the right users or a publisher seeking to optimize traffic
            monetization, our platform ensures transparency, efficiency, and
            scalability at every step.
          </p>
        </div>

        {/* Mission Section */}
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-600">
            Our Mission
          </h2>
          <p className="text-gray-700 text-lg sm:text-xl">
            Our mission is simple — to create a win-win ecosystem for
            advertisers and publishers:
          </p>
          <ul className="space-y-4 pl-4 list-disc text-gray-700 text-lg sm:text-xl">
            <li>
              <span className="font-semibold">For Advertisers:</span> Acquire
              the right users, optimize campaigns, and deliver the best ROAS
              (Return on Ad Spend).
            </li>
            <li>
              <span className="font-semibold">For Publishers:</span> Maximize
              traffic monetization, ensure reliable attribution, and provide
              timely, guaranteed payouts.
            </li>
          </ul>
        </div>

        {/* Why Choose Us Section */}
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-600">
            Why Choose Mobiperform?
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-lg text-blue-600 mb-2">
                Performance-Driven Approach
              </h3>
              <p className="text-gray-700">
                Every campaign is designed to meet your growth goals with
                measurable ROI.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-lg text-blue-600 mb-2">
                End-to-End Transparency
              </h3>
              <p className="text-gray-700">
                Get real-time data, detailed insights, and complete visibility
                of campaign performance.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-lg text-blue-600 mb-2">
                Global Reach
              </h3>
              <p className="text-gray-700">
                Access diverse traffic sources and connect with millions of
                engaged users worldwide.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-lg text-blue-600 mb-2">
                Trusted Partnerships
              </h3>
              <p className="text-gray-700">
                Work with a network of vetted advertisers and publishers to
                ensure quality and compliance.
              </p>
            </div>
          </div>
        </div>

        {/* Differentiators Section */}
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-600">
            What Makes Us Different?
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-lg text-blue-600 mb-2">
                CPI, CPA, CPR, CPS Expertise
              </h3>
              <p className="text-gray-700">
                Tailored campaigns to suit your KPIs and growth strategy.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-lg text-blue-600 mb-2">
                Fraud-Free Ecosystem
              </h3>
              <p className="text-gray-700">
                Advanced tracking and anti-fraud solutions for clean,
                high-quality traffic.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-lg text-blue-600 mb-2">
                Dedicated Support
              </h3>
              <p className="text-gray-700">
                Our team works with you to optimize campaigns, improve user
                acquisition, and boost ROI.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-6">
            Start Scaling with Mobiperform
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            From user acquisition to revenue optimization, Mobiperform helps you
            turn every click into measurable growth. Whether you’re running CPI
            campaigns or monetizing traffic, we are here to make performance
            marketing simple, scalable, and profitable.
          </p>
          <a
            href="/register"
            className="inline-block px-8 py-4 rounded-full text-lg sm:text-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 transition shadow-lg"
          >
            Partner with Mobiperform Today
          </a>
        </div>
      </div>
    </section>
  );
}
