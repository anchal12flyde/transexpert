import CertificationsClient from "./CertificationsClient";

// Metadata export allowed in server component
export const metadata = {
  title: "Certifications & Accreditations — TransExpert",
  description:
    "TransExpert holds industry-standard certifications to ensure reliability, compliance, and top‐tier service in logistics.",
  openGraph: {
    title: "Certifications & Accreditations — TransExpert",
    description:
      "TransExpert holds industry-standard certifications to ensure reliability, compliance, and top‐tier service in logistics.",
    url: "https://transexpert.ca/certifications",
    siteName: "TransExpert",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Certifications - TransExpert",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Certifications & Accreditations — TransExpert",
    description:
      "TransExpert holds industry-standard certifications to ensure reliability, compliance, and top‐tier service in logistics.",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://transexpert.ca/certifications",
  },
};

// ✅ Server component renders client component
export default function CertificationsPageWrapper() {
  return <CertificationsClient />;
}
