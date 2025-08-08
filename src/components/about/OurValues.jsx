"use client";

export default function CardsSection() {
  return (
    <section className="cards-section global-container">
      <h2 className="heading">Our Core Values</h2>
      <div className="cards-container">
        {/* Card 1 */}
        <div className="value">
          <img
            src="/images/assets/IMG1.png"
            alt="Card 1"
            className="card-image"
          />
          <div className="card-text ">Card Title 1</div>
        </div>

        {/* Card 2 */}
        <div className="value">
          <img
            src="/images/assets/IMG3.png"
            alt="Card 2"
            className="card-image"
          />
          <div className="card-text">Card Title 2</div>
        </div>

        {/* Card 3 */}
        <div className="value">
          <img
            src="/images/assets/IMG4.png"
            alt="Card 3"
            className="card-image"
          />
          <div className="card-text ">
            <p>
Card 3
            </p></div>
        </div>
      </div>
    </section>
  );
}
