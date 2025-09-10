"use client";

const RelatedPost = ({ calcValue }) => {
  console.log(calcValue);
  return (
    <section
      className="blog-section global-container"
      style={{ marginTop: `${calcValue - 50}px` }}
    >
      <h2 className="related_heading ju">Related posts</h2>

      <div className="blog-grid-blog">
        <div className="blog-box">
          <img
            src="https://ik.imagekit.io/a9uxeuyhx/Image1.png?updatedAt=1757408874966"
            alt="Truck"
            className="blog-image"
          />
          <div className="blog-content">
            <div className="title-with-icon">
              <h3 className="related-post-heading">
                5 Things to Know About Cross-Border Freight Compliance
              </h3>
              <div className="arrow-icon">
                <img src="/images/assets/redarrow.png" alt="Arrow" />
              </div>
            </div>
            <p className="related-post-subheading">
              Your guide to smoother, faster shipments between Canada, the U.S.,
              and Mexico.
            </p>
          </div>
        </div>

        <div className="blog-box">
          <img
            src="https://ik.imagekit.io/a9uxeuyhx/Image2.png?updatedAt=1757408919424"
            alt="Truck"
            className="blog-image"
          />
          <div className="blog-content">
            <div className="title-with-icon">
              <h3 className="related-post-heading">
                5 Things to Know About Cross-Border Freight Compliance
              </h3>
              <div className="arrow-icon">
                <img src="/images/assets/redarrow.png" alt="Arrow" />
              </div>
            </div>
            <p className="related-post-subheading">
              Your guide to smoother, faster shipments between Canada, the U.S.,
              and Mexico.
            </p>
          </div>
        </div>

        <div className="blog-box">
          <img
            src="https://ik.imagekit.io/a9uxeuyhx/Image3.png?updatedAt=1757408951098"
            alt="Truck"
            className="blog-image"
          />
          <div className="blog-content">
            <div className="title-with-icon">
              <h3 className="related-post-heading ">
                5 Things to Know About Cross-Border Freight Compliance
              </h3>
              <div className="arrow-icon">
                <img src="/images/assets/redarrow.png" alt="Arrow" />
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
