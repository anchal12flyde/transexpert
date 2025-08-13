"use client";
import Header from "@/components/home/Header";
import SingleBlogHero from "@/components/singelBlog/HeroSection";
import RelatedPost from "@/components/singelBlog/RelatedPost";
import Footer from "@/components/footer/page";

export default function page() {
  return (
    <div>
      <Header />
    <SingleBlogHero/>
    <RelatedPost/>
    <Footer/>
    </div>
  );
}
