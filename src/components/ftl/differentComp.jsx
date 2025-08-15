"use client";

export default function WeAreDifferent() {
  return (
    <section className="global-container mb-[78px]">
      <div className="downtime-container">
        {/* Left side */}
        <div className="downtime-left">
          <h2 className="hero-heading mb-[16px]">
            WE ARE <span className="text-primary-color " >DIFFERENT</span> IN EVERY WAY
          </h2>

          <img src="/images/assets/f&i.png" alt="Fleet" />
        </div>

        {/* Right side */}
        <div className="downtime-right subheading">
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
