import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function RecognizedCertifications() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth; // ek viewport width ke barabar slide hoga
      if (direction === "left") {
        scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };
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

  return (
    <div className="mt-16">
      <div className="global-container mt-[42px] sm:mt-[78px] relative">
        {/* Desktop Grid */}
        <div className="hidden sm:grid grid-cols-2 gap-[81px]">
          {certificationsData.map((c, index) => (
            <div
              key={index}
              className="flex items-start rounded-[16px] p-[78px] gap-4 bshadow"
            >
              <Image alt={c.title} src={c.logo} width={150} height={200} />
              <div className="flex flex-col gap-5">
                <div>
                  <p className="heading !mb-0">{c.title}</p>
                  <p className="subheading">{c.subtitle}</p>
                </div>
                <p className="subheading">{c.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="sm:hidden relative">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar"
          >
            {certificationsData.map((c, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 snap-center flex flex-col items-center justify-center text-center rounded-[16px] p-6 bshadow bg-white"
              >
                <Image
                  alt={c.title}
                  src={c.logo}
                  width={120}
                  height={120}
                  className="mx-auto"
                />
                <div className="flex flex-col gap-3 mt-4">
                  <p className="heading">{c.title}</p>
                  <p className="subheading">{c.subtitle}</p>
                  <p className="subheading">{c.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Arrows */}
          <button
            onClick={() => scroll("left")}
            className="absolute top-1/2 left-2 -translate-y-1/2 bg-white rounded-full p-2 shadow"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-white rounded-full p-2 shadow"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
