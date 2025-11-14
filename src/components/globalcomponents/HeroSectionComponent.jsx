"use client";

import Image from "next/image";
import Header from "../home/Header";

export default function HeroSectionComponent({
  imageSrc,
  title,
  subtitle,
  description,
  isScrolled,
}) {
  return (
    <section className="fleet-hero">
      {/* Fixed Header */}
      {!isScrolled && (
        <div className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
          <Header />
        </div>
      )}

      {/* Hero Image */}
      <div className="fleet-hero__image-wrap relative w-full h-[70vh] md:h-[80vh]">
        <Image
          src={imageSrc}
          alt="Fleet background"
          fill
          priority // 👈 HERO IMAGE SHOULD NOT BE LAZY
          className="fleet-hero__image object-cover"
        />

        <div className="fleet-hero__overlay global-container">
          <h1>{title}</h1>
        </div>
      </div>

      {/* Content */}
      <div className="global-container">
        <div className="fleet-hero__content">
          <h2 className="fleet-hero__subtitle">{subtitle}</h2>
          <p className="subheading">{description}</p>
        </div>
      </div>
    </section>
  );
}
