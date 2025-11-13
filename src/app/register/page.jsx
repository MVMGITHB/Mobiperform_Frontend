import Register from '@/components/register/Register'
import React from 'react'

export const metadata = {
  title: "Register | Mobiperform - Start Your Mobile Marketing Journey",
  description:
    "Create your Mobiperform account to launch and optimize campaigns with powerful analytics, tracking, and performance growth tools.",
  metadataBase: new URL("https://mobiperform.com"),
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "Register | Mobiperform - Start Your Mobile Marketing Journey",
    description:
      "Create your Mobiperform account to launch and optimize campaigns with powerful analytics, tracking, and performance growth tools.",
    url: "https://mobiperform.com/register",
    siteName: "Mobiperform",
    images: [
      {
        url: "https://mobiperform.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mobiperform Registration Page",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Register | Mobiperform - Start Your Mobile Marketing Journey",
    description:
      "Join Mobiperform to access tools and insights that help you improve mobile app marketing performance.",
    images: ["https://mobiperform.com/og-image.jpg"],
  },
};


const page = () => {
  return (
    <div>
      <Register />
    </div>
  )
}

export default page
