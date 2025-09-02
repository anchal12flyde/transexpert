"use client";
import HeroSectionComponent from "../globalcomponents/HeroSectionComponent";

export default function HeroSection({ isScrolled }) {
  return (
    <>
      <HeroSectionComponent
        imageSrc="/images/fleet hero section.png"
<<<<<<< HEAD
        title={`Engineered for Reliability  Scaled for Growth`}
=======
        title={`Engineered for Reliability \n Scaled for Growth`}
>>>>>>> 7a4f5d335a9da0404c2c283a9bc0bd314b88530d
        subtitle="Fleet Power Behind Every Mile"
        description="At Trans Expert Inc., our fleet isn’t just extensive it’s purpose-built to deliver enterprise-grade performance across North America. Supported by strategically located hubs and advanced fleet intelligence, we offer dependable, scalable logistics solutions."
        isScrolled={isScrolled}
      />
    </>
  );
}
