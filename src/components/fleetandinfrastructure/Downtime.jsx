"use client";

export default function DowntimeSection() {
  return (
    <section className="global-container mb-[42px] lg:mb-[78px] mt-[42px] lg:mt-[78px]">
      <div className="downtime-container overflow-hidden">
        {/* Left side */}

        <div className="downtime-left">
          <h2 className="downtime-heading  mb-[12px] lg:mb-[16px]">
            Downtime is not an option
          </h2>
          <p className="map_subheading">
            Our in-house licensed mechanics and proactive diagnostics ensure
            top-tier fleet availability.
          </p>
          <div className="h-auto mt-[16px] lg:mt-[24px] aspect-[16/8] lg:aspect-[16/9]">
            <img
              src="/images/assets/f&i.png"
              alt="Fleet"
              className="downtime-image"
            />
          </div>
        </div>

        {/* Right side */}
        <div className="downtime-right card_heading ">
          {[
            "Preventive maintenance schedules and telematics-driven alerts",
            "Backup vehicle dispatch system for urgent contingencies",
            "On-site fleet service bays in key hubs",
            "On-site fleet service bays in key hubs",
          ].map((text, i) => (
            <div className="downtime-card subheading" key={i}>
              {text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
