import React from 'react'
import {
    FaUniversity,
    FaMoneyBillWave,
    FaCar,
    FaFilm,
    FaHome,
    FaTshirt,
    FaMicrochip,
    FaFutbol,
    FaLandmark,
} from "react-icons/fa";

const BlogCategory = () => {
     const categories = [
            // { href: "/politics", label: "Politics", icon: <FaLandmark />, color: "from-red-500 to-orange-500" },
            // { href: "/finance", label: "Finance", icon: <FaMoneyBillWave />, color: "from-green-500 to-emerald-400" },
            // { href: "/automobile", label: "Automobile", icon: <FaCar />, color: "from-yellow-400 to-amber-500" },
            // { href: "/entertainment", label: "Entertainment", icon: <FaFilm />, color: "from-purple-500 to-pink-500" },
            // { href: "/real-estate", label: "Real Estate", icon: <FaHome />, color: "from-blue-500 to-sky-400" },
            // { href: "/fashion-lifestyle", label: "Fashion & Lifestyle", icon: <FaTshirt />, color: "from-pink-400 to-rose-500" },
            // { href: "/technology", label: "Technology", icon: <FaMicrochip />, color: "from-indigo-500 to-blue-500" },
            { href: "/sports", label: "Sports", icon: <FaFutbol />, color: "from-teal-500 to-cyan-400" },
        ];
    
  return (
     <div className="min-h-screen bg-gray-50 items-center   text-gray-900">


            {/* Category Grid */}
            <section className="container mx-auto px-4 py-8 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                {categories.map((item, index) => (
                    <a
                        key={index}
                        href={item.href}
                        className="flex flex-col items-center justify-center text-center p-6 rounded-xl shadow-md bg-white hover:shadow-xl transition duration-300 transform hover:-translate-y-1 group"
                    >
                        <div
                            className={`w-20 h-20 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white text-3xl mb-4 group-hover:scale-110 transition-transform duration-300`}
                        >
                            {item.icon}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                            {item.label}
                        </h3>
                    </a>
                ))}
            </section>


        </div>
  )
}

export default BlogCategory