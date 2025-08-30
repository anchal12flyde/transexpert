"use client";

import { useLoader } from "@/components/GlobalLoader";
import HomeGrid from "@/components/blogs/homeGrid";
import TopStories from "@/components/blogs/topStories";
import Header from "@/components/home/Header";
import Footer from "@/components/footer/page";
import { useEffect, useRef, useState } from "react";

export default function AllBlogs() {
  const [isScrolled, setIsScrolled] = useState(false);
  const containerRef = useRef(null);

  const { PageContentReady, skip } = useLoader();

  useEffect(() => {
    skip("hero");

    // wait until all images are loaded
    const images = Array.from(document.querySelectorAll("img"));
    let loadedCount = 0;

    if (images.length === 0) {
      PageContentReady();
      return;
    }

    const handleImageLoad = () => {
      loadedCount++;
      if (loadedCount === images.length) {
        PageContentReady();
      }
    };

    images.forEach((img) => {
      if (img.complete) {
        handleImageLoad();
      } else {
        img.addEventListener("load", handleImageLoad);
        img.addEventListener("error", handleImageLoad);
      }
    });

    return () => {
      images.forEach((img) => {
        img.removeEventListener("load", handleImageLoad);
        img.removeEventListener("error", handleImageLoad);
      });
    };
  }, [skip, PageContentReady]);

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
      <div ref={containerRef}>
        <Header isScrolled={isScrolled} />
        <HomeGrid />
        <TopStories />
        <Footer />
      </div>
    </>
  );
}
