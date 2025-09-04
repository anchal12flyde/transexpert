"use client";
import { useState, useRef, useEffect } from "react";

export default function EthicsSection() {
  const tabs = [
    {
      title: "Business Ethics & Transparency",
      content: `We uphold the highest standards of integrity by ensuring ethical governance at every
      level of our operations. Our commitment includes strong anti-discrimination policies
      and equal opportunity principles that foster a fair and inclusive environment. We also
      require our suppliers and contractors to align with our Corporate Social Responsibility (CSR) policies,
      maintaining accountability throughout our network. To ensure transparency and continuous improvement,
      we conduct annual CSR reporting and impact audits.`,
    },
    {
      title: "Human Rights Policy",
      content: `Our Human Rights Policy is designed to promote fairness and equality across our operations.
      We respect and protect human rights as outlined in international law and require all employees and partners
      to adhere to these standards.`,
    },
    {
      title: "Health & Safety Protocols",
      content: `We prioritize the safety and well-being of our employees and partners.
      Our protocols meet or exceed all relevant regulatory requirements and are regularly reviewed
      to maintain a safe working environment.`,
    },
  ];

  const [activeTab, setActiveTab] = useState(0);
  const [underlineStyle, setUnderlineStyle] = useState({});
  const [openAccordion, setOpenAccordion] = useState(null); // for mobile
  const tabRefs = useRef([]);

  useEffect(() => {
    if (tabRefs.current[activeTab]) {
      const tabElement = tabRefs.current[activeTab];
      const container = tabElement.closest(".global-container"); // parent container
      const containerPaddingLeft =
        parseInt(getComputedStyle(container).paddingLeft) || 0;

      setUnderlineStyle({
        width: tabElement.offsetWidth + "px",
        left: tabElement.offsetLeft - containerPaddingLeft + "px", // minus padding
      });
    }
  }, [activeTab]);
  

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <section className="mb-[42px] lg:mb-[78px]">
      <div className="global-container">
        {/* Desktop Tabs */}
        <div className="tab-desktop">
          <div className="tab-header">
            {tabs.map((tab, index) => (
              <div
                key={index}
                ref={(el) => (tabRefs.current[index] = el)}
                className={`tab-item ${activeTab === index ? "active" : ""}`}
                onClick={() => setActiveTab(index)}
              >
                {tab.title}
              </div>
            ))}
          </div>

          <div className="tab-line">
            <span className="tab-underline" style={underlineStyle}></span>
          </div>

          <p className="tab-content subheading">{tabs[activeTab].content}</p>
        </div>

        {/* Mobile Accordion */}
        <div className="tab-mobile">
          {tabs.map((tab, index) => (
            <div key={index} className="accordion-item">
              <div
                className={`accordion-header ${
                  openAccordion === index ? "active" : ""
                }`}
                onClick={() => toggleAccordion(index)}
              >
                <span className="accordion-title">{tab.title}</span>
                <span className="accordion-icon">
                  {openAccordion === index ? "−" : "+"}
                </span>
              </div>
              <div
                className={`accordion-content ${
                  openAccordion === index ? "open" : ""
                }`}
              >
                <p>{tab.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
