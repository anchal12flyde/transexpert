"use client"

export default function Liability() {
  return (
    <>
      <section className="stats-strip mt:[42px] sm:mt-[78px]">
        <div className="global-container">
          <div className="stats-flex">
            <div className="stat-item">
              <div className="stat-row">
                <span className="stat-number">2M</span>
                <span className="stat-unit">
                  Dollars <br />
                  Auto Liability
                </span>
              </div>
            </div>

            <div className="stat-item">
              <div className="stat-row">
                <span className="stat-number">250K</span>
                <span className="stat-unit">
                  Dollars <br />
                  Cargo Insurance
                </span>
              </div>
            </div>

            <div className="stat-item">
              <div className="stat-row">
                <span className="stat-number">2M</span>
                <span className="stat-unit">
                  Dollars <br />
                  General Liability
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
