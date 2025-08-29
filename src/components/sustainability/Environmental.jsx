import React from 'react'
import Image from 'next/image';

export default function Environmental() {
  return (
    <>
      <section className="careers-banner global-container mb-[42px] sm:mb-[78px]">
        <div className="careers-content-wrapper-sustain">
          {/* Left Image */}
          <div className="careers-image-container">
            <Image
              src="/images/assets/Frame.png"
              alt="Driver"
              width={800}
              height={0}
              className="careers-image cover"
            />
          </div>

          {/* Right Text */}
          <div className="careers-text-content">
            <p className="heading">Environmental Sustainability</p>
            <p className="subheading">
              From our trucks to our terminals, sustainability drives
              everything:
            </p>
            <br />
            <ul
              className="subheading"
              style={{ listStyleType: "disc", paddingLeft: "20px" }}
            >
              <li>SmartWay Partner since 2015.</li>
              <li>Telematics to cut engine idle time and optimize MPG.</li>
              <li>Routing software to reduce empty miles.</li>
              <li>Use of recap tires and recycled fluids where safe</li>
              <li>
                LED-lit facilities and fleet-wide automatic manual transmissions
              </li>
              <li>Driver training in fuel-efficient methods</li>
              <li>
                Program: Driving to Be Green — quick tips to reduce the carbon
                footprint
              </li>
            </ul>

            <button className="hero-button">Apply Now</button>
          </div>
        </div>
        <div className="drive-image">
          <img src="/images/assets/drive-x.png" alt="Decoration" />
        </div>
      </section>
    </>
  );
}
