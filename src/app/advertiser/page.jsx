import AdvertiserPage from "@/components/AdvertiserCardHomePage/AdvertiserPage";
import Advertiser from "@/pages/Advertiser";
import React from "react";

export const metadata = {
  title: "Performance Marketing for Advertisers | Scale with Mobiperform",
  description:
    "Advertise smarter with Mobiperform — acquire quality users, increase installs, and achieve high ROI with transparent performance marketing.",
  alternates: {
    canonical: "https://mobiperform.com/advertiser",
  },
  openGraph: {
    title: "Performance Marketing for Advertisers | Scale with Mobiperform",
    description:
      "Advertise smarter with Mobiperform — acquire quality users, increase installs, and achieve high ROI with transparent performance marketing.",
    url: "https://mobiperform.com/advertiser",
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
      <Advertiser />
    </div>
  );
}

export default page;
