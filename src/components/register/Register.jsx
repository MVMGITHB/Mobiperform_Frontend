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
    phonenumber: "",
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
      // 🧩 Replace this with your actual API endpoint
      const API_URL = "https://api.mobiperform.com/api/auth/register";

      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Registration failed");

      toast.success(data.message || "✅ Registration successful!");
      setForm({ name: "", email: "", phonenumber: "", password: "" });

      // Redirect to login after a short delay
      setTimeout(() => router.push("/login"), 2000);
    } catch (err) {
      toast.error(`❌ ${err.message || "Something went wrong"}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 px-4 sm:px-6 md:px-10 py-10">
      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={3000} />

      {/* Left Side Image */}
      <div className="flex justify-center items-center w-full md:w-1/2 mb-8 md:mb-0">
        <img
          src="/images/l&rImage/registerImage.webp"
          alt="Register on Mobiperform"
          loading="eager"
          className="w-3/4 sm:w-2/3 md:w-4/5 lg:w-3/4 xl:w-2/3 h-auto object-contain drop-shadow-lg rounded-xl"
        />
      </div>

      {/* Right Side Form */}
      <div className="w-full md:w-1/2 max-w-md bg-white rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 transition-all duration-300 hover:shadow-blue-200">
        <h1 className="text-3xl sm:text-4xl font-semibold text-center text-gray-800 mb-6">
          Create Account
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
              className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="example@email.com"
              className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-400"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="phonenumber"
              value={form.phonenumber}
              onChange={(e) => {
                const cleaned = e.target.value.replace(/[^0-9+]/g, "");
                setForm({ ...form, phonenumber: cleaned });
              }}
              required
              placeholder="+1 9876543210"
              // pattern="^\\+?[0-9]{10,13}$"
              maxLength="15"
              className="w-full px-4 py-3 border border-gray-300 text-gray-900 rounded-lg 
              focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-400"
            />
            <p className="text-xs text-gray-500 mt-1">
              Enter a valid phone number
            </p>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              placeholder="Enter password"
              className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-400"
            />
          </div>

          {/* Consent Checkbox */}
          <div className="flex items-start space-x-3 mt-4">
            <input
              type="checkbox"
              name="consent"
              required
              className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label className="text-sm text-gray-600 leading-snug">
              I agree to receive communication regarding various offers and
              products through{" "}
              <span className="font-medium">Call, E-mail, SMS, WhatsApp</span>{" "}
              etc. from <span className="font-medium">mobiperform.com</span> &
              its partners.
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-medium text-lg mt-4 disabled:opacity-70"
          >
            {loading ? "Creating Account..." : "Register"}
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 font-medium hover:underline">
            Login
          </a>
        </p>
      </div>
    </section>
  );
}
