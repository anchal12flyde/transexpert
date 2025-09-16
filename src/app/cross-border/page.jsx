import CrossBorderClient from "./CrossBorderClient";

// Metadata only in server component
export const metadata = {
  title: "Cross-Border Logistics — Seamless Canada-US-Mexico Freight",
  description:
    "Navigate borders with ease. TransExpert provides compliant, efficient cross-border freight solutions across North America.",
  openGraph: {
    title: "Cross-Border Logistics — Seamless Canada-US-Mexico Freight",
    description:
      "Navigate borders with ease. TransExpert provides compliant, efficient cross-border freight solutions across North America.",
    url: "https://transexpert.ca/cross-border",
    siteName: "TransExpert",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Cross-Border Freight Services - TransExpert",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cross-Border Logistics — Seamless Canada-US-Mexico Freight",
    description:
      "Navigate borders with ease. TransExpert provides compliant, efficient cross-border freight solutions across North America.",
    images: ["/opengraph-image.png"],
  },

  alternates: {
    canonical: "https://transexpert.ca/cross-border",
  },
};

export default function CrossBorderPageWrapper() {
  return <CrossBorderClient />; 
}
