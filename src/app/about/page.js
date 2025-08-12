"use client";
import Header from "@/components/home/Header";
import AboutHero from "@/components/about/AboutHeroSection";
import LeadershipSection from "@/components/about/Leadership";
import Relaibility from "@/components/about/Relaibility";
import CardsSection from "@/components/about/OurValues";

export default function page() {
  return (
    <div>
      <Header />
      <AboutHero />
      <CardsSection />
      <LeadershipSection />
      <Relaibility />
    </div>
  );
}
