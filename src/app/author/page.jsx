import Authors from "@/components/authorSection/Authors";

export const metadata = {
  title: "Meet Our Authors | Mobiperform Blog",
  description:
    "Explore the profiles of expert authors at Mobiperform who share insights on mobile marketing, app growth, and performance strategies. Learn more about their experience and expertise.",
  metadataBase: new URL("https://mobiperform.com"),
  alternates: {
    canonical: "https://mobiperform.com/authors",
  },
  openGraph: {
    title: "Meet Our Authors | Mobiperform Blog",
    description:
      "Discover the marketing professionals and industry experts behind Mobiperform’s insightful blogs.",
    url: "https://mobiperform.com/authors",
    siteName: "Mobiperform",
    images: [
      {
        url: "https://mobiperform.com/og-image.jpg", // replace with real OG image
        width: 1200,
        height: 630,
        alt: "Mobiperform Authors",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meet Our Authors | Mobiperform Blog",
    description:
      "Explore Mobiperform’s authors and their expert insights into mobile performance marketing.",
    images: ["https://mobiperform.com/og-image.jpg"], // replace with your image
  },
};

const Page = () => {
  const authorSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Mobiperform Authors",
    description:
      "List of expert authors from Mobiperform who share marketing, app monetization, and performance insights.",
    url: "https://mobiperform.com/authors",
    itemListElement: [
      {
        "@type": "Person",
        name: "John Doe",
        url: "https://mobiperform.com/author/john-doe",
        image: "https://mobiperform.com/images/authors/john.jpg",
        jobTitle: "Performance Marketing Expert",
        worksFor: {
          "@type": "Organization",
          name: "Mobiperform",
        },
        sameAs: [
          "https://www.linkedin.com/in/johndoe",
          "https://twitter.com/johndoe",
        ],
      },
      {
        "@type": "Person",
        name: "Jane Smith",
        url: "https://mobiperform.com/author/jane-smith",
        image: "https://mobiperform.com/images/authors/jane.jpg",
        jobTitle: "App Growth Specialist",
        worksFor: {
          "@type": "Organization",
          name: "Mobiperform",
        },
        sameAs: [
          "https://www.linkedin.com/in/janesmith",
          "https://twitter.com/janesmith",
        ],
      },
    ],
  };

  return (
    <>
      {/* Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema) }}
      />
      <div className="container mx-auto p-4">
        <Authors />
      </div>
    </>
  );
};

export default Page;
