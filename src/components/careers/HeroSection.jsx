"use client";
import HeroSectionComponent from "../globalcomponents/HeroSectionComponent";

export default function HeroSection({ isScrolled }) {
  return (
    <>
      <HeroSectionComponent
        imageSrc="https://ik.imagekit.io/a9uxeuyhx/sustainability%20hero%20image.png?updatedAt=1757503820575"
        title={`Join Our Growing Team`}
        subtitle=" Why Choose Transexpert?        "
        description="We're committed to providing our team members with the support,
        benefits, and opportunities they need to succeed."
        isScrolled={isScrolled}
      />
    </>
  );
}
