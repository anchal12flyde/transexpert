"use client";

export default function WeAreDifferent() {
  return (
    <section className="global-container mb-[78px]">
      <h2 className="hero-heading mb-[16px]">
        WE ARE <span className="text-primary-color ">DIFFERENT</span> IN EVERY
        WAY
      </h2>
      <div className="downtime-container !mt-0 !gap-[62px] border ">
        {/* Left side */}
        <div className="downtime-left !h-full border !flex-1  ">
          <img src="/images/assets/f&i.png" alt="Fleet" className="!w-full !h-full object-cover"  />
        </div>

        {/* Right side */}
        <div className="downtime-right subheading border ">
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
