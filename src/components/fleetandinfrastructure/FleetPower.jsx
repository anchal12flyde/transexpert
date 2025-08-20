"use client";

export default function FleetPower() {
  return (
    <>
      <div className="global-container mt-[42px] lg:mt-[100px]  ">
        <section className="fleet-section">
          <div className="fleet-stats">
            <div className="stat">
              <h2 className="stat-number">50</h2>
              <div className="divider"></div>
              <p className="stat-text">
                Dry Vans – For general
                <br /> freight and high-volume <br />
                distribution
              </p>
            </div>

            <div className="stat">
              <h2 className="stat-number">500+</h2>
              <div className="divider"></div>
              <p className="stat-text">
                Refrigerated Reefers – Temperature <br />
                controlled delivery for food, pharma,
                <br /> and perishables
              </p>
            </div>

            <div className="stat">
              <h2 className="stat-number ">20</h2>
              <div className="divider"></div>
              <p className="stat-text">
                Flatbeds – For industrial,<br/> oversized, and non <br/>containerized
                cargo
              </p>
            </div>
          </div>

          <div className="fleet-info">
            <div className="fleet-one">
              <h3 className="hero-section-heading">
                Smart, sustainable, and fleet-first logistics.
              </h3>
            </div>
            <div className="fleet-two">
              <p className="subheading">
                Our fleet is built for reliability, efficiency, and
                sustainability. With an average vehicle age of less than five
                years, we ensure our equipment remains modern, well-maintained,
                and ready to meet the demands of high-performance logistics.
                Each vehicle is equipped with Samsara-powered GPS tracking,
                providing real-time visibility, route optimization, and enhanced
                driver safety — so our clients always know where their shipments
                are.
                <br />
                <br />
                In line with our commitment to environmental responsibility, our
                fleet consists of fuel-efficient, low-emission models designed
                with advanced aerodynamic features. These upgrades not only
                reduce our carbon footprint but also improve fuel economy and
                delivery speed. This combination of smart technology,
                sustainability, and proactive maintenance allows us to offer
                scalable, enterprise-grade logistics solutions across Canada,
                the U.S., and Mexico.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
