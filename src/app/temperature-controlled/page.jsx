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
  const containerRef = (useRef < HTMLDivElement) | (null > null);
  const [m, setM] = useState(0);
  const { PageContentReady, skip } = useLoader();
  const data = services.temperatureControlled;

  // Skip hero for loader
  useEffect(() => {
    skip("hero");
  }, [skip]);

  // Wait for all images to load before hiding loader
  useEffect(() => {
    const observer = new MutationObserver(() => checkImages());
    observer.observe(document.body, { childList: true, subtree: true });

    function checkImages() {
      const images = Array.from(document.querySelectorAll("img"));
      let loadedCount = 0;

      if (images.length === 0) {
        PageContentReady();
        return;
      }

      const handleLoad = () => {
        loadedCount++;
        if (loadedCount === images.length) {
          PageContentReady();
          observer.disconnect(); // stop observing once all images are loaded
        }
      };

      images.forEach((img) => {
        if (img.complete) handleLoad();
        else {
          img.addEventListener("load", handleLoad, { once: true });
          img.addEventListener("error", handleLoad, { once: true });
        }
      });
    }

    // initial check for images
    checkImages();

    return () => observer.disconnect();
  }, [PageContentReady]);

  // Scroll detection for sticky header
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

  return (
    <div className="mainCon" ref={containerRef}>
      {isScrolled && <Header isScrolled={isScrolled} />}
      <HeroSectionFTL isScrolled={isScrolled} {...data.hero} />
      <TruckImageSection {...data.truckImageSection} setM={setM} />
      <StripFtl {...data.strip} m={m} />
      <DifferentComp {...data.weAreDifferent} />
      <Footer />
    </div>
  );
}
