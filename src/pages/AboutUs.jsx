"use client";
import CTASection from "@/components/aboutpage/CTASection";
import Differentiators from "@/components/aboutpage/Differentiators";
import HeroAbout from "@/components/aboutpage/HeroAbout";
import MissionAbout from "@/components/aboutpage/MissionAbout";
import React from "react";

export default function AboutUs() {
  return (
   <div>
    <HeroAbout/>

    <MissionAbout/>
    <Differentiators/>
    <CTASection/>
   </div>
  );
}
