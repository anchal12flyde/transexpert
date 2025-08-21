"use client";
import Image from "next/image";

export default function davidfox() {
  const profiles = [
    {
      name: "Class: hero-heading",
      img: "/images/H1.png",
      title: "A quick brown fox jumped over the lazy dog ",
      class: "hero-heading text-center",
      branding_name: " H1 Hero Heading",
    },
    {
      name: "Class: hero-heading",
      img: "/images/david.png",
      title: "A quick brown fox jumped over the lazy dog",
      class: "heading",
      branding_name: "H2 Heading",
    },
    {
      name: "Class: card_heading",
      img: "/images/david.png",
      title: "A quick brown fox jumped over the lazy dog",
      class: "card_heading text-center",
      branding_name: "H3 Card Heading",
    },
    {
      name: "Class: card_subheading",
      img: "/images/david.png",
      title: "A quick brown fox jumped over the lazy dog",
      class: "card_subheading",
      branding_name: "H4 Card Sub-Heading",
    },
    {
      name: "Class: subheading",
      img: "/images/david.png",
      title: "A quick brown fox jumped over the lazy dog",
      class: "subheading",
      branding_name: "Sub-Heading",
    },
    {
      name: "Class: hero-button",
      img: "/images/david.png",
      title: "A quick brown fox jumped over the lazy dog",
      class: "hero-button",
      branding_name: "Buttons",
    },
    {
      name: "Class: nav-link",
      img: "/images/david.png",
      title: "A quick brown fox jumped over the lazy dog",
      class: "nav-link",
      branding_name: "Nav Links",
    },
    {
      name: "Class: footer-links li ",
      img: "/images/david.png",
      title: "A quick brown fox jumped over the lazy dog",
      class: "footer-links li ",
      branding_name: "Footer Links",
    },
    {
      name: "Class: footer-links li ",
      img: "/images/david.png",
      title: "A quick brown fox jumped over the lazy dog",
      class: "footer-links li ",
      branding_name: "Footer Links",
    },
  ];

  return (
    <section className="global-container py-10">
      {profiles.map((profile, index) => (
        <div
          key={index}
          className="flex items-center flex-col sm:flex-row border-b-[2px] border-black py-6 gap-[50px]"
        >
          {/* Left side */}
          <div className="flex flex-col flex-1 sm:basis-1/2">
            <p>Class: {profile.class} | </p>
            <p className="mb-20">Branding Name: {profile.branding_name}</p>
            <Image
              src={profile.img}
              alt={profile.name}
              width={600}
              height={50}
              className="mt-2 object-contain"
            />
          </div>

          {/* Right side */}

          <div className="flex-1 sm:basis-1/2 justify-center">
            <p>Class: {profile.class} | </p>
            <p className="mb-20">Branding Name: {profile.branding_name}</p>
            <p className={profile.class}>{profile.title}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
