"use client";
import Header from "@/components/home/Header";
import SingleBlogHero from "@/components/singelBlog/HeroSection";
import RelatedPost from "@/components/singelBlog/RelatedPost";

export default function page() {
  return (
    <div>
      <Header />
    <SingleBlogHero/>
    <RelatedPost/>
    </div>
  );
}
