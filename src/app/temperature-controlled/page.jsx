"use client";


import { useLoader } from "@/components/GlobalLoader";

import Header from "@/components/home/Header";
import Footer from "@/components/footer/page";
import { useEffect, useRef, useState } from "react";
import services from "@/components/services/services.json";
import HeroSectionFTL from "@/components/tempControlled/HeroFtl";
import TruckImageSection from "@/components/tempControlled/TruckImageSection";
import StripFtl from "@/components/tempControlled/stripComp";
import DifferentComp from "@/components/tempControlled/differentComp";

export default function TempControlled() {
  const [isScrolled, setIsScrolled] = useState(false);
  const containerRef = useRef(null);

  const { PageContentReady, skip } = useLoader();
  useEffect(() => {
    skip("hero");
  }, [skip]);

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

  const data = services.temperatureControlled;

  return (
    <>
    <PageContentReady />
    <div className="mainCon" ref={containerRef}>
      {isScrolled && <Header isScrolled={isScrolled} />}
      <HeroSectionFTL isScrolled={isScrolled} {...data.hero} />
      <TruckImageSection {...data.truckImageSection} />
      <StripFtl {...data.strip} />
      <DifferentComp {...data.weAreDifferent} />
      <Footer />
    </div>
    </>
  );
}
