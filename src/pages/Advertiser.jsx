import AdvertiserPage from "@/components/AdvertiserCardHomePage/AdvertiserPage";
import HowItWorks from "@/components/AdvertiserCardHomePage/AdvertiserPart2";
import PerformanceMarketingModel from "@/components/AdvertiserCardHomePage/PerformanceMarketingModel";
import React from "react";

const Advertiser = () => {
  return (
    <div>
      <AdvertiserPage />
      <HowItWorks />
      <PerformanceMarketingModel />
    </div>
  );
};

export default Advertiser;
