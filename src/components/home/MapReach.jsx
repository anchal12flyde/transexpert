"use client";

export default function MapReach() {
  return (
    <section className="map-reach-section">
      <div className="video-overlay-container">
        {/* Background Video */}
        <video
          src="/images/videos/map.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="background-video"
        />

        {/* Right Side Text */}
        <div className="global-container">
          <div className="overlay-text">
            <div className="text-box">
              <h2 className="heading">
                Geographical Coverage & Infrastructure
              </h2>
              <p className="card_subheading">
                We move freight across Canada, the USA, and Mexico with speed
                and reliability.
              </p>
              <p className="subheading mt-5">Operational Reach</p>

              <p className="card_subheading para">
                <span>Canada: </span>Ontario, Quebec, Nova Scotia, New
                Brunswick, Newfoundland and Labrador.
              </p>
              <p className="card_subheading para">
                <span>USA: </span> Extensive coverage across the continental
                United States.
              </p>
              <p className="card_subheading para">
                <span>Mexico: </span>Supported through trusted cross-border
                partnerships.
              </p>
              <p className="card_subheading para">
                Terminal Locations 
                <br/>Taylor (MI), Toledo (OH), Laredo (TX), Milton
                (ON), Cambridge (ON), Indianapolis (IN), Pointe-Claire (QC)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
