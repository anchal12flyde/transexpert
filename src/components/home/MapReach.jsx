"use client";
import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function GeographicalCoverage() {
  return (
    <section className="bg-white">
      <div className="global-container mb-[16px]">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="sm:hidden heading"
        >
          Geographical Coverage & Infrastructure
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="sm:hidden map_subheading-phone"
        >
          We move freight across Canada, the USA, and Mexico with speed and
          reliability.
        </motion.p>
      </div>

      <div className="grid sm:grid-cols-12 gap-12">
        {/* Left side - Video */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="sm:col-span-7"
        >
          <motion.video
            src="/images/videos/map.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto"
          />
        </motion.div>

        {/* Right side - Text */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="hidden md:flex md:col-span-5 map-text flex-col justify-end"
        >
          <h2 className="heading">Geographical Coverage & Infrastructure</h2>
          <p className="map_subheading">
            We move freight across Canada, the USA, and Mexico with speed and
            reliability.
          </p>
          <p className="map_subheading mt-5">Operational Reach</p>

          <p className="subheading para">
            <span>Canada: </span>Ontario, Quebec, Nova Scotia, New Brunswick,
            Newfoundland and Labrador.
          </p>
          <p className="subheading para">
            <span>USA: </span> Extensive coverage across the continental United
            States.
          </p>
          <p className="subheading para">
            <span>Mexico: </span>Supported through trusted cross-border
            partnerships.
          </p>
          <p className="subheading para">
            Terminal Locations
            <br />
            Taylor (MI), Toledo (OH), Laredo (TX), Milton (ON), Cambridge (ON),
            Indianapolis (IN), Pointe-Claire (QC)
          </p>
        </motion.div>

        {/* Mobile Text */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="global-container mb-[42px]"
        >
          <div className="block md:hidden text-gray-800 mobile-map-text">
            <p className="map_subheading mt-5">Operational Reach</p>

            <p className="subheading para">
              <span>Canada: </span>Ontario, Quebec, Nova Scotia, New Brunswick,
              Newfoundland and Labrador.
            </p>
            <p className="subheading para">
              <span>USA: </span> Extensive coverage across the continental
              United States.
            </p>
            <p className="subheading para">
              <span>Mexico: </span> Supported through trusted cross-border
              partnerships.
            </p>
            <p className="subheading para">
              Terminal Locations
              <br />
              Taylor (MI), Toledo (OH), Laredo (TX), Milton (ON), Cambridge
              (ON), Indianapolis (IN), Pointe-Claire (QC)
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
