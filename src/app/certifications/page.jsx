"use client";
import Header from "@/components/home/Header";
import HeroSection from "@/components/certifications/HeroCertificate";
import RecognizedCertifications from "@/components/certifications/RecognizedCertifications";
import Liability from "@/components/certifications/Liability";
import Footer from "@/components/footer/page";
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
    <div className="mainCon" ref={containerRef}>
      {/* <Header /> */}
      {isScrolled && <Header isScrolled={isScrolled} />}
      <HeroSection isScrolled={isScrolled} />
      <RecognizedCertifications />
      <Liability />
      <Footer />
    </div>
  );
}
