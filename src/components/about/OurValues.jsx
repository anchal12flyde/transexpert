"use client";

import { useEffect, useRef, useState } from "react";

export default function CardsSection() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Detect which card is currently in view
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const cardWidth = container.firstChild.offsetWidth + 16; // card + gap
      const scrollLeft = container.scrollLeft;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(index);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const cards = [
    {
      img: "https://ik.imagekit.io/a9uxeuyhx/IMG1.png?updatedAt=1757409696161",
      heading: "Cohesion",
      text: "We operate as one synchronized unit, between teams, with clients, and across borders.",
    },
    {
      img: "https://ik.imagekit.io/a9uxeuyhx/IMG4.png?updatedAt=1757409824788",
      heading: "Reliability",
      text: "With a 98.7% on-time delivery rate, we prove consistency is not a goal, it’s a standard.",
    },
    {
      img: "https://ik.imagekit.io/a9uxeuyhx/IMG3.png?updatedAt=1757409913018",
      heading: "Modernization",
      text: "We invest in advanced  technologies, and sustainable practices that move the industry forward.",
    },
  ];

  return (
    <section className="cards-section global-container  mt-[42px] sm:mt-[78px]">
      <h2 className="core_heading ">Our Core Values</h2>
      <div className="cards-container mt-[20px] mb-[0] sm:mb-[78px]" ref={containerRef}>
        {cards.map((card, index) => (
          <div className="value bshadow" key={index}>
            <img src={card.img} alt={card.heading} className="card-image" />
            <div className="card-text">
              <h3 className="card_heading">{card.heading}</h3>
              <p className="card_subheading">{card.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Dot indicators (visible only on small screens) */}
      <div className="dot-indicators">
        {cards.map((_, index) => (
          <span
            key={index}
            className={`dot ${activeIndex === index ? "active" : ""}`}
          />
        ))}
      </div>
    </section>
  );
}
