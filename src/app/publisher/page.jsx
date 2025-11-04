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
        name: "publisher",
        item: "https://mobiperform.com/publisher",
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

      <Publisher />
    </div>
  );
}

export default page;
