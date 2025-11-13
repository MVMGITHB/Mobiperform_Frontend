// app/blogs/page.jsx (or wherever your Blog page is)

import { Blog } from "@/components/blog/Blog";
import Script from "next/script";

export const metadata = {
  title: "Mobiperform Blog | Mobile Performance Marketing Insights & Strategies",
  description:
    "Explore expert blogs on mobile performance marketing, user acquisition, app growth, and monetization trends",
  metadataBase: new URL("https://mobiperform.com"),
  alternates: {
    canonical: "https://mobiperform.com/blogs",
  },
  openGraph: {
    title: "Mobiperform Blog | Mobile Performance Marketing Insights & Strategies",
    description:
      "Explore expert blogs on mobile performance marketing, user acquisition, app growth, and monetization trends",
    url: "https://mobiperform.com/blogs",
    siteName: "Mobiperform",
    images: [
      {
        url: "https://mobiperform.com/blog-banner.jpg", 
        width: 1200,
        height: 630,
        alt: "Mobiperform Blog Banner",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobiperform Blog | Mobile Performance Marketing Insights & Strategies",
    description:
      "Latest mobile performance marketing news, user acquisition tips, and app growth insights by Mobiperform.",
    images: ["https://mobiperform.com/blog-banner.jpg"],
    creator: "@Mobiperform", 
  },
  robots: {
    index: true,
    follow: true,
  },
};

const Page = () => {
  return (
    <div className="px-4 py-8 bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Main heading for SEO */}
      <h1 className="text-3xl sm:text-4xl font-bold text-blue-600 text-center mb-8">
        <span className="text-gray-900">Mobiperform</span> Blogs
      </h1>

      {/* Blog list section */}
      <Blog url="blogs" />

      {/* Structured Data for SEO */}
      <Script id="structured-data" type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "Mobiperform Blog",
          "url": "https://mobiperform.com/blogs",
          "description": "Insights and strategies on mobile performance marketing, app monetization, and growth marketing.",
          "publisher": {
            "@type": "Organization",
            "name": "Mobiperform",
            "url": "https://mobiperform.com",
            "logo": {
              "@type": "ImageObject",
              "url": "https://mobiperform.com/logo.png"
            }
          },
          "inLanguage": "en",
          "blogPost": []
        }
        `}
      </Script>
    </div>
  );
};

export default Page;
