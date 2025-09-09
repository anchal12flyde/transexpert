"use client";
import { useState } from "react";

export default function ContactDetails() {
  const [form, setForm] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    pickupLocation: "",
    deliveryLocation: "",
    shipmentType: "",
    loadType: "",
    weight: "",
    pickupDate: "",
    deliveryDate: "",
    frequency: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/qoute", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    if (data.success) {
      alert("✅ Quote submitted successfully!");
      // setForm({
      //   fullName: "",
      //   companyName: "",
      //   email: "",
      //   phone: "",
      //   pickupLocation: "",
      //   deliveryLocation: "",
      //   shipmentType: "",
      //   loadType: "",
      //   weight: "",
      //   pickupDate: "",
      //   deliveryDate: "",
      //   frequency: "",
      //   notes: "",
      // });
    } else {
      alert("❌ Error: " + data.error);
    }
  };

  console.log(form);

  return (
    <section className="flex flex-col mb-[42px] sm:mb-[78px] w-full items-center justify-center global-container mt-[78px] ">
      <div className="contact-form bshadow">
        <form
          className="contact-form-layout !max-w-7xl"
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <label className="contact-para">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              placeholder="John Doe"
              required
            />
          </div>
          <div className="form-group">
            <label className="contact-para">Company Name</label>
            <input
              type="text"
              name="companyName"
              value={form.companyName}
              onChange={handleChange}
              placeholder="Transexpert Inc."
            />
          </div>

          <div className="form-group">
            <label className="contact-para">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
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
              placeholder="+1 (555) 123-4567"
            />
          </div>

          <div className="form-group">
            <label className="contact-para">Pickup Location</label>
            <input
              type="text"
              name="pickupLocation"
              value={form.pickupLocation}
              onChange={handleChange}
              placeholder="Toronto, ON"
            />
          </div>
          <div className="form-group">
            <label className="contact-para">Delivery Location</label>
            <input
              type="text"
              name="deliveryLocation"
              value={form.deliveryLocation}
              onChange={handleChange}
              placeholder="Vancouver, BC"
            />
          </div>

          <div className="full-width">
            <label className="contact-para">Shipment Type</label>
            <div className="radio-group">
              {[
                "Full Truck Load",
                "Temperature Controlled",
                "Cross Docking",
                "Cross Border",
              ].map((type) => (
                <label key={type}>
                  <input
                    type="radio"
                    name="shipmentType"
                    value={type}
                    checked={form.shipmentType === type}
                    onChange={handleChange}
                  />{" "}
                  {type}
                </label>
              ))}
            </div>
          </div>

          <div className="full-width">
            <label className="contact-para">Load Type</label>
            <div className="radio-group">
              {["Dry Van", "Reefer", "Flatbed"].map((type) => (
                <label key={type}>
                  <input
                    type="radio"
                    name="loadType"
                    value={type}
                    checked={form.loadType === type}
                    onChange={handleChange}
                  />{" "}
                  {type}
                </label>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label className="contact-para">Weight (kg/lb)</label>
            <input
              type="number"
              name="weight"
              value={form.weight}
              onChange={handleChange}
              placeholder="1000 kg"
            />
          </div>

          <div className="full-width">
            <label className="contact-para">Pickup Date</label>
            <input
              type="date"
              name="pickupDate"
              value={form.pickupDate}
              onChange={handleChange}
            />
          </div>
          <div className="full-width">
            <label className="contact-para">Delivery Date (optional)</label>
            <input
              type="date"
              name="deliveryDate"
              value={form.deliveryDate}
              onChange={handleChange}
            />
          </div>

          <div className="full-width">
            <label className="contact-para">Frequency</label>
            <div className="radio-group">
              {["One-time", "Weekly", "Monthly", "Contract Basis"].map((f) => (
                <label key={f}>
                  <input
                    type="radio"
                    name="frequency"
                    value={f}
                    checked={form.frequency === f}
                    onChange={handleChange}
                  />{" "}
                  {f}
                </label>
              ))}
            </div>
          </div>

          <div className="full-width">
            <label className="contact-para">Additional Notes</label>
            <textarea
              name="notes"
              value={form.notes}
              onChange={handleChange}
              placeholder="Any special instructions..."
            />
          </div>

          <div className="flex justify-center mt-[78px]">
            <button
              onClick={handleSubmit}
              type="submit"
              className="hero-button"
            >
              Get My Quote
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
