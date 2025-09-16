import CrossDockingClient from "./CrossDockingClient";

// Metadata only in server component
export const metadata = {
  title: "Cross-Docking Solutions — TransExpert",
  description:
    "Reduce dwell time and speed up delivery with TransExpert’s cross-docking solutions: optimized for urgent freight movement.",
  openGraph: {
    title: "Cross-Docking Solutions — TransExpert",
    description:
      "Reduce dwell time and speed up delivery with TransExpert’s cross-docking solutions: optimized for urgent freight movement.",
    url: "https://transexpert.ca/cross-docking",
    siteName: "TransExpert",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Cross-Docking Services - TransExpert",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cross-Docking Solutions — TransExpert",
    description:
      "Reduce dwell time and speed up delivery with TransExpert’s cross-docking solutions: optimized for urgent freight movement.",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://transexpert.ca/cross-docking",
  },
};

export default function CrossDockingPageWrapper() {
  return <CrossDockingClient />; // ✅ Client component
}
