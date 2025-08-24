"use client";
import Image from "next/image";

const CareersBanner = () => {
  return (
    <section className="careers-banner global-container">
      <div className="careers-content-wrapper">
        {/* Left Image */}
        <div className="careers-image-container">
          <Image
            src="/images/assets/Frame.png"
            alt="Driver"
            width={800}
            height={400}
            className="careers-image"
          />
        </div>

        {/* Right Text */}
        <div className="careers-text-content">
          <p className="heading">Drive Your Future with TransExpert</p>
          <p className="subheading pt-[10px]">
            We're always looking for dedicated drivers, logistics pros, and
            problem-solvers to join our growing North American team.
          </p>
          <p className="subheading">
            We're always looking for dedicated drivers, logistics pros, and
            problem-solvers to join our growing North American team.
          </p>
          <p className="subheading">
            We're always looking for dedicated drivers, logistics pros, and
            problem-solvers to join our growing North American team.
          </p>
          <button className="hero-button">Apply Now</button>
        </div>
      </div>
    </section>
  );
};

export default CareersBanner;
