export default function differentComp({ title, imageSrc, points }) {
  return (
    <section className="global-container mb-[42px] sm:mb-[78px]">
      <div className="downtime-container">
        {/* Left side */}
        <div className="downtime-left1">
          <h2
            className="hero-section-heading hero-section-heading-macbook mb-[16px]"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <img src={imageSrc} alt="Fleet" className="downtime-image" />
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
