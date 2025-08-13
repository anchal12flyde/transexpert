"use client";

export default function MapReach() {
  return (
    <div className="flex flex-col sm:flex-row items-end p-[3.5vh]  ">
      <h2 className="heading sm:hidden ">
        Geographical Coverage & Infrastructure
      </h2>
      <p className="card_subheading sm:hidden ">
        We move freight across Canada, the USA, and Mexico with speed and
        reliability.
      </p>
      <div>
        <video
          src="/images/videos/map.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="background-video"
        />
      </div>
      <div className="text-box mb-20">
        <h2 className="hidden sm:block heading">
          Geographical Coverage & Infrastructure
        </h2>
        <p className=" hidden sm:block card_subheading">
          We move freight across Canada, the USA, and Mexico with speed and
          reliability.
        </p>
        <p className="subheading mt-5">Operational Reach</p>

        <p className="card_subheading para">
          <span>Canada: </span>Ontario, Quebec, Nova Scotia, New Brunswick,
          Newfoundland and Labrador.
        </p>
        <p className="card_subheading para">
          <span>USA: </span> Extensive coverage across the continental United
          States.
        </p>
        <p className="card_subheading para">
          <span>Mexico: </span>Supported through trusted cross-border
          partnerships.
        </p>
        <p className="card_subheading para">
          Terminal Locations
          <br />
          Taylor (MI), Toledo (OH), Laredo (TX), Milton (ON), Cambridge (ON),
          Indianapolis (IN), Pointe-Claire (QC)
        </p>
      </div>
    </div>
  );
}
