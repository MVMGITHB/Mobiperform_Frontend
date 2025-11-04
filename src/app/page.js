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
        url: "https://mobiperform.com/images/logo.png", // 🔁 Replace with actual OG image
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
  "logo": "https://mobiperform.com/images/logo.png",
  "sameAs": [
    "https://www.facebook.com/mobiperform",
    "https://www.instagram.com/mobiperform/"
  ]
};


  return (
    <div className="">
      {/* //add organizationSchema */}
     <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <Home1 />
    </div>
  );
}
