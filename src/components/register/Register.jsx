"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Register() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const API_URL = "https://api.mobiperform.com/api/auth/register";
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.message?.toLowerCase().includes("already")) {
          throw new Error(
            "An account with this email or phone number already exists. Please log in."
          );
        }
        throw new Error(data.message || "Registration failed");
      }

      toast.success(data.message || "✅ Registration successful!");
      setForm({ name: "", email: "", phone: "", password: "" });
      setTimeout(() => router.push("/login"), 2000);
    } catch (err) {
      toast.error(`❌ ${err.message || "Something went wrong"}`, {
        position: "top-center",
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center lg:flex-row md:flex-row">
      {/* Left Side Image */}
      <div className="w-full mt-4 lg:w-1/2 lg:mt-0 bg-white flex justify-center items-center">
        <img
          src="/images/loginandregisterpage/signInImage.webp" // <-- change image path here
          alt="Register illustration"
          sizes=""
          className="w-full h-full lg:w-3/4 object-contain"
        />
      </div>

      {/* Right Side Form */}
      <div className="w-full lg:w-1/2">
        <div className="flex items-center justify-center max-h-screen lg:min-h-screen bg-[#0575E6] lg:px-4">
          {/* Toast Notifications */}
          <ToastContainer position="top-right" autoClose={3000} />

          <div className="bg-white w-full lg:w-2/3  max-w-md lg:rounded-2xl shadow-lg p-8">
            <h1 className="text-3xl sm:text-4xl font-semibold text-start text-gray-800 mb-8">
              Create Account
            </h1>

            <form onSubmit={handleSubmit} className="space-y-5">
             <div className="flex flex-col lg:flex-row gap-2 justify-center content-center">
               {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border text-black border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="example@email.com"
                  className="w-full px-4 py-3 border text-black border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
             </div>

             <div className="flex flex-col lg:flex-row gap-2 justify-center content-center">
               {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={(e) => {
                    const cleaned = e.target.value.replace(/[^0-9+]/g, "");
                    setForm({ ...form, phone: cleaned });
                  }}
                  required
                  placeholder="+91-9999999999"
                  maxLength="15"
                  className="w-full px-4 py-3 border text-black border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  required
                  placeholder="Enter password"
                  className="w-full px-4 py-3 border text-black border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div> 
             </div>

              {/* Consent */}
              <div className="flex items-start space-x-3 mt-4">
                <input
                  type="checkbox"
                  name="consent"
                  required
                  className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label className="text-sm text-gray-600 leading-snug">
                  I agree to receive communication regarding offers and products
                  through{" "}
                  <span className="font-medium">Call, E-mail, SMS, WhatsApp</span>{" "}
                  etc. from <span className="font-medium">mobiperform.com</span> & its partners.
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium text-lg hover:bg-blue-700 transition duration-200 disabled:opacity-70"
              >
                {loading ? "Creating Account..." : "Register"}
              </button>
            </form>

            <p className="text-center text-gray-600 text-sm mt-6">
              Already have an account?{" "}
              <a
                href="/login"
                className="text-blue-600 font-medium hover:underline"
              >
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
