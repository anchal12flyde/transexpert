"use client";
import Image from "next/image";

export default function IndustriesWork() {
  return (
    <section className="industries global-container">
      <div className="industries__grid">
        {/* Wholesale */}
        <div className="industries__card industries__card--image">
          <Image
            src="https://ik.imagekit.io/a9uxeuyhx/Rectangle%208.png?updatedAt=1757414292850"
            alt="Wholesale"
            width={400}
            height={250}
            className="industries__img"
          />
          <span className="industries__label">Wholesale</span>
        </div>
        <div className="industries__card industries__card--text">
          <h3 className="industries__title">Wholesale</h3>
          <p className="industries__desc">
            Efficient distribution across multiple destinations is our strength.
            We enable smart routing for your bulk movement needs.
          </p>
          <ul className="industries__list">
            <li>Multi-stop FTL</li>
            <li>Cross-docking and zone-based distribution</li>
            <li>Time-window coordination</li>
          </ul>
        </div>
      </div>
      {/* Retail */}
      <div className="industries__grid1">
        <div className="industries__card1 industries__card--text1 order-2 lg:order-1">
          <h3 className="industries__title">Retail</h3>
          <p className="industries__desc">
            From big-box distribution centers to boutique store restocks, we
            understand the velocity retail demands.
          </p>
          <ul className="industries__list">
            <li>Express restock delivery</li>
            <li>Temperature-controlled FMCG</li>
            <li>Store-level direct drops</li>
          </ul>
        </div>
        <div className="industries__card industries__card--image order-1 lg:order-2">
          <Image
            src="https://ik.imagekit.io/a9uxeuyhx/Rectangle%206.png?updatedAt=1757414344324"
            alt="Retail"
            width={400}
            height={250}
            className="industries__img"
          />
          <span className="industries__label">Retail</span>
        </div>
      </div>

      {/* Manufactures */}
      <div className="industries__grid">
        <div className="industries__card industries__card--image">
          <Image
            src="https://ik.imagekit.io/a9uxeuyhx/Rectangle%207.png?updatedAt=1757414388479"
            alt="Manufactures"
            width={400}
            height={250}
            className="industries__img"
          />
          <span className="industries__label">Manufactures</span>
        </div>
        <div className="industries__card industries__card--text">
          <h3 className="industries__title">Manufacturing</h3>
          <p className="industries__desc">
            High-volume, just-in-time supply chains need tight timelines and
            reliability. We ensure production never slows due to logistics.
          </p>
          <ul className="industries__list">
            <li>Raw materials & parts transportation</li>
            <li>Plant-to-plant transfers</li>
            <li>Support for 24/7 manufacturing schedules</li>
          </ul>
        </div>
      </div>

      {/* Red Banner */}
      <div className="industries__banner">
        <h4 className="industries__banner-title">
          Special Handling for Enterprise Clients
        </h4>
        <p className="industries__banner-desc subheading">
          Special handling for enterprise clients with dedicated dispatch,
          SLA-aligned delivery, and scalable capacity for peak seasons.
        </p>
        <img
          src="https://ik.imagekit.io/a9uxeuyhx/Group%202.png?updatedAt=1757414436572"
          alt="Close Icon"
          className="industries__banner-icon"
        />
      </div>
    </section>
  );
}
