export default function differentComp({ title, imageSrc, points }) {
  return (
    <section className="global-container mb-[42px] sm:mb-[78px] mt-[42px] sm:mt-[78px]">
      <h2
        className="hero-section-heading hero-section-heading-macbook w-full sm:w-[500px] text-center sm:text-left"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <div className="downtime-container1">
        {/* Left side */}

        <div className="downtime-left1">
          <img src={imageSrc} alt="Fleet" className="downtime-image1" />
        </div>

        {/* Right side */}
        <div className="downtime-right subheading">
          {points.map((text, i) => (
            <div key={i} className="downtime-card subheading ">
              {text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
