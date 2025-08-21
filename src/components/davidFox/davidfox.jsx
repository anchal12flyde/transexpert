"use client";
import Image from "next/image";

export default function davidfox() {
  const profiles = [
    {
      name: "David Fox",
      img: "/images/david.png",
      title: "Quick Brown Foxes",
    },
    {
      name: "David Fox",
      img: "/images/david.png",
      title: "Quick Brown Foxes",
    },
    {
      name: "David Fox",
      img: "/images/david.png",
      title: "Quick Brown Foxes",
    },
  ];

  return (
    <section className="global-container py-10">
      {profiles.map((profile, index) => (
        <div
          key={index}
          className="flex items-center flex-col  sm:flex-row border-b-[2px] border-black py-6 gap-[50px]"
        >
          {/* Left side */}
          <div className="flex flex-col">
            <p className="david-heading">{profile.name}</p>
            <Image
              src={profile.img}
              alt={profile.name}
              width={600}
              height={50}
              className="mt-2 object-cover"
            />
          </div>

          {/* Right side */}
          <div>
            <p className="david-text">{profile.title}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
