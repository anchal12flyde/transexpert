"use client";

import { useEffect, useRef, useState } from "react";
import Header from "../home/Header";

export default function SingleBlogHero({
  isScrolled,
  setCalcValue,
  calcValue,
}) {
  const truckRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    if (overlayRef.current) {
      const overlayEl = overlayRef.current;

      const overlayHeight = overlayEl.offsetHeight;

      // viewport se distance
      const offsetFromTopViewport = overlayEl.getBoundingClientRect().top;

      // document ke top se distance
      const offsetFromTopDocument = offsetFromTopViewport + window.scrollY;

      const calculatedValue = offsetFromTopDocument + (overlayHeight + 78) / 2;

      setCalcValue(overlayHeight);
    }
  }, []);

  return (
    <section className="single-blog-hero">
      {!isScrolled && (
        <div
          className={`fixed top-0 left-0 w-full z-50 transition-all duration-300`}
        >
          <Header />
        </div>
      )}
      <div className="global-container  " ref={overlayRef}>
        <div className="single-blog-overlay ">
          <div className="blog-card">
            <h1 className="hero-heading">
              Why Same-Day Delivery is the Future of Retail Logistics
            </h1>
            <p className="blog-meta">
              <span className="author-name">Ralph Hawkins</span>
              <span className="blog-date">May 2, 2019 (10 min read)</span>
            </p>

            <p className="subheading">
              In today’s fast-paced world, convenience is king. As customer
              expectations continue to rise, same-day delivery has emerged as a
              game-changer in the retail logistics landscape. What was once
              considered a luxury is now becoming a standard offering, and for
              good reason.
            </p>
            <br />
            <p className="subheading">
              Consumers are no longer willing to wait days for their purchases.
              Whether it's groceries, electronics, or fashion, shoppers want
              their orders delivered almost as quickly as they buy them.
              Same-day delivery bridges the gap between online shopping and
              instant gratification, offering the kind of speed that drives
              customer satisfaction and brand loyalty.
            </p>
            <br />
            <p className="subheading">
              Retailers that invest in same-day delivery gain a significant
              competitive edge. It not only enhances the shopping experience but
              also increases conversion rates and reduces cart abandonment.
              Moreover, it opens doors for local fulfillment strategies,
              allowing businesses to leverage nearby inventory and streamline
              operations.
            </p>
            <br />
            <p className="subheading">
              As e-commerce continues to surge and technology evolves, same-day
              delivery isn’t just a trend — it's the future of retail logistics.
              For businesses aiming to stay ahead, now is the time to adapt,
              optimize, and deliver at the speed of now.
            </p>
            <div className="justify-items-center">
              <p className="author ">
                Arthur Black <br />
              </p>
              <p className="subheading text-thm-author-text"> @arthurblack</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
