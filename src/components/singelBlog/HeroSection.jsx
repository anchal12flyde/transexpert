"use client";

import { useEffect, useRef, useState } from "react";
import Header from "../home/Header";
import parse from "html-react-parser";
import Image from "next/image";

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

    const calculateHeight = () => {
      const overlayHeight = overlayEl.offsetHeight;
      const offsetFromTopViewport = overlayEl.getBoundingClientRect().top;
      const offsetFromTopDocument = offsetFromTopViewport + window.scrollY;
      const calculatedValue = offsetFromTopDocument + (overlayHeight + 78) / 2;

      setCalcValue(overlayHeight);

      console.log("Overlay Height:", overlayHeight);
      console.log("Calculated Center Value:", calculatedValue);
    };

    calculateHeight();
    window.addEventListener("resize", calculateHeight);

    const resizeObserver = new ResizeObserver(() => calculateHeight());
    resizeObserver.observe(overlayEl);

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
            <div className="blogs-details">
              {parse(post?.content?.rendered || "", {
                replace: (domNode) => {
                  if (domNode.name === "img") {
                    const { src, alt } = domNode.attribs;
                    return (
                      <Image
                        src={src}
                        alt={alt || "blog-image"}
                        width={800}
                        height={500}
                        className="rounded-md w-full h-auto my-6"
                      />
                    );
                  }
                },
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
