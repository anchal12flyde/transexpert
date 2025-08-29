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
      } z-10  px-3 py-2`}
    >
      <span className="block text-5xl leading-none">
        {dir === "left" ? "‹" : "›"}
      </span>
    </button>
  );
}

export default function RecognizedCertifications() {
  const certificationsData = [
    {
      title: "SmartWay Partner",
      subtitle: "(EPA)",
      description:
        "Fuel-efficient fleet operations recognized by the U.S. Environmental Protection Agency.",
      logo: "/images/assets/image4.png",
    },
    {
      title: "C-TPAT",
      subtitle: "(U.S. Customs & Border Protection)",
      description:
        "Certified secure trade partner, meeting anti-terrorism and border security standards.",
      logo: "/images/assets/image1.png",
    },
    {
      title: "FAST",
      subtitle: "(Free and Secure Trade)",
      description:
        "Expedites cross-border processing for low-risk carriers between Canada and the U.S.",
      logo: "/images/assets/image2.png",
    },
    {
      title: "PIP",
      subtitle: "(Partners in Protection)",
      description:
        "Canadian program aligning with C-TPAT for enhanced border security and compliance.",
      logo: "/images/assets/image6.png",
    },
    {
      title: "ACE & ACI",
      subtitle: "Integration",
      description:
        "Real-time electronic documentation for customs authorities across North America.",
      logo: "/images/assets/image8.png",
    },
    {
      title: "Bonded Carrier",
      subtitle: "(Canada & U.S.)",
      description:
        "Licensed to move in-transit cargo without duty payment until final destination.",
      logo: "/images/assets/image7.png",
    },
    {
      title: "ACE & ACI",
      subtitle: "Integration",
      description:
        "Real-time electronic documentation for customs authorities across North America.",
      logo: "/images/assets/image3.png",
    },
    {
      title: "CAMSC",
      subtitle: "(Certified Minority-Owned Business)",
      description:
        "Diversity-driven supplier eligible for major enterprise and government procurement.",
      logo: "/images/assets/image5.png",
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
    <div className="mt-16 ">
      <div className="global-container mt-[42px] sm:mt-[78px] relative">
        {/* Desktop */}
        <div className="hidden sm:grid grid-cols-2 gap-[81px] macbook">
          {certificationsData.map((c, index) => (
            <div
              key={index}
              className="flex items-start rounded-[16px] p-[78px] gap-4 bshadow h-[380px]"
            >
              <Image alt={c.title} src={c.logo} width={150} height={200} />
              <div className="flex flex-col gap-[16px]">
                <div>
                  <p className="heading !mb-0">{c.title}</p>
                  <p className="subheading">{c.subtitle}</p>
                </div>
                <p className="subheading">{c.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile */}
        <div className="block sm:hidden relative mb-[80px]">
          <Slider {...mobileSettings}>
            {certificationsData.map((c, index) => (
              <div key={index} className="px-2 pb-1 pt-1">
                <div className="flex flex-col items-center justify-center text-center rounded-[16px] px-[22px] py-[34px] gap-6 bshadow bg-white h-[340px]">
                  <Image alt={c.title} src={c.logo} width={120} height={120} />
                  <div className="flex flex-col gap-3 mt-4">
                    <p className="heading">{c.title}</p>
                    <p className="subheading">{c.subtitle}</p>
                    <p className="subheading">{c.description}</p>
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
