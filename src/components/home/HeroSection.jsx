"use client";

import { useEffect, useRef, useState } from "react";
import Header from "./Header";

export default function HeroSection({ isScrolled }) {
  console.log(isScrolled);
  return (
    <>
      {!isScrolled && (
        <div
          className={`fixed top-0 left-0 w-full z-50 transition-all duration-300`}
        >
          <Header />
        </div>
      )}
      <section className="hero-section global-container">
        <div className="hero-diagonal-overlay">
          <video className="square-video" autoPlay muted loop playsInline>
            <source src="/images/x-gif.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="hero-content">
          <h1 className="hero-heading">
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
          <div className=" flex justify-end   ">
            <p
              className="  text-[46px] font-bold mr-[-.8cm]  "
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

        {/* <div className="bg-blue-900   block md:hidden">
  <h2 className="text-white text-center text-xl font-semibold mb-4">Services</h2>
  <div className="grid grid-cols-2 gap-4">
   
    <div className="relative rounded-lg overflow-hidden">
      <img src="/images/img2.png" alt="Full Truck Load" className="w-full h-32 object-cover" />
      <div className="absolute bottom-2 left-2 text-black text-xs font-bold bg-white bg-opacity-70 py-0.5 rounded">
        Full Truck Load
      </div>
      <div className="absolute bottom-2 right-2 bg-red-500 text-white rounded-full p-1">
        ➡️
      </div>
      <div className="absolute bottom-0 right-0 w-6 h-6 bg-red-600 rotate-45 translate-x-1/2 translate-y-1/2"></div>
    </div>

    
    <div className="relative rounded-lg overflow-hidden">
      <img src="/images/img1.png" alt="Express Delivery" className="w-full h-32 object-cover" />
      <div className="absolute bottom-2 left-2 text-black text-xs font-bold bg-white bg-opacity-70 py-0.5 rounded">
        Express Delivery
      </div>
      <div className="absolute bottom-2 right-2 bg-red-500 text-white rounded-full p-1">
        ➡️
      </div>
      <div className="absolute bottom-0 right-0 w-6 h-6 bg-red-600 rotate-45 translate-x-1/2 translate-y-1/2"></div>
    </div>

   
    <div className="relative rounded-lg overflow-hidden">
      <img src="/images/img2.png" alt="Express Delivery" className="w-full h-32 object-cover" />
      <div className="absolute bottom-2 left-2 text-black text-xs font-bold bg-white bg-opacity-70 py-0.5 rounded">
        Express Delivery
      </div>
      <div className="absolute bottom-2 right-2 bg-red-500 text-white rounded-full p-1">
        ➡️
      </div>
      <div className="absolute bottom-0 right-0 w-6 h-6 bg-red-600 rotate-45 translate-x-1/2 translate-y-1/2"></div>
    </div>

   
    <div className="relative rounded-lg overflow-hidden">
      <img src="/images/img1.png" alt="Full Truck Load" className="w-full h-32 object-cover" />
      <div className="absolute bottom-2 left-2 text-black text-xs font-bold bg-white bg-opacity-70 py-0.5 rounded">
        Full Truck Load
      </div>
      <div className="absolute bottom-2 right-2 bg-red-500 text-white rounded-full p-1">
        ➡️
      </div>
      <div className="absolute bottom-0 right-0 w-6 h-6 bg-red-600 rotate-45 translate-x-1/2 translate-y-1/2"></div>
    </div>
  </div>
</div> */}
      </section>
    </>
  );
}
