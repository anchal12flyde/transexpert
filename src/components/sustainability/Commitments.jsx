import Image from "next/image";


export default function Commitments() {
  const certificationsData = [
    {
      title: "Employee  Well-being",
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
      title: "Community  Involvement",
      description:
        "Donations, local hiring, and support for staff-facing hardships.",
      logo: "/images/assets/network-user.png",
    },
    {
      title: "Professional  Ethics",
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

  return (
    <div className="mb-[42px] sm:mb-[78px]">
      <div className="global-container mt-[78px]">
        <div className="grid grid-cols-4 gap-[81px]">
          {certificationsData.map((c, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-[16px] p-[38px] gap-6 bshadow"
            >
              <Image alt={c.title} src={c.logo} width={36} height={36} />
              <div className="flex flex-col gap-5 ">
                <div>
                  <p className="heading !mb-0 text-center">{c.title}</p>
                </div>
                <p className="subheading  text-center">{c.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
