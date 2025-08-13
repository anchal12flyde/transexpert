"use client";
import Header from "@/components/home/Header";
import HeroSection from "@/components/certifications/HeroCertificate";
import RecognizedCertifications from "@/components/certifications/RecognizedCertifications";
import Liability from "@/components/certifications/Liability";
import Footer from "@/components/footer/page";

export default function page() {
  return (
    <div>
      {/* <Header /> */}
      <HeroSection/>
      <RecognizedCertifications/>
      <Liability/>
    <Footer/>
    </div>
  );
}
