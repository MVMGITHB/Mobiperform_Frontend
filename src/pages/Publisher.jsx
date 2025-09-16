import PublisherPage from "@/components/PublisherPage/PublisherHero";
import PublisherForm from "@/components/PublisherPage/PublisherLeadForm";
import OffersSection from "@/components/PublisherPage/PublisherOffer";
import PublisherPart3 from "@/components/PublisherPage/PublisherPart3";
import React from "react";

const Publisher = () => {
  return (
    <div>
      <PublisherPage />
      <OffersSection />
      <PublisherPart3 />
      <PublisherForm />
    </div>
  );
};

export default Publisher;
