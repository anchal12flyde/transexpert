"use client";

export default function EthicsSection() {
  return (
    <section className="ethics-section">
      <div className="global-container">
        <div className="ethics-headings">
          <h3 className="ethics-title red">Business Ethics & Transparency</h3>
          <h3 className="ethics-title">Human Rights Policy</h3>
          <h3 className="ethics-title">Health & Safety Protocols</h3>
        </div>
        <p className="ethics-text">
          We uphold the highest standards of integrity by ensuring ethical
          governance at every level of our operations. Our commitment includes
          strong anti-discrimination policies and equal opportunity principles
          that foster a fair and inclusive environment. We also require our
          suppliers and contractors to align with our{" "}
          <a href="#" className="link">
            Corporate Social Responsibility (CSR) policies
          </a>
          , maintaining accountability throughout our network. To ensure
          transparency and continuous improvement, we conduct annual CSR
          reporting and impact audits.
        </p>
      </div>
    </section>
  );
}
