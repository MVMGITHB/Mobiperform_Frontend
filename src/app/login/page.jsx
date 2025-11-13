import Login from '@/components/Login/Login'
import React from 'react'

export const metadata = {
  title: "Login | Mobiperform - Access Your Mobile Marketing Dashboard",
  description:
    "Access your Mobiperform account to manage mobile campaigns, analyze results, and track performance in real time",
  metadataBase: new URL("https://mobiperform.com"),
  alternates: {
    canonical: "https://mobiperform.com/login",
  },
  openGraph: {
    title: "Login | Mobiperform - Access Your Mobile Marketing Dashboard",
    description:
      "Access your Mobiperform account to manage mobile campaigns, analyze results, and track performance in real time",
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
      "Access your Mobiperform account to manage mobile campaigns, analyze results, and track performance in real time.",
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
