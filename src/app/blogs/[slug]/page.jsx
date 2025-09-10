"use client";
import { useLoader } from "@/components/GlobalLoader";
import Header from "@/components/home/Header";
import SingleBlogHero from "@/components/singelBlog/HeroSection";
import RelatedPost from "@/components/singelBlog/RelatedPost";
import Footer from "@/components/footer/page";
import { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";

export default function page() {
  const [isScrolled, setIsScrolled] = useState(false);
  const containerRef = useRef(null);
  const { PageContentReady, skip } = useLoader();
  const [calcValue, setCalcValue] = useState(0);
  const { slug } = useParams();
  const [post, setPost] = useState(null);

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
    if (!slug) return;
    const fetchPost = async () => {
      try {
        const res = await axios.get(
          `https://brown-magpie-914710.hostingersite.com/wp-json/wp/v2/posts?slug=${slug}`
        );
        console.log(res.data);
        setPost(res.data[0] || null);
      } catch (err) {
        console.error("❌ Error fetching post:", err);
        setPost(null);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [slug]);



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
