"use client";

import { useLoader } from "@/components/GlobalLoader";
import Header from "@/components/home/Header";
import Footer from "@/components/footer/page";
import PrivacyPolicy from "@/components/PrivacyPolicy";
import { useEffect, useRef, useState } from "react";

export default function PrivacyPolicyClient() {
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
    handleScroll(); // initial state

    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <PageContentReady />
      <div className="mainCon" ref={containerRef}>
        <Header isScrolled={true} />
        <PrivacyPolicy isScrolled={isScrolled} />
        <Footer />
      </div>
    </>
  );
}
