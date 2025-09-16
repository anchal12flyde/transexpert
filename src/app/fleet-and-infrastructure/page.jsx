import FleetClient from "./FleetClient";

// Metadata for SEO and Open Graph
export const metadata = {
  title: "Fleet & Infrastructure at TransExpert",
  description:
    "Explore our modern fleet and terminal infrastructure supporting seamless freight movement across Canada, U.S., and Mexico.",
  openGraph: {
    title: "Fleet & Infrastructure at TransExpert",
    description:
      "Explore our modern fleet and terminal infrastructure supporting seamless freight movement across Canada, U.S., and Mexico.",
    url: "https://transexpert.ca/fleet-and-infrastructure",
    siteName: "TransExpert",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "TransExpert Fleet & Infrastructure",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fleet & Infrastructure at TransExpert",
    description:
      "Explore our modern fleet and terminal infrastructure supporting seamless freight movement across Canada, U.S., and Mexico.",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://transexpert.ca/fleet-and-infrastructure",
  },
};

// Server component renders the client component
export default function FleetPageWrapper() {
  return <FleetClient />;
}
