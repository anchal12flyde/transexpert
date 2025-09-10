"use client";

import { useEffect, useRef } from "react";
import Header from "../home/Header";

export default function SingleBlogHero({
  isScrolled,
  setCalcValue,
  calcValue,
  post,
}) {
  const overlayRef = useRef(null);

  useEffect(() => {
    if (!overlayRef.current) return;

    const overlayEl = overlayRef.current;

    // helper function to calculate height
    const calculateHeight = () => {
      const overlayHeight = overlayEl.offsetHeight;

      // viewport se distance
      const offsetFromTopViewport = overlayEl.getBoundingClientRect().top;

      // document ke top se distance
      const offsetFromTopDocument = offsetFromTopViewport + window.scrollY;

      // center point calculation
      const calculatedValue = offsetFromTopDocument + (overlayHeight + 78) / 2;

      setCalcValue(overlayHeight);

      console.log("Overlay Height:", overlayHeight);
      console.log("Calculated Center Value:", calculatedValue);
    };

    // 1. run on mount
    calculateHeight();

    // 2. recalc on resize
    window.addEventListener("resize", calculateHeight);

    // 3. recalc when overlay itself changes (dynamic content)
    const resizeObserver = new ResizeObserver(() => calculateHeight());
    resizeObserver.observe(overlayEl);

    // cleanup
    return () => {
      window.removeEventListener("resize", calculateHeight);
      resizeObserver.disconnect();
    };
  }, [setCalcValue]);

  return (
    <section className="single-blog-hero">
      {!isScrolled && (
        <div className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
          <Header />
        </div>
      )}

      <div className="global-container">
        <div
          className="single-blog-overlay border border-transparent"
          ref={overlayRef}
        >
          <div className="blog-card bshadow">
            <h1>{post?.title?.rendered}</h1>
            <p className="blog-meta">
              <span className="author-name">
                {post?._embedded?.author?.[0]?.name || "Unknown Author"}
              </span>
              <span className="blog-date">
                {new Date(post?.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </p>
            <div
              className="blogs-details"
              dangerouslySetInnerHTML={{ __html: post?.content?.rendered }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
