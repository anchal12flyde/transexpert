"use client";
export default function ContactDetails() {
  return (
    <>
      <section className="contact-section global-container">
        <div className="contact-info">
          <div className="section">
            <h3 className="heading">Head Office</h3>
            <p className="contact-para mb-[16px]">
              <img
                src="/images/assets/location.png"
                alt="Location Icon"
                width={19}
                height={19}
                style={{
                  display: "inline-block",
                  marginRight: "8px",
                  verticalAlign: "middle",
                }}
              />
              Trans Expert Inc.
              <br />
              <span style={{ paddingLeft: "27px" }}>100 Market Drive,</span>
              <br />
              <span style={{ paddingLeft: "27px" }}>
                {" "}
                Milton, Ontario, L9T 3H5, Canada
              </span>
            </p>
            <p className="contact-para mb-[16px]">
              {" "}
              <img
                src="/images/assets/phone-call.png"
                alt="Location Icon"
                width={16}
                height={16}
                style={{
                  display: "inline-block",
                  marginRight: "8px",
                  verticalAlign: "middle",
                }}
              />{" "}
              Phone: 905-864-6443
            </p>
            <p className="contact-para">
              {" "}
              <img
                src="/images/assets/mdi_fax.png"
                alt="Location Icon"
                width={19}
                height={19}
                style={{
                  display: "inline-block",
                  marginRight: "8px",
                  verticalAlign: "middle",
                }}
              />
              Fax: 1-888-378-8298
            </p>
          </div>

          <div className="section">
            <h3 className="heading">General Inquiries</h3>
            <p className="contact-para mb-[16px]">
              {" "}
              <img
                src="/images/assets/mail.png"
                alt="Location Icon"
                width={19}
                height={19}
                style={{
                  display: "inline-block",
                  marginRight: "8px",
                  verticalAlign: "middle",
                }}
              />
              info@transexpert.ca
            </p>
            <p className="contact-para mb-[16px]">
              {" "}
              <img
                src="/images/assets/phone-call.png"
                alt="Location Icon"
                width={16}
                height={16}
                style={{
                  display: "inline-block",
                  marginRight: "8px",
                  verticalAlign: "middle",
                }}
              />
              +1-905-864-6443
            </p>
            <p className="contact-para">
              We typically respond within 1 business day
            </p>
          </div>

          <div className="section">
            <h3 className="heading">Enterprise Sales</h3>
            <p className="contact-para mb-[16px]">
              Looking to discuss enterprise logistics or request a proposal?
            </p>
            <p className="contact-para mb-[16px]">
              {" "}
              <img
                src="/images/assets/mail.png"
                alt="Location Icon"
                width={19}
                height={19}
                style={{
                  display: "inline-block",
                  marginRight: "8px",
                  verticalAlign: "middle",
                }}
              />
              sales@transexpert.ca
            </p>
            <p className="contact-para">
              All inquiries remain confidential and under NDA.
            </p>
          </div>
          <div className="section">
            <h3 className="heading">Carrier Partnerships</h3>
            <p className="contact-para  mb-[16px]">
              Interested in becoming an approved carrier or vendor?
            </p>

            <p className="contact-para">
              {" "}
              <img
                src="/images/assets/mail.png"
                alt="Location Icon"
                width={19}
                height={19}
                style={{
                  display: "inline-block",
                  marginRight: "8px",
                  verticalAlign: "middle",
                }}
              />{" "}
              partnerships@transexpert.ca
            </p>
          </div>
          <div className="section">
            <h3 className="heading">Careers</h3>
            <p className="contact-para  mb-[16px]">
              We’re always on the lookout for drivers, dispatchers, and
              logistics pros
            </p>
            <p className="contact-para">
              {" "}
              <img
                src="/images/assets/mail.png"
                alt="Location Icon"
                width={19}
                height={19}
                style={{
                  display: "inline-block",
                  marginRight: "8px",
                  verticalAlign: "middle",
                }}
              />{" "}
              careers@transexpert.ca
            </p>
          </div>
          <div className="section">
            <img
              src="/images/assets/facebook.png"
              alt="Location Icon"
              className="social-icon"
            />
            <img
              src="/images/assets/insta.png"
              alt="Location Icon"
              className="social-icon"
            />
            <img
              src="/images/assets/twiitter.png"
              alt="Location Icon"
              className="social-icon"
            />
          </div>

          {/* Ribbon Decoration */}
          <div className="decor-image">
            <img src="/images/assets/vector2.png" alt="Decoration" />
          </div>
        </div>

        <div className="contact-form bshadow">
          <form className="contact-form-layout">
            <div className="form-group">
              <label className="contact-para">Full Name</label>
              <input type="text" placeholder="John Doe" />
            </div>
            <div className="form-group">
              <label className="contact-para">Company Name</label>
              <input type="text" placeholder="Transexpert Inc." />
            </div>

            <div className="form-group">
              <label className="contact-para">Email</label>
              <input type="email" placeholder="you@example.com" />
            </div>
            <div className="form-group">
              <label className="contact-para">Phone Number</label>
              <input type="tel" placeholder="+1 (555) 123-4567" />
            </div>

            <div className="form-group">
              <label className="contact-para">Pickup Location</label>
              <input type="text" placeholder="Toronto, ON" />
            </div>
            <div className="form-group">
              <label className="contact-para">Drop Location</label>
              <input type="text" placeholder="Vancouver, BC" />
            </div>

            <div className="full-width">
              <label className="contact-para">Shipment Type</label>
              <div className="radio-group">
                <label>
                  <input type="radio" name="shipment" /> Full Truck Load
                </label>
                <label>
                  <input type="radio" name="shipment" /> Temperature Controlled
                </label>
                <label>
                  <input type="radio" name="shipment" /> Cross Docking
                </label>
                <label>
                  <input type="radio" name="shipment" /> Cross Border
                </label>
              </div>
            </div>

            <div className="full-width">
              <label className="contact-para">Load Type</label>
              <div className="radio-group">
                <label>
                  <input type="radio" name="loadType" /> Dry Van
                </label>
                <label>
                  <input type="radio" name="loadType" /> Reefer
                </label>
                <label>
                  <input type="radio" name="loadType" /> Flatbed
                </label>
                <label>
                  <input type="radio" name="loadType" /> Hazmat
                </label>
              </div>
            </div>

            <div className="form-group">
              <label className="contact-para">Weight (kg/lb)</label>
              <input type="number" placeholder="1000 kg" />
            </div>
            <div className="form-group">
              <label className="contact-para">Dimensions (L × W × H)</label>
              <input type="text" placeholder="2m × 1.5m × 1.8m" />
            </div>

            <div className="full-width">
              <label className="contact-para">Pickup Date</label>
              <input type="date" />
            </div>
            <div className="full-width">
              <label className="contact-para">Delivery Date (optional)</label>
              <input type="date" />
            </div>

            <div className="full-width">
              <label className="contact-para">Frequency</label>
              <div className="radio-group">
                <label>
                  <input type="radio" name="frequency" /> One-time
                </label>
                <label>
                  <input type="radio" name="frequency" /> Weekly
                </label>
                <label>
                  <input type="radio" name="frequency" /> Monthly
                </label>
                <label>
                  <input type="radio" name="frequency" /> Contract Basis
                </label>
              </div>
            </div>

            <div className="full-width">
              <label className="contact-para">Additional Notes</label>
              <textarea placeholder="Any special instructions..." />
            </div>
          </form>

          <div className="flex justify-center mt-[78px]">
            <button className="hero-button">Get My Quote</button>
          </div>
        </div>
      </section>
    </>
  );
}
