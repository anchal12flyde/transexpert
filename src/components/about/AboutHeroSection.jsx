"use client";

import Header from "../home/Header";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function AboutHero({ isScrolled }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <section className="about-hero-section">
      {!isScrolled && (
        <div
          className={`fixed top-0 left-0 w-full z-50 transition-all duration-300`}
        >
          <Header />
        </div>
      )}
      {/* Background Image */}
      <div className="about-hero-bg">
        <div className="about-hero-overlay"></div>
      </div>

      {/* Text Content */}
      <motion.div
        className="about-hero-content global-container"
        initial={{ opacity: 0, x: -80 }}
        animate={isLoaded ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="hero-content">
          <h1 className="hero-heading mb-[24px]">
            North America's Elite Fleet
          </h1>
          <p className="hero-description w-full lg:w-[800px]">
            Trans Expert Inc. is a premier cross-border, asset-based
            transportation provider, committed to delivering seamless freight
            solutions across Canada, the United States, and Mexico. Backed by a
            fleet of more than 250 trucks, we ensure capacity, reliability, and
            speed for every shipment. Founded in 2010, we are powered by over
            five decades of combined logistics expertise and a relentless
            pursuit of operational excellence.
          </p>
          <button
            className="hero-button"
            onClick={() => {
              document.getElementById("services-section")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          >
            Know More
          </button>
        </div>
      </motion.div>

      {/* Floating Box - Desktop Version */}
      <div  className="outer-float-box hidden lg:block">
        <div className="white-wrapper">
          <div className="about-floating-box ">
            <div className="">
              <h3 className="heading">Our Core Values</h3>
              <p className="subheading">
                Our reputation is built on consistency, responsiveness, and
                enterprise-grade reliability. We're not just moving freight
                we're enabling mission-critical movement for some of North
                America's most respected companies.
              </p>
              <br />
              <p className="subheading">
                We envision a logistics infrastructure that is fast, secure,
                sustainable, and human-led — built to serve businesses that{" "}
                <br />
                expect more than just delivery.
              </p>
            </div>
          </div>
          <img
            src="/images/assets/vector2.png"
            alt="Close Icon"
            className="close-icon"
          />
        </div>
      </div>

      {/* Floating Box - Mobile Version */}
      <div className="mobile-float-box lg:hidden ">
        <div className="white-wrapper2 global-container">
          <div className="about-floating-box-mobile">
            <h3 className="heading">Our Core Values</h3>
            <p className="subheading">
              Our reputation is built on consistency, responsiveness, and
              enterprise-grade reliability. We're not just moving freight we're
              enabling mission-critical movement for some of North America's
              most respected companies.
            </p>
            <br />
            <p className="subheading">
              We envision a logistics infrastructure that is fast, secure,
              sustainable, and human-led — built to serve businesses that expect
              more than just delivery.
            </p>
            <div className="mt-6">
              <img
                src="/images/assets/vector2.png"
                alt="Close Icon"
                className="close-icon1"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
