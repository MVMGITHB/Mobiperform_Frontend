import Script from "next/script";
import Home1 from "@/components/Home/Home";

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
        url: "https://mobiperform.com/images/logo.webp",
        width: 1200,
        height: 630,
        alt: "mobiperform Hero Banner",
      },
    ],
    type: "website",
  },
};

export default function Home() {
  // const organizationSchema = {
  //   "@context": "https://schema.org",
  //   "@type": "Corporation",
  //   "name": "MobiPerform",
  //   "url": "https://mobiperform.com/",
  //   "logo": "https://mobiperform.com/images/logo.webp",
  //   "sameAs": [
  //     "https://www.facebook.com/mobiperform",
  //     "https://www.instagram.com/mobiperform/",
  //   ],
  // };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MobiPerform",
    url: "https://mobiperform.com/",
    logo: "https://mobiperform.com/images/logo.webp",
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: "contact@mobiperform.com",
        contactType: "customer service",
        areaServed: "Worldwide",
        availableLanguage: ["English"],
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://mobiperform.com/",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Advertiser",
        "item": "https://mobiperform.com/advertiser",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Publisher",
        "item": "https://mobiperform.com/publisher",
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Contact",
        "item": "https://mobiperform.com/contact",
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Register",
        "item": "https://mobiperform.com/register",
      },
      {
        "@type": "ListItem",
        "position": 6,
        "name": "Login",
        "item": "https://mobiperform.com/login",
      },
    ],
  };

  return (
    <>
      {/* ✅ Use Next.js <Script> for proper JSON-LD output */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <Home1 />
    </>
  );
}
