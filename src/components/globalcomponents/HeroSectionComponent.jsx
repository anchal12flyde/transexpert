"use client";

export default function HeroSectionComponent({ imageSrc, title, subtitle, description }) {
  return (
    <section className="fleet-hero">
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
