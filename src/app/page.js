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
  return (
    <div className="">
      <Home1 />
    </div>
  );
}
