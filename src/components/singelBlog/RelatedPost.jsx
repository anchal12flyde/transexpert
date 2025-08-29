"use client";

const RelatedPost = ({ calcValue }) => {
  console.log(calcValue);
  return (
    <section className="blog-section global-container" style={{marginTop : `${calcValue - 50  }px` }} >
      <h2 className="heading ju">Related posts</h2>

      <div className="blog-grid-blog">
        <div className="blog-box">
          <img src="/images/Image1.png" alt="Truck" className="blog-image" />
          <div className="blog-content">
            <div className="title-with-icon">
              <h3 className="related-post-heading">
                5 Things to Know About Cross-Border Freight Compliance
              </h3>
              <div className="arrow-icon">
                <img src="/images/assets/arrowUp.png" alt="Arrow" />
              </div>
            </div>
            <p className="related-post-subheading">
              Your guide to smoother, faster shipments between Canada, the U.S.,
              and Mexico.
            </p>
          </div>
        </div>

        <div className="blog-box">
          <img src="/images/Image2.png" alt="Truck" className="blog-image" />
          <div className="blog-content">
            <div className="title-with-icon">
              <h3 className="related-post-heading">
                5 Things to Know About Cross-Border Freight Compliance
              </h3>
              <div className="arrow-icon">
                <img src="/images/assets/arrowUp.png" alt="Arrow" />
              </div>
            </div>
            <p className="related-post-subheading">
              Your guide to smoother, faster shipments between Canada, the U.S.,
              and Mexico.
            </p>
          </div>
        </div>

        <div className="blog-box">
          <img src="/images/Image3.png" alt="Truck" className="blog-image" />
          <div className="blog-content">
            <div className="title-with-icon">
              <h3 className="related-post-heading ">
                5 Things to Know About Cross-Border Freight Compliance
              </h3>
              <div className="arrow-icon">
                <img src="/images/assets/arrowUp.png" alt="Arrow" />
              </div>
            </div>
            <p className="related-post-subheading">
              Your guide to smoother, faster shipments between Canada, the U.S.,
              and Mexico.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedPost;
