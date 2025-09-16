import TermsClient from "./TermsClient";

// Metadata for SEO and Open Graph
export const metadata = {
  title: "Terms & Conditions — TransExpert",
  description:
    "The Terms and Conditions governing services, liability, and usage for TransExpert’s logistics offerings.",
  openGraph: {
    title: "Terms & Conditions — TransExpert",
    description:
      "The Terms and Conditions governing services, liability, and usage for TransExpert’s logistics offerings.",
    url: "https://transexpert.ca/terms-and-conditions",
    siteName: "TransExpert",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "TransExpert Terms & Conditions",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions — TransExpert",
    description:
      "The Terms and Conditions governing services, liability, and usage for TransExpert’s logistics offerings.",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://transexpert.ca/ftl",
  },
};

// Server component renders the client component
export default function TermsPageWrapper() {
  return <TermsClient />;
}
