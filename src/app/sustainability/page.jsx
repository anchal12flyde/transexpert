"use client";
import { useLoader } from "@/components/GlobalLoader";

import Header from "@/components/home/Header";
import HeroSection from "@/components/sustainability/HeroSection";
import Environmental from "@/components/sustainability/Environmental";
import Footer from "@/components/footer/page";
import EthicsSection from "@/components/sustainability/BusinessEthics";
import Commitments from "@/components/sustainability/Commitments";
import { useEffect, useRef, useState } from "react";

export default function page() {
  const [isScrolled, setIsScrolled] = useState(false);
  const containerRef = useRef(null);
  const { PageContentReady, skip } = useLoader();

  // Skip hero for loader
  useEffect(() => {
    skip("hero");
  }, [skip]);

  // Wait for all images to load before hiding loader
  useEffect(() => {
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
      }
    };

    images.forEach((img) => {
      if (img.complete) handleLoad();
      else {
        img.addEventListener("load", handleLoad);
        img.addEventListener("error", handleLoad);
      }
    });

    return () => {
      images.forEach((img) => {
        img.removeEventListener("load", handleLoad);
        img.removeEventListener("error", handleLoad);
      });
    };
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
    <>
      <PageContentReady />
      <div className="mainCon" ref={containerRef}>
        {isScrolled && <Header isScrolled={isScrolled} />}
        <HeroSection isScrolled={isScrolled} />
        <Commitments />
        <Environmental />
        <EthicsSection />
        <Footer />
      </div>
    </>
  );
}
