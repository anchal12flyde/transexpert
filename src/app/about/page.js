// src/app/about/page.js
import AboutPageClient from "./AboutPageClient";

// Metadata export allowed here (server component)
export const metadata = {
  title: "About TransExpert — Who We Are & Our Mission",
  description:
    "Learn about TransExpert: our commitment to precision, reliability, and sustainable logistics across Canada, the U.S., and Mexico.",

  // Canonical URL
  alternates: {
    canonical: "https://transexpert.ca/about",
  },

  openGraph: {
    title: "About TransExpert – North American Freight & Logistics",
    description: "Cross-border logistics expertise from Canada to the U.S.",
    url: "https://transexpert.ca/about",
    siteName: "TransExpert",
    images: [
      {
        url: "/opengraph-about.png",
        width: 1200,
        height: 630,
        alt: "About TransExpert",
      },
    ],
    locale: "en_CA",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "About TransExpert — Who We Are & Our Mission",
    description:
      "Learn about TransExpert: our commitment to precision, reliability, and sustainable logistics across Canada, the U.S., and Mexico.",
    images: ["/opengraph-image.png"],
  },
};

// This file is still a server component
export default function AboutPageWrapper() {
  return <AboutPageClient />; // Client component renders fine
}
