"use client";
import axios from "axios";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactSection() {
  const [captchaToken, setCaptchaToken] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    phone: "",
    services: [],
    comment: "",
  });

  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle checkbox
  const handleServiceChange = (service) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  console.log("token is " , captchaToken)

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if(!captchaToken){
      toast.error("Please Veriy The Captcha")
      return
    }

    try {
      //change actual api link 
      const response = await axios.post("https://api.mobiperform.com/api/forms/create", formData);

      if (response.data) {
        toast.success(response.data.message || "✅ Form submitted successfully!");
        setFormData({
          name: "",
          email: "",
          website: "",
          phone: "",
          services: [],
          comment: "",
        });
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("❌ Error submitting form:", error);
      toast.error("Failed to submit form. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 border border-gray-200 border-rounded rounded-xl my-5 space-y-12 bg-white text-black  transition-colors duration-300">
      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />

      {/* Header */}
      <div className="text-center bg-white">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600  mb-4">
          <span className="text-gray-900">Talk to Our</span> Expert
        </h1>
        <p className="text-gray-900  text-base sm:text-lg lg:text-xl leading-relaxed max-w-6xl mx-auto">
          At{" "}
          <span className="text-blue-600 ">Mobiperform</span>, we’re passionate{" "}
          <span className="text-blue-600 ">about</span>{" "}
          helping businesses grow through powerful{" "}
          <span className="text-blue-600 ">
            mobile marketing
          </span>{" "}
          solutions.
        </p>
      </div>

      {/* Form + Info Section */}
      <div className="flex flex-col bg-white lg:flex-row gap-8">
        {/* Form */}
        <div className="flex-1 bg-gray-50  rounded-lg p-6 sm:p-8 shadow-md">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-bold text-gray-700  mb-2">
                Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="John"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-4 border border-gray-300  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 "
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-bold text-gray-700  mb-2">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="john.doe@domain.com"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-4 border border-gray-300  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 "
              />
            </div>

            {/* Website */}
            <div>
              <label className="block text-sm font-bold text-gray-700  mb-2">
                Website<span className="text-red-500">*</span>
              </label>
              <input
                type="url"
                name="website"
                placeholder="www.domain.com"
                value={formData.website}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-4 border border-gray-300  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-bold text-gray-700  mb-2">
                Phone Number<span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="+91 9876543210"
                pattern="^\+?[0-9]{7,15}$"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-4 border border-gray-300  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 "
              />
            </div>

            {/* Services */}
            <div>
              <label className="block text-sm font-bold text-gray-700  mb-2">
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
                    <span className="text-gray-700  text-sm">{service}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Comment */}
            <div>
              <label className="block text-sm font-bold text-gray-700  mb-2">
                Comment
              </label>
              <textarea
                name="comment"
                placeholder="Message..."
                value={formData.comment}
                onChange={handleInputChange}
                rows={5}
                className="w-full px-3 py-2 border border-gray-300  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none "
              />
            </div>

            <div className="flex justify-start">
               <ReCAPTCHA
                     sitekey="6LfXEP0rAAAAAAd8KLvECy4thFW6MPzKHwcMrdTl" 
                     onChange={(token) => setCaptchaToken(token)}
                   />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white py-3 rounded-md font-medium hover:bg-gray-900 dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors disabled:opacity-70"
            >
              {loading ? "Submitting..." : "SEND"}
            </button>
          </form>
        </div>

        {/* Why Mobiperform Section */}
        <div className="flex-1 max-w-full border border-gray-300  rounded-2xl p-6">
          <h2 className="text-3xl text-center sm:text-4xl font-bold text-blue-600  mb-8">
            <span className="text-gray-900">Why</span> Mobiperform?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: "Experts", desc: "Get support from mobile marketing specialists or run your campaigns independently." },
              { title: "API", desc: "Automate campaign setup, tracking, and reporting with advanced APIs." },
              { title: "Analytics", desc: "Track installs, clicks, and actions in real-time with performance insights." },
              { title: "Flexibility", desc: "Boost ROI with CPI, CPC, CPA, and CPM models tailored to your goals." },
            ].map((item) => (
              <div key={item.title} className="border border-gray-300  rounded-lg p-5 text-center shadow-sm">
                <h3 className="font-bold text-blue-600  mb-2">{item.title}</h3>
                <p className="text-gray-700  text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
