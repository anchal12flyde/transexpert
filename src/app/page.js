"use client";
import { useLoader } from "@/components/GlobalLoader";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

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
  const [isScrolled, setIsScrolled] = useState(false);
  const containerRef = useRef(null);

  const { PageContentReady, setRequired } = useLoader();

  useEffect(() => {
    // HomePage ke liye required sections
    setRequired(["content", "hero", "industries", "map"]);
  }, [setRequired]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const handleScroll = () => {
      setIsScrolled(container.scrollTop > 50);
    };
    container.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Head>
        <title>
          TransExpert — Reliable Cross-Border & Temperature-Controlled Freight
          Solutions
        </title>
        <meta
          name="description"
          content="TransExpert is your trusted logistics backbone in North America offering full truckload, temperature-controlled, cross-border & cross-docking services. On-time. Safe. Compliant."
        />
        <link rel="canonical" href="https://www.transexpert.ca/" />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content=" TransExpert — Reliable Cross-Border & Temperature-Controlled Freight
          Solutions"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.transexpert.ca/" />
        <meta
          property="og:image"
          content="https://www.transexpert.ca/og-image.jpg"
        />
        <meta
          property="og:description"
          content="Reliable cross-border logistics from Canada to the U.S. with temperature-controlled, expedited, and same-day freight solutions."
        />

        {/* Twitter Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content=" TransExpert — Reliable Cross-Border & Temperature-Controlled Freight
          Solutions"
        />
        <meta
          name="twitter:description"
          content="Reliable cross-border logistics from Canada to the U.S. with temperature-controlled, expedited, and same-day freight solutions."
        />
        <meta
          name="twitter:image"
          content="https://www.transexpert.ca/og-image.jpg"
        />
      </Head>
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
