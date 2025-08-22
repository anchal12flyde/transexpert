"use client";
import { useLoader } from "@/components/GlobalLoader";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import Blog from "@/components/home/Blog";
import CareersBanner from "@/components/home/CarrerBanner";
import Certification from "@/components/home/Certification";
import Header from "@/components/home/Header";
import HeroSection from "@/components/home/HeroSection";
import Industries from "@/components/home/Industries";
import MapReach from "@/components/home/MapReach";
import Strip from "@/components/home/Strip";
import SustainabilityBanner from "@/components/home/SustainabilityBanner";
import Footer from "@/components/footer/page";

export default function HomePage() {
  const pathname = usePathname();
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

  // console.log(isScrolled);

  return (
    <>
    <PageContentReady />
    <div className="mainCon" ref={containerRef}>
      {isScrolled && <Header isScrolled={isScrolled} />}
      <HeroSection isScrolled={isScrolled} />
      <Certification />
      <Strip />
      <SustainabilityBanner />
      <Blog />
      <CareersBanner />
      <Industries />
      <MapReach />
      <Footer />
    </div>
    </>
  );
}
