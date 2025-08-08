"use client";

const SustainabilityBanner = () => {
  return (
    <div className="content">
      <div className="heroSection">
        <video
          src="/images/videos/trucks_1.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="backgroundVideo"
        />
        <div className="global-container">
          <div className="textOverlay">
            <h2 className="heading text-thm-white">
              We Care. And We Prove It.
            </h2>
            <p className="subheading">
              Sustainability isn’t a campaign, it’s our operating system.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SustainabilityBanner;
