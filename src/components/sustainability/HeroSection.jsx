"use client";
import HeroSectionComponent from "../globalcomponents/HeroSectionComponent"


export default function HeroSection({ isScrolled }) {
  return (
    <>
      <HeroSectionComponent
        imageSrc="/images/sustainability.jpg"
        title={`Driven by Purpose, Powered by People,  
          Committed to the Planet`}
        subtitle="Our Commitment to Corporate 
        Social Responsibility
        "
        description="We operate with a deep sense of purpose for our employees, our communities, our clients, and the planet. Our CSR framework focuses on eight core pillars."
        isScrolled={isScrolled}
      />
    </>
  );
}
