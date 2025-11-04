"use client";
import axios from "axios";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "react-toastify";


export default function AdvertiserForm() {
  const [captchaToken, setCaptchaToken] = useState(null);
  const [loading, setLoading] = useState(false);
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
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleServiceChange = (service) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("called ")
    console.log("Form submitted:", formData);


    try {

       if(!captchaToken){
              toast.error("Verify The Captcha")
              return
            }

      const response = await axios.post(
        "https://api.mobiperform.com/api/forms/create", // 🔗 Replace with your API URL
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("respsne  status " , response.status)

      if (response.status === 200 || response.status === 201) {
        toast.success("Form submitted successfully!", {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        console.log("Response:", response.data);

        // Reset form
        setFormData({
          name: "",
          email: "",
          website: "",
          phone: "",
          services: [],
          comment: "",
        });
      }
    } catch (error) {
      console.error("❌ Error submitting form:", error);
      toast.error("❌ Something went wrong. Please try again later.", {
        position: "top-right",
        autoClose: 4000,
      });
    } finally {
      setLoading(false);
    }

  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-gray-50 rounded-lg mt-12 mb-12">
      <h2 className="text-4xl sm:text-3xl font-semibold text-blue-600 mb-8 text-center sm:text-left">
        Tell us about your business
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name and Email Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="John"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-3 py-4 bg-white border border-gray-200 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              E-mail<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="john.doe@domain.com"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-4 bg-white border border-gray-200 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Website and Phone Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Website<span className="text-red-500">*</span>
            </label>
            <input
              type="url"
              name="website"
              placeholder="www.domain.com"
              value={formData.website}
              onChange={handleInputChange}
              className="w-full px-3 py-4 bg-white border border-gray-200 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number<span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="+49 174 111222333"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-3 py-4 bg-white border border-gray-200 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Services and Comment Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-4">
              Services<span className="text-red-500">*</span>
            </label>
            <div className="space-y-3">
              {[
                "Affiliate Marketing for any business",
                "Influencer Marketing at scale",
                "Loyalty Marketing for any business",
                "Mobile Advertising for user acquisition",
                "Contract and pay any external partners",
                "Performance marketing for marketplace sellers",
                "Other",
              ].map((service) => (
                <label
                  key={service}
                  className="flex items-center space-x-3 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={formData.services.includes(service)}
                    onChange={() => handleServiceChange(service)}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">{service}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Comment Section */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Comment
            </label>
            <textarea
              name="comment"
              placeholder="Message..."
              value={formData.comment}
              onChange={handleInputChange}
              rows={8}
              className="w-full px-3 py-4 bg-white border border-gray-200 rounded-md text-gray-700 placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="pt-4 flex justify-start">
           <ReCAPTCHA
        sitekey="6LfXEP0rAAAAAAd8KLvECy4thFW6MPzKHwcMrdTl" 
        onChange={(token) => setCaptchaToken(token)}
      />
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-3 px-4 rounded-full font-medium tracking-wide hover:bg-blue-900 transition-colors duration-200"
          >
            SEND
          </button>
        </div>
      </form>
    </div>
  );
}
