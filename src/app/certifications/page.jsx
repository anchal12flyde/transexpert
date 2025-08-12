import ImageHeader from "@/components/imageHeader/page";
import Image from "next/image";
import "@/app/globals.css";

export default function Certificatios() {
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
    <div className="">
      <ImageHeader />

      <div className="mt-16">
        <div className="flex flex-col items-center gap-4">
          <p className="font-bold heading text-center ">
            Our Recognized Certifications
          </p>
          <p className="w-[880px]  text-center text-[18px] ">
            At Trans Expert Inc., compliance isn’t an afterthought, it’s the
            foundation of how we operate. Our certifications are more than
            checkboxes; they are a daily commitment to safety, security, and
            performance.
          </p>
        </div>

        <div className="global-container">
          <div className="grid grid-cols-2 gap-[81px] ">
            {certificationsData.map((c) => (
              <div className="flex items-start rounded-[16px] p-[78px] gap-4 bshadow ">
                <Image alt={c.title} src={c.logo} width={150} height={200} />
                <div className="flex flex-col gap-5 ">
                  <div>
                    <p className="heading !mb-0 ">{c.title}</p>
                    <p className="subheading">{c.subtitle}</p>
                  </div>
                  <p className="subheading">{c.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
