"use client";
import HeroSectionComponent from "../globalcomponents/HeroSectionComponent";

export default function HeroSection({ isScrolled }) {
  return (
    <>
      <HeroSectionComponent
        imageSrc="/images/industries.png"
        title={`Industries We serve`}
        isScrolled={isScrolled}
      />
    </>
  );
}
