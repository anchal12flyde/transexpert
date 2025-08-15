"use client";

import { useEffect, useRef, useState } from "react";
import Header from "./Header";
import Image from "next/image";

export default function HeroSection({ isScrolled }) {
  const overlayRef = useRef(null);
  const squareRef = useRef(null);

  useEffect(() => {
    const calcValues = () => {
      if (!overlayRef.current) return;

      const rect = overlayRef.current.getBoundingClientRect();
      const fullWidth = rect.width;
      const fullHeight = rect.height;

      // Full hypotenuse (Pythagoras theorem)
      const fullHypotenuse = Math.sqrt(fullWidth ** 2 + fullHeight ** 2);

      // 100vh ki height
      const vhHeight = window.innerHeight;

      // 45° slope ke liye base = height
      const baseAt100vh = vhHeight * (fullWidth / fullHeight);

      // Hypotenuse for 100vh height
      const hypotenuseAt100vh = Math.sqrt(baseAt100vh ** 2 + vhHeight ** 2);

      squareRef.current.style.width = `${baseAt100vh}px`;

      console.clear();
      console.log("=== Overlay Measurements ===");
      console.log("Full Width (px):", fullWidth);
      console.log("Full Height (px):", fullHeight);
      console.log("Full Hypotenuse (px):", fullHypotenuse);
      console.log("100vh Height (px):", vhHeight);
      console.log("Base at 100vh (px):", baseAt100vh);
      console.log("Hypotenuse at 100vh (px):", hypotenuseAt100vh);
    };

    calcValues();
    window.addEventListener("resize", calcValues);
    return () => window.removeEventListener("resize", calcValues);
  }, []);

  // console.log(isScrolled);
  return (
    <>
      {!isScrolled && (
        <div
          className={`fixed top-0 left-0 w-full z-50 transition-all duration-300`}
        >
          <Header />
        </div>
      )}
      <section className="hero-section global-container border-5 border-red-500">
        <div
          ref={overlayRef}
          className="hero-diagonal-overlay border-5 border-green-500"
        ></div>
        <img
          ref={squareRef}
          className="square-videon"
          src="/images/x-gif.gif"
          alt="Animation"
        />

        <div className="overlay-X-Mob sm:hidden "></div>

        <div className="hero-content  ">
          <h1 className=" hero-heading">
            We Don’t Just Move Freight. <br />
            We Power North American Enterprise.
          </h1>
          <p className="hero-description">
            From mission-critical deliveries to cross-border precision — Trans
            Expert is the logistics backbone trusted by industry leaders
          </p>
          <a href="#about" className="hero-button mt-8">
            About Us
          </a>
        </div>

        <div className="hero-testimonial ">
          <div className="star-rating">
            <img src="/images/assets/star.png" alt="star" />
            <img src="/images/assets/star.png" alt="star" />
            <img src="/images/assets/star.png" alt="star" />
            <img src="/images/assets/star.png" alt="star" />
            <img src="/images/assets/star.png" alt="star" />
          </div>
          <p>
            TransExpert has been an exceptional partner to work with. Not only
            have they brought forward strategic solutions, but have allowed us
            to manage our business with peace-of-mind and strive towards our
            value of delivering on Commitment and Customer Focus. As a partner,
            if a solution does not exist they are willing to work with you to
            assist in developing one or offering alternative approaches.
          </p>
          <p className="testimonial-source">— Paper Manufacturing Industry</p>
        </div>

        <div className="testimonial-cards">
          <div className=" flex justify-end ">
            <p
              className="   text-[46px] font-bold mr-[-.8cm]  "
              style={{ writingMode: "sideways-lr" }}
            >
              SERVICES
            </p>
          </div>
          <div className="card">
            <div className="img-wrapper">
              <img src="/images/img2.png" alt="Full Truck Load" />
              <img
                src="/images/assets/redarrow.png"
                alt="Arrow"
                className="arrow-img"
              />
            </div>
            <div className="card-overlay">
              <div className="card-content">
                <h3>Full Truck Load</h3>
                <p>Dedicated capacity for your larger shipments</p>
              </div>
              {/* <img src="/images/assets/x-icon.png" alt="X" className="x-icon" /> */}
            </div>
          </div>

          <div className="card">
            <div className="img-wrapper">
              <img src="/images/img1.png" alt="Full Truck Load" />
              <img
                src="/images/assets/redarrow.png"
                alt="Arrow"
                className="arrow-img"
              />
            </div>
            <div className="card-overlay">
              <div className="card-content">
                <h3>Temperature Controlled</h3>
                <p>Temperature-sensitive logistics just refrigeration.</p>
              </div>
              {/* <img src="/images/assets/x-icon.png" alt="X" className="x-icon" /> */}
            </div>
          </div>
          <div className="card">
            <div className="img-wrapper">
              <img src="/images/img2.png" alt="Full Truck Load" />
              <img
                src="/images/assets/redarrow.png"
                alt="Arrow"
                className="arrow-img"
              />
            </div>
            <div className="card-overlay">
              <div className="card-content">
                <h3>Full Truck Load</h3>
                <p>Dedicated capacity for your larger shipments</p>
              </div>
              {/* <img src="/images/assets/x-icon.png" alt="X" className="x-icon" /> */}
            </div>
          </div>

          <div className="card">
            <div className="img-wrapper">
              <img src="/images/img1.png" alt="Full Truck Load" />
              <img
                src="/images/assets/redarrow.png"
                alt="Arrow"
                className="arrow-img"
              />
            </div>
            <div className="card-overlay">
              <div className="card-content">
                <h3>Cross Docking</h3>
                <p>Build for urgent freight that can not afford to wait</p>
              </div>
              {/* <img src="/images/assets/x-icon.png" alt="X" className="x-icon" /> */}
            </div>
          </div>
        </div>
      </section>
      <div className=" sm:hidden flex gap-[37px] flex-col mb-[0px] mt-[0px] global-container bgMob pb-[110px] pt-[42px] ">
        <p className="sm:hidden text-center text-[24px] text-white font-bold  ">
          Services
        </p>
        <div className=" sm:hidden grid grid-cols-2 gap-[33px] ">
          <div className="card1 ">
            <div className="img-wrapper1">
              <img src="/images/img2.png" alt="Full Truck Load" />
              <img
                src="/images/assets/redarrow.png"
                alt="Arrow"
                className="arrow-img1"
              />
            </div>
            <div className="card-overlay1 ">
              <div className="card-content flex flex-col justify-between  ">
                <h3>Full Truck Load</h3>
                <div className=" flex items-center justify-between    ">
                  <div className="!w-[40px]  pb-[10px] ">
                    <img
                      src="/images/assets/redarrow.png"
                      alt="Arrow"
                      className=" !w-[30px] aspect-square rotate-[-47deg] "
                    />
                  </div>
                  <div className="w-[80px] aspect-square flex items-center  overflow-hidden mt-[-.9cm] mr-[0cm] ">
                    <img
                      src="/images/assets/x.png"
                      alt="Arrow"
                      className="w-full aspect-square scale-120 !ml-[.5cm] "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card1">
            <div className="img-wrapper1">
              <img src="/images/img1.png" alt="Full Truck Load" />
            </div>
            <div className="card-overlay1 ">
              <div className="card-content flex flex-col justify-between  ">
                <h3>Temperature Controlled</h3>
                <div className=" flex items-center justify-between    ">
                  <div className="!w-[40px]  pb-[10px] ">
                    <img
                      src="/images/assets/redarrow.png"
                      alt="Arrow"
                      className=" !w-[30px] aspect-square rotate-[-47deg] "
                    />
                  </div>
                  <div className="w-[80px] aspect-square flex items-center  overflow-hidden mt-[-.9cm] mr-[0cm] ">
                    <img
                      src="/images/assets/x.png"
                      alt="Arrow"
                      className="w-full aspect-square scale-120 !ml-[.5cm] "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card1">
            <div className="img-wrapper1">
              <img src="/images/img2.png" alt="Full Truck Load" />
            </div>
            <div className="card-overlay1 ">
              <div className="card-content flex flex-col justify-between  ">
                <h3>Full Truck Load</h3>
                <div className=" flex items-center justify-between    ">
                  <div className="!w-[40px]  pb-[10px] ">
                    <img
                      src="/images/assets/redarrow.png"
                      alt="Arrow"
                      className=" !w-[30px] aspect-square rotate-[-47deg] "
                    />
                  </div>
                  <div className="w-[80px] aspect-square flex items-center  overflow-hidden mt-[-.9cm] mr-[0cm] ">
                    <img
                      src="/images/assets/x.png"
                      alt="Arrow"
                      className="w-full aspect-square scale-120 !ml-[.5cm] "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card1">
            <div className="img-wrapper1">
              <img src="/images/img1.png" alt="Full Truck Load" />
            </div>
            <div className="card-overlay1 ">
              <div className="card-content flex flex-col justify-between  ">
                <h3>Temperature Controlled</h3>
                <div className=" flex items-center justify-between    ">
                  <div className="!w-[40px]  pb-[10px] ">
                    <img
                      src="/images/assets/redarrow.png"
                      alt="Arrow"
                      className=" !w-[30px] aspect-square rotate-[-47deg] "
                    />
                  </div>
                  <div className="w-[80px] aspect-square flex items-center  overflow-hidden mt-[-.9cm] mr-[0cm] ">
                    <img
                      src="/images/assets/x.png"
                      alt="Arrow"
                      className="w-full aspect-square scale-120 !ml-[.5cm] "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
