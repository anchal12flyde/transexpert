"use client";

import { useLoader } from "@/components/GlobalLoader";
import WeAreDifferent from "@/components/ftl/differentComp";
import HeroSectionFTL from "@/components/ftl/HeroFtl";
import StripFtl from "@/components/ftl/stripComp";
import TruckImageSection from "@/components/ftl/TruckImageSection";
import Header from "@/components/home/Header";
import Footer from "@/components/footer/page";
import { useEffect, useRef, useState } from "react";
import services from "@/components/services/services.json";

export default function FTL() {
  const [isScrolled, setIsScrolled] = useState(false);
  const containerRef = useRef(null);

  // State to hold the 'm' variable
  const [m, setM] = useState(0);

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

    container.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const data = services.ftl;
  // console.log(m);

  return (
    <>
      <PageContentReady />
      <div className="mainCon" ref={containerRef}>
        {isScrolled && <Header isScrolled={isScrolled} />}
        <HeroSectionFTL isScrolled={isScrolled} {...data.hero} />

        {/* Pass setM to TruckImageSection */}
        <TruckImageSection {...data.truckImageSection} setM={setM} />

        {/* Pass m to StripFtl */}
        <StripFtl {...data.strip} m={m} />

        <WeAreDifferent {...data.weAreDifferent} />
        <Footer />
      </div>
    </>
  );
}
