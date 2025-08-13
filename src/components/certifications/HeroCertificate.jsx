"use client";
import HeroSectionComponent from "../globalcomponents/HeroSectionComponent";

export default function HeroSection({ isScrolled }) {
  return (
    <>
      <HeroSectionComponent
        imageSrc="/images/certificate.png"
        title={`Built on Trust
          Backed by Standards`}
        subtitle="Our Recognized Certifications        "
        description="At Trans Expert Inc., compliance isn’t an afterthought, it’s the foundation of how we operate. Our certifications are more than checkboxes; they are a daily commitment to safety, security, and performance."
        isScrolled={isScrolled}
      />
    </>
  );
}
