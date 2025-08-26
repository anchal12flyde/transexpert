"use client";
import Image from "next/image";

const Relaibility = () => {
  return (
    <>
      <div className="global-container mb-[78px]">
        <section className="careers-banner careers-banner_border">
          <div className="careers-content-wrapper drive_div">
            {/* Left Image */}
            <div className="careers-image-container">
              <Image
                src="/images/assets/IMG2.png"
                alt="Driver"
                width={800}
                height={400}
                className="careers-image"
              />
            </div>

            {/* Right Text */}
            <div className="careers-text-content">
              <p className=" quote-heading ">
                <img
                  src="/images/assets/quote1.png"
                  alt="quote"
                  className="quote-icon-open"
                />
                <span>
                  {" "}
                  Reliability isn't a metric.It's a{" "}
                  <span className="mindset">
                    mindset.{" "}
                    <img
                      src="/images/assets/quote2.png"
                      alt="quote"
                      className="quote-icon-close"
                    />
                  </span>
                </span>
              </p>
              <p className="card_heading mt-[5px] sm:mt-[16px]">
                — Raman Deol, Co-founder
              </p>

              <p className="subheading">
                From a modest beginning with a single route to becoming a
                trusted logistics partner across North America, our growth has
                been driven by word-of-mouth, performance, and partnerships.
                We've scaled with our clients, adapting to their industries,
                compliance standards, and growth goals.
              </p>
              <br />
              <p className="subheading">
                Today, we operate from 7 logistics hubs with over 235 trucks,
                backed by real-time GPS systems, compliance certifications, and
                a client-first team culture.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Relaibility;
