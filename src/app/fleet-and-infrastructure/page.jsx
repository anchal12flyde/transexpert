"use client";
import Header from "@/components/home/Header";
import HeroSection from "@/components/fleetandinfrastructure/HeroSection";
import Strength from "@/components/fleetandinfrastructure/Strength";
import FleetPower from "@/components/fleetandinfrastructure/FleetPower";
import DowntimeSection from "@/components/fleetandinfrastructure/Downtime";
import Footer from "@/components/footer/page";

export default function page() {
  return (
    <div>
      {/* <Header /> */}
      <HeroSection/>
      <FleetPower/>
     <Strength/>
     <DowntimeSection/>
     <Footer/>
    </div>
  );
}
