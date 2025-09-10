import React from "react";
import {
  FaDownload,
  FaMousePointer,
  FaShoppingCart,
  FaBullhorn,
} from "react-icons/fa";

const marketingModels = [
  {
    icon: <FaDownload className="text-blue-600 text-2xl" />,
    title: "CPI",
    subtitle: "Cost Per Install",
    desc: "Pay only for every app install. Drive high-quality users to download and engage with your app.",
  },
  {
    icon: <FaMousePointer className="text-blue-600 text-2xl" />,
    title: "CPC",
    subtitle: "Cost Per Click",
    desc: "Drive traffic to your app or site. Pay for clicks and measure intent before conversion.",
  },
  {
    icon: <FaShoppingCart className="text-blue-600 text-2xl" />,
    title: "CPA",
    subtitle: "Cost Per Action",
    desc: "Pay only for a completed action like signup, purchase, or subscription — ensuring ROI-driven campaigns.",
  },
  {
    icon: <FaBullhorn className="text-blue-600 text-2xl" />,
    title: "CPM",
    subtitle: "Cost Per Mille",
    desc: "Boost awareness with brand visibility. Pay per 1,000 impressions for high reach campaigns.",
  },
];

function PerformanceMarketingModel() {
  return (
    <section className="py-20 bg-gray-50">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
            Why Mobile <span className="text-blue-600">Matters</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Performance marketing models that drive installs, clicks, actions,
            and awareness — all optimized for ROI.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {marketingModels.map((model, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Icon + Title */}
              <div className="flex items-center gap-3 mb-3">
                {model.icon}
                <h3 className="text-xl font-bold text-gray-900">
                  {model.title}
                </h3>
              </div>

              {/* Subtitle */}
              <p className="text-base font-semibold text-blue-600 mb-3">
                {model.subtitle}
              </p>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-sm">
                {model.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PerformanceMarketingModel;
