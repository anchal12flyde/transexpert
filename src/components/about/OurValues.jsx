"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function CardsSection() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Detect which card is currently in view (mobile scroll logic)
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
      img: "/images/assets/IMG1.png",
      heading: "Cohesion",
      text: "We operate as one synchronized unit, between teams, with clients, and across borders.",
    },
    {
      img: "/images/assets/IMG4.png",
      heading: "Reliability",
      text: "With a 98.7% on-time delivery rate, we prove consistency is not a goal, it’s a standard.",
    },
    {
      img: "/images/assets/IMG3.png",
      heading: "Modernization",
      text: "We invest in advanced  technologies, and sustainable practices that move the industry forward.",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: i * 0.2, // index ke hisaab se delay
      },
    }),
  };
  

  return (
    <section className="cards-section global-container mt-[42px] sm:mt-[78px]">
      <h2 className="heading">Our Core Values</h2>
      <div
        className="cards-container mt-[20px] mb-[0] sm:mb-[78px]"
        ref={containerRef}
      >
        {cards.map((card, index) => (
          <motion.div
            className="value bshadow"
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }} // 20% visible hone par trigger
          >
            <img src={card.img} alt={card.heading} className="card-image" />
            <div className="card-text">
              <h3 className="card_heading">{card.heading}</h3>
              <p className="card_subheading">{card.text}</p>
            </div>
          </motion.div>
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
