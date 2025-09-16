import PrivacyPolicyClient from "./PrivacyPolicyClient";

// Metadata for SEO and Open Graph
export const metadata = {
  title: "Privacy Policy — TransExpert",
  description:
    "Read TransExpert’s Privacy Policy to understand how we collect, protect, and use personal data.",
  openGraph: {
    title: "Privacy Policy — TransExpert",
    description:
      "Read TransExpert’s Privacy Policy to understand how we collect, protect, and use personal data.",
    url: "https://transexpert.ca/privacy-policy",
    siteName: "TransExpert",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "TransExpert Privacy Policy",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy — TransExpert",
    description:
      "Read TransExpert’s Privacy Policy to understand how we collect, protect, and use personal data.",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://transexpert.ca/privacy-policy",
  },
};

// Server component renders the client component
export default function PrivacyPolicyPageWrapper() {
  return <PrivacyPolicyClient />;
}
