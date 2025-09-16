import React from "react";
import {
  FaDownload,
  FaMousePointer,
  FaShoppingCart,
  FaBullhorn,
  
} from "react-icons/fa";
import { GiClick } from "react-icons/gi";

const marketingModels = [
  {
    icon: <FaDownload className="text-black text-2xl" />,
    title: "CPI",
    subtitle: "Cost Per Install",
    desc: "Pay only for every app install. Drive high-quality users to download and engage with your app.",
  },
  {
    icon: <GiClick className="text-black text-2xl" />,
    title: "CPC",
    subtitle: "Cost Per Click",
    desc: "Drive traffic to your app or site. Pay for clicks and measure intent before conversion.",
  },
  {
    icon: <FaShoppingCart className="text-black text-2xl" />,
    title: "CPA",
    subtitle: "Cost Per Action",
    desc: "Pay only for a completed action like signup, purchase, or subscription — ensuring ROI-driven campaigns.",
  },
  {
    icon: <FaBullhorn className="text-black text-2xl" />,
    title: "CPM",
    subtitle: "Cost Per Mille",
    desc: "Boost awareness with brand visibility. Pay per 1,000 impressions for high reach campaigns.",
  },
];

function PerformanceMarketingModel() {
  return (
    <section className="py-20 bg-white">
      {/* Divider Section - Full Width */}
      <div className="w-full bg-[#EFF4FE] shadow-[0_-6px_12px_-2px_rgba(0,0,0,0.25),0_6px_12px_-2px_rgba(0,0,0,0.25)] py-10 ">
        <h3 className="text-center text-xl sm:text-2xl md:text-5xl popins font-semibold text-blue-600 ">
          Performance Marketing Models We Offer
        </h3>
      </div>

      {/* Cards Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {marketingModels.map((model, index) => (
            <div
              key={index}
              className="bg-blue-50 p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Icon + Title */}
              <div className="flex items-center gap-3 mb-3  ">
                <span>{model.icon}</span>
                <h3 className="text-2xl font-md font-bold text-center  ml-[-20px] w-full text-blue-600">
                  {model.title}
                </h3>
              </div>

              {/* Subtitle */}
              <p className="text-2xl font-medium text-black mb-3">
                {model.subtitle}
              </p>

              {/* Description */}
              <p className="text-black leading-relaxed text-xl">
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
