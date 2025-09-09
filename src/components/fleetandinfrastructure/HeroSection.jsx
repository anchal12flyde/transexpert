"use client";
import HeroSectionComponent from "../globalcomponents/HeroSectionComponent";

export default function HeroSection({ isScrolled }) {
  return (
    <>
      <HeroSectionComponent
        imageSrc="https://ik.imagekit.io/a9uxeuyhx/fleet%20hero%20section.png?updatedAt=1757414618676"
        title={<>Engineered for Reliability Scaled for Growth</>}
        subtitle="Fleet Power Behind Every Mile"
        description="At Trans Expert Inc., our fleet isn’t just extensive it’s purpose-built to deliver enterprise-grade performance across North America. Supported by strategically located hubs and advanced fleet intelligence, we offer dependable, scalable logistics solutions."
        isScrolled={isScrolled}
      />
    </>
  );
}
