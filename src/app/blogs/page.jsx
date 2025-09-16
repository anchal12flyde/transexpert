import AllBlogsClient from "./AllBlogsClient";

// Metadata for SEO and Open Graph
export const metadata = {
  title: "TransExpert Blog — Insights & Logistics Trends",
  description:
    "Expert articles on cross-border freight, temperature-controlled shipping, industry compliance, sustainability & more.",
  openGraph: {
    title: "TransExpert Blog — Insights & Logistics Trends",
    description:
      "Expert articles on cross-border freight, temperature-controlled shipping, industry compliance, sustainability & more.",
    url: "https://transexpert.ca/blogs",
    siteName: "TransExpert",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "TransExpert Blogs",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TransExpert Blog — Insights & Logistics Trends",
    description:
      "Expert articles on cross-border freight, temperature-controlled shipping, industry compliance, sustainability & more.",
    images: ["/opengraph-image.png"],
  },

  alternates: {
    canonical: "https://transexpert.ca/blogs",
  },
};

// Server component renders the client component
export default function AllBlogsPageWrapper() {
  return <AllBlogsClient />;
}
