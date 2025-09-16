import GetAQuoteClient from "./GetAQuoteClient";

// Metadata for SEO and social sharing
export const metadata = {
  title: "Request a Quote — TransExpert Logistics",
  description:
    "Need freight solutions tailored to you? Get a custom quote from TransExpert for full truckload, temperature-controlled, cross-border or cross-docking shipping.",
  openGraph: {
    title: "Request a Quote — TransExpert Logistics",
    description:
      "Need freight solutions tailored to you? Get a custom quote from TransExpert for full truckload, temperature-controlled, cross-border or cross-docking shipping.",
    url: "https://transexpert.ca/get-a-quote",
    siteName: "TransExpert",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Get a Quote - TransExpert",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Request a Quote — TransExpert Logistics",
    description:
      "Need freight solutions tailored to you? Get a custom quote from TransExpert for full truckload, temperature-controlled, cross-border or cross-docking shipping.",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://transexpert.ca/get-a-quote",
  },
};

// Server component renders client component
export default function GetAQuotePageWrapper() {
  return <GetAQuoteClient />;
}
