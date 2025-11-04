import ContactForm from "@/components/Contact/Contact";
import React from "react";


export const metadata = {
  title: "Mobiperform Contact Page | Get in Touch Today",
  description:
    "Have questions or need support? Contact Mobiperform’s team for quick assistance and partnership inquiries.",
  alternates: {
    canonical: "https://mobiperform.com/contact",
  },
  openGraph: {
    title: "Mobiperform Contact Page | Get in Touch Today",
    description:
      "Have questions or need support? Contact Mobiperform’s team for quick assistance and partnership inquiries.",
    url: "https://mobiperform.com/contact",
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
        item: "https://mobiperform.com/contact",
      },
    ],
  };


  return (
    <div>
      {/* add breadcrumbSchema  */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      <ContactForm />
    </div>
  );
}

export default page;
