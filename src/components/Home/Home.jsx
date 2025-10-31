import React from "react";
import HeroSection from "../HeroSection.jsx/HeroSection";
import AdvertisersPublishers from "../AdvertiserCardHomePage/Cards";
import OurStrengths from "./OurStrength";
import WhyMobileMatters from "./WhyMobileMatters";
import OurIntegrations from "../ourIntegrations/OurIntegrations";

function Home1() {
  return (
    <div className="w-full">
      <HeroSection />
      <WhyMobileMatters />
      <OurStrengths />
      <OurIntegrations />
      <AdvertisersPublishers />
    </div>
  );
}

export default Home1;
