// components/GeographicalCoverage.js
import React from "react";

export default function GeographicalCoverage() {
  return (
    <section className="bg-white">
      <div className="global-container mb-[16px]">
        <h2 className="sm:hidden  heading">
          Geographical Coverage & Infrastructure
        </h2>
        <p className=" sm:hidden  card_subheading">
          We move freight across Canada, the USA, and Mexico with speed and
          reliability.
        </p>
      </div>
      <div className="grid sm:grid-cols-12 gap-12 ">
        {/* Left side - Video */}
        <div className="sm:col-span-7">
          <video
            src="/images/videos/map.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto "
          />
        </div>

        {/* Right side - Text */}
        <div className="hidden md:flex md:col-span-5 map-text flex-col justify-end ">
          <h2 className=" heading">Geographical Coverage & Infrastructure</h2>
          <p className=" card_subheading">
            We move freight across Canada, the USA, and Mexico with speed and
            reliability.
          </p>
          <p className="subheading mt-5">Operational Reach</p>

          <p className="card_subheading para">
            <span>Canada: </span>Ontario, Quebec, Nova Scotia, New Brunswick,
            Newfoundland and Labrador.
          </p>
          <p className="card_subheading para">
            <span>USA: </span> Extensive coverage across the continental United
            States.
          </p>
          <p className="card_subheading para">
            <span>Mexico: </span>Supported through trusted cross-border
            partnerships.
          </p>
          <p className="card_subheading para">
            Terminal Locations
            <br />
            Taylor (MI), Toledo (OH), Laredo (TX), Milton (ON), Cambridge (ON),
            Indianapolis (IN), Pointe-Claire (QC)
          </p>
        </div>

        <div className="global-container mb-[42px]">
          <div className="block md:hidden text-gray-800 mobile-map-text">
            <p className="subheading mt-5">Operational Reach</p>

            <p className="card_subheading para">
              <span>Canada: </span>Ontario, Quebec, Nova Scotia, New Brunswick,
              Newfoundland and Labrador.
            </p>
            <p className="card_subheading para">
              <span>USA: </span> Extensive coverage across the continental
              United States.
            </p>
            <p className="card_subheading para">
              <span>Mexico: </span> Supported through trusted cross-border
              partnerships.
            </p>
            <p className="card_subheading para">
              Terminal Locations
              <br />
              Taylor (MI), Toledo (OH), Laredo (TX), Milton (ON), Cambridge
              (ON), Indianapolis (IN), Pointe-Claire (QC)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
