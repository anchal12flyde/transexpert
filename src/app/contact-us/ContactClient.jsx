"use client";

import { useLoader } from "@/components/GlobalLoader";
import Header from "@/components/home/Header";
import HeroSection from "@/components/contact/HeroSection";
import ContactDetails from "@/components/contact/ContactDetails";
import Footer from "@/components/footer/page";
import { useEffect, useRef, useState } from "react";

export default function ContactClient() {
  const [isScrolled, setIsScrolled] = useState(false);
  const containerRef = useRef(null);
  const { PageContentReady, skip } = useLoader();

  // Skip hero for loader
  useEffect(() => skip("hero"), [skip]);

  // Scroll detection for sticky header
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => setIsScrolled(container.scrollTop > 50);
    container.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initial check

    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <PageContentReady />
      <div className="mainCon" ref={containerRef}>
        <Header isScrolled={true} />
        <HeroSection isScrolled={isScrolled} />
        <ContactDetails />
        <Footer />
      </div>
    </>
  );
}
