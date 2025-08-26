"use client"
import { useRouter } from "next/navigation";

export default function Industries() {
  const router = useRouter();
  return (
    <>
      <section className="industries-section ">
        <div className="industries-container">
          {/* Left Side */}
          <div className="industries-text ">
            <h2 className="heading">Industries we work with</h2>
            <p className="subheading">
              From raw materials to finished goods, we deliver reliable,
              cross-border logistics solutions tailored to your industry.
              Whether you're stocking shelves, supplying storefronts, or fueling
              production lines, TransExpert ensures fast, secure, and seamless
              transportation across Canada, the U.S., and Mexico.
            </p>
            <br />
            <p className="subheading">
              From raw materials to finished goods, we deliver reliable,
              cross-border logistics solutions tailored to your industry.
              Whether you're stocking shelves, supplying storefronts, or fueling
              production lines, TransExpert ensures fast, secure, and seamless
              transportation across Canada, the U.S., and Mexico.
            </p>
            <button
              className="hero-button"
              onClick={() => router.push("/industries")}
            >
              Know more
            </button>
          </div>

          {/* Right Side */}
          <div className="industries-cards">
            <div
              className="industry-card"
              style={{
                backgroundImage: `url('/images/assets/Wholesale.jpg')`,
              }}
            >
              <span className="industry-span">Wholesale</span>
            </div>
            <div
              className="industry-card"
              style={{ backgroundImage: `url('/images/assets/Retail.jpg')` }}
            >
              <span className="industry-span">Retail</span>
            </div>
            <div
              className="industry-card"
              style={{
                backgroundImage: `url('/images/assets/Manufacture.jpg')`,
              }}
            >
              <span className="industry-span">Manufacturers</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
