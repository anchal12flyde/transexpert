"use client";
import Header from "@/components/home/Header";
import Strength from "@/components/fleetandinfrastructure/Strength";
import FleetPower from "@/components/fleetandinfrastructure/FleetPower";

export default function page() {
  return (
    <div>
      <Header />
      <FleetPower/>
     <Strength/>
    </div>
  );
}
