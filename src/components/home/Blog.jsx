"use client";

const Blog = () => {
  return (
    <section className="blog-section global-container">
      <div className=" blog-grid">
        <div className="blog-box">
          <img src="/images/Image1.png" alt="Truck" className="blog-image" />
          <div className="blog-content">
            <div className="title-with-icon">
              <h3 className="card_heading">
                5 Things to Know About Cross-Border Freight Compliance
              </h3>
              <div className="arrow-icon">
                <img src="/images/assets/arrowUp.png" alt="Arrow" />
              </div>
            </div>
            <h4 className="card_subheading text-[#1B1F26B8]">
              Your guide to smoother, faster shipments between Canada, the U.S.,
              and Mexico.
            </h4>
          </div>
        </div>

        <div className="blog-box">
          <img src="/images/Image2.png" alt="Truck" className="blog-image" />
          <div className="blog-content">
            <div className="title-with-icon">
              <h3 className="card_heading">
                TransExpert’s SmartWay Certification
              </h3>
              <div className="arrow-icon">
                <img src="/images/assets/arrowUp.png" alt="Arrow" />
              </div>
            </div>
            <p className="card_subheading text-[#1B1F26B8]">
              Our commitment to sustainable, efficient freight
            </p>
          </div>
        </div>

        <div className="blog-box">
          <img src="/images/Image3.png" alt="Truck" className="blog-image" />
          <div className="blog-content">
            <div className="title-with-icon">
              <h3 className="card_heading">
                Why Same-Day Delivery is the Future of Retail Logistics
              </h3>
              <div className="arrow-icon">
                <img src="/images/assets/arrowUp.png" alt="Arrow" />
              </div>
            </div>
            <p className="card_subheading text-[#1B1F26B8]">
              Meeting the expectations of today’s instant delivery economy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
