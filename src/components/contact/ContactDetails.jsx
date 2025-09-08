"use client";
import { useState } from "react";

export default function ContactDetails() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    if (data.success) {
      alert("✅ Contact form submitted!");
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } else {
      alert("❌ Error: " + data.error);
    }
  };

  return (
    <section className="contact-section global-container">
      {/* ---- Contact Information ---- */}
      <div className="contact-info">
        <div className="section">
          <h3 className="contact-heading">Head Office</h3>
          <p className="contact-para mb-[16px]">
            <img
              src="/images/assets/location.png"
              alt="Location Icon"
              width={16}
              height={16}
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
            <span className="block ml-[27px]">
              Milton, Ontario, L9T 3H5, Canada
            </span>
          </p>
          <p className="contact-para mb-[16px]">
            <img
              src="/images/assets/phone-call.png"
              alt="Phone Icon"
              width={19}
              height={19}
              style={{
                display: "inline-block",
                marginRight: "8px",
                verticalAlign: "middle",
              }}
            />{" "}
            Phone: 905-864-6443
          </p>
          <p className="contact-para">
            <img
              src="/images/assets/mdi_fax.png"
              alt="Fax Icon"
              width={19}
              height={19}
              style={{
                display: "inline-block",
                marginRight: "8px",
                verticalAlign: "middle",
              }}
            />{" "}
            Fax: 1-888-378-8298
          </p>
        </div>

        <div className="section">
          <h3 className="contact-heading">General Inquiries</h3>
          <p className="contact-para mb-[16px]">
            <img
              src="/images/assets/mail.png"
              alt="Mail Icon"
              width={16}
              height={16}
              style={{
                display: "inline-block",
                marginRight: "8px",
                verticalAlign: "middle",
              }}
            />{" "}
            info@transexpert.ca
          </p>
          <p className="contact-para mb-[16px]">
            <img
              src="/images/assets/phone-call.png"
              alt="Phone Icon"
              width={19}
              height={19}
              style={{
                display: "inline-block",
                marginRight: "8px",
                verticalAlign: "middle",
              }}
            />{" "}
            +1-905-864-6443
          </p>
          <p className="contact-para">
            We typically respond within 1 business day
          </p>
        </div>

        <div className="section">
          <h3 className="contact-heading">Sales</h3>
          <p className="contact-para mb-[16px]">
            Looking to discuss enterprise logistics or request a proposal?
          </p>
          <p className="contact-para mb-[16px]">
            <img
              src="/images/assets/mail.png"
              alt="Mail Icon"
              width={16}
              height={16}
              style={{
                display: "inline-block",
                marginRight: "8px",
                verticalAlign: "middle",
              }}
            />{" "}
            sales@transexpert.ca
          </p>
          <p className="contact-para">
            All inquiries remain confidential and under NDA.
          </p>
        </div>

        <div className="section">
          <h3 className="contact-heading">Partnerships</h3>
          <p className="contact-para mb-[16px]">
            Interested in becoming an approved vendor?
          </p>
          <p className="contact-para">
            <img
              src="/images/assets/mail.png"
              alt="Mail Icon"
              width={16}
              height={16}
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
          <h3 className="contact-heading">Careers</h3>
          <p className="contact-para mb-[16px]">
            We’re always on the lookout for drivers, dispatchers, and logistics
            pros
          </p>
          <p className="contact-para">
            <img
              src="/images/assets/mail.png"
              alt="Mail Icon"
              width={16}
              height={16}
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
            alt="Facebook"
            className="social-icon"
          />
          <img
            src="/images/assets/insta.png"
            alt="Instagram"
            className="social-icon"
          />
          <img
            src="/images/assets/twiitter.png"
            alt="Twitter"
            className="social-icon"
          />
        </div>

        {/* Ribbon Decoration */}
        <div className="decor-image">
          <img src="/images/assets/vector2.png" alt="Decoration" />
        </div>
      </div>

      {/* ---- Contact Form ---- */}
      <div className="contact-form bshadow">
        <form className="contact-form-layout" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="contact-para">First Name</label>
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="contact-para">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label className="contact-para">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="contact-para">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
            />
          </div>

          <div className="full-width">
            <label className="contact-para">Select Subject?</label>
            <div className="radio-group">
              {[
                "General Inquiry",
                "Enterprise Sales",
                "Carrier Partnership",
                "Careers",
              ].map((s) => (
                <label key={s}>
                  <input
                    type="radio"
                    name="subject"
                    value={s}
                    checked={form.subject === s}
                    onChange={handleChange}
                  />{" "}
                  {s}
                </label>
              ))}
            </div>
          </div>

          <div className="full-width">
            <label className="contact-para">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message.."
            />
          </div>

          <div className="flex justify-center mt-[42px] sm:mt-[78px]">
            <button onClick={handleSubmit} type="submit" className="hero-button">
              Apply Now
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
