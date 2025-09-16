import ContactClient from "./ContactClient";

// Metadata for SEO and Open Graph
export const metadata = {
  title: "Contact TransExpert — Logistics Inquiries & Support",
  description:
    "Contact TransExpert for logistics service questions, customer support or partnership opportunities. We reply within 24 hours.",
  openGraph: {
    title: "Contact TransExpert — Logistics Inquiries & Support",
    description:
      "Contact TransExpert for logistics service questions, customer support or partnership opportunities. We reply within 24 hours.",
    url: "https://transexpert.ca/contact",
    siteName: "TransExpert",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Contact TransExpert",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact TransExpert — Logistics Inquiries & Support",
    description:
      "Contact TransExpert for logistics service questions, customer support or partnership opportunities. We reply within 24 hours.",
    images: ["/opengraph-image.png"],
  },

  alternates: {
    canonical: "https://transexpert.ca/ftl",
  },
};

// Server component renders the client component
export default function ContactPageWrapper() {
  return <ContactClient />;
}
