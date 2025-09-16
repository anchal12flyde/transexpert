import TempControlledClient from "./TempControlledClient";

// Metadata for SEO & social sharing
export const metadata = {
  title: "Temperature-Controlled Transport by TransExpert",
  description:
    "Maintain freshness and safety. Our temperature-controlled transport services ensure your sensitive goods are handled with precision.",
  openGraph: {
    title: "Temperature-Controlled Transport by TransExpert",
    description:
      "Maintain freshness and safety. Our temperature-controlled transport services ensure your sensitive goods are handled with precision.",
    url: "https://transexpert.ca/temperature-controlled",
    siteName: "TransExpert",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Temperature Controlled Services - TransExpert",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Temperature-Controlled Transport by TransExpert",
    description:
      "Maintain freshness and safety. Our temperature-controlled transport services ensure your sensitive goods are handled with precision.",
    images: ["/opengraph-image.png"],
  },

  alternates: {
    canonical: "https://transexpert.ca/temperature-controlled",
  },
};

export default function TempControlledPageWrapper() {
  return <TempControlledClient />; // Client component
}
