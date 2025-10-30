"use client";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";


export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    phone: "",
    services: [],
    comment: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (service) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = async (e) => {

    console.log("called " )
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/contact", formData);
      // setMessage("Form submitted successfully ✅");
      console.log(response.data);

      // Reset form
      setFormData({
        name: "",
        email: "",
        website: "",
        phone: "",
        services: [],
        comment: "",
      });

      console.log("responsei s" , response.data);
      if(response.data.success){
        toast.success(response.data.message);
      }



    } catch (error) {
      console.log(error);
      // setMessage("Failed to submit form ❌");
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-12 bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
      {/* Header */}
      <div className="text-center">
        {/* //add h1  */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-4">
          Talk to Our Expert
        </h1>
        <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-6xl mx-auto">
          At{" "}
          <span className="text-blue-600 dark:text-blue-400">Mobiperform</span>,
          we’re passionate{" "}
          <span className="text-blue-600 dark:text-blue-400">about</span>{" "}
          helping businesses grow through powerful{" "}
          <span className="text-blue-600 dark:text-blue-400">
            mobile marketing
          </span>{" "}
          solutions. Whether you’re looking to launch an{" "}
          <span className="text-blue-600 dark:text-blue-400">
            affiliate program
          </span>
          , boost app installs, or connect with{" "}
          <span className="text-blue-600 dark:text-blue-400">
            trusted publishers
          </span>
          , our team is here to guide you every step of the way.
        </p>
      </div>

      {/* Form + Cards Section */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Form */}
        <div className="flex-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-6 sm:p-8 shadow-md">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="John"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-white"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="john.doe@domain.com"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-white"
              />
            </div>

            {/* Website */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Website<span className="text-red-500">*</span>
              </label>
              <input
                type="url"
                name="website"
                placeholder="www.domain.com"
                value={formData.website}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-white"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Phone Number<span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="+49 174 111222333"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-white"
              />
            </div>

            {/* Services */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Services<span className="text-red-500">*</span>
              </label>
              <div className="space-y-2">
                {[
                  "Affiliate Marketing for any business",
                  "Influencer Marketing at scale",
                  "Loyalty Marketing for any business",
                  "Mobile Advertising for user acquisition",
                  "Contract and pay any external partners",
                  "Performance marketing for marketplace sellers",
                  "Other",
                ].map((service) => (
                  <label key={service} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={formData.services.includes(service)}
                      onChange={() => handleServiceChange(service)}
                      className="w-4 h-4 text-blue-600 border-gray-300 dark:border-gray-600 rounded focus:ring-blue-500"
                    />
                    <span className="text-gray-700 dark:text-gray-300 text-sm">
                      {service}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Comment */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Comment
              </label>
              <textarea
                name="comment"
                placeholder="Message..."
                value={formData.comment}
                onChange={handleInputChange}
                rows={5}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none dark:bg-gray-900 dark:text-white"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-md font-medium hover:bg-gray-900 dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors"
            >
              SEND
            </button>
          </form>
        </div>

        {/* Card Section */}
        <div className="flex-1 max-w-full border border-gray-300 dark:border-gray-600 rounded-2xl p-6 h-110">
          <h2 className="text-3xl text-center sm:text-4xl lg:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-8">
            Why Mobiperform?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-5 text-center shadow-sm">
              <h3 className="font-bold text-blue-600 dark:text-blue-400 mb-2">
                Experts
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Get support from mobile marketing specialists or run your
                campaigns independently.
              </p>
            </div>

            <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-5 text-center shadow-sm">
              <h3 className="font-bold text-blue-600 dark:text-blue-400 mb-2">
                API
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Automate campaign setup, tracking, and reporting with our
                advanced APIs.
              </p>
            </div>

            <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-5 text-center shadow-sm">
              <h3 className="font-bold text-blue-600 dark:text-blue-400 mb-2">
                Analytics
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Track installs, clicks, and actions in real time with
                performance insights.
              </p>
            </div>

            <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-5 text-center shadow-sm">
              <h3 className="font-bold text-blue-600 dark:text-blue-400 mb-2">
                Flexibility
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Boost ROI with multiple models — CPI, CPC, CPA, and CPM —
                tailored to your goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
