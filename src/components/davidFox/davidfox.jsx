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
      css: " font-size: 48px; font-style: normal;font-weight: 700;line-height: normal;",
    },
    {
      name: "Class: heading",
      img: "/images/david.png",
      title: "A quick brown fox jumped over the lazy dog",
      class: "heading",
      branding_name: "H2 Heading",
      css: "font-size: 32px;font-weight: 600;line-height: normal;",
    },
    {
      name: "Class: card_heading",
      img: "/images/david.png",
      title: "A quick brown fox jumped over the lazy dog",
      class: "card_heading text-center",
      branding_name: "H3 Card Heading",
      css: "font-size: 24px;font-weight: 400;line-height: normal;",
    },
    {
      name: "Class: card_subheading",
      img: "/images/david.png",
      title: "A quick brown fox jumped over the lazy dog",
      class: "card_subheading",
      branding_name: "H4 Card Sub-Heading",
      css: "   font-size: 16px;font-weight: 400;line-height: normal;",
    },
    {
      name: "Class: subheading",
      img: "/images/david.png",
      title: "A quick brown fox jumped over the lazy dog",
      class: "subheading",
      branding_name: "Sub-Heading",
      css: "  font-size: 20px; font-style: normal;font-weight: 400; line-height: 26px;letter-spacing: 0;",
    },
    {
      name: "Class: hero-button",
      img: "/images/david.png",
      title: "A quick brown fox jumped over the lazy dog",
      class: "hero-button",
      branding_name: "Buttons",
      css: "",
    },
    {
      name: "Class: nav-link",
      img: "/images/david.png",
      title: "A quick brown fox jumped over the lazy dog",
      class: "nav-link",
      branding_name: "Nav Links",
      css: "",
    },
    {
      name: "Class: footer-links li ",
      img: "/images/david.png",
      title: "A quick brown fox jumped over the lazy dog",
      class: "footer-links li ",
      branding_name: "Footer Links",
      css: "",
    },
    {
      name: "Class: footer-links li ",
      img: "/images/david.png",
      title: "A quick brown fox jumped over the lazy dog",
      class: "footer-links li ",
      branding_name: "Footer Links",
      css: "",
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
            <p>Class: {profile.class}</p>
            <p className="mb-20">
              {profile.css}
            </p>

            <p className={profile.class}>{profile.title}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
