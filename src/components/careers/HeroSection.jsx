"use client";
import HeroSectionComponent from "../globalcomponents/HeroSectionComponent";

export default function HeroSection({ isScrolled }) {
  return (
    <>
      <HeroSectionComponent
        imageSrc="/images/sustainability hero image.png"
        title={`Join Our Growing Team`}
        isScrolled={isScrolled}
      />
    </>
  );
}
