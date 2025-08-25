"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = dynamic(() => import("react-slick").then((m) => m.default), {
  ssr: false,
});

function Arrow({ onClick, dir }) {
  return (
    <button
      aria-label={dir === "left" ? "Previous" : "Next"}
      onClick={onClick}
      className={`absolute top-1/2 -translate-y-1/2 ${
        dir === "left" ? "-left-7" : "-right-7"
      } z-10  px-3 py-2 `}
    >
      <span className="block text-5xl leading-none">
        {dir === "left" ? "‹" : "›"}
      </span>
    </button>
  );
}

export default function Commitments() {
  const certificationsData = [
    {
      title: "Employee Well-being",
      description:
        " Safe, fair, inclusive workplaces with living wages, equal pay, mental health days, and flexible support for new mothers.",
      logo: "/images/assets/heart-health-muscle.png",
    },
    {
      title: "Health & Safety",
      description:
        "Strict adherence to safety protocols and proactive training for every team member.",
      logo: "/images/assets/shield-check.png",
    },
    {
      title: "Environmental Responsibility",
      description:
        "SmartWay-certified operations, idle-reduction technologies, and an energy-efficient fleet.",
      logo: "/images/assets/plant-care.png",
    },
    {
      title: "Customer Relationships",
      description:
        "Transparent, quality-first logistics that meet all compliance requirements.",
      logo: "/images/assets/crm-alt.png",
    },
    {
      title: "Supplier Ethics",
      description:
        "Fair treatment and shared sustainability values throughout our supply chain.",
      logo: "/images/assets/supplier-alt.png",
    },
    {
      title: "Community Involvement",
      description:
        "Donations, local hiring, and support for staff-facing hardships.",
      logo: "/images/assets/network-user.png",
    },
    {
      title: "Professional Ethics",
      description:
        "Accountability, transparency, and a culture of respect and fairness.",
      logo: "/images/assets/briefcase.png",
    },
    {
      title: "Sustainable Development",
      description:
        "Long-term impact in the communities we serve, including transportation access and economic contribution.",
      logo: "/images/assets/eco-battery.png",
    },
  ];

  const mobileSettings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <Arrow dir="right" />,
    prevArrow: <Arrow dir="left" />,
    appendDots: (dots) => (
      <div style={{ bottom: "-30px" }}>
        <ul className="!m-0">{dots}</ul>
      </div>
    ),
    dotsClass: "slick-dots",
  };

  return (
    <div className="mb-[42px] sm:mb-[78px]">
      <div className="global-container mt-[78px]">
        {/* Desktop */}
        <div className="hidden sm:grid grid-cols-4 gap-[81px]">
          {certificationsData.map((c, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-[16px] px-[22px] py-[34px] gap-6 bshadow h-[380px]"
            >
              <Image alt={c.title} src={c.logo} width={36} height={36} />
              <div className="flex flex-col gap-5">
                <p className="heading !mb-0 text-center">{c.title}</p>
                <p className="subheading text-center">{c.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile */}
        <div className="block sm:hidden relative">
          <Slider {...mobileSettings}>
            {certificationsData.map((c, index) => (
              <div key={index} className="px-2">
                <div className="flex flex-col items-center rounded-[16px] px-[22px] py-[34px] gap-6 bshadow bg-white h-[320px]">
                  <Image alt={c.title} src={c.logo} width={36} height={36} />
                  <div className="flex flex-col gap-5">
                    <p className="heading !mb-0 text-center">{c.title}</p>
                    <p className="subheading text-center">{c.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
