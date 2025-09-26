"use client";

import { useEffect, useState, useRef } from "react";
import Header from "@/components/home/Header";
import SingleBlogHero from "@/components/singelBlog/HeroSection";
import RelatedPost from "@/components/singelBlog/RelatedPost";
import Footer from "@/components/footer/page";
import { useLoader } from "@/components/GlobalLoader";

export default function ClientBlogPage({ post }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const containerRef = useRef(null);
  const { PageContentReady, skip } = useLoader();
  const [calcValue, setCalcValue] = useState(0);

  useEffect(() => skip("hero"), [skip]);

  useEffect(() => {
    setTimeout(() => {
      const images = Array.from(document.querySelectorAll("img"));
      let loadedCount = 0;
      if (images.length === 0) {
        PageContentReady();
        return;
      }
      const handleLoad = () => {
        loadedCount++;
        if (loadedCount === images.length) PageContentReady();
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
    }, 0);
  }, [PageContentReady]);

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
        <SingleBlogHero
          isScrolled={isScrolled}
          calcValue={calcValue}
          setCalcValue={setCalcValue}
          post={post}
        />
        
        <RelatedPost calcValue={calcValue} setCalcValue={setCalcValue} />
        <Footer />
      </div>
    </>
  );
}
