import AdvertiserPage from "@/components/AdvertiserCardHomePage/AdvertiserPage";
import Advertiser from "@/pages/Advertiser";
import React from "react";

export const metadata = {
  title: "Mobiperform: Performance Marketing That Scales",
  description:
    "Advertise smarter with Mobiperform — acquire quality users, increase installs, and achieve high ROI with transparent performance marketing.",
  alternates: {
    canonical: "https://mobiperform.com/advertiser",
  },
  openGraph: {
    title: "Mobiperform: Performance Marketing That Scales",
    description:
      "Advertise smarter with Mobiperform — acquire quality users, increase installs, and achieve high ROI with transparent performance marketing.",
    url: "https://mobiperform.com/advertiser",
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
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://mobiperform.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "advertiser",
        item: "https://mobiperform.com/advertiser",
      },
    ],
  };

  return (
    <div>
      {/* // add breadcrumbSchema  */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Advertiser />
    </div>
  );
}

export default page;
