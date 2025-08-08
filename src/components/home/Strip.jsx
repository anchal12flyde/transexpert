"use client";

import React, { useEffect, useRef, useState } from "react";

export default function Strip() {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          animateCount();
          setHasAnimated(true);
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCount = () => {
    const target = 250;
    const speed = 10;
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev < target) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return target;
        }
      });
    }, speed);
  };

  return (
    <section className="counterSection" ref={ref}>
      <div className="global-container">
        <h2 className="text">
          A Fleet of{" "}
          <span className="number inline-block leading-none">
            {count}
          </span>
          + Vehicles Ready to Move Your Business Forward
        </h2>
      </div>
    </section>
  );
}
