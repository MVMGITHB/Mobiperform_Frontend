import Login from '@/components/Login/Login'
import React from 'react'

export const metadata = {
  title: "Login | Mobiperform - Access Your Mobile Marketing Dashboard",
  description:
    "Log in to your Mobiperform account to manage mobile performance campaigns, analyze results, and track conversions in real time.",
  metadataBase: new URL("https://mobiperform.com"),
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "Login | Mobiperform - Access Your Mobile Marketing Dashboard",
    description:
      "Sign in to your Mobiperform dashboard to monitor campaign performance, optimize mobile ads, and grow your app effectively.",
    url: "https://mobiperform.com/login",
    siteName: "Mobiperform",
    images: [
      {
        url: "https://mobiperform.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mobiperform Login Page",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Login | Mobiperform - Access Your Mobile Marketing Dashboard",
    description:
      "Log in to Mobiperform to access real-time mobile marketing analytics and manage performance campaigns efficiently.",
    images: ["https://mobiperform.com/og-image.jpg"],
  },
};


const page = () => {
  return (
    <div>
      <Login />
    </div>
  )
}

export default page
