"use client"
export default function ContactDetails() {
  return (
    <>
      <section className="contact-section global-container">
        <div className="contact-info">
          <div className="section">
            <h3>Head Office</h3>
            <p>
              Trans Expert Inc.
              <br />
              100 Market Drive,
              <br />
              Milton, Ontario, L9T 3H5, Canada
            </p>
            <p> Phone: 905-864-6443</p>
            <p>Fax: 1-888-378-8298</p>
          </div>

          <div className="section">
            <h3>General Inquiries</h3>
            <p>info@transexpert.ca</p>
            <p>+1-905-864-6443</p>
            <p>We typically respond within 1 business day</p>
          </div>

          {/* Add Enterprise Sales, Carrier Partnerships, Careers here */}

          {/* Ribbon Decoration */}
          <div
            style={{
              marginTop: "auto",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <img src="/images/ribbon.svg" alt="Decoration" />
          </div>
        </div>

        <div className="contact-form bshadow">
          <form className="contact-form-layout">
            <div className="form-group">
              <label>First Name</label>
              <input type="text" placeholder="First Name" />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" placeholder="Last Name" />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Email" />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input type="tel" placeholder="Phone Number" />
            </div>

            <div className="full-width">
              <label>Select Subject?</label>
              <div className="radio-group">
                <label>
                  <input type="radio" name="subject" /> General Inquiry
                </label>
                <label>
                  <input type="radio" name="subject" /> Enterprise Sales
                </label>
                <label>
                  <input type="radio" name="subject" /> Carrier Partnership
                </label>
                <label>
                  <input type="radio" name="subject" /> Careers
                </label>
              </div>
            </div>

            <div className="full-width">
              <label>Message</label>
              <textarea placeholder="Write your message.." />
            </div>

            <div className="full-width">
              <button type="submit" className="send-btn">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
