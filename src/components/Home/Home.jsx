import React from "react";
import HeroSection from "../HeroSection.jsx/HeroSection";
import AdvertisersPublishers from "../AdvertiserCardHomePage/Cards";
import OurStrengths from "./OurStrength";
import WhyMobileMatters from "./WhyMobileMatters";
import OurIntegrations from "../ourIntegrations/OurIntegrations";
import AboutUs from "../aboutSection/AboutUs";
import Whyus from "../whyus/WhyUs";
import Scroll3DAnimation from "./Scroll3DAnimation";

function Home1() {
  return (
    <div className="">
      <HeroSection />
      <WhyMobileMatters />
     
      <AboutUs/>
      
      <OurStrengths />
      <Whyus/>
      <OurIntegrations />
      <AdvertisersPublishers />
       {/* <ThreeDCarousel/> */}
     
      
    </div>
  );
}

export default Home1;
