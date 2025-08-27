"use client";
export default function ContactDetails() {
  return (
    <>
      <section className="flex flex-col mb-[42px] sm:mb-[78px] w-full items-center justify-center global-container mt-[78px] ">
        

        <div className="contact-form bshadow">
          <form className="contact-form-layout !max-w-7xl ">
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
