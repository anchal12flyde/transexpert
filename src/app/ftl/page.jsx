import FTLClient from "./FTLClient";

// Metadata for SEO & social sharing
export const metadata = {
  title: "Full Truckload Services — TransExpert",
  description:
    "Move large shipments with confidence. TransExpert offers dedicated capacity, efficient routes, and reliable full truckload services.",
  openGraph: {
    title: "Full Truckload Services — TransExpert",
    description:
      "Move large shipments with confidence. TransExpert offers dedicated capacity, efficient routes, and reliable full truckload services.",
    url: "https://transexpert.ca/ftl",
    siteName: "TransExpert",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "FTL Services - TransExpert",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Full Truckload Services — TransExpert",
    description:
      "Move large shipments with confidence. TransExpert offers dedicated capacity, efficient routes, and reliable full truckload services.",
    images: ["/opengraph-image.png"],
  },
  
  alternates: {
    canonical: "https://transexpert.ca/ftl",
  },
};

export default function FTLPageWrapper() {
  return <FTLClient />; // Client component
}
