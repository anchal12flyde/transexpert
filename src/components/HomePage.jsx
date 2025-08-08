"use client";
import Header from "@/components/home/Header";
import HeroSection from "./home/HeroSection";
import Certification from "./home/Certification";
import Strip from "./home/Strip";
import Footer from "@/components/home/Footer"
import SustainabilityBanner from "./home/SustainabilityBanner";
import Blog from "./home/Blog";
import CareersBanner from "./home/CarrerBanner";
import Industries from "./home/Industries";

export default function HomePage() {
  return (
    <div >
      
<Header/>
<HeroSection/>
<Certification/>
<Strip/>
<SustainabilityBanner/>
<Blog/>
<CareersBanner/>
<Industries/>
{/* <Footer/> */}
       
     
    </div>
  );
}
