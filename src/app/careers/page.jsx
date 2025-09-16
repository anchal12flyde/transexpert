import CareersClient from "./CareersClient";

// Metadata only (server component)
export const metadata = {
  title: "Careers – TransExpert",
  description:
    "Explore open positions and join our team at TransExpert. Drivers, coordinators, and corporate roles available.",
  openGraph: {
    title: "Careers – TransExpert",
    description:
      "Find the perfect job and grow your career with TransExpert in cross-border logistics.",
    url: "https://transexpert.ca/careers",
    siteName: "TransExpert",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "TransExpert Careers",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers – TransExpert",
    description:
      "Join our team and explore opportunities in logistics and cross-border freight.",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://transexpert.ca/careers",
  },
};

export default function CareersPageWrapper() {
  // ⚠️ Do NOT use any hook here; only render the client component
  return <CareersClient />;
}
