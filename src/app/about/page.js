"use client";
import { useLoader } from "@/components/GlobalLoader";
import Header from "@/components/home/Header";
import AboutHero from "@/components/about/AboutHeroSection";
import LeadershipSection from "@/components/about/Leadership";
import Relaibility from "@/components/about/Relaibility";
import CardsSection from "@/components/about/OurValues";
import { useEffect, useRef, useState } from "react";
import Footer from "@/components/footer/page";
import Head from "next/head";

 

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
      <Head>
        <title>About TransExpert — Who We Are & Our Mission</title>
        <meta
          name="description"
          content="Learn about TransExpert: our commitment to precision, reliability, and sustainable logistics across Canada, the U.S., and Mexico."
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://www.example.com/preferred-page-url/"
        />

        {/* Open Graph / Social Sharing */}
        <meta
          property="og:title"
          content="About TransExpert — Who We Are & Our Mission"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.example.com/preferred-page-url/"
        />
        <meta
          property="og:image"
          content="https://www.example.com/og-image.png"
        />
        <meta
          property="og:description"
          content="Learn about TransExpert: our commitment to precision, reliability, and sustainable logistics across Canada, the U.S., and Mexico."
        />

        {/* Optional Twitter card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About TransExpert — Who We Are & Our Mission"
        />
        <meta
          name="twitter:description"
          content="Learn about TransExpert: our commitment to precision, reliability, and sustainable logistics across Canada, the U.S., and Mexico."
        />
        <meta
          name="twitter:image"
          content="https://www.example.com/og-image.png"
        />
      </Head>
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
