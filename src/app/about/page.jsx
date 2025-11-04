import AboutUs from "@/pages/AboutUs";
import React from "react";


export const metadata = {
  title: "About Mobiperform -  Your Growth Engine for Performance Marketing",
  description:
    "Discover how Mobiperform helps advertisers and publishers achieve measurable growth through transparent, performance-driven marketing",
  alternates: {
    canonical: "https://mobiperform.com/about",
  },
  openGraph: {
    title: "About Mobiperform -  Your Growth Engine for Performance Marketing",
    description:
      "Discover how Mobiperform helps advertisers and publishers achieve measurable growth through transparent, performance-driven marketing",
    url: "https://mobiperform.com/about",
    siteName: "mobiperform",
    images: [
      {
        url: "https://mobiperform.com/images/logo.webp", // 🔁 Replace with actual OG image
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
      <AboutUs />
    </div>
  );
}

export default page;
