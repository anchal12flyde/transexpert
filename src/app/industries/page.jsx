import IndustriesClient from "./IndustriesClient";

// Metadata export allowed here (server component)
export const metadata = {
  title: "Industries Served by TransExpert — Retail, Manufacturing, & More",
  description:
    "We serve multiple industries including retail, manufacturing, consumer goods, and raw materials with tailored logistics solutions.",
  openGraph: {
    title: "Industries Served by TransExpert — Retail, Manufacturing, & More",
    description:
      "We serve multiple industries including retail, manufacturing, consumer goods, and raw materials with tailored logistics solutions.",
    url: "https://transexpert.ca/industries",
    siteName: "TransExpert",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "TransExpert Industries",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industries Served by TransExpert — Retail, Manufacturing, & More",
    description:
      "We serve multiple industries including retail, manufacturing, consumer goods, and raw materials with tailored logistics solutions.",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://transexpert.ca/industries",
  },
};

export default function IndustriesPageWrapper() {
  return <IndustriesClient />;
}
