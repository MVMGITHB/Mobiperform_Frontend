import TermsOfUse from "@/pages/TermsOfUse";
import React from "react";


export const metadata = {
  title: "Terms of Use – Mobiperform | User Agreement & Legal Policy",
  description:
    "Read Mobiperform’s Terms of Use to understand your rights, responsibilities, and conditions for accessing our services.",
  alternates: {
    canonical: "https://mobiperform.com/terms-of-use",
  },
  openGraph: {
    title: "Terms of Use – Mobiperform | User Agreement & Legal Policy",
    description:
      "Read Mobiperform’s Terms of Use to understand your rights, responsibilities, and conditions for accessing our services.",
    url: "https://mobiperform.com/terms-of-use",
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
      <TermsOfUse />
    </div>
  );
}

export default page;
