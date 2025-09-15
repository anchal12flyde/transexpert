"use client";
import { useLoader } from "@/components/GlobalLoader";
import Header from "@/components/home/Header";
import AboutHero from "@/components/about/AboutHeroSection";
import LeadershipSection from "@/components/about/Leadership";
import Relaibility from "@/components/about/Relaibility";
import CardsSection from "@/components/about/OurValues";
import { useEffect, useRef, useState } from "react";
import Footer from "@/components/footer/page";



export default function AboutPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const containerRef = useRef(null);

  const { PageContentReady, skip } = useLoader();

  // Loader ko hero section ke liye skip kara
  useEffect(() => {
    skip("hero");
  }, [skip]);

  // Scroll listener
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      setIsScrolled(container.scrollTop > 50);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll(); // initial check

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <PageContentReady />
      <div className="mainCon" ref={containerRef}>
        {isScrolled && <Header isScrolled={isScrolled} />}
        <AboutHero isScrolled={isScrolled} />
        <CardsSection />
        
        {/* <LeadershipSection /> */}
        <Relaibility />
        <Footer />
      </div>
    </>
  );
}
