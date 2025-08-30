"use client";
import { useEffect, useRef, useState } from "react";
import { useLoader } from "@/components/GlobalLoader";
import Header from "@/components/home/Header";
import Footer from "@/components/footer/page";
import HeroSection from "@/components/industries/HeroSection";
import Industries from "@/components/industries/IndustriesWork";

export default function IndustriesPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const containerRef = useRef(null);

  const { PageContentReady, setRequired } = useLoader();

  useEffect(() => {
    // is page ke liye loader in sections ka wait karega
    setRequired(["content", "hero", "industries"]);
  }, [setRequired]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const handleScroll = () => setIsScrolled(container.scrollTop > 50);
    container.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <PageContentReady />
      <div className="mainCon" ref={containerRef}>
        {isScrolled && <Header isScrolled={isScrolled} />}
        <HeroSection isScrolled={isScrolled} />
        <Industries />
        <Footer />
      </div>
    </>
  );
}
