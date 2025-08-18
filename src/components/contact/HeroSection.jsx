"use client";
import Header from "../home/Header";

export default function HeroSection({ isScrolled }) {
  return (
    <>
     
      <div className="global-container">
        <div className="fleet-hero__content">
          <h2 className="fleet-hero__subtitle">
            Let’s Move Forward, Together.
          </h2>
          <p className="subheading">
            Whether you're looking to optimize your freight operations, explore
            a strategic partnership, or simply ask a question, our team is ready
            to support you.
          </p>
        </div>
      </div>
    </>
  );
}
