import SustainabilityClient from "./SustainabilityClient";

// Metadata export allowed only in server component
export const metadata = {
  title: "Sustainability Practices — TransExpert’s Commitment",
  description:
    "Sustainability isn’t a campaign — it’s how we operate. Learn how TransExpert is minimizing environmental impact in freight logistics.",
  openGraph: {
    title: "Sustainability Practices — TransExpert’s Commitment",
    description:
      "Sustainability isn’t a campaign — it’s how we operate. Learn how TransExpert is minimizing environmental impact in freight logistics.",
    url: "https://transexpert.ca/sustainability",
    siteName: "TransExpert",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Sustainability - TransExpert",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sustainability Practices — TransExpert’s Commitment",
    description:
      "Sustainability isn’t a campaign — it’s how we operate. Learn how TransExpert is minimizing environmental impact in freight logistics.",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://transexpert.ca/sustainability",
  },
};

// ✅ Directly render client component – Next.js automatically handles this
export default function SustainabilityPageWrapper() {
  return <SustainabilityClient />;
}
