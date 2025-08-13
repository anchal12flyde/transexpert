"use client";

export default function DowntimeSection() {
  return (
    <section className="global-container">
      <div className="downtime-container">
        {/* Left side */}
        <div className="downtime-left">
          <h2 className="hero-heading mb-[16px]">Downtime is not an option</h2>
          <p className="subheading mb-[30px]">
            Our in-house licensed mechanics and proactive diagnostics ensure
            top-tier fleet availability.
          </p>
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
