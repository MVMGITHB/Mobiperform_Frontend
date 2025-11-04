import Service from '@/components/service/Service'
import React from 'react'

const page = () => {

 const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://mobiperform.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "advertiser",
        item: "https://mobiperform.com/service",
      },
    ],
  };

  return (
    <div>
      {/* // add breadcrumbSchema  */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Service/>
      </div>
  )
}

export default page