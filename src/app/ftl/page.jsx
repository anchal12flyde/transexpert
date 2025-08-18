"use client"

import WeAreDifferent from "@/components/ftl/differentComp";
import HeroSectionFTL from "@/components/ftl/HeroFtl";
import StripFtl from "@/components/ftl/stripComp";
import TruckImageSection from "@/components/ftl/TruckImageSection";
import Header from "@/components/home/Header";
import Footer from "@/components/footer/page";
import { useEffect, useRef, useState } from "react";

export default function FTL() {
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
        {isScrolled && <Header isScrolled={isScrolled} />}
        <HeroSectionFTL isScrolled={isScrolled} />
        <TruckImageSection />
        <StripFtl />
        <WeAreDifferent />
        <Footer/>
      </div>
    
  );
}
