"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const Login = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const API_URL = "https://api.mobiperform.com/api/auth/login";

      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.token) {
        toast.success(" Login successful!");
        if (data.token) localStorage.setItem("token", data.token);
        if (data.user) {
          localStorage.setItem("name", data.user.name);
        }
        setTimeout(() => router.push("/"), 1500);
      } else {
        toast.error(data.message || "❌ Invalid email or password");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center lg:flex-row md:flex-row">
      {/* IMAGE with 3D animation */}
      <motion.div
        className="w-full lg:w-1/2 bg-white flex justify-center items-center"
        style={{ perspective: 1000 }}
        initial={{ x: -250, rotateY: -80, rotateZ: -20, opacity: 0 }}
        animate={{ x: 0, rotateY: 0, rotateZ: 0, opacity: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
      >
        <img
          src="/images/loginandregisterpage/login.webp"
          alt="login images"
          height=""
          width=""
        />
      </motion.div>

      {/* FORM section with 3D animation */}
      <motion.div
        className="w-full lg:w-1/2 bg-[#0575E6]"
        style={{ perspective: 1200 }}
        initial={{ x: -200, rotateY: -70, opacity: 0 }}
        animate={{ x: 0, rotateY: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="flex items-center max-h-screen md:min-h-screen justify-center lg:min-h-screen bg-[#0575E6] lg:px-4 px-0">
          <ToastContainer position="top-right" autoClose={3000} />

          {/* CARD with 3D flip */}
          <motion.div
            className="bg-white w-full lg:w-1/2 max-w-md md:rounded-2xl lg:rounded-2xl shadow-lg p-8 sm:p-10"
            style={{ transformStyle: "preserve-3d" }}
            initial={{ rotateY: -90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            transition={{ duration: 1.6, ease: "easeOut" }}
          >
            <h1 className="text-3xl sm:text-4xl font-semibold text-start text-gray-800 mb-8">
              Login!
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="identifier"
                  value={formData.identifier}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
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
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 border border-gray-300 text-black rounded-2xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium text-lg hover:bg-blue-700 transition duration-200 disabled:opacity-70"
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>

            <p className="text-center text-gray-600 text-sm mt-6">
              Don’t have an account?{" "}
              <a
                href="/register"
                className="text-blue-600 font-medium hover:underline"
              >
                Register
              </a>
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
