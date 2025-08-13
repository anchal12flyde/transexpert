"use client";

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
      {!isScrolled && (
        <div
          className={`fixed top-0 left-0 w-full z-50 transition-all duration-300`}
        >
          <Header />
        </div>
      )}
      <div className="fleet-hero__image-wrap">
        <img
          src={imageSrc}
          alt="Fleet background"
          className="fleet-hero__image"
        />

        <div className="fleet-hero__overlay">
          <h1 dangerouslySetInnerHTML={{ __html: title }} />
        </div>
      </div>

      <div className="global-container">
        <div className="fleet-hero__content">
          <h2 className="fleet-hero__subtitle">{subtitle}</h2>
          <p className="subheading">{description}</p>
        </div>
      </div>
    </section>
  );
}
