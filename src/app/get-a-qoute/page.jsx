"use client";

import { useLoader } from "@/components/GlobalLoader";
import Header from "@/components/home/Header";
import Footer from "@/components/footer/page";
import { useEffect, useRef, useState } from "react";
import HeroSection from "@/components/getAQoute/HeroSection";
import ContactDetails from "@/components/getAQoute/ContactDetails";

export default function page() {
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
  return (
    <>
      <PageContentReady />
      <div className="mainCon" ref={containerRef}>
        {/* <Header /> */}
        <Header isScrolled={true} />

        <HeroSection isScrolled={isScrolled} />
        <ContactDetails />
        <Footer />
      </div>
    </>
  );
}
