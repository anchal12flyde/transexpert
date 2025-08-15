"use client";
import Header from "@/components/home/Header";
import Footer from "@/components/footer/page";
import HeroSection from "@/components/industries/HeroSection";
import Industries from "@/components/industries/IndustriesWork";

import { useEffect, useRef, useState } from "react";
export default function page() {
  const [isScrolled, setIsScrolled] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      setIsScrolled(container.scrollTop > 50);
    };

    // Attach listener to the container
    container.addEventListener("scroll", handleScroll, { passive: true });

    // Call once for initial state
    handleScroll();

    // Cleanup
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
     <div className="mainCon" ref={containerRef}>
           {/* <Header /> */}
           {isScrolled && <Header isScrolled={isScrolled} />}
        <Header isScrolled={isScrolled} />
        <HeroSection />
        <Industries />
        <Footer />
      </div>
    </>
  );
}
