import Register from '@/components/register/Register'
import React from 'react'

export const metadata = {
  title: "Register | Mobiperform - Start Your Mobile Marketing Journey",
  description:
    "Create your Mobiperform account and start optimizing your mobile performance campaigns. Join our platform to access analytics, campaign tracking, and performance growth tools.",
  metadataBase: new URL("https://mobiperform.com"),
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "Register | Mobiperform - Start Your Mobile Marketing Journey",
    description:
      "Sign up to Mobiperform and unlock tools for mobile performance marketing success. Manage campaigns, track results, and grow your app effectively.",
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
