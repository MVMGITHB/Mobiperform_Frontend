import OurService from '@/pages/OurService'
import React from 'react'

export const metadata = {
  title: 'Performance Marketing Services | Mobiperform',
  description:
    'Explore Mobiperform’s performance marketing services designed to drive measurable growth, boost ROI, and scale your brand effectively across digital platforms.',
  keywords: [
    'performance marketing',
    'digital marketing',
    'Mobiperform services',
    'advertising solutions',
    'ROI marketing',
    'growth marketing'
  ],
  alternates: {
    canonical: "https://mobiperform.com/our-service",
  },
  openGraph: {
    title: 'Performance Marketing Services | Mobiperform',
    description:
      'Discover Mobiperform’s performance marketing services that help advertisers scale campaigns and achieve higher ROI with data-driven precision.',
    url: 'https://mobiperform.com/ourservice',
    siteName: 'Mobiperform',
    images: [
      {
        url: 'https://mobiperform.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mobiperform Services',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Performance Marketing Services | Mobiperform',
    description:
      'Mobiperform offers data-driven performance marketing solutions that help advertisers grow and maximize ROI.',
    images: ['https://mobiperform.com/og-image.jpg'],
  },
};

const Page = () => {
  return (
    <div>
      <OurService />
    </div>
  );
};

export default Page;
