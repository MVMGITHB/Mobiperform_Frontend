import PrivacyPolicy from "@/pages/PrivacyPolicy";
import React from "react";

export const metadata = {
  title: "Mobiperform Privacy Policy | How We Protect Your Information",
  description:
    "Mobiperform’s Privacy Policy explains what information we collect, how we use it, and your rights regarding your data.",
  alternates: {
    canonical: "https://mobiperform.com/privacy-policy",
  },
  openGraph: {
    title: "Mobiperform Privacy Policy | How We Protect Your Information",
    description:
      "Mobiperform’s Privacy Policy explains what information we collect, how we use it, and your rights regarding your data.",
    url: "https://mobiperform.com/privacy-policy",
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
      <PrivacyPolicy />
    </div>
  );
}

export default page;
