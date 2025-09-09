"use client";

import Header from "../home/Header";

export default function HeroSectionComponent({ isScrolled }) {
  return (
    <>
      {!isScrolled && (
        <div
          className={`fixed top-0 left-0 w-full z-50 transition-all duration-300`}
        >
          <Header />
        </div>
      )}
      <section className="fleet-hero">
        <div className="fleet-hero__image-wrap">
          <img
            src="https://ik.imagekit.io/a9uxeuyhx/industries%20hero.png?updatedAt=1757414189856"
            alt="Fleet background"
            className="fleet-hero__image"
          />

          <div className="fleet-hero__overlay">
            <h1>Industries We serve</h1>
          </div>
        </div>
      </section>
    </>
  );
}
