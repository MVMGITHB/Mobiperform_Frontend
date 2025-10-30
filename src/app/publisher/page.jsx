import Publisher from "@/pages/Publisher.jsx";
import React from "react";


export const metadata = {
  title: "Mobiperform | Smart Monetization for Publishers",
  description:
    "Join Mobiperform to monetize smarter — global offers, transparent reporting, optimized ROI, and fast, reliable payments for publishers.",
  alternates: {
    canonical: "https://mobiperform.com/publisher",
  },
  openGraph: {
    title: "Mobiperform | Smart Monetization for Publishers",
    description:
      "Join Mobiperform to monetize smarter — global offers, transparent reporting, optimized ROI, and fast, reliable payments for publishers.",
    url: "https://mobiperform.com/publisher",
    siteName: "mobiperform",
    images: [
      {
        url: "https://mobiperform.com/images/logo.png", // 🔁 Replace with actual OG image
        width: 1200,
        height: 630,
        alt: "mobiperform Hero Banner",
      },
    ],
    type: "website",
  },
};


function page() {
  return (
    <div>
      <Publisher />
    </div>
  );
}

export default page;
