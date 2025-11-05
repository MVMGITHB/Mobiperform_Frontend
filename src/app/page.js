import Home1 from "@/components/Home/Home";
import Image from "next/image";


export const metadata = {
  title: "Mobile & Performance Marketing Agency | Mobiperform",
  description:
    "We’re a mobile performance marketing agency helping brands drive installs, engagement, and ROI through precise campaigns",
    
  alternates: {
    canonical: "https://mobiperform.com",
  },
  openGraph: {
    title: "Mobile & Performance Marketing Agency | Mobiperform",
    description:
      "We’re a mobile performance marketing agency helping brands drive installs, engagement, and ROI through precise campaigns",
    url: "https://mobiperform.com",
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

export default function Home() {


const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Corporation",
  "name": "MobiPerform",
  "url": "https://mobiperform.com/",
  "logo": "https://mobiperform.com/images/logo.webp",
  "sameAs": [
    "https://www.facebook.com/mobiperform",
    "https://www.instagram.com/mobiperform/"
  ]
};

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
       {
        "@type": "ListItem",
        position: 3,
        name: "publisher",
        item: "https://mobiperform.com/publisher",
      },
      {
        "@type": "ListItem",
        position:4,
        name: "contact",
        item: "https://mobiperform.com/contact",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "register",
        item: "https://mobiperform.com/register",
      },
      {
        "@type": "ListItem",
        position: 6,
        name: "login",
        item: "https://mobiperform.com/login",
      },
    ],
  };

  return (
    <div className="">
      {/* //add organizationSchema */}
     <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

       <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Home1 />
    </div>
  );
}
