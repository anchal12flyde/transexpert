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
      img: "/images/H1.png",
      title: "A quick brown fox jumped over the lazy dog",
      class: "heading text-center",
      branding_name: "H2 Heading",
      css: "font-size: 32px;font-weight: 600;line-height: normal;",
    },
    {
      name: "Class: card_heading",
      img: "/images/H1.png",
      title: "A quick brown fox jumped over the lazy dog",
      class: "card_heading text-center",
      branding_name: "H3 Card Heading",
      css: "font-size: 24px;font-weight: 400;line-height: normal;",
    },
    {
      name: "Class: card_subheading",
      img: "/images/H1.png",
      title: "A quick brown fox jumped over the lazy dog",
      class: "card_subheading text-center",
      branding_name: "H4 Card Sub-Heading",
      css: "   font-size: 16px;font-weight: 400;line-height: normal;",
    },
    {
      name: "Class: subheading",
      img: "/images/H1.png",
      title: "A quick brown fox jumped over the lazy dog",
      class: "subheading text-center",
      branding_name: "Sub-Heading",
      css: "  font-size: 20px; font-style: normal;font-weight: 400; line-height: 26px;letter-spacing: 0;",
    },
    {
      name: "Class: hero-button",
      img: "/images/H1.png",
      title: "A quick brown fox jumped over the lazy dog",
      class: "hero-button text-center",
      branding_name: "Buttons",
      css: "letter-spacing: 0;font-size: 18px;font-weight: 400;line-height: normal;",
    },
    {
      name: "Class: nav-link",
      img: "/images/H1.png",
      title: "A quick brown fox jumped over the lazy dog",
      class: "nav-link text-center",
      branding_name: "Nav Links",
      css: "font-size: 16px;font-weight: 500;letter-spacing: 0.64px;",
    },
    {
      name: "Class: footer-links li ",
      img: "/images/H1.png",
      title: "A quick brown fox jumped over the lazy dog",
      class: "footer-links li text-center",
      branding_name: "Footer Links",
      css: "font-size: 16px;font-style: normal;font-weight: 500;line-height: normal; letter-spacing: 0.64px;",
    },
    {
      name: "Class: map_subheading",
      img: "/images/H1.png",
      title: "A quick brown fox jumped over the lazy dog",
      class: "map_subheading text-center",
      branding_name: "Map_heading",
      css: "  font-size: 24px;font-weight: 400;line-height: normal;",
    },
    {
      name: "Class: industry-card span ",
      img: "/images/H1.png",
      title: "A quick brown fox jumped over the lazy dog",
      class: "industry-card span  text-center",
      branding_name: "Industry image text",
      css: "font-size: 18px;font-weight: 400;",
    },
    {
      name: "Class: fleet-hero__subtitle ",
      img: "/images/H1.png",
      title: "A quick brown fox jumped over the lazy dog",
      class: "fleet-hero__subtitle  text-center",
      branding_name: "Hero subtitle",
      css: " font-size: 32px;font-weight: 600;",
    },
    {
      name: "Class: tab-header ",
      img: "/images/H1.png",
      title: "A quick brown fox jumped over the lazy dog",
      class: "tab-header  text-center",
      branding_name: "Tab Header in sustability",
      css: "   font-size: 32px;font-weight: 600;",
    },
    // {
    //   name: "Class: fleet-hero__overlay h1  ",
    //   img: "/images/david.png",
    //   title: "A quick brown fox jumped over the lazy dog",
    //   class: "fleet-hero__overlay h1   text-center relative",
    //   branding_name: "Hero Text in sub pages",
    //   css: " font-weight: 700;font-size: 48px;line-height: normal;",
    // },
    {
      name: "Class: hero-section-heading  ",
      img: "/images/H1.png",
      title: "A quick brown fox jumped over the lazy dog",
      class: "hero-section-heading  text-center",
      branding_name: " Smart, sustainable, and fleet-first logistics.",
      css: "   font-size: 48px; font-style: normal; font-weight: 700;line-height: normal;",
    },
    {
      name: "Class: text  ",
      img: "/images/H1.png",
      title: "A quick brown fox jumped over the lazy dog",
      class: "text text-center",
      branding_name: "A Fleet of (Red  Strip)",
      css: "  font-size: 40px;font-style: normal;font-weight: 700;line-height:normal;letter-spacing: 0.8px;",
    },
    {
      name: "Class: number  ",
      img: "/images/H1.png",
      title: "A quick brown fox jumped over the lazy dog",
      class: "number text-center",
      branding_name: "A Fleet of (Red  Strip Number)",
      css: "  font-weight: 700;font-size: 60px;line-height: 1.2;",
    },
    {
      name: "Class: stat-number  ",
      img: "/images/H1.png",
      title: "A quick brown fox jumped over the lazy dog",
      class: "stat-number text-center",
      branding_name: "Number(2M,250K)",
      css: " font-size: 96px;   font-weight: 700;line-height: normal;",
    },
    {
      name: "Class: blog-meta  ",
      img: "/images/H1.png",
      title: "A quick brown fox jumped over the lazy dog",
      class: "blog-meta text-center",
      branding_name: "Author Name/Quote",
      css: "  font-size: 16px;font-weight: 600;",
    },
    {
      name: "Class: contact-para  ",
      img: "/images/H1.png",
      title: "A quick brown fox jumped over the lazy dog",
      class: "contact-para text-center",
      branding_name: "Author Name/Quote",
      css: "font-size: 20px;font-style: normal;font-weight: 400;line-height: 26px; ",
    },
    {
      name: "Class: radio-group label  ",
      img: "/images/H1.png",
      title: "A quick brown fox jumped over the lazy dog",
      class: "radio-group label text-center",
      branding_name: "Radio button",
      css: "font-size: 16px;font-weight: 300;",
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
